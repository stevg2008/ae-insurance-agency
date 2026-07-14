@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # Dev server on port 3000
npm run build          # Production build (tsc + next build; also validates all 139 static pages)
npm run lint           # ESLint
npx tsc --noEmit       # Type-check only
npx playwright test    # E2E tests (tests/e2e/; needs `npx playwright install chromium` once)
npx playwright test tests/e2e/forms.spec.ts   # Single test file
```

Always run `npx tsc --noEmit` after editing `.tsx`/`.ts` files. CI (GitHub Actions) runs type-check + lint + build on every push to `main`; e2e and Lighthouse run separately. Vercel auto-deploys `main` (~1 min). Production: **https://www.aeinsurancefl.com** — production is the source of truth; verify live behavior with `curl` after deploying SEO-sensitive changes.

## Stack

- **Next.js 16** (App Router, `src/` directory, TypeScript) — see AGENTS.md warning: read `node_modules/next/dist/docs/` before assuming APIs
- **Tailwind CSS v4** — `@theme` in `globals.css`, **no** `tailwind.config.ts`. Blog article HTML is styled via `.blog-content` rules in `globals.css` (including table styles)
- **framer-motion** (`AnimatedSection` wraps scroll-triggered fade-up), **lucide-react** icons, **Sentry** (error monitoring + `/monitoring` tunnel route in next.config.ts)

## Brand Colors (use hex values directly in className)

| Token | Hex | Usage |
|---|---|---|
| Primary blue | `#1A72C0` | CTAs, links, eyebrows |
| Gold/accent | `#E8A020` | Secondary CTAs, numbered circles, highlights |
| Dark navy | `#1A1A2E` | Dark section backgrounds, headings |
| Light gray | `#F3F4F6` | Alternating section backgrounds |

## Architecture

### Single Source of Truth
All editable business content (phone, email, company name, webinar URL, social links, locations) lives in `src/lib/constants.ts`. Never hardcode these elsewhere. `SITE_URL` from constants is used by sitemap, schema, and canonicals.

### Content-as-data (no CMS)
All article content lives in typed arrays consumed by dynamic routes and `sitemap.ts`:

- `src/lib/blogPosts.ts` — ~70 posts at `/blogs/[slug]`. Content is raw Webflow-migrated HTML in single-line template literals. Fields: `date` (original publish date, human format "July 9, 2026"), optional `updated` (set ONLY on substantial updates — renders "Updated {date}" and becomes schema `dateModified`), optional `faqs` (Q&A pairs emitted as FAQPage schema — **must mirror the FAQ section inside `content`**).
- `src/lib/medicareCoveragePosts.ts` — 7 pillar guides at `/medicare-coverage/[slug]`.
- `src/lib/faqs.ts` — 29 standalone FAQ pages at `/resources/faq/[slug]`.

Adding/removing a post automatically updates `generateStaticParams` and the sitemap. **Never change a published slug** — URLs carry SEO equity.

### SEO infrastructure
- `src/components/seo/` — `BlogPostingSchema` (converts human dates → ISO, author = Steve Germain Person entity), `FAQSchema`, `LocalBusinessSchema`.
- `src/app/sitemap.ts` + `src/app/robots.ts` — sitemap excludes `/book` and `/resources/faq` (no page.tsx there; only nested routes exist).
- **Redirects in `next.config.ts`** preserve legacy Webflow URLs: `/blog/[slug]` → `/blogs/[slug]`, retired posts → `/blogs` (see `retiredSlugs`), and catch-alls `/retirement/:slug+`, `/life-insurance/:slug+`, `/critical-illness/:slug+` → their service pages. ⚠️ **Before adding real subpages under those three routes, replace the catch-all with per-slug redirects** — redirects run before routes and would shadow new pages. Redirect destinations must always be final URLs (no chains); Next.js emits 308 for `permanent: true` (equivalent to 301 for SEO).
- Every blog post renders an author byline, original + updated dates, and JSON-LD; metadata/canonicals come from `generateMetadata` in each `page.tsx`.

### Page Pattern
Two-file pattern separating server metadata from client interactivity:
- `page.tsx` — server component, exports `metadata`, renders the `*Client` component
- `*Client.tsx` — `"use client"`, all JSX/framer-motion/state

Global layout wraps every page with `AnnouncementBar → Header → <main> → Footer`. `/watch` and `/watch/video` render their own minimal header inline. `Footer` holds the required Medicare legal disclaimer — edit it there only.

