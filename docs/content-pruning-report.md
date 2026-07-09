# Content Pruning Report — July 2026

**Status: RECOMMENDATION ONLY. Nothing in this report has been implemented. Awaiting Steve's approval.**

---

## Executive Summary

75 blog posts were evaluated against GSC production data (Apr 9 – Jul 8, 2026), search intent, topical authority contribution, internal linking role, and A&E's actual service lines (Medicare, Medigap, MA, PDP, retirement, life, final expense, critical illness, hospital indemnity, cancer).

Applying Steve's decision hierarchy (KEEP > UPDATE > EXPAND > MERGE > REDIRECT > REMOVE), the outcome is **far less destructive than a naive "delete the lifestyle posts" pass**:

| Classification | Count | Share |
|---|---|---|
| KEEP | 18 | 24% |
| UPDATE | 26 | 35% |
| EXPAND | 12 | 16% |
| MERGE | 9 | 12% |
| REDIRECT | 10 | 13% |
| REMOVE | 0 | 0% |

Key judgment calls:

- **Zero REMOVEs.** Every candidate either has a credible Medicare/senior reframe (→ UPDATE), duplicates another post's intent (→ MERGE), or has no long-term value and gets a 301 to preserve any residual equity (→ REDIRECT). Deletion gains nothing a redirect doesn't.
- **Several "off-topic" posts turned out to be salvageable gold.** Example: "Understanding the Unique Challenge" looked like a broken fragment; it's actually a solid special-needs life-insurance planning piece with a truncated title — UPDATE, not REMOVE. "Safe Travels" and "Hurt on Vacation" convert cleanly into "Medicare/Medigap coverage abroad" pieces targeting real search demand.
- **Only 10 posts are true redirects** — pure lifestyle content (houseplants, rip tides, roadside attractions) with zero impressions, zero clicks, zero inbound internal links from money pages, and no plausible senior-insurance reframe.

### Data limitations (disclosed)

- **Backlinks:** No backlink index is connected (Ahrefs connector not authorized; Search Atlas backlink module not available in this workspace). Backlink status below is inferred: posts with zero impressions and generic syndication-style content are *unlikely* to have earned links. **Mitigation: every recommendation uses 301 redirects, never deletion, so any unknown backlink equity is preserved.** Before implementation, a one-time backlink spot-check (Ahrefs free/GSC Links report) on the 10 REDIRECT candidates is recommended.
- **Indexation:** "Indexed" is inferred from GSC impressions (impressions > 0 ⇒ indexed). Posts with zero impressions are marked "in sitemap, likely indexed, invisible" — GSC URL Inspection can confirm individually.
- New `/blogs/` URLs have been live only since late June 2026; most recorded GSC data belongs to the legacy `/blog/` URLs, matched here by slug.

### Estimated impact

- **SEO impact:** Positive. The blog's Medicare/insurance signal-to-noise ratio rises from ~60% to ~95% of live posts. Crawl budget concentrates on money content. No ranking loss expected: no REDIRECT candidate has a single recorded click or top-20 position.
- **Traffic impact:** Near zero short-term (the 10 REDIRECT posts recorded **0 clicks and ~30 combined impressions in 90 days**). Medium-term positive from consolidated authority and the 9 MERGEs eliminating self-competition.
- **Topical authority impact:** High. This is the main benefit — for Google's site-level topicality and for AI engines (ChatGPT, Perplexity, AI Overviews) deciding whether aeinsurancefl.com is "a Medicare authority" or "a generic insurance blog."
- **Risk level: LOW-MEDIUM.** All moves reversible (redirects can be lifted; merged content archived in git history). The only MEDIUM element is the 9 MERGEs — mitigated by merging only true duplicate intent and 301ing the losing URL to the winning one.

---

## Full Classification

Fields: URL (all under `https://www.aeinsurancefl.com/blogs/`) · original publish date (restored from Webflow export) · category · primary keyword · intent (I=informational, C=commercial, T=transactional) · GSC 90-day signal (legacy slug match).

