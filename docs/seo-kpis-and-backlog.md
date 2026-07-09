# KPIs & Prioritized SEO Backlog

## KPIs (reviewed monthly; baseline = Apr 9 – Jul 8, 2026)

| KPI | Baseline | 6-mo target | 12-mo target |
|---|---|---|---|
| Organic clicks / 90 days (GSC) | 260 | 1,500 | 5,000 |
| Impressions / 90 days | 66,400 | 250,000 | 600,000 |
| Keywords in top 10 | ~15 | 60 | 150 |
| Consultation conversions from organic (GA4: form + call + book events) | establish in GA4 | 10/mo | 30/mo |
| Medicare cluster pages indexed & earning impressions | ~35 | 60 | 90 |
| AI visibility (Search Atlas LLM-visibility project — citations for brand + "medicare broker miami"-class prompts) | not tracked | tracked + first citations | cited for 5+ core prompts |
| CWV (all green, field data) | verify | maintain | maintain |
| 404s with impressions | 14+ | 0 | 0 |

North star: **qualified consultation requests**, not traffic. Every monthly review reports clicks → consultations, not clicks alone.

## Prioritized Backlog (by expected business impact)

| # | Item | Risk | Status |
|---|---|---|---|
| 1 | P0: 301 redirects for 14+ legacy Webflow URLs (map in 2026-07-content-audit.md §3) | LOW | **awaiting go-ahead — ready to ship** |
| 2 | Fix blog dates: real ISO datePublished/dateModified in schema; stop showing migration date on all 77 posts | LOW | approved format needed (real original dates from Webflow CSV in repo root) |
| 3 | Rebuild Social Security & Medicare coordination page (pos 6–17 queries, 404 target) | LOW | roadmap Jul |
| 4 | Expand top asset (MA vs Medigap FL) + its pillar | LOW | roadmap Jul |
| 5 | Add /resources/faq + /book to sitemap.ts; fix `about` field in BlogPostingSchema for non-Medicare posts | LOW | ready |
| 6 | Enrollment Periods pillar + Plan G/N/HD-G pages | LOW | roadmap Jul–Aug |
| 7 | Prune/redirect ~21 off-topic lifestyle/P&C posts | MEDIUM | **needs Steve approval** |
| 8 | Merge duplicate/thin generic posts (map in audit §5D) | MEDIUM | needs approval |
| 9 | Local expansion: Broward + Palm Beach guides | LOW | roadmap Oct |
| 10 | Set up Search Atlas rank-tracking (krt) project + LLM-visibility (llmv) project for core keywords | LOW | proposed |
| 11 | Rebuild retirement subpages (income planning, annuities, LTC) | LOW | roadmap May 2027 |
| 12 | MDX migration for blog content | HIGH | **needs approval — Phase 3** |

## Phased Implementation

- **Phase 0 (this week):** items 1, 2, 5 — pure protection, no content changes.
- **Phase 1 (Jul–Aug):** items 3, 4, 6, 10 — win striking-distance keywords.
- **Phase 2 (Aug–Sep, after approval):** items 7, 8 — consolidate topical authority before AEP.
- **Phase 3 (Q4+):** items 9, 11, 12 — expansion + infrastructure.

## Monthly review checklist

1. GSC: clicks/impressions/position trend; new + declining queries; striking-distance list refresh
2. GA4: organic → consultation funnel
3. Content decay: any KEEP article losing position >5 spots → queue UPDATE
4. Internal links: orphans, broken links
5. Backlog re-rank by impact; report to Steve with recommendations
