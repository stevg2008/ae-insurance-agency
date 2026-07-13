# Phase H — AI Search Optimization & Conversion Rate Optimization
## Self-Contained Claude Code Prompt

---

```
You are implementing Phase H of the A&E Insurance Agency SEO plan. This is the final phase: AI search optimization, two specialized audience guides, Speakable schema, AuthorBox and BlogCTA components, LCP fix for the hero image, carrier logos, and a review acquisition campaign kickoff.

PROJECT CONTEXT:
- Website: https://www.aeinsurancefl.com — A&E Insurance Agency, Miami FL Medicare broker
- Founder: Steve Germain, NPN 19921707, 3000+ clients, 126 Google reviews, BBB A+ rated
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, src/ directory
- CLAUDE.md is the source of truth for all conventions

BUSINESS RULES:
- This is the final phase — do NOT go back and change content from Phases A–G
- Speakable schema must point to content sections that actually exist on the page
- AuthorBox content must match Steve's credentials from LocalBusinessSchema.tsx
- Carrier logos require Steve's approval — do NOT create placeholder content; see Task H9 notes
- The hero LCP fix must not change the visual appearance of the homepage
- Run npx tsc --noEmit after every TypeScript change

FILES TO READ FIRST (in order):
1. CLAUDE.md
2. src/components/seo/LocalBusinessSchema.tsx (Steve's credentials, sameAs, aggregateRating)
3. src/lib/constants.ts
4. src/lib/blogPosts.ts (for H3 Speakable and H5 AuthorBox)
5. src/app/blogs/[slug]/BlogPostClient.tsx (how blog posts render)
6. src/app/(home)/page.tsx or src/app/page.tsx (homepage — for LCP fix H7)
7. src/components/layout/Header.tsx (for any header CTA changes)
8. docs/seo-performance-dashboard.md (page-1 freeze rule)

---

TASK H1 — New Blog Post: Florida Snowbird Medicare Guide (P1 — 4 hours)

slug: "florida-snowbird-medicare-guide"
title: "Florida Snowbird Medicare Guide: How to Get Coverage in Two States"
excerpt: "Living in Florida winters and another state in summer? This guide explains how Medicare and Medicare Advantage work for snowbirds — and which plan type makes sense for your lifestyle."
date: "July 2026"
readTime: "8 min read"

TARGET AUDIENCE: Snowbirds — retirees who spend approximately 6 months in Florida (typically Oct–Apr) and 6 months in a Northern state (NY, NJ, MA, OH, IL, etc.). This is a very specific and underserved search intent that national sites address generically.

CONTENT OUTLINE (2,000 words):

H1: Medicare for Florida Snowbirds: How Coverage Works in Two States

Section 01: Original Medicare vs. Medicare Advantage for Snowbirds
"The Bottom Line": Original Medicare + Medigap works nationwide. Most Medicare Advantage HMO plans only cover emergency care outside the plan's local network. For snowbirds, Original Medicare is often the smarter choice.

Content (detailed):
- Original Medicare (Part A + Part B) works with any Medicare-accepting provider in any U.S. state. If you see a cardiologist in New York in June and a Miami provider in January — both are covered under the same plan.
- Medicare Advantage HMO: You are restricted to the plan's local network except for emergency/urgent care. This can leave snowbirds effectively without coverage for non-emergency care in their Northern state.
- Medicare Advantage PPO: Allows out-of-network care (at higher cost-sharing) — a better option for snowbirds than HMO, but more expensive and still not as clean as Original Medicare.
- Medigap (particularly Plan G): Works with any Medicare-accepting provider nationwide. For snowbirds spending significant time in a Northern state, this is typically the most practical and cost-effective choice.

Section 02: Part D Prescription Drug Coverage for Snowbirds
"The Bottom Line": Part D plans are national — your prescriptions are covered at any in-network pharmacy, regardless of which state you're in.
Content: Explain that Part D coverage is portable. The key consideration is choosing a plan with a pharmacy network in BOTH your Florida home and your Northern home. Generic pharmacies are usually available everywhere, but preferred pharmacies may vary.

Section 03: How to Set Up Your Medicare Coverage for Two States
Practical steps:
1. If choosing Original Medicare + Medigap: Choose a Plan G (or N) in Florida. It works everywhere. Separately enroll in Part D with a national pharmacy network.
2. If choosing Medicare Advantage PPO: Choose a plan with a national or multi-state PPO network. Check that your Northern state has in-network providers before enrolling.
3. Notify both your Florida and Northern-state providers of your Medicare coverage
4. Keep your Medicare card and Medigap ID card with you year-round

Section 04: The A&E Insurance Advantage for Florida Snowbirds
Content: A&E Insurance Agency specializes in helping South Florida retirees navigate this exact situation. Steve Germain has worked with hundreds of snowbirds from New York, New Jersey, Ohio, and Massachusetts who split their time between South Florida and their home state.

FAQ SECTION (4 pairs):
Q1: Does Medicare Advantage work in both Florida and New York?
A1: Medicare Advantage HMO plans typically only cover emergency care outside the plan's local network. If you're a snowbird spending significant time in both Florida and another state, a Medicare Advantage PPO plan with a national network or Original Medicare + Medigap is a better choice.

Q2: Does Medigap Plan G cover me in multiple states?
A2: Yes. Medigap Plan G — and all standardized Medigap plans — work with any Medicare-accepting provider nationwide. You can see doctors in Florida, New York, or any other state using your Original Medicare + Medigap coverage.

Q3: Can I use a Florida-based Medicare broker if I also live in New York part of the year?
A3: Yes. If you spend winters in South Florida and summers elsewhere, a Florida-based independent broker like A&E Insurance Agency can help you choose coverage that works in both states and enroll during your Florida residency.

Q4: Do I need separate Medicare coverage for each state?
A4: No. Medicare (Part A, Part B, Medigap) is a federal program that works throughout the United States. You do not need separate coverage for each state.

faqs array: mirror above 4 pairs

Internal links: /medicare-coverage/medicare-advantage-vs-medigap, /medicare-coverage/medicare-supplement-plans-medigap, /contact

After: npx tsc --noEmit && npm run build

---

TASK H2 — New Blog Post: Medicare for Non-U.S. Citizens in Florida (P1 — 3 hours)

slug: "medicare-for-non-us-citizens-florida"
title: "Medicare for Non-U.S. Citizens in Florida: Who Qualifies and How It Works"
excerpt: "Can non-U.S. citizens get Medicare in Florida? The answer depends on immigration status and work history. Here's a clear guide for lawful permanent residents and naturalized citizens."
date: "July 2026"
readTime: "6 min read"

TARGET AUDIENCE: South Florida's large immigrant population — naturalized citizens, green card holders, and people whose children or spouses are U.S. citizens. This is particularly relevant in Doral, Hialeah, and Miami.

IMPORTANT LEGAL ACCURACY NOTE:
This is YMYL content. Every eligibility claim must trace to CMS.gov or SSA.gov. Do NOT state that any specific immigration status does or does not qualify — use language like "generally," "typically," or link to the CMS.gov or SSA.gov official eligibility pages. Do NOT give immigration advice.

CONTENT OUTLINE (1,600 words):

H1: Medicare for Non-U.S. Citizens in South Florida: Eligibility and How to Enroll

Section 01: Who Can Get Medicare? Basic Eligibility
Content: Medicare eligibility is based on U.S. citizenship or lawful permanent resident (LPR) status, plus age (65) or disability. Key rules:
- U.S. citizens: eligible for Part A if they or their spouse have 40 work credits
- Lawful permanent residents (green card holders): generally eligible after 5 years of continuous lawful residence and 40 work credits
- Source: CMS.gov / Medicare.gov eligibility pages — always link to official source

Section 02: Premium-Free Part A vs. Buying Into Part A
Content: If you have fewer than 40 work credits, you may still buy into Medicare Part A at a monthly premium (depending on your number of credits). In 2026: [verify amounts from ANNUAL_UPDATE.md]

Section 03: Medicare for Naturalized Citizens
Content: Naturalized citizens have the same Medicare rights as citizens by birth, as long as they meet the work credit or spousal work credit requirements.

Section 04: Spouses and Work Credits
Content: You may qualify for Part A based on your spouse's (or ex-spouse's) work record, not just your own — even if your spouse is a U.S. citizen and you are not.

Section 05: What Happens If I'm Eligible for Medicare?
Content: Once eligible, your Medicare choices (Advantage, Medigap, Part D) are the same as any other Medicare beneficiary. A South Florida broker familiar with the local immigrant community can help you navigate enrollment.

Do NOT include information about undocumented immigrants, visa holders, or immigration pathways — this is outside the broker's scope and creates legal risk.

FAQ SECTION (3 pairs):
Q1: Can I get Medicare if I have a green card?
A1: Lawful permanent residents who have maintained legal U.S. residence for at least 5 years and have 40 Medicare work credits (or a spouse with 40 credits) are generally eligible for Medicare. For specific eligibility questions, visit medicare.gov or contact Social Security.

Q2: Can I get Medicare if I'm married to a U.S. citizen?
A2: If your spouse is a U.S. citizen or LPR with at least 40 work credits, you may be eligible for premium-free Part A through their work record, even if you don't have 40 credits yourself.

Q3: How do I find a Medicare broker in South Florida who speaks Spanish?
A3: A&E Insurance Agency provides Medicare plan consultations in Spanish for South Florida residents. An independent broker can compare plans from 25+ carriers at no cost to you.

faqs array: mirror above

Internal links: /medicare-broker-hialeah, /medicare-broker-doral, /contact

IMPORTANT: This post should NOT be promoted as "we can help undocumented immigrants get Medicare" — that is both inaccurate and legally risky. The target is green card holders and naturalized citizens who don't realize they qualify.

After: npx tsc --noEmit && npm run build

---

TASK H3 — Add Speakable Schema to Top 5 FAQ Pages (P1 — 1.5 hours)

Speakable schema tells Google Assistant which content sections are suitable for text-to-speech (voice search / AI overviews).

Files: The top 5 FAQ pages in src/lib/faqs.ts / src/app/resources/faq/[slug]/page.tsx

For each of the 5 highest-traffic FAQ pages, add a Speakable JSON-LD script in the page's server component.

The Speakable schema should point to CSS selectors that match the actual content sections. The most reliable approach for FAQ pages:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[FAQ page title]",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", "h1", ".faq-question"]
  },
  "url": "https://www.aeinsurancefl.com/resources/faq/[slug]"
}
```

