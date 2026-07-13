# Chief SEO Officer QA Review
## A&E Insurance Agency — Pre-Implementation Review
### Date: July 10, 2026

---

## Executive Assessment

This is a well-constructed 90-day implementation plan built on solid audit data. The strategic logic is sound: recover traffic from redirect and architecture failures before creating new content, then build outward from proven demand signals. The phased sequencing — technical fixes first, redirect architecture second, content recovery third — is correct and protects against the most dangerous scenario (new pages getting silently shadowed by catch-all redirects). The content quality standards documented throughout are appropriate for YMYL content, and the anti-doorway-page discipline in the local SEO plan is notably rigorous.

Confidence in overall plan quality: high. The plan was clearly built by someone who read the actual codebase and audit data rather than applying generic SEO templates. The per-task success criteria, rollback instructions, and CLAUDE.md citation discipline are unusually thorough for an implementation plan at this scope.

That said, four issues require resolution before Phase A begins. One involves duplicate work that would waste development time. One involves a significant discrepancy between the master plan and the phase G prompt that creates an ambiguity about which FAQ pages actually get built. One creates a maintainability problem that will degrade E-E-A-T accuracy over time. And one is a missing specification — the local-seo-plan.md promises city-level geo coordinates on location pages that the phase-f-prompt.md does not implement.

There are no blocking technical errors — no recommendations that would break routing, corrupt schema, or harm existing rankings. The plan protects existing page-1 content, respects the content pruning rules, and does not attempt to change published URLs. Those are the right instincts and they are consistently applied throughout all eight phase prompts.

---

## Technical Correctness Issues

### ISSUE TC-01 — HowTo Schema Duplicate: QW-08 and Phase B Task B7 (BLOCKING)

**Location:** `quick-wins.md` QW-08 and `phase-b-prompt.md` TASK B7

**Problem:** QW-08 (quick wins, pre-phase work) adds HowTo schema to the Medicare enrollment calculator at `src/app/tools/medicare-enrollment-calculator/page.tsx`. Phase B TASK B7 then adds WebApplication schema to all four calculator pages — and its phase-b-prompt.md explicitly also adds HowTo schema to the enrollment calculator with an identical four-step structure. If both are executed as written, HowTo schema will be added twice to the same file.

**Correction:** Remove QW-08 from quick-wins.md entirely. The enrollment calculator HowTo schema is fully handled by Phase B Task B7, which is more complete (includes both WebApplication + HowTo together). Alternatively, remove the HowTo addition from B7 and keep QW-08, but then QW-08 must be executed before Phase B runs. The cleanest solution: delete QW-08 and rely solely on B7.

---

### ISSUE TC-02 — Phase B Prompt Contains Contradictory Instructions (MEDIUM RISK)

**Location:** `phase-b-prompt.md` TASK B1-B6 section

**Problem:** The redirect replacement section contains a large commented code block that appears to show one approach (keeping the catch-all last after per-slug rules) and then contradicts itself by stating "the ONLY safe solution: explicit per-slug redirects for the non-page slugs, with NO catch-all for the parent route section." This contradiction appears in the same task block. The actual implementation instructions at the bottom of the section are correct, but an implementing Claude reading the prompt sequentially could be confused by the conflicting logic in the intermediate block.

**Verification from source code:** `next.config.ts` line 135-137 confirms the current catch-all redirects exist exactly as described. The correct implementation (explicit per-slug rules, no catch-all residual) is the right approach and matches Next.js routing behavior. The prompt's final instructions are accurate.

**Correction:** Remove the contradictory intermediate comment block from phase-b-prompt.md. The working implementation instructions at the bottom of TASK B1-B6 are correct and should stand alone.

---

### ISSUE TC-03 — Event Schema endDate Will Become Stale

**Location:** `phase-b-prompt.md` TASK B9, VideoObject/Event schema

**Problem:** The Event schema for the `/watch` webinar page hardcodes `"endDate": "2026-12-31"`. If the webinar runs into 2027 or beyond, this schema will become inaccurate. The plan does not flag this as a maintenance item requiring annual update.

**Correction:** Add a note to `docs/seo-performance-dashboard.md` monthly review protocol: "Update /watch Event schema endDate annually." Alternatively, omit endDate from the schema (it is not required for EventScheduled status) and only include startDate. A recurring webinar may be better modeled as an EventSeries.

---

### ISSUE TC-04 — AuthorBox Hardcodes Review Count

**Location:** `phase-h-prompt.md` TASK H6

**Problem:** The AuthorBox component template hardcodes `"★★★★★ 126 Google Reviews"` directly in the JSX. As reviews accumulate (the plan targets 150+ within 90 days), this will become inaccurate. The review count in LocalBusinessSchema.tsx has a manual update process (MANUAL-03), but the AuthorBox template creates a second hardcoded instance of the same data that will be forgotten.

**Correction:** Add a `REVIEW_COUNT` constant to `src/lib/constants.ts` and import it in both `LocalBusinessSchema.tsx` and the new `AuthorBox.tsx`. This ensures one update point for the review count. The AuthorBox prompt should be updated accordingly.

---

### ISSUE TC-05 — CLAUDE.md Documentation Contradicts sitemap.ts Implementation

**Location:** `CLAUDE.md` line about sitemap, `src/app/sitemap.ts`

