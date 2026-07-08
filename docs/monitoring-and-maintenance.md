# Website Monitoring & Maintenance

**Site:** aeinsurancefl.com  
**Stack:** Next.js 16 / Vercel / GitHub  
**Last updated:** July 2026

---

## Quick Reference — What Breaks, What Catches It

| Risk | Tool That Catches It | How Fast |
|---|---|---|
| Site goes down | UptimeRobot | < 5 min |
| Vercel deploy fails | Vercel email alert | Instant |
| JS error on page | Sentry | Real-time |
| Form stops submitting | Playwright E2E + Sentry | On next push or < 1 hr |
| Build broken | GitHub Actions CI | On every push |
| TypeScript error | GitHub Actions CI | On every push |
| Page returns 404 | UptimeRobot spot checks | < 5 min |
| Core Web Vitals drop | Lighthouse CI (weekly) | Weekly |
| GA4 conversion missing | GA4 email digest | Daily |
| New page not indexed | Google Search Console | Weekly |
| Sitemap missing a page | GitHub Actions CI | On every push |
| Schema markup broken | Google Rich Results Test (manual) | Monthly |

---

## 1 — Uptime Monitoring

**Tool:** UptimeRobot (free tier — 5-minute checks, unlimited monitors)  
**Sign up:** https://uptimerobot.com

### Monitors to create

| Monitor Name | URL | Type | Alert |
|---|---|---|---|
| Home Page | https://www.aeinsurancefl.com | HTTP(S) | Email + SMS |
| Contact Page | https://www.aeinsurancefl.com/contact | HTTP(S) | Email |
| Medicare Page | https://www.aeinsurancefl.com/medicare | HTTP(S) | Email |
| Watch Page | https://www.aeinsurancefl.com/watch | HTTP(S) | Email |
| Sitemap | https://www.aeinsurancefl.com/sitemap.xml | HTTP(S) | Email |
| API — Contact | https://www.aeinsurancefl.com/api/contact | HTTP(S) | Email |
| API — Register | https://www.aeinsurancefl.com/api/register | HTTP(S) | Email |

### Alert settings
- **Threshold:** Alert after 2 consecutive failures (avoids false alarms)
- **Recipients:** stevegermain215@gmail.com
- **SMS:** Add your mobile number for the Home Page monitor only

### When you get an alert
1. Visit the site yourself to confirm it's down
2. Check Vercel dashboard → Deployments for any failed deploy
3. Check Vercel dashboard → Functions for any runtime errors
4. If down > 10 minutes and Vercel shows no issues, contact Vercel support

---

## 2 — Vercel Deployment Alerts

**Where:** Vercel Dashboard → Settings → Notifications

### Enable these notifications
- **Deployment failed** → Email
- **Deployment succeeded** (optional — can be noisy, enable if you want confirmation)
- **Domain configuration issues** → Email

### How to set up
1. Go to https://vercel.com/steveg2008/ae-insurance-agency/settings/notifications
2. Add stevegermain215@gmail.com
3. Check "Deployment Failed" and "Domain Issues"

### When a deploy fails
1. Click the failed deploy in the Vercel dashboard
2. Copy the error output
3. Open Claude Code and paste: *"Vercel deploy failed with this error: [paste error]"*

---

## 3 — JavaScript / React Error Tracking

**Tool:** Sentry (free tier — 5,000 errors/month)  
**Sign up:** https://sentry.io

### Setup steps

**a) Create a Next.js project in Sentry**
```
npx @sentry/wizard@latest -i nextjs
```
Follow the prompts — it auto-creates `sentry.client.config.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts`.

**b) Add your DSN to Vercel environment variables**
- Go to Vercel → Settings → Environment Variables
- Add: `NEXT_PUBLIC_SENTRY_DSN` = (your Sentry DSN)

**c) Alerts to configure in Sentry**
- Any new issue → Email immediately
- Issue seen 10+ times in 1 hour → Email + SMS
- Error on `/contact`, `/watch` → Highest priority alert

