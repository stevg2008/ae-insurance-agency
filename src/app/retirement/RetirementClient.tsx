"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE } from "@/lib/constants";

const NEEDS_ASSESSMENT_URL = "/contact";

const STEPS = [
  {
    number: "01",
    title: "Know What You Have",
    subtitle: "A clear picture of your finances is the foundation of every retirement plan.",
    color: "#1A72C0",
    bullets: [
      { label: "Social Security", body: "Most people don't realize how much the timing of when you claim Social Security affects your lifetime income. Claiming at 62 vs. 70 can mean a difference of hundreds of dollars per month — permanently. We help you find your optimal claiming age based on your health, work history, and income needs." },
      { label: "Pensions & 401(k)s", body: "If you have a pension, you'll face decisions about lump-sum vs. monthly payments, survivor benefits, and more. For 401(k) and IRA accounts, we review your current allocation, tax exposure, and distribution strategy so your money lasts as long as you do." },
      { label: "Other Income Sources", body: "Rental income, part-time work, investment dividends — every source of income factors into your retirement picture. We take a comprehensive view so nothing gets overlooked." },
    ],
    bottomLine: "You can't plan for where you're going if you don't know where you're starting. Let's map it out together.",
  },
  {
    number: "02",
    title: "Protect What You've Built",
    subtitle: "Retirement isn't just about growing money — it's about not losing it.",
    color: "#1A1A2E",
    bullets: [
      { label: "Healthcare Costs", body: "Healthcare is the single largest unplanned expense in retirement. A couple retiring today can expect to spend over $300,000 on healthcare costs not covered by Medicare. The right Medicare plan, combined with a long-term care strategy, can protect your nest egg from being wiped out by medical bills." },
      { label: "Market Risk", body: "The sequence of returns matters enormously in retirement. A major market downturn early in your retirement — when you're withdrawing money — can permanently reduce your income. We help you structure your assets to protect against this risk without sacrificing growth." },
      { label: "Inflation Risk", body: "A dollar today buys less tomorrow. A retirement income strategy that doesn't account for inflation may leave you financially squeezed 10 or 15 years in. We build inflation protection into every plan we review." },
    ],
    bottomLine: "The goal isn't just to retire — it's to stay retired. Protection is just as important as accumulation.",
  },
  {
    number: "03",
    title: "Create Reliable Income",
    subtitle: "Turn your savings into a paycheck you can count on for life.",
    color: "#E8A020",
    bullets: [
      { label: "Income You Can't Outlive", body: "One of the biggest fears in retirement is running out of money. We help you structure guaranteed income streams — through Social Security optimization, annuities, or other vehicles — so you have a baseline of income no matter how long you live or what the market does." },
      { label: "The Bucket Strategy", body: "A simple but powerful approach: divide your assets into short-term (cash), medium-term (conservative), and long-term (growth) buckets. This way, you always have money available for expenses without having to sell investments at the wrong time." },
      { label: "Tax-Efficient Withdrawals", body: "The order in which you draw from your accounts — taxable, tax-deferred, and tax-free — can make a significant difference in how long your money lasts and how much you pay in taxes. We help you create a withdrawal strategy that keeps more money in your pocket." },
    ],
    bottomLine: "A great retirement isn't about how much you saved — it's about how much reliable income you can create from what you have.",
  },
  {
    number: "04",
    title: "Leave a Legacy",
    subtitle: "Make sure what you've built goes to the people and causes you care about.",
    color: "#1A72C0",
    bullets: [
      { label: "Beneficiary Reviews", body: "Outdated beneficiary designations are one of the most common and costly estate planning mistakes. An old designation on a 401(k) or life insurance policy overrides your will. We help you review and update these so your assets go exactly where you intend." },
      { label: "Life Insurance in Retirement", body: "Life insurance isn't just for when you're young. In retirement, it can be used to replace income for a surviving spouse, cover final expenses, or create a tax-free inheritance for your children. We review whether your current coverage still fits your current goals." },
      { label: "Long-Term Care Planning", body: "The cost of nursing home or in-home care can exhaust a lifetime of savings in just a few years. Long-term care insurance and hybrid life/LTC products can protect your assets and preserve your options — but they need to be put in place before you need them." },
    ],
    bottomLine: "Retirement planning isn't just about you — it's about the people who depend on you and the legacy you want to leave.",
  },
];

