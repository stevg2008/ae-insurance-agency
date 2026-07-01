import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { medicareCoveragePosts, getMedicareCoveragePost } from "@/lib/medicareCoveragePosts";
import MedicareCoveragePostClient from "./MedicareCoveragePostClient";

export function generateStaticParams() {
  return medicareCoveragePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getMedicareCoveragePost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | A&E Insurance Agency`,
    description: post.excerpt,
    alternates: { canonical: `/medicare-coverage/${post.slug}` },
    openGraph: {
      url: `/medicare-coverage/${post.slug}`,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function MedicareCoveragePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMedicareCoveragePost(slug);
  if (!post) notFound();
  return <MedicareCoveragePostClient post={post} />;
}