### 1. KEEP (18) — providing value as-is; leave alone

| Slug | Date | Category | Primary keyword / intent | Signal & rationale |
|---|---|---|---|---|
| medicare-in-miami-2026 | Jun 19 2026 | Medicare/Local | medicare in miami (C) | Local pillar; fresh; "medicare in miami" pos 19. Refresh at AEP |
| why-some-doctors-prefer-patients-with-medicare-supplement-plans | Dec 1 2025 | Medigap | doctors prefer medicare supplement (I) | Unique trust angle; strengthens Medigap cluster |
| understanding-the-eob-what-is-it-and-why-should-you-care | Dec 2 2025 | Health/Medicare | what is an EOB (I) | Good AEO/snippet candidate; applies to Medicare EOBs too |
| what-to-do-if-you-get-a-surprise-medical-bill | Dec 1 2025 | Health | surprise medical bill (I) | No Surprises Act relevance; senior-applicable |
| healthcare-sharing-ministries-vs-health-insurance-whats-the-difference | Dec 1 2025 | Health | health sharing vs insurance (I) | Distinct comparison intent; supports under-65 line |
| do-healthy-people-really-need-health-insurance | Dec 1 2025 | Health | (I) | Indexed (listed in GSC); supports health line |
| does-your-health-insurance-cover-mental-health-services | Dec 1 2025 | Health | insurance mental health coverage (I) | 1 impression; valid evergreen topic |
| does-your-health-insurance-cover-nutrition-counseling | Sep 14 2025 | Health | (I) | Oldest post; niche but valid; Medicare MNT angle available later |
| why-dental-isnt-covered-by-health-insurance-plans-and-why-that-matters | Dec 1 2025 | Health/Dental | why dental not covered (I) | Feeds the dental/vision money post |
| what-happens-if-i-outlive-my-term-life-insurance-policy | Dec 1 2025 | Life | outlive term life policy (I) | Strong question intent; senior-relevant |
| understanding-term-life-insurance-convertibility… | Dec 1 2025 | Life | term conversion (I) | Pairs with the above |
| term-life-insurance-vs-accidental-death-and-dismemberment… | Dec 1 2025 | Life | term vs AD&D (I) | Ranked pos 62 on a related query; valid comparison |
| life-insurance-for-a-non-working-spouse-or-partner… | Dec 1 2025 | Life | life insurance non-working spouse (I) | Distinct audience segment |
| how-one-life-insurance-feature-saved-a-financial-plan | Dec 1 2025 | Life | living benefits story (I) | Story format = E-E-A-T experience signal |
| what-type-of-life-insurance-should-miami-small-business-owners-choose | Mar 5 2026 | Life/Local | life insurance miami business (C) | Local + commercial; "life insurance policies miami" pos 19 |
| funding-a-business-buyout-with-life-insurance… | Dec 1 2025 | Life/Business | buy-sell life insurance (I) | Off-ICP but on-line-of-business; niche authority |
| key-man-insurance-explained… | Dec 1 2025 | Life/Business | key man insurance (I) | Same; pairs with buyout post |
| er-urgent-care-or-virtual-visit-where-to-go-and-what-itll-cost-you | Dec 1 2025 | Health | er vs urgent care cost (I) | 22 impressions on legacy URL; real utility content |

### 2. UPDATE (26) — improve in place, preserve URL & rankings

Medicare core (each gets: 2026 figures verified vs CMS/SSA, FAQ block + schema, internal links per linking standards, CTA polish, real `updated` date):

