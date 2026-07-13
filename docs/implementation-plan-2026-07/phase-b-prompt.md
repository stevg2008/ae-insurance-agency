# Phase B — Redirect Architecture + Schema for Tools
## Self-Contained Claude Code Prompt

Copy the entire block below and paste it into a new Claude Code session opened in the medicare-site project directory.

---

```
You are implementing Phase B of the A&E Insurance Agency SEO plan. This is the Redirect Architecture phase.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Medicare insurance broker
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for project conventions — read it first

BUSINESS RULES (NON-NEGOTIABLE):
- NEVER break existing redirects that are working — this would cause 404s on pages that currently have GSC impressions
- NEVER create redirect chains (A→B→C must become A→C)
- NEVER add redirects to the new subpage URLs — those URLs become real pages in Phase C and D
- Run npx tsc --noEmit after every TypeScript file change
- Run npm run build and verify no errors before deploying

CRITICAL WARNING:
The catch-all redirects `/retirement/:slug+`, `/life-insurance/:slug+`, and `/critical-illness/:slug+` in next.config.ts currently shadow ANY new pages created under those routes. Next.js processes redirects BEFORE routes. This means if you deploy a new page at /retirement/retirement-planning-tools without first removing the catch-all, the page will be completely invisible and users/Google will still hit the redirect. Phase B must be deployed BEFORE or simultaneously with Phase C/D page creation.

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. next.config.ts (read the complete file — understand every redirect rule)
3. src/app/sitemap.ts
4. src/app/tools/medicare-enrollment-calculator/page.tsx
5. src/app/tools/irmaa-calculator/page.tsx
6. src/components/seo/LocalBusinessSchema.tsx (to see WebApplication schema pattern)

OBJECTIVE:
1. Replace three catch-all redirects with per-slug rules, enabling real subpages to be created
2. Add WebApplication schema to all 4 calculator tool pages
3. Add BreadcrumbList schema to all 7 medicare-coverage pillar pages
4. Add VideoObject schema to the /watch webinar page

---

TASK B1-B6 — Replace Catch-All Redirects with Per-Slug Rules (P0 — CRITICAL)

File: next.config.ts

PREREQUISITE: Before making changes, read the current next.config.ts fully. Note the existing catch-all redirects:
  { source: "/retirement/:slug+", destination: "/retirement", permanent: true },
  { source: "/life-insurance/:slug+", destination: "/life-insurance", permanent: true },
  { source: "/critical-illness/:slug+", destination: "/critical-illness", permanent: true },

These three lines must be REPLACED. Do NOT simply add new rules above them — remove these lines entirely and replace with the per-slug list below.

REPLACEMENT REDIRECT RULES:

Remove the three catch-all lines and replace with these specific per-slug redirects:

```ts
// ─── Retirement subpages: Webflow slugs that get real pages are EXCLUDED
// (retirement-planning-tools, social-security-and-medicare-coordination,
//  retirement-income-planning, long-term-care-and-recovery-planning).
// All other Webflow /retirement/* slugs still redirect to /retirement.
// When in doubt, add new /retirement/[unknown-slug] here as a redirect to /retirement.

// ─── Life insurance subpages: Getting real pages — excluded from redirects:
// permanent-life-insurance, term-life-insurance,
// final-expense-and-guaranteed-issue-insurance.
// Other known Webflow life insurance slugs → redirect to /life-insurance:
{ source: "/life-insurance/navigating-life-insurance", destination: "/life-insurance", permanent: true },
{ source: "/life-insurance/life-insurance-comparison-term-vs-permanent", destination: "/life-insurance", permanent: true },
{ source: "/life-insurance/what-is-universal-life-insurance", destination: "/life-insurance", permanent: true },
{ source: "/life-insurance/:slug+", destination: "/life-insurance", permanent: true },
// ↑ Keep this catch-all LAST after the specific rules above — it catches any
//   /life-insurance/ slugs not covered above. The new real pages (permanent-life-insurance,
//   term-life-insurance, final-expense-and-guaranteed-issue-insurance) are NOT in this
//   catch-all because Next.js App Router routes take precedence over redirects for existing
//   pages — BUT ONLY if no catch-all matches first. Safe approach: remove slug-specific
//   redirects for pages that will become real routes and keep the catch-all for everything else.