**Problem (pre-existing):** CLAUDE.md states: "sitemap excludes /book and /resources/faq (no page.tsx there; only nested routes exist)." However, `sitemap.ts` lines 59-64 explicitly includes `faqEntries` — mapping all FAQ pages from the FAQS array. The implementation and the documentation contradict each other. Based on the code, FAQ pages ARE included in the sitemap. CLAUDE.md is wrong.

**Correction (pre-existing debt):** Update CLAUDE.md to state that /resources/faq pages ARE included via the FAQS array. Note: This does not affect the implementation plan's correctness — the plan correctly adds new FAQ pages to `faqs.ts` which automatically adds them to the sitemap. The documentation error is cosmetic.

---

### ISSUE TC-06 — Local Page City-Level Geo Coordinates Specified but Not Implemented

**Location:** `local-seo-plan.md` vs. `phase-f-prompt.md`

**Problem:** The local-seo-plan.md specifies: "Each new local page should include city-level LocalBusiness schema with city-specific geo coordinates, narrowed areaServed to that city, and city-specific name variation." However, phase-f-prompt.md TASK F1-F4 instructs implementing agents to use LocalBusiness referencing `@id: "https://www.aeinsurancefl.com/#organization"` — the existing organization entity — without city-level geo coordinates. The phase prompt doesn't implement the city-level schema the local-seo-plan.md specified.

**Correction:** Either update phase-f-prompt.md to include city-specific LocalBusiness schema nodes with geo coordinates (Doral: approx 25.8195°N 80.3559°W; Coral Gables: 25.7215°N 80.2684°W; Hialeah: 25.8576°N 80.2781°W; Homestead: 25.4687°N 80.4776°W), or explicitly remove this requirement from local-seo-plan.md. The city-level geo coordinates add local SEO signal and are worth implementing — this is a genuine gap.

---

### ISSUE TC-07 — Phase G Prompt G10 Is Missing from Phase G Prompt

**Location:** `master-implementation-plan.md` Phase G table, `phase-g-prompt.md`

**Problem:** Master plan task G10 ("Add internal links from IRMAA calculator to irmaa-appeal-guide, 0.25h") exists in the master plan table but does not appear in phase-g-prompt.md. The phase prompt goes from G9 (IRMAA appeal blog post) to G11 (mid-article CTAs), skipping G10 entirely.

**Correction:** Add a G10 task to phase-g-prompt.md: "In `src/app/tools/irmaa-calculator/` (find the IrmaaClient.tsx or similar), add a contextual link to `/blogs/how-to-appeal-irmaa-medicare-surcharge`. Suggested anchor: 'Learn how to appeal your IRMAA surcharge.' Estimated time: 15 minutes." This is a low-effort, high-value internal linking task.

---

## Priority Corrections

### PRIORITY-01 — QW-08 Listed as MEDIUM Priority Despite Being Superseded by B7

**Current priority in quick-wins.md:** MEDIUM / ⭐⭐⭐
**Recommended change:** Remove entirely (resolved by TC-01 above).

---

### PRIORITY-02 — F6 Nav Change Priority Discrepancy Between Master and Phase Prompt

**Master plan F6:** P2 — "Update Header.tsx navigation: elevate Medicare, rename Services → Insurance, rename Learn → Resources, add Free Workshop"
**Phase-f-prompt.md F6:** P2 — "Add Service Areas Dropdown" (a much more modest change: just a Locations link or dropdown)

**The master plan and phase prompt describe different tasks with the same ID.** This is not a priority issue — it is a scope discrepancy that needs resolution before Phase F runs.

**Recommendation:** The phase-f-prompt.md approach (minimal Locations link addition only) is the better choice. The full nav restructure described in the master plan introduces MEDIUM risk across every page on the site and should be treated as a separate project with its own QA gate. Accept the phase-f-prompt.md scope as correct, and update the master plan F6 description to match.

---

## Dependency Issues

No critical dependency sequence errors were found. The B→C→D sequencing is correctly enforced. The plan's dependency on Phase B being complete before Phase C/D pages are created is properly documented in both the master plan and the phase prompts, including verification steps (read next.config.ts before creating any pages).

One sequencing note: The master plan schedules H2 (Medicare for non-citizens blog post) as dependent on G1 (immigrants FAQ cross-link). In the master plan, G1 is `/resources/faq/medicare-for-immigrants-green-card-holders`. However, the phase-g-prompt.md implements different FAQ pages as G1-G5. If the phase G prompt is executed as written, the G1 prerequisite for H2 will not exist at the time H2 is written. See CONTENT-01 below for full explanation.

---

## Duplicate Work Identified

### DUPLICATE-01 — HowTo Schema on Enrollment Calculator
See TC-01. QW-08 and Phase B Task B7 both add HowTo schema to the enrollment calculator. Remove QW-08.

### DUPLICATE-02 — Footer Local Page Links Touched Three Times

Quick Win QW-02 adds 4 local pages to Footer Quick Links. Phase A TASK A3 adds those same 4 pages plus `/health-insurance-broker-miami`. Phase F TASK F5 adds 4 more new city pages.

This is not a bug — the three touches are additive and occur at different phases. But the implementing agent for Phase A must read QW-02's output before executing A3, to avoid adding duplicate entries to Footer.tsx. Phase A prompt should add a prerequisite check: "If QW-02 is already done, do not re-add those four links — only add /health-insurance-broker-miami if it is not already there."

---

## Rejected Recommendations (QA Layer)

