"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blogPosts";
import { PHONE } from "@/lib/constants";
import BlogPostingSchema from "@/components/seo/BlogPostingSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white min-h-screen">
      <BlogPostingSchema
        title={post.title}
        excerpt={post.excerpt}
        slug={post.slug}
        image={post.image}
        datePublished={post.date}
        dateModified={post.updated}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}
      {/* Back link */}
      <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] py-3 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blogs" className="text-[#1A72C0] text-sm font-medium hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9CA3AF] mb-4">
          <span>
            By{" "}
            <Link href="/about/steve" className="text-[#1A72C0] font-medium hover:underline">
              Steve Germain
            </Link>
            , Licensed Insurance Broker
          </span>
          {post.date && (
            <>
              <span>·</span>
              <span>{post.date}</span>
            </>
          )}
          {post.updated && (
            <>
              <span>·</span>
              <span>Updated {post.updated}</span>
            </>
          )}
          {post.readTime && (
            <>
              <span>·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
          {post.title}
        </h1>

        {/* Webflow HTML content (hero image is included in content) */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-14 bg-[#1A72C0] rounded-2xl p-8 text-center">
          <p className="text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-2">
            Free Guidance · 25+ Carriers · Since 2009
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Have Questions About Your Medicare Options?
          </h2>
          <p className="text-white/70 text-sm mb-6">
            Steve Germain is a licensed Medicare broker serving South Florida. Call or schedule a free consultation — same price as going direct.
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
