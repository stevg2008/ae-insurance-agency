# Quick Wins — Under 2 Hours, HIGH or MEDIUM SEO Impact
## A&E Insurance Agency — July 2026
## Sorted by ROI (Impact ÷ Effort)

Execute these before anything else in the 90-day plan. Each can be done in isolation without dependencies on other tasks.

---

## QW-01 — Remove "es" from WebSite inLanguage Schema
**Time:** 10 minutes | **Impact:** HIGH (trust signal; schema accuracy) | **Risk:** VERY LOW

**Why it matters:** The site declares Spanish as a content language in schema but has zero Spanish pages. This misrepresents the site to Google. It can cause language classification confusion and undermine trust signals with Google's quality evaluators.

**File:** `src/components/seo/LocalBusinessSchema.tsx`

**Change:**
```
Line 199 — Current:
inLanguage: ["en-US", "es"],

Change to:
inLanguage: ["en-US"],
```

**Verify:** `npx tsc --noEmit`

---

## QW-02 — Add Local Landing Pages to Footer Quick Links
**Time:** 20 minutes | **Impact:** HIGH (crawlability; orphan fix for 5 pages) | **Risk:** VERY LOW

**Why it matters:** `/medicare-broker-miami`, `/medicare-broker-kendall`, `/medicare-broker-near-me`, `/medicare-broker-south-florida`, and `/health-insurance-broker-miami` receive internal links ONLY from the sitemap. Google cannot efficiently crawl orphaned pages. Adding them to the global footer gives every page on the site a crawl path to these local pages.

**File:** `src/components/layout/Footer.tsx`

Find the Quick Links column (Column 4). Add the following links to the list, after "Medicare" and before "Health Insurance":

```tsx
{ label: "Medicare Broker Miami", href: "/medicare-broker-miami" },
{ label: "Medicare Broker Kendall", href: "/medicare-broker-kendall" },
{ label: "Medicare Broker Near Me", href: "/medicare-broker-near-me" },
{ label: "Medicare Broker South Florida", href: "/medicare-broker-south-florida" },
```

**Verify:** `npx tsc --noEmit && npm run build`

---

## QW-03 — Add NPN Identifier + Florida DFS License URL to Person Schema
**Time:** 20 minutes | **Impact:** HIGH (E-E-A-T; AI citation authority) | **Risk:** VERY LOW

**Why it matters:** NPN 19921707 is in the footer text but not in structured data. Adding it as a schema `identifier` allows Google and AI models to programmatically verify Steve's license — critical for YMYL content authority. The Florida DFS URL is a government source that can be cross-referenced by automated systems.

**File:** `src/components/seo/LocalBusinessSchema.tsx`

In the Person entity (after the `hasCredential` block, before `sameAs`), add:

```ts
identifier: {
  "@type": "PropertyValue",
  propertyID: "NPN",
  value: "19921707",
},
```

Also add to the Person `sameAs` array:
```ts
"https://apps.fldfs.com/licenseSearch/",
```

**Verify:** `npx tsc --noEmit`

---

## QW-04 — Verify /blogs/[slug] Canonical URLs Are Absolute
**Time:** 15 minutes | **Impact:** HIGH (may be causing index confusion) | **Risk:** NO RISK — diagnostic only

**Why it matters:** The technical audit flagged that blog post canonicals may be rendering as relative URLs. If Google is reading `href="/blogs/medicare-advantage-vs-..."` instead of `href="https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-..."`, it may be contributing to the index confusion between `/blog/` and `/blogs/` URLs.

**Run these curl commands:**

```bash
curl -s "https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you" | grep -i "canonical"

curl -s "https://www.aeinsurancefl.com/medicare-coverage/medicare-supplement-plans-medigap" | grep -i "canonical"

curl -s "https://www.aeinsurancefl.com/resources/faq/what-is-medigap" | grep -i "canonical"
```

**Expected output format:**
```html
<link rel="canonical" href="https://www.aeinsurancefl.com/blogs/..."/>
```

**If canonical is relative (starts with `/` not `https://`)**, fix in:
- `src/app/blogs/[slug]/page.tsx` — ensure `alternates.canonical` uses `` `${SITE_URL}/blogs/${params.slug}` ``
- `src/app/medicare-coverage/[slug]/page.tsx` — same pattern
- `src/app/resources/faq/[slug]/page.tsx` — same pattern

**Verify:** `npx tsc --noEmit && npm run build`

---

## QW-05 — Add ProfilePage Schema to /about/steve
**Time:** 25 minutes | **Impact:** MEDIUM (author entity authority; E-E-A-T) | **Risk:** VERY LOW

