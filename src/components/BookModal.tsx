"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Fields = { firstName: string; lastName: string; email: string; phone: string; zip: string };
type Errors = Partial<Record<keyof Fields, string>>;

const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RE_PHONE = /^\+?1?\s*[-.]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const RE_ZIP = /^\d{5}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.firstName.trim()) e.firstName = "First name is required.";
  if (!f.lastName.trim()) e.lastName = "Last name is required.";
  if (!RE_EMAIL.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!RE_PHONE.test(f.phone.trim())) e.phone = "Enter a valid U.S. phone number.";
  if (!RE_ZIP.test(f.zip.trim())) e.zip = "Enter a valid 5-digit ZIP code.";
  return e;
}

export default function BookModal({ isOpen, onClose }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<Fields>({ firstName: "", lastName: "", email: "", phone: "", zip: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const loadedAt = useRef(0);

  // Stamp the time the modal became visible — used for bot speed detection
  useEffect(() => {
    if (isOpen) loadedAt.current = Date.now();
  }, [isOpen]);

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear the per-field error as the user types
    if (name in (errors as object)) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof Fields];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          zip: form.zip.trim(),
          _hp: honeypot,
          _t: Date.now() - loadedAt.current,
        }),
      });

      if (res.status === 429) {
        setSubmitError("Too many attempts. Please wait a moment and try again.");
        return;
      }
      if (res.status === 400) {
        const data = await res.json() as { error?: string };
        setSubmitError(data.error ?? "Please check your information and try again.");
        return;
      }
      if (!res.ok) throw new Error("server");

      analytics.bookModalSubmitted();
      onClose();
      router.push("/book/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  function inputClass(field: keyof Fields) {
    return `w-full border rounded-lg px-3 py-2.5 text-[16px] text-[#1A1A2E] focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400 bg-red-50"
        : "border-[#D1D5DB] focus:border-[#1A72C0]"
    }`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#1A1A2E] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-2">
          Get Your Free Medicare Guide
        </h2>
        <p className="text-[#4B5563] text-sm mb-6">
          Enter your information below to receive your comprehensive Medicare guide.
        </p>

        {/* Honeypot — invisible to real users, bots fill it in */}
        <div aria-hidden="true" className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
          <input
            tabIndex={-1}
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* First / Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="bm-firstName" className="block text-xs font-semibold text-[#1A1A2E] mb-1">
                First Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="bm-firstName"
                name="firstName"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                aria-required="true"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "bm-firstName-err" : undefined}
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p id="bm-firstName-err" className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="bm-lastName" className="block text-xs font-semibold text-[#1A1A2E] mb-1">
                Last Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="bm-lastName"
                name="lastName"
                placeholder="Doe"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                aria-required="true"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "bm-lastName-err" : undefined}
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p id="bm-lastName-err" className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="bm-email" className="block text-xs font-semibold text-[#1A1A2E] mb-1">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="bm-email"
              name="email"
              type="email"
              inputMode="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "bm-email-err" : undefined}
              className={inputClass("email")}
            />
            {errors.email && (
              <p id="bm-email-err" className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="bm-phone" className="block text-xs font-semibold text-[#1A1A2E] mb-1">
              Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="bm-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="(555) 555-5555"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel-national"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "bm-phone-err" : undefined}
              className={inputClass("phone")}
            />
            {errors.phone && (
              <p id="bm-phone-err" className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* ZIP */}
          <div>
            <label htmlFor="bm-zip" className="block text-xs font-semibold text-[#1A1A2E] mb-1">
              ZIP Code <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="bm-zip"
              name="zip"
              inputMode="numeric"
              placeholder="12345"
              maxLength={5}
              value={form.zip}
              onChange={handleChange}
              autoComplete="postal-code"
              aria-required="true"
              aria-invalid={!!errors.zip}
              aria-describedby={errors.zip ? "bm-zip-err" : undefined}
              className={inputClass("zip")}
            />
            {errors.zip && (
              <p id="bm-zip-err" className="text-red-500 text-xs mt-1">{errors.zip}</p>
            )}
          </div>

          {submitError && (
            <p role="alert" className="text-red-500 text-xs">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm py-3.5 rounded-lg transition-colors disabled:opacity-60"
          >
            {loading ? "Sending…" : "Get Your Free Guide"}
          </button>

          <p className="text-[#9CA3AF] text-xs text-center leading-relaxed mt-3">
            By submitting, you consent to receive calls, emails, and texts from A&amp;E Insurance Agency,
            including via automated systems. Consent is not required to purchase. Reply STOP to opt out.
          </p>
        </form>
      </div>
    </div>
  );
}
