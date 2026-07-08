# Tracking Events — Implementation Reference

**Measurement ID:** G-ZG55M8F9H5  
**See also:** [analytics-architecture.md](./analytics-architecture.md)

---

## How to Fire a GA4 Event

```typescript
// Anywhere in a "use client" component:
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}
```

---

## Event Catalog

### `book_consultation`
Fires when the GHL booking iframe sends a postMessage indicating booking confirmation.

```typescript
// In VideoClient.tsx — listen for iframe postMessage
useEffect(() => {
  const handler = (e: MessageEvent) => {
    if (e.data?.type === "booking_confirmed" || String(e.data).includes("booking")) {
      trackEvent("book_consultation", { method: "ghl_calendar" });
    }
  };
  window.addEventListener("message", handler);
  return () => window.removeEventListener("message", handler);
}, []);
```

> Note: Verify the exact postMessage payload GHL sends by checking the Network tab in DevTools after a test booking.

---

### `contact_form_submit`
Fires in `ContactClient.tsx` after `/api/contact` returns 200.

```typescript
// In handleSubmit, after setSubmitted(true):
trackEvent("contact_form_submit", { form_location: "contact_page" });
```

---

### `book_modal_submit`
Fires in `BookModal.tsx` after successful API call.

```typescript
trackEvent("book_modal_submit", { form_location: "book_modal" });
```

---

### `watch_register`
Fires in `WatchClient.tsx` after `/api/register` returns 200, before router.push.

```typescript
trackEvent("watch_register", { form_location: "watch_funnel" });
```

---

### `phone_click`
Option A — add `onClick` to each `<a href="tel:...">` link.  
Option B (recommended) — global click listener in layout:

```typescript
// In a small "use client" analytics component added to layout.tsx
useEffect(() => {
  const handler = (e: MouseEvent) => {
    const el = (e.target as HTMLElement).closest("a[href^='tel:']");
    if (el) trackEvent("phone_click", { phone_number: el.getAttribute("href") });
  };
  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}, []);
```

---

### `cta_click`
Add to primary CTA buttons (Schedule Consultation, Get Free Quote, Book Free Review):

```typescript
onClick={() => {
  trackEvent("cta_click", { cta_text: "Schedule a Consultation", cta_location: "header" });
}}
```

---

### `pdf_download`
In `FreeBook.tsx`, on the "Download Free PDF" button click:

```typescript
onClick={() => {
  trackEvent("pdf_download", { file_name: "medicare-decoded-guide.pdf" });
  setModalOpen(true);
}}
```

---

### `calculator_complete`
In each calculator's result display, after the result is shown:

```typescript
trackEvent("calculator_complete", { calculator: "enrollment" }); // or "part_b_penalty", "part_d_penalty", "irmaa"
```

---

## GA4 Conversions to Mark

In GA4 Admin → Events → toggle "Mark as conversion" for:
- `book_consultation`
- `contact_form_submit`
- `book_modal_submit`
- `watch_register`
- `phone_click`
