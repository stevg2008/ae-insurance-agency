"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE } from "@/lib/constants";

const NEEDS_ASSESSMENT_URL = "/contact";

const PRODUCTS = [
  {
    number: "01",
    title: "Term Life Insurance",
    subtitle: "Affordable protection for the years you need it most.",
    color: "#0071BB",
    bullets: [
      { label: "What It Is", body: "Term Life Insurance provides coverage for a specific period of time — typically 10, 20, or 30 years. If you pass away during the policy term, your loved ones receive a tax-free death benefit." },
      { label: "Who It's For", body: "It's often the most affordable way to protect your family's income, help pay off a mortgage, cover outstanding debts, or provide financial security while your children are growing up." },
      { label: "What Happens at the End of the Term", body: "When the term ends, coverage typically expires. If you still need protection, you may have options to renew or convert to a permanent policy — which is why reviewing your coverage regularly matters." },
    ],
    bottomLine: "If you need maximum coverage at the lowest cost, term life is almost always the right starting point.",
  },
  {
    number: "02",
    title: "Whole Life Insurance",
    subtitle: "Lifetime protection with guaranteed cash value.",
    color: "#1A1A2E",
    bullets: [
      { label: "What It Is", body: "Whole Life Insurance provides lifelong coverage as long as premiums are paid. Unlike term, it never expires — your beneficiaries are guaranteed to receive the death benefit no matter when you pass away." },
      { label: "Cash Value", body: "In addition to a guaranteed death benefit, your policy builds guaranteed cash value over time that you can access while you're living — through loans or withdrawals — for any purpose." },
      { label: "Who It's For", body: "It's an excellent choice for individuals who want permanent protection, stable premiums that never increase, and long-term financial security for their family." },
    ],
    bottomLine: "Whole life is the most straightforward form of permanent insurance — predictable, guaranteed, and built to last a lifetime.",
  },
  {
    number: "03",
    title: "Universal Life Insurance",
    subtitle: "Flexible coverage that grows with your changing needs.",
    color: "#0071BB",
    bullets: [
      { label: "What It Is", body: "Universal Life Insurance offers permanent life insurance with greater flexibility than whole life. Depending on the policy, you may be able to adjust your premium payments and death benefit as your financial needs change over time." },
      { label: "Cash Value", body: "Universal Life also builds cash value over time, though the growth rate is typically tied to current interest rates rather than being fully guaranteed like whole life." },
      { label: "Who It's For", body: "It's a great option for those looking for lifelong protection with added flexibility — especially if your income or coverage needs are likely to change in the years ahead." },
    ],
    bottomLine: "If you want permanent protection but need room to adjust your plan as life evolves, Universal Life delivers that flexibility.",
  },
  {
    number: "04",
    title: "Indexed Universal Life (IUL)",
    subtitle: "Permanent protection with growth potential.",
    color: "#E8A020",
    bullets: [
      { label: "What It Is", body: "Indexed Universal Life combines lifelong life insurance protection with the opportunity to build cash value based on the performance of a market index, such as the S&P 500." },
      { label: "Downside Protection", body: "Your money is not invested directly in the stock market. IUL policies typically include a floor — meaning your cash value won't decrease due to market losses — while still allowing you to participate in market gains up to a cap." },
      { label: "Who It's For", body: "Many people choose an IUL to protect their family while building tax-advantaged cash value for future financial goals like retirement income, college funding, or long-term care expenses." },
    ],
    bottomLine: "An IUL offers the best of both worlds — permanent protection plus the opportunity to grow cash value without direct market risk.",
  },
  {
    number: "05",
    title: "Final Expense Insurance",
    subtitle: "Help protect your loved ones from unexpected end-of-life costs.",
    color: "#1A1A2E",
    bullets: [
      { label: "What It Covers", body: "Final Expense Insurance is designed to help cover funeral costs, burial expenses, cremation, and other end-of-life costs that can catch families off guard at an already difficult time." },
      { label: "Easy to Qualify For", body: "Coverage amounts are typically smaller than traditional life insurance, making premiums affordable. Because it often requires no medical exam and uses simplified underwriting, it may be easier to qualify for — even with health conditions." },
      { label: "How It Works", body: "Your beneficiaries can use the death benefit however they choose — for funeral costs, outstanding medical bills, or anything else they need." },
    ],
    bottomLine: "Final expense insurance is one of the most meaningful gifts you can leave your family — removing financial stress during an emotional time.",
  },
  {
    number: "06",
    title: "Annuities",
    subtitle: "Turn your retirement savings into lasting income.",
    color: "#0071BB",
    bullets: [
      { label: "What They Are", body: "Annuities are designed to help you grow your retirement savings and create a reliable source of income during retirement. Depending on the type, your money can earn a guaranteed interest rate or grow based on the performance of a market index." },
      { label: "Principal Protection", body: "Many annuities protect your principal from market losses, meaning you won't lose what you put in even if the market drops. This makes them a powerful tool for preserving retirement savings." },
      { label: "Who They're For", body: "Many people use annuities to supplement Social Security, reduce the risk of outliving their savings, and create the retirement income confidence they need to truly enjoy their retirement years." },
    ],
    bottomLine: "An annuity can act like a personal pension — guaranteeing you income for life so you never have to worry about running out of money.",
  },
];

export default function LifeInsuranceClient() {
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
              <span className="inline-block text-[#0071BB] font-bold text-xs uppercase tracking-widest mb-3">
                Life Insurance & Retirement Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                Protecting Your Family's Future
              </h1>
              <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                Whether you're looking for affordable life insurance, permanent protection, or retirement income solutions, we'll help you understand your options and make a confident decision — in plain English, at zero cost to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={NEEDS_ASSESSMENT_URL}
                  className="inline-flex items-center justify-center text-center bg-[#0071BB] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                >
                  Schedule Your Needs Assessment
                </a>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center whitespace-nowrap border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#0071BB] hover:text-white font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
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
                  src="/Steve and Irving .jpeg"
                  alt="Steve Germain with Irving at A&E Insurance Agency"
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">
          {PRODUCTS.map((product) => (
            <AnimatedSection key={product.number} delay={0.05} className="py-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-extrabold leading-none" style={{ color: product.color }}>
                  {product.number}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">
                    {product.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#0071BB] font-semibold mb-8 text-base">{product.subtitle}</p>

              <div className="space-y-6 mb-8">
                {product.bullets.map((b) => (
                  <div key={b.label}>
                    <p className="font-extrabold text-[#1A1A2E] mb-1">{b.label}</p>
                    <p className="text-[#4B5563] leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl px-6 py-4 border-l-4"
                style={{ borderColor: product.color, backgroundColor: product.color + "10" }}
              >
                <p className="font-bold text-[#1A1A2E] text-sm">
                  <span style={{ color: product.color }}>The Bottom Line: </span>
                  {product.bottomLine}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0071BB] py-16 px-4 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-3">No Cost. No Pressure. No Obligation.</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Not Sure Which Option Is Right for You?
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Every person's situation is different. We'll take the time to understand your goals, answer your questions, and explain your options in plain English — so you can protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={NEEDS_ASSESSMENT_URL}
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
            >
              Schedule Your Needs Assessment
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
