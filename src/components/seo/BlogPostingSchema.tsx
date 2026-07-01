import { SITE_URL, COMPANY_NAME } from "@/lib/constants";

interface Props {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  datePublished: string;
}

export default function BlogPostingSchema({ title, excerpt, slug, image, datePublished }: Props) {
  const url = `${SITE_URL}/blogs/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description: excerpt,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#steve-germain`,
      name: "Steve Germain",
      url: `${SITE_URL}/about/steve`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(image ? { image: { "@type": "ImageObject", url: image } } : {}),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    about: {
      "@type": "Thing",
      name: "Medicare Insurance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
