import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Soulmate Sketch",
  description:
    "Learn about Soulmate Sketch — the AI-powered service that generates personalized pencil sketches of your destined partner using FLUX technology.",
  alternates: { canonical: "https://soulmatesketch.art/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <span className="text-accent text-sm uppercase tracking-wider">
        About
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">
        About Soulmate Sketch
      </h1>

      <div className="space-y-6 text-white/70 leading-relaxed">
        <p>
          Soulmate Sketch uses cutting-edge artificial intelligence to create
          beautiful pencil portrait sketches based on your unique personality and
          romantic preferences. Our mission is to provide a fun, fascinating, and
          visually stunning experience that sparks joy and curiosity.
        </p>

        <h2 className="text-xl font-heading text-accent mt-8">
          How We&apos;re Different
        </h2>
        <p>
          Unlike traditional &ldquo;psychic&rdquo; soulmate drawing services,
          we&apos;re transparent about our process. We use AI technology — not
          supernatural claims — to generate your sketch. Every portrait is
          created algorithmically based on your input, ensuring consistency and
          quality.
        </p>

        <h2 className="text-xl font-heading text-accent mt-8">
          Our Technology
        </h2>
        <p>
          We leverage FLUX by Black Forest Labs, one of the world&apos;s most
          advanced image generation models, combined with carefully engineered
          prompts that translate your personality profile into visual
          characteristics. Each sketch is generated at high resolution with a
          pencil drawing aesthetic.
        </p>

        <h2 className="text-xl font-heading text-accent mt-8">Privacy</h2>
        <p>
          We respect your privacy. Your questionnaire responses are used solely
          to generate your sketch and are never sold or shared with third
          parties. We don&apos;t require account creation or collect unnecessary
          personal information.
        </p>

        <h2 className="text-xl font-heading text-accent mt-8">Disclaimer</h2>
        <p>
          Soulmate Sketch is designed for <strong>entertainment purposes
          only</strong>. The sketches are artistic interpretations of your
          preferences, not actual predictions of your future partner. Results
          should be enjoyed as fun, creative expressions rather than taken
          literally.
        </p>
      </div>
    </div>
  );
}
