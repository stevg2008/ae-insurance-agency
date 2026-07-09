import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const blogSlugs = [
  "beat-the-heat-smart-ways-to-stay-cool-all-summer-long",
  "bikes-kayaks-and-rooftop-gear-what-your-insurance-covers",
  "breaking-down-home-auto-and-life-coverage",
  "breathe-easy-the-surprising-benefits-of-houseplants-in-your-home",
  "concierge-medical-care-a-new-way-to-better-health",
  "coverage-for-college-students-are-they-still-protected-under-your-plan",
  "discover-the-advantages-of-independent-insurance-agents",
  "do-healthy-people-really-need-health-insurance",
  "does-your-health-insurance-cover-mental-health-services",
  "does-your-health-insurance-cover-nutrition-counseling",
  "er-urgent-care-or-virtual-visit-where-to-go-and-what-itll-cost-you",
  "flexible-spending-accounts-a-smart-tool-to-save-on-health-and-dependent-care-costs",
  "funding-a-business-buyout-with-life-insurance-what-every-partner-should-know",
  "health-insurance-for-self-employed-professionals-what-are-your-options",
  "healthcare-sharing-ministries-vs-health-insurance-whats-the-difference",
  "healthy-living-its-impact-on-insurance-rates",
  "how-does-medicare-part-c-compare-to-original-medicare-in-florida",
  "how-one-life-insurance-feature-saved-a-financial-plan",
  "how-a-medicare-broker-near-me-helped-local-seniors-find-better-coverage",
  "key-man-insurance-explained-coverage-structure-and-tax-implications",
  "life-insurance-myths-debunked-what-you-really-need-to-know",
  "life-insurance-for-a-non-working-spouse-or-partner-protecting-the-priceless",
  "medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you",
  "medicare-advantage-vs-private-health-insurance-in-florida",
  "new-year-new-coverage-why-january-is-the-perfect-time-to-reassess-your-health-insurance-needs",
  "ocean-lakes-and-pools-oh-my-tips-for-a-safe-summer-around-water",
  "questions-to-ask-before-choosing-an-insurance-policy",
  "rip-tides-what-they-are-how-to-spot-them-and-what-to-do-if-youre-caught-in-one",
  "safe-travels-how-to-prepare-your-family-for-an-international-vacation",
  "smart-ways-to-cut-insurance-costs-without-sacrificing-protection",
  "spring-into-wellness-how-to-boost-your-health-and-energy-this-season",
  "term-insurance-a-smart-way-to-secure-your-familys-future",
  "term-life-insurance-vs-accidental-death-and-dismemberment-whats-the-difference",
  "the-benefits-of-visiting-your-farmers-market-this-summer",
  "the-hidden-benefits-of-health-insurance-you-may-not-be-using",
  "the-overlooked-connection-between-dental-visits-and-overall-health",
  "the-ultimate-spring-bucket-list-fun-activities-to-enjoy-the-season",
  "top-10-u-s-roadside-attractions-to-visit-this-summer",
  "top-5-common-insurance-myths-and-the-truth-behind-them",
  "understanding-term-life-insurance-convertibility-your-future-self-may-thank-you",
  "understanding-universal-life-insurance-is-it-right-for-you",
  "understanding-your-insurance-options",
  "understanding-the-eob-what-is-it-and-why-should-you-care",
  "understanding-the-unique-challenge",
  "walk-first-wander-later-the-travel-hack-youll-wish-youd-known-sooner",
  "what-happens-if-i-outlive-my-term-life-insurance-policy",
  "what-happens-if-you-get-hurt-on-vacation",
  "what-type-of-life-insurance-should-miami-small-business-owners-choose",
  "what-to-do-if-you-get-a-surprise-medical-bill",
  "what-to-know-about-medicares-new-wiser-model-aiming-for-smarter-spending-not-less-care",
  "whats-the-difference-between-medigap-plan-g-vs-plan-n-in-florida",
  "when-life-happens-building-a-family-emergency-plan-that-actually-works",
  "which-medicare-option-works-best-for-snowbirds",
  "which-medicare-plan-has-lower-out-of-pocket-costs",
  "which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida",
  "which-medicare-plan-is-better-for-dental-and-vision-coverage",
  "which-medicare-plan-is-better-for-frequent-doctor-visits-in-florida",
  "why-dental-isnt-covered-by-health-insurance-plans-and-why-that-matters",
  "why-insurance-should-be-part-of-your-2025-resolutions",
  "why-some-doctors-prefer-patients-with-medicare-supplement-plans",
  "why-your-dentist-might-be-your-most-important-healthcare-provider",
  "why-a-medicare-agent-near-me-may-be-better-than-insurance-comparison-websites",
  "why-the-lowest-premium-might-cost-you-more-in-the-long-run",
  "would-you-bet-7-000-on-your-health-this-year",
  "year-end-insurance-checklist-ensure-youre-covered-for-the-year-ahead",
  "your-spouse-isnt-eligible-for-medicare-yet--now-what",
  "youre-retiring-at-68--did-you-miss-your-medigap-enrollment-window",
  "which-medicare-plan-is-better-for-specialist-visits",
  "what-is-the-difference-between-hmo-and-ppo-medicare-advantage-plans",
  "what-is-the-difference-between-medicare-part-a-and-part-b",
  "how-does-medicare-advantage-compare-to-medigap-for-travel-coverage",
  "how-to-find-the-right-medicare-broker-near-me-in-florida",
  "turning-65-in-florida-your-complete-medicare-enrollment-checklist",
  "medicare-enrollment-and-costs-faq-2026",
  "medicare-in-miami-2026",
];

