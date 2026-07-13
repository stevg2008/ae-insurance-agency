# Phase F — Local Landing Pages
## Self-Contained Claude Code Prompt

---

```
You are implementing Phase F of the A&E Insurance Agency SEO plan. This phase creates 4 new local landing pages and improves the 3 existing ones.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Miami FL Medicare broker
- Founder: Steve Germain, NPN 19921707, licensed since 2009, 3000+ clients
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for all conventions

BUSINESS RULES (NON-NEGOTIABLE):
- Local pages must NOT be doorway pages — each must have genuinely distinct, city-specific content
- No keyword-stuffing in H1, meta, or body
- Target audience: English-speaking adults 64+ considering Medicare in South Florida
- Every page must include: city-specific stats (population 65+, county), local context, and a distinct hook
- Do NOT use the same intro paragraph on multiple pages — each city gets a unique angle
- Bilingual service note (Spanish/Creole/Portuguese speakers served) belongs in BODY TEXT only — not in H1 or meta title
- Run npx tsc --noEmit after every TypeScript change

REFERENCE FILES TO READ FIRST:
1. CLAUDE.md
2. src/app/medicare-broker-miami/page.tsx (primary template — follow this exact structure)
3. src/app/medicare-broker-kendall/page.tsx (second reference)
4. src/app/medicare-broker-south-florida/page.tsx (third reference)
5. src/components/seo/LocalBusinessSchema.tsx (for the @id references used in breadcrumb/schema)
6. src/lib/constants.ts
7. src/app/sitemap.ts
8. src/components/layout/Footer.tsx

EXISTING LOCAL PAGES (F7–F9 tasks improve these):
- /medicare-broker-miami — needs improvements (see F7)
- /medicare-broker-kendall — needs improvements (see F8)
- /medicare-broker-south-florida — needs improvements (see F9)

NEW PAGES TO CREATE (F1–F4):
- /medicare-broker-doral
- /medicare-broker-coral-gables
- /medicare-broker-hialeah
- /medicare-broker-homestead

CITY DATA (verified — cite sources if using population figures):
- Doral: Fast-growing Miami suburb; large Venezuelan, Colombian, Brazilian expat community; primarily working-age but growing 65+ population as first wave of Doral residents approaches retirement
- Coral Gables: Affluent, established suburb; high concentration of retirees with significant assets; many long-time homeowners planning estate preservation
- Hialeah: Second-largest city in Miami-Dade; predominantly Cuban-American; very large 65+ population; highest concentration of Medicare beneficiaries in Miami-Dade outside Miami proper; many are long-established community members
- Homestead: South Miami-Dade; agricultural community; significant retiree population; lower median income than North Miami-Dade; Spanish is the primary language for many residents

---

TASK F1 — Create /medicare-broker-doral (P1 — 3 hours)

File: src/app/medicare-broker-doral/page.tsx

Follow the exact structure of medicare-broker-miami/page.tsx:
- Page is a pure server component (no separate *Client.tsx)
- Export metadata object with canonical
- Return JSX with JSON-LD schema scripts + page content

METADATA:
title: "Medicare Broker in Doral FL | A&E Insurance Agency"
description: "Independent Medicare broker serving Doral, FL. Steve Germain compares Medicare Advantage, Medigap, and Part D plans from 25+ carriers — at no cost to you. Atendemos en español."
canonical: ${SITE_URL}/medicare-broker-doral

H1: Medicare Broker in Doral, FL

UNIQUE ANGLE FOR DORAL:
Doral is one of the fastest-growing cities in South Florida, and with that growth comes a wave of new Medicare-eligible residents approaching 65. Many Doral residents are transplants from Venezuela, Colombia, and Brazil who are navigating Medicare for the first time without the benefit of years of U.S. insurance history. Steve Germain has helped hundreds of South American-born South Floridians understand their Medicare options — often families where one spouse is a U.S. citizen and the other is navigating eligibility questions.

KEY CONTENT POINTS:
01: Medicare in Doral — What You Need to Know
"The Bottom Line": Doral residents have access to 40+ Medicare Advantage plans from Miami-Dade's robust carrier market — but choosing the right one requires comparing network, formulary, and out-of-pocket costs.

02: Why Doral Families Work With an Independent Broker
"The Bottom Line": An independent broker compares plans from multiple carriers — not just one company's offerings.
Content: In a city where many residents are first-generation Medicare beneficiaries, an independent broker explains the difference between Original Medicare + Medigap vs. Medicare Advantage — a decision that affects your medical costs for life.

03: Bilingual Medicare Assistance in Doral
"The Bottom Line": Steve's office serves Spanish, Portuguese, and English-speaking clients throughout Doral.
Content: 2–3 sentences about multilingual service. Note: This is body text, NOT the H1 or meta. Reference that Spanish-speaking staff can assist.

04: Medicare Plans Available in Doral, Miami-Dade County
Content: Doral is in Miami-Dade County, which has one of the highest concentrations of Medicare Advantage plans in the country. Doral residents can choose from HMO, PPO, PFFS, and SNP plan types. Note: Do NOT list specific carriers or premium amounts — these change annually.

FAQ SECTION + FAQPage schema:
Q1: Can I use a Medicare broker in Doral if I'm not a U.S. citizen?
A1: Medicare eligibility generally requires U.S. citizenship or lawful permanent resident status for at least 5 years. If you're uncertain about your eligibility, A&E Insurance Agency can help you understand your situation and options.

Q2: Is there a fee for using a Medicare broker in Doral?
A2: No. Independent Medicare brokers are compensated by the insurance carriers, not by you. There is no charge to compare plans or enroll.

Q3: What Medicare plans are available in Doral, FL?
A3: Doral is in Miami-Dade County, which has one of the largest Medicare plan markets in the country. Residents have access to Medicare Advantage (HMO and PPO), Medicare Supplement (Medigap), and standalone Part D prescription drug plans.

Q4: How do I know if my doctor accepts Medicare in Doral?
A4: If you have Original Medicare (Part A + Part B), any provider that accepts Medicare assignment in the U.S. can treat you. If you choose a Medicare Advantage HMO, you'll need to check the plan's specific network — your broker can help confirm whether your doctors are in-network.

SCHEMA (follow miami page pattern):
- LocalBusiness referencing @id: "https://www.aeinsurancefl.com/#organization"
- BreadcrumbList: Home → Medicare Broker Doral
- FAQPage from the faqs array

BOTTOM CTA:
"Schedule a Free Medicare Consultation in Doral"
Button → /contact

ADD TO SITEMAP: priority 0.9, changeFrequency: "monthly"

After: npx tsc --noEmit && npm run build

---

TASK F2 — Create /medicare-broker-coral-gables (P1 — 3 hours)

File: src/app/medicare-broker-coral-gables/page.tsx

METADATA:
title: "Medicare Broker in Coral Gables FL | A&E Insurance Agency"
description: "Independent Medicare broker serving Coral Gables, FL. Helping affluent retirees compare Medicare Advantage vs. Medigap plans and protect their retirement assets."
canonical: ${SITE_URL}/medicare-broker-coral-gables

H1: Medicare Broker in Coral Gables, FL

UNIQUE ANGLE FOR CORAL GABLES:
Coral Gables is home to one of South Florida's most established and affluent retirement populations. Many Coral Gables residents are executives, business owners, and professionals who have planned carefully for retirement — and for them, the choice between Medicare Advantage and Medigap is particularly consequential. Coral Gables retirees often travel internationally, seek specialist care at top institutions like Baptist Health and University of Miami Health System, and want nationwide coverage without network restrictions.

KEY CONTENT POINTS:
01: Why Coral Gables Retirees Choose Medigap Over Medicare Advantage
"The Bottom Line": For high-asset retirees who value unrestricted access to specialists and travel coverage, Medigap Plan G is often the smarter long-term choice.
Content: Unlike Medicare Advantage, which limits you to a network, Original Medicare + Medigap works with any Medicare-accepting doctor nationwide — critical for Coral Gables residents who split time between South Florida and other states, or travel internationally.

02: Medicare and Estate Planning for Coral Gables Families
"The Bottom Line": Medicare coverage decisions affect your estate — both through out-of-pocket costs and through Medicaid planning considerations for long-term care.
Content: A brief note that an independent broker focuses on coverage, while a CPA or estate attorney addresses tax and estate matters. Steve can connect clients with appropriate referrals in Coral Gables. (Do NOT offer tax or legal advice.)

03: Medicare Plan Options in Coral Gables
Content: Coral Gables is in Miami-Dade County. Residents have access to the full range of Medicare options.

FAQ SECTION + FAQPage schema (3–4 pairs)

BOTTOM CTA: "Schedule a Consultation in Coral Gables" → /contact

SITEMAP: priority 0.9

After: npx tsc --noEmit && npm run build

---

TASK F3 — Create /medicare-broker-hialeah (P1 — 3 hours)

File: src/app/medicare-broker-hialeah/page.tsx

METADATA:
title: "Medicare Broker in Hialeah FL | A&E Insurance Agency"
description: "Independent Medicare broker serving Hialeah, FL. Compare Medicare plans from 25+ carriers at no cost. Steve Germain serves Hialeah's large Cuban-American senior community. Se habla español."
canonical: ${SITE_URL}/medicare-broker-hialeah

H1: Medicare Broker in Hialeah, FL

IMPORTANT: Do NOT use a bilingual H1 such as "Medicare Broker in Hialeah / Asesor de Medicare en Hialeah." This creates language classification confusion. Use English H1 and reference Spanish service in the body.

UNIQUE ANGLE FOR HIALEAH:
Hialeah has one of the highest concentrations of Cuban-American Medicare beneficiaries in the United States. Many Hialeah residents have been part of this community for decades — they know their doctors, know their neighborhoods, and want a Medicare broker who understands the importance of keeping long-standing doctor relationships intact when choosing a Medicare plan. Steve Germain has worked in the Hialeah Medicare market for over 15 years.

KEY CONTENT POINTS:
01: Keeping Your Hialeah Doctor on Medicare
"The Bottom Line": In Hialeah, where doctor-patient relationships often span decades, choosing a plan that keeps your doctor in-network is critical — and that requires careful plan research.
Content: The distinction between HMO (must use network) and Original Medicare + Medigap (any Medicare-accepting provider). Many Hialeah Medicare beneficiaries initially choose a zero-premium Advantage HMO, then discover their doctor is not in-network.

02: Spanish-Speaking Medicare Assistance in Hialeah
"The Bottom Line": Steve's office provides Medicare plan comparisons in Spanish for Hialeah's large Spanish-speaking senior community.
Content (2–3 sentences): Acknowledge that for many Hialeah seniors, Spanish is the primary language of financial decision-making. The agency provides Spanish-language consultation.

03: Medicare Advantage Plans in Hialeah
Content: Hialeah is in Miami-Dade County's Medicare market — one of the most competitive in the nation, with 40+ plans available from multiple carriers. This is an advantage for Hialeah residents: more competition often means better benefits.

04: Dual-Eligible Medicare and Medicaid in Hialeah
"The Bottom Line": Hialeah has a significant population of seniors who qualify for both Medicare and Medicaid (dual-eligible). These beneficiaries may qualify for Dual SNPs (Special Needs Plans) with additional benefits.
Content (2–3 sentences): Explain that dual-eligible beneficiaries have specific plan options designed for them. An independent broker can help identify which plans a dual-eligible beneficiary qualifies for.

FAQ SECTION + FAQPage schema (4 pairs including bilingual access and dual-eligible):
Q1: Do you offer Medicare consultations in Spanish in Hialeah?
A1: Yes. A&E Insurance Agency provides Medicare plan comparisons and enrollment assistance in Spanish for Hialeah residents.

Q2: Can I keep my Hialeah doctor if I switch to Medicare Advantage?
A2: It depends on the plan. Medicare Advantage HMO plans restrict you to the plan's network. Before enrolling, your broker should verify that your current doctors are in the plan's network for the upcoming plan year. With Original Medicare + Medigap, you can see any Medicare-accepting doctor nationwide.

Q3: What is a Dual SNP (D-SNP) and who qualifies?
A3: A Dual Eligible Special Needs Plan (D-SNP) is a type of Medicare Advantage plan designed for people who qualify for both Medicare and Medicaid. These plans often include additional benefits such as dental, vision, transportation, and supplemental food. A broker can check your eligibility.

Q4: Is there a fee to work with a Medicare broker in Hialeah?
A4: No. Independent Medicare brokers are paid by insurance carriers. There is no cost to you to compare plans or enroll.

BOTTOM CTA: "Schedule a Free Medicare Consultation in Hialeah" → /contact

SITEMAP: priority 0.9

After: npx tsc --noEmit && npm run build

---

TASK F4 — Create /medicare-broker-homestead (P2 — 2.5 hours)

File: src/app/medicare-broker-homestead/page.tsx

METADATA:
title: "Medicare Broker in Homestead FL | A&E Insurance Agency"
description: "Independent Medicare broker serving Homestead and South Miami-Dade County. Compare Medicare plans at no cost. Steve Germain helps Homestead seniors find the right coverage."
canonical: ${SITE_URL}/medicare-broker-homestead

H1: Medicare Broker in Homestead, FL

UNIQUE ANGLE FOR HOMESTEAD:
Homestead and South Miami-Dade County represent a different Medicare market than North Miami-Dade — a community with a strong agricultural heritage, a significant agricultural worker and small-business owner retiree population, and a growing population of seniors who may be navigating Medicare for the first time without family members who can guide them. Many Homestead Medicare beneficiaries also qualify for Extra Help with Part D costs due to lower income levels.

KEY CONTENT POINTS:
01: Medicare Extra Help (Low Income Subsidy) for Homestead Seniors
"The Bottom Line": Homestead seniors with limited income and assets may qualify for Extra Help — a federal program that reduces Part D drug costs to near-zero.
Content (3–4 sentences): Explain what Extra Help is (the Low Income Subsidy / LIS program), that it's administered by Social Security, and that an independent broker can help identify whether you qualify and which Part D plans optimize your benefits under Extra Help.

02: Medicare Plans Available in South Miami-Dade
Content: Homestead is in Miami-Dade County. The same Medicare Advantage, Medigap, and Part D plans available in greater Miami are available in Homestead. However, plan networks may differ — some plans with Miami-centric networks may have fewer participating providers in Homestead. An independent broker familiar with the Homestead market can identify plans with strong local provider networks.

03: Spanish-Speaking Medicare Assistance in Homestead
Content (2 sentences): For Homestead seniors who prefer Spanish, A&E Insurance provides Medicare consultations in Spanish.

FAQ SECTION + FAQPage schema (3 pairs):
Q1: What is Medicare Extra Help and do I qualify in Homestead?
A1: Extra Help (also called the Low Income Subsidy) is a federal program that reduces Medicare Part D drug costs for people with limited income and assets. In 2026, individuals with income below approximately $23,000 (single) may qualify. Apply through Social Security at ssa.gov or ask your Medicare broker for assistance.

Q2: Are Medicare Advantage plans available in Homestead, FL?
A2: Yes. Homestead is in Miami-Dade County, which has one of the largest Medicare Advantage markets in the country. However, not all plans have strong provider networks in South Miami-Dade, so it's important to verify network coverage in the Homestead area before enrolling.

Q3: Is there a Medicare broker near Homestead with no fees?
A3: Yes. A&E Insurance Agency serves Homestead and South Miami-Dade County. Independent broker services are free to you — brokers are paid by the insurance carriers.

BOTTOM CTA: "Schedule a Free Medicare Consultation — Serving Homestead & South Miami-Dade" → /contact

SITEMAP: priority 0.8

After: npx tsc --noEmit && npm run build

---

TASK F5 — Update Footer Locations Column (P1 — 20 min)

File: src/components/layout/Footer.tsx

Read the footer structure. Find the locations-related column (added in Phase A as Quick Links or as a dedicated column).

Add the 4 new cities to whatever location section exists in the footer:
  { label: "Medicare Broker Doral", href: "/medicare-broker-doral" },
  { label: "Medicare Broker Coral Gables", href: "/medicare-broker-coral-gables" },
  { label: "Medicare Broker Hialeah", href: "/medicare-broker-hialeah" },
  { label: "Medicare Broker Homestead", href: "/medicare-broker-homestead" },

Goal: Every new local page must be reachable from any page via the footer. This is a crawlability requirement.

After: npx tsc --noEmit && npm run build

---

TASK F6 — Header Navigation: Add "Service Areas" Dropdown (P2 — 1 hour)

File: src/components/layout/Header.tsx (or wherever navigation is defined)

Read the current header structure first.

The goal is to surface local pages in the navigation. The cleanest approach depends on the current nav structure:
- If the nav has dropdown menus: Add a "Service Areas" or "Locations" dropdown with the 7 local pages
- If the nav is a flat link list: Add a "Locations" link that points to /medicare-broker-south-florida (the hub page)

DO NOT restructure the entire navigation. Make the minimal change that surfaces location links in the header without cluttering the primary nav. If adding a full dropdown would be complex, add a single "Service Areas" text link to the nav that points to /medicare-broker-south-florida.

After: npx tsc --noEmit && npm run build

---

TASK F7 — Improve /medicare-broker-miami Page (P1 — 1 hour)

File: src/app/medicare-broker-miami/page.tsx

Read the existing content. The improvements are ADDITIVE — do not rewrite existing content.

ADD:
1. A local statistics section: "Miami, FL Medicare by the Numbers" with:
   - Miami-Dade County has one of the highest per-capita Medicare enrollment rates in the US
   - Miami-Dade has 40+ Medicare Advantage plans — more choices than most U.S. counties
   - Steve Germain has served the Miami Medicare community since 2009 (17 years)
   Note: Do not include statistics you cannot source. General statements are acceptable.

2. Internal links within content body:
   - Link to /medicare-broker-south-florida: "We serve all of South Florida, including [Coral Gables](/medicare-broker-coral-gables), [Doral](/medicare-broker-doral), [Hialeah](/medicare-broker-hialeah), and [Kendall](/medicare-broker-kendall)."
   - Link to /tools/medicare-enrollment-calculator: "Use our free [Medicare enrollment calculator](/tools/medicare-enrollment-calculator) to find your enrollment window."

3. If a FAQ section exists: Add 1–2 additional FAQ pairs and update FAQPage schema.

After: npx tsc --noEmit

---

TASK F8 — Improve /medicare-broker-kendall Page (P1 — 30 min)

File: src/app/medicare-broker-kendall/page.tsx

ADDITIVE improvements only:
1. Add internal links to new local pages: mention that A&E also serves Coral Gables, Homestead, and South Miami-Dade
2. Add a cross-link to /retirement/retirement-planning-tools — Kendall is a family suburb with many people approaching retirement
3. If the page lacks FAQ section: add a 3-pair FAQ section with FAQPage schema

After: npx tsc --noEmit

---

TASK F9 — Improve /medicare-broker-south-florida Page (P1 — 30 min)

This is the hub page. Make it function as a proper hub by listing ALL service areas.

ADDITIVE improvements:
1. Add a "Cities We Serve" section listing all 7 local pages with links:
   - Miami → /medicare-broker-miami
   - Kendall → /medicare-broker-kendall
   - Doral → /medicare-broker-doral
   - Coral Gables → /medicare-broker-coral-gables
   - Hialeah → /medicare-broker-hialeah
   - Homestead → /medicare-broker-homestead
   
2. If this page lists counties: Broward County pages are future Phase H scope — reference "greater Fort Lauderdale" only if content already mentions it

After: npx tsc --noEmit && npm run build

---

VERIFICATION STEPS:
1. npx tsc --noEmit (0 errors)
2. npm run build
3. Visit each new local page at localhost:3000 — confirm it loads (not redirect)
4. Check that each page has: unique H1, unique intro paragraph, LocalBusiness schema, BreadcrumbList schema, FAQPage schema, bottom CTA
5. Footer: confirm all 7 local pages appear in footer from the homepage
6. Sitemap: /sitemap.xml includes all new pages at priority 0.8–0.9
7. Google Rich Results Test (post-deploy): test one local page for FAQPage eligibility

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] Build passes
- [ ] /medicare-broker-doral loads with unique content
- [ ] /medicare-broker-coral-gables loads with unique content
- [ ] /medicare-broker-hialeah loads with unique content (English H1)
- [ ] /medicare-broker-homestead loads with unique content
- [ ] No two pages share the same intro paragraph or "The Bottom Line" copy
- [ ] Footer has links to all 7 local pages
- [ ] All 4 new pages in sitemap.xml
- [ ] Existing pages not broken

COMMIT MESSAGE:
feat(local-seo/phase-f): 4 new local landing pages + location hub improvements

- Create /medicare-broker-doral (Doral, Venezuelan/Colombian community angle)
- Create /medicare-broker-coral-gables (affluent retiree, Medigap focus)
- Create /medicare-broker-hialeah (Cuban-American community, dual-eligible section)
- Create /medicare-broker-homestead (Extra Help / LIS focus)
- Update Footer with links to all 7 local pages
- Add "Locations" nav link to header
- Improve Miami, Kendall, and South Florida hub pages with internal links

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

DO NOT:
- Use keyword-stuffed anchor text on internal links
- Create thin pages under 800 words of unique content
- Copy intro paragraphs between cities — each must be unique
- Use bilingual H1s (e.g., "Medicare Broker / Asesor de Medicare")
- Add specific carrier names or premium amounts
- Touch blogPosts.ts, next.config.ts, or any retirement/life-insurance/critical-illness pages
```
