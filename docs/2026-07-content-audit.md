# Content & Production Audit — July 2026

**Auditor:** Organic Growth Department (Claude)
**Scope:** Live production site (www.aeinsurancefl.com) + repository, all 77 blog posts, 7 medicare-coverage guides, site architecture, technical SEO.
**Baseline (GSC, Apr 9 – Jul 8, 2026, US):** ~260 clicks, ~66,400 impressions, avg position 40, 5,220 tracked queries.

---

## 1. Executive Summary

The site's technical foundation is strong (App Router SSG, canonical URLs, BlogPosting/FAQ/LocalBusiness schema, sitemap, robots, blog redirects from Webflow). The three problems that matter, in order:

1. **P0 — Legacy Webflow service URLs are 404ing and bleeding equity.** Blog redirects were handled in the migration; nested service pages were not. 14+ URLs with real rankings return 404 (details §3).
2. **P1 — Half the blog is off-topic for the business.** ~30 of 77 posts are lifestyle/seasonal/P&C content (houseplants, rip tides, roadside attractions, home & auto coverage) with near-zero search performance. They dilute Medicare topical authority and E-E-A-T for a YMYL site.
3. **P1 — Every post is stamped "June 24, 2026"** (migration date). Google and AI engines see 77 articles "published" the same day. Freshness signals and `datePublished` schema (non-ISO string) need repair.

The upside: the site already ranks position 4–20 for a meaningful set of commercial keywords (§4). Fixing redirects, consolidating the blog around Medicare, and building the missing pillar pages is a clear path to page 1.

---

## 2. Production vs Repository

| Check | Result |
|---|---|
| Repo `main` vs `origin/main` | In sync (bcc6eeb) |
| Live sitemap blog count | 75 vs 77 in repo — production is ~1 deploy behind; verify Vercel auto-deploy ran on latest push |
| Blog redirects (`/blog/*`, `/our-blog/*`, `/blog-your-spouse…/*` → `/blogs/*`) | ✅ Working (308) |
| Legacy service-page redirects | ❌ Missing — 404s (§3) |
| Canonicals, robots, sitemap.xml | ✅ Present and correct |
| BlogPosting schema | ✅ Present, author = Steve Germain Person entity. ⚠️ `datePublished` is "June 24, 2026" (not ISO 8601); `dateModified` = `datePublished`; `about` is hardcoded "Medicare Insurance" even on non-Medicare posts |
| Sitemap gaps | `/resources/faq` and `/book` missing from sitemap.ts |

## 3. P0 — Missing 301 redirects (LOW RISK, ship immediately)

Confirmed 404 on production, with GSC impressions (last 90 days) at stake:

| Legacy URL (404) | Impressions | Pos | Redirect to |
|---|---|---|---|
| /retirement/retirement-planning-tools | 3,494 | 8 | /retirement (rebuild later, §6) |
| /medicare-coverage/medicare-supplement-plans-medigap (old sub-slug variants) | 1,320 | 65 | exists — keep |
| /life-insurance/permanent-life-insurance | 1,210 | 80 | /life-insurance |
| /retirement/social-security-and-medicare-coordination | 822 | 10 | /retirement → **rebuild as dedicated page ASAP** (§4) |
| /life-insurance/term-life-insurance | 269 | 34 | /life-insurance |
| /life-insurance/final-expense-and-guaranteed-issue-insurance | 199 | 39 | /life-insurance |
| /critical-illness/critical-illness-and-cancer-insurance | 190 | 51 | /critical-illness |
| /retirement/retirement-income-planning | 147 | 9 | /retirement |
| /blog/medicare-advantage-vs-private-health-insurance-in-florida | 40 | 42 | already redirects ✅ |
| /retirement/long-term-care-and-recovery-planning | 77 | 58 | /retirement |
| /critical-illness/hospital-indemnity-plans | 74 | 37 | /critical-illness |
| /life-insurance/life-insurance-comparison-term-vs-permanent | 73 | 68 | /life-insurance |
| /medicare-coverage/what-is-medicare-supplement-medigap-insurance | — | — | /medicare-coverage/medicare-supplement-plans-medigap |
| /medicare-coverage/different-types-of-medicare-advantage-plans | — | — | /medicare-coverage/medicare-advantage-plans |
| /life-insurance/term-life-insurance-with-living-benefits | — | — | /life-insurance |
| /retirement/an-overview-of-annuities | — | — | /retirement |
| /home | — | — | / |
| /home/speak-with-an-agent | — | — | /contact |
| /webinarregistration | — | — | /watch |

**Risk: LOW.** Pure additions to `next.config.ts` redirects(); no existing URL changes. SEO impact: recovers link equity + rankings currently decaying. No UX/performance impact.

## 4. What's already working (protect this)

Striking-distance keywords (position 4–20, GSC):

