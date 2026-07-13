# Phase G — New FAQ & High-Value Blog Content
## Self-Contained Claude Code Prompt

---

```
You are implementing Phase G of the A&E Insurance Agency SEO plan. This phase creates 5 new FAQ pages, organizes the resources hub, publishes 3 high-value blog posts, and adds mid-article CTAs to the top 10 blog posts.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Miami FL Medicare broker
- Founder: Steve Germain, NPN 19921707, licensed since 2009, author of "Medicare Decoded"
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for all conventions

BUSINESS RULES (NON-NEGOTIABLE):
- All Medicare figures must match ANNUAL_UPDATE.md (read it first)
- YMYL content: Every dollar figure must trace to CMS/SSA/Medicare.gov
- Blog posts must follow publishing-workflow.md and internal-linking-standards.md (read them)
- The page-1 freeze rule: Never change content on posts ranking top 10 (check docs/seo-performance-dashboard.md)
- FAQ pages: The FAQ content HTML must contain visible Q&A sections that match the faqs array items
- New blog posts get: author byline, original publish date, read time estimate, excerpt, and at least 1 internal link per 500 words

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. ANNUAL_UPDATE.md (for verified 2026 Medicare figures — use ONLY these)
3. docs/seo-performance-dashboard.md (page-1 freeze rule — do NOT touch top-10 posts)
4. docs/publishing-workflow.md
5. docs/internal-linking-standards.md
6. src/lib/faqs.ts (understand FAQ page structure)
7. src/lib/blogPosts.ts (understand BlogPost interface and how blog posts are added)
8. src/app/resources/faq/[slug]/page.tsx (FAQ page rendering pattern)
9. src/app/blogs/[slug]/page.tsx (blog post rendering pattern)
10. src/app/resources/page.tsx (if it exists — resources hub page)

---

TASK G1 — New FAQ Page: What is the Medicare Annual Enrollment Period? (P1 — 1.5 hours)

Add to src/lib/faqs.ts:

slug: "what-is-the-medicare-annual-enrollment-period"
title: "What Is the Medicare Annual Enrollment Period (AEP)?"
excerpt: "The Medicare Annual Enrollment Period runs October 15–December 7 each year. During AEP you can switch Medicare Advantage plans, join or drop Part D coverage, or move from Medicare Advantage back to Original Medicare."

CONTENT (visible Q&A in the page HTML + matching faqs array):

H1: What Is the Medicare Annual Enrollment Period?

Content sections:
- What AEP Is: October 15 – December 7 each year. Changes take effect January 1.
- What You Can Do During AEP: Switch from one Medicare Advantage plan to another; switch from Medicare Advantage to Original Medicare (and add Medigap and Part D); join or drop a standalone Part D plan; move from Original Medicare to Medicare Advantage.
- What You CANNOT Do During AEP: You cannot add Medigap during AEP outside of a valid enrollment right (e.g., if you already have Medigap, switching policies requires underwriting in Florida unless you have a special right). New to Medicare (turning 65) → use your Initial Enrollment Period, not AEP.
- Why AEP Matters for South Florida Residents: Miami-Dade's large MA plan market means many beneficiaries switch plans during AEP. Plans change formularies, premiums, and networks each year — what was the right plan last year may not be the right plan this year.

faqs array (must mirror the content above):
Q1: When is Medicare's Annual Enrollment Period?
A1: The Medicare Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. Any changes you make during AEP take effect January 1 of the following year.

Q2: What can I change during Medicare's AEP?
A2: During AEP you can switch from one Medicare Advantage plan to another, switch from Medicare Advantage back to Original Medicare (and add Medigap and Part D), or join, switch, or drop a standalone Part D prescription drug plan.

Q3: Can I add Medigap during the Annual Enrollment Period?
A3: Generally, no. Medigap (Medicare Supplement) has its own enrollment rules. In Florida, the guaranteed-issue window for Medigap is during your Medicare Supplement Open Enrollment Period — when you first turn 65 and enroll in Part B. Outside that window, you may face medical underwriting. AEP only governs Medicare Advantage and Part D changes.

Internal links to add within content:
- /tools/medicare-enrollment-calculator
- /medicare-coverage/medicare-advantage-plans
- /resources/faq/what-is-medicare-advantage (if it exists)

After: npx tsc --noEmit && npm run build

---

TASK G2 — New FAQ Page: How Does IRMAA Work? (P1 — 1.5 hours)

slug: "how-does-irmaa-work"
title: "How Does IRMAA Work? Medicare's Income-Related Premium Surcharge Explained"
excerpt: "IRMAA (Income-Related Monthly Adjustment Amount) is a Medicare surcharge paid by higher-income beneficiaries on top of the standard Part B and Part D premiums. Here's how it works and how to calculate your amount."

CONTENT:
H1: How Does IRMAA Work?

Cover:
- What IRMAA is: an income-based premium surcharge on top of standard Part B and Part D premiums
- Who pays it: individuals with MAGI above $106,000 (single) or $212,000 (married filing jointly) for 2026. Verify these thresholds in ANNUAL_UPDATE.md.
- How Medicare determines your IRMAA: it uses your tax return from 2 years prior (2024 income for 2026 IRMAA)
- IRMAA brackets: list the 5 income brackets and corresponding surcharges from ANNUAL_UPDATE.md
- Life-Changing Event (LCE) appeals: If your income dropped due to marriage, divorce, death of spouse, work reduction, or loss of employer pension — you can appeal using SSA Form SSA-44
- Link to /tools/irmaa-calculator

faqs array (4 pairs matching the content):
Q1: What is IRMAA on Medicare?
A1: IRMAA (Income-Related Monthly Adjustment Amount) is an additional premium surcharge paid by Medicare beneficiaries whose income exceeds a certain threshold. In 2026, individuals with MAGI above $[verify threshold from ANNUAL_UPDATE.md] pay more than the standard Part B and Part D premiums.

Q2: How does Social Security determine my IRMAA?
A2: Social Security uses your Modified Adjusted Gross Income (MAGI) from your federal tax return from two years prior. For 2026 IRMAA surcharges, Social Security uses your 2024 tax return.

Q3: Can I appeal an IRMAA surcharge?
A3: Yes. If your income has decreased due to a life-changing event (retirement, marriage, divorce, death of spouse, loss of employer pension, or reduction in work hours), you can appeal your IRMAA using SSA Form SSA-44. Submit it to your local Social Security office.

Q4: How much does IRMAA add to my Medicare Part B premium?
A4: In 2026, IRMAA surcharges range from approximately $[lowest bracket surcharge] to $[highest bracket surcharge] per month on top of the standard $185/month Part B premium, depending on your income bracket. Use the IRMAA calculator at aeinsurancefl.com/tools/irmaa-calculator for your specific amount. (Fill in actual amounts from ANNUAL_UPDATE.md)

After: npx tsc --noEmit && npm run build

---

TASK G3 — New FAQ Page: What Is the Medicare Part B Penalty? (P1 — 1 hour)

slug: "what-is-the-medicare-part-b-late-enrollment-penalty"
title: "What Is the Medicare Part B Late Enrollment Penalty?"
excerpt: "If you delay enrolling in Medicare Part B without creditable coverage, you'll pay a permanent 10% penalty for each 12-month period you waited. Here's how it works and how to avoid it."

CONTENT:
H1: What Is the Medicare Part B Late Enrollment Penalty?

Cover:
- What the penalty is: permanent 10% surcharge per 12-month delay period, added to standard Part B premium for life
- Example: 2 years late = permanent 20% surcharge = $37/month additional (at $185 standard premium)
- Who avoids it: those with creditable employer coverage through active employment
- How to calculate yours: link to /tools/part-b-penalty-calculator
- How to avoid it: enroll during Initial Enrollment Period or qualify for Special Enrollment Period

faqs array (3–4 pairs)

After: npx tsc --noEmit && npm run build

---

TASK G4 — New FAQ Page: What Is a Medicare Special Enrollment Period? (P1 — 1 hour)

slug: "what-is-a-medicare-special-enrollment-period"
title: "What Is a Medicare Special Enrollment Period (SEP)?"
excerpt: "A Medicare Special Enrollment Period allows you to enroll in Medicare outside the usual enrollment windows without a penalty, if you qualify due to a life event like losing employer coverage."

CONTENT:
H1: What Is a Medicare Special Enrollment Period (SEP)?

Cover:
- What SEP is and why it matters
- Most common qualifying events: losing employer/union coverage, leaving active employment, ending COBRA
- SEP window: typically 8 months after losing coverage (Part B SEP)
- Part D SEP: typically 63 days
- Mistakes to avoid: waiting too long after COBRA ends; COBRA is not considered active employer coverage for SEP purposes
- Link to /tools/medicare-enrollment-calculator

faqs array (3–4 pairs)

After: npx tsc --noEmit && npm run build

---

TASK G5 — New FAQ Page: How Does Medicare Work With Employer Insurance? (P1 — 1 hour)

slug: "how-does-medicare-work-with-employer-insurance"
title: "How Does Medicare Work With Employer Insurance?"
excerpt: "If you're still working at 65 and have employer health insurance, you may be able to delay Medicare Part B without penalty. Here's how Medicare coordinates with employer coverage."

CONTENT:
H1: How Does Medicare Work With Employer Insurance?

Cover:
- The basics of Medicare as primary vs. secondary payer
- Small employer rule (under 20 employees) vs. large employer (20+ employees)
- When you should enroll in Part B immediately vs. delay
- Part A — generally free for most, enroll even if delaying Part B
- Creditable prescription drug coverage and Part D
- What happens when you lose employer coverage (SEP — see G4 link)

faqs array (3–4 pairs)

After: npx tsc --noEmit && npm run build

---

TASK G6 — Resources Page Organization (P2 — 1 hour)

File: src/app/resources/page.tsx (if it exists — read it first)

If the resources page exists:
- Verify it links to all 5 new FAQ pages (G1–G5)
- Verify it has a clear organizational structure (categories like "Enrollment," "Costs & Premiums," "Plan Types")
- Add missing links to the new FAQ pages

If there is no /resources page yet or if FAQ pages are only accessible via sitemap:
- This task is lower priority — ensure new FAQ pages are linked from relevant blog posts instead
- Add links from the enrollment-related blog posts to the new FAQ pages

After: npx tsc --noEmit

---

TASK G7 — New Blog Post: Best Medicare Advantage Plans Miami 2026 (P1 — 4 hours)

Add a new entry to blogPosts.ts:

slug: "best-medicare-advantage-plans-miami-2026"
title: "Best Medicare Advantage Plans in Miami, FL for 2026"
excerpt: "Comparing Medicare Advantage plans in Miami, FL for 2026? Here's what independent broker Steve Germain looks at when helping Miami-Dade seniors choose the right plan."
date: "July 2026" (use actual current month)
readTime: "8 min read"
image: "/blog/medicare-advantage-plans-miami.jpg" (use existing blog image that fits, or a generic medicare image already in /public/)

IMPORTANT — WHAT THIS POST MUST NOT DO:
- Do NOT rank or endorse specific carriers by name as "best" (regulatory risk + content aging)
- Do NOT list specific plan premiums (these change annually and vary by geography)
- Do NOT make claims like "Plan X is the best" — instead, explain what criteria make a plan right for different people

WHAT IT MUST DO:
- Target the search intent: "best medicare advantage plans miami" (navigational/commercial investigation)
- Provide genuine decision-making criteria
- Provide Miami-Dade context that national sites cannot match
- Include at least 1 FAQ pair per major section

CONTENT OUTLINE (2,000 words):

H1: Best Medicare Advantage Plans in Miami, FL for 2026: A Broker's Guide to Choosing

Intro: Miami-Dade County has one of the most competitive Medicare Advantage markets in the country — with 40+ plans available, choosing the "best" plan depends entirely on your situation. This guide from independent broker Steve Germain explains the 5 criteria that matter most when evaluating Medicare Advantage plans in Miami.

Section 01: Why "Best" Depends on Your Situation
"The Bottom Line": There is no single best Medicare Advantage plan for everyone in Miami. The right plan depends on your doctors, your prescriptions, and your anticipated healthcare usage.
Content: Explain why zero-premium plans are appealing but not always optimal; why a plan with a higher premium but lower MOOP may save money for frequent healthcare users.

Section 02: The 5 Criteria for Comparing Miami Medicare Advantage Plans
"The Bottom Line": Before looking at premiums, check: (1) Is your doctor in-network? (2) Are your drugs on the formulary? (3) What is the Maximum Out-of-Pocket (MOOP)? (4) What extra benefits matter to you? (5) What is the plan's star rating?

Subsection for each criterion with brief explanation.

Section 03: HMO vs. PPO Plans in Miami-Dade
"The Bottom Line": HMO plans typically have lower premiums and lower MOOP but restrict you to the plan's local network. PPO plans cost more but allow out-of-network access.
Miami context: Many South Florida retirees spend winters in Miami and summers elsewhere — PPO plans may be worth the higher premium for seasonal flexibility.

Section 04: Special Needs Plans (SNPs) in Miami
"The Bottom Line": If you have chronic conditions (diabetes, COPD, heart failure) or qualify for both Medicare and Medicaid, a Special Needs Plan may be significantly more valuable than a standard MA plan.
Content: Brief description of C-SNPs and D-SNPs. Miami-Dade has a large dual-eligible population.

Section 05: How to Compare Plans — Tools and Resources
- Medicare Plan Finder at medicare.gov/plan-compare
- An independent broker (can compare across all available plans)
- Link to /tools/medicare-enrollment-calculator
- Link to /medicare-coverage/medicare-advantage-plans

FAQ SECTION (4 pairs):
Q1: When can I change my Medicare Advantage plan in Miami?
Q2: What is the maximum out-of-pocket for Medicare Advantage in 2026?
Q3: Can I use Baptist Health or University of Miami with Medicare Advantage?
Q4: What is a Special Needs Plan and do I qualify?

(Write answers sourced from CMS or general Medicare knowledge. MOOP figure from ANNUAL_UPDATE.md.)

faqs array: mirror the 4 FAQ pairs above

Internal links: /medicare-coverage/medicare-advantage-plans, /medicare-broker-miami, /medicare-broker-hialeah, /tools/irmaa-calculator

After: npx tsc --noEmit && npm run build

---

TASK G8 — New Blog Post: Medigap Plan G Florida 2026 (P1 — 4 hours)

slug: "medigap-plan-g-florida-2026-complete-guide"
title: "Medigap Plan G in Florida 2026: The Complete Guide"
excerpt: "Medicare Supplement Plan G is the most popular Medigap plan in Florida. Here's what it covers, what it costs, and whether it's the right choice for your retirement."
date: "July 2026"
readTime: "9 min read"

CONTENT OUTLINE (2,200 words):

H1: Medigap Plan G in Florida 2026: Everything You Need to Know

Section 01: What Does Medigap Plan G Cover?
"The Bottom Line": Plan G covers almost all Medicare cost-sharing gaps except the Part B deductible ($[amount from ANNUAL_UPDATE.md]).
List all benefits covered: Part A coinsurance (including hospital costs beyond 60 days), Part B coinsurance (20% of all Medicare-approved outpatient costs), Part A deductible, skilled nursing facility coinsurance, foreign travel emergency (80%, up to lifetime maximum), excess charges (Part B), hospice coinsurance.
What Plan G does NOT cover: Part B deductible, dental, vision, hearing, prescriptions (need separate Part D).

Section 02: Medigap Plan G vs. Plan N in Florida
"The Bottom Line": Plan G pays all your Medicare cost-sharing except the annual Part B deductible. Plan N is cheaper but requires a $20 office visit copay and $50 ER copay, and does not cover Part B excess charges.
Comparison table: G vs. N on: monthly premium, Part B deductible, office copay, ER copay, Part B excess charges covered.

Section 03: How Much Does Plan G Cost in Florida?
"The Bottom Line": Medigap Plan G premiums in Florida typically range from $125 to $300+ per month depending on your age, gender, tobacco use, and carrier. Rates vary — shopping multiple carriers is essential.
Content: Do NOT quote specific carrier premium amounts. Instead, describe the range and the factors that affect pricing. Emphasize that an independent broker can compare rates from multiple carriers.

Section 04: Florida's Medigap Open Enrollment Period
"The Bottom Line": In Florida, you have a guaranteed-issue window when you first turn 65 and enroll in Part B. During this period, no health questions are asked. After this window, carriers can use medical underwriting.
Florida-specific context: This is one of the most important facts for Florida Medicare beneficiaries — the window is 6 months from when Part B is effective, and it does not repeat.

Section 05: Plan G vs. Medicare Advantage — When Plan G Wins
Content: Plan G is typically better for: frequent specialist users, travelers, people with chronic conditions who want predictable costs. Medicare Advantage is often better for: people on tight budgets, those who rarely use healthcare, people who want dental/vision bundled.

FAQ SECTION (4 pairs):
Q1: Is Medigap Plan G worth it in Florida?
Q2: What is the Medigap Plan G deductible in 2026?
Q3: Can I get Plan G if I missed my Open Enrollment Period?
Q4: Does Plan G cover dental and vision?

faqs array: mirror above

Internal links: /medicare-coverage/medicare-supplement-plans-medigap, /medicare-coverage/medicare-advantage-vs-medigap, /tools/medicare-enrollment-calculator

After: npx tsc --noEmit && npm run build

---

TASK G9 — New Blog Post: How to Appeal IRMAA (P1 — 3 hours)

slug: "how-to-appeal-irmaa-medicare-surcharge"
title: "How to Appeal Your IRMAA Medicare Surcharge (Step-by-Step Guide)"
excerpt: "If your income has dropped since the year Medicare used to calculate your IRMAA, you may be able to appeal and reduce your surcharge immediately. Here's exactly how to do it."
date: "July 2026"
readTime: "7 min read"

CONTENT OUTLINE (1,800 words):

H1: How to Appeal Your IRMAA Medicare Surcharge: A Step-by-Step Guide

This is a HowTo-intent post — perfect for HowTo schema. If the blog post page.tsx supports additional JSON-LD, consider adding HowTo schema here similar to Task E11 approach.

Section 01: What Is an IRMAA Life-Changing Event?
Content: The 8 qualifying life-changing events: marriage, divorce/annulment, death of spouse, work stoppage, work reduction, loss of income-producing property, loss of pension/employer settlement, receipt of settlement payment from current or former employer.

Section 02: SSA Form SSA-44 — What It Is and Where to Get It
Content: SSA-44 is the form used to report a life-changing event and request a lower IRMAA. Available at ssa.gov/forms/ssa-44.pdf. You submit it to your local Social Security office (in person or by mail).

Section 03: Step-by-Step: How to File an IRMAA Appeal
Step 1: Gather proof of the life-changing event (marriage certificate, death certificate, final pay stub showing work reduction, etc.)
Step 2: Download SSA Form SSA-44 from ssa.gov
Step 3: Complete Section 1 (identifying information), Section 2 (tax year you want to use instead), Section 3 (life-changing event description and date)
Step 4: Attach supporting documentation
Step 5: Submit to your local Social Security office (find yours at ssa.gov/locator)
Step 6: SSA will review and notify you; the change can take effect within 1–2 months

Section 04: What Income Year Should You Request?
Content: You can request SSA use a more recent tax year than the one currently used, OR (if the event reduced income so recently that taxes haven't been filed) you can submit an estimate with proof.

Section 05: South Florida Context
Content: Many South Florida retirees who sold a business, reduced consulting hours, or lost a pension income from a dissolved employer have successfully reduced their IRMAA. An independent Medicare broker cannot file the appeal for you, but can help you understand whether you qualify and walk you through the process.

FAQ SECTION (3 pairs):
Q1: How long does an IRMAA appeal take?
Q2: Can I appeal IRMAA if I retired this year?
Q3: Does a Medicare broker help with IRMAA appeals?

faqs array: mirror above

Internal links: /tools/irmaa-calculator, /resources/faq/how-does-irmaa-work, /retirement/social-security-and-medicare-coordination

After: npx tsc --noEmit && npm run build

---

TASK G11 — Add Mid-Article CTA Boxes to Top 10 Blog Posts (P1 — 2 hours)

FILES TO READ: src/app/blogs/[slug]/BlogPostClient.tsx (understand how blog posts render content HTML)

The goal: Insert a styled CTA box approximately mid-way through the content of the top 10 blog posts by GSC impressions.

TOP 10 POSTS BY IMPRESSIONS (do not touch any ranking in top 10 positions — check seo-performance-dashboard.md):
1. medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you
2. what-is-the-difference-between-medicare-part-a-and-part-b
3. which-medicare-plan-is-better-for-dental-and-vision-coverage
4. which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida
5. how-does-medicare-part-c-compare-to-original-medicare-in-florida
6. turning-65-in-florida-your-complete-medicare-enrollment-checklist
7. best-medicare-advantage-plans-miami-2026 (NEW — from G7 above)
8. medigap-plan-g-florida-2026-complete-guide (NEW — from G8)
9. how-to-appeal-irmaa-medicare-surcharge (NEW — from G9)
10. (identify 10th by reading search_console data or seo-performance-dashboard.md)

IMPLEMENTATION:
Option A (preferred — if blog content renders as raw HTML): Add the CTA HTML directly to the content string at an appropriate mid-point. Look for a natural paragraph break or a section break.

CTA HTML to insert:
<div class="blog-cta-box">
  <p class="blog-cta-heading">Have questions about your Medicare options?</p>
  <p>Steve Germain compares Medicare plans from 25+ carriers at no cost to you. Get a free 30-minute consultation.</p>
  <a href="/contact" class="blog-cta-button">Schedule a Free Consultation →</a>
</div>

You will need to add CSS for .blog-cta-box in globals.css (in the .blog-content rules section):
.blog-content .blog-cta-box {
  background: #1A1A2E;
  color: white;
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
}
.blog-content .blog-cta-box .blog-cta-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #E8A020;
}
.blog-content .blog-cta-box .blog-cta-button {
  display: inline-block;
  margin-top: 16px;
  background: #E8A020;
  color: #1A1A2E;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
}

Option B (if blog content renders differently): Check if BlogPostClient.tsx can inject the CTA at a specific position (e.g., after paragraph N). Implement whatever is most maintainable.

IMPORTANT: Do NOT add CTAs that interrupt mid-sentence or mid-list. Find a natural paragraph break (after an H2 section, after a table, etc.).

After: npx tsc --noEmit && npm run build

---

VERIFICATION STEPS:
1. npx tsc --noEmit (0 errors)
2. npm run build (all pages pass)
3. Check new FAQ pages load: localhost:3000/resources/faq/what-is-the-medicare-annual-enrollment-period
4. Check new blog posts load: localhost:3000/blogs/best-medicare-advantage-plans-miami-2026
5. View source on one new FAQ and one blog post — confirm FAQPage schema present
6. Verify mid-article CTA renders on existing top posts
7. Verify all dollar figures in new content match ANNUAL_UPDATE.md

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] Build passes
- [ ] 5 new FAQ pages load
- [ ] 3 new blog posts load
- [ ] All new FAQ pages have visible Q&A + FAQPage schema (faqs array mirrors HTML)
- [ ] All new blog posts have faqs arrays
- [ ] Mid-article CTA renders in top 10 posts
- [ ] Blog posts ranked top 10 were NOT modified (page-1 freeze honored)
- [ ] All figures in new content verified against ANNUAL_UPDATE.md

COMMIT MESSAGE:
feat(content/phase-g): new FAQ pages, 3 blog posts, mid-article CTAs

- Add 5 FAQ pages: AEP, IRMAA, Part B penalty, SEP, Medicare + employer insurance
- Publish 3 new blog posts: Best MA Plans Miami, Medigap Plan G Florida, IRMAA Appeal Guide
- Add mid-article CTA boxes to top 10 blog posts
- Add blog-cta-box styles to globals.css

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

DO NOT:
- Rank or endorse specific insurance carriers by name
- Include specific plan premium amounts without current CMS source
- Edit posts that are ranking in top 10 (page-1 freeze rule)
- Add faqs array items that don't mirror visible FAQ content in the post HTML
- Create thin content under 1,200 words for blog posts
- Publish blog posts without internal links (minimum 1 link per 500 words)
```
