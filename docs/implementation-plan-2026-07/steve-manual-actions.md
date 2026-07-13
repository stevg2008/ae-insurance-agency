# Steve Manual Actions — Items Claude Code Cannot Do
## A&E Insurance Agency SEO Program — July 2026

These tasks require Steve's direct access to third-party platforms (Google Search Console, Search Atlas, Google Business Profile, GoHighLevel). Each item includes step-by-step instructions.

---

## MANUAL-01 — Rebuild KRT Project 70164 in Search Atlas
**Priority:** P0 | **Effort:** 45–60 minutes | **Do this in Week 1**

**Why it matters:** All 25 keywords in KRT project 70164 show null positions because they are tracked at the United States national level. A&E is a local/regional brand. The rank tracker currently provides zero actionable data.

**Step-by-step instructions:**

1. Log into Search Atlas at searchatlas.com
2. Navigate to KRT (Keyword Rank Tracker) → Your Projects
3. Find project 70164 (the A&E Insurance project)
4. Delete all 25 existing keywords (or use "Clear All Keywords" if available)
5. Set the tracking location to: **Miami, FL, United States** (desktop + mobile)
6. Add a secondary location: **Fort Lauderdale, FL, United States** (desktop only)
7. Add the following keywords (grouped by cluster):

**Medicare Local Keywords — Miami FL (desktop + mobile):**
- medicare broker miami
- medicare broker near me
- medicare broker south florida
- medicare agent miami
- medicare advantage miami
- medicare supplement miami
- medigap plan g florida
- medigap plan g vs plan n florida
- medicare advantage vs medigap florida
- medicare enrollment calculator
- turn 65 medicare florida
- medicare broker kendall
- best medicare advantage plans miami
- medicare supplement plans florida
- medicare part b penalty calculator

**Retirement & Life Insurance — Miami FL (desktop):**
- retirement planning miami
- social security medicare coordination
- life insurance broker miami
- term life insurance miami
- permanent life insurance miami

**Health Insurance — Miami FL (desktop + mobile):**
- health insurance broker miami
- health insurance agents miami fl

8. Save the project and wait 24–48 hours for initial rank data to populate
9. Bookmark the project dashboard for weekly review

**Success check:** After 48 hours, you should see actual position numbers (not null) for at least 5–10 keywords.

---

## MANUAL-02 — Request Indexing for Top Blog Posts in Google Search Console
**Priority:** P0 | **Effort:** 30 minutes | **Do this in Week 1**

**Why it matters:** The top 6 blog posts by impressions are all legacy `/blog/` URLs being indexed instead of the canonical `/blogs/` URLs. The `/blogs/` versions appear to have near-zero GSC presence. Requesting indexing of the canonical URLs accelerates Google's re-indexing process from months to weeks.

**Step-by-step instructions:**

1. Go to Google Search Console at search.google.com/search-console
2. Make sure you are in the **sc-domain:aeinsurancefl.com** property
3. Click "URL Inspection" in the left sidebar
4. For each URL below, paste the URL → click Enter → click "Request Indexing"

**URLs to submit (in priority order):**
1. `https://www.aeinsurancefl.com/blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you`
2. `https://www.aeinsurancefl.com/blogs/what-is-the-difference-between-medicare-part-a-and-part-b`
3. `https://www.aeinsurancefl.com/blogs/which-medicare-plan-is-better-for-dental-and-vision-coverage`
4. `https://www.aeinsurancefl.com/blogs/which-medicare-plan-is-best-for-people-with-chronic-conditions-in-florida`
5. `https://www.aeinsurancefl.com/blogs/how-does-medicare-part-c-compare-to-original-medicare-in-florida`

**Also submit new pages as they are created** — for every new subpage created under `/retirement/`, `/life-insurance/`, and `/critical-illness/`, submit it to URL Inspection within 24 hours of deployment.

**Note:** GSC limits URL Inspection requests to approximately 10–20 per day. Space them out if needed.

---

## MANUAL-03 — Verify Live Google Business Profile Review Count
**Priority:** P1 | **Effort:** 5 minutes | **Do this in Week 1**

**Why it matters:** The LocalBusinessSchema shows `reviewCount: "126"`. If this has changed, the schema is inaccurate and the AggregateRating displayed in search results may be stale.