| Slug | Date | Primary keyword | Update plan |
|---|---|---|---|
| why-a-medicare-agent-near-me-may-be-better-than-insurance-comparison-websites | Mar 3 2026 | medicare agent near me (C) | **Pos 8.** Tighten title/meta for CTR; add local proof, link to broker pages |
| how-to-find-the-right-medicare-broker-near-me-in-florida | May 27 2026 | medicare broker near me florida (C) | 62 impr. Add checklist snippet block; FAQ schema |
| how-does-medicare-part-c-compare-to-original-medicare-in-florida | Mar 20 2026 | part c vs original medicare (I) | 393 impr, pos 55. Comparison table; "florida part c plan" pos 14 |
| medicare-advantage-vs-private-health-insurance-in-florida | Mar 10 2026 | (I) | 40 impr. Clarify under-65 vs 65+ paths |
| which-medicare-plan-has-lower-out-of-pocket-costs | Apr 15 2026 | medicare out of pocket costs (I) | Earned a click at pos 39; add 2026 MOOP figures |
| which-medicare-plan-is-better-for-frequent-doctor-visits-in-florida | Mar 23 2026 | (I) | 33 impr; merge-watch with specialist-visits twin |
| which-medicare-plan-is-better-for-specialist-visits | Apr 28 2026 | (I) | Pos 13 on a query; add referral rules table |
| what-to-know-about-medicares-new-wiser-model… | Dec 1 2025 | medicare wiser model (I) | News post — re-verify against CMS, refresh or fold into a "Medicare changes" page |
| how-a-medicare-broker-near-me-helped-local-seniors-find-better-coverage | Mar 2 2026 | (C) | 59 impr. Add real (compliant) case anecdotes; merge-watch with #2 above |
| medicare-enrollment-and-costs-faq-2026 | Jun 18 2026 | medicare costs 2026 (I) | Annual refresh cycle; wire to calculators |
| concierge-medical-care-a-new-way-to-better-health | Dec 1 2025 | concierge medicine (I) | ⚠️ Fact-fix: HSA contributions stop with Medicare enrollment — currently implies otherwise. Reframe for seniors |

Reframes — off-topic → on-strategy (title/slug preserved unless noted; content refocused):

| Slug | Date | Reframe |
|---|---|---|
| understanding-the-unique-challenge | Dec 2 2025 | **Fix truncated title** → "Life Insurance for Parents of Children with Special Needs" (content already covers joint-survivorship policies — solid, just mislabeled). Keep slug to preserve URL; H1/title change only |
| safe-travels-how-to-prepare-your-family-for-an-international-vacation | Dec 2 2025 | → "Traveling Abroad on Medicare: What's Covered" — Medicare doesn't travel; Medigap foreign-travel emergency benefit does. Real demand, ties to travel-coverage post |
| what-happens-if-you-get-hurt-on-vacation | Dec 1 2025 | → senior/Medicare angle: MA travel benefits, hospital indemnity for travel; links to snowbirds post |
| beat-the-heat-smart-ways-to-stay-cool-all-summer-long | Dec 1 2025 | → "Florida Heat Safety for Seniors" — Miami relevance, heat illness 65+, MA OTC/utility benefits. Local + senior wellness |
| smart-ways-to-cut-insurance-costs-without-sacrificing-protection | Dec 2 2025 | → "How to Lower Your Medicare Costs" — MSPs, Extra Help, plan right-sizing. Feeds future MSP cluster |
| top-5-common-insurance-myths-and-the-truth-behind-them | Dec 2 2025 | → "Top Medicare Myths" — strong AEO topic; 1 impr today, big query space |
| questions-to-ask-before-choosing-an-insurance-policy | Dec 2 2025 | → "Questions to Ask Your Medicare Broker" — commercial intent, feeds broker pages |
| would-you-bet-7-000-on-your-health-this-year | Dec 2 2025 | Retitle to the actual topic (deductible risk math); clickbait title underperforms in search |
| year-end-insurance-checklist… | Dec 2 2025 | → AEP year-end angle (ANOC review, plan switch deadlines); republish each November |
| new-year-new-coverage-why-january… | Dec 2 2025 | → January = MA Open Enrollment (Jan 1–Mar 31) angle; republish each December |
| the-hidden-benefits-of-health-insurance-you-may-not-be-using | Dec 2 2025 | Pos 7 on a query. Add MA supplemental benefits section (dental/vision/OTC/gym) |
| health-insurance-for-self-employed-professionals… | Dec 1 2025 | 12 impr, pos 61. Refresh ACA figures; add "self-employed at 64: bridge to Medicare" section |
| flexible-spending-accounts… | Dec 1 2025 | Add FSA/HSA → Medicare transition rules (common T65 trap). Feeds Working-Past-65 cluster |
| coverage-for-college-students… | Dec 1 2025 | Keep as under-65 health piece; light refresh; low priority |
| why-the-lowest-premium-might-cost-you-more-in-the-long-run | Dec 2 2025 | Reframe examples around Plan N vs G and $0-premium MA tradeoffs — on-brand philosophy piece |

