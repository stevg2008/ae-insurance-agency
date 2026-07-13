# Local SEO Plan — South Florida Medicare Market
## A&E Insurance Agency — July 2026

---

## Overview

A&E currently has 5 local landing pages:
- `/medicare-broker-miami` — EXISTS (improve)
- `/medicare-broker-south-florida` — EXISTS (improve)
- `/medicare-broker-kendall` — EXISTS (improve)
- `/medicare-broker-near-me` — EXISTS (keep, fix orphan status)
- `/health-insurance-broker-miami` — EXISTS (keep, fix orphan status)

**All 5 existing pages are currently navigation orphans** — they have no Header nav links and no Footer links. This is the most urgent local SEO fix, and it is addressed in Phase A (Quick Win QW-02).

---

## Location Decisions

### Tier 1 — Build in Weeks 7–8 (CRITICAL)

**DORAL — `/medicare-broker-doral`**
- Status: MISSING
- Priority: CRITICAL
- Why: The Health Experts Insurance (your primary bilingual competitor) is headquartered in Doral. Not having a Doral page means ceding this geography to a direct competitor.
- Medicare-eligible population: ~12,000+
- Unique local angle: Doral's demographics skew toward higher-income Latin American professionals who often face IRMAA surcharges and need personalized plan comparison. Higher Medigap Plan G eligibility than typical Miami-Dade.
- Key differentiator vs. competitor: The Health Experts targets ACA and health insurance broadly; A&E specializes in Medicare — narrower and stronger.

**HIALEAH — `/medicare-broker-hialeah`**
- Status: MISSING
- Priority: CRITICAL
- Why: Largest population gap. Hialeah is the 4th largest city in Florida with ~235,000 residents and ~40,000 Medicare-eligible beneficiaries. Heavily Cuban-American, majority Spanish-primary. Very high Dual Special Needs Plan (D-SNP) enrollment rate.
- Unique local angle: Hialeah has among the highest rates of Medicare Advantage enrollment and D-SNP eligibility in Miami-Dade. Plan comparison and switching is extremely common. Many residents qualify for $0 premium plans with dental/vision — this should be the page's lead value proposition.
- Content standard: Must include specific Hialeah ZIP codes (33010, 33012, 33013, 33015, 33016), reference to D-SNPs and Medicare Savings Programs, bilingual service mention.

**CORAL GABLES — `/medicare-broker-coral-gables`**
- Status: MISSING
- Priority: HIGH
- Why: Affluent community (~50K population, ~$90K median income) with Medicare-eligible population that statistically prefers Medigap Plan G over Medicare Advantage. High-value clients for A&E.
- Unique local angle: The Coral Gables page leads with Medigap (Supplement) rather than Medicare Advantage — differentiating from Hialeah and Doral pages. Mention Baptist Health South Florida and University of Miami Health System as providers accessible with Medigap nationwide coverage.
- This is A&E's highest income potential location page. Frame it around plan flexibility, no network restrictions, and nationwide coverage for active seniors.

### Tier 2 — Build in Week 8 (HIGH)

**HOMESTEAD — `/medicare-broker-homestead`**
- Status: MISSING
- Priority: HIGH
- Why: ~80,000 population; large agricultural and working-class Latin American community. Significant Medicare Savings Program (MSP) and Extra Help eligibility. Unique content angle that no existing page covers.
- Unique local angle: Homestead has higher rates of MSP and Extra Help eligibility than Miami proper. The page angle is cost assistance programs — QMB, SLMB, Extra Help for Part D. Position A&E as the expert who helps Homestead seniors maximize their cost-assistance eligibility.
- ZIP codes to reference: 33030, 33031, 33032, 33033, 33034, 33035
- Local provider: Homestead Hospital (Baptist Health South Florida network)

### Tier 3 — Consider After 90 Days (MEDIUM/LOW)

**FORT LAUDERDALE — `/medicare-broker-fort-lauderdale`**
- Status: MISSING
- Priority: MEDIUM
- Why: Broward County expansion; different carrier network availability from Miami-Dade.
- Unique angle: Emphasize that some Medicare Advantage plans are available only in Miami-Dade while others span both counties — Broward residents benefit from an independent broker who knows both markets.
- Build in Week 12 if bandwidth permits.

**WEST PALM BEACH — `/medicare-broker-west-palm-beach`**
- Status: Not recommended for this 90-day plan
- Why: Palm Beach County is a distinct market (~40 miles north). A&E's brand, office, and Google Business Profile are anchored in Miami-Dade. Building a West Palm Beach page before Miami-Dade is fully covered dilutes focus.
- Recommendation: Build only after achieving first-page rankings in all Miami-Dade locations (180-day target).

