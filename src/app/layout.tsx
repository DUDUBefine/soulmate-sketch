import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Soulmate Sketch - Discover What Your Soulmate Looks Like | AI Sketch",
    template: "%s | Soulmate Sketch",
  },
  description:
    "Get a personalized AI-generated pencil sketch of your soulmate. Based on your personality and preferences, our AI reveals your destined partner's portrait.",
  keywords: [
    "soulmate sketch",
    "soulmate drawing",
    "psychic soulmate drawing",
    "soulmate portrait",
    "AI soulmate sketch",
    "free soulmate sketch",
    "soulmate sketch online",
  ],
  openGraph: {
    title: "Soulmate Sketch - Discover What Your Soulmate Looks Like",
    description:
      "Get a personalized AI-generated pencil sketch of your soulmate. Our AI reveals your destined partner's portrait.",
    type: "website",
    locale: "en_US",
    siteName: "Soulmate Sketch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulmate Sketch - Discover Your Soulmate's Face",
    description:
      "AI-generated pencil sketch of your soulmate based on your personality and preferences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
