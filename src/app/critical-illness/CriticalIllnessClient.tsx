"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE } from "@/lib/constants";

const CONTACT_URL = "/contact";

const GAPS = [
  {
    number: "01",
    title: "The 20% Exposure",
    subtitle: "Original Medicare only covers 80% of your medical bills — with no cap on what you owe.",
    color: "#1A72C0",
    bullets: [
      { label: "The Gap", body: "Original Medicare pays 80% of approved medical costs. That leaves you personally responsible for the remaining 20% — with no out-of-pocket maximum. A $100,000 surgery means $20,000 coming out of your pocket." },
      { label: "It Adds Up Fast", body: "Most people assume Medicare will cover most of their medical bills. The reality is that without supplemental coverage, a single hospitalization or serious diagnosis can result in tens of thousands of dollars in out-of-pocket costs." },
      {
        label: "The Solution", body: (
          <>
            A <Link href="/medicare" className="text-[#1A72C0] underline hover:text-[#155fa0]">Medicare Supplement (Medigap) plan</Link> or a Medicare Advantage plan with a built-in out-of-pocket maximum can close this gap entirely. We compare your options and find the right fit — at no cost to you.
          </>
        )
      },
    ],
    bottomLine: "The 20% gap isn't small. Without coverage to close it, one health event can become a financial emergency.",
  },
  {
    number: "02",
    title: "The Long-Term Care Exposure",
    subtitle: "Medicare was never designed to pay for extended nursing home or in-home care.",
    color: "#1A1A2E",
    bullets: [
      { label: "What Medicare Covers", body: "Medicare covers short-term skilled nursing care — typically up to 100 days following a qualifying hospital stay. After that, you're on your own. It does not cover custodial care, assisted living, or long-term in-home care." },
      { label: "The Real Cost", body: "The average cost of a private nursing home room exceeds $100,000 per year. In-home care can run $50,000–$75,000 annually. Without a plan, these costs can wipe out a lifetime of savings in just a few years." },
      {
        label: "The Solution", body: (
          <>
            Long-term care insurance and hybrid life/LTC products can protect your assets and preserve your options — but they must be put in place before you need them. Learn more about{" "}
            <Link href="/retirement" className="text-[#1A72C0] underline hover:text-[#155fa0]">protecting your retirement savings</Link>{" "}
            from healthcare costs.
          </>
        )
      },
    ],
    bottomLine: "Long-term care is the single greatest financial threat to your retirement savings. Planning ahead is the only way to protect against it.",
  },
  {
    number: "03",
    title: "The Critical Illness Exposure",
    subtitle: "A cancer, heart attack, or stroke diagnosis brings costs Medicare will never touch.",
    color: "#E8A020",
    bullets: [
      { label: "The Hidden Costs", body: "When a serious diagnosis hits, the medical bills are only part of the story. Travel and lodging for specialist care, home modifications for accessibility, and everyday bills — mortgage, utilities, groceries — don't stop just because you're sick." },
      { label: "The Income Gap", body: "If you or your spouse stop working due to a serious illness, your household income can drop dramatically while your expenses stay the same or increase. Medicare pays the hospital — it doesn't replace your income or cover your life." },
      { label: "The Solution", body: "A critical illness plan pays a tax-free lump sum directly to you upon diagnosis of cancer, heart attack, stroke, or other covered conditions. No restrictions — you use the money however you need to, whether that's treatment, bills, or family support." },
    ],
    bottomLine: "A health crisis should never become a wealth crisis. A simple, affordable critical illness plan makes sure it doesn't.",
  },
];

const BIG_THREE = [
  {
    name: "Cancer",
    stat: "1 in 2 men and 1 in 3 women will be diagnosed with cancer in their lifetime.",
    impact: "Treatment costs, travel for specialty care, home modifications, and lost income can easily exceed $100,000 — much of it not covered by Medicare.",
  },
  {
    name: "Heart Attack",
    stat: "Every 40 seconds, someone in America has a heart attack.",
    impact: "Cardiac rehabilitation, follow-up care, medications, and recovery time away from work create financial strain that Medicare only partially addresses.",
  },
  {
    name: "Stroke",
    stat: "Stroke is a leading cause of long-term disability in the United States.",
    impact: "Long-term rehabilitation, home health aides, and assistive equipment can cost tens of thousands of dollars annually — none of which Medicare covers long-term.",
  },
];

