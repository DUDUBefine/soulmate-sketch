import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "what-is-a-soulmate-sketch": {
    title: "What Is a Soulmate Sketch? Everything You Need to Know",
    date: "2026-05-20",
    content: `
A soulmate sketch is an AI-generated pencil portrait that visualizes your destined romantic partner. This trending phenomenon combines artificial intelligence with the age-old human desire to know who your soulmate is.

## How Did Soulmate Sketches Become Popular?

The concept gained massive traction on social media platforms like TikTok and Instagram in the early 2020s. Initially offered as "psychic drawings" by individuals claiming clairvoyant abilities, the trend evolved with AI technology to become more accessible and consistent.

## How Does It Work?

The process is simple:

1. **You answer a questionnaire** about your personality, preferences, and what you value in a partner
2. **AI analyzes your responses** to understand your ideal partner profile
3. **A unique pencil sketch is generated** based on your specific combination of traits
4. **You receive your portrait** along with a personalized compatibility reading

## Is It Accurate?

Soulmate sketches are designed for **entertainment purposes**. While some users report uncanny resemblances to people they later meet, the sketches are artistic interpretations of your preferences — not actual predictions.

Think of it as a beautiful reflection of what your heart desires, rendered as a stunning pencil portrait.

## Why Try a Soulmate Sketch?

- **It's fun and fascinating** — who wouldn't want to see their ideal partner?
- **You get a unique piece of art** — each sketch is one-of-a-kind
- **Self-discovery** — the questionnaire helps you understand your own preferences
- **Great conversation starter** — share it with friends and see their sketches too

Ready to discover your soulmate? [Get your free sketch now](/sketch).
    `,
  },
  "how-ai-creates-your-soulmate-drawing": {
    title: "How AI Creates Your Soulmate Drawing: The Technology Explained",
    date: "2026-05-15",
    content: `
Behind every soulmate sketch is a sophisticated AI system that transforms your personality and preferences into a unique pencil portrait. Here's how the technology works.

## The AI Behind the Art

We use **FLUX 1.1 Pro** by Black Forest Labs, one of the most advanced image generation models available. Combined with carefully crafted prompts based on your questionnaire responses, it produces detailed pencil sketch portraits.

## From Answers to Art

When you complete the questionnaire, your answers are transformed into a detailed prompt:

- **Personality type** influences the expression and demeanor of the portrait
- **Physical preferences** (hair, face shape, style) directly shape the visual features
- **Romantic traits** you value affect the overall mood and energy of the sketch

## Quality and Uniqueness

Each sketch is generated with:
- **High resolution** (1024x1024 pixels) for detailed output
- **Pencil sketch style** for an authentic, artistic feel
- **Unique seed values** ensuring no two sketches are ever identical
- **Negative prompts** to filter out low-quality or unrealistic elements

## The Science of Attraction

Research shows we're naturally drawn to certain physical features based on our personality type and life experiences. Our AI takes these psychological patterns into account when generating your sketch.

Experience the technology yourself — [generate your soulmate sketch](/sketch).
    `,
  },
  "soulmate-sketch-vs-psychic-drawing": {
    title: "Soulmate Sketch vs Psychic Drawing: What's the Difference?",
    date: "2026-05-10",
    content: `
Both AI soulmate sketches and traditional psychic drawings claim to reveal your future partner's face. But how do they actually compare?

## Traditional Psychic Drawings

Psychic soulmate drawings have been offered for decades, typically by individuals claiming extrasensory abilities:

- **Process**: The "psychic" meditates or uses tarot cards, then draws what they "see"
- **Cost**: Usually $30-$50 per drawing
- **Delivery**: Can take days to weeks
- **Consistency**: Results vary greatly between practitioners

## AI Soulmate Sketches

AI-powered sketches use cutting-edge technology for a more consistent experience:

- **Process**: Advanced algorithms analyze your preferences to generate a portrait
- **Cost**: Free to try
- **Delivery**: Generated in under 30 seconds
- **Consistency**: Same quality every time

## Which Should You Try?

Both are for entertainment purposes. The key differences:

| Feature | Psychic Drawing | AI Sketch |
|---------|----------------|-----------|
| Speed | Days-Weeks | Seconds |
| Cost | $30-50 | Free |
| Consistency | Varies | Reliable |
| Customization | Limited | Based on your input |
| Technology | Intuition | Artificial Intelligence |

## The Bottom Line

Whether you choose a psychic drawing or an AI sketch, the fun is in the experience. AI soulmate sketches offer a faster, more personalized, and more accessible option.

[Try an AI soulmate sketch for free](/sketch).
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 160).trim(),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-accent text-sm hover:underline mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-accent/60 text-sm">{post.date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-white/70 leading-relaxed space-y-4 [&_h2]:text-accent [&_h2]:font-heading [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-4 [&_strong]:text-white [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_table]:w-full [&_th]:text-left [&_th]:p-3 [&_th]:border-b [&_th]:border-white/10 [&_td]:p-3 [&_td]:border-b [&_td]:border-white/10">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/^- (.*)/gm, '<li>$1</li>')
                .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
                .replace(/\n\n/g, '</p><p>')
                .replace(/\| (.*)/g, (match) => {
                  const cells = match.split('|').filter(Boolean).map(c => c.trim());
                  if (cells.every(c => c.startsWith('-'))) return '';
                  if (cells[0] === 'Feature') {
                    return '<tr><th>' + cells.join('</th><th>') + '</th></tr>';
                  }
                  return '<tr><td>' + cells.join('</td><td>') + '</td></tr>';
                }),
            }}
          />
        </div>
      </article>
    </div>
  );
}