// Approved content pruning (docs/redirect-final-review.md): retired lifestyle posts.
// Their /blog/ and /blogs/ URLs both 301 straight to /blogs — no chains.
// walk-first-wander-later is NOT here yet: it redirects to the travel article
// only after that article's Phase 3 rewrite ships (approved sequencing).
const retiredSlugs = [
  "breathe-easy-the-surprising-benefits-of-houseplants-in-your-home",
  "rip-tides-what-they-are-how-to-spot-them-and-what-to-do-if-youre-caught-in-one",
  "ocean-lakes-and-pools-oh-my-tips-for-a-safe-summer-around-water",
  "the-ultimate-spring-bucket-list-fun-activities-to-enjoy-the-season",
  "top-10-u-s-roadside-attractions-to-visit-this-summer",
  "bikes-kayaks-and-rooftop-gear-what-your-insurance-covers",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  async redirects() {
    return [
      // Blog redirects: old Webflow /blog/[slug] → new /blogs/[slug]
      // (retired slugs excluded — they get direct-to-index rules below to avoid chains)
      ...blogSlugs
        .filter((slug) => !retiredSlugs.includes(slug))
        .map((slug) => ({
          source: `/blog/${slug}`,
          destination: `/blogs/${slug}`,
          permanent: true,
        })),
      // Retired lifestyle posts → blog index (single hop from both URL generations)
      ...retiredSlugs.flatMap((slug) => [
        { source: `/blog/${slug}`, destination: "/blogs", permanent: true },
        { source: `/blogs/${slug}`, destination: "/blogs", permanent: true },
      ]),
      // Webflow root /blog → /blogs
      { source: "/blog", destination: "/blogs", permanent: true },
      // Alternate /our-blog/ path found in GSC
      { source: "/our-blog/:slug*", destination: "/blogs/:slug*", permanent: true },
      // Webflow broken nested URL pattern found in GSC
      { source: "/blog-your-spouse-isnt-eligible-for-medicare-yet-now-what/:slug*", destination: "/blogs/:slug*", permanent: true },
      // Legacy Webflow service subpages (404ing with live rankings — see docs/2026-07-content-audit.md §3).
      // Specific medicare-coverage slugs map to their closest existing guide; everything else
      // rolls up to its service page. Catch-alls stay LAST within each section so the
      // slug-specific rules above them win.
      // ⚠️ If real subpages are ever added under /retirement, /life-insurance, or
      // /critical-illness (roadmap: May 2027), replace that section's catch-all with
      // per-slug redirects first — redirects run before routes and would shadow the new pages.
      { source: "/medicare-coverage/what-is-medicare-supplement-medigap-insurance", destination: "/medicare-coverage/medicare-supplement-plans-medigap", permanent: true },
      { source: "/medicare-coverage/different-types-of-medicare-advantage-plans", destination: "/medicare-coverage/medicare-advantage-plans", permanent: true },
      { source: "/retirement/:slug+", destination: "/retirement", permanent: true },
      { source: "/life-insurance/:slug+", destination: "/life-insurance", permanent: true },
      { source: "/critical-illness/:slug+", destination: "/critical-illness", permanent: true },
      // Legacy Webflow standalone pages
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/:slug+", destination: "/contact", permanent: true },
      { source: "/webinarregistration", destination: "/watch", permanent: true },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "ae-insurance-agency-llc",

  project: "ae-insurance-agency",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