export default function CriticalIllnessClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Page intro ── */}
      <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">
                Critical Illness Insurance · A&E Insurance Agency
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                The 3 Gaps Medicare<br className="hidden md:block" /> Doesn't Close
              </h1>
              <p className="text-[#4B5563] text-lg mb-3 leading-relaxed">
                Medicare is excellent coverage — but it was never designed to cover everything. Here are the three biggest financial exposures that catch people off guard, and how to protect yourself from each one.
              </p>
              <p className="text-[#6B7280] text-sm mb-8">
                Guidance from licensed insurance specialist <span className="whitespace-nowrap">Steve Germain</span>. Independent — licensed in 35 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-center text-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Find Your Coverage Gaps
                </Link>
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
              className="w-full lg:w-[440px] flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/Steve & Ms Eleonora .JPG"
                  alt="Steve Germain meeting with a client at A&E Insurance Agency — South Florida critical illness coverage"
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3 Gaps ── */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {GAPS.map((gap, i) => (
            <AnimatedSection key={gap.number} delay={0.05} className="py-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-extrabold leading-none" style={{ color: gap.color }}>
                  {gap.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-0.5">
                    Gap {i + 1} of 3
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">
                    {gap.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#1A72C0] font-semibold mb-8 text-base">{gap.subtitle}</p>

              <div className="space-y-6 mb-8">
                {gap.bullets.map((b) => (
                  <div key={b.label}>
                    <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                    <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl px-6 py-4 border-l-4"
                style={{ borderColor: gap.color, backgroundColor: gap.color + "10" }}
              >
                <p className="font-bold text-[#1A1A2E] text-sm">
                  <span style={{ color: gap.color }}>The Bottom Line: </span>
                  {gap.bottomLine}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── The Big 3 ── */}
      <section className="bg-[#F3F4F6] py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Critical Illness Coverage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              The Reality of &ldquo;The Big 3&rdquo;
            </h2>
            <p className="text-[#4B5563] leading-relaxed max-w-xl mx-auto">
              Cancer, heart attack, and stroke are the three most common critical illnesses — and the financial impact goes far beyond what Medicare will ever cover.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {BIG_THREE.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-[#1A1A2E] mb-2">{item.name}</h3>
                <p className="text-[#1A72C0] font-semibold text-sm mb-3">{item.stat}</p>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A72C0] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-extrabold text-white mb-3">Simple, Affordable Protection</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              A critical illness plan pays a <strong className="text-white">tax-free lump sum directly to you</strong> upon diagnosis. No restrictions — use it for treatment, bills, travel, or anything your family needs. A health crisis should never become a wealth crisis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { title: "No Restrictions", body: "You decide how to spend the benefit — treatment, mortgage, groceries, or anything else." },
                { title: "Immediate Relief", body: "Funds are paid directly to you, not to a hospital or provider." },
                { title: "True Confidence", body: "Know that a diagnosis won't derail your retirement or burden your family." },
              ].map((f) => (
                <div key={f.title} className="bg-white/10 rounded-xl p-5 text-left">
                  <p className="text-[#E8A020] font-extrabold text-sm mb-2">{f.title}</p>
                  <p className="text-white/90 text-xs leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A72C0] py-16 px-4 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">Independent · 25+ Carriers</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Don&apos;t Wait for a Diagnosis to Find Out What You&apos;re Missing
          </h2>
          <p className="text-white/90 text-sm mb-8 leading-relaxed">
            We&apos;ll review your current coverage, identify your gaps, and show you exactly what it would cost to close them. Most people are surprised by how affordable the protection is.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={CONTACT_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Find Your Coverage Gaps
            </Link>
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