**PINECREST / PALMETTO BAY — Combined page**
- Status: NOT built in this plan
- Why: Both communities are small (~25,000 each) with demographics similar to Coral Gables. The Coral Gables page covers the Medigap-leaning affluent demographic adequately for now. Build a combined `/medicare-broker-pinecrest` page in Phase 2 (Month 4+).

**CUTLER BAY / SOUTH MIAMI**
- Status: NOT built in this plan
- Why: These communities are covered by the `/medicare-broker-south-florida` page at adequate granularity for now. Not worth dedicated pages in the 90-day window.

---

## Location Page Content Standard

Every location page MUST include ALL of the following:

### 1. Specific Geographic Identifiers
- At least 3 ZIP codes for the city
- Reference to the specific county (Miami-Dade for all Miami-area pages; Broward for Fort Lauderdale)
- Name of at least one local hospital or health system that accepts Medicare in that city

### 2. Locally Relevant Medicare Context
Each page must have at least ONE of these genuinely local data points:
- Medicare Advantage enrollment rate data for that community (if available)
- MSP/Extra Help eligibility context (for Homestead, Hialeah)
- IRMAA/Medigap preference context (for Coral Gables, Doral)
- D-SNP eligibility context (for Hialeah)
- Carrier network difference notes (for Fort Lauderdale vs. Miami-Dade)

### 3. Bilingual Service Mention (for Hialeah, Doral, Homestead)
Include in body text: "Consultations available in English and Spanish." This is factually accurate per Steve's knowsLanguage schema and genuine bilingual capability.

Do NOT build pages that are just "[City] Medicare Broker" with the city name swapped — those are doorway pages. Each page must earn its existence with genuinely useful local information.

### 4. FAQPage Schema (3–5 city-specific questions)
Every new location page must include a `faqs` array with city-specific questions that a resident of that city would actually ask — not generic Medicare questions.

### 5. LocalBusiness Schema with City-Level Geo Coordinates
Each new local page should include city-level LocalBusiness schema with city-specific `geo` coordinates, narrowed `areaServed` to that city, and city-specific `name` variation.

---

## Page-by-Page Specifications

### `/medicare-broker-doral`

**File to create:** `src/app/medicare-broker-doral/page.tsx`
**Pattern to follow:** Read `src/app/medicare-broker-miami/page.tsx` first for exact structure

**Metadata:**
```
title: "Medicare Broker in Doral FL | Independent, Bilingual, Free | A&E Insurance Agency"
description: "Independent Medicare broker serving Doral FL. Bilingual Spanish/English service. Compare Medicare Advantage, Medigap, and Part D plans from 25+ carriers. Free consultations."
canonical: "https://www.aeinsurancefl.com/medicare-broker-doral"
```

**H1:** "Medicare Broker in Doral FL — Independent, Bilingual, and Free"

**Content sections (follow 01, 02, 03... pattern):**
- 01: Why Doral Seniors Choose an Independent Medicare Broker
  - Unbiased plan comparison from 25+ carriers
  - Bilingual service (English and Spanish)
  - Special focus on IRMAA planning for Doral's higher-income professional community
- 02: Medicare Services for Doral Residents
  - Medicare Advantage (Miami-Dade county coverage includes Doral ZIP codes: 33122, 33126, 33172, 33178)
  - Medicare Supplement (Medigap) Plan G — popular choice for Doral's income bracket
  - IRMAA consultation: Doral's higher average household income means many seniors face Part B/D surcharges
- 03: Local Providers and Plan Availability
  - Baptist Health South Florida — major Doral area provider
  - Miami-Dade carrier availability (mention 25+ carriers without naming specific premiums)
- 04: About Steve Germain — Serving Doral Since 2009
  - Brief bio referencing Kendall office proximity to Doral (~15 minutes)
  - Link to /about/steve

**FAQs (required for FAQPage schema):**
1. Q: Does A&E Insurance Agency serve Doral, FL? A: Yes. Our office is in Kendall (12855 SW 136th Avenue, Suite 105), approximately 15 minutes from Doral, and we offer in-person, phone, and video consultations to Doral residents at no charge.
2. Q: Are there bilingual Medicare brokers in Doral? A: Yes. Steve Germain at A&E Insurance Agency provides Medicare consultations in English and Spanish, serving Doral's large bilingual community.
3. Q: What Medicare Advantage plans are available in Doral, FL? A: Doral falls within Miami-Dade County, which offers one of the widest selections of Medicare Advantage plans in the country. We compare options from 25+ carriers to find the best fit for your doctors and prescriptions.
4. Q: What is IRMAA and does it affect Doral Medicare beneficiaries? A: IRMAA (Income-Related Monthly Adjustment Amount) is a Medicare surcharge for higher earners. It's a common concern in Doral, where household incomes tend to be above average. We can calculate your expected IRMAA and help you plan for it.