Read the FAQ page component HTML to determine the actual CSS class names used on FAQ question/answer elements. Use those exact class names in the cssSelector.

Apply to these FAQ pages (read faqs.ts to find the top 5 by traffic proxy — likely the most common Medicare questions):
1. what-is-medicare-advantage (if it exists)
2. what-is-medigap (if it exists)
3. what-is-the-medicare-annual-enrollment-period (new — from G1)
4. how-does-irmaa-work (new — from G2)
5. what-is-the-medicare-part-b-late-enrollment-penalty (new — from G3)

After: npx tsc --noEmit

---

TASK H5 — Create BlogCTA Component (P1 — 2 hours)

This makes the mid-article CTA added in Phase G (Task G11) reusable and visually consistent.

File to create: src/components/blog/BlogCTA.tsx

```tsx
"use client";

interface BlogCTAProps {
  heading?: string;
  body?: string;
  buttonText?: string;
  href?: string;
}

export default function BlogCTA({
  heading = "Have questions about your Medicare options?",
  body = "Steve Germain compares Medicare plans from 25+ carriers — at no cost to you. Get a free 30-minute consultation.",
  buttonText = "Schedule a Free Consultation →",
  href = "/contact",
}: BlogCTAProps) {
  return (
    <div className="rounded-lg p-6 my-8" style={{ background: "#1A1A2E", color: "white" }}>
      <p className="text-lg font-bold mb-2" style={{ color: "#E8A020" }}>{heading}</p>
      <p className="text-sm leading-relaxed">{body}</p>
      <a
        href={href}
        className="inline-block mt-4 px-6 py-3 rounded font-bold text-sm"
        style={{ background: "#E8A020", color: "#1A1A2E", textDecoration: "none" }}
      >
        {buttonText}
      </a>
    </div>
  );
}
```

