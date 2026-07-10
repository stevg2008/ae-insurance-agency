import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { medicareCoveragePosts, getMedicareCoveragePost } from "@/lib/medicareCoveragePosts";
import { SITE_URL } from "@/lib/constants";
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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/medicare-coverage/${post.slug}` },
    openGraph: {
      url: `${SITE_URL}/medicare-coverage/${post.slug}`,
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
