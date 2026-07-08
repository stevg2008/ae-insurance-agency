import type { Metadata } from "next";
import { SITE_URL, PHONE } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Broker Near Me | A&E Insurance Agency",
  description:
    "Looking for a Medicare broker near you? A&E Insurance Agency serves South Florida in person and clients across 35+ states by phone or video. Free. 5-star rated. No pressure.",
  alternates: { canonical: `${SITE_URL}/medicare-broker-near-me` },
  openGraph: {
    url: `${SITE_URL}/medicare-broker-near-me`,
    title: "Medicare Broker Near Me | A&E Insurance Agency",
    description:
      "Independent Medicare broker in person (Miami/Kendall) and virtually across 35+ states. Free plan comparison. Same price as going direct.",
  },
};

const FAQS = [
  {
    question: "What does a Medicare broker near me actually do?",
    answer:
      "A local Medicare broker compares every Advantage, Medigap, and Part D plan available in your area and helps you choose based on your doctors, prescriptions, and budget. They're paid by insurance carriers — not you — so their guidance is free and their advice should be unbiased.",
  },
  {
    question: "Can I use a Medicare broker if I don't live in South Florida?",
    answer:
      "Yes. A&E Insurance Agency is licensed in 35+ states and serves clients outside South Florida by phone or video. Many of our clients are Florida retirees who have since relocated, or snowbirds splitting time between states. A virtual consultation works exactly the same as in-person.",
  },
  {
    question: "How do I know if a Medicare broker is trustworthy?",
    answer:
      "Look for an independent broker (not tied to one carrier), verified Google reviews, and no high-pressure tactics. Ask how many carriers they represent — more is better. A&E Insurance Agency has a 5.0-star Google rating across 126 reviews and works with 25+ top-rated carriers.",
  },
];

export default function MedicareBrokerNearMePage() {
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
                  In-Person in South Florida · Virtual Nationwide
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                  Medicare Broker Near Me
                </h1>
                <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                  A&E Insurance Agency offers in-person Medicare consultations at our Kendall office and virtual appointments by phone or video for clients across 35+ states. Free, independent, same price as going direct.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1A72C0] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
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
                <p className="mt-6 text-xs text-[#9CA3AF] text-center lg:text-left">
                  ⭐ 5.0 · 126 Google Reviews &nbsp;·&nbsp; Independent — 25+ Carriers &nbsp;·&nbsp; Free · No Fees
                </p>
              </div>

              <div className="w-full lg:w-[380px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/team/steve.jpg"
                    alt="Steve Germain — Independent Medicare Broker"
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Independent, Not Captive</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                A captive agent works for one insurance company and can only offer that company's plans. An independent Medicare broker works with many carriers and can compare all of them for you.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                A&E Insurance Agency works with 25+ top-rated carriers. We have no financial incentive to push one plan over another — we get paid by whichever carrier you choose, and the rates are the same either way.
              </p>
              <div className="mt-6 border-l-4 border-[#1A72C0] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Only an independent broker can honestly compare all your options.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A1A2E]">02</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">In Person or Virtually — Your Choice</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                For South Florida residents, we offer in-person consultations at our Kendall office on SW 136th Avenue. For clients anywhere else in the country, we work by phone or video — same quality of guidance, same depth of comparison.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We're licensed in 35+ states and have helped clients from Florida to California navigate Medicare. Many are retirees who moved away from South Florida and wanted to keep working with someone they trust.
              </p>
              <div className="mt-6 border-l-4 border-[#1A1A2E] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Good Medicare guidance doesn't require being in the same room.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#E8A020]">03</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Carriers Pay the Broker Fee — You Pay the Same Either Way.</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Medicare brokers are paid by the insurance carriers. You pay zero fees. The plan costs exactly the same whether you use a broker or call the carrier directly.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                If anyone is charging you a fee to help you pick a Medicare plan, that's a red flag. Our consultations are free, our plan comparisons are free, and our support after enrollment is free.
              </p>
              <div className="mt-6 border-l-4 border-[#E8A020] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">There is no downside to calling an independent Medicare broker.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Local links ── */}
        <section className="py-10 px-4 border-t border-[#E5E7EB] bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-4">Browse by Location</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/medicare-broker-miami" className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm font-medium text-[#1A72C0] hover:border-[#1A72C0] transition-colors">
                Medicare Broker Miami
              </Link>
              <Link href="/medicare-broker-south-florida" className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm font-medium text-[#1A72C0] hover:border-[#1A72C0] transition-colors">
                Medicare Broker South Florida
              </Link>
              <Link href="/medicare-broker-kendall" className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm font-medium text-[#1A72C0] hover:border-[#1A72C0] transition-colors">
                Medicare Broker Kendall
              </Link>
              <Link href="/health-insurance-broker-miami" className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm font-medium text-[#1A72C0] hover:border-[#1A72C0] transition-colors">
                Health Insurance Broker Miami
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-4 border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#1A72C0] font-bold text-xs uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-8">Medicare Broker Near Me — FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="bg-[#F3F4F6] rounded-xl p-6">
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
              <p className="font-extrabold text-[#1A1A2E] mb-1">Office (In-Person)</p>
              <p className="text-[#6B7280]">12855 SW 136th Ave, Suite 105<br />Miami (Kendall), FL 33186</p>
            </div>
            <div>
              <p className="font-extrabold text-[#1A1A2E] mb-1">Phone / Virtual</p>
              <p className="text-[#6B7280]">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#1A72C0] hover:underline">{PHONE}</a>
                <br /><span className="text-xs">Available across 35+ states</span>
              </p>
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
            <h2 className="text-3xl font-extrabold text-white mb-4">Talk to a Medicare Broker — Wherever You Are</h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              In person in South Florida or by phone and video anywhere in the country. Same price as going direct.
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
