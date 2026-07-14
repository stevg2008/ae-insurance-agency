"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

const POSTS_PER_PAGE = 12;

// Newest first by original publish date; same-date posts keep their existing order.
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogsClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = sortedPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Header */}
      <div className="bg-[#1A72C0] py-14 px-4 text-center">
        <span className="inline-block text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-3">
          A&E Insurance Agency
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Medicare & Insurance Blog
        </h1>
        <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
          Written by Steve Germain — licensed Medicare broker, author of Medicare Decoded, and someone who has answered these same questions for real South Florida clients since 2009.
        </p>
        <input
          type="search"
          placeholder="Search articles…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-full max-w-md mx-auto block rounded-lg px-5 py-3 text-[#1A1A2E] text-sm outline-none shadow-lg"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {visible.length === 0 ? (
          <p className="text-center text-[#6B7280] py-20">No articles found for &ldquo;{search}&rdquo;</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                    {post.date && <span>{post.date}</span>}
                    {post.readTime && (
                      <>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-[#1A1A2E] font-extrabold text-lg leading-snug mb-3 group-hover:text-[#1A72C0] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-[#1A72C0] text-sm font-semibold group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-white border border-[#E5E7EB] text-sm font-medium text-[#1A1A2E] disabled:opacity-40 hover:bg-[#F3F4F6] transition-colors"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                  n === page
                    ? "bg-[#1A72C0] text-white"
                    : "bg-white border border-[#E5E7EB] text-[#1A1A2E] hover:bg-[#F3F4F6]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg bg-white border border-[#E5E7EB] text-sm font-medium text-[#1A1A2E] disabled:opacity-40 hover:bg-[#F3F4F6] transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
