# Phase E — Blog Post Schema & Pillar Page Enhancement
## Self-Contained Claude Code Prompt

---

```
You are implementing Phase E of the A&E Insurance Agency SEO plan. This phase adds FAQPage schema to high-impression blog posts and expands the top Medicare pillar pages.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Miami FL Medicare broker
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for all conventions
- Blog posts are stored in src/lib/blogPosts.ts as typed BlogPost objects
- Medicare coverage pillar guides are in src/lib/medicareCoveragePosts.ts
- FAQPage schema on blog posts is triggered by the faqs array on each BlogPost object
- FAQPage schema on coverage pages may need a different implementation — read the coverage page pattern first

CRITICAL YMYL RULE:
The `faqs` array in blogPosts.ts MUST mirror questions that are actually answered in the post's HTML content. Per CLAUDE.md: "Keep in sync with the FAQ section inside content." You MUST read the blog post's content HTML before writing any FAQ pairs. Never fabricate questions that aren't answered in the post body.

BUSINESS RULES:
- No content changes on posts ranking in top 10 positions (page-1 freeze rule — check docs/seo-performance-dashboard.md)
- Every dollar figure must cite CMS/SSA/Medicare.gov
- Do not alter existing blog post content in ways that change the meaning or tone — only ADD content (internal links, FAQ schema, comparison tables)
- Run npx tsc --noEmit after every TypeScript change

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. docs/seo-performance-dashboard.md (check page-1 freeze rule — do not touch any posts ranking top 10)
3. src/lib/blogPosts.ts (read the complete file to find each target post and its content)
4. src/components/seo/FAQSchema.tsx (understand how FAQPage schema is rendered from the faqs array)
5. src/app/blogs/[slug]/BlogPostClient.tsx (understand how blog posts render)
6. src/lib/medicareCoveragePosts.ts (read all 7 coverage posts to understand their content)
7. src/app/medicare-coverage/[slug]/page.tsx (understand coverage page structure)
8. src/app/medicare/MedicareClient.tsx (for Task E10 internal links)

OBJECTIVE:
1. Add faqs arrays to the 5 highest-impression blog posts (enabling FAQPage rich results in Google)
2. Expand 3 Medicare pillar pages with comparison tables and FAQPage schema
3. Add internal links from the /medicare service page to pillar guides and tools
4. Add HowTo schema to the Medicare enrollment checklist blog post

---

TASK E1 — Add faqs Array to: medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you (P1 — 2 hours)

WHY: 4,156 impressions but 0 clicks. This is the highest-impression page on the site. FAQPage schema can earn rich results in Google search that dramatically improve CTR.

Step 1: Read the full content HTML for this blog post in blogPosts.ts.
Step 2: Find all question-format headings (H2, H3) or FAQ sections in the content.
Step 3: Write 3–5 Q&A pairs where the question matches what's in the content and the answer is a 1–3 sentence plain-text version of the content's answer (strip HTML tags).
Step 4: Add the faqs array to the BlogPost object for this slug.

SUGGESTED FAQ QUESTIONS (confirm each exists in the content HTML):
- What is the difference between Medicare Advantage and Medicare Supplement?
- Which is better: Medicare Advantage or Medigap in Florida?
- Can I switch from Medicare Advantage to Medigap?
- What does Medicare Advantage cover that Original Medicare doesn't?
- How much does Medigap cost in Florida?

For each question, the answer in the faqs array must be: 1–3 sentences, plain text (no HTML), directly answering the question using information from the post.

After: npx tsc --noEmit

---

TASK E2 — Add faqs Array to: what-is-the-difference-between-medicare-part-a-and-part-b (P1 — 1.5 hours)

1,992 impressions, 0 clicks.

Read the post content. Find question-format headings. Add 3–5 faqs.

SUGGESTED QUESTIONS (verify in content):
- What does Medicare Part A cover?
- What does Medicare Part B cover?
- Is Medicare Part A free?
- Do I need both Medicare Part A and Part B?
- What is the difference between Medicare Part A and Part B premiums?

After: npx tsc --noEmit

---

TASK E3 — Add faqs Array to: which-medicare-plan-is-better-for-dental-and-vision-coverage (P1 — 1.5 hours)

1,498 impressions, 0 clicks.

Read content. Add 3–5 faqs.

SUGGESTED QUESTIONS:
- Does Medicare cover dental and vision?
- Which Medicare plans include dental and vision benefits?
- How do I add dental coverage to Medicare?
- What is the difference between Original Medicare dental coverage and Medicare Advantage dental?

After: npx tsc --noEmit

---

TASK E4 — Add faqs Array to: which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida (P1 — 1 hour)

454 impressions, 0 clicks.

Read content. Add 3–4 faqs.

SUGGESTED QUESTIONS:
- What Medicare plan is best for chronic illness?
- Are there Medicare plans designed for people with chronic conditions in Florida?
- What is a Special Needs Plan (SNP)?

After: npx tsc --noEmit

---

TASK E5 — Add faqs Array to: how-does-medicare-part-c-compare-to-original-medicare-in-florida (P1 — 1 hour)

393 impressions, 0 clicks.

Read content. Add 3–4 faqs.

SUGGESTED QUESTIONS:
- What is Medicare Part C?
- How does Medicare Advantage differ from Original Medicare in Florida?
- Does Medicare Advantage replace Original Medicare?

After: npx tsc --noEmit

---

TASK E6 — Add Internal Links from Top 5 Blog Posts to Calculator Tools (P1 — 1 hour)

For each of the 5 blog posts above, add at least one contextual internal link within the HTML content to a relevant calculator tool. Edit the content field in blogPosts.ts.

Guidelines for finding insertion points:
- In the Medicare Advantage vs. Medigap post: find enrollment-related content → add link to /tools/medicare-enrollment-calculator
- In the Part A vs. Part B post: find premium or cost content → add link to /tools/part-b-penalty-calculator
- In the dental/vision post: find enrollment period content → add link to /tools/medicare-enrollment-calculator
- In the chronic conditions post: find Part D or cost content → add link to /tools/irmaa-calculator
- In the Part C vs. Original Medicare post: find enrollment or cost content → add a calculator link

Link format in the HTML content:
<a href="/tools/medicare-enrollment-calculator">calculate your Medicare enrollment window</a>

Do NOT keyword-stuff the anchor text. Use natural, benefit-oriented phrases.

After: npx tsc --noEmit && npm run build

---

TASK E7 — Expand /medicare-coverage/medicare-supplement-plans-medigap (P1 — 4 hours)

Current: 1,396 impressions at position 65 — the page is ranking but too deep. Adding FAQPage schema and a comparison table should move it toward position 20–35.

Read the full medicareCoveragePosts.ts entry for slug "medicare-supplement-plans-medigap".

ADDITIONS TO MAKE:
1. Add a faqs array (same pattern as blogPosts — check if medicareCoveragePosts has this field; if not, check how FAQSchema is triggered on these pages and add the appropriate mechanism)

2. Add a Medigap Plan Comparison Table to the content HTML. The table should compare the standardized Medigap plan types (A through N) on key benefits. Standard HTML table format (the .blog-content CSS in globals.css includes table styles). Use this structure:
   Plan | Part A Coinsurance | Part B Coinsurance | Part A Deductible | Part B Deductible | Foreign Travel | Notable
   A   | Yes | Yes | No | No | No | Basic coverage
   B   | Yes | Yes | Yes | No | No | Adds Part A deductible
   D   | Yes | Yes | Yes | No | Yes | Good for travelers
   G   | Yes | Yes | Yes | No | Yes | Most popular; covers almost all gaps except Part B deductible
   K   | 50% | 50% | 50% | No | No | Lower premium, higher cost-sharing
   L   | 75% | 75% | 75% | No | No |
   M   | Yes | Yes | 50% | No | Yes |
   N   | Yes | Yes | Yes | No | Yes | Part B copay applies ($20 office, $50 ER)
   (Plans C, E, F, H, I, J — grandfathered or no longer sold to new enrollees; note this in the table caption)

   SOURCE VERIFICATION: Medigap standardization is set by CMS. Verify column values match Medicare.gov/supplement plan comparison tool before publishing.

3. Add FAQPage schema Q&A pairs (3–5) that mirror questions in the existing content:
   - What is Medigap Plan G?
   - What is the difference between Medigap Plan G and Plan N?
   - Can I buy Medigap outside of my Open Enrollment Period in Florida?
   - What does Medigap NOT cover?
   - How much does Medigap cost in Florida?

4. Add a "2026 Florida Medigap Context" section (2–3 sentences): Florida has a Medicare Supplement Open Enrollment Period when you first turn 65 and enroll in Part B — during this window, no health questions are asked. After this window, carriers can use medical underwriting. This is an important Florida-specific fact.

After: npx tsc --noEmit && npm run build

---

TASK E8 — Expand /medicare-coverage/medicare-advantage-vs-medigap (P1 — 3 hours)

Current: 1,093 impressions at position 78. This page competes with the blog post "medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you."

DIFFERENTIATION STRATEGY: 
- The PILLAR PAGE (this page) = the definitive comparison framework with structured tables and decision criteria
- The BLOG POST = Florida-specific scenarios and personal situations
- Both serve different intents — do NOT merge or redirect

ADDITIONS:
1. Add a structured comparison table to the pillar page content:
   Feature | Medicare Advantage | Medigap (Supplement)
   Monthly premium | Often $0 (plus Part B) | $125–$350+/month
   Network restrictions | Yes — must use plan network | No — any Medicare-accepting doctor
   Prior authorizations | Often required | Not required
   Maximum out-of-pocket | Varies ($0–$8,850 in 2026) | Very low with Plan G
   Travel coverage | Limited to plan network | Nationwide (any Medicare provider)
   Dental/Vision | Often included | Not included (buy separately)
   Drug coverage | Usually included | Buy Part D separately
   Best for | Budget-conscious, staying local | High users, travelers, flexibility seekers

   (Verify MOOP figure against ANNUAL_UPDATE.md)

2. Add HowTo schema: "How to Choose Between Medicare Advantage and Medigap in 3 Steps"
   Step 1: List your doctors and confirm if they accept Medicare
   Step 2: Estimate your expected medical usage (frequent vs. rare doctor visits)
   Step 3: Compare total annual costs (premiums + expected out-of-pocket) for each option

3. Add FAQPage schema (3–5 pairs from existing content)

4. Add cross-links:
   - Link TO the blog post: "For Florida-specific scenarios, see our [Medicare Advantage vs. Medigap comparison for Florida →](/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you)"
   - In the blog post: add link back to this pillar: "For a complete feature-by-feature comparison, see our [Medicare Advantage vs. Medigap comparison guide →](/medicare-coverage/medicare-advantage-vs-medigap)"

After: npx tsc --noEmit && npm run build

---

TASK E9 — Expand /medicare-coverage/medicare-advantage-plans (P1 — 4 hours)

Current: 748 impressions at position 41.

ADDITIONS:
1. Add a Miami-Dade carrier context section:
   "Medicare Advantage Plans in Miami-Dade County (2026)"
   Content: Miami-Dade has 50+ Medicare Advantage plans from multiple carriers — one of the highest concentrations in the US. Major carrier types present include HMO and PPO options. Do NOT name specific premium amounts (they change annually and vary by individual).

2. Add HMO vs. PPO section:
   Simple table: HMO (lower premium, PCP required, referrals needed, local network) vs. PPO (higher premium, no PCP required, no referrals, larger network)

3. Add Special Needs Plans (SNPs) section:
   "Special Needs Plans (SNPs) for Chronic Conditions and Dual-Eligible Beneficiaries"
   - Chronic Condition SNPs (C-SNPs): designed for people with specific conditions like diabetes, cardiovascular disease, ESRD
   - Dual Eligible SNPs (D-SNPs): for people eligible for both Medicare and Medicaid — common in Miami-Dade
   - Institutional SNPs (I-SNPs): for residents of nursing facilities

4. Add FAQPage schema (3–5 pairs from existing content)

After: npx tsc --noEmit && npm run build

---

TASK E10 — Add Internal Links from /medicare Service Page (P1 — 45 min)

File: src/app/medicare/MedicareClient.tsx (or wherever the /medicare page content renders)

Add these internal links in appropriate content sections:

1. In Medicare Advantage section → link to /medicare-coverage/medicare-advantage-plans
   Anchor: "Learn about Medicare Advantage plans →"

2. In Medicare Supplement section → link to /medicare-coverage/medicare-supplement-plans-medigap
   Anchor: "Explore Medigap plan options →"

3. In enrollment/costs section → link to:
   - /tools/medicare-enrollment-calculator ("Calculate your enrollment window")
   - /tools/part-b-penalty-calculator ("Check your Part B penalty")

4. At bottom of page or in a "Serving South Florida" section:
   "We serve Medicare beneficiaries throughout [Medicare Broker Miami](/medicare-broker-miami), [Kendall](/medicare-broker-kendall), [Doral](/medicare-broker-doral), [Coral Gables](/medicare-broker-coral-gables), [Hialeah](/medicare-broker-hialeah), and all of South Florida."
   (Include Doral, Coral Gables, Hialeah links only if those Phase F pages are already live; otherwise use the pages that exist)

After: npx tsc --noEmit

---

TASK E11 — Add HowTo Schema to Turning 65 Enrollment Checklist Post (P2 — 45 min)

Find blog post slug "turning-65-in-florida-your-complete-medicare-enrollment-checklist" in blogPosts.ts.
Read the content to identify the checklist steps.

This post is a checklist — ideal for HowTo schema. However, HowTo schema is not natively supported through the faqs array mechanism. Options:
1. If the coverage page or blog post page.tsx supports additional JSON-LD injection, add HowTo schema there
2. Alternatively, verify if there's a mechanism for additional schema in BlogPostClient.tsx

Read the blog post page infrastructure and determine the best approach. The HowTo schema should describe "How to Enroll in Medicare When You Turn 65 in Florida" with steps matching the checklist items in the post content.

---

VERIFICATION STEPS:
1. npx tsc --noEmit (0 errors)
2. npm run build (all ~125 pages pass)
3. Google Rich Results Test: Test the blog post URLs to confirm FAQPage eligibility
4. View source of /medicare-coverage/medicare-supplement-plans-medigap — confirm comparison table exists and FAQPage schema is present
5. View source of /medicare-coverage/medicare-advantage-vs-medigap — confirm HowTo schema is present
6. /medicare page — confirm internal links to pillar guides and tools are present

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] Build passes
- [ ] All 5 blog posts have faqs arrays that match their HTML content
- [ ] /medicare-coverage/medicare-supplement-plans-medigap has comparison table + FAQPage schema
- [ ] /medicare-coverage/medicare-advantage-vs-medigap has HowTo + comparison table + FAQPage schema
- [ ] /medicare-coverage/medicare-advantage-plans has SNP section + FAQPage schema
- [ ] /medicare links to pillar guides and calculator tools
- [ ] No content changes to posts ranking top 10 (page-1 freeze rule honored)

COMMIT MESSAGE:
feat(seo/phase-e): FAQ schema for top blog posts + pillar page expansion

- Add faqs arrays to 5 highest-impression blog posts (enabling FAQPage rich results)
- Add Medigap plan comparison table to /medicare-coverage/medicare-supplement-plans-medigap
- Add HowTo schema and comparison table to /medicare-coverage/medicare-advantage-vs-medigap
- Add SNP section and comparison table to /medicare-coverage/medicare-advantage-plans
- Add internal links from /medicare to pillar guides and calculator tools
- Add HowTo schema to turning-65 enrollment checklist post

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

DO NOT:
- Add faqs that don't match actual content in the post HTML
- Change existing content on posts that are ranking in top 10 positions
- Add comparison tables with specific premium dollar amounts (use ranges from ranges or general descriptions)
- Touch next.config.ts, sitemap.ts, or Footer.tsx
- Create any new pages (all existing pages, just enhancing content)
```
