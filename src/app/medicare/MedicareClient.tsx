"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE } from "@/lib/constants";

// ── Visual: 7-Month Enrollment Timeline ──────────────────────────────────

function EnrollmentTimeline() {
  const bars = [
    { label: "3 mo.\nbefore", dim: true },
    { label: "2 mo.\nbefore", dim: true },
    { label: "1 mo.\nbefore", dim: true },
    { label: "Birthday\nmonth", dim: false },
    { label: "1 mo.\nafter", dim: true },
    { label: "2 mo.\nafter", dim: true },
    { label: "3 mo.\nafter", dim: true },
  ];
  return (
    <div className="my-7 p-5 bg-[#EFF6FF] rounded-xl border border-[#BFDBFE]">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-4">
        Your 7-Month Initial Enrollment Period
      </p>
      <div className="flex gap-1.5">
        {bars.map((b, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className={`h-8 w-full rounded ${b.dim ? "bg-[#1A72C0]/40" : "bg-[#1A72C0]"}`}
            />
            <span
              className={`text-[9px] text-center leading-tight whitespace-pre-line hidden sm:block ${
                b.dim ? "text-[#6B7280]" : "font-bold text-[#1A1A2E]"
              }`}
            >
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1 sm:hidden">
        <span className="text-[10px] text-[#6B7280]">3 months before</span>
        <span className="text-[10px] font-bold text-[#1A1A2E]">Birthday month</span>
        <span className="text-[10px] text-[#6B7280]">3 months after</span>
      </div>
      <p className="text-xs text-[#4B5563] mt-3 leading-relaxed">
        Missing this window without a qualifying reason results in a{" "}
        <strong>permanent late-enrollment penalty</strong> added to your monthly premium — for as long as you have Medicare.{" "}
        <Link
          href="/tools/medicare-enrollment-calculator"
          className="text-[#1A72C0] font-semibold hover:underline"
        >
          Find your enrollment dates →
        </Link>
      </p>
    </div>
  );
}

// ── Visual: The 20% Coverage Gap ─────────────────────────────────────────

function CoverageGapVisual() {
  return (
    <div className="my-7 rounded-xl border border-[#E5E7EB] overflow-hidden">
      <div className="px-5 py-3 bg-[#F3F4F6] border-b border-[#E5E7EB]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
          What Original Medicare Actually Covers
        </p>
      </div>
      <div className="p-5">
        <div className="flex h-12 rounded-lg overflow-hidden mb-2 font-bold text-xs md:text-sm">
          <div
            className="flex items-center justify-center text-white bg-[#1A72C0]"
            style={{ width: "80%" }}
          >
            Medicare pays 80%
          </div>
          <div
            className="flex items-center justify-center text-white bg-[#DC2626]"
            style={{ width: "20%" }}
          >
            You owe 20%
          </div>
        </div>
        <div className="flex justify-between text-[11px] text-[#6B7280] mb-4">
          <span>of all approved medical costs</span>
          <span className="text-[#DC2626] font-semibold">with no annual cap</span>
        </div>
        <div className="p-4 bg-[#FEF2F2] rounded-lg border-l-4 border-[#DC2626]">
          <p className="text-sm text-[#374151] leading-relaxed">
            <strong className="text-[#DC2626]">There is no annual out-of-pocket maximum for Original Medicare Part B.</strong>{" "}
            If you have a $200,000 Medicare-approved Part B surgery or procedure, Medicare would generally pay approximately $160,000 (80%), leaving you responsible for approximately $40,000 (20%) unless you have additional coverage, such as a Medicare Supplement plan.
          </p>
          <p className="text-[11px] text-[#6B7280] mt-3 leading-relaxed">
            *Example assumes the full $200,000 is the Medicare-approved amount and does not include the annual Part B deductible. Actual costs depend on the Medicare-approved amount and your specific circumstances.*
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Visual: Supplement vs. Advantage Comparison Table ────────────────────

const COMPARISON_ROWS = [
  {
    feature: "Monthly Premium",
    supplement: "Higher (varies by plan)",
    advantage: "Often $0",
  },
  {
    feature: "Out-of-Pocket Costs",
    supplement: "Very low — most gaps covered",
    advantage: "Deductibles & copays apply",
  },
  {
    feature: "Doctor Choice",
    supplement: "Any Medicare-accepting doctor in the U.S.",
    advantage: "Network-based (HMO or PPO)",
  },
  {
    feature: "Referrals Required",
    supplement: "No",
    advantage: "Often yes (HMO plans)",
  },
  {
    feature: "Rx Coverage",
    supplement: "Separate Part D plan required",
    advantage: "Usually built in",
  },
  {
    feature: "Extra Benefits",
    supplement: "Medical coverage only",
    advantage: "May include dental, vision, gym",
  },
  {
    feature: "Best For",
    supplement: "People who want to see any doctor and have predictable, low out-of-pocket costs",
    advantage: "People who prefer lower monthly premiums and don't mind a provider network",
  },
];

function ComparisonTable() {
  return (
    <div className="my-7 overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full text-sm border-collapse min-w-[500px]">
        <thead>
          <tr>
            <th className="text-left p-4 bg-[#F3F4F6] text-[10px] font-bold uppercase tracking-widest text-[#6B7280] border-b border-[#E5E7EB] w-[28%]">
              Feature
            </th>
            <th className="p-4 bg-white text-center font-extrabold text-[#1A1A2E] border-b border-l border-[#E5E7EB]">
              Medicare Supplement
            </th>
            <th className="p-4 bg-[#1A72C0] text-center font-extrabold text-white border-b border-[#1557A0]">
              Medicare Advantage
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
              <td className="p-4 text-xs font-bold uppercase tracking-wider text-[#6B7280] border-b border-[#E5E7EB]">
                {row.feature}
              </td>
              <td className="p-4 text-center text-[#374151] border-b border-l border-[#E5E7EB]">
                {row.supplement}
              </td>
              <td className="p-4 text-center text-[#374151] border-b border-[#E5E7EB]">
                {row.advantage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Step Data ─────────────────────────────────────────────────────────────

type Bullet = { label: string; body: string };

type Step = {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  bullets: Bullet[];
  bottomLine: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Medicare Enrollment Timing",
    subtitle: "Know your enrollment window — missing it carries a permanent penalty.",
    color: "#1A72C0",
    bullets: [
      {
        label: "Initial Enrollment Period (IEP)",
        body: "You have a 7-month window to sign up for Medicare — starting 3 months before your 65th birthday month, including the month you turn 65, and ending 3 months after. Missing this window without a qualifying reason results in a permanent late-enrollment penalty.",
      },
      {
        label: "Still working? You may be able to wait.",
        body: "If you or your spouse have qualifying employer coverage from an active job, you may delay Medicare enrollment penalty-free. This is one of the most frequently misunderstood rules in Medicare — and the details matter. Always verify before making this decision.",
      },
      {
        label: "Start planning 6 months early.",
        body: "We recommend beginning your Medicare research at least 6 months before your 65th birthday. The earlier you start, the more plan options are available to you and the less stressful the transition.",
      },
    ],
    bottomLine:
      "Missing your enrollment window can cost you for life. Plan early — and call us before you decide to delay.",
  },
  {
    number: "02",
    title: "Original Medicare: Parts A & B",
    subtitle: "Where every Medicare journey begins — and the gap most people don't see coming.",
    color: "#1A1A2E",
    bullets: [
      {
        label: "Part A — Hospital Coverage",
        body: "Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health services. Most people pay $0 in Part A premiums if they or their spouse paid Medicare taxes for at least 10 years. However, Part A carries a per-benefit-period deductible that can catch people off guard.",
      },
      {
        label: "Part B — Medical Coverage",
        body: "Part B covers doctor visits, outpatient services, preventive care, durable medical equipment, and many outpatient surgeries and procedures. After you meet your annual Part B deductible, Medicare generally pays 80% of the Medicare-approved amount, and you are responsible for the remaining 20%.",
      },
      {
        label: "The 20% gap — with no cap",
        body: "Here's what surprises most people: Original Medicare leaves you responsible for 20% of the Medicare-approved amount for Part B services, and there is no annual out-of-pocket maximum for those costs.",
      },
    ],
    bottomLine:
      "Original Medicare is a strong foundation — but it was never designed to stand alone.",
  },
  {
    number: "03",
    title: "Medicare Supplement vs. Medicare Advantage",
    subtitle: "Two paths to closing the coverage gap. Here's how they compare.",
    color: "#E8A020",
    bullets: [],
    bottomLine:
      "We'll compare your real options side by side — including your doctors, prescriptions, and budget — so you can choose with confidence.",
  },
  {
    number: "04",
    title: "Medicare Part D: Prescription Drug Coverage",
    subtitle: "Don't overlook the prescription piece — the late-enrollment penalty is permanent.",
    color: "#1A72C0",
    bullets: [
      {
        label: "What Part D covers",
        body: "Part D plans cover prescription drugs. If you choose Original Medicare with a Supplement plan, you'll need a standalone Part D plan. Most Medicare Advantage plans include prescription drug coverage built in.",
      },
      {
        label: "The late-enrollment penalty",
        body: "If you go 63 or more days without creditable drug coverage and didn't enroll in Part D when first eligible, you'll pay a permanent penalty — 1% of the national base beneficiary premium per month without coverage. This is added to your Part D premium for as long as you have Medicare.",
      },
      {
        label: "Annual plan reviews protect your wallet",
        body: "Part D formularies — the list of covered drugs and their cost tiers — change every single year. A plan that covered your medications affordably this year may not next year. We review your coverage every fall at no cost to make sure your prescriptions are covered at the best available price.",
      },
    ],
    bottomLine:
      "The right drug plan can save you hundreds of dollars a year. We review yours every year — at no cost to you.",
  },
];

// ── Page Component ────────────────────────────────────────────────────────

export default function MedicareClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
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
                Your Complete Medicare Guide · A&E Insurance Agency
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Medicare Explained:<br className="hidden md:block" /> Parts A, B, C & D
              </h1>
              <p className="text-[#4B5563] text-lg mb-2 leading-relaxed">
                A complete guide to how Medicare works — from enrollment timing and Original Medicare to plan options and prescription coverage.
              </p>
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
                Written by licensed Medicare broker Steve Germain. Serving South Florida families since 2009.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Schedule a Free Consultation
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
              className="w-full lg:w-[380px] flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/slideshow/s11.jpg"
                  alt="Steve Germain presenting at a Medicare educational seminar for South Florida families — A&E Insurance Agency"
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Educational Steps ─────────────────────────────────────────── */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.05} className="py-14">

              {/* Step header */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-5xl font-extrabold leading-none flex-shrink-0"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-0.5">
                    Step {i + 1} of 4
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">
                    {step.title}
                  </h2>
                </div>
              </div>

              <p className="text-[#1A72C0] font-semibold mb-7 text-base leading-relaxed">
                {step.subtitle}
              </p>

              {/* Step 1: bullets + enrollment timeline */}
              {i === 0 && (
                <>
                  <div className="space-y-5 mb-0">
                    {step.bullets.map((b) => (
                      <div key={b.label}>
                        <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                        <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                      </div>
                    ))}
                  </div>
                  <EnrollmentTimeline />
                  <p className="text-sm text-[#6B7280] mb-7 leading-relaxed">
                    Already 65 and missed your window?{" "}
                    <Link
                      href="/resources"
                      className="text-[#1A72C0] font-semibold hover:underline"
                    >
                      See our Medicare FAQ
                    </Link>{" "}
                    — or call us directly at{" "}
                    <a
                      href={`tel:${PHONE.replace(/\D/g, "")}`}
                      className="text-[#1A72C0] font-semibold hover:underline"
                    >
                      {PHONE}
                    </a>
                    . Special Enrollment Periods exist, and you may have more options than you think.
                  </p>
                </>
              )}

              {/* Step 2: bullets + coverage gap visual + mid-page CTA */}
              {i === 1 && (
                <>
                  <div className="space-y-5 mb-0">
                    {step.bullets.map((b) => (
                      <div key={b.label}>
                        <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                        <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                      </div>
                    ))}
                  </div>
                  <CoverageGapVisual />
                  <p className="text-sm text-[#6B7280] mb-7 leading-relaxed">
                    Higher-income beneficiaries may also pay an additional surcharge called{" "}
                    <Link
                      href="/tools/irmaa-calculator"
                      className="text-[#1A72C0] font-semibold hover:underline"
                    >
                      IRMAA
                    </Link>{" "}
                    on top of their Part B and Part D premiums. Use our free calculator to see if it applies to you.
                  </p>
                </>
              )}

              {/* Step 3: comparison table */}
              {i === 2 && (
                <>
                  <p className="text-[#4B5563] leading-relaxed mb-0">
                    Once you understand the 20% gap, the next question is: how do you close it? There are two primary paths. Here's an honest comparison:
                  </p>
                  <ComparisonTable />
                  <p className="text-[#4B5563] leading-relaxed mb-7">
                    The right path depends on your doctors, health history, prescriptions, travel habits, and budget. There is no universal answer — and that's exactly why working with an independent broker who represents over 25 carriers makes all the difference.{" "}
                    <Link
                      href="/contact"
                      className="text-[#1A72C0] font-semibold hover:underline"
                    >
                      Talk with a licensed advisor →
                    </Link>
                  </p>
                </>
              )}

              {/* Step 4: bullets + Part D penalty tool link */}
              {i === 3 && (
                <>
                  <div className="space-y-5 mb-7">
                    {step.bullets.map((b) => (
                      <div key={b.label}>
                        <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                        <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#6B7280] mb-7 leading-relaxed">
                    Not sure if you'll owe a penalty?{" "}
                    <Link
                      href="/tools/part-d-penalty-calculator"
                      className="text-[#1A72C0] font-semibold hover:underline"
                    >
                      Use our free Part D penalty calculator →
                    </Link>
                  </p>
                </>
              )}

              {/* Bottom Line */}
              <div
                className="rounded-xl px-6 py-4 border-l-4"
                style={{
                  borderColor: step.color,
                  backgroundColor: step.color + "10",
                }}
              >
                <p className="font-bold text-[#1A1A2E] text-sm leading-relaxed">
                  <span style={{ color: step.color }}>The Bottom Line: </span>
                  {step.bottomLine}
                </p>
              </div>

              {/* Mid-page CTA — appears after Step 2 */}
              {i === 1 && (
                <div className="mt-10 p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] text-center">
                  <p className="font-bold text-[#1A1A2E] text-lg mb-2">
                    Not sure which option is right for you?
                  </p>
                  <p className="text-[#4B5563] text-base mb-5 leading-relaxed">
                    Every Medicare situation is different. Schedule a free, no-pressure review — we'll compare your specific options using your doctors, medications, and budget.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-lg transition-colors"
                  >
                    Schedule a Free Medicare Consultation
                  </Link>
                </div>
              )}

            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Resources Strip ───────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-10 px-4 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5 text-center">
            Free Medicare Tools & Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "Medicare Enrollment Date Calculator",
                href: "/tools/medicare-enrollment-calculator",
                desc: "Find your exact enrollment window based on your birthday.",
                cta: "Find My Dates →",
              },
              {
                label: "Part B Late-Enrollment Penalty Calculator",
                href: "/tools/part-b-penalty-calculator",
                desc: "Estimate your permanent penalty if you missed your IEP.",
                cta: "Calculate Penalty →",
              },
              {
                label: "Part D Penalty Calculator",
                href: "/tools/part-d-penalty-calculator",
                desc: "See if you owe a drug coverage late-enrollment penalty.",
                cta: "Calculate Penalty →",
              },
              {
                label: "IRMAA Surcharge Calculator",
                href: "/tools/irmaa-calculator",
                desc: "Check whether your income triggers higher Part B or Part D premiums.",
                cta: "Check My IRMAA →",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col gap-1.5 bg-white rounded-xl p-4 border border-[#E5E7EB] hover:border-[#1A72C0] hover:shadow-sm transition-all group"
              >
                <span className="font-bold text-[#1A1A2E] text-sm">{tool.label}</span>
                <span className="text-[#6B7280] text-xs leading-relaxed flex-1">{tool.desc}</span>
                <span className="text-[#1A72C0] text-xs font-semibold mt-1">{tool.cta}</span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-5">
            <Link
              href="/resources"
              className="text-[#1A72C0] font-semibold text-sm hover:underline"
            >
              Browse all Medicare FAQs & resources →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#1A72C0] py-16 px-4 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">
            Free to You · 25+ Carriers · Since 2009
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Choose Your Medicare Plan?
          </h2>
          <p className="text-white/90 text-base mb-8 leading-relaxed">
            We compare plans from over 25 top-rated carriers and help you choose the one that fits your doctors, your prescriptions, and your budget. Our guidance is always 100% free — you pay the exact same price whether you use us or not.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Schedule a Free Consultation
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
