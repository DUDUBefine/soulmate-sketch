import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const GA_ID = "G-FHBDW6XBFF";

export const metadata: Metadata = {
  metadataBase: new URL("https://soulmatesketch.art"),
  title: {
    default: "Soulmate Sketch - Discover What Your Soulmate Looks Like | Free AI Sketch",
    template: "%s | Soulmate Sketch",
  },
  description:
    "Get a free AI-generated pencil sketch of your soulmate. Answer a few questions about your personality and preferences, and our AI reveals your destined partner's portrait in seconds.",
  keywords: [
    "soulmate sketch",
    "soulmate drawing",
    "free soulmate sketch",
    "AI soulmate sketch",
    "soulmate portrait",
    "psychic soulmate drawing",
    "soulmate sketch online",
    "soulmate sketch free",
    "what does my soulmate look like",
    "soulmate sketch review",
  ],
  openGraph: {
    title: "Soulmate Sketch - Discover What Your Soulmate Looks Like",
    description:
      "Get a free AI-generated pencil sketch of your soulmate. Based on your personality and preferences, our AI reveals your destined partner's portrait.",
    type: "website",
    locale: "en_US",
    url: "https://soulmatesketch.art",
    siteName: "Soulmate Sketch",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Soulmate Sketch - Discover What Your Soulmate Looks Like",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulmate Sketch - Discover Your Soulmate's Face",
    description:
      "Free AI-generated pencil sketch of your soulmate based on your personality and preferences.",
    images: ["/opengraph-image"],
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
    canonical: "https://soulmatesketch.art",
  },
};

function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Soulmate Sketch",
          url: "https://soulmatesketch.art",
          description: "AI-powered soulmate sketch generation service",
        }),
      }}
    />
  );
}

function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Soulmate Sketch",
          url: "https://soulmatesketch.art",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://soulmatesketch.art/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

function BreadcrumbJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://soulmatesketch.art" },
            { "@type": "ListItem", position: 2, name: "Get Your Sketch", item: "https://soulmatesketch.art/sketch" },
            { "@type": "ListItem", position: 3, name: "Blog", item: "https://soulmatesketch.art/blog" },
          ],
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <BreadcrumbJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
