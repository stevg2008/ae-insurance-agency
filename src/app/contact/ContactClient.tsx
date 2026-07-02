"use client";

import { motion } from "framer-motion";
import { PHONE, EMAIL, LOCATIONS, BUSINESS_HOURS, SOCIAL } from "@/lib/constants";
import GoogleReviews from "@/components/sections/GoogleReviews";

export default function ContactClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero: Headline + Subheading ── */}
      <section className="py-16 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: Big headline */}
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

          {/* Right: Subheading + body */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#1A72C0] mb-4 leading-snug">
              We're here to simplify the process and ensure your future is protected.
            </h2>
            <p className="text-[#4B5563] text-base leading-relaxed">
              At A&E Insurance Agency, we treat our clients like family. Reach out today to schedule a
              face-to-face meeting or a phone consultation at a time that works for you.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Booking Calendar ── */}
      <section className="py-16 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Free · No Pressure · No Obligation</span>
            <h2 className="text-3xl font-extrabold text-[#1A1A2E] mb-3">Pick a Time That Works for You</h2>
            <p className="text-[#4B5563]">In person at our Kendall office or by phone — whichever is easiest.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
            <iframe
              src="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
              scrolling="no"
              id="gnH26nD1h46Zd5rO88gz_contact"
            />
          </div>
        </div>
      </section>

      {/* ── Info + Team Photo ── */}
      <section className="py-16 px-4 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: Contact details */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Address */}
            <div>
              <p className="font-bold text-[#1A1A2E] text-base mb-1">A&E Insurance Agency</p>
              <p className="text-[#4B5563]">{LOCATIONS[0].address}</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-[#1A1A2E]">
                <span className="font-bold">Email: </span>
                <a href={`mailto:${EMAIL}`} className="text-[#1A72C0] hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="font-bold text-[#1A1A2E] mb-1">Business Hours</p>
              <p className="text-[#4B5563]">{BUSINESS_HOURS}</p>
              <p className="text-[#4B5563]">Sat – Sun: Closed</p>
            </div>

            {/* Social */}
            <div>
              <p className="font-bold text-[#1A1A2E] mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer"
                  className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer"
                  className="text-[#4B5563] hover:text-[#1A72C0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone + Team photo */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div>
              <p className="font-bold text-[#1A1A2E] mb-1">Questions? Call us now:</p>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="text-[#1A72C0] text-lg font-semibold hover:underline"
              >
                {PHONE}
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/slideshow/s10.jpg"
                alt="The A&E Insurance Agency team"
                className="w-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Reviews ── */}
      <GoogleReviews />

    </div>
  );
}
