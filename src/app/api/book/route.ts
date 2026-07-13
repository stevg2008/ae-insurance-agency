import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// In-memory rate limiter: IP → recent submission timestamps
// Works within a single serverless instance. Vercel may spin up multiple
// instances under load, so this isn't a hard global limit — it stops naive
// single-IP bot loops without requiring external infrastructure.
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 3; // max 3 submissions per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;
  rateLimitMap.set(ip, [...recent, now]);
  return false;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RE_PHONE = /^\+?1?\s*[-.]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const RE_ZIP = /^\d{5}$/;
const MIN_SUBMIT_MS = 3_000; // reject submissions faster than 3 seconds

export async function POST(req: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
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

  const { firstName, lastName, email, phone, zip, _hp, _t } = body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    zip?: string;
    _hp?: string;
    _t?: number;
  };

  // ── Honeypot ───────────────────────────────────────────────────────────────
  // Hidden field — real users leave it blank, bots fill it in.
  // Silently succeed so bots don't learn they were blocked.
  if (_hp) {
    return NextResponse.json({ success: true });
  }

  // ── Speed check ────────────────────────────────────────────────────────────
  // A real human takes at least 3 seconds to read the form and fill it out.
  if (typeof _t === "number" && _t < MIN_SUBMIT_MS) {
    return NextResponse.json({ success: true }); // silent reject
  }

  // ── Server-side field validation (never trust the client) ──────────────────
  const errors: Record<string, string> = {};
  if (!firstName?.trim()) errors.firstName = "First name is required.";
  if (!lastName?.trim()) errors.lastName = "Last name is required.";
  if (!email?.trim() || !RE_EMAIL.test(email.trim()))
    errors.email = "Enter a valid email address.";
  if (!phone?.trim() || !RE_PHONE.test(phone.trim()))
    errors.phone = "Enter a valid U.S. phone number.";
  if (!zip?.trim() || !RE_ZIP.test(zip.trim()))
    errors.zip = "Enter a valid 5-digit ZIP code.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { error: "Please check your information and try again.", fields: errors },
      { status: 400 }
    );
  }

  // ── GHL webhook ────────────────────────────────────────────────────────────
  const webhookUrl = process.env.GHL_BOOK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName!.trim(),
        last_name: lastName!.trim(),
        email: email!.trim(),
        phone: phone!.trim(),
        zip_code: zip!.trim(),
        source: "Website — Medicare Decoded Book",
      }),
    });

    if (!ghlRes.ok) {
      return NextResponse.json({ error: "GHL error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
