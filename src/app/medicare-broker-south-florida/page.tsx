import type { Metadata } from "next";
import { SITE_URL, PHONE } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Broker South Florida | A&E Insurance Agency",
  description:
    "Independent Medicare broker serving Miami-Dade, Broward, and Palm Beach counties since 2009. Free plan comparison — Advantage, Medigap, Part D. 5-star rated.",
  alternates: { canonical: `${SITE_URL}/medicare-broker-south-florida` },
  openGraph: {
    url: `${SITE_URL}/medicare-broker-south-florida`,
    title: "Medicare Broker South Florida | A&E Insurance Agency",
    description:
      "Compare Medicare plans across South Florida with a local independent broker. Free. No pressure. Same price as going direct.",
  },
};

const FAQS = [
  {
    question: "Who is a trusted Medicare broker in South Florida?",
    answer:
      "A&E Insurance Agency, led by Steve Germain, has served South Florida since 2009 with a 5.0-star Google rating across 126 reviews. As an independent broker, Steve compares plans from 25+ carriers across Miami-Dade, Broward, and Palm Beach counties — at no cost.",
  },
  {
    question: "Is a Medicare broker the same as a Medicare agent?",
    answer:
      "The key difference is independent vs. captive. A captive agent works for one carrier and can only offer that company's plans. An independent Medicare broker works with many carriers and recommends the best plan for you — not the one that pays the highest commission.",
  },
  {
    question: "When can I sign up for Medicare in Florida?",
    answer:
      "Your Initial Enrollment Period opens 3 months before your 65th birthday and closes 3 months after — a 7-month window. Missing it without qualifying coverage triggers permanent late enrollment penalties. A local broker helps you plan the right timeline well in advance.",
  },
];

export default function SouthFloridaBrokerPage() {
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
                  Miami-Dade · Broward · Palm Beach
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                  Medicare Broker in South Florida
                </h1>
                <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                  A&E Insurance Agency is South Florida's independent Medicare broker. We've helped 3,000+ families across Miami-Dade, Broward, and Palm Beach counties compare every available plan — Advantage, Medigap, and Part D — at no cost to you since 2009.
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
                    alt="Steve Germain — Medicare Broker South Florida"
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">No Fees — Ever</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Medicare brokers are paid by the insurance carriers, not by you. You pay the exact same premium whether you use A&E Insurance Agency or call the carrier directly. There is no financial downside to working with an independent broker.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                What you gain is someone in your corner — someone who knows the market, knows the plans, and has no financial reason to push one carrier over another.
              </p>
              <div className="mt-6 border-l-4 border-[#1A72C0] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Same price. More guidance. No catch.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A1A2E]">02</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Independent — 25+ Carriers</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                South Florida has one of the most competitive Medicare markets in the country. That's good for you — if someone is comparing all of it for you. We work with Humana, Aetna, UnitedHealthcare, BlueCross, Cigna, CarePlus, Simply Healthcare, and more.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We compare plans from every carrier available in your ZIP code, factoring in your doctors, your prescriptions, and your likely annual costs. You see the full picture before you decide.
              </p>
              <div className="mt-6 border-l-4 border-[#1A1A2E] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">We work for you, not for the carriers.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#E8A020]">03</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">A Relationship, Not a Transaction</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                We serve Miami, Kendall, Coral Gables, Doral, Hialeah, Fort Lauderdale, Hollywood, Aventura, Boca Raton, Pompano Beach, and communities across all three South Florida counties. In-person at our Kendall office, or virtually anywhere in the region.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                After you enroll, we stay available for billing questions, network changes, and your annual plan review every October. Our clients hear from us — we don't wait for them to track us down.
              </p>
              <div className="mt-6 border-l-4 border-[#E8A020] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">We're your broker for life, not just for enrollment season.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-4 border-t border-[#E5E7EB] bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-8">Medicare in South Florida — FAQ</h2>
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
            <span className="inline-block text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-4">Free · Local · Independent</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Let's find the right plan for you.</h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              In-person in Miami or virtual across all of South Florida. One free conversation changes everything.
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
