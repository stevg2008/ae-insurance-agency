"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE, WEBINAR_URL, WEBINAR_LABEL_SHORT } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Timing Is Everything",
    subtitle: "Know your enrollment window before it closes.",
    color: "#1A72C0",
    bullets: [
      { label: "Initial Enrollment Period", body: "You have a 7-month window to sign up for Medicare — starting 3 months before your 65th birthday month, the month you turn 65, and 3 months after. Missing this window can result in a permanent late-enrollment penalty added to your monthly premium." },
      { label: "Still Working?", body: "If you or your spouse have qualifying employer coverage, you may be able to delay Medicare enrollment penalty-free. Every situation is different — this is one of the most important calls to make before you turn 65." },
      { label: "Start Early", body: "We recommend starting your Medicare research at least 6 months before your 65th birthday. The earlier you plan, the more options you have and the less stressful the transition will be." },
    ],
    bottomLine: "Missing your enrollment window can cost you for life. Don't wait — let's review your timeline together.",
  },
  {
    number: "02",
    title: "The Foundation",
    subtitle: "Medicare Parts A & B are where it all begins.",
    color: "#1A1A2E",
    bullets: [
      { label: "Part A — Hospital Coverage", body: "Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health services. Most people pay $0 in premiums for Part A if they or their spouse worked and paid Medicare taxes for at least 10 years." },
      { label: "Part B — Medical Coverage", body: "Part B covers doctor visits, outpatient services, preventive care, and durable medical equipment. Part B has a standard monthly premium set by the government each year and covers 80% of approved medical costs." },
      { label: "The 20% Gap", body: "Here's what surprises most people: Medicare Parts A and B alone leave you personally responsible for the remaining 20% of your medical bills — with no out-of-pocket maximum. That gap is exactly why supplemental coverage is so important." },
    ],
    bottomLine: "Original Medicare is a strong foundation — but it was never designed to stand alone.",
  },
  {
    number: "03",
    title: "The Big Choice",
    subtitle: "Medicare Supplement or Medicare Advantage — which path is right for you?",
    color: "#E8A020",
    bullets: [
      { label: "Path A — Medicare Supplement (Medigap)", body: "These plans pay most or all of the 20% gap that Original Medicare leaves behind. You keep the freedom to see any doctor or specialist in the United States who accepts Medicare — no networks, no referrals, no prior authorizations." },
      { label: "Path B — Medicare Advantage (Part C)", body: "Medicare Advantage bundles your Part A, Part B, and usually Part D coverage into one plan — often with $0 monthly premiums and added benefits like dental, vision, and gym memberships. Plans operate within a provider network and require referrals for specialists in most cases." },
      { label: "Which Is Right for You?", body: "The right choice depends on your doctors, health needs, prescription drugs, travel habits, and budget. There's no universal answer — and that's exactly why working with an independent broker who represents over 25 carriers makes all the difference." },
    ],
    bottomLine: "We'll compare your real options side by side so you can choose with confidence — not confusion.",
  },
  {
    number: "04",
    title: "Prescription Protection",
    subtitle: "Don't overlook Part D — the drug coverage piece.",
    color: "#1A72C0",
    bullets: [
      { label: "What Part D Covers", body: "Part D plans cover prescription drugs. If you choose Original Medicare with a Supplement, you'll need a standalone Part D plan. Most Medicare Advantage plans include prescription drug coverage built in." },
      { label: "Late Enrollment Penalty", body: "If you don't enroll in Part D when first eligible and don't have other creditable drug coverage, you may face a permanent penalty added to your monthly premium — for as long as you have Medicare." },
      { label: "Annual Reviews Matter", body: "Part D formularies — the list of covered drugs and their costs — change every year. We review your plan each year at no cost to make sure your medications are still covered at the best available price." },
    ],
    bottomLine: "The right drug plan can save you hundreds of dollars a year. We review it for you every single year.",
  },
];

export default function MedicareClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Page intro ── */}
      <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">

          {/* Text + photo side by side on desktop */}
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">
                Your Medicare Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Everything You Need to Know,<br className="hidden md:block" /> All in One Place
              </h1>
              <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                Medicare doesn't have to be complicated. Here's a plain-English breakdown of how it works — and how to make it work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={WEBINAR_URL}
                  className="inline-flex items-center justify-center text-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  {WEBINAR_LABEL_SHORT}
                </a>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center whitespace-nowrap border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A72C0] hover:text-white font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Call {PHONE}
                </a>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="w-full lg:w-[380px] flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/Steve and Mr Heinrich.JPG"
                  alt="Steve Germain with a Medicare client at A&E Insurance Agency"
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.05} className="py-16">
              {/* Step header */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-4xl font-extrabold leading-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-0.5">
                    Step {i + 1}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">
                    {step.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#1A72C0] font-semibold mb-8 text-base">{step.subtitle}</p>

              {/* Bullets */}
              <div className="space-y-6 mb-8">
                {step.bullets.map((b) => (
                  <div key={b.label}>
                    <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                    <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              {/* Bottom line */}
              <div
                className="rounded-xl px-6 py-4 border-l-4"
                style={{ borderColor: step.color, backgroundColor: step.color + "10" }}
              >
                <p className="font-bold text-[#1A1A2E] text-sm">
                  <span style={{ color: step.color }}>The Bottom Line: </span>
                  {step.bottomLine}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A72C0] py-16 px-4 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">No Cost. No Pressure. No Bias.</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Find Your Perfect Medicare Plan?
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            We work with over 25 top-rated carriers and our help is 100% free. You pay the exact same price whether you use us or go it alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WEBINAR_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              {WEBINAR_LABEL_SHORT}
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
