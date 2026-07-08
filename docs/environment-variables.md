# Environment Variables

All secrets go in `.env.local` (never committed). For production, set these in your hosting dashboard (Vercel → Project → Settings → Environment Variables).

---

## Required Variables

| Variable | Purpose | Where to Get It |
|---|---|---|
| `GHL_WEBHOOK_URL` | GoHighLevel webhook for webinar registrations (`/api/register`) | GHL → Automation → Webhook trigger URL |
| `GHL_CONTACT_WEBHOOK_URL` | GoHighLevel webhook for contact form submissions (`/api/contact`) | GHL → Automation → Webhook trigger URL |
| `GHL_BOOK_WEBHOOK_URL` | GoHighLevel webhook for book modal submissions (`/api/book`) | GHL → Automation → Webhook trigger URL |

---

## Optional / Future Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA4_ID` | If you move GA4 ID out of hardcode — currently hardcoded as `G-ZG55M8F9H5` in `src/app/layout.tsx` |
| `META_PIXEL_ID` | Meta Pixel ID when implemented |

---

## Local Development Setup

Create `.env.local` in the project root:

```bash
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID/webhook-trigger/YOUR_TRIGGER
GHL_CONTACT_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID/webhook-trigger/YOUR_TRIGGER
GHL_BOOK_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID/webhook-trigger/YOUR_TRIGGER
```

---

## Production Verification

Before launch, verify each webhook fires correctly:

1. Submit the contact form at `/contact` — confirm lead appears in GHL
2. Submit a book request via the BookModal — confirm lead appears in GHL  
3. Register at `/watch` — confirm lead appears in GHL and is tagged correctly

All three API routes (`/api/contact`, `/api/book`, `/api/register`) log errors to the console if the webhook call fails — check Vercel Functions logs if leads aren't appearing.

---

## Security Notes

- `.env.local` is in `.gitignore` — never commit it
- GHL webhook URLs don't contain API keys but are still private — don't share them publicly
- No customer PII is stored in this codebase — all data flows to GHL