**Step-by-step instructions:**

1. Search Google for "A&E Insurance Agency" or "Steve Germain Medicare broker Miami"
2. Find the Google Business Profile panel on the right side
3. Note the current review count displayed

**If the count has changed from 126:**
- Open Claude Code in the medicare-site project
- Tell Claude: "The Google Business Profile review count for A&E Insurance Agency is now [X]. Please update reviewCount in src/components/seo/LocalBusinessSchema.tsx."

---

## MANUAL-04 — Set Up GoHighLevel Appointment Scheduling Widget on /contact
**Priority:** P2 | **Effort:** 1–2 hours | **Do this in Week 8–10**

**Why it matters:** All CTAs on the site go to `/contact` which shows a form. Adding a direct scheduling widget reduces the number of steps from interest → booked consultation. This is the highest-impact CRO change available that doesn't require code changes.

**Step-by-step instructions:**

1. Log into GoHighLevel
2. Navigate to Calendars → Create a Calendar (or use your existing consultation calendar)
3. Configure the calendar:
   - Name: "Free Medicare Consultation with Steve Germain"
   - Duration: 30 minutes
   - Available hours: Match your business hours (Mon–Fri 9am–5pm)
   - Buffer time: 15 minutes between appointments recommended
4. Get the embed code from GoHighLevel (Settings → Embed Code for your calendar widget)
5. Send the embed code to Claude Code with this instruction: "Add this GoHighLevel calendar embed to the /contact page in src/app/contact/ContactClient.tsx, below the existing contact form. Use an `<iframe>` with appropriate styling."

**Alternative if you prefer a simpler approach:** Use Calendly (calendly.com) with a free account. The Calendly link can replace the `/contact` form destination on CTA buttons — just send the Calendly URL to Claude Code to update the CTA destinations.

---

## MANUAL-05 — Submit Sitemap to Google Search Console
**Priority:** P1 | **Effort:** 5 minutes | **Do this now if not already done**

**Why it matters:** GSC needs the current sitemap URL registered to efficiently discover new pages as they are added.

**Step-by-step instructions:**

1. Go to Google Search Console
2. Click "Sitemaps" in the left sidebar
3. If `https://www.aeinsurancefl.com/sitemap.xml` is not already listed, add it
4. Verify it shows "Success" status with ~125 URLs submitted

**After each major deployment of new pages** (retirement subpages, local landing pages), go back to Sitemaps and click "Resubmit" to accelerate crawling.

---

## MANUAL-06 — Launch Review Acquisition Campaign
**Priority:** P1 | **Effort:** 1–2 hours to set up | **Do this in Week 12**

**Why it matters:** SFIB (your primary competitor) has 147 Google reviews vs. A&E's 126. Reviews are a local SEO ranking factor and a trust signal for prospective clients. Closing the gap is a revenue-impact activity.

**Step-by-step instructions:**

**Option A — GoHighLevel Email Campaign (Recommended):**

1. Log into GoHighLevel
2. Navigate to Contacts → filter for past clients (segment by tags like "completed consultation," "enrolled," or date range)
3. Create an email campaign:
   - Subject: "A quick favor from Steve Germain at A&E Insurance"
   - Body: [Use the template below]
   - Include direct Google review link (get from GBP dashboard → Get more reviews → Share review link)
4. Schedule the campaign to send on a Tuesday or Wednesday morning (highest open rates)
5. Set up a 7-day follow-up for non-openers

**Email template:**
```
Subject: A quick favor — would mean the world to us

Hi [First Name],

I hope your Medicare coverage is working well for you. I wanted to ask a quick favor.

If your experience with A&E Insurance Agency was positive, would you mind leaving us a Google review? It takes about 60 seconds and helps other South Florida families find trustworthy Medicare help.

[Direct Google Review Link]

Thank you — it truly means a lot to us.

Steve Germain
A&E Insurance Agency
NPN 19921707 | (954) 281-5622
```

**Success target:** 150+ reviews within 90 days (adds 24+ reviews from current 126).

---

## MANUAL-07 — Update GBP (Google Business Profile) with Any Missing Information
**Priority:** P2 | **Effort:** 30 minutes | **Do this in Week 4**

