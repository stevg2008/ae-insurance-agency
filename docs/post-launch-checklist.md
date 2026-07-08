# Post-Launch Checklist

Run these checks after the site goes live. First-day checks catch critical issues; ongoing checks track health.

---

## Day 1 (within hours of launch)

### Verify the Site is Working
- [ ] All pages load without 404 or 500 errors
- [ ] Contact form submits and lead appears in GHL
- [ ] Book modal submits and lead appears in GHL
- [ ] Watch registration submits and lead appears in GHL
- [ ] Phone numbers are clickable (tap-to-call) on mobile

### Verify Analytics
- [ ] GA4 Realtime shows active users on the site
- [ ] At least one form submission shows as a conversion in GA4
- [ ] No JavaScript errors in browser console on key pages (homepage, /medicare, /contact)

### Verify SEO Signals
- [ ] Sitemap accessible at `/sitemap.xml` — returns valid XML
- [ ] Robots.txt accessible at `/robots.txt` — shows correct disallow list
- [ ] Homepage title and meta description are correct in browser tab and page source

---

## Week 1

- [ ] Check Google Search Console for crawl errors (any 4xx or 5xx from Googlebot)
- [ ] Check Search Console Coverage report — target 0 excluded pages except `/api/`, `/watch/video`, `/book/thank-you`
- [ ] Confirm no manual actions in Search Console
- [ ] Review Vercel deployment logs for any runtime errors (Functions tab)
- [ ] Check GA4 Acquisition report — confirm traffic sources look reasonable

---

## Month 1

- [ ] Check Core Web Vitals report in Search Console — flag any pages with "Poor" LCP or CLS
- [ ] Review GA4 Events report — confirm all Tier 1 conversion events are firing
- [ ] Review top landing pages in GA4 — confirm `/medicare` and homepage lead
- [ ] Check GHL — confirm lead pipeline is being populated and tagged correctly
- [ ] Review `/health-insurance` performance — target ranking movement on "health insurance Miami"

---

## Ongoing Monthly

- [ ] Review GA4 monthly conversion report — track booked consultations trend
- [ ] Check for broken links (use a free crawler like Screaming Frog or ahrefs)
- [ ] Review blog publish cadence — minimum 2 posts/month for SEO momentum
- [ ] Check GBP — respond to any new reviews, post a monthly update
- [ ] Verify Medicare calculator constants are still accurate (update each November — see ANNUAL_UPDATE.md)