### Webinar Funnel
`/watch` (gated opt-in form) → POST `/api/register` → GoHighLevel webhook (`GHL_WEBHOOK_URL` in `.env.local`) → client redirects to `/watch/video` (YouTube embed).

### Form Protection (all three public forms)
Every API route (`/api/book`, `/api/contact`, `/api/register`) runs the same layered anti-spam pipeline in order: IP rate limit → honeypot → speed check (< 3 s = silent reject) → Cloudflare Turnstile server verification → field validation → bot value detection.

Shared libraries:
- `src/lib/formValidation.ts` — regex constants, normalizers, `isBotValue()` — safe to import from client or server
- `src/lib/spam.ts` — `isRateLimited`, `verifyTurnstile`, `logRejection`, `getClientIp` — server-only
- `src/components/TurnstileWidget.tsx` — reusable CF widget, no npm package; renders `null` when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is unset (dev)

Required env vars: `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (client-safe) and `TURNSTILE_SECRET_KEY` (server-only). Both are in `.env.local` and must be set in Vercel. Honeypot/speed rejections return silent `{ success: true }` so bots learn nothing; Turnstile failures return `403`. All rejections log to Vercel functions as `[SPAM_BLOCK]`.

### Inner Page Content Pattern
Medicare, Retirement, Life Insurance, and Critical Illness pages share one layout: minimal intro + two CTAs, numbered items (`01`, `02`…) separated by `divide-y divide-[#E5E7EB]`, "The Bottom Line" callout per item, dark navy CTA section at bottom.

### Public Assets
- `/public/slideshow/` — s01–s13.jpg (s04, s05, s12 missing); Hero slideshow with per-slide `objectPosition`
- `/public/team/` — steve.jpg, miderve.jpg; `/public/medicare-decoded-guide.pdf`; `/public/logo.jpg` (apply `brightness-0 invert` on dark backgrounds)

## SEO Operations (docs/)

This site is run as an ongoing organic-growth program. Before making content or SEO changes, check:
- `docs/seo-performance-dashboard.md` — priority articles, GSC metrics, monthly review protocol, **page-1 freeze rule** (articles ranking top-10 get no further changes)
- `docs/update-expand-implementation-plan.md` — approved phased content work; `docs/redirect-final-review.md` — pruning decisions (KEEP > UPDATE > EXPAND > MERGE > REDIRECT > REMOVE)
- `docs/publishing-workflow.md` + `docs/internal-linking-standards.md` — gates for every new/updated article (fact-check vs Medicare.gov/CMS/SSA, internal links, FAQ schema)
- `ANNUAL_UPDATE.md` — every November: update Medicare constants (Part B premium, Part D parameters, IRMAA brackets) in the 4 calculator tools under `src/app/tools/`. Current verified 2026 figures live there — reuse them in article content rather than re-deriving.

Medicare content is YMYL: every dollar figure must trace to CMS/SSA/Medicare.gov, and annual figures should be flagged for the November sweep. Content pruning (redirects/removals/merges) always requires Steve's explicit approval first.

### Blog preview gate (required)
**Never push a new or substantially rewritten blog post to `main` without Steve reviewing a rendered preview first.** Minor mechanical edits (typo fixes, link additions, date stamps, schema wiring) don't need the gate; anything a reader would notice as new or changed content does.

Preview workflow (private Vercel URL):
1. Stage the post on a branch named `draft/<short-name>` (**keep the name short — the full branch slug must stay ≤ ~19 chars** or the branch-alias URL exceeds DNS's 63-char label limit) and push it.
2. Vercel builds a preview at `https://ae-insurance-agency-git-draft-<short-name>-ae-insurance.vercel.app` — verify the URL responds (302 → vercel.com/sso-api is correct: Deployment Protection is ON, so only Steve, logged into Vercel, can view; previews are also `x-robots-tag: noindex`). If the alias doesn't resolve, get the exact deployment URL via `npx vercel ls ae-insurance-agency`.
3. Send Steve the preview link (deep-link straight to `/blogs/<slug>`) plus screenshots in chat.
4. On his explicit approval: merge the branch into `main`, push, verify live, delete the branch.

The repo is linked to Vercel (`.vercel/project.json`, team `ae-insurance`); the CLI is authenticated — use `npx vercel`.
