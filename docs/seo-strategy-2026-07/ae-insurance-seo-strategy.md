# A&E Insurance Agency — Enterprise SEO Strategy
## South Florida Medicare Market Dominance Plan
### July 2026

---

## Executive Summary

A&E Insurance Agency has built something rare: a premium Medicare insurance brand with genuine authority signals, a seasoned founder, a published book, 3,000+ documented clients, and 126 five-star Google reviews — operating in one of the highest-value insurance markets in the United States. South Florida's Medicare-eligible population is growing at nearly twice the national rate, driven by both aging Baby Boomers and retirees relocating from the northeast. The commercial opportunity is exceptional. The SEO problem is structural, not content.

The site currently generates 67,474 impressions and just 261 clicks over the April–July 2026 period — a 0.38% click-through rate that reflects pages ranking too deep to drive traffic, not a lack of topical relevance. The site ranks for 5,356 unique queries. Google clearly finds the content relevant. The conversion problem is position, not presence. The top blog post by impression volume generates 4,156 impressions and zero clicks — because Google is indexing the legacy `/blog/` redirect URL, not the live `/blogs/` canonical. This is the most critical technical finding in the audit.

The strategic opportunity is threefold. First, correcting the redirect index attribution gap will unlock immediate traffic from thousands of impressions that already exist. Second, rebuilding the subpage architecture for Retirement, Life Insurance, and Critical Illness — where legacy Webflow URLs with real rankings (3,615 impressions for retirement planning tools alone) are being swallowed by catch-all redirects — will recover substantial organic traffic without creating any new content. Third, building topical depth in the clusters where the site already has partial authority — Medicare Advantage vs. Medigap, Medicare enrollment, and local South Florida Medicare — will systematically move rankings from page 3–10 into page 1 over 90–180 days.

The competitors in this market are not national insurance aggregators. They are local agencies like South Florida Insurance Brokers (sfib.net, since 2002), Medicare Advisors of South Florida (medicareadvisorsofsfl.com), The Health Experts Insurance (healthexps.com, bilingual, Doral-based), and Lacayo Group Insurance (lgimedicare.com). None has content depth, schema sophistication, interactive tools, or topical authority comparable to what A&E has already built. A&E's advantage is real and defensible — the gap is execution on technical fundamentals and content completion.

Expected outcome of executing this strategy over 90 days: recovery of 4,000–6,000 monthly impressions currently hidden behind redirect/index issues; movement of the top three blog posts from positions 18–37 to positions 5–15 for their core keywords; and establishment of local landing page rankings for at least four South Florida cities. Over 180 days, with the content roadmap executed, the site should achieve category authority for South Florida Medicare searches and generate 500–1,000 organic visits per month — at zero per-click cost, with qualified commercial intent.

---

## Current State Assessment

### GSC Performance (April 1 – July 10, 2026 vs. January 1 – March 31, 2026)

| Metric | Value |
|---|---|
| Total indexed pages | 81 |
| Total sitemap URLs | ~125 (21 static + 68 blog + 7 coverage + 29 FAQ) |
| Tracked keywords | 5,356 |
| Total impressions (current period) | 67,474 |
| Total clicks (current period) | 261 |
| Average CTR | 0.38% |
| Average position | ~40 |

### Top Pages by Impressions (GSC, US, April–July 2026)

| URL | Impressions | Clicks | Avg Position | Issue |
|---|---|---|---|---|
| /blog/medicare-advantage-vs-supplement… | 4,156 | 0 | 18 | Legacy URL — 301 redirects; Google indexing redirect source not destination |
| /retirement/retirement-planning-tools | 3,615 | 1 | 8 | Legacy Webflow URL — catch-all 301 to /retirement; content gap |
| / (homepage) | ~5,454 total | 6 | 3–26 | Split in GSC rows; branded + near-me queries |
| /blog/what-is-the-difference-between-medicare-part-a-and-part-b | 1,992 | 0 | 37 | Legacy URL — redirect; live version invisible to GSC |
| /blog/which-medicare-plan-is-better-for-dental-and-vision | 1,498 | 0 | 76 | Legacy URL — deep positions |
| /medicare-coverage/medicare-supplement-plans-medigap | 1,396 | 0 | 65 | Pillar page ranking positions 10–100 |
| /life-insurance/permanent-life-insurance | 1,230 | 0 | 79 | Legacy Webflow URL — catch-all redirect |
| /medicare-coverage/medicare-advantage-vs-medigap | 1,093 | 0 | 78 | Pillar page ranking deep |
| /retirement/social-security-and-medicare-coordination | 887 | 2 | 9 | Legacy URL — catch-all to /retirement; 11 keywords |

### Top Keywords by Impressions (GSC, US, April–July 2026)

| Keyword | Impressions | Position | Notes |
|---|---|---|---|
| florida medicare key difference between advantage and supplement programs | 3,209 | 10 | Core commercial keyword — position 10 is page 1 bottom |
| insurance agent near me | 516 | 1 | Branded navigation query |
| health insurance | 432 | 1 | Branded — not driving topical traffic |
| what does medicare part a and b cover | 383 | 81 | Deep — content gap in pillar coverage |
| health insurance broker miami | 316 | 15 | Local commercial — nearly page 2 |
| permanent life insurance | 316 | 84 | Catch-all redirect page receiving this |
| medicare supplement florida | 218 | 44 | Mid-page 4 |
| medigap plans florida | 214 | 58 | Page 6 |
| medicare supplement plans florida | 213 | 38 | Page 4 |
| medicare broker near me | 149 | 1 | Navigational — reaching A&E but not clicking |
| seguros medicos en miami | 165 | 1 | Spanish — significant untapped bilingual opportunity |
| medicare advantage plans miami | 65 | 17 | Local — page 2 |

### Critical Structural Findings

1. **The Redirect Index Gap**: The top 6 blog posts by impression volume are ALL legacy `/blog/` URLs that 301-redirect to `/blogs/`. Google has indexed the redirect source, not the canonical destination. The live `/blogs/` versions appear to have near-zero GSC presence. This means thousands of impressions exist but cannot generate clicks because the redirected URL cannot be clicked in SERPs.

2. **Catch-All Redirect Revenue Leak**: Five legacy Webflow service subpages (retirement planning tools, social security coordination, permanent life insurance, term life insurance, final expense insurance) together receive 6,251 impressions across 40+ keywords and redirect to generic service pages, losing all content relevance signal and click opportunity.

3. **KRT Configuration Failure**: All 25 keywords in KRT project 70164 show null positions because they are tracked at the United States national level. A&E is a local/regional brand. It does not rank nationally for generic terms like "medicare broker near me" (9,900 SV) but likely ranks locally in Miami. The rank tracker provides zero actionable data in its current configuration.

4. **No Spanish Content Despite Spanish Schema**: The WebSite schema declares `inLanguage: ["en-US", "es"]` but there is no Spanish-language content anywhere on the site. This misrepresentation to Google should be corrected.

5. **Local Landing Pages Are Navigation Orphans**: The five local landing pages (`/medicare-broker-miami`, `/medicare-broker-south-florida`, `/medicare-broker-kendall`, `/medicare-broker-near-me`, `/health-insurance-broker-miami`) do not appear in the Header navigation or Footer quick links. They receive internal links only from the sitemap — effectively orphaned from the crawl perspective.

