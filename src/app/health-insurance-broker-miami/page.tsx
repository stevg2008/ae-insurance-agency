import type { Metadata } from "next";
import { SITE_URL, PHONE } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Miami, FL | A&E Insurance Agency",
  description:
    "Independent health and Medicare insurance broker in Miami since 2009. Steve Germain compares Medicare Advantage, Medigap, life insurance, and critical illness plans — free, 5-star rated.",
  alternates: { canonical: `${SITE_URL}/health-insurance-broker-miami` },
  openGraph: {
    url: `${SITE_URL}/health-insurance-broker-miami`,
    title: "Health Insurance Broker in Miami, FL | A&E Insurance Agency",
    description:
      "Compare health and Medicare insurance in Miami with a local independent broker. Free consultations. No fees. 5-star rated since 2009.",
  },
};

const FAQS = [
  {
    question: "What does a health insurance broker in Miami do?",
    answer:
      "A health insurance broker compares plans from multiple carriers and helps you understand costs, networks, and coverage. An independent broker like A&E Insurance Agency works with 25+ carriers and recommends what's best for you — at no charge. You pay zero fees; the broker is paid by the carrier you choose.",
  },
  {
    question: "What is the best health insurance for seniors in Miami?",
    answer:
      "For seniors 65 and older, the choice is between Medicare Advantage and Medigap (Medicare Supplement). Miami-Dade has some of the most competitive $0-premium Advantage plans in the country. For those who travel frequently or want full nationwide access, Medigap Plan G is typically the strongest option in Florida. A local broker runs the comparison for your specific situation.",
  },
  {
    question: "Does A&E handle non-Medicare health insurance?",
    answer:
      "Our specialty is Medicare and senior insurance — Medicare Advantage, Medigap, Part D, life insurance, and critical illness insurance. For individuals under 65 looking for ACA marketplace plans, we can connect you with a trusted local partner.",
  },
];

export default function HealthInsuranceMiamiPage() {
  return (
    <>
      <FAQSchema faqs={FAQS} />
      <div className="bg-white min-h-screen">

        {/* ── Intro ── */}
        <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">
                  Medicare · Life Insurance · Critical Illness · Miami, FL
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                  Health Insurance Broker in Miami, FL
                </h1>
                <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                  A&E Insurance Agency is an independent insurance broker in Miami specializing in Medicare and senior health coverage. Since 2009, Steve Germain has helped 3,000+ South Florida families compare plans from 25+ carriers — at no cost to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                  >
                    Schedule Your Free Consultation
                  </Link>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center whitespace-nowrap border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A72C0] hover:text-white font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                  >
                    Call {PHONE}
                  </a>
                </div>
                <p className="mt-6 text-xs text-[#9CA3AF] text-center lg:text-left">
                  ⭐ 5.0 · 126 Google Reviews &nbsp;·&nbsp; Independent — 25+ Carriers &nbsp;·&nbsp; Free · No Fees
                </p>
              </div>

              <div className="w-full lg:w-[380px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/team/steve.jpg"
                    alt="Steve Germain — Health Insurance Broker Miami"
                    className="w-full h-[420px] object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Content sections ── */}
        <section className="py-4 px-4">
          <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A72C0]">01</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Medicare Advantage & Medigap</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                For residents 65 and older, Medicare is the foundation of your health coverage — and the choice between Medicare Advantage and a Medigap supplement is the most important one you'll make.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We compare every plan available in your ZIP code: $0 premium Advantage plans with built-in dental, vision, and hearing benefits; and Medigap Plan G or Plan N for those who want freedom to see any doctor in the country without network restrictions.
              </p>
              <div className="mt-6 border-l-4 border-[#1A72C0] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">There's no universal right answer — it depends on your doctors, health, and travel habits. We figure it out together.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A1A2E]">02</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Life Insurance & Critical Illness</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Medicare covers your medical bills — but it doesn't replace lost income, cover your mortgage, or pay everyday expenses if a cancer diagnosis or heart attack sidelines you for months.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We help Miami families fill those gaps with term and permanent life insurance and critical illness protection — from top-rated carriers at competitive rates.
              </p>
              <div className="mt-6 border-l-4 border-[#1A1A2E] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Medicare is not a complete financial plan. We help you protect everything it doesn't cover.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#E8A020]">03</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Independent — No Carrier Bias</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                We're not employed by any insurance company. We work with Humana, Aetna, UnitedHealthcare, Cigna, BlueCross, and many more — and we recommend the one that fits your situation, not the one that pays the highest commission.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Our consultations are free. You pay no broker fees. The plan costs exactly the same whether you call us or call the carrier directly.
              </p>
              <div className="mt-6 border-l-4 border-[#E8A020] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">We work for you. Not the carriers.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-4 border-t border-[#E5E7EB] bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-8">Health Insurance in Miami — FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-[#1A1A2E] mb-2">{faq.question}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NAP ── */}
        <section className="py-10 px-4 border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Office</p>
              <p className="text-[#6B7280]">12855 SW 136th Ave, Suite 105<br />Miami (Kendall), FL 33186</p>
            </div>
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Phone</p>
              <p className="text-[#6B7280]"><a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] hover:underline">{PHONE}</a></p>
            </div>
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Hours</p>
              <p className="text-[#6B7280]">Mon – Fri · 9 AM – 5 PM ET</p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#1A1A2E] py-16 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <span className="inline-block text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-4">Free to You · 25+ Carriers · Since 2009</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to compare your options?</h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              One conversation with Steve and you'll know exactly what's available in Miami and what fits your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors">
                Schedule Free Consultation
              </Link>
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors">
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
