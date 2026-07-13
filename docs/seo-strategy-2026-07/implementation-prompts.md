# A&E Insurance Agency — SEO Implementation Prompts
## Ready-to-Paste Claude Code Prompts
### July 2026

---

> **How to use:** Copy any prompt below and paste it into a new Claude Code session in the medicare-site project directory. Each prompt is self-contained and includes the exact files to edit, the exact change to make, and the rationale. Run `npx tsc --noEmit` after any TypeScript file edit.

---

## PROMPT 01 — Fix Spanish inLanguage Schema (P0 — 15 min)

```
In src/components/seo/LocalBusinessSchema.tsx, find the WebSite entity in the @graph array.

The current inLanguage field reads:
  inLanguage: ["en-US", "es"],

Change it to:
  inLanguage: ["en-US"],

Rationale: The site declares Spanish as a content language in schema but has zero Spanish-language pages. This misrepresents the site to Google and should be corrected immediately.

After editing, run: npx tsc --noEmit
```

---

## PROMPT 02 — Add Local Pages to Footer Quick Links (P0 — 30 min)

```
In src/components/layout/Footer.tsx, find the Quick Links column (the 4th column, Column 4).

The current Quick Links list is:
  Medicare, Health Insurance, Retirement, Life Insurance, Critical Illness, About Us, Blog, FAQ, Contact

Add the following items to the list, between "Medicare" and "Health Insurance":
  { label: "Medicare Broker Miami", href: "/medicare-broker-miami" },
  { label: "Medicare Broker Kendall", href: "/medicare-broker-kendall" },
  { label: "Medicare Broker Near Me", href: "/medicare-broker-near-me" },

These local landing pages are currently navigation orphans — they have no nav or footer links and are crawlable only via the sitemap. Adding them to the footer gives Googlebot a crawl path from every page.

After editing, run: npx tsc --noEmit
Verify: npm run build (confirms no type errors)
```

---

## PROMPT 03 — Add NPN Identifier + DFS sameAs to Person Schema (P1 — 30 min)

```
In src/components/seo/LocalBusinessSchema.tsx, find the Person entity for Steve Germain in the @graph array.

1. Add the following to the Person entity (after the hasCredential field):
  identifier: {
    "@type": "PropertyValue",
    propertyID: "NPN",
    value: "19921707",
  },

2. Add the Florida DFS license lookup URL to the Person sameAs array:
  "https://licenseeSearch.fldfs.com/agentlicenseesearch/AgentLicenseeSearch.aspx",

Rationale: NPN 19921707 is already in the footer text but not in structured data. Adding it as a schema identifier allows AI models and Google to programmatically verify Steve's license credentials — critical for YMYL E-E-A-T.

After editing, run: npx tsc --noEmit
```

---

## PROMPT 04 — Add WebApplication Schema to All Four Calculator Pages (P1 — 2 hr)

```
Add WebApplication JSON-LD schema to each of the four calculator pages. Each page.tsx file exports a static metadata object — add a JSON-LD script tag by creating a small server component for schema injection, similar to how LocalBusinessSchema.tsx works.

For each calculator, create a schema object with this structure (adapt name/description per tool):

/tools/medicare-enrollment-calculator:
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Medicare Enrollment Calculator",
  "url": "https://www.aeinsurancefl.com/tools/medicare-enrollment-calculator",
  "description": "Calculate your Medicare Initial Enrollment Period. Enter your date of birth to find the exact 7-month window when you can enroll without penalty.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@id": "https://www.aeinsurancefl.com/#organization" }
}

/tools/part-b-penalty-calculator:
  name: "Medicare Part B Late Enrollment Penalty Calculator"
  description: "Calculate your Medicare Part B late enrollment penalty for 2026."

/tools/part-d-penalty-calculator:
  name: "Medicare Part D Late Enrollment Penalty Calculator"
  description: "Calculate your Medicare Part D late enrollment penalty for 2026."

/tools/irmaa-calculator:
  name: "2026 Medicare IRMAA Calculator"
  description: "Calculate your 2026 Medicare IRMAA income-related surcharge for Part B and Part D."

Implementation approach:
- Create src/components/seo/WebApplicationSchema.tsx as a server component (pure JSON-LD script tag, similar to LocalBusinessSchema.tsx)
- Accept props: name, url, description
- Render the @type WebApplication schema
- Import and render this component in each /tools/*/page.tsx

After editing, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 05 — Add BreadcrumbList Schema to Medicare Coverage Pillar Pages (P1 — 1 hr)

```
The 7 pages under /medicare-coverage/ do not have BreadcrumbList schema. The local landing pages have this schema — apply the same pattern to coverage pages.

For each medicare-coverage/[slug]/page.tsx (they share the generateMetadata pattern), add BreadcrumbList JSON-LD.

