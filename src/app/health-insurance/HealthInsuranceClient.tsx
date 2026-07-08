"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE } from "@/lib/constants";

const CONTACT_URL = "/contact";

const PLANS = [
  {
    number: "01",
    title: "Individual & Family Health Insurance",
    subtitle: "Comprehensive coverage for you and the people who matter most.",
    color: "#1A72C0",
    bullets: [
      {
        label: "What It Is",
        body: "Individual and family health insurance is major medical coverage that protects you from the high cost of unexpected illness, injury, or ongoing medical needs. It covers doctor visits, specialist care, hospital stays, emergency services, prescriptions, lab work, and preventive care.",
      },
      {
        label: "Who It's For",
        body: "This type of plan is for individuals and families who don't have access to employer-sponsored insurance — whether you're between jobs, self-employed, retired before Medicare age, or simply looking for better coverage than what your employer offers.",
      },
      {
        label: "How We Help",
        body: "As an independent broker, we compare plans from multiple carriers to find the right fit for your doctors, your prescriptions, and your budget. You pay the same price going through us as going directly to the carrier — the difference is you get a licensed advisor in your corner.",
      },
    ],
    bottomLine: "The right individual or family plan protects your health without wrecking your finances. We'll find the balance.",
  },
  {
    number: "02",
    title: "ACA / Marketplace Health Insurance",
    subtitle: "Federally regulated plans — and the subsidies that can make them very affordable.",
    color: "#1A1A2E",
    bullets: [
      {
        label: "What It Is",
        body: "ACA Marketplace plans (also called Obamacare plans) are health insurance plans regulated under the Affordable Care Act and sold through the federal or state exchange. All plans must cover the ten essential health benefits, including hospitalization, mental health, maternity care, and prescription drugs.",
      },
      {
        label: "Subsidies & Tax Credits",
        body: "Depending on your household income, you may qualify for premium tax credits that significantly reduce — or even eliminate — your monthly premium. Many South Florida families pay far less than they expect once subsidies are applied. We run the numbers for you before you enroll.",
      },
      {
        label: "Enrollment Windows",
        body: "ACA plans have an annual Open Enrollment Period (typically November–January). Outside of that window, you can only enroll if you qualify for a Special Enrollment Period due to a life event — losing employer coverage, moving, getting married, or having a baby. We help you navigate the timing.",
      },
    ],
    bottomLine: "Many people leave thousands of dollars in subsidies on the table because they don't know they qualify. We'll tell you what you're actually eligible for.",
  },
  {
    number: "03",
    title: "Private Health Insurance",
    subtitle: "More flexibility, broader networks, and faster access to care.",
    color: "#1A72C0",
    bullets: [
      {
        label: "What It Is",
        body: "Private health insurance refers to plans purchased directly from insurance carriers outside of the ACA Marketplace. These off-exchange plans are not subject to all ACA regulations, which gives carriers more flexibility in how they structure benefits, networks, and pricing.",
      },
      {
        label: "Why People Choose Private Plans",
        body: "Private plans often feature broader provider networks, shorter wait times, and more plan customization than Marketplace plans. They can be an excellent choice if you don't qualify for ACA subsidies, if your preferred doctors aren't in Marketplace networks, or if you want coverage that starts immediately rather than waiting for an enrollment window.",
      },
      {
        label: "Important Considerations",
        body: "Because private plans don't have to follow all ACA rules, they may not cover pre-existing conditions or all essential health benefits. We'll walk you through exactly what's covered and what's not before you enroll — so there are no surprises when you actually need care.",
      },
    ],
    bottomLine: "For the right person, a private plan offers better access and more flexibility. We'll tell you honestly whether it makes sense for your situation.",
  },
  {
    number: "04",
    title: "Self-Employed & 1099 Health Insurance",
    subtitle: "Real coverage options for people who work for themselves.",
    color: "#E8A020",
    bullets: [
      {
        label: "The Challenge",
        body: "When you're self-employed, freelancing, or working as a 1099 contractor, you're responsible for securing your own health coverage — and paying for all of it. Without the employer contribution that salaried workers get, the cost can feel overwhelming. But there are more options than most people realize.",
      },
      {
        label: "Your Options",
        body: "Depending on your income and how your business is structured, you may qualify for subsidized ACA Marketplace plans, private off-exchange plans, Health Savings Account (HSA)-compatible high-deductible plans, or short-term medical coverage. We compare all of these side by side based on your actual situation.",
      },
      {
        label: "Tax Advantages",
        body: "Self-employed individuals can typically deduct 100% of health insurance premiums paid for themselves and their family from their federal taxes. Combined with an HSA, this can make health coverage far more affordable than the sticker price suggests. We'll point you toward options that maximize these advantages.",
      },
    ],
    bottomLine: "Working for yourself doesn't mean going without real health coverage. We help self-employed South Floridians find plans that actually work.",
  },
];