| Keyword | Impr. | Pos | Owning page |
|---|---|---|---|
| health insurance broker miami | 313 | 16 | /health-insurance-broker-miami |
| miami health insurance agency | 145 | 17 | same |
| medicare retirement calculator | 90 | 19 | /tools |
| medicare advantage plans miami | 58 | 19 | needs a true local plan guide |
| social security + medicare coordination (6+ query variants) | ~150 combined | 6–17 | **404 page — rebuild** |
| medicare insurance brokers near me | 31 | 9 | /medicare-broker-near-me |
| best medicare plans chronic conditions florida 2026 | 34 | 17 | blog post (expand) |
| florida part c plan | 44 | 14 | blog post |
| florida medigap g | 17 | 18 | Plan G vs N post (needs dedicated Plan G page) |
| medicare agents near me | 38 | 19 | local pages |
| why a medicare agent near me may be better… | — | 8 | blog post (add CTA polish) |

Top organic asset: `/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you` — 4,068 impressions, position 17. One good expansion + internal links could make this a page-1 traffic driver.

**Leave alone:** URL structure, local landing pages, tools/calculators, medicare-coverage guides, schema architecture, watch funnel.

## 5. Article-by-Article Classification

Scoring: composite of relevance to business, search intent, performance, accuracy risk, freshness. Full 8-dimension page audits will be run per-article at update time (per Steve's audit standards).

### A. Medicare cluster — the core asset (24 posts)

| Article | Score | Action | Notes |
|---|---|---|---|
| medicare-advantage-vs-medicare-supplement-plans-in-florida | 8 | **EXPAND** | Top asset (4,068 impr, pos 17). Add comparison table, FAQ schema, 2026 costs, CTA |
| whats-the-difference-between-medigap-plan-g-vs-plan-n-in-florida | 7 | **EXPAND** | Money topic. Feed future /medicare/plan-g and /medicare/plan-n pillars |
| turning-65-in-florida-your-complete-medicare-enrollment-checklist | 7 | **EXPAND** | T65 pillar seed. Add timeline graphic, link calculators |
| which-medicare-plan-is-better-for-dental-and-vision-coverage | 6 | **EXPAND** | 1,411 impr at pos 76 — big headroom |
| which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida | 6 | **EXPAND** | Ranks for 2026 chronic-conditions queries (pos 14–17) |
| which-medicare-option-works-best-for-snowbirds | 7 | **EXPAND** | Unique Florida differentiator; low competition |
| what-is-the-difference-between-hmo-and-ppo-medicare-advantage-plans | 6 | EXPAND | 100 impr, pos 74 |
| what-is-the-difference-between-medicare-part-a-and-part-b | 6 | EXPAND | Basics cluster anchor |
| how-does-medicare-advantage-compare-to-medigap-for-travel-coverage | 6 | UPDATE | Pos 23 — internal links + snippet block |
| how-does-medicare-part-c-compare-to-original-medicare-in-florida | 6 | UPDATE | 393 impr |
| your-spouse-isnt-eligible-for-medicare-yet--now-what | 6 | EXPAND | Strong T65 question; AEO format |
| youre-retiring-at-68--did-you-miss-your-medigap-enrollment-window | 6 | EXPAND | Enrollment-periods cluster |
| medicare-enrollment-and-costs-faq-2026 | 6 | UPDATE | Annual refresh cycle (ANNUAL_UPDATE.md) |
| medicare-in-miami-2026 | 7 | KEEP | Local pillar; refresh each AEP |
| why-a-medicare-agent-near-me-may-be-better-than-insurance-comparison-websites | 6 | UPDATE | Pos 8 — conversion-focused polish |
| how-to-find-the-right-medicare-broker-near-me-in-florida | 6 | UPDATE | 62 impr |
| how-a-medicare-broker-near-me-helped-local-seniors-find-better-coverage | 5 | UPDATE | Merge candidate with above if both stall |
| which-medicare-plan-has-lower-out-of-pocket-costs | 5 | UPDATE | Got a click at pos 39 |
| which-medicare-plan-is-better-for-frequent-doctor-visits-in-florida | 5 | UPDATE | |
| which-medicare-plan-is-better-for-specialist-visits | 5 | UPDATE | Pos 13 on a query |
| medicare-advantage-vs-private-health-insurance-in-florida | 5 | UPDATE | |
| why-some-doctors-prefer-patients-with-medicare-supplement-plans | 6 | UPDATE | Great trust angle |
| what-to-know-about-medicares-new-wiser-model | 5 | UPDATE | News item — verify still current vs CMS |
| concierge-medical-care-a-new-way-to-better-health | 4 | UPDATE | Senior-relevant; tie to Medicare + HSA rules (⚠️ fact-check: Medicare enrollees can't contribute to HSA) |

### B. Life insurance cluster (12 posts) — KEEP/UPDATE, lower priority

term-insurance-a-smart-way (5, UPDATE) · what-happens-if-i-outlive-my-term (6, UPDATE — good question intent) · understanding-universal-life (5, UPDATE) · understanding-term-life-convertibility (5, KEEP) · term-life-vs-add (5, KEEP) · life-insurance-myths-debunked (5, UPDATE) · life-insurance-non-working-spouse (5, KEEP) · how-one-life-insurance-feature-saved (4, KEEP) · what-type-miami-small-business-owners (5, KEEP — local) · funding-business-buyout (4, KEEP — off-ICP but on-line) · key-man-insurance (4, KEEP) · healthy-living-impact-on-rates (4, MERGE into rates piece)

### C. Health insurance cluster (12 posts) — KEEP/UPDATE (supports /health-insurance line)

self-employed-options (6, UPDATE — 12 impr) · hidden-benefits (5, UPDATE — pos 7 on a query) · mental-health-services (5, UPDATE) · nutrition-counseling (4, KEEP) · understanding-the-eob (5, KEEP — good AEO topic) · surprise-medical-bill (5, KEEP) · er-urgent-care-virtual (5, UPDATE — 22 impr) · healthcare-sharing-ministries (5, KEEP) · do-healthy-people-need (4, KEEP) · would-you-bet-7000 (4, UPDATE — retitle; clickbait mismatch) · why-dental-isnt-covered (5, KEEP) · new-year-new-coverage-january (4, UPDATE — seasonal, schedule Dec)

### D. Generic insurance education (8 posts) — consolidate

questions-to-ask-before-choosing (4, MERGE) · top-5-common-insurance-myths (3, MERGE with life myths) · understanding-your-insurance-options (3, MERGE) · smart-ways-to-cut-costs (4, KEEP) · why-lowest-premium-costs-more (5, KEEP — good philosophy piece, matches brand) · discover-advantages-independent-agents (4, MERGE into "agent near me" piece) · year-end-insurance-checklist (4, KEEP — seasonal) · why-insurance-2025-resolutions (2, **REMOVE** — stale year in title) · understanding-the-unique-challenge (2, **REMOVE or fix** — broken/orphaned title)

### E. Off-vertical & lifestyle (21 posts) — REMOVE (redirect to /blogs)

**P&C content A&E doesn't sell:** bikes-kayaks-rooftop-gear · breaking-down-home-auto-life-coverage
**Lifestyle/seasonal with no insurance intent:** beat-the-heat · houseplants · ocean-lakes-pools · rip-tides · farmers-market · spring-bucket-list · spring-into-wellness · top-10-roadside-attractions · walk-first-wander-later · safe-travels-international · what-happens-hurt-on-vacation (borderline — could convert to travel-insurance/Medigap-travel angle) · when-life-happens-family-emergency-plan (borderline — senior-planning angle possible) · coverage-for-college-students · dental posts x2 (MERGE into one) · flexible-spending-accounts (borderline — keep if health line matters)

**Rationale:** near-zero clicks/impressions in GSC, zero business relevance, all stamped same date, generic-agency style. On a YMYL Medicare site, they dilute the entity signal ("what is this site about?") for both Google and AI engines. **Risk: MEDIUM** (removals are permanent) → requires Steve's approval; recommend 301 to /blogs, keep any post that has >0 clicks in GSC.

### F. Medicare-coverage guides (7) — the proto-pillars. All KEEP/EXPAND

medicare-advantage-plans · medicare-advantage-vs-medigap · medicare-enrollment-and-costs · medicare-simplified · medicare-supplement-plans-medigap · part-d-prescription-drug-plans · understanding-medicare-parts-a-b-c-d
These are the closest thing to pillar pages. GSC shows 697–1,320 impressions each but positions 41–78 → they need depth, internal links from blog cluster, FAQ schema, and 2026 figures.

## 6. Content gaps (highest-value missing pages)

1. **Social Security & Medicare coordination** — ranks pos 6–17 on 6+ queries with a 404 page. Rebuild at /retirement/social-security-and-medicare-coordination or /blogs.
2. **Plan G dedicated page** (+ Plan N, High-Deductible Plan G) — "florida medigap g" already impressing.
3. **Enrollment Periods hub** (IEP/AEP/OEP/SEP) — "what are the 3 medicare enrollment periods" impressing at pos 55.
4. **IRMAA explainer article** — calculator exists with zero supporting content.
5. **Employer coverage & Medicare (working past 65)** — classic T65 gap, zero coverage.
6. **Veterans & Medicare (VA/TRICARE)** — charter cluster, zero coverage.
7. **Medicare Savings Programs / Extra Help** — zero coverage.
8. **Local: Broward + Palm Beach Medicare guides** — only Miami/Kendall covered.
9. **Rebuilt retirement subpages** (income planning, annuities, LTC) — all previously ranked, now 404.
10. **Dedicated final expense page** — service in charter, no dedicated URL.

---

*Next docs: content-roadmap-12-month.md · internal-linking-standards.md · publishing-workflow.md · seo-kpis-and-backlog.md*