The breadcrumb structure should be:
  Home (https://www.aeinsurancefl.com) → Medicare (https://www.aeinsurancefl.com/medicare) → [Page Title]

Create a BreadcrumbList component or add the JSON-LD inline to the coverage page layout.

A simple approach: in src/app/medicare-coverage/[slug]/page.tsx, add a <script type="application/ld+json"> server component that generates BreadcrumbList using the post's title from the medicareCoveragePosts array.

After editing, run: npx tsc --noEmit
```

---

## PROMPT 06 — Replace /retirement Catch-All Redirect + Create Retirement Subpages (P0 — 6 hr)

```
STEP 1: Update next.config.ts

Find these lines:
  { source: "/retirement/:slug+", destination: "/retirement", permanent: true },

Replace with specific per-slug redirects for all Webflow retirement slugs that will NOT get real pages, plus remove the catch-all for the slugs that WILL get pages:

Replace with:
  // Retirement subpages getting real pages — remove from redirects:
  // (no redirect for retirement-planning-tools, social-security-and-medicare-coordination, 
  //  retirement-income-planning, long-term-care-and-recovery-planning)
  //
  // Retirement slugs that still need redirects to /retirement:
  { source: "/retirement/what-is-an-annuity", destination: "/retirement", permanent: true },
  { source: "/retirement/annuities-explained", destination: "/retirement", permanent: true },
  // Add any other /retirement/* Webflow slugs that appear in GSC but are not getting pages
  // Check GSC for all /retirement/* URLs before deploying this change

STEP 2: Create src/app/retirement/retirement-planning-tools/page.tsx

This page is the highest-priority traffic recovery on the site. It has 3,615 GSC impressions at position 8 coming from 21 retirement keywords — all currently redirecting to the generic /retirement service page.

The page should:
- H1: "Retirement Planning Tools — Calculate Your Path to Financial Security"
- Intro paragraph (2–3 sentences): retirement planning requires knowing your numbers; these tools help you estimate Medicare costs, IRMAA surcharges, and retirement income
- Section: Medicare Cost Planning Tools
  - Link/embed: Medicare Enrollment Calculator (/tools/medicare-enrollment-calculator)
  - Link/embed: IRMAA Calculator (/tools/irmaa-calculator)
  - Link/embed: Part B Penalty Calculator (/tools/part-b-penalty-calculator)
  - Link/embed: Part D Penalty Calculator (/tools/part-d-penalty-calculator)
- Section: Retirement Income Planning
  - Brief content about annuities, Social Security timing, tax-efficient withdrawals
  - CTA: "Schedule a retirement planning consultation with Steve"
- Section: Social Security Coordination
  - Brief: link to /retirement/social-security-and-medicare-coordination
- FAQ section (3–4 questions about retirement planning tools)
- Bottom CTA: dark navy section linking to /contact

Schema: HowTo + FAQPage + Article
Metadata title: "Retirement Planning Tools | Medicare Cost Calculators | A&E Insurance Agency"
Metadata description: "Free retirement planning tools from South Florida's trusted Medicare broker. Calculate your Medicare enrollment window, IRMAA surcharge, and late enrollment penalties. Plan your retirement with confidence."

Add this page to sitemap.ts staticPages array with priority 0.8

After creating, run: npx tsc --noEmit && npm run build
Verify the page is live and submit to GSC URL Inspection tool.
```

---

## PROMPT 07 — Create /retirement/social-security-and-medicare-coordination (P1 — 4 hr)

```
Create src/app/retirement/social-security-and-medicare-coordination/page.tsx

This page targets the GSC legacy URL /retirement/social-security-and-medicare-coordination which has 887 impressions at position 9 across 11 Social Security + Medicare keywords.

Content outline:
- H1: "Social Security and Medicare: How They Work Together"
- Intro: These two programs are deeply linked but enrollment timelines differ
- Section 1: "When Do You Automatically Get Medicare?"
  - If receiving SS benefits at 65 → automatic Part A + Part B enrollment
  - If not yet receiving SS at 65 → must actively enroll
  - Key dates and 3-month enrollment windows
- Section 2: "Medicare Part B and Social Security Income Deduction"
  - Part B premium deducted from SS check automatically
  - 2026 Part B standard premium: $185.00/month (verify against ANNUAL_UPDATE.md)
  - IRMAA surcharges and how they interact with SS income
- Section 3: "Should You Take Social Security at 62 or Wait Until Medicare at 65?"
  - This is the key question with real financial stakes
  - Considerations: Part B enrollment while waiting for SS; COBRA vs. marketplace gap insurance
  - Link to /tools/irmaa-calculator
- Section 4: "Spousal Medicare and Social Security Benefits"
  - Medicare eligibility based on spouse's work record
  - Survivor benefits and Medicare implications
- FAQ section (4–5 Q&A pairs — these become FAQPage schema)
- Bottom CTA linking to /contact

Metadata title: "Social Security and Medicare: How They Work Together | A&E Insurance Agency"
Schema: Article + FAQPage + HowTo (for the enrollment coordination steps)

Add to sitemap.ts. Link to this page from /retirement service page and /tools/irmaa-calculator.

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 08 — Create /life-insurance/permanent-life-insurance (P1 — 5 hr)

```
Create src/app/life-insurance/permanent-life-insurance/page.tsx

This page targets the GSC legacy URL /life-insurance/permanent-life-insurance which has 1,230 impressions across 4 keywords currently redirecting to /life-insurance via catch-all.

PREREQUISITE: First update next.config.ts to remove permanent-life-insurance from the /life-insurance/:slug+ catch-all (replace catch-all with per-slug redirects for all other /life-insurance/* Webflow URLs).

Content outline:
- H1: "Permanent Life Insurance: What It Is, How It Works, and Who Needs It"
- Intro: Permanent life insurance provides lifelong coverage and builds cash value — unlike term insurance which expires
- Section 1: Types of Permanent Life Insurance
  - Whole Life Insurance: guaranteed death benefit, fixed premium, guaranteed cash value growth
  - Universal Life Insurance: flexible premiums, adjustable death benefit, market-sensitive growth
  - Variable Life Insurance: investment-linked cash value (higher risk/reward)
  - Indexed Universal Life (IUL): tied to market index without direct market risk
  - Comparison table of the 4 types
- Section 2: Permanent vs. Term Life Insurance
  - Comparison table: cost, coverage period, cash value, best use case
  - When permanent makes sense (estate planning, business succession, long-term dependents)
  - When term makes more sense (temporary needs, budget constraints)
- Section 3: Permanent Life Insurance in South Florida
  - Estate planning context for high-net-worth Miami families
  - Business buyout / key man coverage for Miami entrepreneurs
  - Tax advantages of permanent life insurance cash value
- Section 4: How Much Does Permanent Life Insurance Cost?
  - 2026 average premium ranges by age/coverage amount (source: industry averages)
  - Factors affecting premium: age, health, coverage amount, policy type
- FAQ (4–5 Q&A pairs)
- Bottom CTA: Free Life Insurance Consultation with Steve Germain

Metadata title: "Permanent Life Insurance in South Florida | A&E Insurance Agency"
Metadata description: "Compare whole life, universal life, and indexed universal life insurance options. Independent broker Steve Germain helps South Florida families find the right permanent life coverage."
Schema: Article + FAQPage

Add to sitemap.ts. Update /life-insurance service page to link to this new page.

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 09 — Add FAQPage Schema to Top Blog Posts (P1 — per-post)

```
Add `faqs` arrays to the following blog posts in src/lib/blogPosts.ts. The `faqs` field accepts an array of { question: string, answer: string } objects. Each Q&A pair MUST correspond to a question that actually appears in the post's HTML content — never add FAQs that aren't answered in the body.

For each post listed below, read the blog post HTML content, identify 3–5 question-format headings or FAQ sections, and add them as the faqs array. The answer should be a 1–3 sentence plain text answer (strip HTML).

Priority posts to update (in order):

1. slug: "medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you"
   Suggested FAQ questions to find in content:
   - What is the difference between Medicare Advantage and Medicare Supplement?
   - Which is better: Medicare Advantage or Medigap in Florida?
   - Can I switch from Medicare Advantage to Medigap?

2. slug: "what-is-the-difference-between-medicare-part-a-and-part-b"
   Suggested FAQ questions:
   - What does Medicare Part A cover?
   - What does Medicare Part B cover?
   - Do I need both Part A and Part B?

3. slug: "which-medicare-plan-is-better-for-dental-and-vision-coverage"
   Suggested FAQ questions:
   - Does Medicare cover dental and vision?
   - Which Medicare plans include dental and vision?
   - How do I add dental coverage to my Medicare plan?

4. slug: "which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida"
   Suggested FAQ questions:
   - What Medicare plan is best for chronic illness?
   - Are there Medicare plans designed for people with chronic conditions?

5. slug: "how-does-medicare-part-c-compare-to-original-medicare-in-florida"
   Suggested FAQ questions:
   - What is Medicare Part C?
   - How does Medicare Advantage differ from Original Medicare in Florida?

After editing, run: npx tsc --noEmit

The `faqs` array activates FAQSchema rendering (see src/components/seo/FAQSchema.tsx) which emits FAQPage JSON-LD and enables FAQ rich results in Google Search.
```

---

## PROMPT 10 — Create /medicare-broker-doral Local Landing Page (P1 — 4 hr)

```
Create a new local landing page at src/app/medicare-broker-doral/page.tsx

Follow the exact same pattern as the existing /medicare-broker-miami page (src/app/medicare-broker-miami/page.tsx) — read that file first to understand the structure.

Page specifications:

Metadata:
  title: "Medicare Broker in Doral FL | Bilingual Medicare Help | A&E Insurance Agency"
  description: "Independent Medicare broker in Doral FL. Bilingual Spanish/English service. A&E Insurance Agency compares Medicare Advantage, Medigap, and Part D plans from 25+ carriers. Free consultations."
  canonical: "https://www.aeinsurancefl.com/medicare-broker-doral"

Schema: BreadcrumbList (Home > Medicare Broker Doral) + FAQPage

H1: "Medicare Broker in Doral FL — Bilingual, Independent, Free"

Content sections (use the numbered 01, 02... format matching existing local pages):
01. Why Doral Seniors Choose an Independent Medicare Broker
    - Doral's growing retirement community needs unbiased plan comparison
    - 25+ carriers compared — we're not tied to one plan
    - Bilingual service: English and Spanish
    - In-person or video consultations available

02. Medicare Services Available to Doral Residents
    - Medicare Advantage plans available in Doral / Miami-Dade County
    - Medicare Supplement (Medigap) plans — particularly Plan G for higher-income Doral retirees
    - Part D prescription drug plans
    - IRMAA consultation for high earners (common in Doral's professional community)
    - Note: Doral's Medicare-eligible residents often qualify for higher IRMAA brackets due to the city's higher average household income

03. Local Carrier Availability in Doral / Miami-Dade
    - Note that Medicare Advantage plan availability varies by ZIP code
    - Doral ZIP codes (33122, 33126, 33172, 33178) — all Miami-Dade County coverage
    - Major carriers available: Humana, Aetna, UnitedHealthcare, WellCare, Simply Healthcare (verify current carriers)

04. About Steve Germain — Serving Doral Since 2009
    - Brief bio, NPN 19921707, licensed in 35 states
    - Spanish/English bilingual service
    - Link to /about/steve

FAQ section (these become FAQPage schema):
Q: Does A&E Insurance Agency serve Doral, FL?
A: Yes. A&E Insurance Agency serves Doral and all of Miami-Dade County. Our office is in nearby Kendall (12855 SW 136th Avenue, Suite 105) and we offer in-person, phone, and video consultations.

Q: Are there bilingual Medicare brokers in Doral?
A: Yes. Steve Germain at A&E Insurance Agency provides Medicare consultations in both English and Spanish, serving Doral's bilingual senior population at no cost.

Q: What Medicare Advantage plans are available in Doral?
A: Doral falls within Miami-Dade County, which has one of the highest concentrations of Medicare Advantage plans in Florida. We compare plans from 25+ carriers including Humana, Aetna, UnitedHealthcare, and WellCare to find the best fit for your doctors and prescriptions.

Bottom CTA (dark navy): "Schedule Your Free Doral Medicare Consultation" → /contact

Add to sitemap.ts staticPages with priority 0.7.
Link to this page from /medicare-broker-miami and /medicare-broker-south-florida content sections.
Link to this page from the Footer Quick Links (after completing Prompt 02 update if not already done).

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 11 — Create /medicare-broker-hialeah Local Landing Page (P1 — 4 hr)

```
Create src/app/medicare-broker-hialeah/page.tsx

Metadata:
  title: "Medicare Broker in Hialeah FL | Bilingual Medicare Help — Gratis | A&E Insurance Agency"
  description: "Medicare broker serving Hialeah FL. Spanish-speaking, independent, free. Compare Medicare Advantage, Medigap, and Part D plans from 25+ carriers in Hialeah and Miami-Dade County."
  canonical: "https://www.aeinsurancefl.com/medicare-broker-hialeah"

Schema: BreadcrumbList + FAQPage

H1: "Medicare Broker in Hialeah FL — Asesor de Medicare en Hialeah"
(Bilingual H1 appropriate given that Hialeah is majority Spanish-primary)

Content sections:
01. Medicare en Hialeah: Por Qué un Corredor Independiente Importa
    - Hialeah has one of the highest Medicare Advantage enrollment rates in Miami-Dade County
    - Independent broker compares every plan — not employed by any insurance company
    - Bilingual consultations — English and Spanish

02. Medicare Services for Hialeah Residents
    - Medicare Advantage (Part C) — HMO and PPO options for Hialeah ZIP codes
    - Medicare Supplement (Medigap) — explain difference from Advantage
    - Medicare Savings Programs (MSP) — Hialeah has high eligibility rate for QMB, SLMB programs
    - Extra Help (Low Income Subsidy) for Part D
    - Dual Eligible Special Needs Plans (D-SNPs) — significant Hialeah population qualifies

03. Understanding Your Medicare Options in Hialeah
    - Hialeah carriers and plan availability (ZIP codes 33010, 33012, 33013, 33015, 33016)
    - Emphasis: many Hialeah seniors are eligible for $0 premium Medicare Advantage plans with dental and vision
    - Drug coverage comparison for Hialeah pharmacies

FAQ:
Q: Do you have a Medicare broker near Hialeah?
A: A&E Insurance Agency serves all of Hialeah and Miami-Dade County. Our office is in Kendall, a short drive from Hialeah, and we offer phone and video consultations for your convenience.

Q: What Medicare plans are available in Hialeah, FL?
A: Hialeah is in Miami-Dade County, which offers some of the widest Medicare plan selections in the country — including many $0 premium Medicare Advantage plans with dental, vision, and hearing benefits.

Q: Do you offer Medicare help in Spanish in Hialeah?
A: Yes. Steve Germain provides Medicare consultations in both English and Spanish. Many of our Hialeah clients prefer Spanish-language service, and we accommodate this at every appointment.

Q: What is a Medicare Savings Program and am I eligible in Hialeah?
A: Medicare Savings Programs (MSPs) help low-income beneficiaries pay their Medicare premiums and cost-sharing. Hialeah has a significant MSP-eligible population — we can check your eligibility at no charge.

Bottom CTA: "Schedule Your Free Medicare Consultation" → /contact (include note about Spanish-language option)

Add to sitemap.ts. Link from /medicare-broker-south-florida and /medicare-broker-miami.

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 12 — Create /medicare-broker-coral-gables Local Landing Page (P1 — 3 hr)

```
Create src/app/medicare-broker-coral-gables/page.tsx

Metadata:
  title: "Medicare Broker in Coral Gables FL | Medigap & Medicare Supplement Specialists"
  description: "Independent Medicare broker in Coral Gables FL. Specialists in Medicare Supplement (Medigap) Plan G and Plan N for Coral Gables seniors. Free consultations from A&E Insurance Agency."
  canonical: "https://www.aeinsurancefl.com/medicare-broker-coral-gables"

Schema: BreadcrumbList + FAQPage

H1: "Medicare Broker in Coral Gables FL — Medigap & Supplement Specialists"

Unique content angle: Coral Gables is an affluent community where seniors typically prefer Medicare Supplement (Medigap) plans over Medicare Advantage because of flexibility to see any doctor nationwide without referrals.

Content sections:
01. Why Coral Gables Seniors Often Choose Medigap Over Medicare Advantage
    - No network restrictions — see any Medicare-accepting doctor nationwide
    - Predictable out-of-pocket costs — ideal for higher-income retirees
    - Plan G vs. Plan N comparison for Coral Gables residents
    - No prior authorizations required

02. Medicare Plan Options for Coral Gables Residents
    - Medigap Plan G — most popular for Coral Gables seniors
    - Medigap Plan N — lower premium, small copays, alternative to Plan G
    - Medicare Advantage — also available but explain trade-offs
    - Part D Prescription Drug Plans — standalone for Medigap holders

03. Working With Doctors in Coral Gables
    - Baptist Health South Florida and University of Miami Health System accept all Medicare
    - With Medigap Plan G, no carrier approval needed for specialists
    - Nationwide coverage when traveling — important for Coral Gables' frequent-traveler demographic

FAQ:
Q: Do most Coral Gables seniors choose Medicare Advantage or Medigap?
A: Coral Gables seniors tend to prefer Medigap (Medicare Supplement) plans at higher rates than the Miami-Dade average. The flexibility to see any doctor without network restrictions and predictable costs appeal to Coral Gables' active, higher-income retiree population.

Q: What is the best Medigap plan for Coral Gables, FL?
A: Medicare Supplement Plan G is the most popular choice for Coral Gables seniors in 2026. It covers all Medicare-approved costs except the Part B deductible, leaving you with almost no out-of-pocket medical expenses.

Q: Can I see my Coral Gables specialists without a referral on Medigap?
A: Yes. With a Medicare Supplement plan, you can see any doctor or specialist who accepts Medicare — including all major practices in Coral Gables and the University of Miami Health System — without referrals or prior authorizations.

Bottom CTA: "Schedule a Free Medigap Consultation in Coral Gables" → /contact

Add to sitemap.ts. Link from /medicare-broker-miami and /medicare-coverage/medicare-supplement-plans-medigap.

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 13 — Create /medicare-broker-homestead Local Landing Page (P1 — 3 hr)

```
Create src/app/medicare-broker-homestead/page.tsx

Metadata:
  title: "Medicare Broker in Homestead FL | Free Bilingual Medicare Help | A&E Insurance Agency"
  description: "Independent Medicare broker serving Homestead FL. Bilingual Spanish/English service. Medicare Advantage, Medigap, Medicare Savings Programs, and Extra Help. Free consultations."
  canonical: "https://www.aeinsurancefl.com/medicare-broker-homestead"

Schema: BreadcrumbList + FAQPage

H1: "Medicare Broker in Homestead FL — Bilingual, Independent, Free"

Content angle: Homestead has a large working-class and agricultural Latin American population with significant Medicare Savings Program and Extra Help eligibility. The page should emphasize cost-assistance programs.

Content sections:
01. Medicare Help for Homestead Seniors
    - Independent broker — no ties to any insurance company
    - Compare Medicare Advantage and Medigap plans available in Homestead (Miami-Dade County)
    - Bilingual service: English and Spanish
    - Help enrolling in Medicare Savings Programs and Extra Help if you qualify

02. Medicare Cost Assistance Programs for Homestead Residents
    - Medicare Savings Programs (MSPs): QMB, SLMB, QI — who qualifies
    - Extra Help for Part D: reduce prescription drug costs
    - How to apply: we handle the paperwork
    - Dual Special Needs Plans (D-SNPs) for dual Medicare/Medicaid eligible

03. Medicare Advantage Plans in Homestead / South Miami-Dade
    - Homestead ZIP codes (33030, 33031, 33032, 33033, 33034, 33035) — Miami-Dade coverage
    - Many $0 premium plans available with dental, vision, hearing
    - Important: network coverage varies significantly in southern Miami-Dade; a local broker helps verify your doctors are in-network

FAQ:
Q: Is there a Medicare broker in Homestead, FL?
A: A&E Insurance Agency serves Homestead and all of southern Miami-Dade County. We offer phone, video, and in-person consultations and can help with Medicare enrollment, plan comparisons, and cost-assistance programs.

Q: Do I qualify for a Medicare Savings Program in Homestead?
A: Medicare Savings Programs help low- and moderate-income beneficiaries pay their Medicare premiums. Eligibility is based on income and resources — contact us for a free eligibility check.

Q: What Medicare Advantage plans are available in Homestead, FL?
A: Homestead is in southern Miami-Dade County, which is covered by many Medicare Advantage plans — including $0 premium HMO and PPO options with dental and vision benefits.

Q: Can I get Medicare help in Spanish in Homestead?
A: Yes. Steve Germain provides fully bilingual Medicare consultations in English and Spanish, serving Homestead's large Spanish-speaking population.

Bottom CTA: "Schedule Your Free Homestead Medicare Consultation" → /contact

Add to sitemap.ts. Link from /medicare-broker-miami and /medicare-broker-south-florida.

After creating, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 14 — Add VideoObject Schema to /watch Page (P2 — 1 hr)

```
In src/app/watch/page.tsx, add VideoObject JSON-LD schema for the Medicare Made Simple workshop.

Create a server-side <script type="application/ld+json"> tag in the page that exports this schema:

{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Medicare Made Simple — Free Workshop",
  "description": "Steve Germain explains Medicare Advantage vs. Medigap vs. Part D in plain English. Learn how to choose the right Medicare plan without jargon or sales pressure. Free workshop for South Florida seniors turning 65 or already on Medicare.",
  "thumbnailUrl": "https://www.aeinsurancefl.com/og-image.jpg",
  "uploadDate": "2025-10-01",
  "duration": "PT45M",
  "publisher": {
    "@id": "https://www.aeinsurancefl.com/#organization"
  },
  "author": {
    "@id": "https://www.aeinsurancefl.com/#steve-germain"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

Note: Update uploadDate to the actual workshop recording date if known. Update duration to the actual workshop length. If the YouTube embed URL is accessible in constants.ts or the watch page component, add embedUrl.

Also add Event schema for the live/on-demand version:
{
  "@type": "Event",
  "name": "Medicare Made Simple — Free Webinar",
  "startDate": "2026-08-01",
  "endDate": "2026-12-31",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.aeinsurancefl.com/watch"
  },
  "organizer": { "@id": "https://www.aeinsurancefl.com/#organization" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}

After editing, run: npx tsc --noEmit
```

---

## PROMPT 15 — Add ProfilePage Schema to /about/steve (P1 — 30 min)

```
In src/app/about/steve/page.tsx, add ProfilePage JSON-LD schema.

Add a <script type="application/ld+json"> server component with this schema:

{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@id": "https://www.aeinsurancefl.com/#steve-germain"
  },
  "name": "Steve Germain — Licensed Medicare Broker & Agency Founder",
  "description": "Profile page for Steve Germain, founder of A&E Insurance Agency and author of Medicare Decoded. Licensed Medicare insurance broker serving South Florida since 2009.",
  "url": "https://www.aeinsurancefl.com/about/steve"
}

Rationale: @type ProfilePage formally designates this page as the authoritative profile for the Steve Germain Person entity (defined in LocalBusinessSchema). This strengthens the cross-entity linking between BlogPosting author attributions and Steve's biographical page.

After editing, run: npx tsc --noEmit
```

---

## PROMPT 16 — Verify and Fix Canonical Tag Rendering (P0 — diagnostic)

```
Run the following curl commands to verify that canonical tags on /blogs/[slug] pages are rendering as absolute URLs (not relative):

curl -s "https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you" | grep -i "canonical"

Expected output: <link rel="canonical" href="https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you"/>

Also check a /medicare-coverage/ page:
curl -s "https://www.aeinsurancefl.com/medicare-coverage/medicare-supplement-plans-medigap" | grep -i "canonical"

Also check a /resources/faq/ page:
curl -s "https://www.aeinsurancefl.com/resources/faq/what-is-medigap" | grep -i "canonical"

If any canonical tag is relative (e.g., href="/blogs/..."), the fix is in the generateMetadata function in each [slug]/page.tsx:

In src/app/blogs/[slug]/page.tsx generateMetadata function, ensure the alternates.canonical value includes SITE_URL:
  alternates: { canonical: `${SITE_URL}/blogs/${params.slug}` }

Do the same check and fix for /medicare-coverage/[slug]/page.tsx and /resources/faq/[slug]/page.tsx.

Import SITE_URL from "@/lib/constants" if not already imported.

After fixing, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 17 — Add HowTo Schema to Enrollment Calculator (P2 — 1 hr)

```
In src/app/tools/medicare-enrollment-calculator/page.tsx, add HowTo JSON-LD schema alongside the existing page metadata.

The HowTo schema should describe "How to Find Your Medicare Initial Enrollment Period":

{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Find Your Medicare Initial Enrollment Period",
  "description": "Use this calculator to find the exact 7-month window when you can first enroll in Medicare without facing late enrollment penalties.",
  "totalTime": "PT2M",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Medicare Enrollment Calculator"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Enter Your Date of Birth",
      "text": "Enter the month and year you turn 65 in the calculator above."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "View Your 7-Month Enrollment Window",
      "text": "The calculator shows your Initial Enrollment Period: 3 months before you turn 65, the month you turn 65, and 3 months after."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Mark Your Enrollment Deadline",
      "text": "Mark the last date of your IEP on your calendar. Enrolling late can result in permanent Part B and Part D penalties."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Schedule a Consultation",
      "text": "Contact a Medicare broker to review your options before your enrollment window closes."
    }
  ]
}

After editing, run: npx tsc --noEmit
```

---

## PROMPT 18 — Update /medicare Service Page Internal Links (P1 — 45 min)

```
Read src/app/medicare/MedicareClient.tsx (the client component for /medicare).

Add the following contextual internal links within the page content:

1. In the section about Medicare Advantage (Part C), add a link to:
   /medicare-coverage/medicare-advantage-plans
   Anchor text: "Learn more about Medicare Advantage plans →"

2. In the section about Medicare Supplement (Medigap), add a link to:
   /medicare-coverage/medicare-supplement-plans-medigap  
   Anchor text: "Explore Medicare Supplement plan options →"

3. In the enrollment section (if present) or after the Parts A/B/C/D overview, add links to:
   /tools/medicare-enrollment-calculator (anchor: "Calculate your enrollment window")
   /tools/part-b-penalty-calculator (anchor: "Check your Part B penalty")

4. At the bottom of the page or in the CTA section, add:
   "Looking for a local Medicare broker? We serve [Medicare Broker Miami](/medicare-broker-miami), [Kendall](/medicare-broker-kendall), [Doral](/medicare-broker-doral), [Coral Gables](/medicare-broker-coral-gables), and all of South Florida."

These links pass PageRank from the /medicare service page (which has nav links from every page) down to pillar guides, tools, and local pages that currently don't receive it.

After editing, run: npx tsc --noEmit
```

---

## PROMPT 19 — Add Blog Post Mid-Article CTA Component (P2 — 2 hr)

```
Create a reusable BlogCTA component and add it to all blog posts.

File to create: src/components/ui/BlogCTA.tsx

The component should render a highlighted consultation offer block, branded in the A&E color palette, that can be inserted between sections in blog post content.

Design specs (Tailwind CSS v4):
- Background: light blue (#EBF5FF or similar, consistent with brand)
- Border-left: 4px solid #1A72C0 (primary blue)
- Padding: 20px 24px
- Content:
  - Heading (h3 style): "Have Questions About Your Medicare Options?"
  - 1-line copy: "Steve Germain helps South Florida families compare plans from 25+ carriers — at no cost to you."
  - Two buttons (side by side on desktop, stacked on mobile):
    - Primary: "Schedule a Free Consultation" → /contact (bg #E8A020)
    - Secondary: "Watch Free Workshop" → /watch (outline style)

This component should be rendered:
1. Inside BlogPostClient.tsx after the blog post content (below the article body, before any existing footer CTA)
2. Ideally also injectable mid-article after the 3rd heading — but if that requires parsing the HTML content, just render it after the full article for now

Additionally, create an AuthorBox.tsx component that renders below BlogCTA:
- Steve's photo (src: /team/steve.jpg, alt: "Steve Germain — Licensed Medicare Broker")
- Name: Steve Germain
- Title: Licensed Medicare Broker | NPN 19921707 | Author of Medicare Decoded
- 2-sentence bio
- CTA: "Schedule a consultation with Steve →" → /contact

Both components improve conversion rate from blog traffic (currently near zero clicks even when pages rank) and strengthen E-E-A-T author attribution.

After creating, import and render both components in src/app/blogs/[slug]/BlogPostClient.tsx.

After editing, run: npx tsc --noEmit && npm run build
```

---

## PROMPT 20 — Write /blogs/best-medicare-advantage-plans-miami-2026 (P1 — long-form content)

```
Add a new blog post to src/lib/blogPosts.ts for the slug "best-medicare-advantage-plans-miami-2026".

This is a high-commercial-intent post targeting Miami-area Medicare beneficiaries researching Advantage plans. GSC shows "best medicare advantage plans in florida" at 85 impressions position 58 — a content gap we can own locally.

Post specifications:
- slug: "best-medicare-advantage-plans-miami-2026"
- title: "Best Medicare Advantage Plans in Miami for 2026"
- date: "July 15, 2026" (adjust to actual publish date)
- meta description: "Comparing the best Medicare Advantage plans in Miami for 2026. See which HMO and PPO plans offer the strongest dental, vision, and drug coverage in Miami-Dade County — from an independent broker."

Content outline (write the full HTML content):
<h2>What Makes a Medicare Advantage Plan "Best" in Miami?</h2>
- Define: best = right combination of network, premium, MOOP, drug formulary, and extra benefits for YOUR situation
- Miami-Dade has 50+ Medicare Advantage plans available — more than most US counties
- An independent broker compares them all; a carrier agent shows you only their plans

<h2>2026 Medicare Advantage Plans Available in Miami-Dade County</h2>
- Important note: this is not a complete plan database (link to Medicare.gov Plan Finder)
- We highlight the major carriers and what distinguishes each in the Miami market
- Carriers active in Miami-Dade (2026): Humana, Aetna, UnitedHealthcare, WellCare, Simply Healthcare, Florida Blue, Devoted Health, Cigna
- Brief characterization of each carrier's Miami-Dade plan profile (do NOT include specific premium amounts — these change; instead characterize by plan type and strengths)

<h2>HMO vs. PPO Medicare Advantage Plans in Miami</h2>
- HMO: requires PCP, referrals for specialists, lower premiums — more common in Miami
- PPO: no referrals, larger network, higher premiums
- Miami-specific context: HMO networks in Miami-Dade are large — Baptist Health and UHealth are in most major networks

<h2>Medicare Advantage vs. Original Medicare + Medigap in Miami</h2>
- When Advantage makes sense (budget-conscious, healthy, staying in Miami-Dade)
- When Medigap makes more sense (frequent travel, chronic conditions, specialist needs)
- Link to /medicare-coverage/medicare-advantage-vs-medigap

<h2>5 Questions to Ask Before Choosing a Miami Medicare Advantage Plan</h2>
1. Is my primary care doctor in-network?
2. Are my prescriptions on the formulary?
3. What is the Maximum Out-of-Pocket (MOOP) limit?
4. Does the plan cover travel to my doctors in another state?
5. What dental and vision benefits are included?

<h2>How to Compare Medicare Advantage Plans in Miami</h2>
- Use Medicare.gov Plan Finder (link: https://www.medicare.gov/plan-compare)
- Or work with an independent broker who can compare all plans in real time
- An independent broker costs you nothing — compensation comes from the carrier you enroll with

Bottom CTA: Schedule a free Miami Medicare consultation to compare Advantage plans side by side.

faqs array:
[
  { question: "What is the best Medicare Advantage plan in Miami for 2026?", answer: "There is no single 'best' plan for everyone. The best Miami Medicare Advantage plan depends on your doctors, prescriptions, preferred hospitals, and budget. An independent broker can compare all available plans in your ZIP code at no cost to you." },
  { question: "How many Medicare Advantage plans are available in Miami-Dade County?", answer: "Miami-Dade County has over 50 Medicare Advantage plans available in 2026 — one of the highest concentrations in the United States. The wide selection makes plan comparison especially important." },
  { question: "Are Medicare Advantage plans free in Miami?", answer: "Many Miami-Dade Medicare Advantage plans have $0 monthly premiums, though you still pay the Medicare Part B premium ($185/month in 2026). Plans with $0 premiums typically have higher copays or cost-sharing than premium-bearing plans." }
]

Internal links to add in content:
- /medicare-coverage/medicare-advantage-plans
- /medicare-coverage/medicare-advantage-vs-medigap
- /tools/medicare-enrollment-calculator
- /medicare-broker-miami
- /contact

After adding to blogPosts.ts, run: npx tsc --noEmit && npm run build
Verify the page appears at: https://www.aeinsurancefl.com/blogs/best-medicare-advantage-plans-miami-2026
```

---

*Document prepared July 2026. Prompts are ordered by the 90-day roadmap sequence. All prompts assume the project root is /Users/stevegermain/Documents/Cowork Playground/medicare-site. Run `npx tsc --noEmit` after every TypeScript edit and `npm run build` before deploying.*