export default function HealthInsuranceClient() {
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
                Health Insurance · A&E Insurance Agency
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Health Insurance for<br className="hidden md:block" /> South Florida Families
              </h1>
              <p className="text-[#4B5563] text-lg mb-3 leading-relaxed">
                Whether you need Individual & Family coverage, an ACA Marketplace plan, private health insurance, or options as a self-employed professional — we compare plans from multiple carriers and find the right fit for your doctors, your budget, and your life.
              </p>
              <p className="text-[#6B7280] text-sm mb-8">
                Independent health insurance broker Steve Germain. No fees, no bias — same price as going direct. Serving Miami and South Florida since 2009.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-center text-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Get Your Free Quote
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
                  src="/Oudoor family pic .jpg"
                  alt="South Florida family with health insurance coverage — A&E Insurance Agency"
                  className="w-full h-[420px] object-cover object-center"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {PLANS.map((plan, i) => (
            <AnimatedSection key={plan.number} delay={0.05} className="py-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-extrabold leading-none" style={{ color: plan.color }}>
                  {plan.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-0.5">
                    Coverage Type {i + 1} of 4
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">
                    {plan.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#1A72C0] font-semibold mb-8 text-base">{plan.subtitle}</p>

              <div className="space-y-6 mb-8">
                {plan.bullets.map((b) => (
                  <div key={b.label}>
                    <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                    <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              {/* Mid-page CTA after plan 2 */}
              {i === 1 && (
                <div className="my-8 bg-[#F3F4F6] rounded-2xl px-6 py-7 text-center border border-[#E5E7EB]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-2">Free · No Obligation</p>
                  <p className="text-[#1A1A2E] font-extrabold text-lg mb-2">
                    Not sure if you qualify for ACA subsidies?
                  </p>
                  <p className="text-[#4B5563] text-sm mb-5 leading-relaxed">
                    Many South Florida families qualify for premium tax credits and don't know it. A free conversation will tell you exactly what you're eligible for.
                  </p>
                  <Link
                    href={CONTACT_URL}
                    className="inline-flex items-center justify-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-3 rounded-lg transition-colors"
                  >
                    Find Out What You Qualify For →
                  </Link>
                </div>
              )}

              <div
                className="rounded-xl px-6 py-4 border-l-4"
                style={{ borderColor: plan.color, backgroundColor: plan.color + "10" }}
              >
                <p className="font-bold text-[#1A1A2E] text-sm">
                  <span style={{ color: plan.color }}>The Bottom Line: </span>
                  {plan.bottomLine}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A72C0] py-16 px-4 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">No Cost. No Pressure. No Obligation.</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Let&apos;s Find the Right Plan for You
          </h2>
          <p className="text-white/90 text-sm mb-8 leading-relaxed">
            We compare plans from multiple carriers across every coverage type — Marketplace, private, individual, and family. Tell us your situation and we&apos;ll show you your options in plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={CONTACT_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Get Your Free Quote
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
