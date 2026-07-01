"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, BookOpen, Map, FileText, CalendarCheck } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/constants";

const NEXT_STEPS = [
  { icon: BookOpen, title: "Download Your Free Medicare Guide", desc: "Get Steve's Medicare Decoded book — digital copy below or call to have a printed copy mailed to you.", action: { label: "Download PDF Free", href: "/medicare-decoded-guide.pdf", download: true } },
  { icon: CalendarCheck, title: "Book Your Free Consultation", desc: "Talk 1-on-1 with Steve. He'll build a personalized Medicare roadmap around your doctors, budget, and needs.", action: { label: "Call " + PHONE, href: `tel:${PHONE.replace(/\D/g, "")}`, download: false } },
];

export default function VideoClient() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Minimal Header ── */}
      <header className="bg-[#1A72C0] py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="/logo.jpg" alt="A&E Insurance Agency" className="h-10 w-auto brightness-0 invert" />
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

          {/* Progress hint */}
          <p className="text-center text-[#9CA3AF] text-xs mt-4">
            💡 Tip: Watch until the end — Steve covers how to get your personalized plan at no cost.
          </p>
        </div>
      </section>

      {/* ── Next steps ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-2">Your Next Steps</h2>
            <p className="text-[#6B7280]">Everything below is 100% free — no obligation, no pressure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEXT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#F3F4F6] rounded-2xl p-7 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                    <Icon size={20} className="text-[#1A72C0]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1A1A2E] mb-2">{step.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{step.desc}</p>
                    <a
                      href={step.action.href}
                      {...(step.action.download ? { download: true } : {})}
                      className="inline-block bg-[#1A72C0] hover:bg-[#155fa0] text-white font-bold uppercase tracking-wide text-xs px-5 py-3 rounded-lg transition-colors"
                    >
                      {step.action.label}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to expect on your call ── */}
      <section className="py-14 px-4 bg-[#1A72C0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">What to Expect on Your Free Call</h2>
          <p className="text-white/60 text-sm mb-8">A typical first call with Steve takes 20–30 minutes and covers:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {[
              "Review of your current health needs and doctors",
              "Side-by-side comparison of your best plan options",
              "Exact enrollment timeline based on your birthday",
              "Answers to every Medicare question you have",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-bold uppercase tracking-wide text-sm px-10 py-4 rounded-lg transition-colors"
          >
            📞 Call {PHONE} — It&apos;s Free
          </a>
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
