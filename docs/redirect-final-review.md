# Final Redirect Review — Pre-Execution (July 2026)

**Status: RECOMMENDATION ONLY — no redirects executed. Supersedes the REDIRECT section of content-pruning-report.md.**

## Evidence base

- **GSC, 9-month window** (Oct 9 2025 – Jul 8 2026, legacy `/blog/` + new `/blogs/` URLs, verified per-slug): every candidate below has **0 clicks, 0 impressions, 0 ranking keywords**. They are not merely underperforming — they are invisible.
- **Internal linking value:** grep across all content and components: **0 inbound internal links** to every candidate. Redirecting them breaks nothing.
- **Backlinks:** no backlink index connected; unknown. Mitigation: 301 (not deletion) preserves any unknown equity, and all moves are reversible.
- **Indexation:** none appear in GSC page data over 9 months → indexed-but-invisible at best.

## Result of rewrite-first re-review

Applying "if it can realistically strengthen Medicare/Retirement/Life/local authority, rewrite it" honestly — two candidates move OUT of REDIRECT:

### Reclassified: REDIRECT → UPDATE (1)

**when-life-happens-building-a-family-emergency-plan-that-actually-works** (Dec 2 2025)
→ Rewrite as **"Estate & Emergency Planning Checklist for Seniors"**: documents, beneficiaries, final expense insurance, life insurance review, POA/healthcare surrogate (FL forms). Directly strengthens Life Insurance + Final Expense authority and gives the future final-expense cluster an internal-link source. Realistic rewrite: **yes** — the "be prepared" frame carries over; ~70% new content. Low priority (Phase 4).

### Reclassified: REDIRECT → MERGE (1)

**the-benefits-of-visiting-your-farmers-market-this-summer** (Dec 1 2025)
→ Real opportunity hiding here: **"Does Medicare Pay for Healthy Food? Grocery & Produce Benefits Explained"** — the "Medicare grocery allowance / food card" query family is high-volume and conversion-adjacent (MA supplemental benefits). But the farmers-market slug/URL is a poor host for that query. Correct move per hierarchy: **write the new food-benefits article (added to roadmap, Aug 2026), then 301 farmers-market into it** as its closest semantic ancestor. MERGE, not blind redirect.

### Confirmed REDIRECT (7)

| # | URL (/blogs/…) | Title | Destination | Why closest match | Could it be rewritten instead? | SEO value evidence |
|---|---|---|---|---|---|---|
| 1 | breathe-easy-the-surprising-benefits-of-houseplants-in-your-home | Breathe Easy: The Surprising Benefits of Houseplants… | `/blogs` | No insurance, Medicare, retirement, or local topic on the site relates to home décor; the blog index is the only honest semantic parent | No. "Healthy home for seniors" stretch has no query demand connecting to any A&E service. Fails the "because I can" test | 0 impr / 0 clicks / 0 kw (9 mo); 0 internal links |
| 2 | rip-tides-what-they-are-how-to-spot-them-and-what-to-do-if-youre-caught-in-one | Rip Tides: What They Are, How to Spot Them… | `/blogs` | Beach-safety PSA; no coverage line touches it | No. Florida-relevant but zero path to Medicare/insurance intent; would dilute, not build, authority | 0 / 0 / 0; 0 internal links |
| 3 | ocean-lakes-and-pools-oh-my-tips-for-a-safe-summer-around-water | Ocean, Lakes, and Pools, Oh My!… | `/blogs` | Same as #2 — duplicate theme, same verdict | No (same as #2) | 0 / 0 / 0; 0 internal links |
| 4 | the-ultimate-spring-bucket-list-fun-activities-to-enjoy-the-season | The Ultimate Spring Bucket List… | `/blogs` | Seasonal listicle, no service adjacency | No. "Activities for seniors" content builds no insurance authority and competes with lifestyle sites we can never beat | 0 / 0 / 0; 0 internal links |
| 5 | top-10-u-s-roadside-attractions-to-visit-this-summer | Top 10 U.S. Roadside Attractions… | `/blogs` | Travel listicle, no service adjacency | No (same as #4) | 0 / 0 / 0; 0 internal links |
| 6 | walk-first-wander-later-the-travel-hack-youll-wish-youd-known-sooner | Walk First, Wander Later: The Travel Hack… | `/blogs/safe-travels-how-to-prepare-your-family-for-an-international-vacation` *(after its approved UPDATE into "Traveling Abroad on Medicare")* | Only travel-themed page on the site; readers with travel intent land on our Medicare-abroad content | Marginal. It's a walking-tour tip with no insurance hook; the travel *cluster* absorbs its theme better than a rewrite could | 0 / 0 / 0; 0 internal links |
| 7 | bikes-kayaks-and-rooftop-gear-what-your-insurance-covers | Bikes, Kayaks, and Rooftop Gear: What Your Insurance Covers | `/blogs` | Pure auto/home P&C — **A&E sells no P&C products**; no on-site page shares its topic | No. Rewriting would mean publishing advice about products we don't sell — a trust liability, not an authority builder | 0 / 0 / 0; 0 internal links |

**Sequencing note for #6:** execute only after the safe-travels UPDATE ships, so the destination is genuinely travel+Medicare content (avoids soft-404 perception). If you prefer, it can go to `/blogs` immediately instead.

## Net effect vs original report

REDIRECT shrinks from 10 → **7**. Final tally: 18 KEEP · **27 UPDATE** · 12 EXPAND · **10 MERGE** · **7 REDIRECT** · 0 REMOVE.

**Risk of executing the 7: minimal.** Zero measured value at stake; 301s reversible; sitemap regenerates automatically; no internal links break (verified zero inbound).