No new recommendations require outright rejection. The rejected-recommendations.md document correctly handles all the major edge cases: bilingual H1 rejection, Spanish content rejection, exit popup rejection, Calendly vs GHL scheduling, Wikipedia stub, QAPage schema. These decisions are sound.

One item to flag that was not in the rejected list:

### NEW REJECTION QA-01 — "Serving 3,000+ clients" in AuthorBox Without a Source

The AuthorBox template in phase-h-prompt.md states "trusted advisor to 3,000+ South Florida Medicare beneficiaries." This claim appears already in LocalBusinessSchema.tsx description and the CLAUDE.md characterizes it as established fact, so Steve has presumably validated it. However, on YMYL E-E-A-T grounds, including this claim without a source or verification mechanism creates audit risk if the number becomes stale or is ever scrutinized. It is not recommended to remove the claim — it is valuable — but it should be sourced to a verifiable internal figure (e.g., GHL contact count) and reviewed annually.

---

## Brand & UX Concerns

### UX-01 — Mid-Article CTA HTML String Injection Creates Maintenance Fragility

Phase G TASK G11 injects `<div class="blog-cta-box">` HTML strings directly into blog post content fields in blogPosts.ts. This approach works but creates global update friction: if the CTA copy, design, or link ever needs to change, every content field must be edited individually. For 10+ posts, this is significant technical debt.

Phase H TASK H5 creates a BlogCTA React component that would handle this more maintainably for new posts. The plan should explicitly flag that the G11 HTML string approach is a one-time implementation and that all future CTAs should use the BlogCTA component. A future refactor task should be added to the backlog.

### UX-02 — The G1 immigrants FAQ page has a Scope Disclaimer Gap

The blog post H2 ("Medicare for Non-Citizens") correctly warns against attracting people who don't qualify. But the content outline's H1 "Medicare for Non-U.S. Citizens in South Florida: Eligibility and How to Enroll" may attract tourists, visa holders (J-1, H-1B, etc.), and undocumented immigrants. The first sentence of the intro should immediately scope the audience: "This guide is for lawful permanent residents (green card holders) and naturalized citizens who have questions about Medicare eligibility." This prevents a 64-year-old tourist from reading three paragraphs before realizing the content doesn't apply to them — a frustration signal Google measures.

### UX-03 — Retirement Income Planning Page (C3) Has Compliance Exposure

Phase C TASK C3 creates `/retirement/retirement-income-planning` covering annuities, tax-efficient withdrawals, and income sequencing. This is financial planning territory beyond the scope of an insurance broker's licensed activities in Florida. The content must be carefully scoped to "educational overview only" with disclaimers that Steve is a licensed insurance broker, not a financial advisor, CPA, or tax professional. The phase C prompt does not include this disclaimer requirement. Add it: every page in Phase C that touches income planning, tax, or annuities must include "This information is for educational purposes only. Consult a licensed financial advisor or CPA for personalized retirement income planning advice."

---

## E-E-A-T Assessment

The plan makes strong moves on E-E-A-T:
- NPN identifier in schema (Phase A) — excellent, this is the most verifiable credential signal
- ProfilePage schema on /about/steve (Phase A) — correct approach
- AuthorBox with credentials on every blog post (Phase H) — high-value for YMYL
- DFS license URL as sameAs (Phase A) — government source cross-reference, good

**Gaps not addressed in the plan:**

**EEAT-GAP-01 — No dateModified update strategy for existing content**
CLAUDE.md notes that `updated` field in blogPosts.ts "renders 'Updated {date}' and becomes schema dateModified." The plan adds content to several existing blog posts (E7, E8, E9) but does not explicitly instruct the implementing agent to set the `updated` date field when substantively expanding a post. For YMYL content, showing Google that posts are actively maintained is a trust signal. Phase E prompt should include: "For each pillar page receiving additions, set or update the `updated` date field to the current implementation date."

**EEAT-GAP-02 — No fact-check citation standard for new service pages**
The blog posts reference `ANNUAL_UPDATE.md` for Medicare figures. The new service pages (retirement income planning, final expense, long-term care) require their own fact-checking against CMS/SSA sources for any figures they include. The phase C and D prompts reference ANNUAL_UPDATE.md for Medicare premiums but don't address long-term care cost ranges, annuity descriptions, or life insurance industry data that would appear in those pages. Add a sentence to Phase C and D prompts: "All insurance product claim figures (premium ranges, benefit amounts, eligibility thresholds) must cite either the carrier (as 'according to typical carrier offerings' without a specific citation) or a non-carrier source such as LIMRA, ACLI, or Florida OIR data. Do not publish uncited industry averages."

**EEAT-GAP-03 — Steve's published book ("Medicare Decoded") is underutilized in schema**
The Plan entity or a CreativeWork schema linked from the Person entity could explicitly declare the book as a credential. The current Person schema uses `hasCredential` for the insurance license only. Adding the book as a `CreativeWork` with `author: { "@id": "#steve-germain" }` would strengthen the E-E-A-T entity graph. This is a low-effort addition for Phase A that is worth adding.

---

## Local SEO Integrity Check

The location page strategy is genuinely differentiated. Each page has a distinct angle:
- Doral: IRMAA + bilingual first-generation Medicare beneficiaries
- Coral Gables: Medigap preference for affluent retirees, no network restrictions
- Hialeah: D-SNPs, Spanish service, doctor-continuity for long-standing Cuban-American community
- Homestead: Extra Help/LIS, cost-assistance first frame