export default function RetirementClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Page intro ── */}
      <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">
                Retirement Planning · A&E Insurance Agency
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Retirement Income Planning<br className="hidden md:block" /> for South Florida Families
              </h1>
              <p className="text-[#4B5563] text-lg mb-3 leading-relaxed">
                Retirement is one of the biggest financial transitions of your life. We help you protect what you've built, create income you can count on, and retire with confidence.
              </p>
              <p className="text-[#6B7280] text-sm mb-8">
                Guidance from licensed retirement specialist <span className="whitespace-nowrap">Steve Germain</span>. Independent — licensed in 35 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href={NEEDS_ASSESSMENT_URL}
                  className="inline-flex items-center justify-center text-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Get Your Free Assessment
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
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/Steve and Leslie and Jennifer .jpg"
                  alt="Steve Germain with clients at A&E Insurance Agency — South Florida retirement planning"
                  className="w-full h-[420px] object-cover object-center"
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
            <AnimatedSection key={step.number} delay={0.05} className="py-14">
              {/* Step header */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-5xl font-extrabold leading-none"
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
              <p className="text-[#1A72C0] font-semibold mb-8 text-base">{step.subtitle}</p>

              {/* Bullets */}
              <div className="space-y-6 mb-8">
                {step.bullets.map((b) => (
                  <div key={b.label}>
                    <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                    <p className="text-[#4B5563] leading-relaxed">
                      {/* Healthcare Costs bullet: link to Medicare page */}
                      {b.label === "Healthcare Costs" ? (
                        <>
                          Healthcare is the single largest unplanned expense in retirement. A couple retiring today can expect to spend over $300,000 on healthcare costs not covered by{" "}
                          <Link href="/medicare" className="text-[#1A72C0] underline hover:text-[#155fa0]">Medicare</Link>.
                          {" "}The right Medicare plan, combined with a long-term care strategy, can protect your nest egg from being wiped out by medical bills.
                        </>
                      ) : b.label === "Life Insurance in Retirement" ? (
                        <>
                          Life insurance isn't just for when you're young. In retirement, it can be used to replace income for a surviving spouse, cover final expenses, or create a tax-free inheritance for your children. We review whether your{" "}
                          <Link href="/life-insurance" className="text-[#1A72C0] underline hover:text-[#155fa0]">current coverage</Link>
                          {" "}still fits your current goals.
                        </>
                      ) : (
                        b.body
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mid-page CTA after Step 2 */}
              {i === 1 && (
                <div className="my-8 bg-[#F3F4F6] rounded-2xl px-6 py-7 text-center border border-[#E5E7EB]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1A72C0] mb-2">Independent · No Broker Fees</p>
                  <p className="text-[#1A1A2E] font-extrabold text-lg mb-2">
                    Not sure if your retirement plan covers these risks?
                  </p>
                  <p className="text-[#4B5563] text-sm mb-5 leading-relaxed">
                    A free needs assessment takes 30 minutes and gives you a clear picture of where you stand — and what to do next.
                  </p>
                  <Link
                    href={NEEDS_ASSESSMENT_URL}
                    className="inline-flex items-center justify-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-3 rounded-lg transition-colors"
                  >
                    Get Your Free Assessment →
                  </Link>
                </div>
              )}

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
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">Independent · 25+ Carriers</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Let's Build Your Retirement Plan Together
          </h2>
          <p className="text-white/90 text-sm mb-8 leading-relaxed">
            A free needs assessment is the first step. We'll review your income, assets, and goals — and show you exactly what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={NEEDS_ASSESSMENT_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-[#1A1A2E] font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Get Your Free Assessment
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
