# Pre-Launch Checklist

Complete every item before going live. Check off as you go.

---

## Critical Blockers (must be done before launch)

### Analytics
- [x] GA4 Measurement ID `G-ZG55M8F9H5` is live in `src/app/layout.tsx`
- [ ] Verify GA4 is receiving page views — open GA4 Realtime report while browsing the site locally
- [ ] Mark conversion events in GA4 Admin (see [tracking-events.md](./tracking-events.md))

### Webhooks / Lead Capture
- [ ] Confirm `GHL_WEBHOOK_URL` is set in production environment (Vercel)
- [ ] Confirm `GHL_CONTACT_WEBHOOK_URL` is set in production environment
- [ ] Confirm `GHL_BOOK_WEBHOOK_URL` is set in production environment
- [ ] Submit a test lead through each form and confirm it appears in GHL:
  - [ ] Contact form (`/contact`)
  - [ ] Book modal (any page)
  - [ ] Watch registration (`/watch`)

### Build
- [ ] `npm run build` completes with zero errors
- [ ] `npx tsc --noEmit` returns zero errors
- [ ] `npm run lint` returns zero errors (24 `<img>` warnings are acceptable, not errors)

---

## High Priority (do before or within 24 hours of launch)

### SEO
- [ ] Submit sitemap to Google Search Console: `https://aeinsurancefl.com/sitemap.xml`
- [ ] Verify ownership in Google Search Console
- [ ] Check robots.txt is live at `https://aeinsurancefl.com/robots.txt`
- [ ] Confirm canonical URLs resolve correctly (no redirect loops)
- [ ] Test Open Graph preview: paste URL into [opengraph.xyz](https://opengraph.xyz) or Facebook Debugger

### Performance
- [ ] Run Lighthouse on homepage — target LCP < 2.5s, CLS < 0.1
- [ ] Run Lighthouse on `/medicare` (highest-traffic service page)
- [ ] Check Core Web Vitals in GA4 after 24 hours of traffic

### Accessibility
- [ ] Test keyboard navigation on homepage (Tab through all interactive elements)
- [ ] Test hamburger menu on mobile (open/close)
- [ ] Check color contrast on primary CTA buttons

---

## Medium Priority (within first week)

- [ ] Implement `next/image` for remaining `<img>` tags (24 warnings in lint output) — see `npm run lint`
- [ ] Add Meta Pixel — obtain Pixel ID from Meta Events Manager
- [ ] Add Microsoft Clarity — free session recording for form drop-off analysis
- [ ] Audit `/public/Pics/` and `/public/slides/` for unused files
- [ ] Verify GHL chat widget appears on all non-funnel pages

---

## Google Business Profile
- [ ] Confirm NAP (Name, Address, Phone) on GBP matches `src/lib/constants.ts` exactly
  - Business name: A&E Insurance Agency
  - Phone: check `PHONE` in constants.ts
  - Address: check `LOCATIONS[0].address` in constants.ts
- [ ] Confirm website URL on GBP is set to `https://aeinsurancefl.com`
- [ ] Confirm business hours on GBP match `BUSINESS_HOURS` in constants.ts

---

## Social / External
- [ ] Update social profile URLs in `src/lib/constants.ts` if any have changed
- [ ] Check that BBB seal iframe loads correctly in the footer
- [ ] Test BBB seal on mobile (scales correctly at < 310px)
