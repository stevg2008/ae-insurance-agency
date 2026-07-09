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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "A&E Insurance Agency | Medicare & Retirement Planning — Miami, FL",
    template: "%s | A&E Insurance Agency",
  },
  description:
    "South Florida's trusted independent Medicare insurance agency. We compare plans from 25+ carriers and find the right fit for your doctors, your budget, and your life. Call " +
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
      "South Florida's trusted independent Medicare insurance agency. 25+ carriers compared. Steve Germain, licensed in 35 states, author of Medicare Decoded.",
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
      "South Florida's trusted independent Medicare insurance agency. 25+ carriers. Licensed in 35 states.",
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
        <Script id="search-atlas" strategy="afterInteractive">{`
          var script = document.createElement("script");
          script.setAttribute("nowprocket", "");
          script.setAttribute("nitro-exclude", "");
          script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
          script.dataset.uuid = "a6df8d47-deb9-4a0b-8d1a-a21118fad746";
          script.id = "sa-dynamic-optimization-loader";
          document.head.appendChild(script);
        `}</Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xjsmlrckr2");
        `}</Script>
        <Script src="https://link.aeinsurancefl.com/js/form_embed.js" strategy="lazyOnload" />
        <Script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a4bf42b20a37cbac4bc8e75" strategy="lazyOnload" />
      </body>
    </html>
  );
}
