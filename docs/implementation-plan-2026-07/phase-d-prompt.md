# Phase D — Life Insurance & Critical Illness Subpages
## Self-Contained Claude Code Prompt

---

```
You are implementing Phase D of the A&E Insurance Agency SEO plan. This creates subpages under /life-insurance/ and /critical-illness/ that recover proven GSC traffic from catch-all redirects.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Miami FL
- Founder: Steve Germain, NPN 19921707
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth

PREREQUISITE — PHASE B MUST BE COMPLETE:
Confirm next.config.ts no longer has /life-insurance/:slug+ or /critical-illness/:slug+ catch-all redirects. If they exist, new pages will be shadowed and invisible. Stop and complete Phase B first.

Verify: Read next.config.ts and confirm the catch-all lines are replaced with per-slug redirects.

GSC TRAFFIC BEING RECOVERED:
- /life-insurance/permanent-life-insurance: 1,230 impressions at position 79
- /life-insurance/term-life-insurance: 309 impressions at position 38
- /life-insurance/final-expense-and-guaranteed-issue-insurance: 212 impressions at position 37
- /critical-illness/critical-illness-and-cancer-insurance: 196 impressions (maps to new /critical-illness/cancer-insurance-florida)
- /critical-illness/hospital-indemnity-plans: 81 impressions at position 38

BUSINESS RULES:
- No keyword stuffing, no thin content, no doorway page patterns
- Use the numbered section format (01, 02...) with "The Bottom Line" callouts
- Dark navy CTA section at bottom of every page
- All insurance claims must be accurate and not misleading
- Do NOT include specific premium quotes or rates — these vary by individual; use ranges from industry sources only
- Run npx tsc --noEmit after every TypeScript change

FILES TO READ FIRST:
1. CLAUDE.md
2. src/app/life-insurance/page.tsx (understand parent service page structure)
3. src/app/critical-illness/page.tsx (understand parent page structure)
4. src/app/medicare-broker-miami/page.tsx (reference page pattern for server components)
5. next.config.ts (verify Phase B catch-all removal)
6. src/app/sitemap.ts
7. src/lib/constants.ts

---

TASK D1 — Create /life-insurance/permanent-life-insurance (P1 — 5 hours)

File: src/app/life-insurance/permanent-life-insurance/page.tsx

METADATA:
title: "Permanent Life Insurance in South Florida | A&E Insurance Agency"
description: "Compare whole life, universal life, and indexed universal life insurance options. Independent broker Steve Germain helps South Florida families find the right permanent life coverage."
canonical: ${SITE_URL}/life-insurance/permanent-life-insurance

H1: Permanent Life Insurance: What It Is, How It Works, and Who Needs It

CONTENT OUTLINE (2,500 words):

Intro paragraph: Permanent life insurance provides coverage for your entire life — not just a fixed term — and builds cash value over time. Unlike term insurance, which expires, permanent life insurance is a long-term financial tool used for estate planning, business succession, and protecting dependents who will always need coverage.

Section 01: Types of Permanent Life Insurance
"The Bottom Line": Choose the type based on your need for guaranteed growth (whole life), flexibility (universal), or growth potential (IUL).
- Whole Life Insurance: guaranteed death benefit, fixed premium, guaranteed cash value growth rate
- Universal Life Insurance: flexible premiums, adjustable death benefit, market-sensitive credited interest
- Indexed Universal Life (IUL): cash value tied to market index (like S&P 500) with a floor (no loss) and cap; popular in South Florida for tax-advantaged growth
- Variable Life: investment-linked (higher risk); less common for retirement-age clients
- COMPARISON TABLE: Type | Coverage Period | Cash Value | Premium Flexibility | Best For

Section 02: Permanent vs. Term Life Insurance
"The Bottom Line": Term is less expensive and covers temporary needs; permanent covers lifelong needs and builds cash value.
Content:
- When permanent makes sense: estate planning, lifelong dependents, business buyout, building tax-advantaged cash value
- When term makes more sense: temporary needs (mortgage coverage, income replacement while working), budget constraints
- COMPARISON TABLE: Feature | Term | Permanent

Section 03: Permanent Life Insurance in South Florida
"The Bottom Line": South Florida's affluent retiree market makes permanent life a common estate planning and business succession tool.
- Estate planning context for Miami families passing wealth to children
- Business buyout / key man coverage for Miami entrepreneurs
- Tax advantages of permanent life insurance cash value (grows tax-deferred; access via policy loan)
- Important note: Consult a tax professional regarding tax treatment — this is general information

Section 04: How Much Does Permanent Life Insurance Cost?
"The Bottom Line": Costs vary significantly by age, health, type of permanent policy, and coverage amount.
- Factors: age, health history, coverage amount, policy type, gender
- General range: premiums for permanent life insurance are substantially higher than term for the same death benefit
- The cash value component means part of your premium is being invested/saved
- An independent broker compares policies from multiple carriers to find the best rate for your health profile

FAQs (visible Q&A + FAQPage schema JSON-LD):
Q1: What is the difference between whole life and universal life insurance?
A1: Whole life has fixed premiums and a guaranteed death benefit with guaranteed cash value growth. Universal life has more flexibility — you can adjust premium amounts and death benefit within certain limits — and the cash value grows at a variable interest rate.

Q2: Is permanent life insurance a good investment?
A2: Permanent life insurance is primarily an insurance product, not an investment vehicle. The cash value component grows tax-deferred, which can be useful for specific estate planning or supplemental retirement income strategies. Whether it makes sense depends on your overall financial plan — an independent financial advisor or insurance broker can help you evaluate.

Q3: Can I get permanent life insurance at 70 in South Florida?
A3: Yes, permanent life insurance is available to applicants in their 70s, though premiums are significantly higher than at younger ages and underwriting requirements may be stricter. Final expense and guaranteed issue options exist for those who cannot pass traditional underwriting.

Q4: How is an independent life insurance broker different from a company agent?
A4: An independent broker like A&E Insurance Agency represents multiple carriers and compares policies from each to find the best combination of coverage, cash value, and premium for your situation. A company agent represents only one carrier's products.

BOTTOM CTA: "Schedule a Free Life Insurance Consultation in South Florida" → /contact

SITEMAP: Add with priority 0.7, changeFrequency: "monthly"

ADD INTERNAL LINKS FROM:
- /life-insurance service page → add link (Task D6)
- /life-insurance/term-life-insurance → cross-link in comparison section

---

TASK D2 — Create /life-insurance/term-life-insurance (P1 — 4 hours)

File: src/app/life-insurance/term-life-insurance/page.tsx

METADATA:
title: "Term Life Insurance in South Florida | A&E Insurance Agency"
description: "Affordable term life insurance for South Florida families. Compare 10-, 20-, and 30-year term policies from top-rated carriers. Independent broker Steve Germain explains your options."
canonical: ${SITE_URL}/life-insurance/term-life-insurance

H1: Term Life Insurance: Simple, Affordable Coverage for South Florida Families

CONTENT (2,000 words, numbered sections):
01: What Is Term Life Insurance?
02: How Long Should My Term Be? (10, 20, 30 years — when each makes sense)
03: How Much Term Life Insurance Coverage Do I Need?
04: Term Life Insurance Costs in South Florida (2026 — general ranges by age bracket, not specific quotes)
05: When Term Life Insurance Makes Sense vs. Permanent
06: Converting Term to Permanent (many term policies are convertible — important feature for younger buyers)

FAQs (3–4 pairs) + FAQPage schema.

SITEMAP: priority 0.7

---

TASK D3 — Create /life-insurance/final-expense-and-guaranteed-issue-insurance (P1 — 3 hours)

File: src/app/life-insurance/final-expense-and-guaranteed-issue-insurance/page.tsx

METADATA:
title: "Final Expense Insurance in South Florida | Guaranteed Issue Life Insurance"
description: "Final expense and guaranteed issue life insurance for South Florida seniors 70–85. No medical exam required. A&E Insurance Agency helps you find the right burial and final expense coverage."
canonical: ${SITE_URL}/life-insurance/final-expense-and-guaranteed-issue-insurance

H1: Final Expense Insurance and Guaranteed Issue Life: Coverage When You Need It Most

TARGET AUDIENCE: Seniors aged 70–85 who may have missed Medigap underwriting windows or need burial/final expense coverage. This is a compassionate topic — write with care and directness.

CONTENT (1,500 words):
01: What Is Final Expense Insurance? (Smaller death benefit, typically $5,000–$25,000, designed to cover burial and end-of-life costs)
02: Guaranteed Issue Life Insurance (No medical exam required; no health questions; acceptance guaranteed for qualified ages)
03: Simplified Issue Life Insurance (Few health questions; lower premiums than guaranteed issue; higher premium than fully underwritten)
04: Who Needs Final Expense Coverage?
05: Final Expense Insurance and Medicare (Not a Medicare supplement — different product; important to clarify)

IMPORTANT: Do NOT claim specific premium amounts without sourcing. Do NOT promise guaranteed acceptance beyond what insurance carriers actually guarantee for the applicable ages.

FAQs (3–4 pairs) + FAQPage schema.

SITEMAP: priority 0.7

---

TASK D4 — Create /critical-illness/cancer-insurance-florida (P1 — 3 hours)

NOTE: The legacy Webflow URL was /critical-illness/critical-illness-and-cancer-insurance.
The Phase B redirect sends that URL → /critical-illness/cancer-insurance-florida (the new, better URL).
The new page must be at: src/app/critical-illness/cancer-insurance-florida/page.tsx

METADATA:
title: "Cancer Insurance in Florida | Critical Illness Coverage | A&E Insurance Agency"
description: "Cancer insurance in Florida pays a lump-sum benefit when you're diagnosed. How it works with Medicare, what it covers, and whether it makes sense for South Florida seniors."
canonical: ${SITE_URL}/critical-illness/cancer-insurance-florida

H1: Cancer Insurance in Florida: How It Works and Who Needs It

CONTENT (1,800 words):
01: What Is Cancer Insurance? (Not health insurance; not Medicare — pays a separate lump sum on cancer diagnosis)
02: How Cancer Insurance Works With Medicare in Florida (supplements Medicare coverage gaps for cancer treatment)
03: What Cancer Insurance Typically Covers (lump-sum diagnosis benefit, treatment-specific benefits, income replacement variants)
04: Critical Illness vs. Cancer Insurance: What's the Difference?
05: Is Cancer Insurance Worth It for Florida Medicare Beneficiaries? (Data: cancer is a leading cause of disability; Medicare covers treatment but not all income/life costs)
06: How Much Does Cancer Insurance Cost in Florida? (general ranges, not specific quotes)

IMPORTANT: Medicare.gov or ACS/cancer.org can be cited for cancer prevalence data. Do not overstate coverage — be accurate about what these products do and don't cover.

FAQs (3–4 pairs) + FAQPage schema.

SITEMAP: priority 0.7

---

TASK D5 — Create /critical-illness/hospital-indemnity-plans (P2 — 2 hours)

File: src/app/critical-illness/hospital-indemnity-plans/page.tsx

METADATA:
title: "Hospital Indemnity Insurance Florida | Critical Illness Coverage | A&E Insurance Agency"
description: "Hospital indemnity insurance pays a daily benefit for each day you're hospitalized. How it complements Medicare Advantage and Medigap plans in South Florida."
canonical: ${SITE_URL}/critical-illness/hospital-indemnity-plans

H1: Hospital Indemnity Insurance in Florida: Daily Benefits During a Hospital Stay

CONTENT (1,200 words):
01: What Is Hospital Indemnity Insurance? (Pays a fixed daily amount for each day hospitalized)
02: How Hospital Indemnity Complements Medicare (fills the coverage gap during inpatient stays)
03: Hospital Indemnity and Medicare Advantage (often bundled as a rider in MA plans; standalone versions also available)
04: Is Hospital Indemnity Right for You?

FAQs (3 pairs) + FAQPage schema.

SITEMAP: priority 0.6

---

TASK D6 — Update /life-insurance Service Page with Subpage Links (P1 — 30 min)

File: Find src/app/life-insurance/ client component (LifeInsuranceClient.tsx or similar)

Add contextual internal links to new subpages:
- Permanent Life Insurance → /life-insurance/permanent-life-insurance
- Term Life Insurance → /life-insurance/term-life-insurance
- Final Expense & Guaranteed Issue → /life-insurance/final-expense-and-guaranteed-issue-insurance

---

TASK D7 — Update /critical-illness Service Page with Subpage Links (P1 — 30 min)

File: Find src/app/critical-illness/ client component (CriticalIllnessClient.tsx or similar)

Add contextual links:
- Cancer Insurance in Florida → /critical-illness/cancer-insurance-florida
- Hospital Indemnity Plans → /critical-illness/hospital-indemnity-plans

---

VERIFICATION STEPS:
1. npx tsc --noEmit (0 errors)
2. npm run build (must pass)
3. Visit http://localhost:3000/life-insurance/permanent-life-insurance — loads (not redirect)
4. Visit http://localhost:3000/critical-illness/cancer-insurance-florida — loads
5. Verify /critical-illness/critical-illness-and-cancer-insurance still redirects to cancer-insurance-florida (Phase B redirect)
6. Confirm all new pages in sitemap.xml
7. /life-insurance and /critical-illness service pages have links to new subpages

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] Build passes
- [ ] All 5 new pages load correctly
- [ ] All 5 pages in sitemap
- [ ] Legacy /life-insurance/* redirects still work (navigating-life-insurance → /life-insurance)
- [ ] /critical-illness/critical-illness-and-cancer-insurance → /critical-illness/cancer-insurance-florida (301)
- [ ] Service pages link to new subpages

COMMIT MESSAGE:
feat(content/phase-d): life insurance and critical illness subpages

- Create /life-insurance/permanent-life-insurance (1,230 GSC impressions recovered)
- Create /life-insurance/term-life-insurance (309 impressions)
- Create /life-insurance/final-expense-and-guaranteed-issue-insurance (212 impressions)
- Create /critical-illness/cancer-insurance-florida (196 impressions from legacy URL)
- Create /critical-illness/hospital-indemnity-plans (81 impressions)
- Update service pages with internal links to new subpages

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

DO NOT:
- Include specific insurance premium rates without industry-sourced ranges
- Make absolute guarantees about coverage ("this plan WILL cover X") — use "typically covers" or "may cover"
- Touch /retirement/ pages (Phase C)
- Touch blogPosts.ts (Phase E)
- Touch next.config.ts (Phase B is complete)
```
