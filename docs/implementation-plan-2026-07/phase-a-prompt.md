# Phase A — Critical Technical Fixes
## Self-Contained Claude Code Prompt

Copy the entire block below and paste it into a new Claude Code session opened in the medicare-site project directory.

---

```
You are implementing Phase A of the A&E Insurance Agency SEO plan. This is the Critical Technical Fixes phase.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, a Medicare insurance broker
- Founder: Steve Germain, NPN 19921707, Licensed in FL and 35 states
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- Production deploys automatically from main branch via Vercel
- CLAUDE.md is the source of truth for all project conventions — read it before making any change

BUSINESS RULES (NON-NEGOTIABLE):
- Never keyword-stuff any content
- Never create thin or duplicate content
- Never break existing routes or redirects
- Every change must preserve the premium A&E Insurance brand
- Run npx tsc --noEmit after EVERY TypeScript file change
- Run npm run build before any production deployment

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. src/components/seo/LocalBusinessSchema.tsx
3. src/app/blogs/[slug]/page.tsx
4. src/app/medicare-coverage/[slug]/page.tsx
5. src/app/resources/faq/[slug]/page.tsx
6. src/components/layout/Footer.tsx
7. src/app/about/steve/page.tsx
8. src/app/major-exposures/page.tsx

OBJECTIVE:
Fix 8 critical technical SEO issues that are costing the site impressions, trust signals, and crawlability. None of these changes affect content, navigation structure, or user-visible design.

---

TASK A1 — Remove Spanish from WebSite inLanguage Schema (P0 — 10 min)

File: src/components/seo/LocalBusinessSchema.tsx

Find the WebSite entity in the @graph array. It has this line:
  inLanguage: ["en-US", "es"],

Change to:
  inLanguage: ["en-US"],

Why: The site declares Spanish as a content language but has zero Spanish-language pages. This misrepresents the site to Google and can cause language classification issues. If Spanish pages are built in the future (/es/ routes with hreflang), add "es" back at that time.

After: npx tsc --noEmit

---

TASK A2 — Verify /blogs/[slug] Canonical URLs Are Absolute (P0 — diagnostic)

The technical audit flagged that canonical tags may be rendering as relative URLs instead of absolute URLs. This could be contributing to Google indexing /blog/ redirect URLs instead of the canonical /blogs/ URLs.

Run these curl commands to check:
  curl -s "https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you" | grep -i "canonical"
  curl -s "https://www.aeinsurancefl.com/medicare-coverage/medicare-supplement-plans-medigap" | grep -i "canonical"
  curl -s "https://www.aeinsurancefl.com/resources/faq/what-is-medigap" | grep -i "canonical"

Expected output format:
  <link rel="canonical" href="https://www.aeinsurancefl.com/blogs/..."/>

IF the canonical starts with / instead of https:// (relative URL), fix in:
- src/app/blogs/[slug]/page.tsx — in generateMetadata, ensure:
    alternates: { canonical: `${SITE_URL}/blogs/${params.slug}` }
  Import SITE_URL from "@/lib/constants" if not already imported.
- src/app/medicare-coverage/[slug]/page.tsx — same pattern:
    alternates: { canonical: `${SITE_URL}/medicare-coverage/${params.slug}` }
- src/app/resources/faq/[slug]/page.tsx — same pattern:
    alternates: { canonical: `${SITE_URL}/resources/faq/${params.slug}` }

IF canonical is already absolute: document "canonical URLs confirmed absolute" and move on.

After any fixes: npx tsc --noEmit && npm run build

---

TASK A3 — Add Local Landing Pages to Footer Quick Links (P0 — 20 min)

File: src/components/layout/Footer.tsx

Read the file first to understand the current Quick Links column structure.

The current Quick Links column contains navigation links for the main service pages. Add the following local landing page links to this column. Place them after any existing "Medicare" link and before "Health Insurance":

  { label: "Medicare Broker Miami", href: "/medicare-broker-miami" },
  { label: "Medicare Broker Kendall", href: "/medicare-broker-kendall" },
  { label: "Medicare Broker Near Me", href: "/medicare-broker-near-me" },
  { label: "Medicare Broker South Florida", href: "/medicare-broker-south-florida" },

These local landing pages are currently navigation orphans — they have no nav or footer links and are only discoverable via the sitemap. Adding them to the global footer gives Googlebot a crawl path from every page on the site to these high-value local SEO pages.

Also add (to complete the set):
  { label: "Health Insurance Broker Miami", href: "/health-insurance-broker-miami" },

After: npx tsc --noEmit && npm run build

---

TASK A4 — Add NPN Identifier + Florida DFS License URL to Person Schema (P1 — 20 min)

File: src/components/seo/LocalBusinessSchema.tsx

In the Person entity for Steve Germain, after the hasCredential block, add:

  identifier: {
    "@type": "PropertyValue",
    propertyID: "NPN",
    value: "19921707",
  },

Also add to the Person entity's sameAs array:
  "https://apps.fldfs.com/licenseSearch/",

Why: NPN 19921707 is visible in the footer text but not in structured data. Adding it as a schema identifier allows Google and AI models to programmatically verify Steve's license — critical for YMYL (Your Money or Your Life) E-E-A-T signals. The Florida DFS URL is a government source that can be cross-referenced by automated systems assessing the site's credibility.

After: npx tsc --noEmit

---

TASK A5 — Add ProfilePage Schema to /about/steve (P1 — 25 min)

File: src/app/about/steve/page.tsx

Read the file to understand its current structure. The page exports a metadata object and renders a component.

Add a server-rendered JSON-LD script. Since page.tsx files are server components in this project, add a <script> tag directly in the return JSX:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@id": "https://www.aeinsurancefl.com/#steve-germain"
      },
      "name": "Steve Germain — Licensed Medicare Broker & Agency Founder",
      "description": "Profile page for Steve Germain, founder of A&E Insurance Agency and author of Medicare Decoded. Licensed Medicare insurance broker serving South Florida since 2009.",
      "url": "https://www.aeinsurancefl.com/about/steve"
    })
  }}
/>
```