**Why it matters:** The Person schema for Steve Germain is defined globally in LocalBusinessSchema but the `/about/steve` page itself has no page-level schema declaring it as Steve's ProfilePage. Adding `@type: ProfilePage` formally links the page to the author entity and strengthens the cross-reference between BlogPosting author attributions and Steve's bio.

**File:** `src/app/about/steve/page.tsx`

Add a server-rendered JSON-LD script. Since this is a server component, add directly to the page's JSX return:

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

**Verify:** `npx tsc --noEmit`

---

## QW-06 — Update reviewCount in LocalBusinessSchema
**Time:** 10 minutes | **Impact:** MEDIUM (schema accuracy; rich results) | **Risk:** VERY LOW

**Why it matters:** The schema shows `reviewCount: "126"` from the audit date. If this number has changed, the schema is stale. An accurate review count strengthens the AggregateRating schema and the trust signal it provides in search results.

**Action:**
1. Steve checks the live Google Business Profile review count (see `steve-manual-actions.md` for how)
2. If count has changed, update `src/components/seo/LocalBusinessSchema.tsx` line ~76:
   ```ts
   reviewCount: "[CURRENT_COUNT]",
   ```

**Verify:** `npx tsc --noEmit`

---

## QW-07 — Inspect /major-exposures Page and Set noindex If Thin
**Time:** 20 minutes | **Impact:** MEDIUM (prevents thin page from diluting crawl budget) | **Risk:** LOW

**Why it matters:** `/major-exposures` has a `page.tsx` but is excluded from the sitemap and has no nav or footer links. If this page is thin (a homepage section extracted into its own route), it should be explicitly noindexed to prevent crawl budget waste.

**Action:**
1. Visit `http://localhost:3000/major-exposures` (or check the source: `src/app/major-exposures/page.tsx`)
2. If the page is thin or duplicates homepage content:
   - In `src/app/major-exposures/page.tsx`, add to the exported metadata:
     ```ts
     robots: { index: false, follow: false }
     ```
3. If the page has unique substantive content (1,000+ words of original value), instead: add it to `src/app/sitemap.ts` staticPages array and link from `/about`.

**Verify:** `npx tsc --noEmit`

---

## QW-09 — Add Twitter Card Type to Blog Post generateMetadata
**Time:** 15 minutes | **Impact:** LOW (social sharing optimization) | **Risk:** VERY LOW

**Why it matters:** The technical audit flagged that Twitter card type is not explicitly set per-page on blog posts. The layout default may not produce `summary_large_image` for blog posts, which reduces visual impact when shared on Twitter/X and LinkedIn.

**File:** `src/app/blogs/[slug]/page.tsx`

In the `generateMetadata` function return object, add to the existing metadata:
```ts
twitter: {
  card: 'summary_large_image',
  title: post.title,
  description: post.excerpt,
},
```

**Verify:** `npx tsc --noEmit`

---

## QW-10 — Confirm robots.ts Allows /blogs/ Indexing
**Time:** 10 minutes | **Impact:** HIGH (foundational for redirect index gap fix) | **Risk:** NO RISK — diagnostic

**Why it matters:** The #1 technical issue on the site is Google indexing `/blog/` redirect URLs instead of the canonical `/blogs/` URLs. Before submitting new blog URLs to GSC (a Steve manual action), confirm the robots.ts configuration is not accidentally blocking `/blogs/`.

**Run:**
```bash
curl https://www.aeinsurancefl.com/robots.txt
```

**Expected output:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /watch/video
Disallow: /book/thank-you
Sitemap: https://www.aeinsurancefl.com/sitemap.xml
```

Confirm `/blogs/` is NOT in any Disallow line. If it is (unexpected), fix in `src/app/robots.ts`.

---

## ROI Summary Table

| Task | Time | Impact | ROI |
|---|---|---|---|
| QW-01 — Remove Spanish inLanguage | 10 min | HIGH | ⭐⭐⭐⭐⭐ |
| QW-02 — Footer local page links | 20 min | HIGH | ⭐⭐⭐⭐⭐ |
| QW-03 — NPN + DFS to Person schema | 20 min | HIGH | ⭐⭐⭐⭐ |
| QW-04 — Verify canonical URLs | 15 min | HIGH | ⭐⭐⭐⭐ |
| QW-10 — Confirm robots.ts | 10 min | HIGH | ⭐⭐⭐⭐ |
| QW-05 — ProfilePage schema | 25 min | MEDIUM | ⭐⭐⭐ |
| QW-06 — Update reviewCount | 10 min | MEDIUM | ⭐⭐⭐ |
| QW-07 — /major-exposures noindex | 20 min | MEDIUM | ⭐⭐⭐ |
| QW-09 — Twitter card type | 15 min | LOW | ⭐⭐ |

**Total time for all quick wins: ~2.5 hours**
**These 10 items should be completed before starting any Phase work.**
