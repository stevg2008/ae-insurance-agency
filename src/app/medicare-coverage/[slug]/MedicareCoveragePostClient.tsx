"use client";

import Link from "next/link";
import type { MedicareCoveragePost } from "@/lib/medicareCoveragePosts";
import { PHONE } from "@/lib/constants";

export default function MedicareCoveragePostClient({ post }: { post: MedicareCoveragePost }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Back link */}
      <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-3 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/medicare" className="text-[#1A72C0] text-sm font-medium hover:underline">
            ← Back to Medicare
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {post.date && (
          <p className="text-xs text-[#9CA3AF] mb-4">{post.date}</p>
        )}

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-8">
          {post.title}
        </h1>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-14 bg-[#1A72C0] rounded-2xl p-8 text-center">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-2">
            No Cost · No Pressure · No Obligation
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to Find the Right Medicare Plan?
          </h2>
          <p className="text-white/70 text-sm mb-6">
            Steve Germain is a licensed Medicare broker serving South Florida. We compare every major plan so you don't have to — and it's always free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#E8A020] hover:bg-[#d08f18] text-white font-extrabold uppercase tracking-wide text-sm px-7 py-4 rounded-lg transition-colors"
            >
              Schedule Your Needs Assessment
            </Link>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] font-bold uppercase tracking-wide text-sm px-7 py-4 rounded-lg transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