Then review BlogPostClient.tsx. If the blog post page can inject a JSX component mid-content:
- Determine if there's a mechanism to inject a React component at a specific position in the rendered HTML content
- If blog posts render raw HTML via dangerouslySetInnerHTML: The G11 approach (HTML string in content field) is the correct pattern; the BlogCTA component can be used for NEW blog posts created in G7–G9 by injecting it into their content string as serialized HTML, or rendered alongside the content in BlogPostClient.tsx

Document your implementation approach in a code comment in BlogCTA.tsx.

After: npx tsc --noEmit

---

TASK H6 — Create AuthorBox Component (P1 — 2 hours)

CONTEXT: Blog posts currently show an author byline. This task creates a richer AuthorBox component that displays Steve's credentials, NPN, and a photo — improving E-E-A-T signals on every blog post.

File to create: src/components/blog/AuthorBox.tsx

The AuthorBox should display:
- Steve Germain's photo (from /public/team/steve.jpg)
- Name: "Steve Germain"
- Title: "Licensed Independent Medicare Broker | NPN 19921707"
- Years in business: "Serving South Florida since 2009"
- Credential badge: "Author of Medicare Decoded"
- BBB A+ and Google Rating (from constants.ts if available, or from LocalBusinessSchema — 126 reviews, 5.0 stars)
- A brief 2-sentence bio about Steve's expertise

