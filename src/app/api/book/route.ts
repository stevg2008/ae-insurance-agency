import { NextRequest, NextResponse } from "next/server";
import {
  RE_EMAIL, RE_PHONE, RE_ZIP,
  normalizePhone, normalizeEmail,
  isBotValue,
} from "@/lib/formValidation";
import {
  isRateLimited, verifyTurnstile,
  isSpamName, logRejection, getClientIp,
} from "@/lib/spam";

const MIN_SUBMIT_MS = 3_000; // reject if filled out in under 3 seconds

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  // ── Rate limiting ──────────────────────────────────────────────────────────
  if (isRateLimited(ip)) {
    logRejection("rate_limited", { ip, form: "book" });
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    firstName, lastName, email, phone, zip,
    _hp, _t, cf_token,
  } = body as {
    firstName?: string; lastName?: string; email?: string;
    phone?: string;    zip?: string;
    _hp?: string;  _t?: number;  cf_token?: string;
  };

  // ── Honeypot ───────────────────────────────────────────────────────────────
  if (_hp) {
    logRejection("honeypot", { ip, form: "book" });
    return NextResponse.json({ success: true }); // silent — bot thinks it worked
  }

  // ── Speed check ────────────────────────────────────────────────────────────
  if (typeof _t === "number" && _t < MIN_SUBMIT_MS) {
    logRejection("too_fast", { ip, ms: _t, form: "book" });
    return NextResponse.json({ success: true }); // silent
  }

  // ── Cloudflare Turnstile ───────────────────────────────────────────────────
  const turnstileOk = await verifyTurnstile(cf_token ?? "", ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Security check failed. Please refresh and try again." },
      { status: 403 }
    );
  }

  // ── Normalize ──────────────────────────────────────────────────────────────
  const fn   = (firstName ?? "").trim();
  const ln   = (lastName  ?? "").trim();
  const em   = normalizeEmail(email  ?? "");
  const ph   = normalizePhone(phone  ?? "");
  const zp   = (zip ?? "").trim();

  // ── Server-side field validation ───────────────────────────────────────────
  const errors: Record<string, string> = {};
  if (!fn)                      errors.firstName = "First name is required.";
  if (!ln)                      errors.lastName  = "Last name is required.";
  if (!RE_EMAIL.test(em))       errors.email     = "Enter a valid email address.";
  if (!RE_PHONE.test(ph))       errors.phone     = "Enter a valid U.S. phone number.";
  if (!RE_ZIP.test(zp))         errors.zip       = "Enter a valid 5-digit ZIP code.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { error: "Please check your information.", fields: errors },
      { status: 400 }
    );
  }

  // ── Bot value detection ────────────────────────────────────────────────────
  if (isSpamName(fn) || isSpamName(ln) || isBotValue(em)) {
    logRejection("bot_values", { ip, firstName: fn, lastName: ln, form: "book" });
    return NextResponse.json({ success: true }); // silent
  }

  // ── GHL webhook ────────────────────────────────────────────────────────────
  const webhookUrl = process.env.GHL_BOOK_WEBHOOK_URL;
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
        email:      em,
        phone:      ph,
        zip_code:   zp,
        source:     "Website — Medicare Decoded Book",
      }),
    });

    if (!ghlRes.ok) {
      console.error("[GHL] book webhook error", ghlRes.status);
      return NextResponse.json({ error: "GHL error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[GHL] book webhook network error", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
