import { NextRequest, NextResponse } from "next/server";
import {
  RE_EMAIL, RE_PHONE,
  normalizePhone, normalizeEmail,
  isBotValue,
} from "@/lib/formValidation";
import {
  isRateLimited, verifyTurnstile,
  isSpamName, logRejection, getClientIp,
} from "@/lib/spam";

const MIN_SUBMIT_MS = 3_000;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  if (isRateLimited(ip)) {
    logRejection("rate_limited", { ip, form: "contact" });
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    firstName, lastName, email, phone, bestTime, message,
    _hp, _t, cf_token,
  } = body as {
    firstName?: string; lastName?: string; email?: string;
    phone?: string;    bestTime?: string; message?: string;
    _hp?: string;  _t?: number;  cf_token?: string;
  };

  // Honeypot
  if (_hp) {
    logRejection("honeypot", { ip, form: "contact" });
    return NextResponse.json({ success: true });
  }

  // Speed check
  if (typeof _t === "number" && _t < MIN_SUBMIT_MS) {
    logRejection("too_fast", { ip, ms: _t, form: "contact" });
    return NextResponse.json({ success: true });
  }

  // Turnstile
  const turnstileOk = await verifyTurnstile(cf_token ?? "", ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Security check failed. Please refresh and try again." },
      { status: 403 }
    );
  }

  // Normalize
  const fn  = (firstName ?? "").trim();
  const ln  = (lastName  ?? "").trim();
  const em  = normalizeEmail(email ?? "");
  const ph  = normalizePhone(phone ?? "");
  const msg = (message   ?? "").trim();
  const bt  = (bestTime  ?? "").trim();

  // Server-side validation (firstName + phone are required on this form)
  const errors: Record<string, string> = {};
  if (!fn)                           errors.firstName = "First name is required.";
  if (!ph || !RE_PHONE.test(ph))     errors.phone     = "Enter a valid U.S. phone number.";
  if (em && !RE_EMAIL.test(em))      errors.email     = "Enter a valid email address.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { error: "Please check your information.", fields: errors },
      { status: 400 }
    );
  }

  // Bot value detection
  if (isSpamName(fn) || (ln && isSpamName(ln)) || (em && isBotValue(em))) {
    logRejection("bot_values", { ip, firstName: fn, form: "contact" });
    return NextResponse.json({ success: true });
  }

  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: fn,
        last_name:  ln,
        name:       `${fn} ${ln}`.trim(),
        email:      em,
        phone:      ph,
        best_time:  bt,
        message:    msg,
        source:     "Website — Contact Page",
      }),
    });

    if (!ghlRes.ok) {
      console.error("[GHL] contact webhook error", ghlRes.status);
      return NextResponse.json({ error: "GHL error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[GHL] contact webhook network error", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
