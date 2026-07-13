// Server-only spam protection utilities.
// Never import this file from client components.

import { isBotValue } from "./formValidation";

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, per serverless instance)
// Vercel may run multiple concurrent instances, so this isn't a global hard
// cap — it stops naive single-IP bot loops without requiring Redis/KV.
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;  // 1 minute window

/**
 * Returns true if this IP has exceeded `max` submissions in the last minute.
 * Side-effect: records this request if under the limit.
 */
export function isRateLimited(ip: string, max = 3): boolean {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= max) return true;
  rateLimitMap.set(ip, [...recent, now]);
  return false;
}

// ---------------------------------------------------------------------------
// Cloudflare Turnstile server-side verification
// ---------------------------------------------------------------------------
const CF_SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Verifies a Cloudflare Turnstile token with the secret key.
 * Returns true if valid. If no secret key is configured (local dev),
 * verification is skipped and the function returns true.
 */
export async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Dev mode — no key configured, allow all submissions
    console.warn("[TURNSTILE] TURNSTILE_SECRET_KEY not set — skipping verification");
    return true;
  }
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token, remoteip: ip });
    const res = await fetch(CF_SITEVERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!data.success) {
      logRejection("turnstile_failed", { "error-codes": data["error-codes"], ip });
    }
    return data.success === true;
  } catch (err) {
    console.error("[TURNSTILE] Verification request failed:", err);
    // Fail open on network error — don't block real users if CF is unreachable
    return true;
  }
}

// ---------------------------------------------------------------------------
// Spam field detection
// ---------------------------------------------------------------------------

/**
 * Returns true if first or last name looks like a bot submission.
 */
export function isSpamName(name: string): boolean {
  const trimmed = name.trim();
  if (trimmed.length < 2) return false; // handled by required validation
  return isBotValue(trimmed);
}

// ---------------------------------------------------------------------------
// Rejection logging
// All blocked submissions are logged to Vercel function logs (visible in
// the Vercel dashboard under Functions → Runtime Logs).
// ---------------------------------------------------------------------------
export function logRejection(
  reason: string,
  meta: Record<string, unknown> = {}
): void {
  console.error("[SPAM_BLOCK]", {
    reason,
    ...meta,
    ts: new Date().toISOString(),
  });
}

// ---------------------------------------------------------------------------
// Helpers for extracting client IP from Next.js requests
// ---------------------------------------------------------------------------
export function getClientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}
