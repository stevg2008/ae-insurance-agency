import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQS, getFAQBySlug } from "@/lib/faqs";
import { ChevronLeft } from "lucide-react";
import { PHONE, WEBINAR_URL } from "@/lib/constants";
import FAQSchema from "@/components/seo/FAQSchema";

export async function generateStaticParams() {
  return FAQS.map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);
  if (!faq) return {};
  return {
    title: faq.title,
    description: faq.excerpt,
    alternates: { canonical: `/resources/faq/${faq.slug}` },
    openGraph: {
      url: `/resources/faq/${faq.slug}`,
      title: `${faq.title} | A&E Insurance Agency`,
      description: faq.excerpt,
    },
  };
}

export default async function FAQDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);
  if (!faq) notFound();

  return (
    <div className="bg-white min-h-screen">
      <FAQSchema faqs={faq.content.map((section) => ({
        question: section.heading,
        answer: section.body.join(" "),
      }))} />

      {/* ── Hero ── */}
      <section className="bg-[#1A72C0] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-[#93C5FD] text-sm font-medium mb-6 hover:underline"
          >
            <ChevronLeft size={16} /> Back to Medicare FAQ
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {faq.title}
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Key Takeaways */}
          <div className="bg-[#EBF5FF] border-l-4 border-[#1A72C0] rounded-xl p-6 mb-10">
            <h2 className="text-[#1A72C0] font-bold text-sm uppercase tracking-widest mb-3">
              Key Points
            </h2>
            <ul className="space-y-2">
              {faq.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#1A1A2E] text-sm leading-relaxed">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#1A72C0] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Intro excerpt */}
          <p className="text-[#4B5563] text-lg leading-relaxed mb-10 border-b border-[#E5E7EB] pb-10">
            {faq.excerpt}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {faq.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((para, j) => (
                    <p key={j} className="text-[#374151] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-[#1A72C0] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Still Have Questions?
            </h3>
            <p className="text-[#CBD5E1] text-sm mb-6">
              Our licensed Medicare brokers are here to help — at no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WEBINAR_URL}
                className="inline-block bg-[#E8A020] hover:bg-[#D4911B] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Register for Free Workshop
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="inline-block border border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-[#1A72C0] font-semibold text-sm hover:underline"
            >
              <ChevronLeft size={16} /> View All FAQs
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
