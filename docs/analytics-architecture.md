# Analytics Architecture — A&E Insurance Agency

## Overview

**Platform:** Google Analytics 4 (GA4)  
**Measurement ID:** G-ZG55M8F9H5  
**Implementation:** Direct gtag.js (no GTM) — loaded in `src/app/layout.tsx` via Next.js `<Script strategy="afterInteractive">`  
**Primary KPI:** Booked Consultation (calendar booking completed)

---

## Why Direct gtag vs GTM

GTM was evaluated and **not recommended** for this site at this time:

- Site has a single developer maintaining code directly — no marketing team needing tag independence
- Direct gtag loads ~150ms faster (no GTM container round-trip)
- All conversion events can be fired from component-level code with full type safety
- GTM adds complexity without a clear current need

**Revisit GTM if:** A marketing team needs to deploy pixels independently, or if Meta/Microsoft ad accounts require frequent tag changes.

---

## GA4 Configuration

```
Measurement ID:  G-ZG55M8F9H5
Data stream:     aeinsurancefl.com (web)
Enhanced measurement: ON (page views, scrolls, outbound clicks, file downloads, site search)
Data retention:  14 months (increase to max in GA4 Admin → Data Settings)
```

---

## Measurement Plan

### Tier 1 — Primary Conversions (most important)

| Event | Trigger | Value |
|---|---|---|
| `book_consultation` | GHL calendar booking iframe — "booking confirmed" message | High |
| `contact_form_submit` | `/api/contact` POST success | High |
| `book_modal_submit` | BookModal form submit success | High |
| `watch_register` | `/api/register` POST success → redirect to `/watch/video` | High |

### Tier 2 — Engagement / Micro-conversions

| Event | Trigger | Value |
|---|---|---|
| `phone_click` | Any `href="tel:..."` click | Medium |
| `cta_click` | "Schedule a Consultation", "Get My Free Quote", "Book Free Review" button clicks | Medium |
| `pdf_download` | `/medicare-decoded-guide.pdf` download | Medium |
| `calculator_complete` | Any of the 4 Medicare tool calculators run | Medium |
| `video_play` | YouTube embed starts playing on `/watch/video` | Low |

### Tier 3 — Funnel Tracking

| Event | Trigger |
|---|---|
| `funnel_watch_start` | `/watch` page view |
| `funnel_watch_video` | `/watch/video` page view |
| `funnel_book_start` | `/book` page view |
| `funnel_book_complete` | `/book/thank-you` page view |

---

## Implementation Locations

Events are fired from these components:

| Event | File |
|---|---|
| `contact_form_submit` | `src/app/contact/ContactClient.tsx` |
| `book_modal_submit` | `src/components/BookModal.tsx` |
| `watch_register` | `src/app/watch/WatchClient.tsx` |
| `phone_click` | All `tel:` links (global — consider a click listener in layout) |
| `pdf_download` | `src/components/sections/FreeBook.tsx` |
| `calculator_complete` | Each tool's `*Client.tsx` |

---

## Third-Party Pixels (Pending)

### Meta Pixel
- **Status:** Not yet implemented
- **Add to:** `src/app/layout.tsx` alongside GA4 scripts
- **Key events:** PageView (all pages), Lead (form submits), Schedule (booking complete)
- **Obtain Pixel ID from:** Meta Events Manager → aeinsurancefl.com data source

### Microsoft Clarity
- **Status:** Not yet implemented  
- **Purpose:** Session recordings + heatmaps (free, HIPAA-aware)
- **Add to:** `src/app/layout.tsx` as `<Script strategy="afterInteractive">`
- **Pairs with GA4** for qualitative insight on form abandonment

---

## GA4 Goals to Create in Admin

Go to GA4 → Admin → Conversions and mark these as conversion events:
1. `book_consultation`
2. `contact_form_submit`
3. `book_modal_submit`
4. `watch_register`
5. `phone_click`
