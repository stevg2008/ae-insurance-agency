# Phase C — Retirement Subpages
## Self-Contained Claude Code Prompt

Copy the entire block below and paste it into a new Claude Code session opened in the medicare-site project directory.

---

```
You are implementing Phase C of the A&E Insurance Agency SEO plan. This is the Retirement Subpages phase.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Medicare + retirement insurance broker in Miami FL
- Founder: Steve Germain, NPN 19921707, founder since 2009, author of "Medicare Decoded"
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for all conventions

PREREQUISITE — THIS PHASE REQUIRES PHASE B TO BE COMPLETE:
Before creating any new pages, confirm that the /retirement/:slug+ catch-all redirect has been REMOVED from next.config.ts. If it still exists, creating pages at /retirement/[slug] will be silently redirected to /retirement and the pages will be invisible.

To verify Phase B is done:
- Read next.config.ts and confirm the line { source: "/retirement/:slug+", destination: "/retirement", permanent: true } has been REMOVED
- If it's still there, STOP and complete Phase B first

BUSINESS RULES (NON-NEGOTIABLE):
- Every dollar figure must trace to CMS.gov, SSA.gov, or Medicare.gov
- 2026 Part B premium: $185.00/month (verify against ANNUAL_UPDATE.md)
- All content must pass: "Would a 68-year-old Medicare beneficiary find this genuinely useful?"
- No keyword stuffing, no thin content
- No doorway page patterns — each page must have genuine, original content
- Follow the numbered section format (01, 02, 03...) and "The Bottom Line" callout pattern used by existing service pages
- Run npx tsc --noEmit after every TypeScript change

WHY THIS PHASE IS CRITICAL:
GSC data shows the following legacy Webflow URLs with proven search demand:
- /retirement/retirement-planning-tools: 3,615 impressions at position 8 (LARGEST single traffic recovery opportunity on the site)
- /retirement/social-security-and-medicare-coordination: 887 impressions at position 9
- /retirement/retirement-income-planning: 150 impressions at position 9
- /retirement/long-term-care-and-recovery-planning: 79 impressions at position 58

These URLs are being 301-redirected to the generic /retirement service page, losing all keyword context and click opportunity. Creating real pages at these URLs will recover this traffic.

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. ANNUAL_UPDATE.md (for verified 2026 Medicare figures)
3. src/app/retirement/page.tsx (understand the parent service page structure)
4. src/app/medicare-broker-miami/page.tsx (example of a local page with schema pattern)
5. next.config.ts (confirm Phase B catch-all removal)
6. src/app/sitemap.ts (to understand how to add new pages)
7. src/lib/constants.ts (for SITE_URL and other constants)

---

TASK C1 — Create /retirement/retirement-planning-tools (P0 — 5 hours)

This is the highest-priority content creation task in the entire 90-day plan.

File to create: src/app/retirement/retirement-planning-tools/page.tsx

This is a pure server component (no separate *Client.tsx needed, following the local landing page pattern — see medicare-broker-miami/page.tsx for reference).

METADATA:
```ts
export const metadata: Metadata = {
  title: "Retirement Planning Tools | Medicare Cost Calculators | A&E Insurance Agency",
  description: "Free retirement planning tools from South Florida's trusted Medicare broker. Calculate your Medicare enrollment window, IRMAA surcharge, and late enrollment penalties. Plan your retirement with confidence.",
  alternates: { canonical: `${SITE_URL}/retirement/retirement-planning-tools` },
  openGraph: {
    title: "Retirement Planning Tools | Medicare Cost Calculators",
    description: "Free calculators for Medicare enrollment, IRMAA surcharges, and penalty estimates. Plan your South Florida retirement with the right numbers.",
    url: `${SITE_URL}/retirement/retirement-planning-tools`,
  },
};
```

SCHEMA (add as server-side JSON-LD):
- HowTo schema: "How to Calculate Your Retirement Readiness Using These Medicare Tools"
- FAQPage schema (3–4 questions from the FAQ section below)
- Article schema

PAGE CONTENT (H1 through bottom CTA):

H1: Retirement Planning Tools

Intro paragraph (2–3 sentences): Retirement planning starts with knowing your numbers. These free tools help South Florida families calculate Medicare enrollment windows, estimate IRMAA surcharges based on income, and check potential late enrollment penalties — the Medicare costs that directly affect your retirement budget.

[Section using numbered format matching existing service pages]

01. Medicare Enrollment Calculator
"The Bottom Line": Knowing your enrollment window prevents permanent, lifetime Part B and Part D penalties.
Content: Brief explanation (2–3 sentences) of the Initial Enrollment Period and why timing matters.
Link: [Calculate Your Medicare Enrollment Window →] pointing to /tools/medicare-enrollment-calculator

02. IRMAA Medicare Surcharge Calculator
"The Bottom Line": High earners in South Florida often face IRMAA surcharges — knowing your surcharge in advance helps you plan.
Content: Brief explanation of IRMAA (Income-Related Monthly Adjustment Amount) — it applies to Part B and Part D for those with income above $106,000 (single) or $212,000 (married filing jointly) in 2026. These are 2026 figures — verify against ANNUAL_UPDATE.md.
Link: [Calculate Your IRMAA Surcharge →] pointing to /tools/irmaa-calculator

03. Part B Late Enrollment Penalty Calculator
"The Bottom Line": Each 12-month delay past your enrollment window adds a permanent 10% surcharge to your Part B premium.
Content: Brief explanation of the Part B penalty — permanent, for life, added to your monthly premium.
Link: [Check Your Part B Penalty →] pointing to /tools/part-b-penalty-calculator

04. Part D Late Enrollment Penalty Calculator
"The Bottom Line": Delaying Part D coverage past 63 continuous days without creditable coverage triggers a penalty.
Content: Brief explanation — 1% of the national base beneficiary premium per month delayed.
Link: [Check Your Part D Penalty →] pointing to /tools/part-d-penalty-calculator

05. Social Security and Medicare Coordination
"The Bottom Line": Your Social Security income determines when you're automatically enrolled in Medicare — and how much IRMAA you pay.
Content: 2–3 sentences on how SS and Medicare enrollment timelines intersect.
Link: [Learn How Social Security and Medicare Work Together →] pointing to /retirement/social-security-and-medicare-coordination

FAQ SECTION (renders as FAQPage schema via static JSON-LD, NOT via the faqs array pattern used in blogPosts.ts):
Add as a visible Q&A section with a JSON-LD FAQPage script:

Q1: How much do I need to save for retirement?
A1: There is no universal answer — it depends on your retirement income sources (Social Security, pension, savings), your expected Medicare costs, and your lifestyle. The calculators above help you estimate your Medicare expenses, which are often the largest variable in retirement budgeting.

Q2: What Medicare costs should I include in my retirement plan?
A2: Include your Part B premium ($185/month in 2026 for most people), any IRMAA surcharge if your income is above threshold, your chosen plan's out-of-pocket costs (copays, deductibles), and either a Medigap premium or Medicare Advantage plan costs.

Q3: When should I start planning for Medicare costs in retirement?
A3: Ideally 2–3 years before you turn 65. Your Initial Enrollment Period opens 3 months before your 65th birthday. The enrollment calculator above shows your specific dates.

Q4: Can a Medicare broker help with retirement planning?
A4: Yes. An independent Medicare broker compares plan costs across 25+ carriers and can show you the actual out-of-pocket difference between Medicare Advantage and Medigap plans for your specific situation — which directly impacts your retirement budget.

BOTTOM CTA SECTION (dark navy, matching existing service pages):
"Ready to Plan Your Retirement With the Right Medicare Strategy?"
"Steve Germain at A&E Insurance Agency helps South Florida families calculate their real Medicare costs and choose the plan that fits their retirement budget — at no charge."
Button: "Schedule a Free Retirement Planning Consultation" → /contact

ADD TO SITEMAP:
In src/app/sitemap.ts, add to the staticPages array:
{ url: "/retirement/retirement-planning-tools", priority: 0.8, changeFrequency: "monthly" }

ADD INTERNAL LINKS FROM:
In src/app/retirement/RetirementClient.tsx (or however the /retirement page renders its content), add a link to this new page. Find the section about retirement planning and add:
"Explore our [retirement planning tools →](/retirement/retirement-planning-tools) including Medicare cost calculators."

After creating: npx tsc --noEmit && npm run build

---

TASK C2 — Create /retirement/social-security-and-medicare-coordination (P1 — 4 hours)

File to create: src/app/retirement/social-security-and-medicare-coordination/page.tsx

METADATA:
```ts
title: "Social Security and Medicare: How They Work Together | A&E Insurance Agency"
description: "When does Social Security automatically enroll you in Medicare? How does your SS income affect your Part B premium? Complete guide to Social Security and Medicare coordination from South Florida's trusted Medicare broker."
alternates: { canonical: `${SITE_URL}/retirement/social-security-and-medicare-coordination` }
```

PAGE CONTENT:

H1: Social Security and Medicare: How They Work Together

Intro: Social Security and Medicare are two of the most important programs in retirement — but their enrollment timelines, income interactions, and coverage rules are easily confused. This guide explains how they connect and what decisions you need to make.

SECTIONS (numbered format):

01. When Does Social Security Automatically Enroll You in Medicare?
"The Bottom Line": If you're already receiving Social Security benefits, you are automatically enrolled in Medicare Part A and Part B three months before your 65th birthday.
Content (3–5 sentences):
- If you're already receiving SS retirement or disability benefits when you turn 65 → automatic enrollment
- You receive your Medicare card by mail — you don't need to apply
- You can decline Part B if you have other creditable coverage (employer plan)
- If you're NOT yet receiving SS at 65 → you must actively enroll during your Initial Enrollment Period

02. How Your Part B Premium Is Deducted from Social Security
"The Bottom Line": In 2026, the standard Part B premium is $185.00/month — automatically deducted from your monthly Social Security check.
Content (3–5 sentences):
- Standard Part B premium for 2026: $185.00/month (source: CMS.gov)
- If your income is above $106,000 (single) / $212,000 (married filing jointly) in 2024 (used for 2026 IRMAA), you pay an IRMAA surcharge on top
- Link: [Calculate your IRMAA surcharge →] /tools/irmaa-calculator
- If you haven't started SS benefits yet, Medicare bills you quarterly instead

03. Should I Take Social Security at 62 or Wait Until I Enroll in Medicare at 65?
"The Bottom Line": Delaying Social Security until 65 doesn't affect your Medicare eligibility — but you may have a coverage gap.
Content:
- Medicare eligibility is based on age (65), not Social Security status
- If you take SS at 62 and your employer coverage ends before 65, you'll need bridge coverage (COBRA, Marketplace plan)
- Delaying SS until 70 maximizes your monthly benefit — but doesn't delay Medicare
- Important: If you delay SS past 65, you must still enroll in Medicare Part A during your IEP to avoid a gap

04. IRMAA: How Your SS Income Affects Your Medicare Premium
"The Bottom Line": High Social Security income (combined with other income) can trigger IRMAA surcharges — adding hundreds per month to your Part B and Part D costs.
Content:
- IRMAA is based on your Modified Adjusted Gross Income (MAGI) from 2 years ago
- 2026 surcharges apply to 2024 MAGI
- Verify specific bracket amounts against ANNUAL_UPDATE.md
- Link to /tools/irmaa-calculator

05. Spousal Benefits: Medicare and Social Security for Non-Working Spouses
"The Bottom Line": A spouse may qualify for Medicare based on their partner's work record — even if they never worked.
Content:
- You can qualify for premium-free Part A with a spouse's 40 work credits
- Survivor benefits after death of spouse
- Medicare enrollment applies individually — each person enrolls separately

FAQ SECTION with JSON-LD FAQPage schema:

Q1: Does Social Security automatically enroll me in Medicare at 65?
A1: Only if you're already receiving Social Security benefits before turning 65. If you have not yet claimed Social Security, you must actively enroll in Medicare during your Initial Enrollment Period — the 7-month window around your 65th birthday.

Q2: How much is the Medicare Part B premium in 2026?
A2: The standard 2026 Part B premium is $185.00 per month for most Medicare beneficiaries. Higher-income individuals pay an additional IRMAA surcharge on top of this amount.

Q3: Can I delay Medicare if I'm still working at 65?
A3: You can delay Part B (and avoid the premium) if you have creditable employer coverage through active employment. However, once your employer coverage ends, you have a Special Enrollment Period to sign up without penalty.

Q4: How does my Social Security income affect my Medicare costs?
A4: Your Modified Adjusted Gross Income (MAGI) from two years prior determines whether you pay the standard Part B premium or an IRMAA surcharge. If your 2024 income exceeds $106,000 (single) or $212,000 (married), you will owe more than the standard $185/month.

BOTTOM CTA:
"Have Questions About Social Security and Medicare Timing?"
Button: "Schedule a Free Consultation with Steve Germain" → /contact

ADD TO SITEMAP: priority 0.8, changeFrequency: "monthly"

ADD INTERNAL LINKS FROM:
- /retirement/retirement-planning-tools → this page (Section 05 link already planned)
- /retirement service page → add link to this page
- /tools/irmaa-calculator → add contextual "learn how SS income affects your Medicare premium" link to this page

After creating: npx tsc --noEmit && npm run build

---

TASK C3 — Create /retirement/retirement-income-planning (P1 — 3 hours)

File to create: src/app/retirement/retirement-income-planning/page.tsx

H1: Retirement Income Planning for South Florida Families

Brief description: This page covers annuities, income strategies, and tax-efficient withdrawal planning for South Florida retirees. Content should be 1,500–2,000 words covering:
- What is retirement income planning
- Common retirement income sources (SS, pension, 401k/IRA, annuities, rental income)
- Sequencing withdrawals for tax efficiency
- How Medicare costs fit into income planning (Part B, IRMAA)
- Annuities and guaranteed income explained
- When to talk to a retirement income specialist

Include 3–4 FAQ pairs as a visible FAQ section + FAQPage schema.
Include a bottom CTA section linking to /contact.
Add to sitemap with priority 0.7.

---

TASK C4 — Create /retirement/long-term-care-and-recovery-planning (P2 — 3 hours)

File to create: src/app/retirement/long-term-care-and-recovery-planning/page.tsx

H1: Long-Term Care and Recovery Planning: What Medicare Does and Doesn't Cover

Content focus (1,500–2,000 words):
- What Medicare covers for skilled nursing and rehab (Part A SNF benefit — limited)
- What Medicare does NOT cover (custodial care, most assisted living, most home care)
- Long-term care insurance explained
- The cost of long-term care in South Florida (use general ranges, not specific figures without CMS source)
- How critical illness insurance can supplement LTC coverage
- Planning considerations for Miami/South Florida retirees

Important: ALL Medicare benefit claims must cite CMS/Medicare.gov. Do not overstate Medicare's LTC coverage.

Include FAQPage schema. Add to sitemap with priority 0.6.

---

TASK C5 — Update /retirement Service Page with Links to All New Subpages (P1 — 30 min)

File to edit: Find the client component for /retirement (likely src/app/retirement/RetirementClient.tsx or similar)

Add contextual internal links to all new subpages. Find appropriate sections of the page content and add:

1. In whatever section discusses retirement planning and tools:
   [Retirement planning tools and Medicare calculators →](/retirement/retirement-planning-tools)

2. In whatever section discusses Social Security or Medicare coordination:
   [How Social Security and Medicare work together →](/retirement/social-security-and-medicare-coordination)

3. If there's a section on income planning:
   [Retirement income planning →](/retirement/retirement-income-planning)

4. If there's a section on long-term care:
   [Long-term care and recovery planning →](/retirement/long-term-care-and-recovery-planning)

Do NOT add these links in a way that looks forced or keyword-stuffed. Find natural places in existing sentences where the links add value. If a section doesn't exist for the topic, add a brief sentence and link at the end of the relevant paragraph.

After: npx tsc --noEmit && npm run build

---

VERIFICATION STEPS:

1. npx tsc --noEmit (0 errors)
2. npm run build (must pass; validates all static pages including new ones)
3. Spot-check: Visit http://localhost:3000/retirement/retirement-planning-tools — page must load (not redirect)
4. Spot-check: Visit http://localhost:3000/retirement/social-security-and-medicare-coordination — page must load
5. Verify sitemap includes new pages: http://localhost:3000/sitemap.xml
6. Verify /retirement service page has links to new subpages
7. Steve (manual): Submit new page URLs to GSC URL Inspection

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] npm run build passes
- [ ] /retirement/retirement-planning-tools loads (not redirect)
- [ ] /retirement/social-security-and-medicare-coordination loads
- [ ] Both pages appear in sitemap.xml
- [ ] /retirement service page links to new subpages
- [ ] FAQPage schema present on both pages (check page source)
- [ ] All dollar figures match ANNUAL_UPDATE.md values
- [ ] No existing routes broken

COMMIT MESSAGE:
feat(content/phase-c): retirement subpages recover 4,502 GSC impressions

- Create /retirement/retirement-planning-tools (3,615 impressions recovered)
- Create /retirement/social-security-and-medicare-coordination (887 impressions)
- Create /retirement/retirement-income-planning (150 impressions)
- Create /retirement/long-term-care-and-recovery-planning (79 impressions)
- Update /retirement service page with internal links to all subpages
- Add all new pages to sitemap.ts

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

ROLLBACK:
1. git revert HEAD (removes new page files and sitemap additions)
2. The Phase B redirect changes remain intact — the catch-alls for /retirement/ were already removed; if rollback of Phase C pages causes 404s on the retirement URLs, add back temporary redirects to /retirement until Phase C can be redeployed

DO NOT:
- Use specific Medicare premium figures that are not verified in ANNUAL_UPDATE.md
- Create thin pages under 1,000 words
- Add redirects for the new URLs
- Touch life-insurance or critical-illness pages (that is Phase D)
- Change the global layout, Header, or Footer
```
