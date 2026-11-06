import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: "AI-powered language learning and a marketplace to find teachers and consultants.",
};

const serializeJsonLd = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Parlezhub | AI Language Learning & Expert Marketplace",
    template: "%s | Parlezhub",
  },
  description: "Practice a new language with an AI voice tutor or find teachers and consultants on Parlezhub.",
  applicationName: SITE_NAME,
  category: "Education",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: "Parlezhub | AI Language Learning & Expert Marketplace",
    description: "Practice a new language with an AI voice tutor or find teachers and consultants on Parlezhub.",
    url: SITE_URL,
    images: [{
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      alt: "Parlezhub: AI-powered language learning and expert marketplace",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema) }} />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