Design guidance:
- Use a horizontal card layout (photo left, info right)
- Background: light gray (#F3F4F6)
- Border-radius: 8px
- Padding: 16px 24px
- Photo: 80x80px rounded circle (use next/image)
- On mobile: stack vertically

```tsx
import Image from "next/image";

export default function AuthorBox() {
  return (
    <div
      className="flex flex-col sm:flex-row items-start gap-4 rounded-lg p-6 mt-10 mb-4"
      style={{ background: "#F3F4F6" }}
    >
      <Image
        src="/team/steve.jpg"
        alt="Steve Germain, Licensed Medicare Broker"
        width={80}
        height={80}
        className="rounded-full flex-shrink-0"
      />
      <div>
        <p className="font-bold text-base" style={{ color: "#1A1A2E" }}>
          Steve Germain
        </p>
        <p className="text-sm" style={{ color: "#4B5563" }}>
          Licensed Independent Medicare Broker · NPN 19921707 · Serving South Florida since 2009
        </p>
        <p className="text-sm mt-1" style={{ color: "#4B5563" }}>
          Founder of A&E Insurance Agency, author of <em>Medicare Decoded</em>, and trusted advisor to 3,000+ South Florida Medicare beneficiaries. Steve holds licenses in Florida and 35 states.
        </p>
        <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>
          ★★★★★ 126 Google Reviews · BBB A+ Rated
        </p>
      </div>
    </div>
  );
}
```

Then in BlogPostClient.tsx: import and render <AuthorBox /> below the article content and above the comments/footer. Read the current byline implementation and either replace it with AuthorBox or add AuthorBox below the existing byline.

After: npx tsc --noEmit && npm run build

---

TASK H7 — Hero next/image LCP Fix (P1 — 1 hour)

CONTEXT: The homepage hero uses a slideshow (s01–s13.jpg). LCP (Largest Contentful Paint) depends on the first image loading quickly. This task ensures the hero uses Next.js Image Optimization correctly for LCP.

File: Find the homepage hero component (likely in src/app/(home)/ or src/components/home/).

Read the component. Check:
1. Is the hero image using <img> or next/image <Image>?
2. If using <Image>: Is `priority` set on the first image (s01.jpg)? If not, add `priority` to the first hero image.
3. Is `sizes` prop set correctly for a full-width hero? Should be: `sizes="100vw"`
4. Is the image format optimized? Next.js Image component serves WebP automatically.

The fix:
- Add `priority` prop to the first slide image (s01.jpg): `<Image priority ...>`
- Confirm `sizes="100vw"` is set
- Do NOT change the visual design, animation, or slide timing

IMPORTANT: Do not change how the slideshow works — only ensure the first image has `priority`. Adding priority to all slideshow images would defeat the purpose (only the first image needs priority loading).

After: npx tsc --noEmit && npm run build

Visual verification: npm run dev → open http://localhost:3000 → Chrome DevTools → Performance → check LCP element.

---

TASK H9 — Carrier Logos Section (P2 — REQUIRES STEVE'S APPROVAL)

STOP. Do not implement this task without Steve's explicit approval.

The question: Which carriers does A&E Insurance Agency represent? Do we have permission from each carrier to display their logo?

Required information from Steve before implementation:
1. List of carriers we are appointed with
2. Confirmation that we have permission to display each carrier's logo (typically granted with appointment)
3. Carrier logo files (PNG or SVG) with white/gray backgrounds for the "As Seen In" style carrier strip

Once Steve approves:
File: Create or locate a carrier logos section component. Place it on:
- The homepage (between hero and main content sections)
- The /medicare service page
- The /medicare-coverage/ pillar pages

Design: A horizontal strip with 6–10 carrier logos in grayscale (filter: grayscale) that color on hover. Do NOT display premium amounts or rankings next to carrier logos — that creates regulatory/comparison risk.

DO NOT create placeholder logos or use logos from the internet without confirmed permission.

---

TASK H10 — Review Acquisition Campaign Kickoff (P2 — Steve manual action)

This task is MANUAL — it requires Steve's action in Google Business Profile and GoHighLevel.

See docs/implementation-plan-2026-07/steve-manual-actions.md for detailed instructions (MANUAL-07 and MANUAL-08).

The implementation component:
1. Create or locate the /thank-you-review page (or wherever post-consultation clients land)
2. If no such page exists, check GoHighLevel for the post-consultation thank-you page
3. Ensure the Google review link is prominently placed with clear CTA

Google Review link format: https://search.google.com/local/writereview?placeid=[A&E Insurance Agency Google Place ID]

Steve must provide the Google Place ID (found in Google Business Profile dashboard). Once provided, the implementation is simple — add the link to:
- Post-consultation email template in GoHighLevel
- Thank-you page after contact form submission
- Footer of post-appointment follow-up text messages (if GoHighLevel SMS sequences exist)

---

FINAL VERIFICATION STEPS:
1. npx tsc --noEmit (0 errors)
2. npm run build
3. Homepage hero: verify `priority` on first image in production build output
4. AuthorBox: confirm it renders below article content on all blog posts
5. BlogCTA: confirm mid-article CTA still renders (G11) and is not broken by AuthorBox
6. Speakable schema: view source on 2–3 FAQ pages — confirm JSON-LD with speakable cssSelector present
7. Snowbird post: localhost:3000/blogs/florida-snowbird-medicare-guide — loads correctly
8. Non-citizen post: localhost:3000/blogs/medicare-for-non-us-citizens-florida — loads correctly
9. Google Rich Results Test (post-deploy): test FAQ pages for Speakable eligibility

TESTING CHECKLIST:
- [ ] TypeScript passes
- [ ] Build passes
- [ ] /blogs/florida-snowbird-medicare-guide loads with FAQ schema
- [ ] /blogs/medicare-for-non-us-citizens-florida loads with FAQ schema
- [ ] AuthorBox renders on all blog posts
- [ ] BlogCTA renders mid-article on top 10 posts
- [ ] Hero first image has `priority` prop
- [ ] Speakable schema on 5 FAQ pages
- [ ] H9 carrier logos NOT implemented without Steve approval
- [ ] No content changed on top-10 ranking posts (page-1 freeze honored)

COMMIT MESSAGE:
feat(seo/phase-h): AI search optimization + CRO final phase

- Add snowbird Medicare guide blog post (snowbird-specific intent)
- Add Medicare for non-citizens guide (South FL immigrant community)
- Add Speakable schema to top 5 FAQ pages for voice/AI search
- Create BlogCTA component (reusable mid-article CTA)
- Create AuthorBox component with Steve's credentials and E-E-A-T signals
- Fix hero LCP: add priority prop to first hero image
- [Carrier logos — pending Steve's approval]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

DO NOT:
- Implement carrier logos without Steve's explicit approval (H9)
- Change content on any top-10 ranking post
- Modify the hero slideshow timing or animation
- Give immigration advice or overstate Medicare eligibility for any immigration status
- Fabricate carrier affiliations or claim specific plan availability without verification
- Touch next.config.ts, sitemap.ts (unless adding snowbird/non-citizen posts — they're new blog posts added via blogPosts.ts, not sitemap.ts)
```