**Why it matters:** The GBP is the primary local SEO signal for "medicare broker near me" and similar queries. Keeping it fully populated and accurate strengthens local pack rankings.

**Step-by-step instructions:**

1. Log into Google Business Profile (business.google.com)
2. Verify these fields are complete:
   - **Business description:** Should mention Medicare Advantage, Medigap, Part D, bilingual service, Steve Germain, 25+ carriers, free consultations
   - **Services:** Add individual service entries for Medicare Advantage, Medicare Supplement (Medigap), Part D Plans, Life Insurance, Retirement Planning
   - **Products:** Add "Medicare Decoded — Free Guide" as a product (with PDF download link)
   - **Posts:** Add a Google Business Post at least monthly (can be a blog post summary with link)
   - **Photos:** Ensure you have 10+ business photos (interior, Steve's headshot, team, client events)
   - **Q&A:** Add and answer the top 5 Medicare questions directly in the GBP Q&A section

---

## MANUAL-08 — Monitor GSC Performance After Each Phase
**Priority:** P1 | **Effort:** 30 minutes monthly | **Ongoing**

**Why it matters:** Without measuring, we cannot confirm the 90-day plan is working.

**Monthly GSC Review Checklist:**

1. Go to Google Search Console → Performance → Search Results
2. Set date range: Last 28 days vs. Previous 28 days
3. Check:
   - Total impressions trend (target: increasing toward 80,000+)
   - Total clicks trend (target: increasing toward 400+)
   - Average CTR (target: above 0.6%)
   - Average position trend (target: improving from ~40 toward 25–30)
4. Click on "Pages" tab and look for:
   - Are new retirement/life insurance subpages appearing with impressions?
   - Are the canonical `/blogs/[slug]` URLs gaining impressions (vs. `/blog/` legacy URLs)?
   - Are local landing pages gaining impressions?
5. Click on "Queries" tab and note:
   - Any new keywords appearing in top 50?
   - Any keywords moving from page 3+ to page 1–2?
6. Record findings in `docs/seo-performance-dashboard.md` monthly update section

**Week 4 milestone check specifically:**
- Submit `/retirement/retirement-planning-tools` and `/retirement/social-security-and-medicare-coordination` to URL Inspection
- Confirm they appear in Coverage → Valid section within 7–14 days after submission

---

## MANUAL-09 — Verify Redirect Chain Is Single-Hop for Top Blog Posts
**Priority:** P0 | **Effort:** 10 minutes | **Do this in Week 1**

**Why it matters:** 301 redirect chains (A→B→C instead of A→C) lose link equity at each hop. The top blog posts are in redirect chains from `/blog/[slug]` → `/blogs/[slug]`. If Google is seeing a multi-hop chain, this costs ranking power.

**How to check:**

Run these curl commands (Steve can do this from a Mac Terminal or ask Claude Code to run them):

```bash
curl -I "https://www.aeinsurancefl.com/blog/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you"
```

**Expected output:** A single 301 redirect to the `/blogs/` URL, not another redirect.

```bash
curl -L -I "https://www.aeinsurancefl.com/blog/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you"
```

**Expected:** Only 2 responses — the 301 redirect header and the 200 OK final response.

If you see more than one 301 in the chain, report the chain to Claude Code for analysis.

---

## MANUAL-10 — Configure Search Atlas GSC Integration
**Priority:** P1 | **Effort:** 20 minutes | **Do this in Week 2**

**Why it matters:** Connecting Search Atlas to your GSC property allows the KRT and topical authority tools to pull real impression and click data, giving you a more complete picture than either tool alone.

**Step-by-step instructions:**

1. Log into Search Atlas
2. Navigate to Settings → Integrations → Google Search Console
3. Authorize Search Atlas to access your GSC property (sc-domain:aeinsurancefl.com)
4. Select the property and confirm country: United States
5. Allow 24–48 hours for data to sync

**Note on the GSC country_code=US quirk (from memory/prior sessions):** If Search Atlas shows a 403 error on country filtering, this is a known issue with the `sc-domain:` property type. Use the URL-prefix property version of the GSC integration if available, or filter data manually using the GSC dashboard directly.