---

## Competitive Landscape

### Competitor Inventory

**1. South Florida Insurance Brokers — sfib.net**
- Domain age: Since 2002 (established before A&E)
- Approach: Full-service Medicare agency with heavy location page strategy — they have dedicated pages for Miami, Boca Raton, Orlando, Melbourne, Tampa, and other Florida cities
- Content depth: Medicare FAQs page, service-specific pages (Medicare Advantage, Supplement, Part D), location pages
- Reviews: 147 five-star reviews (beating A&E's 126)
- Key advantage over A&E: Longer domain history, broader location page coverage
- Key disadvantage: No visible blog/resource center with original educational content; no interactive tools; no named founder author; generic agency feel

**2. Medicare Advisors of South Florida — medicareadvisorsofsfl.com**
- Founded: ~2022 (newer)
- Approach: Personal brand approach (Yoni Bick) with blog content and location-specific pages
- Content: Blog section with South Florida-specific Medicare articles; clear personal brand
- Reviews: 35+ five-star Google reviews
- Key advantage: Strong personal brand, newer clean domain, active blog
- Key disadvantage: Single broker with no book/workshop, fewer reviews, less content depth than A&E

**3. The Health Experts Insurance — healthexps.com**
- Founded: 2019
- Location: Doral, FL (inside A&E's primary service area)
- Approach: Bilingual (Spanish/English) women-owned agency serving Medicare, ACA, and private health
- Services: Medicare Advantage, Supplement, ACA Marketplace, private health insurance
- Key advantage: Bilingual native Spanish service is a clear differentiator in Miami-Dade
- Key disadvantage: Less content depth, no proprietary tools, newer brand

**4. Lacayo Group Insurance — lgimedicare.com**
- Focus: Medicare-first brand with Miami/South Florida orientation
- Content: Dedicated Medicare pages and location targeting
- Reviews: Not confirmed from search data

**5. The Big 65 — thebig65.com**
- Approach: Florida-statewide Medicare broker with dedicated location pages
- Content: Location-specific Medicare pages for major Florida cities
- Key observation: Statewide reach but no apparent local Miami community presence

### A&E's Competitive Advantages

| Advantage | Signal Strength | Competitor Parity |
|---|---|---|
| Medicare Decoded (published book) | Exceptional | None have this |
| Steve Germain personal brand | Strong | MASFL (Yoni Bick) has similar approach |
| 4 interactive calculator tools | Strong | None have equivalent |
| 7 pillar Medicare coverage guides | Strong | SFIB has some but less depth |
| 68+ blog posts with topical coverage | Strong | Others have 5–20 posts |
| 29 FAQ pages with FAQPage schema | Strong | None match this |
| NPN in footer + credential schema | Strong | Standard practice |
| BBB accreditation | Medium | Some competitors have this |
| Bilingual claim in schema | Medium (unsubstantiated) | The Health Experts has native Spanish service |

### Competitive Gaps A&E Must Close

1. **Location page coverage**: SFIB has pages for 6+ Florida cities. A&E has 3 (Miami, South Florida generic, Kendall). Doral, Coral Gables, Homestead, and Hialeah are uncovered — all in A&E's backyard.
2. **Spanish content**: The Health Experts own the bilingual lane. A&E claims bilingual in schema but has zero Spanish content.
3. **Review velocity**: SFIB has 147 reviews. A&E has 126. The gap is closable but requires active review acquisition.
4. **Video content with schema**: YouTube channel exists but no VideoObject schema on any page. Workshop content has no structured schema signal for video search.

---

## Topical Authority Analysis

### Coverage Score by Pillar

**PILLAR 1: Medicare Basics**
Coverage score: 7/10 — Good foundation, some overlap issues

- Existing: `/medicare` (service page), `/medicare-coverage/understanding-medicare-parts-a-b-c-d`, `/medicare-coverage/medicare-simplified`, `/resources/faq/what-is-medicare-and-who-is-eligible`, `/resources/faq/what-are-the-different-parts-of-medicare`, `/blogs/what-is-the-difference-between-medicare-part-a-and-part-b`
- Overlap issue: `/medicare`, `/medicare-coverage/understanding-medicare-parts-a-b-c-d`, and `/medicare-coverage/medicare-simplified` are three pages covering overlapping "what is Medicare" ground. The pillar guide and the service page compete for the same informational queries.
- Missing topics:
  - Medicare for immigrants and non-citizens (HIGH PRIORITY — large Miami population)
  - Medicare for federal employees and retirees (MEDIUM)
  - Medicare and COBRA coordination (MEDIUM)
  - What is Original Medicare vs. Medicare Advantage vs. Medigap (a single definitive comparison page — currently split across multiple partial pages)

**PILLAR 2: Medicare Plans (Advantage)**
Coverage score: 6/10 — Deep on comparison content, weak on specifics

- Existing: `/medicare-coverage/medicare-advantage-plans` (~3,000 words), `/resources/faq/what-is-medicare-advantage`, multiple blog comparisons
- Missing:
  - Best Medicare Advantage plans in Miami/South Florida 2026 (HIGH — 85 impressions at pos 58 in GSC for "best medicare advantage plans in florida")
  - Medicare Advantage HMO vs. PPO in Florida (MEDIUM — covered in blog but needs pillar treatment)
  - Special Needs Plans (SNPs) for chronic conditions in Miami (HIGH — large dual-eligible population)
  - Dental and vision coverage comparison across Advantage plans (HIGH — "medicare dental and vision" has 149 impressions)

**PILLAR 3: Medicare Supplement (Medigap)**
Coverage score: 7/10 — Strong pillar guide, good FAQ coverage, thin on plan specifics

- Existing: `/medicare-coverage/medicare-supplement-plans-medigap` (~3,000 words), FAQ pages for Plan G, changing plans, `/blogs/whats-the-difference-between-medigap-plan-g-vs-plan-n-in-florida`
- Missing:
  - Medigap Plan G vs. Plan N comparison dedicated page (HIGH — GSC shows "medigap plan g vs plan n" impressions; blog post exists but needs pillar-level treatment)
  - Medigap underwriting and health questions in Florida (HIGH — enrollment window topic)
  - Best Medigap carriers in Florida 2026 (MEDIUM — high commercial intent)
  - Medigap enrollment window for turning 65 vs. late enrollment (MEDIUM — covered in blog but needs FAQ/pillar treatment)

**PILLAR 4: Medicare Enrollment**
Coverage score: 8/10 — Best-covered pillar; four calculators + FAQ pages + blog

- Existing: Four calculators (IEP, Part B penalty, Part D penalty, IRMAA), 7 enrollment FAQ pages, blog posts on turning 65 and enrollment checklist
- Missing:
  - Annual Enrollment Period (AEP) guide — what you can and cannot change (MEDIUM)
  - Special Enrollment Period (SEP) guide — all triggers explained (HIGH — critical for working seniors)
  - Medicare and active employer insurance coordination guide (HIGH — FAQ exists but short; GSC shows "how does medicare work with employer coverage" queries)
  - Open Enrollment Period (OEP) for Medicare Advantage — January 1–March 31 (LOW — niche but high intent)

**PILLAR 5: Medicare Costs**
Coverage score: 6/10 — Calculators are strong but editorial content is thin

- Existing: IRMAA calculator, Part B/D penalty calculators, `/resources/faq/how-much-does-medicare-cost`
- Missing:
  - Medicare Part B premium 2026 guide (HIGH — "what is the part b premium" is high-volume)
  - Medicare out-of-pocket maximum comparison by plan type (HIGH — GSC shows "which medicare plan has lower out-of-pocket costs" at 13 impressions; blog exists but incomplete)
  - Medicare Savings Program (MSP) dedicated page (HIGH — only FAQ page exists; significant low-income Miami population)
  - Extra Help for Part D dedicated page (MEDIUM — FAQ exists but needs expansion)
  - IRMAA appeal guide — how to dispute a Medicare surcharge (MEDIUM — high professional income in South Florida)

**PILLAR 6: Medicare for Specific Situations**
Coverage score: 5/10 — Scattered blog coverage, no pillar pages

- Existing: Blog posts on snowbirds, spouse not eligible, retiring at 68, chronic conditions, travel coverage
- Missing:
  - Medicare for snowbirds guide (dedicated pillar — not just blog; "snowbird" is a high-intent South Florida keyword) (HIGH)
  - Medicare when you have VA benefits (HIGH — significant veteran population in South Florida)
  - Medicare and continuing to work after 65 (HIGH — "can i keep employer insurance and medicare" is common)
  - Medicare for self-employed / small business owners (MEDIUM)
  - Medicare for non-US citizens / Green Card holders (HIGH — distinctive Miami need)
  - Medicare when your spouse is younger (MEDIUM — blog exists but needs FAQ treatment)

**PILLAR 7: Retirement**
Coverage score: 4/10 — Major gap; catch-all redirects hiding significant traffic

- Existing: `/retirement` service page (~1,200 words); no dedicated subpages
- GSC signal: `/retirement/retirement-planning-tools` (3,615 impressions, pos 8); `/retirement/social-security-and-medicare-coordination` (887 impressions, pos 9); `/retirement/retirement-income-planning` (150 impressions, pos 9); `/retirement/long-term-care-and-recovery-planning` (79 impressions, pos 58) — all redirecting to service page
- Missing (urgent — real GSC demand exists):
  - `/retirement/retirement-planning-tools` — retirement calculator hub (CRITICAL)
  - `/retirement/social-security-and-medicare-coordination` — SS + Medicare guide (CRITICAL)
  - `/retirement/retirement-income-planning` — annuities and income strategy (HIGH)
  - `/retirement/long-term-care-and-recovery-planning` — LTC insurance guide (HIGH)
  - Annuities explained for Florida retirees (MEDIUM)

**PILLAR 8: Life Insurance**
Coverage score: 4/10 — Service page + blog posts; catch-all redirects losing traffic

- Existing: `/life-insurance` service page, 10+ blog posts
- GSC signal: `/life-insurance/permanent-life-insurance` (1,230 impressions, pos 79); `/life-insurance/term-life-insurance` (309 impressions); `/life-insurance/final-expense-and-guaranteed-issue-insurance` (212 impressions); `/life-insurance/navigating-life-insurance` (23 impressions); `/life-insurance/life-insurance-comparison-term-vs-permanent` (77 impressions) — all catching catch-all redirect
- Missing (urgent):
  - `/life-insurance/permanent-life-insurance` — permanent life insurance guide (CRITICAL)
  - `/life-insurance/term-life-insurance` — term life guide (HIGH)
  - `/life-insurance/final-expense-and-guaranteed-issue-insurance` — final expense guide (HIGH)
  - Key man insurance Miami guide (MEDIUM — blog exists)
  - Life insurance for Miami small business owners (MEDIUM — blog exists)

**PILLAR 9: Critical Illness**
Coverage score: 3/10 — Thinnest pillar; catch-all redirects; minimal blog coverage

- Existing: `/critical-illness` service page (~900 words)
- GSC signal: `/critical-illness/critical-illness-and-cancer-insurance` (196 impressions); `/critical-illness/hospital-indemnity-plans` (81 impressions)
- Missing:
  - `/critical-illness/cancer-insurance-florida` — cancer insurance guide (HIGH)
  - `/critical-illness/hospital-indemnity-plans` — hospital indemnity guide (MEDIUM)
  - Heart attack and stroke insurance guide (MEDIUM)

**PILLAR 10: Local SEO (South Florida)**
Coverage score: 5/10 — Three location pages; significant geographic gap

- Existing: `/medicare-broker-miami`, `/medicare-broker-south-florida`, `/medicare-broker-kendall`, `/medicare-broker-near-me`, `/health-insurance-broker-miami`
- Missing:
  - `/medicare-broker-doral` (CRITICAL — The Health Experts is in Doral; A&E needs to compete)
  - `/medicare-broker-coral-gables` (HIGH — affluent, high Medicare-eligible)
  - `/medicare-broker-homestead` (HIGH — large Latin population, distinct Medicare concerns)
  - `/medicare-broker-hialeah` (HIGH — densely populated, heavily Spanish-speaking)
  - `/medicare-broker-fort-lauderdale` (MEDIUM — Broward County expansion)
  - `/medicare-broker-west-palm-beach` (LOW — stretch geography for current brand)

---

## Site Architecture Analysis

### Current Navigation Structure

**Header (Desktop)**
```
Services ▼
  Medicare | Health Insurance | Retirement | Life Insurance | Critical Illness
About
Blog
Learn ▼
  FAQ | Enrollment Calculator | Part B Penalty Calculator | Part D Penalty Calculator | IRMAA Calculator
Contact
[Schedule a Consultation — gold CTA button]
```

**Footer (4 columns)**
```
Column 1: Logo + BBB seal + social icons
Column 2: Contact — address, phone, email, hours
Column 3: Legal — Terms, Privacy
Column 4: Quick Links — Medicare, Health Insurance, Retirement, Life Insurance, Critical Illness, About Us, Blog, FAQ, Contact
```

### Navigation Issues

1. **Local landing pages are invisible**: Five high-priority local SEO pages (`/medicare-broker-miami`, `/medicare-broker-south-florida`, `/medicare-broker-kendall`, `/medicare-broker-near-me`, `/health-insurance-broker-miami`) receive zero internal links from the header or footer. Google crawls these only via the sitemap.

2. **Tools are buried**: Four calculator tools are in the "Learn" dropdown — fine for users who know they want tools, but they receive no contextual internal links from related content (the Medicare pillar pages, blog posts, or FAQ pages don't link to them).

3. **FAQ is labeled "FAQ" not "Resources"**: The header and footer label the `/resources` hub as "FAQ" — which is accurate but misses the opportunity to signal it as a resources/learning center. Minor but worth considering.

4. **The /watch page is not in navigation**: The Medicare Made Simple workshop is promoted in the AnnouncementBar and Hero but does not appear as a nav item. A "Free Workshop" nav item could drive meaningful conversion uplift.

5. **No "Medicare Broker Near Me" or local entry point in navigation**: Users searching locally have no navigation path that signals geographic relevance.

### Recommended Navigation Structure

**Header (Desktop)**
```
Medicare ▼
  Medicare Overview | Medicare Advantage | Medicare Supplement (Medigap) | Part D Plans | Enrollment Guide | Compare Plans
Insurance ▼
  Health Insurance | Life Insurance | Retirement Planning | Critical Illness
Resources ▼
  Medicare FAQ | Enrollment Calculator | Part B Penalty Calculator | Part D Penalty Calculator | IRMAA Calculator | Free Workshop
About
Blog
[Schedule a Free Consultation — gold CTA button]
```

**Rationale:**
- Elevate Medicare as its own top-level nav (not buried under "Services") — it is the primary commercial topic
- Rename "Services" to "Insurance" for clarity
- Rename "Learn" to "Resources" to better signal knowledge hub
- Add "Free Workshop" to Resources dropdown to surface the webinar conversion path
- Move Contact out of nav (it remains reachable via CTA button and footer)

**Footer Additions:**
Add a "Locations" column or add to Quick Links:
```
Locations: Medicare Broker Miami | Medicare Broker Kendall | Medicare Broker South Florida | Medicare Broker Near Me
```
This gives local landing pages at least one internal link path from the global footer.

### URL Structure Assessment

Current patterns are well-structured:
- `/blogs/[slug]` — blog posts ✓
- `/medicare-coverage/[slug]` — pillar guides ✓
- `/resources/faq/[slug]` — FAQ pages ✓
- `/tools/[tool-name]` — calculators ✓
- `/medicare-broker-[city]` — local pages ✓

**Do NOT change**: Any URL that has GSC impressions or existing content. The redirect debts already in the system are costly — adding more redirects would compound the problem.

**New URL patterns to establish:**
- `/retirement/[slug]` — retirement subpages (replacing catch-all redirect after adding actual pages)
- `/life-insurance/[slug]` — life insurance subpages (same)
- `/critical-illness/[slug]` — critical illness subpages (same)
- `/medicare-broker-[city]` — additional location pages (consistent with existing pattern)

---

## Local SEO Strategy

### South Florida Medicare Market Context

Miami-Dade County has approximately 415,000 Medicare beneficiaries. The broader South Florida tri-county area (Miami-Dade, Broward, Palm Beach) has over 900,000 Medicare beneficiaries. Miami-Dade has the highest concentration of Medicare Advantage plan enrollment in Florida (over 65% of Medicare beneficiaries are in Advantage plans vs. ~55% statewide), which means plan-switching decisions and supplement comparisons are frequent local search behaviors.

The population is heavily bilingual. Spanish is the primary language for a substantial portion of Medicare-eligible residents in Hialeah, Doral, Miami Lakes, and Homestead. The search term "seguros medicos en miami" generates 165 impressions at position 1 in A&E's GSC data — but there is no Spanish-language content to serve that demand.

### Location Page Recommendations

**Miami** — `/medicare-broker-miami` (EXISTS — improve)
- Medicare-eligible population: ~180,000 in city proper
- Current page: ~1,200 words, BreadcrumbList schema, no FAQ schema
- Improvements needed: Add FAQPage schema with Miami-specific questions; add service area map component; add carrier availability note for Miami-Dade; add internal links from homepage and blog posts
- Unique content angle: Miami has unusually high Medicare Advantage penetration — use this as a data point to explain why plan comparison matters more in Miami than national averages

**Kendall** — `/medicare-broker-kendall` (EXISTS — expand)
- Population: ~60,000 (unincorporated suburb, A&E's local office area)
- Current page: ~1,000 words
- Unique angle: A&E's physical office is in Kendall — emphasize in-person consultation availability, proximity, and familiarity with Kendall's provider networks (Baptist Health, Nicklaus Children's)

**Doral** — `/medicare-broker-doral` (MISSING — CRITICAL)
- Population: ~80,000; rapidly growing; heavy Latin American professional population
- Medicare-eligible population: ~12,000+
- Competitive note: The Health Experts Insurance is headquartered in Doral. A&E must have a Doral page.
- Unique angle: Doral's Medicare-eligible population skews toward higher-income immigrants who often face IRMAA surcharges and require Spanish-language support
- URL: `/medicare-broker-doral`
- H1: Medicare Broker in Doral FL — Spanish-Speaking, Independent, Free
- Content angle: Bilingual service, IRMAA planning for higher-income retirees, proximity to The Don Shula Hotel medical district

**Coral Gables** — `/medicare-broker-coral-gables` (MISSING — HIGH)
- Population: ~50,000; high median income (~$90K); heavy Medicare Supplement (Medigap) preference
- Unique angle: Coral Gables seniors statistically prefer Medigap Plan G over Medicare Advantage due to higher incomes and preference for flexibility. Lead with Medigap Plan G content.
- URL: `/medicare-broker-coral-gables`
- H1: Medicare Broker in Coral Gables FL | Medigap & Supplement Specialists

**Homestead** — `/medicare-broker-homestead` (MISSING — HIGH)
- Population: ~80,000; large agricultural and working-class Latin population; significant Spanish-speaking Medicare-eligible seniors
- Unique angle: Homestead has high Extra Help / Medicare Savings Program (MSP) eligibility — content angle on low-income Medicare options, Spanish language service
- URL: `/medicare-broker-homestead`
- H1: Medicare Broker in Homestead FL | Free Bilingual Medicare Help

**Hialeah** — `/medicare-broker-hialeah` (MISSING — HIGH)
- Population: ~235,000; fourth-largest city in Florida; heavily Cuban-American; >50% Spanish-primary
- Medicare-eligible population: ~40,000+
- Unique angle: Hialeah's Medicare beneficiaries are overwhelmingly enrolled in Dual Special Needs Plans (D-SNPs) and Medicare Advantage — plan comparison and switching is extremely high. Language-accessible service is the primary differentiator.
- URL: `/medicare-broker-hialeah`
- H1: Medicare Broker in Hialeah FL | Bilingual Medicare Help — Gratis

**South Miami** — Covered by `/medicare-broker-south-florida` (NO dedicated page — MEDIUM)
- Recommend not building a separate page; reference in South Florida page

**Pinecrest / Palmetto Bay** — Both in A&E schema `areaServed`; combined into one page is acceptable
- URL: `/medicare-broker-pinecrest-palmetto-bay`
- These are affluent communities with Medigap-leaning demographics; similar to Coral Gables approach

**Cutler Bay** — MEDIUM; include in Homestead or South Florida content

**Fort Lauderdale** — `/medicare-broker-fort-lauderdale` (MEDIUM)
- Broward County's primary city; different county = different carrier availability for Medicare Advantage
- Unique angle: Carrier network differences between Miami-Dade and Broward county plans

**West Palm Beach** — `/medicare-broker-west-palm-beach` (LOW — stretch)
- Palm Beach County is a distinct market with different demographics; build only after Miami-Dade is fully covered

### Schema Additions for Local Pages

Each new location page must include:
- `BreadcrumbList` (consistent with existing local pages)
- `LocalBusiness` with `geo` coordinates specific to the city
- `FAQPage` schema with 3–5 city-specific Medicare questions
- `areaServed` narrowed to the specific city

### Location Page Content Standard

Every location page must include at least one of these genuinely local elements:
1. A named hospital or health system that accepts Medicare in that city (Baptist Health South Florida, Cleveland Clinic Florida, Memorial Healthcare, etc.)
2. A specific Medicare Advantage carrier availability note (some plans are Miami-Dade only vs. statewide)
3. A local community event reference (Medicare enrollment seminars, senior centers, community foundations)
4. A specific demographic insight (Hialeah's high Dual-SNP enrollment rate; Coral Gables' Medigap preference; Homestead's MSP eligibility rates)

These pages must NOT be doorway pages. They must provide genuinely useful local Medicare information that a Hialeah resident cannot get from the Miami page.

---

## Content Strategy

### Tier 1: Recover Lost Traffic (Build First — Weeks 1–4)

These pages recover existing GSC impressions from catch-all redirects. Real demand is already proven.

**1. /retirement/retirement-planning-tools**
- Target keyword: retirement planning tools / retirement calculator / how much do I need to retire
- GSC demand: 3,615 impressions, 21 keywords, position 8 (before redirect)
- Content type: Tools hub + editorial guide
- Content: Aggregate the 4 existing calculators (IEP, IRMAA, Part B penalty, Part D penalty) as Medicare-adjacent retirement tools; add Social Security income estimator (link to SSA.gov); add retirement income planning context; link to /retirement service page
- Word count: 1,500–2,000 words + embedded tools
- Internal links from: /retirement, /tools/irmaa-calculator, /tools/medicare-enrollment-calculator, homepage FreeBook section
- Schema: HowTo (how to calculate retirement readiness), FAQPage

**2. /retirement/social-security-and-medicare-coordination**
- Target keyword: social security and medicare coordination / when do I get medicare with social security
- GSC demand: 887 impressions, 11 keywords, position 9 (before redirect)
- Content type: Definitive guide
- Content: How SS and Medicare enrollment timelines intersect; automatic Part A enrollment at 62 vs. 65; Part B enrollment decision while receiving SS; IRMAA based on SS income; coordination for spouses
- Word count: 2,000–2,500 words
- Internal links from: /retirement, /resources/faq/can-i-delay-enrolling-in-medicare-part-b, /tools/irmaa-calculator
- Schema: FAQPage, HowTo

**3. /life-insurance/permanent-life-insurance**
- Target keyword: permanent life insurance / permanent life insurance policy / whole life vs universal life
- GSC demand: 1,230 impressions, 4 keywords, position 79 (ranking deep — needs content)
- Content type: Educational guide with comparison table
- Content: What is permanent life insurance; whole life vs. universal life vs. variable; Miami/South Florida context (estate planning, business succession); comparison table vs. term life; when permanent makes sense
- Word count: 2,500 words
- Schema: FAQPage, Article

**4. /life-insurance/term-life-insurance**
- GSC demand: 309 impressions, position 38
- Content type: Educational guide
- Word count: 2,000 words
- Internal links from: /life-insurance, blog posts on term vs. permanent

**5. /life-insurance/final-expense-and-guaranteed-issue-insurance**
- GSC demand: 212 impressions, position 37
- Content type: Educational guide targeting seniors 70–85 who missed their Medicare window or need burial coverage
- Word count: 1,500 words

**6. /critical-illness/cancer-insurance-florida** (maps to legacy `/critical-illness/critical-illness-and-cancer-insurance`)
- GSC demand: 196 impressions, position 52
- Content: Cancer insurance in Florida, how it differs from health insurance and Medicare, cost examples, South Florida carrier options
- Word count: 1,800 words

### Tier 2: Expand Existing High-Potential Pages (Weeks 3–8)

These pages exist and have GSC signal but are ranking too deep. The fix is content depth + internal linking + schema additions, not new pages.

**1. /medicare-coverage/medicare-supplement-plans-medigap**
- Current: 1,396 impressions, position 65, ~3,000 words
- Problem: Good depth but no FAQPage schema; no comparison table Medigap plans A through N; no local Florida carrier section
- Add: Comparison table for all Medigap plan types (A–N); Florida-specific Medigap open enrollment rules; 2026 Medigap premium ranges for Miami-Dade; FAQPage schema with 5 Q&A pairs; internal links to /blogs/whats-the-difference-between-medigap-plan-g-vs-plan-n-in-florida and /medicare-broker-miami
- Expected impact: Move from position 65 to 20–35

**2. /medicare-coverage/medicare-advantage-vs-medigap**
- Current: 1,093 impressions, position 78
- Problem: Pillar guide competing with blog post on same topic (`/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you`)
- Solution: Differentiate clearly — the pillar page focuses on the definitive comparison with a structured comparison table; the blog post focuses on the Florida-specific decision and personal scenarios. Add FAQPage schema to pillar; add HowTo schema ("How to choose between Medicare Advantage and Medigap in 3 steps"); link blog post from pillar and vice versa with descriptive anchor text.
- Expected impact: Move pillar page from position 78 to 30–50

**3. /medicare-coverage/medicare-advantage-plans**
- Current: 748 impressions, position 41
- Problem: Good content length but no local Florida data; no 2026 plan availability context for Miami-Dade; no comparison table by plan type
- Add: 2026 Miami-Dade Medicare Advantage plan comparison table; HMO vs PPO section; SNP (Special Needs Plan) section; FAQPage schema
- Expected impact: Move from position 41 to 15–25

**4. Top blog posts — add FAQPage schema + TL;DR summary boxes**

The following blog posts have significant GSC impressions but no FAQPage schema and no structured summary content. Adding both will improve CTR and AI citation likelihood:

- `/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you` (4,156 impressions — #1 priority)
- `/blogs/what-is-the-difference-between-medicare-part-a-and-part-b` (1,992 impressions)
- `/blogs/which-medicare-plan-is-better-for-dental-and-vision-coverage` (1,498 impressions)
- `/blogs/which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida` (454 impressions)
- `/blogs/how-does-medicare-part-c-compare-to-original-medicare-in-florida` (393 impressions)

### Tier 3: New Content to Build (Weeks 6–12)

**High Priority — Medicare Specific Situations**

| URL | Title | Target Keyword | Intent | Word Count |
|---|---|---|---|---|
| /resources/faq/medicare-for-immigrants-green-card-holders | Medicare for Green Card Holders and Non-US Citizens | medicare for immigrants | Informational | 1,200 |
| /resources/faq/medicare-special-enrollment-period | What Triggers a Medicare Special Enrollment Period? | medicare special enrollment period | Informational | 1,000 |
| /resources/faq/medicare-and-va-benefits | Can I Have Medicare and VA Benefits? | medicare and va benefits | Informational | 900 |
| /resources/faq/medicare-annual-enrollment-period | What Can I Change During Medicare Annual Enrollment? | medicare annual enrollment period | Informational | 900 |
| /blogs/best-medicare-advantage-plans-miami-2026 | Best Medicare Advantage Plans in Miami for 2026 | best medicare advantage plans miami | Commercial | 2,500 |
| /blogs/medicare-supplement-plan-g-florida-2026 | Medigap Plan G in Florida 2026: Costs, Carriers, and Enrollment | medigap plan g florida 2026 | Commercial | 2,000 |
| /blogs/medicare-for-snowbirds-florida-guide | The South Florida Snowbird's Complete Medicare Guide | medicare snowbird florida | Informational/Commercial | 2,500 |
| /blogs/medicare-for-non-citizens-florida | Medicare Coverage for Non-US Citizens in South Florida | medicare non citizens florida | Informational | 1,800 |
| /blogs/irmaa-appeal-guide | How to Appeal an IRMAA Medicare Surcharge | irmaa appeal | Informational | 1,500 |

**Medium Priority — Local SEO Content**

| URL | Title | Target Keyword | Priority |
|---|---|---|---|
| /medicare-broker-doral | Medicare Broker in Doral FL | medicare broker doral fl | CRITICAL |
| /medicare-broker-coral-gables | Medicare Broker in Coral Gables FL | medicare broker coral gables | HIGH |
| /medicare-broker-homestead | Medicare Broker in Homestead FL | medicare broker homestead fl | HIGH |
| /medicare-broker-hialeah | Medicare Broker in Hialeah FL | medicare broker hialeah fl | HIGH |
| /medicare-broker-fort-lauderdale | Medicare Broker in Fort Lauderdale FL | medicare broker fort lauderdale | MEDIUM |

### Calculators and Tools — Roadmap

**Existing tools are a strategic differentiator.** No competitor has equivalent interactive tools. Expand the tools suite:

| Tool | URL | Rationale |
|---|---|---|
| Social Security + Medicare Coordination Calculator | /tools/social-security-medicare-calculator | Maps directly to 887-impression legacy URL; GSC shows SS queries reaching the site |
| Retirement Income Estimator | /tools/retirement-income-calculator | Maps to 3,615-impression legacy URL; completes the retirement planning tools hub |
| Medigap vs. Medicare Advantage Cost Comparator | /tools/medigap-vs-advantage-calculator | High-intent comparison tool; "cost of medicare advantage vs medigap" appears in GSC at position 100 |
| Medicare Plan Finder (FAQ wizard) | /tools/medicare-plan-finder | Simple decision tree to recommend plan type (not plans — to avoid regulatory issues) |

### Content Consolidation

The following pages have significant content overlap and compete with each other for similar queries. Consolidation recommendations:

| Pages | Issue | Recommendation |
|---|---|---|
| `/medicare-coverage/medicare-advantage-vs-medigap` + `/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you` | Both targeting Medicare Advantage vs. Medigap comparison | Differentiate: pillar = definitive framework + comparison table; blog = Florida-specific + scenario-based. Add explicit cross-links with descriptive anchor text. Do NOT merge — they serve different intents. |
| `/medicare` + `/medicare-coverage/medicare-simplified` | Both serve "what is medicare" queries | `/medicare` should be the service/commercial page; `/medicare-coverage/medicare-simplified` should be the beginner educational guide. Add canonical clarification and differentiated H1s. |
| Three "near me" broker blog posts | `/blogs/how-a-medicare-broker-near-me-helped...` + `/blogs/how-to-find-the-right-medicare-broker-near-me-in-florida` + `/blogs/why-a-medicare-agent-near-me-may-be-better...` | These three posts all target overlapping near-me intent. Consider consolidating two into one comprehensive guide. Redirect the weakest (fewest impressions) to the strongest. |

---

## Internal Linking Blueprint

### Priority Internal Links to Add

**From /medicare (service page) — add:**
- → /medicare-coverage/medicare-advantage-plans (anchor: "Medicare Advantage plans")
- → /medicare-coverage/medicare-supplement-plans-medigap (anchor: "Medigap plans")
- → /tools/medicare-enrollment-calculator (anchor: "calculate your enrollment window")
- → /medicare-broker-miami (anchor: "Medicare broker in Miami")
- → /blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you (anchor: "compare Medicare Advantage vs. Medigap in Florida")

**From /retirement (service page) — add:**
- → /retirement/retirement-planning-tools (NEW PAGE — anchor: "retirement planning tools")
- → /retirement/social-security-and-medicare-coordination (NEW PAGE — anchor: "Social Security and Medicare coordination")
- → /tools/irmaa-calculator (anchor: "calculate your IRMAA surcharge")

**From /life-insurance (service page) — add:**
- → /life-insurance/permanent-life-insurance (NEW PAGE — anchor: "permanent life insurance")
- → /life-insurance/term-life-insurance (NEW PAGE — anchor: "term life insurance")
- → /life-insurance/final-expense-and-guaranteed-issue-insurance (NEW PAGE — anchor: "final expense insurance")

**From /critical-illness (service page) — add:**
- → /critical-illness/cancer-insurance-florida (NEW PAGE — anchor: "cancer insurance in Florida")

**From / (homepage) — add:**
- → /medicare-broker-miami (anchor: "Medicare broker in Miami, FL")
- → /watch (already linked; confirm prominence)

**From all blog posts related to Medicare Advantage vs. Medigap — add:**
- → /tools/medicare-enrollment-calculator (anchor: "calculate your Medicare enrollment window")
- → /medicare-coverage/medicare-supplement-plans-medigap (anchor: "learn more about Medigap plans")
- → /contact (anchor: "schedule a free Medicare consultation")

**From FAQ pages — add contextual links to:**
- Related pillar guides on /medicare-coverage/
- Related calculator tools on /tools/
- /contact for commercial-intent FAQs

**Footer — add Locations column:**
- → /medicare-broker-miami
- → /medicare-broker-kendall
- → /medicare-broker-doral (once live)
- → /medicare-broker-south-florida
- → /medicare-broker-near-me

### Orphan Page Fixes

| Page | Status | Fix |
|---|---|---|
| /major-exposures | Orphan — no nav, no footer, not in sitemap | Determine if this is a section of the homepage or a standalone page. If standalone and indexable, add to sitemap and link from /about. If it is just a homepage section, remove the page.tsx or redirect to /. |
| /medicare-broker-miami, /medicare-broker-south-florida, etc. | Not in nav or footer | Add to footer Locations column (see above) |
| /about/steve | Only linked from /about | Add to footer as "About Steve Germain" or link from author byline on blog posts |

### Anchor Text Standards

- Local landing pages: always "Medicare broker in [City] FL" — exact match is acceptable for local pages
- Pillar guides: descriptive, not keyword-stuffed ("understand how Medigap works" not "medigap plans florida")
- Tools: action-oriented ("calculate your Part B penalty", "find your enrollment window")
- Blog posts from service pages: benefit-oriented ("see how Medicare Advantage compares to Medigap in Florida")

---

## Schema Strategy

### Fix #1 — Remove Spanish from inLanguage (CRITICAL)

**File:** `src/components/seo/LocalBusinessSchema.tsx`
**Line:** 199 (inside the WebSite entity)
**Current:** `inLanguage: ["en-US", "es"]`
**Fix:** `inLanguage: ["en-US"]`

This is a misrepresentation to Google. Remove `"es"` immediately. If Spanish-language pages are built in the future (`/es/` routes with hreflang), add it back at that time.

### Fix #2 — Add NPN to Person Schema sameAs

Add the Florida DFS license lookup URL to Steve Germain's `sameAs` array:
```
"https://licenseeSearch.fldfs.com/agentlicenseesearch/AgentLicenseeSearch.aspx"
```
This gives AI models and Google a verifiable government source to confirm Steve's credentials — critical for YMYL authority.

### Fix #3 — Add WebApplication Schema to Calculator Pages

Each of the four calculator pages needs:
```json
{
  "@type": "WebApplication",
  "name": "[Calculator Name]",
  "applicationCategory": "FinanceApplication",
  "description": "[tool description]",
  "url": "[canonical URL]",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "operatingSystem": "Web browser"
}
```

### Fix #4 — Add FAQPage Schema to Top Blog Posts

The following blog posts have FAQ sections in their HTML content but no `faqs` arrays in `blogPosts.ts`:
- `medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you`
- `what-is-the-difference-between-medicare-part-a-and-part-b`
- `which-medicare-plan-is-better-for-dental-and-vision-coverage`
- `which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida`
- `how-does-medicare-part-c-compare-to-original-medicare-in-florida`

Add 3–5 Q&A pairs to the `faqs` array in each post. The `faqs` values must mirror questions that appear in the HTML content body (CLAUDE.md requirement).

### Fix #5 — Add ProfilePage Schema to /about/steve

Add `"@type": "ProfilePage"` to the `/about/steve` page's metadata schema to formalize Steve Germain as a subject-matter expert author. This strengthens the author entity relationship between the Person schema and the blog post author attribution.

### Fix #6 — Add VideoObject Schema to /watch

The Medicare Made Simple workshop is a significant piece of content that earns no structured data credit:
```json
{
  "@type": "VideoObject",
  "name": "Medicare Made Simple — Free Workshop",
  "description": "Steve Germain explains Medicare Advantage vs. Medigap vs. Part D in plain English — no jargon, no sales pressure.",
  "thumbnailUrl": "[thumbnail URL]",
  "uploadDate": "[workshop publish date in ISO format]",
  "embedUrl": "[YouTube embed URL]",
  "publisher": { "@id": "/#organization" }
}
```

### Fix #7 — Add HowTo Schema to Checklist and Calculator Content

Add HowTo schema to:
- `/blogs/turning-65-in-florida-your-complete-medicare-enrollment-checklist`
- `/tools/medicare-enrollment-calculator`

### Fix #8 — Add BreadcrumbList to All Non-Local Pages

Currently only local landing pages and /health-insurance-broker-miami have BreadcrumbList. Add to:
- All `/medicare-coverage/[slug]` pages
- All `/tools/[tool]` pages
- `/about/steve`

### Fix #9 — Update aggregateRating reviewCount Periodically

The `reviewCount: "126"` in LocalBusinessSchema must be updated whenever the GBP review count changes materially. Recommend checking monthly and updating if delta >5 reviews.

### Schema Additions for New Pages

| Page Type | Schema Required |
|---|---|
| /retirement/* subpages | Article + FAQPage + HowTo (where applicable) |
| /life-insurance/* subpages | Article + FAQPage |
| /critical-illness/* subpages | Article + FAQPage |
| /medicare-broker-[city] pages | BreadcrumbList + LocalBusiness (geo for city) + FAQPage |
| New tools | WebApplication |

---

## AI Search Strategy

### Entity Strengthening — Steve Germain

Steve Germain is the most powerful E-E-A-T signal the site has. His Person entity needs to be stronger in AI model knowledge graphs.

**Actions:**
1. Add the Florida DFS license lookup URL to `sameAs` in Person schema (immediately verifiable by AI)
2. Add NPN 19921707 as an identifier in Person schema: `"identifier": { "@type": "PropertyValue", "propertyID": "NPN", "value": "19921707" }`
3. Request a Wikipedia or Wikidata stub entry for Steve Germain (if his book "Medicare Decoded" qualifies as a notability reference)
4. Add Steve Germain as an author on all FAQ pages (not just blog posts) — he should be the attributed expert on the /resources/faq/ pages even though they are not BlogPostings
5. Create a `speakable` property on /about/steve pointing to the bio section — this marks the content as ideal for AI voice assistants to read aloud when asked "who is Steve Germain Medicare"

### Entity Strengthening — A&E Insurance Agency

1. Add DUNS number or business registry identifier to the Organization schema if available
2. Add `areaServed` with `@type: AdministrativeArea` for Miami-Dade County specifically (in addition to the city-level entities)
3. Submit the site to data aggregators (Data Axle, Infogroup) to ensure NAP consistency across the web — this strengthens local entity confidence

### Structured Content for AI Citations

AI systems (ChatGPT, Gemini, Claude, Perplexity) cite content that:
- Has a clear question + direct answer structure
- Provides specific data points (dollar figures, dates, percentages)
- Cites authoritative sources (CMS, SSA, Medicare.gov)
- Is organized with numbered lists and comparison tables

**Priority pages for AI citation optimization:**

1. **FAQ pages** (`/resources/faq/*`): Already structured well. Add `speakable` schema to the `keyTakeaways` section of each FAQ page. This marks the bullet summary as the ideal text for AI voice responses.

2. **Pillar guides** (`/medicare-coverage/*`): Add comparison tables where missing. AI models extract table data reliably. A "Medicare Advantage vs. Medigap side-by-side comparison" table on the comparison pillar page will be cited heavily.

3. **Calculator result pages**: Add structured result explanations. When a user gets their IEP dates from the calculator, the surrounding explanatory text should answer the follow-up questions AI models get asked ("what do I do after I find my enrollment window?").

### Question Coverage for AI (High-Priority Missing Answers)

The following questions appear in GSC keyword data or are common Medicare queries that the site does not currently answer directly:

| Question | Current Coverage | Action |
|---|---|---|
| What is the average Medicare Part B premium in 2026? | IRMAA calculator has data but no editorial page | Add to /medicare-coverage/medicare-enrollment-and-costs or create FAQ |
| Can I have both Medicare and Medicaid? | Not covered | Add FAQ page: /resources/faq/medicare-and-medicaid-dual-eligible |
| What Medicare plans cover dental and vision? | Blog post exists but no FAQ/pillar | Add FAQ page on dental+vision specifically |
| How do I switch from Medicare Advantage to Medigap? | Covered partially in supplement plan guide | Add dedicated FAQ or blog post |
| What is a D-SNP Medicare plan? | Not covered | Add FAQ page — high relevance for Miami's dual-eligible population |
| How does Medicare work if I move to another state? | Not covered | Add FAQ — relevant for snowbirds and retirees relocating |
| Can I get Medicare if I'm still working at 65? | Partially covered | Expand /resources/faq/can-i-delay-enrolling-in-medicare-part-b |
| What does Medicare not cover? | FAQ exists for "does medicare cover all bills" | Expand with dedicated page: what medicare doesn't cover |

### AI-Readable Content Formatting Standards

Apply these formatting standards to all new content and priority revisions:
- **TL;DR box at article top**: 3–5 bullet key takeaways before the first heading
- **Comparison tables**: Use for any "X vs. Y" content — AI models extract tables reliably
- **"The bottom line" callout**: Already used on service pages — extend to pillar guides and top blog posts
- **Direct answer sentence**: Every FAQ page should open with a 1–2 sentence direct answer before the explanation (this is what AI models extract for citations)
- **Cite sources inline**: "According to CMS, the 2026 Part B premium is $185.00/month" — structured citations train AI models on the site's authority

---

## Conversion Optimization

### Homepage CRO

**Strengths:**
- Dual CTA in hero (Book a Consultation + Watch Workshop) is well-structured
- Bottom dark CTA section reinforces the primary conversion
- Google Reviews section adds social proof before the CTA
- Medicare Decoded book offer is a strong mid-funnel lead magnet

**Missing:**
1. **No Calendly / direct booking embed on /contact**: All CTAs go to `/contact` form. A direct scheduling widget (Calendly or GoHighLevel's built-in scheduler) would reduce friction from form → call booking. This is the highest-impact CRO change available.
2. **No sticky CTA on mobile**: The AnnouncementBar is at the top but disappears on scroll. A sticky bottom bar on mobile with click-to-call and "Schedule Consultation" would significantly increase mobile conversions.
3. **No chat widget**: Insurance is a high-consideration purchase. A lightweight chat option (could be as simple as a GoHighLevel chat widget) captures users who won't fill out a form but will ask a quick question.
4. **Review count not prominently displayed**: 126 five-star reviews is a powerful trust signal. It's in the schema (used for potential Rich Snippets) and in the GoogleReviews section, but the hero section could mention "126+ Five-Star Reviews" as a trust badge.

**Hero Improvement (no brand change required):**
- Add "126 Five-Star Google Reviews" badge below the CTA buttons
- Add "Licensed in 35 States" badge (already in metadata, not in hero)
- These are one-line additions that don't change the visual design

### Blog Post CRO

Blog posts are currently the highest-impression pages but show 0 clicks in many cases. Even when they rank and get clicks, the post-click experience should convert.

- **Add a contextual CTA box mid-article**: After the 3rd or 4th heading, add a highlighted box: "Have questions about which plan is right for you? [Schedule a free 15-minute call with Steve]" — this converts readers who are engaged but haven't reached the end of the post.
- **Add author bio with photo and CTA at bottom of every post**: The existing author byline is text-only. A small card with Steve's photo, 2-sentence bio, and "Schedule a consultation" button would strengthen both trust and conversion.
- **Link the Medicare Decoded book from high-traffic posts**: Offer the book as a resource within Medicare educational posts — drives lead capture without being pushy.

### Calculator CRO

Calculators are the highest-intent pages on the site. Users calculating their enrollment window or penalty are actively in a Medicare decision process.

- After showing a calculator result, display: "Your enrollment window is [dates]. Here's what to do next → [Schedule a consultation with Steve]"
- Add a "What does this mean for me?" CTA below results — link to the relevant FAQ or blog post AND the contact form
- Capture email addresses in exchange for a PDF version of the result ("Email me my enrollment dates")

### /watch Page CRO

The webinar funnel (`/watch` → form → `/watch/video`) is a strong lead capture mechanism. Improvements:

- The page should display social proof before the form: "Watched by 1,000+ South Florida families" or "3,000+ families helped"
- Add a second entry point: after the video on `/watch/video`, present the "Schedule a Consultation" CTA with urgency context ("Open enrollment begins October 15 — schedule your review now")

### Trust Signals — Priority Additions

| Signal | Current | Recommended Addition |
|---|---|---|
| Carrier logos | Absent | Add logos of top 6–8 carriers (Humana, Aetna, UHC, Cigna, WellCare, Florida Blue) to homepage and /medicare — visual proof of "25+ carriers" claim |
| Professional associations | Absent | If eligible, add NAIFA or NAHU membership badge |
| Years in business | In schema/footer | Add to hero: "Serving South Florida since 2009" |
| Licensed in 35 states | In metadata | Add to hero/homepage as a badge |
| NPN display | Footer text only | Consider adding to /about/steve as a styled credential display |

---

## Critical Fixes — Do These First

The following items require action before any content strategy will be fully effective. Most are technical fixes that can be implemented by Claude Code without content review.

### P0 — Fix Immediately (Week 1)

**1. Remove Spanish from WebSite inLanguage schema**
- File: `src/components/seo/LocalBusinessSchema.tsx`, line 199
- Change: `inLanguage: ["en-US", "es"]` → `inLanguage: ["en-US"]`
- Why: Schema misrepresentation; Google may distrust site structure
- Effort: 5 minutes

**2. Reconfigure KRT project 70164 for Miami local tracking**
- Action: In Search Atlas KRT, delete all 25 current keywords. Rebuild with the keyword list in the 90-day roadmap, tracked at Miami FL (desktop + mobile) as primary location, plus Fort Lauderdale FL secondary
- Why: All 25 keywords show null positions because they are tracked nationally. The tracker provides zero data in current state.
- Effort: 30 minutes

**3. Add local landing pages to Footer Quick Links**
- File: `src/components/layout/Footer.tsx`
- Add to Quick Links column: Medicare Broker Miami, Medicare Broker Kendall, Medicare Broker Near Me
- Why: These pages are navigation orphans — no nav or footer links exist
- Effort: 15 minutes

**4. Verify /blogs/[slug] canonical URLs are rendering as absolute URLs**
- Action: `curl https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you | grep canonical`
- Why: The audit flagged relative canonicals in the code; Next.js should resolve them but needs verification
- Effort: 10 minutes

### P1 — Fix This Month (Weeks 2–4)

**5. Add FAQPage schema (faqs arrays) to top 5 blog posts by impressions**
- Files: `src/lib/blogPosts.ts` — add `faqs` arrays to the 5 highest-impression posts
- Why: These posts generate thousands of impressions but have no rich result eligibility; FAQPage schema can double CTR
- Effort: 3–4 hours (content audit per post to extract real FAQ pairs)

**6. Create /retirement/retirement-planning-tools page**
- Why: 3,615 impressions at position 8 going to a catch-all redirect. This is the largest single traffic recovery opportunity on the site.
- Action: Create `src/app/retirement/retirement-planning-tools/page.tsx`; update next.config.ts to remove /retirement/:slug+ catch-all (replace with specific per-slug redirects for all other Webflow retirement pages)
- Effort: 4–6 hours

**7. Create /retirement/social-security-and-medicare-coordination page**
- Why: 887 impressions at position 9 going to redirect
- Effort: 3–4 hours

**8. Create /life-insurance/permanent-life-insurance page**
- Why: 1,230 impressions going to redirect
- Effort: 4–5 hours

**9. Add WebApplication schema to all four calculator pages**
- Files: `src/app/tools/*/page.tsx` — add WebApplication JSON-LD to each
- Effort: 2 hours

**10. Add NPN identifier and Florida DFS sameAs to Person schema**
- File: `src/components/seo/LocalBusinessSchema.tsx`
- Effort: 30 minutes

---

## 90-Day Roadmap

See `90-day-roadmap.md` for the week-by-week execution plan.

---

*Strategy prepared July 2026. Review and update after Q3 GSC performance data is available (October 2026). Annual update for Medicare constants required in November 2026 per ANNUAL_UPDATE.md.*