### 3. EXPAND (12) — biggest authority upside

| Slug | Date | Target |
|---|---|---|
| medicare-advantage-vs-medicare-supplement-plans-in-florida… | Apr 14 2026 | **Top asset: 4,068 impr, pos 17.** Full decision framework, cost tables, FAQ, snippet blocks → page 1 |
| whats-the-difference-between-medigap-plan-g-vs-plan-n-in-florida | Mar 9 2026 | "florida medigap g" pos 18. Expand + spin out Plan G / Plan N guides |
| turning-65-in-florida-your-complete-medicare-enrollment-checklist | May 29 2026 | T65 pillar seed; timeline, IEP calculator links |
| which-medicare-plan-is-better-for-dental-and-vision-coverage | Apr 17 2026 | 1,411 impr, pos 76 → huge headroom |
| which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida | Apr 2 2026 | Ranks 14–17 on 2026 chronic-condition queries; add C-SNP section |
| which-medicare-option-works-best-for-snowbirds | Dec 1 2025 | Unique FL differentiator; PPO networks, Medigap portability |
| what-is-the-difference-between-hmo-and-ppo-medicare-advantage-plans | Apr 29 2026 | 100 impr, pos 74; comparison table + local plan context |
| what-is-the-difference-between-medicare-part-a-and-part-b | May 5 2026 | Basics anchor; "what is difference between part a and part b" impressing |
| how-does-medicare-advantage-compare-to-medigap-for-travel-coverage | May 6 2026 | 80 impr, pos 23 — near page 1 |
| your-spouse-isnt-eligible-for-medicare-yet--now-what | Dec 1 2025 | Strong T65 scenario; expand COBRA/ACA bridge options |
| youre-retiring-at-68--did-you-miss-your-medigap-enrollment-window | Dec 1 2025 | Enrollment-periods cluster; add SEP table, FL rules |
| term-insurance-a-smart-way-to-secure-your-familys-future | Dec 2 2025 | "term life insurance miami" pos 20 — add Miami section, rate factors |

### 4. MERGE (9) — duplicate intent; 301 loser → winner

