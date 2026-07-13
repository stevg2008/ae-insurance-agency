# Project Architecture — A&E Insurance Agency
**Audit Date:** 2026-07-10

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, `src/` directory, TypeScript) |
| Styling | Tailwind CSS v4 — `@theme` block in `globals.css`, no `tailwind.config.ts` |
| Animation | framer-motion (`AnimatedSection` wraps all scroll-triggered fade-ups) |
| Icons | lucide-react |
| Error Monitoring | Sentry (via `@sentry/nextjs`; `/monitoring` tunnel route) |
| Deployment | Vercel (auto-deploy from `main` branch, ~1 min) |
| CI | GitHub Actions (type-check + lint + build on every push to main; e2e + Lighthouse separately) |

---

## Complete Route Tree

```
/                                           → page.tsx (server, static)
/about                                      → about/page.tsx (server, static)
/about/steve                                → about/steve/page.tsx (server, static)
/blogs                                      → blogs/page.tsx (server+client hybrid)
/blogs/[slug]                               → blogs/[slug]/page.tsx (generateMetadata + generateStaticParams)
/book/thank-you                             → book/thank-you/page.tsx (server, noindex)
/contact                                    → contact/page.tsx (server+client)
/critical-illness                           → critical-illness/page.tsx (server+client)
/health-insurance                           → health-insurance/page.tsx (server+client)
/health-insurance-broker-miami              → health-insurance-broker-miami/page.tsx (server)
/life-insurance                             → life-insurance/page.tsx (server+client)
/major-exposures                            → major-exposures/page.tsx (server) [in-page section only, not in sitemap]
/medicare                                   → medicare/page.tsx (server+client)
/medicare-broker-kendall                    → medicare-broker-kendall/page.tsx (server)
/medicare-broker-miami                      → medicare-broker-miami/page.tsx (server)
/medicare-broker-near-me                    → medicare-broker-near-me/page.tsx (server)
/medicare-broker-south-florida              → medicare-broker-south-florida/page.tsx (server)
/medicare-coverage/[slug]                   → medicare-coverage/[slug]/page.tsx (generateMetadata + generateStaticParams)
/privacy                                    → privacy/page.tsx (server, noindex+nofollow)
/resources                                  → resources/page.tsx (server)
/resources/faq/[slug]                       → resources/faq/[slug]/page.tsx (generateMetadata + generateStaticParams)
/retirement                                 → retirement/page.tsx (server+client)
/terms                                      → terms/page.tsx (server, noindex+nofollow)
/tools/irmaa-calculator                     → tools/irmaa-calculator/page.tsx (server+client)
/tools/medicare-enrollment-calculator       → tools/medicare-enrollment-calculator/page.tsx (server+client)
/tools/part-b-penalty-calculator            → tools/part-b-penalty-calculator/page.tsx (server+client)
/tools/part-d-penalty-calculator            → tools/part-d-penalty-calculator/page.tsx (server+client)
/watch                                      → watch/page.tsx (server+client, has own layout)
/watch/video                                → watch/video/page.tsx (server+client, noindex)

API Routes:
/api/book                                   → api/book/route.ts
/api/contact                                → api/contact/route.ts
/api/register                               → api/register/route.ts (GoHighLevel webhook)
/monitoring                                 → Sentry tunnel route (next.config.ts)
```

**Total indexable static routes:** 21 static pages
**Total blog posts:** ~68 active (6 retired, redirected to /blogs)
**Total medicare-coverage guides:** 7
**Total FAQ pages:** 29
**Total sitemap URLs:** ~125 (21 static + 68 blog + 7 coverage + 29 FAQ)

---

## Page Pattern Architecture

All content pages follow a two-file pattern:
- `page.tsx` — Server Component. Exports `metadata` (static or `generateMetadata`). Renders the `*Client` component.
- `*Client.tsx` — `"use client"` directive. Contains all JSX, framer-motion animations, state.

**Exception:** Local landing pages (`/medicare-broker-*`, `/health-insurance-broker-miami`) are pure server components with no separate Client file — they render full page content inline.

**Exception:** `/watch` and `/watch/video` have their own minimal layout (`watch/layout.tsx`) that strips the global Header/Footer, replacing them with an inline minimal header.

