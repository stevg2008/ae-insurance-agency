// Client-side Sentry initialization.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Known crawler user-agent substrings to filter from Sentry noise.
// Add new entries here as they appear; do NOT add Googlebot — we want
// to know if React hydration fails for real crawlers.
const CRAWLER_UA_PATTERNS = [
  "SEBot",
  "SEBot-WA",
  "AhrefsBot",
  "SemrushBot",
  "DotBot",
  "MJ12bot",
  "PetalBot",
];

function isCrawler(): boolean {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  return CRAWLER_UA_PATTERNS.some((pattern) =>
    ua.toLowerCase().includes(pattern.toLowerCase())
  );
}

Sentry.init({
  dsn: "https://c00afc330c368f415e9f5ed6257cd8b8@o4511701670166528.ingest.de.sentry.io/4511701709357136",

  tracesSampleRate: 1,

  enableLogs: true,

  beforeSend(event) {
    // Drop events from known crawlers so they don't pollute the issue stream.
    // Googlebot and other indexing bots that identify themselves are NOT in the
    // filter list — we want visibility if those environments encounter errors.
    if (isCrawler()) {
      return null;
    }
    return event;
  },
});
