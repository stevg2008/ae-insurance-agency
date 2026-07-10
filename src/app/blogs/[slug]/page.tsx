import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import { SITE_URL } from "@/lib/constants";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | A&E Insurance Agency`,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blogs/${post.slug}` },
    openGraph: {
      url: `${SITE_URL}/blogs/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