**Bottom CTA:** "Schedule Your Free Doral Medicare Consultation" → /contact

**Internal links FROM this page:**
- /medicare-coverage/medicare-supplement-plans-medigap (Medigap section)
- /tools/irmaa-calculator (IRMAA section)
- /about/steve (bio section)
- /contact (CTA)

**Internal links TO this page FROM:**
- /medicare-broker-miami (add Doral mention in geographic coverage section)
- /medicare-broker-south-florida (add Doral to city list)
- Footer Quick Links (add after Phase A footer update)
- /medicare (add to local broker mentions section)

**Schema:**
- BreadcrumbList: Home → Medicare Broker Doral
- FAQPage schema using the 4 FAQs above

**Sitemap:** Add to `src/app/sitemap.ts` with priority 0.8

---

### `/medicare-broker-hialeah`

**File to create:** `src/app/medicare-broker-hialeah/page.tsx`

**Metadata:**
```
title: "Medicare Broker in Hialeah FL | Bilingual Medicare Help at No Cost | A&E Insurance Agency"
description: "Independent Medicare broker serving Hialeah FL. English and Spanish consultations. Medicare Advantage, Medigap, D-SNPs, and Medicare Savings Programs. Free, no obligation."
canonical: "https://www.aeinsurancefl.com/medicare-broker-hialeah"
```

**H1:** "Medicare Broker in Hialeah FL — Bilingual Medicare Help at No Cost"

**Content sections:**
- 01: Medicare Help for Hialeah Seniors
  - Independent broker — not tied to any insurance company
  - Bilingual service (English and Spanish)
  - Hialeah ZIP codes served: 33010, 33012, 33013, 33015, 33016
- 02: Medicare Plan Options for Hialeah Residents
  - Medicare Advantage (Part C) — Hialeah has very high MA enrollment rates, including many $0 premium plans
  - Dual Special Needs Plans (D-SNPs) — significant Hialeah population qualifies for dual Medicare/Medicaid
  - Medicare Savings Programs (QMB, SLMB, QI) — Hialeah has notable MSP eligibility
  - Extra Help (Low Income Subsidy) for Part D prescription drugs
- 03: Understanding Medicare in Hialeah
  - Many Hialeah seniors qualify for $0 premium Medicare Advantage with dental, vision, and hearing
  - Network coverage note: some carriers have stronger Hialeah-area networks than others — a local broker knows the difference
  - Local providers: Palmetto General Hospital, Hialeah Hospital, Baptist Health South Florida network

**FAQs:**
1. Q: Do you have a Medicare broker near Hialeah, FL? A: A&E Insurance Agency serves all of Hialeah and Miami-Dade County. Our office in Kendall is a short drive away, and we offer phone and video consultations for your convenience.
2. Q: What Medicare Advantage plans are available in Hialeah? A: Hialeah is in Miami-Dade County, which has some of the most Medicare Advantage plan options in the country, including many $0 premium plans with dental, vision, and hearing benefits.
3. Q: Do you offer Medicare help in Spanish in Hialeah? A: Yes. Steve Germain provides Medicare consultations in English and Spanish. We serve Hialeah's large Spanish-speaking community with no language barrier.
4. Q: What is a Medicare Savings Program and do Hialeah residents qualify? A: Medicare Savings Programs help low- and moderate-income beneficiaries pay Medicare premiums and costs. Many Hialeah residents qualify — we offer free eligibility checks at no obligation.
5. Q: What is a Dual Special Needs Plan (D-SNP) and is it available in Hialeah? A: A D-SNP is a Medicare Advantage plan for people who qualify for both Medicare and Medicaid. They're widely available in Hialeah and often include $0 premiums, extra benefits, and coordinated care. We can check your eligibility at no charge.

**Bottom CTA:** "Schedule Your Free Medicare Consultation" → /contact (mention bilingual option in CTA text)

**Sitemap:** Add with priority 0.8

---

### `/medicare-broker-coral-gables`

**File to create:** `src/app/medicare-broker-coral-gables/page.tsx`