Why: The Person schema for Steve Germain is defined globally in LocalBusinessSchema but the /about/steve page itself has no page-level schema declaring it as Steve's ProfilePage. This formally links the biographical page to the author entity that is referenced in every BlogPosting's author field — strengthening E-E-A-T cross-entity linking.

After: npx tsc --noEmit

---

TASK A6 — Inspect /major-exposures and Set noindex If Thin (P1 — 20 min)

File: src/app/major-exposures/page.tsx

Read this file and look at the component it renders to determine what content it displays.

Decision criteria:
- IF the page is thin (mostly duplicates a homepage section, under 300 words of unique content, or is just a list with no editorial value): Add `robots: { index: false, follow: false }` to the exported metadata object.
- IF the page has genuinely unique, substantive content (500+ words of original value): Instead add it to src/app/sitemap.ts staticPages array with priority 0.6, and add an internal link from /about to this page.

Why: The page exists in the route tree but is excluded from the sitemap and has no nav or footer links. If it's thin content, it wastes crawl budget and potentially dilutes site quality signals. If it's good content, it should be linked and indexed.

After any changes: npx tsc --noEmit

---

TASK A7 — Add Twitter Card Type to Blog Post generateMetadata (P3 — 15 min)

File: src/app/blogs/[slug]/page.tsx

In the generateMetadata function, the returned metadata object likely has title, description, alternates/canonical, openGraph, etc.

Add a twitter property to the returned metadata:

```ts
twitter: {
  card: 'summary_large_image',
  title: post.title,
  description: post.excerpt,
},
```

Why: Without an explicit twitter card type, blog posts fall back to the layout default which may produce a smaller card format. summary_large_image produces a more prominent display when shared on Twitter/X and LinkedIn.

After: npx tsc --noEmit

---

VERIFICATION STEPS:

1. TypeScript: npx tsc --noEmit (must pass with 0 errors)
2. Build: npm run build (must complete without errors)
3. Canonical check (after A2):
   curl -s "https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you" | grep -i "canonical"
   Confirm output shows: href="https://www.aeinsurancefl.com/blogs/..."
4. Schema check: Visit https://search.google.com/test/rich-results and test the homepage URL. Confirm no errors on LocalBusiness, Person, or WebSite schema.
5. Footer check: Visit http://localhost:3000 and confirm local page links appear in footer.
6. /about/steve check: View source and confirm ProfilePage JSON-LD is present.

TESTING CHECKLIST:
- [ ] TypeScript passes (0 errors)
- [ ] npm run build passes
- [ ] Footer has local landing page links visible on every page
- [ ] LocalBusinessSchema.tsx no longer has "es" in inLanguage
- [ ] LocalBusinessSchema.tsx Person entity has NPN identifier and DFS sameAs
- [ ] /about/steve has ProfilePage JSON-LD
- [ ] /major-exposures is either noindexed or linked with sitemap entry
- [ ] No existing routes broken

COMMIT MESSAGE:
feat(seo/phase-a): critical technical fixes — schema accuracy, footer crawlability, E-E-A-T

- Remove Spanish from WebSite inLanguage (no Spanish content exists)
- Add NPN 19921707 identifier to Person schema for programmatic license verification
- Add Florida DFS license URL to Person sameAs array
- Add 5 local landing pages to Footer Quick Links (orphan page fix)
- Add ProfilePage schema to /about/steve
- [Fix canonical URL format if needed]
- [Noindex /major-exposures if thin]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

ROLLBACK:
git revert HEAD

All Phase A changes are additive (schema additions, footer links, metadata). No content was changed, no redirects were modified, no routes were removed. A git revert will cleanly restore all files.

DO NOT:
- Change any existing content on any page
- Modify any redirect rules in next.config.ts (that is Phase B)
- Create any new pages (that is Phase C onward)
- Change any navigation menu items (that is Phase F)
- Touch any files not listed in the tasks above
```