// ─── ACTUALLY: The safest approach for the catch-all problem:
// The new pages get REMOVED from the redirect rules entirely.
// The catch-all is kept for everything NOT getting a real page.
// Next.js routes (page.tsx files) DO override redirect catch-alls because
// redirects are checked source-pattern first — BUT a catch-all :slug+ matches
// ANY path including retirement-planning-tools.
// The ONLY safe solution: explicit per-slug redirects for the non-page slugs,
// with NO catch-all for the parent route section.
```

ACTUAL IMPLEMENTATION:

Read next.config.ts carefully. The safest pattern is:

For /retirement/:slug+, replace the ONE catch-all line with:
```ts
// Retirement: specific redirects for Webflow slugs NOT getting real pages
// (retirement-planning-tools, social-security-and-medicare-coordination,
//  retirement-income-planning, long-term-care-and-recovery-planning are getting REAL PAGES)
// Any other /retirement/* slug found in GSC → add here as a redirect to /retirement
// If no other slugs exist in GSC, the catch-all can be removed entirely.
```
NOTE: If there are no other /retirement/* GSC slugs besides the four getting real pages, simply REMOVE the /retirement/:slug+ catch-all entirely. The four new pages will handle their own routes.

For /life-insurance/:slug+, replace with:
```ts
{ source: "/life-insurance/navigating-life-insurance", destination: "/life-insurance", permanent: true },
{ source: "/life-insurance/life-insurance-comparison-term-vs-permanent", destination: "/life-insurance", permanent: true },
{ source: "/life-insurance/what-is-universal-life-insurance", destination: "/life-insurance", permanent: true },
// permanent-life-insurance, term-life-insurance, and final-expense-and-guaranteed-issue-insurance
// are getting real pages — do NOT add them here
```
(Remove the `/life-insurance/:slug+` catch-all entirely after adding the specific rules above)

For /critical-illness/:slug+, replace with:
```ts
{ source: "/critical-illness/critical-illness-and-cancer-insurance", destination: "/critical-illness/cancer-insurance-florida", permanent: true },
// hospital-indemnity-plans is getting a real page — do NOT add it here
```
(Remove the `/critical-illness/:slug+` catch-all entirely after adding the specific rule above)

IMPORTANT: The /critical-illness/critical-illness-and-cancer-insurance redirect points to /critical-illness/cancer-insurance-florida (the new, better URL) — not to /critical-illness. This is correct: the legacy Webflow URL redirects to the new real page.

After making redirect changes:
1. npm run build (confirms Next.js accepts the redirect configuration)
2. VERIFY: curl -I "https://www.aeinsurancefl.com/life-insurance/navigating-life-insurance" should return 301 to /life-insurance
3. DO NOT test the new page URLs yet — pages don't exist until Phase C/D

---

TASK B7 — Add WebApplication Schema to All 4 Calculator Pages (P1 — 2 hours)

Create a new server component: src/components/seo/WebApplicationSchema.tsx

```tsx
interface WebApplicationSchemaProps {
  name: string;
  url: string;
  description: string;
}

export default function WebApplicationSchema({ name, url, description }: WebApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url,
    description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@id": "https://www.aeinsurancefl.com/#organization",
    },
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Then import and render WebApplicationSchema in each calculator page.tsx:

/tools/medicare-enrollment-calculator/page.tsx:
  name: "Medicare Initial Enrollment Period Calculator"
  url: "https://www.aeinsurancefl.com/tools/medicare-enrollment-calculator"
  description: "Calculate your Medicare Initial Enrollment Period. Enter your date of birth to find the exact 7-month window when you can enroll without penalty."

/tools/part-b-penalty-calculator/page.tsx:
  name: "Medicare Part B Late Enrollment Penalty Calculator"
  url: "https://www.aeinsurancefl.com/tools/part-b-penalty-calculator"
  description: "Calculate your Medicare Part B late enrollment penalty. Find out how much your monthly premium increases for each 12-month period you delayed enrolling."

/tools/part-d-penalty-calculator/page.tsx:
  name: "Medicare Part D Late Enrollment Penalty Calculator"
  url: "https://www.aeinsurancefl.com/tools/part-d-penalty-calculator"
  description: "Calculate your Medicare Part D late enrollment penalty for 2026. Determine your monthly surcharge for delaying prescription drug coverage enrollment."

/tools/irmaa-calculator/page.tsx:
  name: "2026 Medicare IRMAA Calculator"
  url: "https://www.aeinsurancefl.com/tools/irmaa-calculator"
  description: "Calculate your 2026 Medicare IRMAA income-related surcharge for Part B and Part D based on your modified adjusted gross income."

Also add HowTo schema to the enrollment calculator (most impactful for rich results):

In /tools/medicare-enrollment-calculator/page.tsx, add a second JSON-LD script alongside WebApplicationSchema:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Find Your Medicare Initial Enrollment Period",
      "description": "Use this free calculator to find the exact 7-month window when you can first enroll in Medicare without facing late enrollment penalties.",
      "totalTime": "PT2M",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Enter Your Date of Birth", "text": "Enter the month and year you turn 65 in the calculator." },
        { "@type": "HowToStep", "position": 2, "name": "View Your 7-Month Enrollment Window", "text": "The calculator shows your Initial Enrollment Period: 3 months before you turn 65, the month you turn 65, and 3 months after." },
        { "@type": "HowToStep", "position": 3, "name": "Mark Your Enrollment Deadline", "text": "Note the last date of your IEP. Enrolling late causes permanent Part B and Part D penalties." },
        { "@type": "HowToStep", "position": 4, "name": "Schedule a Consultation", "text": "Contact a Medicare broker to review your plan options before your enrollment window closes." }
      ]
    })
  }}
