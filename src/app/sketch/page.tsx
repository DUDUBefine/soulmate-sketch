import type { Metadata } from "next";
import SketchClient from "./SketchClient";

export const metadata: Metadata = {
  title: "Get Your Free Soulmate Sketch - AI Portrait Generator",
  description:
    "Answer a few questions about your personality and preferences, and our AI will generate a beautiful pencil sketch of your soulmate. Free, takes under 2 minutes.",
  alternates: {
    canonical: "https://soulmatesketch.art/sketch",
  },
  openGraph: {
    title: "Get Your Free Soulmate Sketch",
    description: "Our AI creates a personalized pencil sketch of your soulmate based on your personality. Try it free!",
    url: "https://soulmatesketch.art/sketch",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Get Your Free Soulmate Sketch",
      },
    ],
  },
};

export default function SketchPage() {
  return (
    <>
      {/* Static content for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Get Your Free Soulmate Sketch</h1>
        <p>
          Discover what your soulmate looks like with our AI-powered pencil sketch generator.
          Answer questions about your personality type, romantic preferences, and ideal partner
          traits. Our advanced AI will create a unique pencil portrait of your destined partner
          in under 30 seconds. Completely free to try.
        </p>
      </div>
      <SketchClient />
    </>
  );
}