### What Sentry catches
- React hydration errors (#418 and similar)
- Form submission JS errors
- API route crashes
- Any unhandled exception on any page

### When Sentry alerts
1. Open the Sentry issue — it shows the exact file, line number, and user action
2. Copy the stack trace
3. Open Claude Code and paste: *"Sentry caught this error: [paste stack trace]. Fix it."*

---

## 4 — Form Submission Monitoring

**Primary:** Sentry (catches JS errors during submit)  
**Secondary:** GHL (GoHighLevel) — check that new contacts appear

### GHL verification (weekly, 2 minutes)
1. Log into GoHighLevel
2. Go to Contacts → filter by "Last 7 days"
3. Verify new contacts are appearing from the website
4. If no contacts in a week despite traffic, a form may be broken

### What to check if forms stop working
- UptimeRobot → confirm `/api/contact` and `/api/register` return 200
- Sentry → check for errors on those routes
- Vercel → check Function logs for `/api/contact` and `/api/register`
- Confirm `GHL_WEBHOOK_URL` is still set in Vercel environment variables

---

## 5 — Automated CI Checks (GitHub Actions)

**Runs on:** Every push to `main` and every pull request

### What runs automatically

| Check | File | Triggers |
|---|---|---|
| TypeScript type check | `.github/workflows/ci.yml` | Every push |
| ESLint | `.github/workflows/ci.yml` | Every push |
| Next.js build | `.github/workflows/ci.yml` | Every push |
| Sitemap validation | `.github/workflows/ci.yml` | Push to main |
| Playwright E2E tests | `.github/workflows/e2e.yml` | Push to main |
| Lighthouse CI | `.github/workflows/lighthouse.yml` | Weekly (Monday) |

### Where to see results
- Go to https://github.com/steveg2008/ae-insurance-agency/actions
- A green checkmark = all passing
- A red X = something failed — click it to see which step and why

### When CI fails
1. Click the failed run in GitHub Actions
2. Click the failed step to see the error
3. Open Claude Code and paste: *"GitHub Actions CI failed with: [paste error]"*

---

## 6 — Playwright End-to-End Tests

**Tests live in:** `tests/e2e/`

| Test file | What it covers |
|---|---|
| `critical-pages.spec.ts` | All major pages load, 404 handling, sitemap/robots |
| `forms.spec.ts` | Contact form, Watch form, click-to-call links, TCPA text |

### Running tests locally
```bash
# Run against production
BASE_URL=https://www.aeinsurancefl.com npx playwright test

# Run against local dev server
npm run dev  # in one terminal
npx playwright test  # in another

# View the HTML report after a run
npx playwright show-report
```

### When a test fails in CI
- GitHub Actions uploads the Playwright report as an artifact (kept 7 days)
- Download it from the Actions run → Artifacts → `playwright-report`
- Open `index.html` to see screenshots and traces of the failure

---

## 7 — Lighthouse CI (Performance & Core Web Vitals)

**Runs:** Every Monday at 8am ET  
**Pages tested:** Home, /medicare, /contact

### Score thresholds (will warn/fail CI if missed)
| Metric | Threshold | Severity |
|---|---|---|
| Performance | 70+ | Warning |
| SEO | 90+ | **Error** (blocks) |
| Accessibility | 90+ | Warning |
| Best Practices | 90+ | Warning |
| LCP | < 4 seconds | Warning |
| CLS | < 0.1 | Warning |

### Viewing results
- Reports are saved as GitHub Actions artifacts for 30 days
- Download from Actions → `lighthouse-report`

### If scores drop
1. Run Lighthouse locally: open Chrome DevTools → Lighthouse tab → analyze page
2. The report shows exactly which elements are causing the drop
3. Share the report with Claude Code for fixes

---

## 8 — Google Search Console

**URL:** https://search.google.com/search-console  
**Property:** https://www.aeinsurancefl.com

### Alerts to enable
Go to Search Console → Settings → Email preferences and turn on:
- Coverage issues (new errors)
- Manual actions (penalties)
- Security issues

### Weekly checks (5 minutes)
- **Coverage** → Any new "Error" pages? Fix immediately
- **Performance** → Any page with a sudden click/impression drop?
- **Core Web Vitals** → Any pages newly flagged as "Poor"?

### After DNS cutover — submit sitemap
```
Go to Search Console → Sitemaps → Add sitemap URL:
https://www.aeinsurancefl.com/sitemap.xml
```

### Monthly checks
- Review top 10 queries — are they what you expect?
- Check for any pages with high impressions but low CTR (may need better title/description)
- Verify new blog posts are being indexed

---

## 9 — GA4 Conversion Tracking

**Property:** G-ZG55M8F9H5

### Conversions to mark (one-time setup — manual step in GA4 Admin)
1. GA4 → Admin → Conversions → New conversion event
2. Add these event names:
   - `contact_form_submitted`
   - `book_modal_submitted`
   - `watch_registered`

### Weekly check (2 minutes)
- GA4 → Reports → Conversions
- Verify conversions are recording for the past 7 days
- If 0 conversions in a week with normal traffic → form tracking may be broken

### GA4 Custom Insight to create (catches conversion drops automatically)
1. GA4 → Insights → Create → Custom
2. **Insight:** "Conversion rate drops below 1% for 3 consecutive days"
3. **Notify:** stevegermain215@gmail.com

---

## 10 — Microsoft Clarity (Session Recording & Heatmaps)

**Tool:** Microsoft Clarity (free, unlimited)  
**Sign up:** https://clarity.microsoft.com

### Why it matters
Clarity shows you recordings of real visitor sessions — you can literally watch where people click, where they stop scrolling, and where they leave your forms. It's one of the most powerful free tools for finding conversion problems.

### Setup
1. Create a Clarity project for aeinsurancefl.com
2. Get the tracking snippet
3. Add it to `src/app/layout.tsx` (similar to how GA4 is added)
4. Or install via: `npm install @microsoft/clarity` — then call `clarity("init", "YOUR_PROJECT_ID")` in layout

### What to look for monthly
- **Rage clicks** — visitors clicking something that isn't clickable (broken link or button)
- **Dead clicks** — clicks with no response
- **Scroll depth on /contact and /watch** — are people seeing the form?
- **Session recordings on mobile** — check that forms are usable on phones

---

## 11 — Schema Markup Validation

**Tool:** Google Rich Results Test — https://search.google.com/test/rich-results

### Monthly check
Test these pages:
- https://www.aeinsurancefl.com (LocalBusiness schema)
- https://www.aeinsurancefl.com/medicare (HowTo schema)
- Any blog post (BlogPosting schema)

### What to look for
- No errors on the LocalBusiness schema
- "Eligible for rich results" showing for HowTo pages
- If schema breaks after a code change, Sentry won't catch it — only this manual check will

---

## 12 — Broken Links

### Automated (in CI)
The `ci.yml` workflow runs a markdown link check on all `.md` files on every push to main.

### Manual quarterly check
Use a free tool like:
- **Screaming Frog** (free up to 500 URLs) — crawls the whole site
- **Ahrefs Site Audit** (if you have Search Atlas access, use that instead)

Run it, export the 4xx errors, and fix any broken internal links.

---

## 13 — How to Give an Error to Claude Code for Fixing

When something breaks, the fastest fix is to give Claude Code the exact error. Here's what to paste:

### Sentry error
> "Sentry caught this error. File: [filename]. Error: [message]. Stack trace: [paste full trace]. Please fix it."

### GitHub Actions CI failure
> "GitHub Actions CI failed on push to main. Step: [step name]. Error output: [paste the red text]. Please fix it."

### Vercel build failure
> "Vercel deploy failed. Here's the build log: [paste log]. Please fix it."

### Playwright test failure
> "Playwright test failed: [test name]. Error: [paste error]. Screenshot attached. Please fix it."

### User-reported issue
> "A visitor reported they can't submit the contact form on mobile. Here's the Sentry error I found: [paste]. And here's the Clarity session recording I watched: [describe what you saw]. Please fix it."

---

## Monthly Maintenance Checklist

Do this on the 1st of every month. Takes about 30 minutes.

### Uptime & Errors
- [ ] Check UptimeRobot dashboard — any downtime events last month?
- [ ] Check Sentry — any recurring errors? Any new error types?
- [ ] Check Vercel dashboard — all deployments green?

### Traffic & Conversions
- [ ] GA4: conversions for the month (contact form, book modal, watch registration)
- [ ] GA4: top landing pages — any unexpected drops?
- [ ] GHL: new contacts from website — does the number look reasonable vs. GA4 traffic?

### SEO & Indexing
- [ ] Google Search Console → Coverage — any new errors?
- [ ] Search Console → Performance — check top 10 queries and any click drops
- [ ] Verify latest blog posts are indexed (search `site:aeinsurancefl.com/blogs/[slug]`)

### Content & Schema
- [ ] Run Google Rich Results Test on home page and one blog post
- [ ] Check Microsoft Clarity for rage clicks or dead clicks on /contact and /watch
- [ ] Review any new 404s in Search Console → Coverage → Not Found

### CI Health
- [ ] Go to GitHub Actions — did all Monday Lighthouse runs pass last month?
- [ ] Did any E2E tests fail? Were they fixed?

---

## Quarterly SEO Audit Checklist

Do this every 3 months (January, April, July, October).

### Technical
- [ ] Run Screaming Frog crawl — export and fix all 4xx broken links
- [ ] Check all canonical URLs are correct (especially after any new pages added)
- [ ] Validate sitemap at https://www.aeinsurancefl.com/sitemap.xml — count pages, verify new content appears
- [ ] Check robots.txt still allows indexing of all important pages
- [ ] Run PageSpeed Insights on Home, /medicare, /contact — note scores vs. last quarter
- [ ] Check all images have alt text (Screaming Frog can report this)

### Content & Rankings
- [ ] Search Console: which pages gained/lost rankings in the past 90 days?
- [ ] Check if any new Medicare rule changes (CMS announcements) need to be reflected in content
- [ ] Review and update the IRMAA calculator constants if a new year's figures are out (see `ANNUAL_UPDATE.md`)
- [ ] Verify all phone numbers, addresses, and NPN (19921707) are correct sitewide

### Schema & Structured Data
- [ ] Test LocalBusiness schema — verify review count is still accurate
- [ ] Test HowTo schema on /medicare and /retirement pages
- [ ] Check Google Search Console for any "Rich Results" errors

### Competitive
- [ ] Search "Medicare broker Miami" — where does aeinsurancefl.com rank?
- [ ] Check Google Business Profile listing — photos current, hours correct, reviews responded to?

---

## Annual Maintenance (November — Medicare AEP Season)

See `ANNUAL_UPDATE.md` for the full prompt and step-by-step instructions for updating:
- IRMAA thresholds
- Part B/D premiums
- Enrollment period dates
- Calculator constants in `src/lib/constants.ts`

This must be done **before November 1** each year.

---

## Tool Summary

| Tool | Cost | Purpose | Setup Status |
|---|---|---|---|
| GitHub Actions CI | Free | Build, type, lint, sitemap, E2E, Lighthouse | ✅ Configured |
| Playwright | Free | E2E form and page tests | ✅ Configured |
| Lighthouse CI | Free | Weekly Core Web Vitals | ✅ Configured |
| UptimeRobot | Free | Uptime monitoring | ⬜ Need to create monitors |
| Sentry | Free tier | JS error tracking | ⬜ Need to run wizard |
| Microsoft Clarity | Free | Session recording / heatmaps | ⬜ Need to add snippet |
| Google Search Console | Free | Indexing, rankings, coverage | ⬜ Need to submit sitemap after DNS |
| GA4 | Free | Conversion tracking | ✅ Live (G-ZG55M8F9H5) — need to mark conversions |
| Vercel Alerts | Free | Deploy failure notifications | ⬜ Enable in Vercel settings |
| Google Rich Results Test | Free | Schema validation | Manual — no setup needed |
