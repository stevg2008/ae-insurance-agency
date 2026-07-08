# SEO Checklist — A&E Insurance Agency

## Local SEO (Highest Priority)

### Google Business Profile
- [ ] NAP perfectly matches `src/lib/constants.ts` on every citation
  - Name: A&E Insurance Agency
  - Address: confirm against `LOCATIONS[0]`
  - Phone: confirm against `PHONE`
- [ ] Primary category: Insurance Agency
- [ ] Secondary categories: Health Insurance Agency, Medicare Supplemental Insurance Agency
- [ ] Website: `https://aeinsurancefl.com`
- [ ] Service area: Miami-Dade County, Broward County, Monroe County (if applicable)
- [ ] Business hours match site constants
- [ ] At least 5 photos uploaded (office, Steve headshot, team, client meeting)

### Schema.org
- [x] `LocalBusiness` schema in `LocalBusinessSchema` component (authoritative, in layout)
- [x] `ItemList` schema on service pages (Medicare, Health Insurance)
- [x] `FAQPage` schema on `/resources`
- [ ] Verify schema renders correctly: use [validator.schema.org](https://validator.schema.org) on homepage

### Local Landing Pages (already built)
- [x] `/medicare-broker-miami`
- [x] `/medicare-broker-south-florida`
- [x] `/medicare-broker-kendall`
- [x] `/health-insurance-broker-miami`
- [x] `/medicare-broker-near-me`

---

## On-Page SEO

### Service Pages — Target Keywords
| Page | Primary Keyword | Secondary |
|---|---|---|
| `/medicare` | medicare insurance broker miami | medicare supplement plans florida |
| `/health-insurance` | health insurance broker miami | health insurance miami florida |
| `/life-insurance` | life insurance miami | term life insurance broker miami |
| `/retirement` | retirement planning miami | financial advisor miami seniors |
| `/critical-illness` | critical illness insurance florida | serious illness coverage miami |

### Title Tag Audit (all under 60 chars, keyword-first)
- [ ] Verify each service page title tag in browser tab
- [ ] Verify homepage title: confirm it contains "Miami" and primary service
- [ ] All blog posts have unique, keyword-rich titles

### Content Freshness
- [ ] Blog: aim for 2 posts/month minimum
- [ ] Medicare pages: update annually after CMS announces plan year changes
- [ ] Calculator pages: update numbers each November (see ANNUAL_UPDATE.md)

---

## Technical SEO

- [x] `sitemap.xml` — 145 static + dynamic pages, priority-weighted
- [x] `robots.txt` — disallows `/api/`, `/watch/video`, `/book/thank-you`
- [x] Canonical URLs on all pages (via Next.js `alternates.canonical`)
- [x] HTTPS (Vercel enforces this automatically)
- [ ] Verify no duplicate content (no `www` vs non-`www` issue) — Vercel redirects should handle this
- [ ] Check for redirect chains (anything more than a single 301)

---

## AEO / GEO (Answer Engine & Generative Engine Optimization)

These are growing channels as AI search (ChatGPT, Perplexity, Claude, Google AI Overview) answers local queries.

**Current Strengths:**
- Strong FAQ content on `/resources` (FAQPage schema)
- Detailed Medicare explainer content on service pages
- LocalBusiness schema provides clear entity signals

**Recommended Additions:**
- Add "About" structured data with Steve's NPN number and credentials — E-E-A-T signal
- Add more specific Q&A sections to Medicare page (natural language questions AI systems pull)
- Add `speakable` schema to key answer paragraphs (targets voice/AI search)
- Keep GBP Q&A section populated — AI search pulls from GBP data

**Monitor:**
- Search for "health insurance broker miami" and "medicare broker miami" in ChatGPT and Perplexity monthly
- Track if A&E is cited in AI answers — this is a leading indicator of organic traffic growth
