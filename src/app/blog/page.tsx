import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Soulmate Sketch Articles & Guides",
  description:
    "Learn about soulmate sketches, AI art generation, and relationship insights. Guides, tips, and stories from the Soulmate Sketch community.",
};

const posts = [
  {
    slug: "what-is-a-soulmate-sketch",
    title: "What Is a Soulmate Sketch? Everything You Need to Know",
    excerpt:
      "A soulmate sketch is an AI-generated portrait of your destined romantic partner. Learn how this trending phenomenon works and why millions are trying it.",
    date: "2026-05-20",
  },
  {
    slug: "how-ai-creates-your-soulmate-drawing",
    title: "How AI Creates Your Soulmate Drawing: The Technology Explained",
    excerpt:
      "Ever wondered how artificial intelligence can create a portrait of someone you haven't met? We break down the technology behind soulmate sketch generation.",
    date: "2026-05-15",
  },
  {
    slug: "soulmate-sketch-vs-psychic-drawing",
    title: "Soulmate Sketch vs Psychic Drawing: What's the Difference?",
    excerpt:
      "Traditional psychic drawings have been around for decades. How does AI-powered soulmate sketching compare? We examine both approaches.",
    date: "2026-05-10",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-accent text-sm uppercase tracking-wider">
          Blog
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          Soulmate Sketch Insights
        </h1>
        <p className="text-white/50 mt-3">
          Articles, guides, and stories about soulmate sketches and AI art.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/20 transition-all group"
          >
            <time className="text-accent/60 text-xs">{post.date}</time>
            <h2 className="text-lg font-semibold mt-2 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
