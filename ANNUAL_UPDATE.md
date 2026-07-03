# Medicare Calculator — Annual Update Guide

**When:** Every year in **November**, after CMS announces the following year's rates.
CMS typically announces in late October or early November.

**How long it takes:** ~15 minutes with Claude Code.

---

## Step 1 — Find the new official numbers

Look up these 5 numbers from official sources only (cms.gov, ssa.gov, medicare.gov):

| Number | Where to find it |
|---|---|
| Part B standard monthly premium | medicare.gov → "Part B costs" |
| Part D national base beneficiary premium | cms.gov → search "Part D base beneficiary premium 20XX" |
| Part D maximum deductible | cms.gov → search "Part D standard parameters 20XX" |
| Part D catastrophic OOP threshold | cms.gov → search "Part D standard parameters 20XX" |
| IRMAA brackets (6 brackets, Part B + Part D surcharges) | ssa.gov → "Medicare Premiums" page |

---

## Step 2 — Open Claude Code and paste this prompt

Open a new Claude Code session in this project folder and paste the following:

---

```
It's November and CMS has announced the new Medicare rates for [YEAR].

Here are the official numbers I found:
- Part B standard premium: $[X.XX]/month
- Part D base beneficiary premium: $[X.XX]/month
- Part D deductible maximum: $[XXX]
- Part D catastrophic OOP threshold: $[X,XXX]

IRMAA brackets for [YEAR] (based on [YEAR-2] MAGI):
Standard:    Individual ≤ $[X]     / Joint ≤ $[X]      — Part B surcharge: $0.00    / Part D: $0.00
Bracket 1:   Individual $[X–X]     / Joint $[X–X]       — Part B surcharge: $[X.XX]  / Part D: $[X.XX]
Bracket 2:   Individual $[X–X]     / Joint $[X–X]       — Part B surcharge: $[X.XX]  / Part D: $[X.XX]
Bracket 3:   Individual $[X–X]     / Joint $[X–X]       — Part B surcharge: $[X.XX]  / Part D: $[X.XX]
Bracket 4:   Individual $[X–X]     / Joint $[X–X]       — Part B surcharge: $[X.XX]  / Part D: $[X.XX]
Bracket 5:   Individual ≥ $[X]     / Joint ≥ $[X]       — Part B surcharge: $[X.XX]  / Part D: $[X.XX]

MFS Part D brackets:
Row 1: ≤ $[X]           — Part D: $0.00
Row 2: $[X–X]           — Part D: $[X.XX]
Row 3: ≥ $[X]           — Part D: $[X.XX]

Please update all 4 Medicare calculator tool files with these numbers, 
rename all constants and references from [CURRENT_YEAR] to [YEAR],
run the TypeScript check, commit, and push to main.
```

---

## Files Claude will update

| File | What changes |
|---|---|
| `src/app/tools/part-b-penalty-calculator/PartBPenaltyClient.tsx` | Part B standard premium + year strings |
| `src/app/tools/part-d-penalty-calculator/PartDPenaltyClient.tsx` | 3 Part D constants + year strings |
| `src/app/tools/irmaa-calculator/IrmaaClient.tsx` | Standard premium + all 6 IRMAA brackets + MFS table + year strings |
| `src/app/tools/*/page.tsx` (3 files) | Title/description year strings |

**Does NOT change:** `EnrollmentCalculatorClient.tsx` — IEP rules are set by federal law.

---

## Step 3 — Verify after deploy

After Claude pushes and Vercel deploys (~2 min), spot-check these:

- **Part B tool:** Enter 24 months → penalty should equal `20% × new_premium`
- **Part D tool:** Enter 12 months → penalty should equal `12% × new_base_premium`, rounded to nearest $0.10
- **IRMAA tool:** Select Bracket 1 Individual → Part B total should equal `standard_premium + bracket1_surcharge`

---

## Current values (plan year 2026)

| Constant | Value | Source confirmed |
|---|---|---|
| Part B standard premium | $202.90/month | CMS Nov 2025 |
| Part D base beneficiary premium | $38.99/month | CMS Nov 2025 |
| Part D deductible maximum | $615 | CMS Nov 2025 |
| Part D catastrophic OOP threshold | $2,100 | CMS Nov 2025 |
| IRMAA standard threshold (individual) | $109,000 | SSA Nov 2025 |
| IRMAA Bracket 1 Part B surcharge | $81.20/month | SSA Nov 2025 |
| IRMAA Bracket 1 Part D surcharge | $14.50/month | SSA Nov 2025 |

---

## Set a reminder

Add a calendar event every **November 15** titled:
**"Update Medicare calculator numbers — cms.gov + ssa.gov"**

It takes 15 minutes and keeps every tool on your site legally and factually accurate.
