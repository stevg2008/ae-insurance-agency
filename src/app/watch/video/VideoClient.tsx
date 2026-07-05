"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, BookOpen } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/constants";

export default function VideoClient() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Minimal Header ── */}
      <header className="bg-[#1A72C0] py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-white font-extrabold text-lg tracking-wide">A&amp;E Insurance Agency</span>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-white font-bold hover:text-[#E8A020] transition-colors text-sm"
          >
            <Phone size={15} />
            {PHONE}
          </a>
        </div>
      </header>

      {/* ── Confirmation strip ── */}
      <div className="bg-green-600 text-white text-center py-2.5 px-4 text-sm font-bold tracking-wide">
        ✅ You&apos;re registered! Your free resources are on the way.
      </div>

      {/* ── Video section ── */}
      <section className="py-12 px-4 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-[#DBEAFE] text-[#1A72C0] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Your Free Workshop
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
              Medicare Made Simple
            </h1>
            <p className="text-[#4B5563]">Watch the full workshop below. Have questions? Call us at <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] font-bold">{PHONE}</a>.</p>
          </motion.div>

          {/* Video embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/uhAOKdlp1bg?autoplay=1&rel=0"
              title="Medicare Made Simple — Free Workshop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <p className="text-center text-[#9CA3AF] text-xs mt-4">
            💡 Tip: Watch until the end — Steve covers how to get your personalized plan at no cost.
          </p>
        </div>
      </section>

      {/* ── Booking Calendar Section ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-[#FEF3C7] text-[#E8A020] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Next Step
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              Book Your Free Medicare Review
            </h2>
            <p className="text-[#4B5563] text-base max-w-2xl mx-auto leading-relaxed">
              Steve will build your personalized Medicare roadmap — your doctors, your budget, your timeline.
              No pressure. No sales pitch. Just honest answers from an independent broker who works for you.
            </p>
          </motion.div>

          {/* What you get bullets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-2xl mx-auto"
          >
            {[
              "Side-by-side comparison of your best plan options",
              "Exact enrollment timeline based on your birthday",
              "Review of your doctors and prescriptions",
              "Answers to every Medicare question you have",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-[#4B5563] text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Embedded Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]"
            style={{ minHeight: 700 }}
          >
            <iframe
              src="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
              style={{ width: "100%", height: 700, border: "none" }}
              title="Book a Free Medicare Consultation with Steve Germain"
              scrolling="yes"
            />
          </motion.div>

          {/* Prefer to call */}
          <p className="text-center text-[#9CA3AF] text-sm mt-6">
            Prefer to call? Reach Steve directly at{" "}
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] font-bold hover:underline">
              {PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* ── Free Guide CTA ── */}
      <section className="py-14 px-4 bg-[#F3F4F6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-[#E5E7EB]"
          >
            <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
              <BookOpen size={28} className="text-[#1A72C0]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-extrabold text-[#1A1A2E] mb-2">Download Medicare Decoded — Free</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                Steve&apos;s plain-English guide covers every part of Medicare, common mistakes to avoid, and how to pick the right plan for your situation.
              </p>
              <a
                href="https://assets.cdn.filesafe.space/KQ2C7PNRgoxVKqxmCXlN/media/69964f3ff02fa42d366984e9.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-xs px-6 py-3 rounded-lg transition-colors"
              >
                Download Free PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="bg-[#111827] py-6 px-4 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} A&E Insurance Agency · {PHONE} · {EMAIL}
        </p>
        <p className="text-white/30 text-xs mt-2 max-w-2xl mx-auto">
          This is not a government website. A&E Insurance Agency is an independent insurance agency. We are not affiliated with Medicare or any government agency.
        </p>
      </footer>

    </div>
  );
}