---

## Global Layout (`src/app/layout.tsx`)

Wraps every page (except `/watch/*`):
```
AnnouncementBar → Header → <main>{children}</main> → Footer
```

- `AnnouncementBar` — blue bar with phone number (click-to-call tel:) + webinar CTA link
- `Header` — client component with mobile menu, dropdown navs for Services and Learn
- `Footer` — client component with 4 columns: Brand+Social, Contact, Legal, Quick Links; includes Medicare legal disclaimer and BBB seal

Global font loading: Not specified in layout.tsx (Tailwind CSS v4 system fonts used). No `next/font` import detected.

---

## Metadata Implementation

| Route Type | Method |
|---|---|
| Static pages | `export const metadata: Metadata = { ... }` |
| `/blogs/[slug]` | `export async function generateMetadata({ params })` |
| `/medicare-coverage/[slug]` | `export async function generateMetadata({ params })` |
| `/resources/faq/[slug]` | `export async function generateMetadata({ params })` |

All canonicals use `SITE_URL` from `src/lib/constants.ts`. OG images default to `og-image.jpg` inherited from root layout. Twitter card type is not explicitly set per-page (uses layout default).

---

## Image Optimization

- **External images:** `next/image` with `remotePatterns` allowing `cdn.prod.website-files.com` (Webflow CDN). Blog post images use standard `<img>` in HTML content (not `next/image`).
- **Hero slideshow:** Uses standard `<img>` tags (not `next/image`) with manual `objectPosition` for each slide — potential CWV impact (no automatic lazy loading or size optimization).
- **Logo/public assets:** Mix of `<img src="/logo.jpg">` and `<img src="/A&E Transparent Logo (1).png">` — not using `next/image`.
- **Slide images:** s01-s13.jpg in `/public/slideshow/` (s04, s05, s12 missing).
- **Team photos:** `/public/team/steve.jpg`, `/public/team/miderve.jpg`.

---

## Schema Markup Approach

Sitewide schema injected via `LocalBusinessSchema` component in root `layout.tsx`:
- `InsuranceAgency` + `LocalBusiness` (merged `@type` array)
- `Person` (Steve Germain, `@id: /#steve-germain`)
- `WebSite` with `SearchAction` (sitelinks search box targeting `/blogs?search=`)

Per-page additional schema:
- `BlogPostingSchema` — on every `/blogs/[slug]` and `/medicare-coverage/[slug]` page
- `FAQSchema` — on `/blogs/[slug]` pages that have `faqs` array in blogPosts.ts; also on all `/resources/faq/[slug]` pages; also on local landing pages
- `ItemList` — on `/health-insurance` page (4 items)
- `BreadcrumbList` — on all `/medicare-broker-*` and `/health-insurance-broker-miami` pages

---