**Metadata:**
```
title: "Medicare Broker in Coral Gables FL | Medigap Plan G Specialists | A&E Insurance Agency"
description: "Independent Medicare broker in Coral Gables FL. Specialists in Medicare Supplement (Medigap) Plan G for Coral Gables seniors. See any doctor nationwide. Free consultations."
canonical: "https://www.aeinsurancefl.com/medicare-broker-coral-gables"
```

**H1:** "Medicare Broker in Coral Gables FL — Medigap & Medicare Supplement Specialists"

**Unique angle for Coral Gables:** This page leads with Medigap (Supplement), not Medicare Advantage. Coral Gables' affluent demographics mean seniors here prefer the flexibility of seeing any doctor without network restrictions. This is the data-informed differentiation that makes the page genuinely useful.

**Content sections:**
- 01: Why Coral Gables Seniors Often Choose Medigap Over Medicare Advantage
  - No network restrictions — see any Medicare-accepting doctor, including all University of Miami Health System and Baptist Health providers, without referrals
  - Predictable costs — annual out-of-pocket is capped and largely fixed with Plan G
  - No prior authorizations required for any procedure
  - Ideal for seniors who travel frequently or spend winters elsewhere
- 02: Medicare Plan Options for Coral Gables Residents
  - Medigap Plan G — covers all Medicare-approved costs except the Part B deductible; most popular for Coral Gables seniors
  - Medigap Plan N — lower premium alternative with small office copays; explained with Plan G comparison
  - Medicare Advantage — also available; we explain the trade-offs honestly and let you decide
  - Part D Prescription Drug Plans — standalone plans for Medigap holders
- 03: Doctors and Hospitals in Coral Gables Accept Medigap
  - Baptist Health South Florida and University of Miami Health System accept Medicare
  - With Medigap Plan G, no carrier approval needed — you use your Medicare card directly
  - Nationwide coverage for travel — important for Coral Gables' frequent-traveler demographic
  - Reference: Village of Merrick Park area specialists, Baptist Health's Coral Gables medical campus

**FAQs:**
1. Q: Do most Coral Gables seniors choose Medicare Advantage or Medigap? A: Coral Gables seniors tend to choose Medigap (Medicare Supplement) plans at higher rates than the Miami-Dade average. The flexibility to see any doctor without network restrictions appeals to this community's active, higher-income retirees.
2. Q: What is the best Medigap plan for Coral Gables, FL? A: Medicare Supplement Plan G is the most popular choice for Coral Gables seniors in 2026. It covers all Medicare-approved costs except the Part B deductible, leaving almost no out-of-pocket medical expenses.
3. Q: Can I see my Coral Gables doctors without a referral with Medigap? A: Yes. With a Medicare Supplement plan, you can see any doctor or specialist who accepts Medicare — including all major practices in Coral Gables and the full University of Miami Health System — without referrals or prior authorizations.
4. Q: How much does Medigap Plan G cost in Coral Gables? A: Medigap Plan G premiums vary by age, sex, and health status. For a 65-year-old in Miami-Dade County, premiums typically range from approximately $125–$225/month depending on the carrier. We compare all available carriers to find the most competitive rate for your profile.

**Bottom CTA:** "Schedule a Free Medigap Consultation in Coral Gables" → /contact

**Sitemap:** Add with priority 0.8

---

### `/medicare-broker-homestead`

**File to create:** `src/app/medicare-broker-homestead/page.tsx`

**Metadata:**
```
title: "Medicare Broker in Homestead FL | Free Bilingual Medicare Help | A&E Insurance Agency"
description: "Independent Medicare broker serving Homestead FL. Bilingual English/Spanish service. Medicare Advantage, Medigap, Medicare Savings Programs, and Extra Help. Free consultations."
canonical: "https://www.aeinsurancefl.com/medicare-broker-homestead"
```

**H1:** "Medicare Broker in Homestead FL — Bilingual, Independent, Free"

**Unique angle for Homestead:** Cost-assistance programs. Homestead has a large working-class population with significant MSP and Extra Help eligibility. The page should lead with "we help you access programs that reduce your Medicare costs" — this is a service angle no other A&E page covers as directly.

**Content sections:**
- 01: Medicare Help for Homestead Seniors — Cost Assistance is Available
  - Independent broker — we compare all options, not just expensive ones
  - Medicare Savings Programs can pay your Part B premium ($185/month in 2026)
  - Bilingual consultations (English and Spanish)
  - ZIP codes served: 33030, 33031, 33032, 33033, 33034, 33035
