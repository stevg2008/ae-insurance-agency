"use client";

/**
 * Cloudflare Turnstile widget — reusable across all A&E forms.
 *
 * Turnstile "managed" mode is invisible for real users:
 *  - Legitimate visitors get a token automatically (no interaction required).
 *  - Suspected bots see a brief challenge widget.
 *
 * No npm package required — CF Turnstile works via a script tag + JS API.
 *
 * Usage:
 *   const [cfToken, setCfToken] = useState<string | null>(null);
 *   <TurnstileWidget onToken={setCfToken} onExpire={() => setCfToken(null)} />
 *
 * Then include `cf_token: cfToken ?? ""` in your POST body.
 */

import { useEffect, useRef, useCallback } from "react";

// ---------------------------------------------------------------------------
// Global type declarations for the Turnstile JS API
// ---------------------------------------------------------------------------
declare global {
  interface Window {
    turnstile?: TurnstileAPI;
  }
}

interface TurnstileAPI {
  render: (container: HTMLElement, params: TurnstileRenderParams) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

interface TurnstileRenderParams {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  theme?: "light" | "dark" | "auto";
  appearance?: "always" | "execute" | "interaction-only";
  size?: "normal" | "compact" | "flexible";
}

// ---------------------------------------------------------------------------
// Script loader — idempotent, safe to call multiple times
// ---------------------------------------------------------------------------
const SCRIPT_ID = "cf-turnstile-script";

function ensureTurnstileScript() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src =
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  document.head.appendChild(script);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
interface Props {
  /** Called with the token once Turnstile validates the visitor. */
  onToken: (token: string) => void;
  /** Called when the token expires (after ~5 minutes). */
  onExpire?: () => void;
  /** Called if Turnstile encounters a network error. */
  onError?: () => void;
  /** Pass true to reset the widget (e.g. after a failed submission). */
  resetKey?: number;
  theme?: "light" | "dark" | "auto";
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function TurnstileWidget({
  onToken,
  onExpire,
  onError,
  resetKey,
  theme = "auto",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef  = useRef<string | null>(null);

  // Stable callbacks so they don't re-trigger the mount effect
  const stableOnToken  = useCallback((t: string) => onToken(t),  [onToken]);
  const stableOnExpire = useCallback(() => { onExpire?.(); }, [onExpire]);
  const stableOnError  = useCallback(() => { onError?.(); },  [onError]);

  // Mount the widget once the script is loaded
  useEffect(() => {
    if (!SITE_KEY) return; // dev: no key configured, skip

    ensureTurnstileScript();

    let intervalId: ReturnType<typeof setInterval>;

    function mount() {
      if (!containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) return; // already mounted
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: stableOnToken,
        "expired-callback": stableOnExpire,
        "error-callback": stableOnError,
        theme,
        // "always" renders the compact widget inline — real users see a brief
        // checkmark; suspected bots see an audio/visual challenge.
        appearance: "always",
        size: "flexible",
      });
    }

    if (window.turnstile) {
      mount();
    } else {
      intervalId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(intervalId);
          mount();
        }
      }, 50);
    }

    return () => {
      clearInterval(intervalId);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [stableOnToken, stableOnExpire, stableOnError, theme]);

  // Reset when the parent requests it (e.g. on submit failure)
  useEffect(() => {
    if (resetKey === undefined || resetKey === 0) return;
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetKey]);

  // If no site key is configured, render nothing (local dev)
  if (!SITE_KEY) return null;

  return (
    <div
      ref={containerRef}
      aria-label="Security verification"
      className="mt-1"
    />
  );
}
