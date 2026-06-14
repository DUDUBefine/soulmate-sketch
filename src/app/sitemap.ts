import type { MetadataRoute } from "next";

const SITE_URL = "https://soulmatesketch.art";

// Keep blog slugs in sync with blog/[slug]/page.tsx
const blogSlugs = [
  { slug: "free-soulmate-sketch-online", date: "2026-06-01" },
  { slug: "soulmate-sketch-review", date: "2026-06-05" },
  { slug: "what-is-a-soulmate-sketch", date: "2026-05-20" },
  { slug: "how-ai-creates-your-soulmate-drawing", date: "2026-05-15" },
  { slug: "soulmate-sketch-vs-psychic-drawing", date: "2026-05-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sketch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, date }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
