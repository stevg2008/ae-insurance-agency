import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/blogPosts";
import { medicareCoveragePosts } from "@/lib/medicareCoveragePosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/",                                           priority: 1.0, changeFrequency: "weekly"  },
    { url: "/medicare",                                   priority: 0.9, changeFrequency: "monthly" },
    { url: "/health-insurance",                           priority: 0.9, changeFrequency: "monthly" },
    { url: "/retirement",                                 priority: 0.9, changeFrequency: "monthly" },
    { url: "/life-insurance",                             priority: 0.9, changeFrequency: "monthly" },
    { url: "/critical-illness",                           priority: 0.8, changeFrequency: "monthly" },
    { url: "/about",                                      priority: 0.7, changeFrequency: "monthly" },
    { url: "/about/steve",                                priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact",                                    priority: 0.8, changeFrequency: "monthly" },
    { url: "/resources",                                  priority: 0.7, changeFrequency: "monthly" },
    { url: "/blogs",                                      priority: 0.7, changeFrequency: "weekly"  },
    { url: "/tools/medicare-enrollment-calculator",       priority: 0.8, changeFrequency: "yearly"  },
    { url: "/tools/part-b-penalty-calculator",            priority: 0.8, changeFrequency: "yearly"  },
    { url: "/tools/part-d-penalty-calculator",            priority: 0.8, changeFrequency: "yearly"  },
    { url: "/tools/irmaa-calculator",                     priority: 0.8, changeFrequency: "yearly"  },
    { url: "/watch",                                      priority: 0.7, changeFrequency: "monthly" },
    // Local landing pages (high priority — targeting near-page-1 keywords)
    { url: "/medicare-broker-miami",                      priority: 0.9, changeFrequency: "monthly" },
    { url: "/medicare-broker-south-florida",              priority: 0.9, changeFrequency: "monthly" },
    { url: "/medicare-broker-kendall",                    priority: 0.8, changeFrequency: "monthly" },
    { url: "/health-insurance-broker-miami",              priority: 0.8, changeFrequency: "monthly" },
    { url: "/medicare-broker-near-me",                    priority: 0.8, changeFrequency: "monthly" },
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Medicare coverage guide posts
  const medicareEntries: MetadataRoute.Sitemap = medicareCoveragePosts.map((post) => ({
    url: `${SITE_URL}/medicare-coverage/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...medicareEntries];
}