None of these are doorway pages. Each has a substantive demographic reason for the content differentiation. The FAQ questions are city-specific, not generic Medicare questions with city names swapped. This section of the plan passes the doorway page test.

**LOCAL-01 — City Geo Coordinates Missing from Phase F Implementation**
See TC-06. The local-seo-plan.md requires city-level geo coordinates; phase-f-prompt.md does not implement them. This is a concrete gap in the local schema implementation.

**LOCAL-02 — LocalBusiness @id Reuse Creates Entity Ambiguity**
The phase-f-prompt.md instructs local pages to use `LocalBusiness referencing @id: "https://www.aeinsurancefl.com/#organization"`. This correctly attributes all city pages to the same business entity. However, using the exact same @id without city-specific schema nodes means Google sees one LocalBusiness entity serving all these cities — which is correct for a service-area business, but provides weaker local pack signals than distinct city-specific schema nodes. The local-seo-plan.md's intent (city-specific schema) would be stronger. This is a missed opportunity rather than an error.

**LOCAL-03 — South Florida Hub Page (F9) Should Be Updated BEFORE City Pages Go Live**
The dependency map shows city pages (F1-F4) created in Weeks 7-8, with improvements to existing pages (F7-F9) also in Week 8. However, for maximum crawlability benefit, the south-florida hub page improvement (F9 — adding "Cities We Serve" section with links) should be done at the same time as or immediately after the city pages go live, not at the end of the phase. The south-florida page is the most authoritative existing local page and should link to the new pages as quickly as possible. This is a sequencing improvement, not a blocking issue.

**LOCAL-04 — GBP Strategy and Website Strategy Are Aligned**
The GBP recommendations in MANUAL-07 correctly align with the website strategy. Adding service entries for Medicare Advantage, Medigap, Part D, and Life Insurance to GBP mirrors the website's service architecture. The Google Posts recommendation aligns with blog content cadence. No issues.

---

## Content Quality Assessment

**CONTENT-01 — Critical Discrepancy: Master Plan G1-G5 vs. Phase G Prompt G1-G5**

This is the most significant content planning issue in the entire document set and must be resolved before Phase G begins.

**Master plan G1-G5 FAQ topics:**
- G1: `/resources/faq/medicare-for-immigrants-green-card-holders`
- G2: `/resources/faq/medicare-special-enrollment-period`
- G3: `/resources/faq/medicare-and-va-benefits`
- G4: `/resources/faq/medicare-dual-eligible-dsnp`
- G5: `/resources/faq/what-medicare-does-not-cover`

**Phase G prompt G1-G5 FAQ topics:**
- G1: Annual Enrollment Period (`what-is-the-medicare-annual-enrollment-period`)
- G2: IRMAA (`how-does-irmaa-work`)
- G3: Part B penalty (`what-is-the-medicare-part-b-late-enrollment-penalty`)
- G4: Special Enrollment Period (`what-is-a-medicare-special-enrollment-period`)
- G5: Medicare + employer insurance (`how-does-medicare-work-with-employer-insurance`)

These are entirely different topic sets. The phase G prompt FAQ pages are more foundational (enrollment mechanics, penalties, IRMAA), while the master plan FAQ pages are more audience-specific (immigrants, VA, dual-eligible). Both sets have merit.

**Additional dependency created:** Master plan shows H2 (Medicare for non-citizens blog post) as depending on G1 (immigrants FAQ cross-link). If the phase G prompt runs without building the immigrants FAQ, H2's cross-link dependency in the master plan will not be satisfied. The H2 prompt refers to linking to the immigrants FAQ page — but if that FAQ page doesn't exist, H2 must link to something else.

