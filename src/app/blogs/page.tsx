import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Medicare & Insurance Blog | A&E Insurance Agency",
  description:
    "Medicare tips, enrollment guides, and insurance articles from licensed broker Steve Germain. Plain-language answers to the questions South Florida families are actually asking.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    url: "/blogs",
    title: "Medicare & Insurance Blog | A&E Insurance Agency",
    description:
      "Plain-language Medicare and insurance articles from a licensed South Florida broker.",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
