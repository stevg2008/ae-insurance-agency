# Master Implementation Plan — A&E Insurance Agency SEO
## 90-Day Program: July – September 2026
## Lead Technical SEO Engineer and Next.js Architect

---

## Reading This Document

- **P0** = Do before anything else. Blocking.
- **P1** = Must complete within first 30 days.
- **P2** = Important; scheduled within 60 days.
- **P3** = Nice-to-have; complete within 90 days.
- **Dependencies** = Task IDs that must be complete before starting this task.
- **Phase prompts** = Use the corresponding `phase-[letter]-prompt.md` file in this directory to execute each phase via Claude Code.

---

## Phase Structure

| Phase | Name | Weeks | Focus |
|---|---|---|---|
| A | Critical Technical Fixes | 1–2 | Schema errors, canonical verification, orphan pages, footer |
| B | Redirect Architecture | 2–3 | Replace catch-all redirects; prerequisite for all subpages |
| C | Subpage Creation — Retirement | 3 | Recover 4,502 impressions from /retirement catch-all |
| D | Subpage Creation — Life Insurance & Critical Illness | 4 | Recover 1,741 impressions from other catch-alls |
| E | Blog Post Schema & Pillar Enhancement | 5–6 | FAQ schemas, HowTo, comparison tables, pillar expansion |
| F | Local Landing Pages | 7–8 | Doral, Hialeah, Coral Gables, Homestead + navigation |
| G | New FAQ & Tier 3 Content | 9–10 | Missing topic coverage; commercial blog posts |
| H | AI Search & Conversion Optimization | 10–12 | Speakable schema, author box, CTA improvements |

---

## Pre-Phase: Quick Wins (Before Week 1 Work Begins)

Complete `quick-wins.md` items QW-01 through QW-10 first. Total time: ~2.5 hours.
See `quick-wins.md` for exact file paths and changes.

Also complete Steve manual actions from `steve-manual-actions.md`:
- MANUAL-01: Rebuild KRT project for Miami local tracking
- MANUAL-02: Submit top /blogs/ URLs to GSC for re-indexing
- MANUAL-03: Verify GBP review count
- MANUAL-10: Configure Search Atlas GSC integration

---

## PHASE A — Critical Technical Fixes (Weeks 1–2)

**Phase prompt:** `phase-a-prompt.md`

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| A1 | Remove "es" from WebSite inLanguage | P0 | HIGH — schema accuracy | Easy | 0.25h | None | LocalBusinessSchema.tsx | LOW | Schema shows inLanguage: ["en-US"] only |
| A2 | Verify /blogs/[slug] canonical URLs are absolute | P0 | HIGH — index confidence | Easy | 0.25h | None | blogs/[slug]/page.tsx if needed | LOW | curl confirms absolute canonical URL |
| A3 | Fix canonical on /medicare-coverage/[slug] and /resources/faq/[slug] | P0 | MEDIUM | Easy | 0.5h | A2 | medicare-coverage/[slug]/page.tsx, faq/[slug]/page.tsx | LOW | curl confirms absolute canonicals |
| A4 | Add local pages to Footer Quick Links | P0 | HIGH — crawlability | Easy | 0.5h | None | Footer.tsx | LOW | All 5 local pages reachable from every page footer |
| A5 | Add NPN identifier + DFS URL to Person schema | P1 | HIGH — E-E-A-T | Easy | 0.5h | None | LocalBusinessSchema.tsx | LOW | Person schema has identifier + sameAs DFS URL |
| A6 | Add ProfilePage schema to /about/steve | P1 | MEDIUM — author authority | Easy | 0.5h | None | about/steve/page.tsx | LOW | /about/steve has ProfilePage JSON-LD |
| A7 | Inspect /major-exposures; add noindex if thin | P1 | MEDIUM — crawl budget | Easy | 0.5h | None | major-exposures/page.tsx | LOW | Page is either noindexed or added to sitemap with links |
| A8 | Add Twitter card type to blog generateMetadata | P3 | LOW | Easy | 0.25h | None | blogs/[slug]/page.tsx | VERY LOW | twitter.card = 'summary_large_image' in blog metadata |

