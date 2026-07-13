# A&E Insurance Agency — 90-Day SEO Roadmap
## July – September 2026

---

> **How to use this document:** Work through weeks sequentially. Each action item includes a Claude Code prompt in `implementation-prompts.md`. P0 items are blocking — do not skip them. P1 items must be done within the first month. P2 and P3 are important but allow for scheduling flexibility.

---

## WEEK 1 — Critical Technical Fixes
*Goal: Fix the issues that are costing impressions and distorting data right now.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 1.1 | Remove `"es"` from WebSite `inLanguage` in LocalBusinessSchema.tsx | P0 | LOW direct / HIGH trust | Easy | 15 min |
| 1.2 | Verify all /blogs/[slug] canonical tags render as absolute URLs (curl test) | P0 | HIGH — may be causing index confusion | Easy | 15 min |
| 1.3 | Add local landing pages (/medicare-broker-miami, /medicare-broker-kendall, /medicare-broker-near-me) to Footer Quick Links | P0 | MEDIUM — orphan fix | Easy | 30 min |
| 1.4 | Add /medicare-broker-south-florida and /health-insurance-broker-miami to Footer | P0 | MEDIUM | Easy | 15 min |
| 1.5 | Rebuild KRT project 70164 — delete all 25 national keywords, rebuild with Miami-local keyword set (see keyword list below) | P0 | HIGH — enables measurement | Medium | 1–2 hr |
| 1.6 | Submit `/retirement/retirement-planning-tools` and `/retirement/social-security-and-medicare-coordination` to Google Search Console URL inspection to check current index state | P1 | HIGH — diagnostic | Easy | 15 min |
| 1.7 | Confirm GBP review count (live check) and update `reviewCount` in LocalBusinessSchema if changed from 126 | P1 | MEDIUM | Easy | 15 min |

### KRT Keyword List — Rebuild for Miami FL + Fort Lauderdale FL

**Medicare Plan Keywords (track at Miami FL desktop + mobile):**
- medicare broker miami
- medicare broker near me
- medicare broker south florida
- medicare agent miami
- medicare advantage miami
- medicare supplement miami
- medigap plan g florida
- medigap plan g vs plan n florida
- medicare advantage vs medigap florida
- medicare enrollment calculator
- turn 65 medicare florida
- medicare broker kendall
- best medicare advantage plans miami
- medicare supplement plans florida
- medicare part b penalty calculator

**Retirement/Life Insurance Keywords (track at Miami FL desktop):**
- retirement planning miami
- social security medicare coordination
- life insurance broker miami
- term life insurance miami
- permanent life insurance miami

**Health Insurance Keywords (track at Miami FL desktop + mobile):**
- health insurance broker miami
- health insurance agents miami fl

---

## WEEK 2 — Schema Fixes + Redirect Architecture
*Goal: Fix the schema issues and begin untangling the catch-all redirect problem.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 2.1 | Add NPN identifier + Florida DFS license URL to Person schema in LocalBusinessSchema.tsx | P1 | MEDIUM — E-E-A-T | Easy | 30 min |
| 2.2 | Add WebApplication schema to all four calculator pages | P1 | MEDIUM — rich results | Easy | 2 hr |
| 2.3 | Plan the catch-all redirect replacement: document all Webflow legacy slugs under /retirement/, /life-insurance/, /critical-illness/ that need per-slug redirects before creating subpages | P1 | HIGH — architectural | Medium | 1 hr |
| 2.4 | Add BreadcrumbList schema to /medicare-coverage/ pillar pages (all 7) | P1 | MEDIUM | Easy | 1 hr |
| 2.5 | Add BreadcrumbList schema to /tools/ calculator pages | P1 | LOW | Easy | 45 min |
| 2.6 | Add ProfilePage schema to /about/steve page metadata | P1 | MEDIUM — author authority | Easy | 30 min |

---

