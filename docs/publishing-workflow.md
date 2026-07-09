# Publishing Workflow

Input accepted: topic · outline · transcript · webinar · YouTube video · voice memo · VA draft.

## Pipeline (every piece)

1. **Research** — search intent, SERP competitors, People-Also-Ask, existing site coverage (avoid cannibalization — check GSC for queries already owned by another page), entity/keyword map.
2. **Brief** — primary keyword, supporting keywords, cluster + pillar assignment, internal link plan (2 in / 4+ out), CTA choice, visual plan.
3. **Draft** — brand voice (professional, educational, never pushy; per ae-brand-positioning). Question-based H2s, direct-answer blocks, table or list, FAQ section.
4. **Fact-check gate** — every Medicare/SSA figure verified against Medicare.gov / CMS.gov / SSA.gov. Annual values tagged `<!-- ANNUAL -->`. YMYL rule: if a claim can't be sourced, cut it.
5. **On-page assembly** — SEO title (≤60 chars), meta description (140–160), slug (short, keyword-first, no dates), H1, alt text, BlogPosting + FAQPage schema, canonical, breadcrumbs, related articles.
6. **Add to codebase** — new entry in `src/lib/blogPosts.ts` (until MDX migration): slug, title, excerpt, image, real ISO date, readTime, content. Update 2 existing articles with inbound links.
7. **QA** — `npx tsc --noEmit` + `npm run build`; preview locally; run Steve's 8-dimension page audit (trust, messaging, UX, design, conversion, SEO, accessibility, mobile).
8. **Ship** — commit to GitHub `main` → Vercel auto-deploys.
9. **Verify production** — fetch live URL, confirm 200, metadata, schema (Rich Results test), sitemap inclusion.
10. **Distribute/index** — submit URL in GSC (or Search Atlas indexer), queue social snippet if applicable.

## Update workflow (existing articles)

Same gates 4–9, plus: preserve slug (never change URLs), set real `dateModified`, keep what ranks (check owned queries in GSC before rewriting H1/title).

## Cadence

4–5 pieces/month (≈2 new, 2–3 updates). Seasonal calendar in content-roadmap-12-month.md. Monthly GSC review feeds the backlog (seo-kpis-and-backlog.md).

## Architectural note (needs Steve's approval before acting)

`blogPosts.ts` holds 77 posts of raw Webflow HTML in one 2,656-line TypeScript file. Workable near-term; long-term recommendation is MDX files per post (better authoring, diffs, images, components) with identical URLs. HIGH-RISK migration — proposed for Phase 3, not before.