**Phase A Rollback:** All Phase A changes are additive schema and metadata changes. Rollback via `git revert` of the commit. No content changes, no redirect changes.

**Phase A Success Criteria:**
- TypeScript passes (`npx tsc --noEmit`)
- `npm run build` completes without errors
- curl test confirms absolute canonical on /blogs/ pages
- Footer shows local pages in Quick Links
- Google Rich Results Test shows no schema errors on homepage

---

## PHASE B — Redirect Architecture (Weeks 2–3)

**Phase prompt:** `phase-b-prompt.md`

**Critical Note:** This phase must be completed BEFORE any subpages are created under /retirement/, /life-insurance/, or /critical-illness/. The existing catch-all redirects in next.config.ts WILL silently shadow new pages — redirects run before routes in Next.js. This is the #1 architectural prerequisite.

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| B1 | Audit all Webflow legacy slugs under /retirement/ in GSC | P0 | HIGH — architectural prerequisite | Easy | 1h | None | None (research only) | LOW | Complete list of all /retirement/* GSC URLs documented |
| B2 | Replace /retirement/:slug+ catch-all with per-slug redirects | P0 | CRITICAL | Medium | 1.5h | B1 | next.config.ts | MEDIUM | New /retirement/ pages no longer shadowed; existing Webflow slugs still redirect correctly |
| B3 | Audit all Webflow legacy slugs under /life-insurance/ in GSC | P0 | HIGH | Easy | 0.5h | None | None | LOW | Complete list documented |
| B4 | Replace /life-insurance/:slug+ catch-all with per-slug redirects | P0 | CRITICAL | Medium | 1h | B3 | next.config.ts | MEDIUM | New /life-insurance/ pages not shadowed |
| B5 | Audit all Webflow legacy slugs under /critical-illness/ in GSC | P0 | HIGH | Easy | 0.25h | None | None | LOW | Complete list documented |
| B6 | Replace /critical-illness/:slug+ catch-all with per-slug redirects | P0 | CRITICAL | Medium | 0.75h | B5 | next.config.ts | MEDIUM | New /critical-illness/ pages not shadowed |
| B7 | Add WebApplication schema to all 4 calculator pages | P1 | MEDIUM — rich results | Easy | 2h | None | tools/*/page.tsx + new WebApplicationSchema.tsx | LOW | WebApplication JSON-LD in page source for all 4 tools |
| B8 | Add BreadcrumbList schema to all 7 /medicare-coverage/ pages | P1 | MEDIUM | Easy | 1h | None | medicare-coverage/[slug]/page.tsx | LOW | BreadcrumbList in JSON-LD for all coverage pages |
| B9 | Add BreadcrumbList to /tools/ pages | P2 | LOW | Easy | 0.75h | None | tools/*/page.tsx | LOW | BreadcrumbList on all 4 calculator pages |
| B10 | Add VideoObject + Event schema to /watch page | P2 | MEDIUM — video rich results | Easy | 1h | None | watch/page.tsx | LOW | VideoObject JSON-LD in page source |

**Phase B Redirect Strategy — Detailed:**

The per-slug redirect list for B2 (replacing /retirement/:slug+):

**Retirement slugs getting NEW PAGES (do NOT add to redirects):**
- retirement-planning-tools → becomes /retirement/retirement-planning-tools page
- social-security-and-medicare-coordination → becomes real page
- retirement-income-planning → becomes real page
- long-term-care-and-recovery-planning → becomes real page

**Retirement slugs that still need redirect to /retirement:**
From GSC data, the known slugs are the above four. Any other /retirement/* slug found in GSC → redirect to /retirement.

**Life-insurance slugs getting NEW PAGES:**
- permanent-life-insurance
- term-life-insurance
- final-expense-and-guaranteed-issue-insurance

**Life-insurance slugs keeping redirect:**
From GSC: navigating-life-insurance (23 impressions), life-insurance-comparison-term-vs-permanent (77 impressions), what-is-universal-life-insurance (6 impressions) → all redirect to /life-insurance.

**Critical-illness slugs getting NEW PAGES:**
- critical-illness-and-cancer-insurance (becomes /critical-illness/cancer-insurance-florida)
- hospital-indemnity-plans

**Phase B Risk Assessment:** MEDIUM — next.config.ts changes affect the entire redirect system. Before deploying:
1. Run `npm run build` to confirm no TypeScript errors
2. Test all existing /retirement/*, /life-insurance/*, /critical-illness/* redirects still work
3. Test that the NEW page paths are no longer redirected (deploy a test page first)

**Phase B Rollback:** `git revert` the next.config.ts commit. The catch-all redirects will be restored. New pages will still exist but will be shadowed by the restored catch-all (not a problem for rollback).

---

## PHASE C — Retirement Subpages (Week 3)

**Phase prompt:** `phase-c-prompt.md`

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| C1 | Create /retirement/retirement-planning-tools page | P0 | CRITICAL — 3,615 impressions | Medium | 5h | B2 | src/app/retirement/retirement-planning-tools/page.tsx, sitemap.ts | MEDIUM | Page live at URL; appears in GSC within 7 days of indexing |
| C2 | Create /retirement/social-security-and-medicare-coordination page | P1 | HIGH — 887 impressions | Medium | 4h | B2 | src/app/retirement/social-security-and-medicare-coordination/page.tsx, sitemap.ts | MEDIUM | Page live; added to sitemap |
| C3 | Create /retirement/retirement-income-planning page | P1 | MEDIUM — 150 impressions | Medium | 3h | B2 | src/app/retirement/retirement-income-planning/page.tsx, sitemap.ts | LOW | Page live; added to sitemap |
| C4 | Create /retirement/long-term-care-and-recovery-planning page | P2 | MEDIUM — 79 impressions | Medium | 3h | B2 | src/app/retirement/long-term-care-and-recovery-planning/page.tsx, sitemap.ts | LOW | Page live; added to sitemap |
| C5 | Update /retirement service page with links to all new subpages | P1 | MEDIUM — internal authority | Easy | 0.5h | C1, C2 | retirement/RetirementClient.tsx (or retirement/page.tsx) | LOW | /retirement links to all subpages |

**Content standards for Phase C pages:**
- Follow the numbered section format (01, 02, 03...) used by existing service pages
- Include "The Bottom Line" callout per section
- Dark navy CTA section at bottom
- All dollar figures must match ANNUAL_UPDATE.md verified 2026 figures
- Schema: Article + FAQPage on each; HowTo on C1 (tools page)

**Phase C Success Criteria:**
- All pages pass `npm run build`
- All pages appear in `sitemap.xml`
- GSC URL Inspection shows pages as "URL is on Google" within 14 days (Steve submits via MANUAL-02)
- /retirement service page has contextual links to all new subpages

---

## PHASE D — Life Insurance & Critical Illness Subpages (Week 4)

**Phase prompt:** `phase-d-prompt.md`

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| D1 | Create /life-insurance/permanent-life-insurance page | P1 | HIGH — 1,230 impressions | Medium | 5h | B4 | src/app/life-insurance/permanent-life-insurance/page.tsx, sitemap.ts | MEDIUM | Page live; added to sitemap |
| D2 | Create /life-insurance/term-life-insurance page | P1 | HIGH — 309 impressions | Medium | 4h | B4 | src/app/life-insurance/term-life-insurance/page.tsx, sitemap.ts | LOW | Page live |
| D3 | Create /life-insurance/final-expense-and-guaranteed-issue-insurance page | P1 | MEDIUM — 212 impressions | Medium | 3h | B4 | src/app/life-insurance/final-expense-and-guaranteed-issue-insurance/page.tsx, sitemap.ts | LOW | Page live |
| D4 | Create /critical-illness/cancer-insurance-florida page | P1 | MEDIUM — 196 impressions | Medium | 3h | B6 | src/app/critical-illness/cancer-insurance-florida/page.tsx, sitemap.ts | LOW | Page live |
| D5 | Create /critical-illness/hospital-indemnity-plans page | P2 | LOW — 81 impressions | Easy | 2h | B6 | src/app/critical-illness/hospital-indemnity-plans/page.tsx, sitemap.ts | LOW | Page live |
| D6 | Update /life-insurance service page with links to new subpages | P1 | MEDIUM | Easy | 0.5h | D1, D2, D3 | life-insurance/LifeInsuranceClient.tsx | LOW | /life-insurance links to all subpages |
| D7 | Update /critical-illness service page with links to new subpages | P1 | MEDIUM | Easy | 0.5h | D4, D5 | critical-illness/CriticalIllnessClient.tsx | LOW | /critical-illness links to all subpages |

**Note on /critical-illness/cancer-insurance-florida URL:**
The legacy Webflow URL is `/critical-illness/critical-illness-and-cancer-insurance`. The NEW page is at `/critical-illness/cancer-insurance-florida` — a better, more specific URL. The redirect in next.config.ts (from Phase B6) sends `/critical-illness/critical-illness-and-cancer-insurance` → `/critical-illness/cancer-insurance-florida`. This is correct — the new URL is more specific and better targeted.

**Phase D Success Criteria:**
- All 5 pages live and in sitemap
- All pages pass TypeScript and build
- /life-insurance and /critical-illness service pages link to their new subpages
- Steve submits all new pages to GSC URL Inspection (MANUAL-02 continuation)

---

## PHASE E — Blog Post Schema & Pillar Enhancement (Weeks 5–6)

**Phase prompt:** `phase-e-prompt.md`

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| E1 | Add faqs array to top blog post: medicare-advantage-vs-medicare-supplement-plans… | P1 | HIGH — 4,156 impressions; FAQ rich results | Medium | 2h | None | src/lib/blogPosts.ts | LOW | FAQPage schema in GSC Rich Results Test for this post |
| E2 | Add faqs array to: what-is-the-difference-between-medicare-part-a-and-part-b | P1 | HIGH — 1,992 impressions | Medium | 1.5h | None | blogPosts.ts | LOW | FAQPage schema active |
| E3 | Add faqs array to: which-medicare-plan-is-better-for-dental-and-vision-coverage | P1 | HIGH — 1,498 impressions | Medium | 1.5h | None | blogPosts.ts | LOW | FAQPage schema active |
| E4 | Add faqs array to: which-medicare-plan-is-best-for-people-with-chronic-conditions | P1 | MEDIUM — 454 impressions | Medium | 1h | None | blogPosts.ts | LOW | FAQPage schema active |
| E5 | Add faqs array to: how-does-medicare-part-c-compare-to-original-medicare | P1 | MEDIUM — 393 impressions | Medium | 1h | None | blogPosts.ts | LOW | FAQPage schema active |
| E6 | Add internal links from top 5 blog posts to calculator tools | P1 | MEDIUM — internal authority | Easy | 1h | None | blogPosts.ts (content additions) | LOW | Each post links to at least 1 calculator |
| E7 | Expand /medicare-coverage/medicare-supplement-plans-medigap: add Medigap plan comparison table (A–N), FL premium context, FAQPage schema | P1 | HIGH — 1,396 impressions, position 65 | Medium | 4h | None | medicareCoveragePosts.ts | LOW | Page has FAQPage schema; visible comparison table in browser |
| E8 | Expand /medicare-coverage/medicare-advantage-vs-medigap: add HowTo schema, comparison table, differentiate from blog post | P1 | HIGH — 1,093 impressions, position 78 | Medium | 3h | None | medicareCoveragePosts.ts | LOW | HowTo + FAQPage schema; clear comparison table |
| E9 | Expand /medicare-coverage/medicare-advantage-plans: add Miami-Dade carrier context, SNP section, FAQPage schema | P1 | HIGH — 748 impressions | Medium | 4h | None | medicareCoveragePosts.ts | LOW | FAQPage schema; SNP section visible |
| E10 | Add internal links from /medicare service page to pillar guides, calculator tools, and local pages | P1 | MEDIUM — authority distribution | Easy | 0.75h | None | medicare/MedicareClient.tsx | LOW | /medicare links to pillar guides and tools |
| E11 | Add HowTo schema to /blogs/turning-65-in-florida-your-complete-medicare-enrollment-checklist | P2 | MEDIUM | Easy | 0.75h | None | blogPosts.ts | LOW | HowTo JSON-LD in page source |

**YMYL Warning for Phase E:**
All FAQs added via `faqs` arrays MUST mirror questions that appear in the blog post HTML content. Per CLAUDE.md: "faqs: Q&A pairs emitted as FAQPage schema — must mirror the FAQ section inside content." Do not add FAQs that aren't answered in the body.

**Phase E Success Criteria:**
- Google Rich Results Test shows FAQPage eligibility for all 5 top blog posts
- Pillar pages have visible comparison tables
- /medicare-coverage/medicare-supplement-plans-medigap has FAQPage schema
- TypeScript passes; build passes

---

## PHASE F — Local Landing Pages (Weeks 7–8)

**Phase prompt:** `phase-f-prompt.md`
**Reference:** `local-seo-plan.md` for full page specifications

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| F1 | Create /medicare-broker-doral | P1 | HIGH — The Health Experts competitor | Medium | 4h | None | src/app/medicare-broker-doral/page.tsx, sitemap.ts | LOW | Page live; appears in sitemap |
| F2 | Create /medicare-broker-coral-gables | P1 | HIGH — affluent, Medigap-leaning | Medium | 3h | None | src/app/medicare-broker-coral-gables/page.tsx, sitemap.ts | LOW | Page live |
| F3 | Create /medicare-broker-hialeah | P1 | HIGH — largest population gap | Medium | 4h | None | src/app/medicare-broker-hialeah/page.tsx, sitemap.ts | LOW | Page live |
| F4 | Create /medicare-broker-homestead | P1 | HIGH — bilingual gap; cost assistance angle | Medium | 3h | None | src/app/medicare-broker-homestead/page.tsx, sitemap.ts | LOW | Page live |
| F5 | Add Footer Locations column with all local pages | P1 | HIGH — crawlability for all new pages | Easy | 1h | F1, F2, F3, F4 | Footer.tsx | LOW | All location pages in Footer |
| F6 | Update Header.tsx navigation: elevate Medicare, rename Services → Insurance, rename Learn → Resources, add Free Workshop | P2 | MEDIUM — UX + internal linking | Medium | 2h | None | Header.tsx | MEDIUM | New nav structure live; all existing links still work |
| F7 | Improve /medicare-broker-miami: add FAQPage schema, add carrier note, add links to new city pages | P2 | MEDIUM | Easy | 1.5h | F1, F2, F3, F4 | medicare-broker-miami/page.tsx | LOW | Miami page has FAQPage schema and city cross-links |
| F8 | Improve /medicare-broker-kendall: add FAQPage schema, add local provider note | P2 | MEDIUM | Easy | 1.5h | None | medicare-broker-kendall/page.tsx | LOW | Kendall page has FAQPage schema |
| F9 | Update /medicare-broker-south-florida to hub page linking all city pages | P2 | MEDIUM | Easy | 1h | F1, F2, F3, F4 | medicare-broker-south-florida/page.tsx | LOW | South Florida page links to all city pages |
| F10 | Create /medicare-broker-fort-lauderdale | P2 | MEDIUM — Broward expansion | Medium | 3h | None | src/app/medicare-broker-fort-lauderdale/page.tsx, sitemap.ts | LOW | Page live (Week 12 stretch) |

**Phase F Nav Change Risk (F6):**
The Header navigation change is MEDIUM risk because it touches the global navigation that appears on every page. Before deploying:
1. Test all existing nav links still work with new structure
2. Confirm mobile menu behavior is unchanged
3. Run Playwright E2E tests if available: `npx playwright test`
4. If something breaks, `git revert` the Header.tsx commit independently

**Phase F Content Standards:**
See `local-seo-plan.md` for full page-by-page specs including H2 outlines, FAQ content, schema requirements, and internal linking from/to each page.

---

## PHASE G — New FAQ & High-Value Blog Content (Weeks 9–10)

**Phase prompt:** `phase-g-prompt.md`
**Reference:** `content-roadmap.md` for full content specs

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| G1 | Create /resources/faq/medicare-for-immigrants-green-card-holders | P1 | HIGH — distinctive Miami demand | Medium | 2.5h | None | src/lib/faqs.ts, sitemap.ts | LOW | Page live; FAQPage schema |
| G2 | Create /resources/faq/medicare-special-enrollment-period | P1 | HIGH — missing topic | Medium | 2h | None | faqs.ts, sitemap.ts | LOW | Page live |
| G3 | Create /resources/faq/medicare-and-va-benefits | P1 | HIGH — large vet population in Miami | Medium | 2h | None | faqs.ts, sitemap.ts | LOW | Page live (FAQ for veterans already exists — verify this is new enough; if /resources/faq/veterans-and-medicare exists already, expand that instead of creating new) |
| G4 | Create /resources/faq/medicare-dual-eligible-dsnp | P1 | HIGH — Hialeah/Miami relevance; supports F3 | Medium | 2h | None | faqs.ts, sitemap.ts | LOW | Page live |
| G5 | Create /resources/faq/what-medicare-does-not-cover | P2 | MEDIUM — common question gap | Easy | 2h | None | faqs.ts, sitemap.ts | LOW | Page live |
| G6 | Update /resources page to organize FAQ sections by cluster | P2 | MEDIUM | Easy | 1h | G1–G5 | resources/page.tsx or ResourcesClient.tsx | LOW | Resources page organized by topic cluster |
| G7 | Write and publish /blogs/best-medicare-advantage-plans-miami-2026 | P1 | HIGH — commercial intent; local gap | Hard | 6h | None | blogPosts.ts | LOW | Post live; FAQs included; internal links to pillar pages |
| G8 | Write and publish /blogs/medicare-supplement-plan-g-florida-2026 | P1 | HIGH — commercial; "medigap plan g" queries | Hard | 5h | None | blogPosts.ts | LOW | Post live |
| G9 | Write and publish /blogs/irmaa-appeal-guide | P2 | MEDIUM — professional Miami audience | Medium | 4h | None | blogPosts.ts | LOW | Post live; links to IRMAA calculator |
| G10 | Add internal links from IRMAA calculator to irmaa-appeal-guide | P2 | MEDIUM | Easy | 0.25h | G9 | tools/irmaa-calculator/* (IrmaaClient.tsx) | LOW | Calculator links to appeal guide |
| G11 | Add contextual mid-article CTA boxes to top 10 blog posts | P2 | MEDIUM — conversion | Easy | 2h | None | blogs/[slug]/BlogPostClient.tsx | LOW | CTA box visible in top posts |

**Note on G3:** Check whether `/resources/faq/veterans-and-medicare` already exists in `src/lib/faqs.ts` before creating a new one. The content_audit.csv shows `/resources/faq/veterans-and-medicare` exists. If so, G3 should be an expansion of that page rather than a new FAQ.

---

## PHASE H — AI Search & Conversion Optimization (Weeks 10–12)

**Phase prompt:** `phase-h-prompt.md`

| Task ID | Task | Priority | Impact | Difficulty | Hours | Dependencies | Files Changed | Risk | Success Metric |
|---|---|---|---|---|---|---|---|---|---|
| H1 | Write and publish /blogs/medicare-for-snowbirds-florida-guide | P1 | HIGH — link magnet; South Florida unique | Hard | 5h | None | blogPosts.ts | LOW | Post live |
| H2 | Write and publish /blogs/medicare-for-non-citizens-florida | P1 | HIGH — Miami unique | Hard | 5h | G1 (cross-link from FAQ) | blogPosts.ts | LOW | Post live |
| H3 | Add speakable schema to top 5 FAQ pages | P2 | MEDIUM — AI voice search | Easy | 1.5h | None | resources/faq/[slug]/page.tsx or FAQSchema.tsx | LOW | Speakable JSON-LD in top FAQ pages |
| H4 | Add comparison tables to top 5 blog posts that lack them | P2 | MEDIUM — AI citation | Medium | 3h | None | blogPosts.ts (content) | LOW | Comparison tables visible in browser for key posts |
| H5 | Create BlogCTA component and add to all blog posts | P2 | MEDIUM — conversion | Medium | 3h | None | src/components/ui/BlogCTA.tsx, BlogPostClient.tsx | LOW | CTA box appears on every blog post |
| H6 | Create AuthorBox component (photo + bio + CTA) for blog posts | P2 | MEDIUM — E-E-A-T + conversion | Medium | 2h | None | src/components/ui/AuthorBox.tsx, BlogPostClient.tsx | LOW | Author box with Steve's photo at bottom of every post |
| H7 | Convert Hero slideshow to next/image with priority on first slide (LCP fix) | P2 | MEDIUM — Core Web Vitals | Hard | 3h | None | Hero.tsx | MEDIUM | PageSpeed Insights LCP score improves; no visual regression |
| H8 | Convert logo in Header.tsx and Footer.tsx to next/image | P3 | LOW | Easy | 0.75h | None | Header.tsx, Footer.tsx | LOW | Logo uses next/image component |
| H9 | Add carrier logos to homepage and /medicare page | P2 | MEDIUM — trust signal for "25+ carriers" claim | Medium | 2h | None | Homepage component or MedicareClient.tsx | LOW | Carrier logos visible; trust signal substantiated |
| H10 | Launch review acquisition campaign (Steve manual action) | P1 | HIGH — close gap with SFIB's 147 reviews | Easy | 1h setup | None | GoHighLevel (manual) | LOW | 150+ reviews within 90 days |
| H11 | Audit all blog post images for missing alt text | P3 | LOW | Easy | 1h | None | blogPosts.ts content HTML | LOW | No empty alt attributes on blog images |
| H12 | Add "Serving South Florida since 2009" + "Licensed in 35 States" badges to homepage hero | P2 | MEDIUM — trust signal | Easy | 1h | None | Hero.tsx | LOW | Trust badges visible in hero |

**Phase H Risk Assessment:**
- H7 (Hero slideshow next/image conversion) is MEDIUM risk because it touches the homepage LCP element. Test thoroughly:
  1. Verify slideshow still cycles correctly after conversion
  2. Check that objectPosition values are preserved
  3. Test on mobile viewport
  4. Verify no CLS regression in PageSpeed Insights

---

## 90-Day Week-by-Week Summary

| Week | Phase | Key Deliverables | Hours Est. |
|---|---|---|---|
| Pre-Work | Quick Wins | QW-01 through QW-10; Steve KRT + GSC actions | 2.5h code + Steve time |
| 1 | A | Schema fixes; canonical verification; footer local links; profilePage schema | 3h |
| 2 | A + B | NPN schema; WebApplication schema; BreadcrumbList schema; VideoObject; begin redirect audit | 6h |
| 3 | B + C | Complete catch-all replacement; create retirement subpages (tools, SS coordination, income planning) | 9h |
| 4 | D | Create life insurance subpages (perm, term, final expense); critical illness subpages; update service page links | 12h |
| 5 | E | FAQs for top 5 blog posts; internal links from blog posts to tools | 7h |
| 6 | E | Pillar page expansion (Medigap, Advantage vs Medigap, Medicare Advantage plans); /medicare internal links | 11h |
| 7 | F | Create Doral, Coral Gables, Hialeah pages; add Hialeah cross-links | 11h |
| 8 | F | Create Homestead page; Footer Locations update; Header nav update; improve Miami, Kendall pages | 9h |
| 9 | G | New FAQ pages (immigrants, SEP, D-SNPs, what-not-covered); resources page organization | 8h |
| 10 | G | Best Medicare Advantage Miami 2026 post; Medigap Plan G 2026 post; IRMAA appeal guide | 15h |
| 11 | H | Snowbird guide; non-citizens guide; author box + BlogCTA components | 10h |
| 12 | H | Speakable schema; comparison tables; LCP fix; carrier logos; review campaign launch; fort lauderdale page | 12h |

**Total estimated implementation hours: ~116 hours**
**Estimated over 90 days at ~13 hours/week: achievable at 2 focused sessions per week**

---

## 90-Day Measurement Checkpoints

### Week 4 Check (July 28, 2026)
- [ ] All Quick Wins deployed and verified
- [ ] Phase A complete: schema fixes, canonical verified, footer updated
- [ ] Phase B complete: catch-all redirects replaced for all three service sections
- [ ] Retirement subpages live: retirement-planning-tools, social-security-and-medicare-coordination
- [ ] Steve: KRT showing Miami local data for at least 10 keywords
- [ ] Steve: GSC URL inspection submitted for new retirement pages

### Week 8 Check (August 25, 2026)
- [ ] Phase D complete: all life insurance and critical illness subpages live
- [ ] Phase E complete: FAQPage schema on top 5 blog posts; pillar pages expanded
- [ ] Phase F Weeks 7–8: Doral, Coral Gables, Hialeah, Homestead pages live
- [ ] Footer Locations column updated with all new pages
- [ ] Steve: GSC Coverage report shows new pages as "Valid"
- [ ] KRT: First page rankings for at least 3 Miami local keywords

### Week 12 Check (September 19, 2026)
- [ ] All Phase G content live (FAQ pages + commercial blog posts)
- [ ] Phase H: BlogCTA and AuthorBox on all blog posts
- [ ] GSC impressions trend: target 80,000+ (from 67,474 baseline)
- [ ] GSC clicks trend: target 400+ clicks (from 261 baseline)
- [ ] GSC CTR improving: target above 0.5%
- [ ] KRT: First-page rankings for at least 5 Miami keywords
- [ ] Review count: 150+ (target)
- [ ] All new pages indexed: confirm via GSC Coverage → Valid

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Catch-all replacement breaks existing Webflow redirects | MEDIUM | HIGH | Audit ALL GSC /retirement/*, /life-insurance/*, /critical-illness/* URLs before replacing; test each redirect after deployment |
| New blog content doesn't match YMYL quality standards | LOW | HIGH | All dollar figures verified against ANNUAL_UPDATE.md and CMS/SSA sources before publishing |
| Header nav change breaks mobile menu | LOW | MEDIUM | Test mobile navigation after F6 change; run Playwright tests; have git revert ready |
| Hero next/image conversion causes visual regression | MEDIUM | LOW | Test slideshow cycling, objectPosition, and mobile appearance before deploying; use CSS comparison |
| GBP review count stale in schema | LOW | LOW | Steve checks monthly (MANUAL-03) |
| Phase B catch-all replacement deployed before new pages are ready | HIGH if rushed | HIGH | Never deploy Phase B without immediately deploying the corresponding Phase C/D pages in the same or next deployment |

---

## Dependency Map

```
Quick Wins → Phase A → Phase B → Phase C → GSC submission
                              ↘→ Phase D → GSC submission
Phase A → Phase E (parallel with B/C/D)
Phase E → Phase F (parallel)
Phase F → Phase G (parallel)
Phase G → Phase H (parallel)
Steve: KRT rebuild → measurement throughout
Steve: GSC submissions → after each new page deployment
```

---

## Quality Assurance Checklist (Before Any Deployment)

- [ ] `npx tsc --noEmit` passes with 0 errors
- [ ] `npm run build` completes without errors (validates all ~125 static pages)
- [ ] No existing routes broken (spot-check 5 existing pages load correctly)
- [ ] New pages appear in `sitemap.xml` (visit `https://www.aeinsurancefl.com/sitemap.xml`)
- [ ] New pages have correct canonical URL (curl test)
- [ ] Schema validates in Google Rich Results Test
- [ ] Content passes the test: "Would a 68-year-old Medicare beneficiary find this genuinely useful?"
- [ ] No keyword stuffing, no thin content, no doorway page patterns

---

*Plan prepared July 2026. Review at 30-day checkpoint (July 28), 60-day checkpoint (August 25), and 90-day checkpoint (September 19). Update docs/seo-performance-dashboard.md monthly with GSC metrics.*
