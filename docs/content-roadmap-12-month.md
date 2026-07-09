# 12-Month Content Roadmap & Keyword Cluster Strategy (Jul 2026 – Jun 2027)

Goal: make aeinsurancefl.com the most trusted Medicare educational site in the US while winning South Florida local intent. Every article belongs to a cluster; every cluster feeds a pillar; every pillar feeds a consultation CTA.

## Cluster Architecture

**Pillars** live at `/medicare-coverage/[slug]` (existing pattern — do not change URLs). **Cluster articles** live at `/blogs/[slug]`. Articles link up to their pillar, sideways to 2–3 siblings, and forward to one tool or CTA.

| # | Cluster | Pillar (existing/new) | Status |
|---|---|---|---|
| 1 | Medicare Basics (A/B/C/D, costs) | understanding-medicare-parts-a-b-c-d ✅ | Expand pillar; 6 articles exist |
| 2 | Turning 65 / New to Medicare | **NEW** /medicare-coverage/turning-65-medicare-guide | Seed article exists |
| 3 | Enrollment Periods (IEP/AEP/OEP/SEP, penalties) | **NEW** /medicare-coverage/medicare-enrollment-periods | Calculators exist; no content |
| 4 | Medicare Supplement (Plan G, N, HD-G, rates) | medicare-supplement-plans-medigap ✅ | Plan G/N article exists; needs plan pages |
| 5 | Medicare Advantage (HMO/PPO, local plans) | medicare-advantage-plans ✅ | 8 comparison articles exist |
| 6 | MA vs Medigap (decision content) | medicare-advantage-vs-medigap ✅ | Top asset lives here |
| 7 | Part D & prescriptions | part-d-prescription-drug-plans ✅ | Thin — needs cluster |
| 8 | IRMAA & Medicare costs | **NEW** article-level hub + IRMAA calculator ✅ | Calculator orphaned |
| 9 | Working past 65 / Employer coverage | **NEW** | Zero coverage |
| 10 | Veterans & Medicare | **NEW** | Zero coverage |
| 11 | Medicare Savings Programs / Extra Help | **NEW** | Zero coverage |
| 12 | Social Security coordination | **REBUILD** (ranked, now 404) | Pos 6–17 queries waiting |
| 13 | Local South Florida | medicare-broker-* pages ✅ | Add Broward, Palm Beach guides |
| 14 | Retirement / Life / Final Expense / Critical Illness | service pages ✅ | Support clusters, lower cadence |

## Month-by-Month Plan (4–5 pieces/month: ~2 new, ~2 updates, seasonal alignment)

**Jul 2026 — Foundation + recover lost equity**
- Ship P0 redirects; fix dates/schema; add /resources/faq + /book to sitemap
- NEW: Social Security & Medicare Coordination (rebuild — instant striking-distance win)
- NEW: Medicare Enrollment Periods Explained (pillar)
- UPDATE: MA vs Medigap FL (top asset expansion), Plan G vs N

**Aug 2026 — Medigap cluster**
- NEW: Medicare Supplement Plan G: Complete Guide · Plan N Guide · High-Deductible Plan G
- UPDATE: why-doctors-prefer-supplement, dental-and-vision post
- Prune approved REMOVE list (after Steve sign-off)

**Sep 2026 — AEP prep (AEP = Oct 15–Dec 7)**
- NEW: AEP 2027 Dates & Checklist · How to Read Your ANOC Letter · How to Compare Part D Plans for 2027
- UPDATE: medicare-in-miami (2027 refresh), enrollment-costs-faq

**Oct 2026 — AEP + local**
- NEW: Medicare in Broward County Guide · Medicare in Palm Beach County Guide
- NEW: Should You Switch Medicare Advantage Plans This AEP?
- UPDATE: chronic-conditions FL post (2027), snowbirds post

**Nov 2026 — AEP support + annual constants (per ANNUAL_UPDATE.md)**
- Run annual update: all calculator constants + article figures from CMS/SSA 2027 announcements
- NEW: 2027 Medicare Costs: Premiums, Deductibles, IRMAA · Part D Changes 2027
- UPDATE: HMO vs PPO, out-of-pocket costs post

**Dec 2026 — Late AEP + January prep**
- NEW: Missed AEP? Your Options · Medicare Advantage Open Enrollment (Jan 1–Mar 31) Guide
- UPDATE: year-end checklist, new-year coverage post (retitle for 2027)

**Jan 2027 — OEP + IRMAA season**
- NEW: IRMAA 2027: Brackets, Appeals (SSA-44), Life-Changing Events · Medigap Free-Look & Switching Rules
- UPDATE: spouse-not-eligible, retiring-at-68 Medigap window

**Feb 2027 — Working past 65 cluster**
- NEW: Working Past 65: Do You Need Medicare? · COBRA and Medicare: The Trap · HSA Contributions and Medicare
- UPDATE: Part A vs Part B

**Mar 2027 — Veterans + T65 pillar**
- NEW: VA Benefits and Medicare · TRICARE for Life and Medicare
- NEW pillar: Turning 65 Medicare Guide (consolidate checklist + spouse + timeline)

**Apr 2027 — Medicare Savings / lower-income cluster**
- NEW: Medicare Savings Programs in Florida (QMB/SLMB/QI) · Extra Help (LIS) for Part D
- UPDATE: broker-near-me posts (merge if stalled)

**May 2027 — Retirement cluster rebuild**
- NEW: Retirement Income Planning · Annuities Overview · How Much Do You Need to Retire? (recover the 3,494-impression keyword lost to 404)

**Jun 2027 — Life & final expense**
- NEW: Final Expense Insurance in Florida (dedicated page) · Life Insurance After 60
- Quarterly audit + roadmap refresh for year 2

## AEO/GEO Standards (every new/updated article)

- Question-based H2s; 40–60 word direct-answer block under each
- One comparison table or step list per article
- FAQ section (3–6 questions) with FAQPage schema
- Entity consistency: Medicare Advantage = Part C, Medigap = Medicare Supplement, spelled out on first use
- Cite Medicare.gov/CMS/SSA for every figure; flag annual values with `<!-- ANNUAL -->` comment in MDX/TSX for the November sweep
- Author: Steve Germain with credentials; licensed-agent reviewed line

## Fact-Check Gate

No Medicare figure ships without verification against Medicare.gov / CMS.gov / SSA.gov. 2026 figures currently on site get verified during each article's update pass. Annual values inventory lives in ANNUAL_UPDATE.md.