## robots.ts Configuration

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /watch/video
Disallow: /book/thank-you
Sitemap: https://www.aeinsurancefl.com/sitemap.xml
```

Note: `/privacy` and `/terms` are excluded via `robots: { index: false, follow: false }` in page metadata, not via robots.txt.

---

## sitemap.ts

Dynamically generated. Includes:
- 21 static pages (priority 0.7–1.0)
- ~68 active blog posts (priority 0.6, changeFreq: yearly)
- 7 medicare-coverage posts (priority 0.6, changeFreq: yearly)
- 29 FAQ pages (priority 0.6, changeFreq: monthly)

**Does NOT include:** `/book/thank-you`, `/watch/video`, `/privacy`, `/terms`, `/major-exposures`, API routes

---

## Redirect Rules (`next.config.ts`)

| Source Pattern | Destination | Type |
|---|---|---|
| `/blog/[active-slug]` | `/blogs/[slug]` | 301 (68 - 6 retired = 62 rules) |
| `/blog/[retired-slug]` | `/blogs` | 301 (6 rules) |
| `/blogs/[retired-slug]` | `/blogs` | 301 (6 rules) |
| `/blog` | `/blogs` | 301 |
| `/our-blog/:slug*` | `/blogs/:slug*` | 301 |
| `/blog-your-spouse-isnt-eligible.../:slug*` | `/blogs/:slug*` | 301 |
| `/medicare-coverage/what-is-medicare-supplement-medigap-insurance` | `/medicare-coverage/medicare-supplement-plans-medigap` | 301 |
| `/medicare-coverage/different-types-of-medicare-advantage-plans` | `/medicare-coverage/medicare-advantage-plans` | 301 |
| `/retirement/:slug+` | `/retirement` | 301 (catch-all) |
| `/life-insurance/:slug+` | `/life-insurance` | 301 (catch-all) |
| `/critical-illness/:slug+` | `/critical-illness` | 301 (catch-all) |
| `/home` | `/` | 301 |
| `/home/:slug+` | `/contact` | 301 |
| `/webinarregistration` | `/watch` | 301 |

**Warning:** Catch-all redirects for `/retirement/:slug+`, `/life-insurance/:slug+`, `/critical-illness/:slug+` will shadow any future subpages created under those routes.

---

## Analytics Implementation

- **Sentry:** Error monitoring via `@sentry/nextjs`. Tunnel route at `/monitoring`. Client-side instrumentation in `src/instrumentation-client.ts`.
- **`src/lib/analytics.ts`:** Custom analytics helper (GTM/GA4 event tracking utilities).
- **GoHighLevel webhook:** `/api/register` POSTs to `GHL_WEBHOOK_URL` for webinar registrations.

No GA4 tag directly visible in layout.tsx (likely injected via GTM if configured). Google Tag Manager integration not confirmed in codebase.

---

## Third-Party Scripts

| Script | Load Method | Notes |
|---|---|---|
| Sentry SDK | npm package (bundled) | Via `withSentryConfig` wrapper |
| framer-motion | npm package (bundled) | Used heavily in Client components |
| lucide-react | npm package (bundled) | Icons |
| GoHighLevel webhook | Server-side fetch in API route | No client-side script |
| BBBSeal | Inline SVG/component | No external script |

No Google Maps embed, no chat widget, no Calendly or booking iframe identified in codebase. The `/contact` page likely uses a form that POSTs to `/api/contact`.

---

## Key Dependencies (package.json)

- `next` — v16 (App Router)
- `react` / `react-dom` — current stable
- `tailwindcss` v4
- `framer-motion`
- `lucide-react`
- `@sentry/nextjs`
- TypeScript

---

## Server vs Client Component Split

| Component | Type | Reason |
|---|---|---|
| `layout.tsx` (root) | Server | Metadata + schema rendering |
| All `page.tsx` files | Server | Metadata generation |
| `Header.tsx` | Client | Mobile menu state, scroll event, dropdown hover |
| `Footer.tsx` | Client | `new Date().getFullYear()` (suppressHydrationWarning used) |
| `AnnouncementBar.tsx` | Client | (could be server) |
| `Hero.tsx` | Client | Slideshow state, animations |
| `ThreeTruths.tsx` | Client (likely) | Animations |
| `FreeBook.tsx` | Client (likely) | Animations |
| `MedicarePlans.tsx` | Client (likely) | Animations |
| `GoogleReviews.tsx` | Client (likely) | Review display |
| All `*Client.tsx` files | Client | Main page content with animations |
| `LocalBusinessSchema.tsx` | Server | Pure JSON-LD output |
| `BlogPostingSchema.tsx` | Server | Pure JSON-LD output |
| `FAQSchema.tsx` | Server | Pure JSON-LD output |
| All calculator tools | Client | Interactive form state |

---

## CI / Lighthouse

- `.github/mlc_config.json` — markdown link checker config (no Lighthouse workflow found at `.github/workflows/lighthouse.yml`)
- `lighthouserc.json` — Lighthouse CI config present at project root
- Vercel auto-deploys `main` branch on push

---

## Performance Notes

1. Hero component uses standard `<img>` (not `next/image`) for slideshow — no automatic WebP conversion, no `sizes` attribute, no `priority` for LCP image.
2. Client components include framer-motion which adds JS bundle weight.
3. No `next/font` usage detected — system font stack presumed.
4. Blog post HTML content is raw migrated Webflow HTML rendered via `dangerouslySetInnerHTML` in `BlogPostClient.tsx` — not server-rendered as JSX.
5. Sentry tunnel at `/monitoring` may add marginal latency on error paths.
