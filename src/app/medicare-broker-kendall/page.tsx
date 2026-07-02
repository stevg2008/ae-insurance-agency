import type { Metadata } from "next";
import { SITE_URL, PHONE } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Broker in Kendall, FL | A&E Insurance Agency",
  description:
    "Local Medicare broker with an office in Kendall, FL. In-person appointments at 12855 SW 136th Ave. Free, independent, 5-star rated since 2009.",
  alternates: { canonical: `${SITE_URL}/medicare-broker-kendall` },
  openGraph: {
    url: `${SITE_URL}/medicare-broker-kendall`,
    title: "Medicare Broker in Kendall, FL | A&E Insurance Agency",
    description:
      "In-person Medicare consultations in Kendall, FL. Independent broker — free, no pressure, same price as going direct.",
  },
};

const FAQS = [
  {
    question: "Is there a Medicare broker office near Kendall, FL?",
    answer:
      "Yes. A&E Insurance Agency is located at 12855 SW 136th Avenue, Suite 105, Miami, FL 33186 — right in the Kendall/West Miami-Dade area. We offer in-person consultations as well as phone and video appointments for those who prefer it.",
  },
  {
    question: "What Medicare Advantage plans cover Kendall-area doctors?",
    answer:
      "Kendall is served by networks including Baptist Health South Florida and Kendall Regional Medical Center. Different Medicare Advantage plans cover different networks. Before you enroll, we verify your specific doctors are in-network — a step many people skip and later regret.",
  },
  {
    question: "Do I need an appointment to see a Medicare broker in Kendall?",
    answer:
      "A quick call to (954) 281-5622 is the easiest start. We'll get you scheduled for the same week in most cases — in-person at our Kendall office or over the phone, whichever works best for you.",
  },
];

export default function KendallBrokerPage() {
  return (
    <>
      <FAQSchema faqs={FAQS} />
      <div className="bg-white min-h-screen">

        {/* ── Intro ── */}
        <section className="pt-14 pb-10 px-4 border-b border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-[#0071BB] font-bold text-xs uppercase tracking-widest mb-3">
                  In-Person Office · Kendall / West Miami-Dade
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-4">
                  Medicare Broker in Kendall, FL
                </h1>
                <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                  A&E Insurance Agency is located at 12855 SW 136th Avenue — right in Kendall. We help West Miami-Dade families compare Medicare plans in person, by phone, or by video at no cost and no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#0071BB] hover:bg-[#155fa0] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                  >
                    Book a Free Consultation
                  </Link>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center whitespace-nowrap border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#0071BB] hover:text-white font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-lg transition-colors min-h-[56px]"
                  >
                    Call {PHONE}
                  </a>
                </div>
                <p className="mt-6 text-xs text-[#9CA3AF] text-center lg:text-left">
                  ⭐ 5.0 · 126 Google Reviews &nbsp;·&nbsp; In-Person Office in Kendall &nbsp;·&nbsp; Free · No Fees
                </p>
              </div>

              <div className="w-full lg:w-[380px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/team/steve.jpg"
                    alt="Steve Germain — Medicare Broker in Kendall, FL"
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
                <span className="text-4xl font-extrabold leading-none text-[#0071BB]">01</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Right in Your Neighborhood</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Our office sits on SW 136th Avenue in the heart of Kendall. You can come see us in person — no need to drive to Brickell or Coral Gables to find qualified Medicare help. We're your neighbors.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We also serve clients across Pinecrest, Palmetto Bay, Cutler Bay, and West Kendall by phone and video if in-person doesn't fit your schedule.
              </p>
              <div className="mt-6 border-l-4 border-[#0071BB] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">Local office. Local knowledge. Same ZIP code as you.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#1A1A2E]">02</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Network Verification Before You Enroll</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                The Kendall area is served by Baptist Health South Florida, Kendall Regional Medical Center, and a range of independent physicians and specialists. Different Medicare Advantage plans cover different networks — and the details matter.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Before recommending any plan, we verify your specific doctors are covered. We've seen too many people enroll in a $0 plan and discover their cardiologist is out-of-network three months later.
              </p>
              <div className="mt-6 border-l-4 border-[#1A1A2E] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">We check your doctors before you sign anything. Every time.</p>
              </div>
            </div>

            <div className="py-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-extrabold leading-none text-[#E8A020]">03</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E]">Free — Same Price as Going Direct</h2>
              </div>
              <p className="text-[#4B5563] leading-relaxed mb-3">
                Medicare brokers are paid by the insurance carriers. You pay zero fees. The plan costs exactly the same whether you call us or call the carrier directly.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                What changes is what you get: a side-by-side comparison of every plan available in Kendall's ZIP codes, factored against your doctors and your prescriptions — from someone who does this every day.
              </p>
              <div className="mt-6 border-l-4 border-[#E8A020] pl-4 bg-[#F3F4F6] py-3 pr-4 rounded-r-lg">
                <p className="text-sm text-[#1A1A2E] font-semibold">The Bottom Line:</p>
                <p className="text-sm text-[#4B5563]">No fees. No pressure. No reason not to call.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-4 border-t border-[#E5E7EB] bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#0071BB] font-bold text-xs uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-8">Medicare in Kendall — FAQ</h2>
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
              <p className="text-[#6B7280]"><a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#0071BB] hover:underline">{PHONE}</a></p>
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
            <span className="inline-block text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-4">Your Local Kendall Medicare Broker</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Talk to Steve — Right in Your Neighborhood</h2>
            <p className="text-white/70 text-sm mb-8">In-person at our Kendall office or by phone. Free, no pressure, same week.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-8 py-4 rounded-lg transition-colors">
                Book Free Consultation
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