**Resolution required before Phase G:** Steve must decide which FAQ set to build. Recommendation: Build the Phase G prompt set (G1-G5: AEP, IRMAA, Part B penalty, SEP, employer insurance). These are more foundational and have higher search volume. Then treat the master plan topics (immigrants, VA, dual-eligible, D-SNPs, what Medicare doesn't cover) as a Phase G extension or Phase 2 priority. Update the master plan to reflect this decision. Remove the H2 dependency on G1 (immigrants FAQ) from the master plan, or write H2 to link to the `/resources/faq/medicare-for-immigrants-green-card-holders` FAQ as a planned page with a note that the cross-link should be added when that FAQ page is built.

---

**CONTENT-02 — Snowbird Guide (H1) Differentiation From Existing Post**

The content-roadmap.md acknowledges that a snowbird blog post already exists (`which-medicare-option-works-best-for-snowbirds`). The new H1 guide is intended to be the comprehensive pillar version. The phase-h-prompt.md for H1 correctly notes the existing post and suggests acknowledging it with a cross-link.

However, the new guide (H1 at `/blogs/florida-snowbird-medicare-guide`) must be substantively distinct from the existing post to avoid cannibalization. The existing post's content is not reviewed in the available documents. Before writing H1, the implementing agent must read the existing snowbird post and ensure the new guide goes substantially deeper on: carrier PPO network geography for snowbirds, Part D multi-state pharmacy considerations, and the Annual Enrollment Period decision calendar for snowbirds. The phase-h-prompt.md outline covers these topics adequately — but the implementing agent should be explicitly required to read the existing post first.

Add to phase-h-prompt.md TASK H1: "Step 0: Read the existing blog post at slug `which-medicare-option-works-best-for-snowbirds` in blogPosts.ts. Note all topics it covers. The new guide must cover the same topics in substantially more depth AND cover additional topics not in the existing post. Do not copy phrases or structure from the existing post."

---

**CONTENT-03 — Medigap Plan Comparison Table Accuracy Warning**

Phase E TASK E7 adds a Medigap plan comparison table (Plans A through N) to the pillar page. The phase prompt provides a pre-populated table with coverage details. The note "SOURCE VERIFICATION: verify column values match Medicare.gov" is correct and important. However, the prompt's pre-populated table contains one notable omission: it does not include Plan G High-Deductible (Plan G-HD), which is a sold and relevant option in Florida. If the implementing agent copies the table as written without checking Medicare.gov, Plan G-HD will be missing from a page that is supposed to be the comprehensive Medigap comparison resource.

Add to phase-e-prompt.md E7: "After generating the comparison table, verify against Medicare.gov's current Medigap plan comparison tool that all currently sold plan types are included. As of 2026, Plan G-HD (High-Deductible Plan G) is sold and should appear in the table. Plans C and F are grandfathered — note this in the table caption as the prompt already specifies."

---

## AI Search Readiness Assessment

The AI search strategy is reasonable and appropriately scoped. The Speakable schema implementation (H3) uses the correct structural approach — pointing to CSS selectors that match actual page content. The plan's approach to entity coverage through schema, FAQPage rich results, and structured comparison tables positions the site well for AI Overview inclusion.

**AI-01 — Speakable cssSelector Is Speculative**

Phase H TASK H3 lists suggested CSS selectors (`.faq-answer`, `.faq-question`, `h1`) for Speakable schema. These selectors are guesses — the actual class names depend on how the FAQ page JSX renders. The prompt correctly instructs the agent to read the actual rendered HTML before using these selectors. This is the right approach. No change needed.

**AI-02 — Entity Coverage for "Steve Germain" as AI-Citable Expert**

The plan strengthens Steve's schema entity (NPN, ProfilePage, DFS sameAs, AuthorBox) but does not address entity mentions in third-party sources. For AI Overview and AI search citation eligibility, Google's systems rely on cross-domain entity corroboration. The plan has no recommendation for seeking mentions in local media (Miami Herald business section, Sun Sentinel, local Medicare advocacy publications) or industry sources (NAHU, NAIFA member directories, state licensing lookups). This is a gap that would compound the schema investments over 6-24 months but is not addressable within 90 days. Flag for Phase 2.

**AI-03 — FAQPage Schema Coverage for AI Overview**

The plan correctly prioritizes FAQPage schema on: top 5 blog posts (Phase E), all new FAQ pages (Phase G), all new local pages (Phase F), and all new subpages (Phases C-D). The coverage is comprehensive. The FAQ content itself (Q&A pairs written in the prompts) is appropriately structured for AI system processing — direct answers, plain text, no HTML in answer fields.

---

## Maintainability Concerns

### MAINT-01 — Blog CTA HTML Strings Are Not Globally Updateable

Phase G TASK G11 injects HTML strings into individual blog post content fields. If the CTA button text, design, or destination URL ever changes, every content field must be updated manually. This creates technical debt across 10+ posts. See UX-01. Severity: medium. The BlogCTA React component in H5 should be the forward-looking solution; G11's HTML approach should be explicitly labeled as legacy in code comments.

### MAINT-02 — Event Schema on /watch Page Requires Annual Update

The endDate "2026-12-31" will become stale. Not flagged in the plan's maintenance protocol. Add to annual SEO review checklist: update /watch page Event schema dates.

### MAINT-03 — Review Count Exists in Two Places Without Sync Mechanism

LocalBusinessSchema.tsx has `reviewCount: "126"` with a manual update process (MANUAL-03). Phase H creates AuthorBox.tsx with hardcoded "126 Google Reviews." Two files, one fact, no sync. See TC-04. Resolve by creating a `REVIEW_COUNT` constant in constants.ts.

### MAINT-04 — IRMAA Bracket Figures in FAQ Pages Require Annual November Update

Phase G TASK G2 creates an IRMAA FAQ page that includes bracket thresholds and surcharge amounts (filled in from ANNUAL_UPDATE.md). This page, once created, becomes a YMYL annual-maintenance obligation alongside the existing calculator pages. ANNUAL_UPDATE.md already captures this workflow for the calculators. Add the new IRMAA FAQ page and Medigap Plan G 2026 blog post to ANNUAL_UPDATE.md's update checklist when those pages are created.

### MAINT-05 — 116-Hour Plan at 13 Hours/Week Is Achievable but Has No Buffer

The plan's total estimated time is 116 hours over 90 days. This leaves no buffer for:
- Debugging TypeScript issues on complex pages (retirement income planning, permanent life insurance)
- Time spent reading existing code before making changes (each prompt requires 30-60 min of reading)
- Steve's review cycles before certain deployments
- Any content fact-checking that reveals figures needing correction

A realistic buffer is 15-20%. This makes the plan a 130-135 hour effort. At 13 hours/week, that is 10-10.5 weeks rather than 9. Phase H items are the most likely to slip into Week 13-14. Plan for this rather than be surprised by it.

---

## Five Strategic Questions — Answered

---

### Question 1: What will most limit A&E from becoming the dominant Medicare website in South Florida?

**The specific gap: No backlink acquisition strategy.**

This plan is entirely on-site. At the end of 90 days, A&E will have better technical architecture, richer schema, more content, and stronger E-E-A-T signals than any local competitor. What it will not have is meaningfully more referring domains than it does today.

For local commercial queries ("medicare broker miami," "medicare advantage plans miami"), Google's ranking algorithm weights domain authority and backlinks heavily — not just technical signals. The site's current backlink profile is not documented in the available audit materials, which is itself a problem. South Florida Insurance Brokers (SFIB) has been operating since 2002; their domain has two decades of link accumulation from local directories, broker associations, insurance directories, and possibly local news coverage. A&E's domain, while high-quality, is newer and its content depth advantage does not directly translate into link equity.

The 90-day expectation set in the strategy document ("movement of the top three blog posts from positions 18–37 to positions 5–15") is achievable for informational queries where content quality drives ranking. For commercial local queries, positions 5-15 require link equity that content quality alone cannot overcome in 90 days.

**What it would take to close it:** A targeted off-site strategy running parallel to this plan. Specifically:
1. Submission to all Medicare broker directories (Medicare.gov's "Find a Local Medicare Agent" finder, NAHU member directory, Florida Association of Insurance Agents directory, Better Business Bureau profile)
2. Proactive outreach to South Florida retirement communities, HOAs, and senior centers for backlinks to the snowbird guide (H1) and immigration guide (H2)
3. One local press pitch per month to the Miami Herald's Money/Business section or local Spanish-language business press (noting the "seguros medicos en miami" position 1 query — there is a bilingual angle worth pitching)
4. Steve's LinkedIn profile linking to the site and specific content pieces

None of this requires code. It requires 3-5 hours per month of outreach work by Steve or an assistant. It is the difference between ranking 8-12 for competitive local queries in 12 months versus ranking 3-6.

---

### Question 2: Five highest-ROI improvements not currently in the plan

**ROI-1: CLAUDE.md content-as-data pattern should capture `reviewCount` as a typed constant.**
What: Create `REVIEW_COUNT` in constants.ts. Update LocalBusinessSchema, AuthorBox (H6), and any other hardcoded instance.
Why high ROI: Every month without this, review count schema drifts further from reality. Stale AggregateRating data is an E-E-A-T trust signal problem. Schema accuracy matters to Google's quality raters.
Effort: 30 minutes.
Why omitted: Probably not noticed because the two instances are in different files written at different times.

**ROI-2: A content update protocol for blog posts that slip below page 1.**
What: A documented process for identifying blog posts that have been ranking page 1 and subsequently fall to page 2-3, with a reactivation decision framework (update vs. leave vs. redirect).
Why high ROI: The "page-1 freeze rule" protects current page-1 rankings from being inadvertently harmed. But it does nothing for posts that were page 1 and have since fallen. The site's 5,356 tracked queries likely include several such posts. Recovering one fallen post from position 15-25 back to position 5-10 can generate more incremental clicks than creating an entirely new page.
Effort: 2 hours to create the protocol; ongoing monitoring.
Why omitted: The plan focuses on creating new content and fixing architecture, not on optimizing existing mid-tier performers.

**ROI-3: Google Business Profile monthly posting cadence.**
What: A simple system for Steve or an assistant to publish one GBP post per month (e.g., linking to each new blog post as it publishes).
Why high ROI: GBP posts are a free local pack signal. Competitors who post regularly maintain higher GBP visibility. The plan mentions it in MANUAL-07 but doesn't create a calendar or system.
Effort: 30 minutes monthly setup, then 30 minutes per post.
Why omitted: It's in the manual actions but not systematized.

**ROI-4: Email capture on high-intent content pages.**
What: A simple newsletter opt-in at the bottom of the top-performing blog posts and calculator pages. Something like: "Get Medicare updates delivered to your inbox — plan changes, Part B premium announcements, and enrollment tips from Steve Germain."
Why high ROI: With 261 organic clicks per month (and growing), A&E is generating 3,000+ annual organic visitors who leave without any retention mechanism. Even a 5% email capture rate generates 150+ subscribers per year — people who have demonstrated Medicare purchase intent. These subscribers can be nurtured through GoHighLevel into consultations.
Effort: 2-3 hours to implement; requires Steve's GoHighLevel email list setup (30 minutes).
Why omitted: The plan focuses on acquisition (getting visitors) but not retention (keeping them in the funnel). It is out of scope for a pure SEO program, but the highest-ROI work often crosses these boundaries.

**ROI-5: A structured internal linking audit of the existing 70 blog posts.**
What: A systematic review of the 70 existing blog posts to ensure each has at least 2 internal links to relevant calculator tools, service pages, or newly created content. Many of the existing posts were migrated from Webflow and likely have few or no internal links to the tools and service pages built since migration.
Why high ROI: Internal linking is the primary mechanism for distributing page authority to new pages, reducing orphan page status, and signaling topical relationships to Google. With 70 posts and 4 calculator tools and 7 coverage pillar pages, the internal linking graph is likely sparse. Phase E addresses the top 5 posts (E6) and pillar pages (E10), but the remaining 65 posts are untouched.
Effort: 4-6 hours for systematic review and linking across all 70 posts.
Why omitted: The plan addresses high-impression posts only. The long tail of 65 posts likely has hundreds of missed internal linking opportunities.

---

### Question 3: 100 development hours — allocation

If only 100 hours are available over 90 days, these are the trade-offs:

| Phase | Full Plan | 100-Hour Plan | Hours Cut | Rationale |
|---|---|---|---|---|
| Quick Wins (modified) | 2.5h | 2.0h | 0.5h | Remove QW-08 (duplicate of B7) |
| Phase A | 3h | 3h | 0 | All tasks are high-ROI |
| Phase B | 6h | 6h | 0 | Architectural prerequisite; cannot cut |
| Phase C | 15.5h | 15.5h | 0 | Highest single-session ROI in the plan (3,615 impressions) |
| Phase D | 14h | 14h | 0 | 1,751 impressions; already proven demand |
| Phase E | 10.75h | 6h | 4.75h | Keep E1-E6 (FAQ schema + internal links). Cut E7-E9 (pillar page expansion — still valuable but not time-critical). Keep E10 (/medicare internal links). Cut E11 (HowTo on enrollment checklist — very low impact). |
| Phase F | 24.5h | 18h | 6.5h | Keep F1-F5 (new city pages + footer update). Cut F6 (nav change — medium risk, low urgency). Keep F7-F9 (improve existing local pages — internal linking priority). Cut F10 (Fort Lauderdale — Broward expansion is Phase 2 work). |
| Phase G | 23.25h | 14h | 9.25h | Keep G1-G5 (new FAQ pages). Keep G7-G8 (high-value commercial blog posts). Cut G9 (IRMAA appeal guide — useful but not commercial). Cut G11 (mid-article CTAs — move to Phase H where the component is built). |
| Phase H | 19h | 21.5h | +2.5h | Expand slightly. Keep H1 (snowbird guide). Keep H5-H6 (BlogCTA + AuthorBox — E-E-A-T priority). Keep H7 (LCP fix). Cut H2 (non-citizens — research-intensive, narrow audience). Cut H3 (Speakable — nice but not ranking-driving). Cut H4 (comparison tables — Phase E expansion covers key ones). |
| **Total** | **~118h** | **~100h** | | |

**What to cut and why:**

E7-E9 (pillar page expansion) are cut because the pillar pages will rank better once the overall content architecture is complete — FAQ schema (E1-E5), new FAQ pages (G1-G5), and improved internal linking (E10, F7-F9) will lift the whole cluster. Expanding individual pillar pages can happen in Phase 2 once the structural improvements have had 60 days to take effect and GSC data reveals which pillar pages moved and which didn't.

F10 (Fort Lauderdale) is cut because Miami-Dade isn't yet dominated. Expanding to Broward before owning Miami-Dade dilutes the local authority signal.

G9 (IRMAA appeal guide) is cut because the IRMAA calculator already exists, the IRMAA FAQ (G2) will be created, and the commercial intent for "how to appeal irmaa" is lower than for plan comparison queries. This post has no replacement — just defer.

H2 (non-citizens guide) is cut because it requires careful legal accuracy review, has a narrow target audience, and the FAQ page for immigrants (if built as a future task) will cover the core query need. H2 can move to Phase 2.

---

### Question 4: Recommendations producing measurable rankings within 90 days

**Fast-moving items are rare. Here are the genuine ones:**

**B2-B6 + C1 (catch-all replacement + retirement planning tools page): HIGH CONFIDENCE, 30-60 days.**
Mechanism: The `/retirement/retirement-planning-tools` URL already has 3,615 impressions at position 8. Google has already decided this URL is relevant for retirement planning tool queries. Creating the actual page at this URL and letting Google discover it via GSC URL submission (MANUAL-02) will convert existing impressions into clicks. This is recovery, not acquisition — the ranking already exists. Expected timeline: 2-4 weeks after indexing for GSC to begin counting clicks. This is the highest-confidence near-term win in the plan.

**QW-04 (verify and fix canonical URLs for /blogs/): HIGH CONFIDENCE, 30-90 days.**
Mechanism: Google is currently indexing `/blog/` redirect URLs for the top blog posts. The `/blogs/` canonical versions have near-zero GSC presence. Submitting the canonical URLs to URL Inspection (MANUAL-02) and ensuring absolute canonical tags forces Google to reconsider which URL to index. Once Google switches attribution to the `/blogs/` version, those 4,156 + 1,992 + 1,498 impressions will suddenly be on clickable URLs. The timeline is uncertain (1-3 months is typical for canonical consolidation) but this is the highest-impression recovery opportunity on the site.

**E1-E5 (FAQPage schema on top 5 blog posts): MEDIUM CONFIDENCE, 30-60 days.**
Mechanism: FAQPage rich results are typically processed within weeks of Google recrawling the page. For posts ranking position 10-25, a FAQ rich result in SERPs increases visual real estate and can lift CTR by 20-40% even without a position change. For the top blog post (4,156 impressions, 0 clicks, position 18), even a 0.5% CTR improvement is 20+ incremental monthly clicks. This is not ranking improvement — it is CTR improvement on existing rankings.

**A1 (remove Spanish from WebSite inLanguage): LOW CONFIDENCE for direct ranking, NO TIME LIMIT.**
Mechanism: Schema accuracy is a background trust signal. Google doesn't reward you for fixing it immediately — it simply stops penalizing language classification confusion. The effect may be too diffuse to measure in 90 days. Do it anyway because it's 10 minutes and it's wrong.

**F1-F4 (new local landing pages): LOW CONFIDENCE within 90 days.**
New local pages typically take 6-12 months to rank competitively. However, the local pack rankings for "medicare broker hialeah" or "medicare broker coral gables" may be relatively uncompetitive — if no competitor has a dedicated page for these cities, A&E could rank within 60-90 days of indexing. This is a possibility, not a certainty.

---

### Question 5: Long-term investments (6-24 months)

**H6 (AuthorBox on every blog post):** This is an E-E-A-T signal accumulation play. Google's quality raters use the E-E-A-T framework to evaluate pages over time. An AuthorBox with Steve's credentials, NPN, and review count on every YMYL blog post contributes to a pattern of author-verified content that builds over months of re-crawling. The impact on individual rankings is not measurable in 90 days, but it compounds: as more posts get the author signal and more reviews accumulate, Steve's entity authority increases across all content.

**The review acquisition campaign (H10, MANUAL-06):** Going from 126 to 150+ reviews is valuable for local pack rankings, but Google's local pack ranking algorithm weights review recency and velocity — meaning the reviews need to keep coming, not just reach a threshold. The 90-day campaign starts this compounding flywheel. The actual ranking benefit from reviews accumulates over 6-18 months as the review count grows and signals sustained client satisfaction.

**F1-F4 (new local landing pages for Doral, Coral Gables, Hialeah, Homestead):** As noted above, new local pages typically take 6-12 months to rank. But they do rank, and once they do, they generate highly qualified local leads. This content investment pays dividends over 2-3 years, not 90 days. Build them now so the clock starts.

**G7-G8 (commercial blog posts: Best Medicare Advantage Miami 2026, Medigap Plan G Florida 2026):** Commercial intent blog posts for locally-competitive insurance queries take 6-18 months to reach positions 1-5. These posts will likely rank in the 15-35 range within 90 days as Google indexes them, but won't generate meaningful commercial traffic until they reach position 8 or above. The 2026 versions will also need to be updated to 2027 versions next year — establishing the annual publication pattern now creates a sustainable traffic asset.

**EEAT-GAP-03 / CreativeWork schema for "Medicare Decoded":** If added (Phase A or beyond), Google's entity graph will over time begin associating Steve with the authored book as a signal of domain expertise. This takes many crawl cycles and months to propagate through Google's Knowledge Graph. Low immediate impact; meaningful at the 12-24 month horizon.

---

## Final Verdict

**GO WITH MODIFICATIONS.**

The plan is implementation-ready after the following resolutions:

### Required Before Phase A Begins

1. **Delete QW-08** from quick-wins.md. The HowTo schema for the enrollment calculator is handled in Phase B Task B7. Executing QW-08 wastes time and creates a duplicate schema implementation.

2. **Create `REVIEW_COUNT` constant in constants.ts.** Update LocalBusinessSchema.tsx to use it (line 78), and update the AuthorBox template in phase-h-prompt.md to import it rather than hardcoding "126 Google Reviews."

### Required Before Phase G Begins

3. **Resolve the G1-G5 FAQ topic discrepancy.** Decide whether to build the phase-g-prompt.md set (AEP, IRMAA, penalties, SEP, employer insurance) or the master-plan set (immigrants, VA, dual-eligible, D-SNPs, what Medicare doesn't cover). Recommended: Execute the phase-g-prompt.md set as written (more foundational, higher search volume), defer the master plan topics to Phase 2, and remove the H2 dependency on the immigrants FAQ from the master plan. Update the master plan G1-G5 table to match the phase-g-prompt.md topics.

4. **Add H2 TASK H2 prerequisite check** to phase-h-prompt.md: Before writing the non-citizens blog post, verify whether `/resources/faq/medicare-for-immigrants-green-card-holders` exists. If it exists (built in Phase 2), link to it. If not, do not create a dead cross-link.

### Required Before Phase F Begins

5. **Add city-level geo coordinates to phase-f-prompt.md.** For each of the four new location pages, add a city-specific LocalBusiness schema node with correct geo coordinates alongside the organization @id reference. Coordinates: Doral (25.8195, -80.3559), Coral Gables (25.7215, -80.2684), Hialeah (25.8576, -80.2781), Homestead (25.4687, -80.4776).

6. **Clarify F6 scope in master plan.** Update the master plan F6 description to match what phase-f-prompt.md actually implements (add a "Locations" nav link, not a comprehensive nav restructure). A full nav restructure is a separate project requiring its own QA cycle.

### Maintenance Items to Add Immediately

7. **Add to `docs/seo-performance-dashboard.md` annual review protocol:** Update /watch Event schema endDate each January. Update IRMAA FAQ page and Medigap Plan G 2026 blog post each November alongside calculator updates.

8. **Add to Phase C prompt disclaimer requirement:** All pages covering retirement income planning, annuities, or tax strategies must include: "This information is for educational purposes only. Consult a licensed financial advisor or CPA for personalized retirement income planning advice."

9. **Add to Phase E prompt** (for E7-E9): Set the `updated` date field in medicareCoveragePosts.ts for each pillar page that receives content additions.

---

**Overall confidence score: 8/10**

The plan loses 2 points for the G1-G5 topic discrepancy (which requires a decision before Phase G begins and affects H2's cross-linking strategy) and for the absence of an off-site link acquisition strategy (the single largest gap between "good SEO plan" and "South Florida Medicare dominance"). The core technical architecture is sound, the content quality standards are appropriate for YMYL, and the sequencing protects existing rankings while recovering proven demand. Execute with the modifications above.

---

*QA review prepared July 10, 2026. Reviewing officer: Chief SEO Officer. Next review gate: Week 4 checkpoint (July 28, 2026) — at which point GSC indexing data for Phase A/B fixes should be visible and the G1-G5 FAQ topic decision should be confirmed.*
