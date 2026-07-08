import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { SITE_URL, PHONE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    template: "%s | A&E Insurance Agency",
  },
  description:
    "South Florida's trusted independent Medicare insurance agency. No fees, no bias, same price. We help Miami families navigate Medicare with clarity and confidence. Call " +
    PHONE +
    ".",
  keywords: [
    "Medicare broker Miami",
    "Medicare insurance Miami",
    "Medicare supplement Florida",
    "Medicare Advantage Miami",
    "independent Medicare broker",
    "Medicare enrollment help",
    "IRMAA calculator",
    "Medicare late enrollment penalty",
    "retirement planning Miami",
    "A&E Insurance Agency",
  ],
  authors: [{ name: "A&E Insurance Agency" }],
  creator: "A&E Insurance Agency",
  publisher: "A&E Insurance Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "A&E Insurance Agency",
    title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    description:
      "South Florida's trusted independent Medicare insurance agency. No fees, no bias, same price. Navigate Medicare with clarity and confidence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A&E Insurance Agency — Medicare & Retirement Planning, Miami FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    description:
      "South Florida's trusted independent Medicare insurance agency. No fees, no bias, same price.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LocalBusinessSchema />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZG55M8F9H5" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZG55M8F9H5', { page_path: window.location.pathname });
        `}</Script>
        <Script src="https://link.aeinsurancefl.com/js/form_embed.js" strategy="lazyOnload" />
        <Script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a4bf42b20a37cbac4bc8e75" strategy="lazyOnload" />
      </body>
    </html>
  );
}
