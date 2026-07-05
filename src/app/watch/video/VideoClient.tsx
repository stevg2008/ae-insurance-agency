"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
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

      {/* ── STEP 1: Video ── */}
      <section className="py-12 px-4 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-[#1A72C0] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Step 1 of 2
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-3">
              Watch the Medicare 101 Workshop
            </h1>
            <p className="text-[#4B5563]">
              29 minutes. Plain English. No fluff. Have questions?{" "}
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] font-bold">
                Call {PHONE}
              </a>
            </p>
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
            💡 Watch until the end — Steve covers how to get your personalized plan at no cost.
          </p>
        </div>
      </section>

      {/* ── Step connector ── */}
      <div className="flex flex-col items-center py-6 bg-white">
        <div className="w-px h-8 bg-[#E5E7EB]" />
        <div className="w-8 h-8 rounded-full bg-[#E8A020] flex items-center justify-center">
          <span className="text-[#1A1A2E] font-extrabold text-sm">↓</span>
        </div>
        <div className="w-px h-8 bg-[#E5E7EB]" />
      </div>

      {/* ── STEP 2: Book ── */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-[#E8A020] text-[#1A1A2E] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Step 2 of 2
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              Book Your Free Medicare Review
            </h2>

            {/* Bridge paragraph */}
            <p className="text-[#4B5563] text-base max-w-2xl mx-auto leading-relaxed mb-6">
              The workshop explains how Medicare works. Your free review applies it to{" "}
              <strong>you specifically</strong> — your doctors, your prescriptions, your budget, and
              your retirement timeline. Most people find a better plan and save money they didn&apos;t
              know they were leaving on the table.
            </p>

            {/* Social proof */}
            <div className="bg-[#F3F4F6] rounded-xl px-6 py-4 max-w-xl mx-auto mb-8 text-left">
              <p className="text-[#4B5563] text-sm italic leading-relaxed">
                &ldquo;Steve was extremely helpful and patient with my lack of knowledge of Medicare transitioning. He offered insights and opinions that many others never touched on for my situation. He never pushed for or hinted to make a commitment to close the decision. That&apos;s one main reason I came back to him exactly one month later.&rdquo;
              </p>
              <p className="text-[#1A72C0] text-xs font-bold mt-2">— Robert M. ⭐⭐⭐⭐⭐ Google Review</p>
            </div>

            {/* What you get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto text-left">
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
            </div>


          </motion.div>

          {/* Embedded Calendar — responsive height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]"
          >
            {/* Mobile: link button */}
            <div className="block sm:hidden p-8 text-center bg-[#F3F4F6]">
              <p className="text-[#4B5563] text-sm mb-5">
                Tap below to pick a time that works for you — in person or by phone.
              </p>
              <a
                href="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#D4911B] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors w-full max-w-sm"
              >
                Choose Your Appointment Time →
              </a>
            </div>

            {/* Desktop: embedded iframe */}
            <div className="hidden sm:block">
              <iframe
                src="https://link.aeinsurancefl.com/widget/booking/gnH26nD1h46Zd5rO88gz"
                style={{ width: "100%", height: 900, border: "none" }}
                title="Book a Free Medicare Consultation with Steve Germain"
                scrolling="yes"
              />
            </div>
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
