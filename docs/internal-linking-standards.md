# Internal Linking Standards

Purpose: every article strengthens the ecosystem — pillar pages accumulate authority, money pages accumulate relevance, and visitors always have a next step.

## Rules per article (blogs)

1. **1 link up** to its cluster pillar (`/medicare-coverage/...` or service page) — descriptive anchor, first half of the article.
2. **2–3 sideways links** to sibling articles in the same cluster. Never link just because a keyword matches; link where a reader would genuinely go next.
3. **1 tool link** where relevant (enrollment calculator, Part B/D penalty, IRMAA).
4. **1 conversion link** — /contact, /book, or /watch — in the closing CTA. Education first; the CTA follows naturally from the content.
5. **Anchors**: natural phrases containing the target page's topic ("compare Medigap Plan G and Plan N", never "click here").
6. **Cap**: ~8 internal links per 1,500 words. Over-linking dilutes everything.

## Rules per pillar (/medicare-coverage/*)

- Link down to every cluster article (related-articles block).
- Link sideways to 1–2 adjacent pillars (e.g., Supplement pillar ↔ MA vs Medigap pillar).
- Link to relevant local pages (medicare-broker-miami etc.) once, in a "work with a local broker" context.

## Priority link targets (pages that need equity most, Jul 2026)

1. /medicare-coverage/medicare-advantage-vs-medigap (top asset's pillar; pos 78 → huge headroom)
2. /medicare-coverage/medicare-supplement-plans-medigap (1,320 impr, pos 65)
3. /blogs/medicare-advantage-vs-medicare-supplement-plans-in-florida-which-is-right-for-you (pos 17 → push to page 1)
4. Local pages: /medicare-broker-miami, /medicare-broker-near-me (pos 9–19 cluster)
5. Tools (all four calculators — currently under-linked from content)

## Orphan prevention

Every new article must receive at least 2 inbound links from existing content at publish time (update the two most related existing articles in the same PR). No page in the sitemap should have zero inbound internal links.

## Maintenance

Monthly: crawl for orphans and broken internal links (`npm run build` catches route errors; use Screaming Frog or a link-check script for content links). Quarterly: re-run anchor audit — vary anchors, fix over-optimization.
