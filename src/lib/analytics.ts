type GtagParams = Record<string, string | number | boolean>;

function gtag(event: string, params?: GtagParams) {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (cmd: string, event: string, params?: GtagParams) => void };
  w.gtag?.("event", event, params);
}

export const analytics = {
  contactFormSubmitted: () => gtag("contact_form_submitted", { form_location: "contact_page" }),
  bookModalSubmitted:   () => gtag("book_modal_submitted",   { form_location: "book_modal" }),
  watchRegistered:      () => gtag("watch_registered",       { form_location: "watch_funnel" }),
};
