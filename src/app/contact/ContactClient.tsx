"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PHONE, EMAIL, LOCATIONS, BUSINESS_HOURS, SOCIAL } from "@/lib/constants";
import GoogleReviews from "@/components/sections/GoogleReviews";
import { analytics } from "@/lib/analytics";

const BEST_TIMES = ["Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–6pm)", "Anytime"];

export default function ContactClient() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", bestTime: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      analytics.contactFormSubmitted();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at " + PHONE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="py-16 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight">
              Expert Guidance Is Just A Call Away
            </h1>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#1A72C0] mb-4 leading-snug">
              We&apos;re here to simplify the process and ensure your future is protected.
            </h2>
            <p className="text-[#4B5563] text-base leading-relaxed">
              At A&E Insurance Agency, we treat our clients like family. Reach out today to schedule a
              face-to-face meeting or a phone consultation at a time that works for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#1A72C0] text-xs font-bold uppercase tracking-widest mb-2">Independent · No Broker Fees</p>
            <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-2">Send Us a Message</h2>
            <p className="text-[#4B5563] text-sm mb-8">Leave your info and we&apos;ll call you back — usually within one business day.</p>

            {submitted ? (
              <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle2 size={40} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-extrabold text-[#1A1A2E] mb-2">We got your message!</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  We'll reach out{form.bestTime ? ` during your preferred time (${form.bestTime})` : " shortly"}. If you need us sooner, call us at{" "}
                  <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] font-semibold hover:underline">{PHONE}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">First Name *</label>
                    <input
                      id="contact-firstName"
                      type="text"
                      required
                      placeholder="John"
                      value={form.firstName}
                      onChange={set("firstName")}
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lastName" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Last Name</label>
                    <input
                      id="contact-lastName"
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={set("lastName")}
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="(954) 555-1234"
                    value={form.phone}
                    onChange={set("phone")}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={set("email")}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-bestTime" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Best Time to Call</label>
                  <select
                    id="contact-bestTime"
                    value={form.bestTime}
                    onChange={set("bestTime")}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors bg-white"
                  >
                    <option value="">Select a time...</option>
                    {BEST_TIMES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Message (optional)</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell us a little about your situation or what you need help with..."
                    value={form.message}
                    onChange={set("message")}
                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-base text-[#1A1A2E] focus:outline-none focus:border-[#1A72C0] transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E8A020] hover:bg-[#D4911B] disabled:opacity-60 text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm py-4 rounded-lg transition-colors"
                >
                  {loading ? "Sending…" : "Send Message — We'll Call You Back"}
                </button>

                <p className="text-[#6B7280] text-xs text-center leading-relaxed">
                  By submitting this form, you consent to receive calls, emails, and text messages from A&amp;E Insurance Agency, including via automated systems. Consent is not required to purchase. Reply STOP to opt out of texts. <a href="/terms" className="underline">Terms</a> · <a href="/privacy" className="underline">Privacy</a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Prefer to book? */}
            <div className="bg-[#1A1A2E] rounded-2xl p-7 text-center">
              <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">Ready to Book Now?</p>
              <p className="text-white text-lg font-extrabold mb-2">Pick a time that works for you</p>
              <p className="text-white/70 text-sm mb-5">In person at our Kendall office or by phone — your choice.</p>
              <a
                href="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-bold text-sm uppercase tracking-wide px-8 py-3.5 rounded-lg transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>

            {/* Address */}
            <div className="border-b border-[#E5E7EB] pb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-2">Our Office</p>
              <p className="font-bold text-[#1A1A2E]">A&E Insurance Agency</p>
              <p className="text-[#4B5563] text-sm">{LOCATIONS[0].address}</p>
            </div>

            {/* Phone + Email */}
            <div className="border-b border-[#E5E7EB] pb-6 space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-1">Phone</p>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A1A2E] font-semibold text-lg hover:text-[#1A72C0] transition-colors">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-1">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-[#1A72C0] hover:underline text-sm">{EMAIL}</a>
              </div>
            </div>

            {/* Hours */}
            <div className="border-b border-[#E5E7EB] pb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-2">Business Hours</p>
              <p className="text-[#4B5563] text-sm">{BUSINESS_HOURS}</p>
              <p className="text-[#4B5563] text-sm">Sat – Sun: Closed</p>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Reviews ── */}
      <GoogleReviews />

    </div>
  );
}
