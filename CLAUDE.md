@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on port 3000
npm run build     # Production build (runs tsc + next build)
npm run lint      # ESLint
npx tsc --noEmit  # Type-check only, no output files
```

Always run `npx tsc --noEmit` after editing `.tsx`/`.ts` files to catch type errors before reporting work done.

## Stack

- **Next.js 16** (App Router, `src/` directory, TypeScript)
- **Tailwind CSS v4** — uses `@theme` directive in `globals.css`, **not** `tailwind.config.ts`. All brand color tokens are defined there.
- **framer-motion** — `AnimatedSection` wraps scroll-triggered fade-up; `motion.*` used directly for hero/above-fold animations
- **lucide-react** for icons

## Brand Colors (use these hex values directly in className)

| Token | Hex | Usage |
|---|---|---|
| Primary blue | `#1A72C0` | CTAs, links, eyebrows |
| Gold/accent | `#E8A020` | Secondary CTAs, numbered circles, highlights |
| Dark navy | `#1A1A2E` | Dark section backgrounds, headings |
| Light gray | `#F3F4F6` | Alternating section backgrounds |

## Architecture

### Single Source of Truth
All editable content (phone, email, company name, webinar URL, social links, locations) lives in `src/lib/constants.ts`. Never hardcode these values elsewhere.

### Page Pattern
Pages use a two-file pattern to separate server metadata from client interactivity:
- `page.tsx` — server component, exports `metadata`, renders the `*Client` component
- `*Client.tsx` — `"use client"` component with all JSX, framer-motion, and state

The global layout (`src/app/layout.tsx`) wraps every page with `AnnouncementBar → Header → <main> → Footer`. Pages that need a different header/footer (e.g. `/watch`, `/watch/video`) render their own minimal header inline and do **not** use a nested layout — they rely on the root layout being overridden by opting out.

### Webinar Funnel
`/watch` — gated opt-in page with a native form. Submits to `/api/register` (Next.js Route Handler), which POSTs to GoHighLevel via `GHL_WEBHOOK_URL` env var, then the client redirects to `/watch/video`.  
`/watch/video` — post-registration page with the YouTube embed (`uhAOKdlp1bg`) and next steps.  
The GHL webhook URL is stored in `.env.local` as `GHL_WEBHOOK_URL`.

### Inner Page Content Pattern
Medicare, Retirement, Life Insurance, and Critical Illness pages all follow the same Gruening Health & Wealth layout:
- Minimal intro section (no hero image) with headline + two CTA buttons
- Numbered steps/products (`01`, `02` … ) separated by `divide-y divide-[#E5E7EB]`
- Each item: large colored number, bold title, blue subtitle, bullet points with bold labels, "The Bottom Line" callout box with a left border in the step's accent color
- Dark navy `#1A1A2E` CTA section at the bottom

### Key Components
- `AnimatedSection` — scroll-triggered fade-up wrapper; use `delay` prop to stagger siblings
- `Header` — nav links defined in `navLinks` array at top of file; dropdown children use the `children` key
- `Footer` — contains the required Medicare legal disclaimer at the bottom of every page; update disclaimer text here only

### Public Assets
- `/public/slideshow/` — s01–s13.jpg (s04, s05, s12 don't exist); used in Hero slideshow with per-slide `objectPosition`
- `/public/team/` — steve.jpg, miderve.jpg
- `/public/medicare-decoded-guide.pdf` — free book download
- `/public/logo.jpg` — tightly cropped logo; apply `brightness-0 invert` on dark backgrounds