- 02: Cost Assistance Programs for Homestead Medicare Beneficiaries
  - Medicare Savings Programs (MSPs): QMB, SLMB, QI — who qualifies and what each covers
  - Extra Help for Part D: reduces prescription drug costs significantly
  - Dual Special Needs Plans (D-SNPs) — for dual Medicare/Medicaid eligible
  - Local application note: we help with paperwork and eligibility screening at no charge
- 03: Medicare Advantage Plans Available in Homestead
  - Southern Miami-Dade ZIP codes have access to most Miami-Dade Medicare Advantage plans
  - $0 premium plans with dental, vision, and hearing available
  - Important: network coverage varies more in southern Miami-Dade — a local broker helps verify your doctors are in-network
  - Homestead Hospital (Baptist Health South Florida network) is in most major HMO networks

**FAQs:**
1. Q: Is there a Medicare broker in Homestead, FL? A: A&E Insurance Agency serves Homestead and all of southern Miami-Dade County. We offer phone, video, and in-person consultations from our Kendall office.
2. Q: Do I qualify for a Medicare Savings Program in Homestead? A: Medicare Savings Programs help low-income beneficiaries pay their Medicare premiums. Eligibility is based on income and assets — contact us for a free, no-obligation eligibility check.
3. Q: What Medicare Advantage plans cover Homestead, FL? A: Homestead ZIP codes (33030–33035) fall in southern Miami-Dade County, which is covered by most Miami-Dade Medicare Advantage plans. We compare all available options to find $0 premium plans where possible.
4. Q: Can I get Medicare help in Spanish in Homestead? A: Yes. Steve Germain provides fully bilingual Medicare consultations in English and Spanish, serving Homestead's large Spanish-speaking community at no cost.

**Bottom CTA:** "Schedule Your Free Homestead Medicare Consultation" → /contact

**Sitemap:** Add with priority 0.8

---

## Improvements to Existing Location Pages

### `/medicare-broker-miami` — Improve (Week 8)

**Current issues:** No FAQPage schema; no mention of specific local carriers; no internal links to new city pages (Doral, Coral Gables, Hialeah, Homestead).

**Additions:**
1. Add FAQPage schema with 3–5 Miami-specific questions
2. Add a section: "Serving all of Miami-Dade County" with links to Kendall, Doral, Coral Gables, Hialeah, Homestead pages once they exist
3. Add carrier availability note: "Miami-Dade County has one of the highest concentrations of Medicare Advantage plans in the United States — 50+ plans from major carriers including Humana, Aetna, UnitedHealthcare, and WellCare."
4. Note: "Miami has above-average Medicare Advantage penetration (65%+ vs. ~55% statewide) — plan comparison is especially important here."

### `/medicare-broker-kendall` — Improve (Week 8)

**Unique angle:** A&E's physical office is in Kendall. Lean into in-person availability harder than any other page.

**Additions:**
1. Add FAQPage schema
2. Add: "Our office is located at 12855 SW 136th Avenue, Suite 105, Kendall, FL 33186 — in-person appointments available Monday–Friday."
3. Add reference to Kendall's provider network: "Baptist Health South Florida's Kendall campus and Nicklaus Children's Hospital are both within miles of our office and in most major Medicare Advantage HMO networks."
4. Add local landmark: "We serve the Kendall, West Kendall, and Hammocks communities."

### `/medicare-broker-south-florida` — Improve (Week 8)

**Additions:**
1. Add links to all new city pages as a "South Florida Cities We Serve" section
2. Update to function as a regional hub page that links out to city-specific pages (Miami, Kendall, Doral, Coral Gables, Hialeah, Homestead, Fort Lauderdale)
3. This page competes for "medicare broker south florida" — keep its focus on the regional/tri-county angle and let city pages handle city-specific queries.

---

## Footer Updates Required

Once all new location pages are built, update the Footer Quick Links (already partially done in Phase A) to include all active local pages:

```tsx
// Footer Locations section to add:
{ label: "Medicare Broker Miami", href: "/medicare-broker-miami" },
{ label: "Medicare Broker Kendall", href: "/medicare-broker-kendall" },
{ label: "Medicare Broker Doral", href: "/medicare-broker-doral" },
{ label: "Medicare Broker Coral Gables", href: "/medicare-broker-coral-gables" },
{ label: "Medicare Broker Hialeah", href: "/medicare-broker-hialeah" },
{ label: "Medicare Broker Homestead", href: "/medicare-broker-homestead" },
{ label: "Medicare Broker Near Me", href: "/medicare-broker-near-me" },
{ label: "Medicare Broker South Florida", href: "/medicare-broker-south-florida" },
```

This ensures every location page is reachable from every page on the site through the global footer.
