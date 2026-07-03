import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Medicare & Insurance Blog | A&E Insurance Agency — South Florida",
  description:
    "Medicare tips, enrollment guides, and insurance articles from licensed broker Steve Germain. Plain-language answers to the questions South Florida families are actually asking.",
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    url: `${SITE_URL}/blogs`,
    title: "Medicare & Insurance Blog | A&E Insurance Agency",
    description:
      "Plain-language Medicare and insurance articles from a licensed South Florida broker.",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