/>
```

After: npx tsc --noEmit && npm run build

---

TASK B8 — Add BreadcrumbList Schema to Medicare Coverage Pillar Pages (P1 — 1 hour)

The 7 pages under /medicare-coverage/ do not have BreadcrumbList schema (the local landing pages do — use the same pattern).

In src/app/medicare-coverage/[slug]/page.tsx, in the generateMetadata or in the page JSX return, add a BreadcrumbList JSON-LD script.

The breadcrumb path: Home → Medicare → [Page Title]

```tsx
// Add this server-side JSON-LD in the page return, reading title from the post object
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aeinsurancefl.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Medicare",
          "item": "https://www.aeinsurancefl.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title, // the coverage post title from medicareCoveragePosts
          "item": `https://www.aeinsurancefl.com/medicare-coverage/${post.slug}`
        }
      ]
    })
  }}
/>
```

After: npx tsc --noEmit && npm run build

---

TASK B9 — Add VideoObject + Event Schema to /watch Page (P2 — 1 hour)

File: src/app/watch/page.tsx

Read the file to understand its structure. The /watch page is the Medicare Made Simple webinar opt-in page.

Add a server-side JSON-LD script with both VideoObject and Event schemas:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject",
      "name": "Medicare Made Simple — Free Workshop",
      "description": "Steve Germain explains Medicare Advantage vs. Medigap vs. Part D in plain English. Learn how to choose the right Medicare plan without jargon or sales pressure. Free workshop for South Florida seniors turning 65 or already on Medicare.",
      "thumbnailUrl": "https://www.aeinsurancefl.com/og-image.jpg",
      "uploadDate": "2025-10-01",
      "publisher": {
        "@id": "https://www.aeinsurancefl.com/#organization"
      },
      "author": {
        "@id": "https://www.aeinsurancefl.com/#steve-germain"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "Event",
      "name": "Medicare Made Simple — Free Webinar",
      "startDate": "2026-07-15",
      "endDate": "2026-12-31",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://www.aeinsurancefl.com/watch"
      },
      "organizer": { "@id": "https://www.aeinsurancefl.com/#organization" },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
}
```

Note: If the actual YouTube embed URL for the workshop is available in the page's constants or component file, add "embedUrl": "[YouTube URL]" to the VideoObject.

After: npx tsc --noEmit

---

VERIFICATION STEPS:

1. npx tsc --noEmit (0 errors)
2. npm run build (must pass)
3. Redirect tests (after B1-B6):
   curl -I "https://www.aeinsurancefl.com/life-insurance/navigating-life-insurance" → expect 301 to /life-insurance
   curl -I "https://www.aeinsurancefl.com/critical-illness/critical-illness-and-cancer-insurance" → expect 301 to /critical-illness/cancer-insurance-florida
4. Verify REMOVED redirects no longer block new page routes:
   The four retirement slug URLs, three life insurance slug URLs, and two critical illness slug URLs that are getting real pages should NOT be in the redirect list.
5. Schema validation: Google Rich Results Test on calculator page URLs (after deployment)

TESTING CHECKLIST:
- [ ] TypeScript passes (0 errors)
- [ ] npm run build passes
- [ ] Old catch-all redirects for /retirement/, /life-insurance/, /critical-illness/ removed
- [ ] Per-slug redirects for non-page legacy slugs added correctly
- [ ] WebApplication schema on all 4 calculator pages
- [ ] HowTo schema on enrollment calculator
- [ ] BreadcrumbList on /medicare-coverage/ pages
- [ ] VideoObject schema on /watch page
- [ ] No existing redirect behavior broken

COMMIT MESSAGE:
feat(seo/phase-b): redirect architecture + tool schemas

- Replace /retirement/:slug+ catch-all with per-slug rules (enables subpage creation)
- Replace /life-insurance/:slug+ catch-all with per-slug rules
- Replace /critical-illness/:slug+ with specific redirect + enables new pages
- Add WebApplicationSchema component for calculator pages
- Add HowTo schema to enrollment calculator
- Add BreadcrumbList to medicare-coverage pillar pages
- Add VideoObject + Event schema to /watch webinar page

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

ROLLBACK:
If catch-all redirect removal causes any unexpected routing issues, restore the removed catch-alls:
git revert HEAD

Then investigate: test that the new subpages (when created in Phase C/D) are not being shadowed by checking Next.js redirect processing order in next.config.ts docs.

DO NOT:
- Create any new pages in this phase (that is Phase C and D)
- Change any content on existing pages
- Add redirects for the new page URLs (retirement-planning-tools, permanent-life-insurance, etc.)
- Touch blogPosts.ts or any content data files
```