## WEEK 3 — Catch-All Redirect Replacement + Subpage Creation (Retirement)
*Goal: Recover the 4,502 impressions hidden behind the /retirement catch-all.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 3.1 | Replace `/retirement/:slug+` catch-all redirect with per-slug rules in next.config.ts for all retirement Webflow slugs EXCEPT the ones getting new pages | P0 | CRITICAL — architectural prerequisite | Medium | 1 hr |
| 3.2 | Create `/retirement/retirement-planning-tools` page | P0 | HIGH — 3,615 impressions | Medium | 5 hr |
| 3.3 | Create `/retirement/social-security-and-medicare-coordination` page | P1 | HIGH — 887 impressions | Medium | 4 hr |
| 3.4 | Create `/retirement/retirement-income-planning` page | P1 | MEDIUM — 150 impressions | Medium | 3 hr |
| 3.5 | Create `/retirement/long-term-care-and-recovery-planning` page | P2 | MEDIUM — 79 impressions | Medium | 3 hr |
| 3.6 | Update /retirement service page to link to all new subpages | P1 | MEDIUM — internal linking | Easy | 30 min |

**Note on Step 3.1:** Before replacing the catch-all, audit all Webflow retirement slugs in GSC. The known slugs are:
- retirement-planning-tools → NEW PAGE (do not redirect)
- social-security-and-medicare-coordination → NEW PAGE
- retirement-income-planning → NEW PAGE
- long-term-care-and-recovery-planning → NEW PAGE
- Any other retirement/* slugs in GSC → per-slug redirect to /retirement

---

## WEEK 4 — Life Insurance + Critical Illness Subpages
*Goal: Recover the 1,741 impressions hidden behind /life-insurance and /critical-illness catch-alls.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 4.1 | Replace `/life-insurance/:slug+` catch-all with per-slug redirects (except new pages) | P0 | HIGH — architectural | Medium | 45 min |
| 4.2 | Replace `/critical-illness/:slug+` catch-all with per-slug redirects (except new pages) | P0 | HIGH — architectural | Medium | 30 min |
| 4.3 | Create `/life-insurance/permanent-life-insurance` page | P1 | HIGH — 1,230 impressions | Medium | 5 hr |
| 4.4 | Create `/life-insurance/term-life-insurance` page | P1 | HIGH — 309 impressions | Medium | 4 hr |
| 4.5 | Create `/life-insurance/final-expense-and-guaranteed-issue-insurance` page | P1 | MEDIUM — 212 impressions | Medium | 3 hr |
| 4.6 | Create `/critical-illness/cancer-insurance-florida` page | P1 | MEDIUM — 196 impressions | Medium | 3 hr |
| 4.7 | Create `/critical-illness/hospital-indemnity-plans` page | P2 | LOW — 81 impressions | Easy | 2 hr |
| 4.8 | Update /life-insurance and /critical-illness service pages with links to new subpages | P1 | MEDIUM | Easy | 30 min |

---

## WEEK 5 — Blog Post Schema + Top Post Improvement
*Goal: Unlock rich result eligibility for the 5 highest-impression blog posts.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 5.1 | Add `faqs` array to blog post: medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you | P1 | HIGH — 4,156 impressions; FAQ rich results | Medium | 2 hr |
| 5.2 | Add TL;DR summary box and `faqs` to: what-is-the-difference-between-medicare-part-a-and-part-b | P1 | HIGH — 1,992 impressions | Medium | 1.5 hr |
| 5.3 | Add `faqs` to: which-medicare-plan-is-better-for-dental-and-vision-coverage | P1 | HIGH — 1,498 impressions | Medium | 1.5 hr |
| 5.4 | Add `faqs` to: which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida | P1 | MEDIUM — 454 impressions | Medium | 1 hr |
| 5.5 | Add `faqs` to: how-does-medicare-part-c-compare-to-original-medicare-in-florida | P1 | MEDIUM — 393 impressions | Medium | 1 hr |
| 5.6 | Add internal links from top 5 blog posts to relevant calculator tools | P1 | MEDIUM | Easy | 1 hr |
| 5.7 | Add VideoObject schema to /watch page | P2 | MEDIUM — video rich results | Easy | 1 hr |

---

## WEEK 6 — Pillar Page Enhancement
*Goal: Improve position for the 3 Medicare coverage pillar pages ranking positions 41–78.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 6.1 | Expand /medicare-coverage/medicare-supplement-plans-medigap: add Medigap plan comparison table (A–N), Florida-specific premium ranges, FAQPage schema | P1 | HIGH — 1,396 impressions, position 65 | Medium | 4 hr |
| 6.2 | Expand /medicare-coverage/medicare-advantage-plans: add Miami-Dade carrier comparison table, SNP section, FAQPage schema | P1 | HIGH — 748 impressions | Medium | 4 hr |
| 6.3 | Differentiate /medicare-coverage/medicare-advantage-vs-medigap from blog post: add HowTo schema, structured comparison table, FAQ schema | P1 | HIGH — 1,093 impressions | Medium | 3 hr |
| 6.4 | Add HowTo schema to /tools/medicare-enrollment-calculator | P2 | MEDIUM | Easy | 1 hr |
| 6.5 | Add HowTo schema to /blogs/turning-65-in-florida-your-complete-medicare-enrollment-checklist | P2 | MEDIUM | Easy | 45 min |
| 6.6 | Add contextual internal links from /medicare service page to all pillar guides and calculator tools | P1 | MEDIUM — internal authority distribution | Easy | 45 min |

---

## WEEK 7 — First Wave of Local Landing Pages
*Goal: Plant flags in the cities where A&E has no page but competitors do.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 7.1 | Create `/medicare-broker-doral` page | P1 | HIGH — competitive; The Health Experts is here | Medium | 4 hr |
| 7.2 | Create `/medicare-broker-coral-gables` page | P1 | HIGH — affluent, Medigap-leaning | Medium | 3 hr |
| 7.3 | Create `/medicare-broker-hialeah` page | P1 | HIGH — largest population gap | Medium | 4 hr |
| 7.4 | Update /medicare-broker-miami to link to /medicare-broker-doral, /medicare-broker-coral-gables | P1 | MEDIUM — local linking | Easy | 30 min |
| 7.5 | Add footer Locations column to Footer.tsx | P1 | MEDIUM — crawlability | Easy | 45 min |

---

## WEEK 8 — Second Wave of Local Landing Pages + Navigation Update
*Goal: Complete Miami-Dade coverage; update Header navigation.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 8.1 | Create `/medicare-broker-homestead` page | P1 | HIGH — bilingual gap | Medium | 3 hr |
| 8.2 | Update Header.tsx navigation per recommended structure (elevate Medicare as top-level item, rename Services → Insurance, rename Learn → Resources, add Free Workshop) | P2 | MEDIUM — UX + internal linking | Medium | 2 hr |
| 8.3 | Update /medicare-broker-south-florida to reference and link to all Miami-Dade city pages | P2 | MEDIUM | Easy | 1 hr |
| 8.4 | Improve /medicare-broker-miami: add FAQPage schema, add carrier note, add CTA mid-page | P2 | MEDIUM | Easy | 1.5 hr |
| 8.5 | Improve /medicare-broker-kendall: add FAQPage schema, add local provider network note | P2 | MEDIUM | Easy | 1.5 hr |

---

## WEEK 9 — New High-Priority Content (Tier 3)
*Goal: Fill the topical gaps that no current page covers.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 9.1 | Create /resources/faq/medicare-for-immigrants-green-card-holders | P1 | HIGH — distinctive Miami demand | Medium | 2.5 hr |
| 9.2 | Create /resources/faq/medicare-special-enrollment-period | P1 | HIGH — missing topic | Medium | 2 hr |
| 9.3 | Create /resources/faq/medicare-and-va-benefits | P1 | HIGH — large Miami vet population | Medium | 2 hr |
| 9.4 | Create /resources/faq/medicare-dual-eligible-dsnp | P1 | HIGH — Hialeah/Miami relevance | Medium | 2 hr |
| 9.5 | Create /resources/faq/what-medicare-does-not-cover | P2 | MEDIUM — common question | Easy | 2 hr |
| 9.6 | Update /resources page index to include new FAQ pages and organize by cluster | P2 | MEDIUM | Easy | 1 hr |

---

## WEEK 10 — Blog Content: High-Commercial-Intent Posts
*Goal: Create the blog posts that directly compete with commercial Miami Medicare searches.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 10.1 | Write and publish /blogs/best-medicare-advantage-plans-miami-2026 | P1 | HIGH — commercial intent; gaps in GSC | Hard | 6 hr |
| 10.2 | Write and publish /blogs/medicare-supplement-plan-g-florida-2026 | P1 | HIGH — commercial; "medigap plan g" queries in GSC | Hard | 5 hr |
| 10.3 | Write and publish /blogs/irmaa-appeal-guide | P2 | MEDIUM — professional Miami audience | Medium | 4 hr |
| 10.4 | Add internal links from IRMAA calculator to irmaa-appeal-guide | P2 | MEDIUM | Easy | 15 min |
| 10.5 | Add contextual mid-article CTA boxes to top 10 blog posts | P2 | MEDIUM — conversion | Easy | 2 hr |

---

## WEEK 11 — Snowbird + Non-Citizen Medicare Content + Tool Planning
*Goal: Cover the uniquely Miami Medicare topics that earn both traffic and backlinks.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 11.1 | Write and publish /blogs/medicare-for-snowbirds-florida-guide | P1 | HIGH — South Florida unique; link magnet | Hard | 5 hr |
| 11.2 | Write and publish /blogs/medicare-for-non-citizens-florida | P1 | HIGH — Miami unique | Hard | 5 hr |
| 11.3 | Begin development of Medigap vs. Medicare Advantage Cost Comparator tool | P2 | HIGH (long-term) — link magnet | Hard | 10 hr |
| 11.4 | Begin development of Social Security + Medicare Calculator | P2 | HIGH (long-term) | Hard | 8 hr |
| 11.5 | Add author bio card (photo + CTA) to bottom of every blog post | P2 | MEDIUM — conversion + E-E-A-T | Medium | 3 hr |

---

## WEEK 12 — Fort Lauderdale Expansion + AEO Optimization + Review Sprint
*Goal: Open Broward County; complete AI search optimizations; close review gap with competitors.*

| # | Action | Priority | SEO Impact | Difficulty | Time |
|---|---|---|---|---|---|
| 12.1 | Create `/medicare-broker-fort-lauderdale` page | P2 | MEDIUM — Broward expansion | Medium | 3 hr |
| 12.2 | Add `speakable` schema to top 5 FAQ pages | P2 | MEDIUM — AI voice search | Easy | 1.5 hr |
| 12.3 | Add comparison tables to all 5 top blog posts that do not yet have them | P2 | MEDIUM — AI citation | Medium | 3 hr |
| 12.4 | Launch review acquisition campaign: email past clients requesting Google review via direct link | P1 | HIGH — close gap with SFIB's 147 reviews | Easy | 1 hr to set up |
| 12.5 | Audit all blog post images in rendered HTML for missing alt text | P3 | LOW | Easy | 1 hr |
| 12.6 | Convert Hero slideshow to next/image with priority attribute on first slide (LCP fix) | P2 | MEDIUM — Core Web Vitals | Hard | 3 hr |
| 12.7 | Convert logo in Header.tsx and Footer.tsx from `<img>` to `next/image` | P3 | LOW — image optimization | Easy | 45 min |

---

## Measurement Checkpoints

### Week 2 Check
- [ ] KRT rebuilt and showing Miami local positions for at least 10 keywords
- [ ] GSC canonical verification complete — /blogs/[slug] pages showing absolute canonical
- [ ] Footer updated with local landing page links

### Week 4 Check
- [ ] /retirement/retirement-planning-tools live and submitted to GSC
- [ ] /retirement/social-security-and-medicare-coordination live
- [ ] Catch-all redirects for /retirement/ and /life-insurance/ replaced with per-slug rules
- [ ] GSC showing new pages in coverage report

### Week 6 Check
- [ ] FAQPage schema added to top 5 blog posts
- [ ] Google Search Console showing rich result impressions for FAQ-enabled pages
- [ ] KRT showing Miami position data for tracked keywords

### Week 8 Check
- [ ] All Miami-Dade city pages live (Miami, Kendall, Doral, Coral Gables, Hialeah, Homestead)
- [ ] Footer Locations column added
- [ ] Pillar pages enhanced with comparison tables and FAQPage schema

### Week 12 Check
- [ ] New commercial blog posts live and indexed
- [ ] Review count increased from 126 toward 150+
- [ ] GSC impressions trend: target 80,000+ impressions (from 67,474 current)
- [ ] GSC clicks trend: target 400+ clicks (from 261 current)
- [ ] KRT showing first page rankings for at least 5 Miami local keywords
