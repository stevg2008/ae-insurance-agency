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
    logRejection("rate_limited", { ip, form: "register" });
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
    name, email, phone, months,
    _hp, _t, cf_token,
  } = body as {
    name?: string; email?: string; phone?: string; months?: string;
    _hp?: string; _t?: number; cf_token?: string;
  };

  // Honeypot
  if (_hp) {
    logRejection("honeypot", { ip, form: "register" });
    return NextResponse.json({ success: true });
  }

  // Speed check
  if (typeof _t === "number" && _t < MIN_SUBMIT_MS) {
    logRejection("too_fast", { ip, ms: _t, form: "register" });
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
  const fullName = (name  ?? "").trim();
  const em       = normalizeEmail(email ?? "");
  const ph       = normalizePhone(phone ?? "");
  const mo       = (months ?? "").trim();

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!fullName)                     errors.name  = "Full name is required.";
  if (!RE_EMAIL.test(em))            errors.email = "Enter a valid email address.";
  if (!ph || !RE_PHONE.test(ph))     errors.phone = "Enter a valid U.S. phone number.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { error: "Please check your information.", fields: errors },
      { status: 400 }
    );
  }

  // Bot value detection
  const parts = fullName.split(" ");
  const firstPart = parts[0] ?? "";
  if (isSpamName(firstPart) || isBotValue(fullName) || isBotValue(em)) {
    logRejection("bot_values", { ip, name: fullName, form: "register" });
    return NextResponse.json({ success: true });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:             fullName,
        first_name:       parts[0] ?? fullName,
        last_name:        parts.slice(1).join(" "),
        email:            em,
        phone:            ph,
        months_until_65:  mo,
        source:           "Website — Medicare Made Simple Webinar",
      }),
    });

    if (!ghlRes.ok) {
      console.error("[GHL] register webhook error", ghlRes.status);
      return NextResponse.json({ error: "GHL error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[GHL] register webhook network error", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
