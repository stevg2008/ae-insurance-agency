import type { Metadata } from "next";
import { SITE_URL, PHONE } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Broker in Miami, FL | A&E Insurance Agency",
  description:
    "Local Medicare broker Steve Germain has served Miami since 2013. He compares every plan in Miami-Dade at no cost — Advantage, Medigap, Part D. 5-star rated. Free consultation.",
  alternates: { canonical: `${SITE_URL}/medicare-broker-miami` },
  openGraph: {
    url: `${SITE_URL}/medicare-broker-miami`,
    title: "Medicare Broker in Miami, FL | A&E Insurance Agency",
    description:
      "Free Medicare plan comparison in Miami, FL. Independent broker — 25+ carriers compared, no broker fees.",
  },
};

const FAQS = [
  {
    question: "How much does a Medicare broker in Miami charge?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers — not by you. You pay the exact same premium whether you use a broker or go direct. Our job is to compare every plan available in your ZIP code and help you choose the right one.",
  },
  {
    question: "What Medicare plans are available in Miami, Florida?",
    answer:
      "Miami-Dade County has one of the most competitive Medicare markets in the U.S. You can choose from Medicare Advantage (HMO and PPO, many at $0 premium), Medicare Supplement (Medigap Plan G or Plan N), and standalone Part D prescription drug plans. A local broker compares every option side-by-side.",
  },
  {
    question: "Can I get Medicare help in Spanish in Miami?",
    answer:
      "Yes. A&E Insurance Agency provides consultations in English and Spanish. We serve Miami's diverse communities including Kendall, Doral, Hialeah, and Coral Gables.",
  },
];

export default function MiamiBrokerPage() {
  return (
    <>
      <FAQSchema faqs={FAQS} />
      <div className="bg-white min-h-screen">

        {/* ── Intro (matches site pattern) ── */}
        <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">
                  Miami · Kendall · Coral Gables · Doral · South Florida
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                  Medicare Broker in Miami, FL
                </h1>
                <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                  Steve Germain has helped Miami families navigate Medicare since 2013. As an independent broker, he compares every plan available in Miami-Dade County — Advantage, Medigap, and Part D — at no cost. Same price as going direct.
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
                {/* Trust signals — inline, subtle */}
                <p className="mt-6 text-xs text-[#9CA3AF] text-center lg:text-left">
                  ⭐ 5.0 · 126 Google Reviews &nbsp;·&nbsp; Independent — 25+ Carriers &nbsp;·&nbsp; Free · No Fees
                </p>
              </div>

              {/* Photo */}
              <div className="w-full lg:w-[380px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/team/steve.jpg"
                    alt="Steve Germain — Medicare Broker in Miami, FL"
                    className="w-full h-[420px] object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Why local matters ── */}
        <section className="py-4 px-4">
          <div className="max-w-3xl mx-auto divide-y divide-[#E5E7EB]">

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A72C0]">01</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">We Know Miami's Networks</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Choosing a Medicare Advantage plan without checking your doctors' networks first is one of the most common — and costly — mistakes we see. Miami-Dade has dozens of plans across different networks: Baptist Health South Florida, Jackson Health, Cleveland Clinic Florida, and more.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Before you enroll in anything, we verify your specific doctors and specialists are in-network. No guesswork. No surprises after your coverage starts.
              </p>
              <div className="mt-6 border-l-4 border-[#1A72C0] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">A national call center doesn't know your Miami-Dade doctors. A local broker does.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A1A2E]">02</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Compare Every Plan in Your ZIP</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Miami-Dade County has more Medicare plan options than almost any other county in the country. That's an advantage — but only if someone is laying all the options out side by side for you.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We compare every Advantage plan, every Medigap option, and every Part D drug plan available in your specific ZIP code. Including your prescriptions in the comparison. Including your expected doctor visit frequency. You see the real costs, not just the headline premium.
              </p>
              <div className="mt-6 border-l-4 border-[#1A1A2E] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">We work with 25+ carriers. You get the full picture, not one carrier's pitch.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#E8A020]">03</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">We're Here After Enrollment</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Most brokers help you enroll and move on. We don't. Billing issues, network changes, annual plan reviews, questions mid-year — we pick up the phone. Our clients aren't transactions.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Every October during Annual Enrollment Period, we proactively review your plan to make sure it's still the best option. If something better exists, we'll tell you.
              </p>
              <div className="mt-6 border-l-4 border-[#E8A020] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Our relationship doesn't end when you enroll. It starts there.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-4 border-t border-[#E5E7EB] bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-8">Medicare in Miami — FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-[#1A1A2E] mb-2">{faq.question}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#9CA3AF] mt-6">
              More questions?{" "}
              <Link href="/resources" className="text-[#1A72C0] hover:underline">Browse our Medicare resource center →</Link>
            </p>
          </div>
        </section>

        {/* ── NAP ── */}
        <section className="py-10 px-4 border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Our Office</p>
              <p className="text-[#6B7280]">12855 SW 136th Ave, Suite 105<br />Miami (Kendall), FL 33186</p>
            </div>
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Phone</p>
              <p className="text-[#6B7280]">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] hover:underline">{PHONE}</a>
              </p>
            </div>
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Hours</p>
              <p className="text-[#6B7280]">Mon – Fri · 9 AM – 5 PM ET</p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA (dark — consistent with site inner pages) ── */}
        <section className="bg-[#1A1A2E] py-16 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <span className="inline-block text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-4">Independent · 25+ Carriers</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to find the right Medicare plan in Miami?
            </h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              One conversation with Steve and you'll know exactly where you stand — which plan fits your doctors, your budget, and your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors"
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
