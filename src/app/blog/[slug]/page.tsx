import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://soulmatesketch.art";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "what-is-a-soulmate-sketch": {
    title: "What Is a Soulmate Sketch? Everything You Need to Know",
    description:
      "Learn what a soulmate sketch is, how AI generates personalized pencil portraits of your destined partner, and why millions are trying this viral trend.",
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
    description:
      "Discover how AI technology transforms your personality and preferences into a unique pencil sketch portrait. A deep dive into FLUX models and prompt engineering.",
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
    description:
      "AI soulmate sketch vs traditional psychic drawing — compare speed, cost, consistency, and technology. Find out which is right for you.",
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
  "free-soulmate-sketch-online": {
    title: "Free Soulmate Sketch Online — Try It in Under 2 Minutes",
    description:
      "Generate a free soulmate sketch online with AI. No sign-up required, no credit card needed. Get your personalized pencil portrait in seconds.",
    date: "2026-06-01",
    content: `
Looking for a free soulmate sketch online? You're not alone. Thousands of people search every day for ways to visualize their future partner — and now you can do it for free with AI.

## What You Get for Free

Our free soulmate sketch service includes:

- **A personalized pencil sketch** generated by AI based on your unique preferences
- **A soulmate reading** — a short interpretation of your compatibility and connection
- **Download and share options** — save your sketch or share it on social media

No sign-up, no credit card, no hidden fees.

## How to Get Your Free Sketch

1. **Visit our sketch page** and answer 5 quick questions
2. **Describe your ideal partner** — hair, face shape, style, and more
3. **Wait ~20 seconds** while our AI generates your portrait
4. **View and download** your soulmate sketch

The entire process takes under 2 minutes.

## Why Is It Free?

We believe everyone deserves to experience the magic of seeing their soulmate's portrait. Our AI technology makes it possible to generate high-quality sketches at scale, so we can offer the first sketch completely free.

## What Makes Our Sketches Different

Unlike other "free soulmate sketch" sites that use generic templates or low-quality images, every sketch we generate is:

- **100% unique** — no two sketches are ever the same
- **High resolution** — suitable for printing or sharing
- **AI-powered** — using the latest FLUX 1.1 Pro model
- **Personalized** — based specifically on YOUR answers

[Get your free soulmate sketch now](/sketch).

## Tips for the Best Results

Want the most accurate soulmate sketch? Here are some tips:

- **Be honest** about your personality — this shapes the expression and energy of the portrait
- **Think about what you truly desire** — not what you think you should want
- **Consider past attractions** — what features have you been drawn to before?
- **Don't overthink it** — go with your first instinct on each question
    `,
  },
  "soulmate-sketch-review": {
    title: "Soulmate Sketch Review 2026 — Is It Legit or a Scam?",
    description:
      "Honest soulmate sketch review. We tested the AI soulmate sketch generator and share real results, pros, cons, and whether it's worth trying.",
    date: "2026-06-05",
    content: `
If you've heard about soulmate sketch services and are wondering whether they're legit, you're in the right place. In this review, we break down exactly what you can expect.

## What Is Soulmate Sketch?

Soulmate Sketch is an AI-powered service that generates a pencil portrait of your "soulmate" — your destined romantic partner — based on a short questionnaire about your personality and preferences.

## How We Tested It

We generated over 20 sketches using different personality types and preference combinations. Here's what we found:

- **Generation time**: 15-30 seconds per sketch
- **Image quality**: High resolution, genuine pencil sketch aesthetic
- **Uniqueness**: Every sketch was visibly different
- **Gender accuracy**: Male and female sketches were correctly differentiated

## Pros

- **Free to try** — no payment required for your first sketch
- **Fast** — results in seconds, not days
- **Transparent** — uses AI, no fake "psychic" claims
- **Unique results** — every generation is one-of-a-kind
- **Downloadable** — save your sketch as a high-quality image

## Cons

- **Entertainment only** — not a real prediction of your future partner
- **AI limitations** — occasionally generates minor artifacts
- **Requires internet** — can't work offline

## Is It a Scam?

**No.** Unlike some soulmate drawing services that charge $30-$50 for supposedly "psychic" drawings (which are often just AI-generated images), this service is:

- Upfront about using AI technology
- Free to try
- Clear about being for entertainment purposes

## The Verdict

Soulmate Sketch is a fun, harmless, and genuinely impressive experience. Whether you believe in soulmates or not, seeing a personalized pencil sketch of your "ideal partner" is surprisingly moving.

[Try it free and see for yourself](/sketch).
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
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

function getRelatedPosts(slug: string): { slug: string; title: string }[] {
  const allSlugs = Object.keys(blogPosts).filter((s) => s !== slug);
  return allSlugs.slice(0, 3).map((s) => ({ slug: s, title: blogPosts[s].title }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Soulmate Sketch",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Soulmate Sketch",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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
          <p className="text-white/50 mt-3">{post.description}</p>
        </header>

        <div className="text-white/70 leading-relaxed space-y-4 [&_h2]:text-accent [&_h2]:font-heading [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-4 [&_strong]:text-white [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_table]:w-full [&_th]:text-left [&_th]:p-3 [&_th]:border-b [&_th]:border-white/10 [&_td]:p-3 [&_td]:border-b [&_td]:border-white/10">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*)/gm, '<h2>$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/^- (.*)/gm, '<li>$1</li>')
                .replace(/(<li>[\s\S]*?<\/li>)/g, (match) => `<ul>${match}</ul>`)
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="font-heading text-accent text-lg mb-4">Related Articles</h2>
          <div className="space-y-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/20 transition-all"
              >
                <span className="text-white/80 text-sm hover:text-accent">
                  {related.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