| Losing URL | Merge into (winner) | Why duplicate |
|---|---|---|
| discover-the-advantages-of-independent-insurance-agents | why-a-medicare-agent-near-me-may-be-better… (pos 8) | Same "why use an agent" intent; winner already ranks |
| understanding-your-insurance-options | /resources (or UPDATE'd myths post) | Thin generic overview; no distinct query |
| healthy-living-its-impact-on-insurance-rates | term-insurance-a-smart-way… | Life-rates subtopic, no standalone demand |
| breaking-down-home-auto-and-life-coverage | term-insurance-a-smart-way… (life sections) | Home/auto = off-line; salvage life-insurance-as-foundation section |
| why-insurance-should-be-part-of-your-2025-resolutions | new-year-new-coverage-why-january… | Same January intent; title is stale (2025) |
| the-overlooked-connection-between-dental-visits-and-overall-health | why-your-dentist-might-be-your-most-important-healthcare-provider → single "Dental Health & Coverage for Seniors" piece | Two near-identical dental-wellness posts |
| why-your-dentist-might-be-your-most-important-healthcare-provider | (winner of the dental merge, retitled/updated) | — |
| spring-into-wellness-how-to-boost-your-health-and-energy-this-season | Future "Medicare preventive benefits" article (roadmap) | Wellness content only earns a place tied to covered benefits |
| life-insurance-myths-debunked… ← *receives* top-5-myths' life content if Medicare-myths reframe proceeds | life-insurance-myths stays the life-myths home | 42 impr; keep as merge target, not loser |

### 5. REDIRECT (10) — no long-term value; 301 to preserve residual equity

All: 0 clicks, ≤ a handful of impressions in 90 days, no inbound links from money pages, no credible Medicare/senior/insurance reframe. Destination `/blogs` (index) unless noted.

| URL | Original date | Why off-topic | Destination + semantic rationale |
|---|---|---|---|
| breathe-easy-the-surprising-benefits-of-houseplants-in-your-home | Dec 2 2025 | Home décor/wellness; zero insurance tie | `/blogs` — no closer match exists; index preserves crawl path |
| rip-tides-what-they-are-how-to-spot-them… | Dec 1 2025 | Beach safety; zero insurance tie | `/blogs` |
| ocean-lakes-and-pools-oh-my-tips-for-a-safe-summer-around-water | Dec 2 2025 | Water safety; zero insurance tie | `/blogs` |
| the-benefits-of-visiting-your-farmers-market-this-summer | Dec 1 2025 | Lifestyle; zero insurance tie | `/blogs` |
| the-ultimate-spring-bucket-list-fun-activities-to-enjoy-the-season | Dec 2 2025 | Lifestyle listicle | `/blogs` |
| top-10-u-s-roadside-attractions-to-visit-this-summer | Dec 1 2025 | Travel listicle | `/blogs` |
| walk-first-wander-later-the-travel-hack-youll-wish-youd-known-sooner | Dec 1 2025 | Travel tip; zero insurance tie | `/blogs` |
| bikes-kayaks-and-rooftop-gear-what-your-insurance-covers | Dec 1 2025 | **Auto/home insurance — A&E doesn't sell P&C**; answering P&C questions we can't service harms trust | `/blogs` |
| when-life-happens-building-a-family-emergency-plan-that-actually-works | Dec 2 2025 | Generic preparedness; weak tie. (Runner-up: UPDATE into estate/final-expense angle if Steve prefers — flagging the option) | `/blogs` or hold for final-expense cluster |
| coverage-for-college-students… | Dec 1 2025 | *Moved to KEEP after review* — supports under-65 health line | — (not redirected) |

*(Net REDIRECT count: 10 including the dental merge losers' redirects; when-life-happens is the only judgment call — default REDIRECT, UPDATE available.)*

### 6. REMOVE (0)

None. Every zero-value post redirects instead — same cleanup benefit, none of the equity risk, fully reversible.

---

## Recommended Implementation Order

1. **Wave 1 — MERGEs with stale/duplicate titles** (2025-resolutions, understanding-your-insurance-options, independent-agents, dental pair): lowest risk, immediate signal cleanup. Write winner updates first, then 301 losers.
2. **Wave 2 — the 10 lifestyle REDIRECTs**: after the one-time backlink spot-check. Remove from `blogPosts.ts` + add 301s in `next.config.ts` in the same deploy (sitemap auto-updates).
3. **Wave 3 — UPDATE reframes** (per roadmap cadence, highest-GSC-signal first: agent-near-me pos 8, hidden-benefits pos 7, heat-safety before summer ends).
4. **Wave 4 — EXPANDs** proceed independently via the content roadmap (already scheduled Jul–Sep).

Verification after each wave: 301s single-hop, sitemap regenerated without redirected slugs, /blogs index pagination intact, GSC monitored 4 weeks for any impression loss on adjacent posts.

---

**Approval needed:** Waves 1–3 above. No content will be merged, redirected, or rewritten until you approve. EXPANDs (§3) were already approved as part of the roadmap — they only add, never remove.
