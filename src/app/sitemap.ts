import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soulmatesketch.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sketch`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-a-soulmate-sketch`,
      lastModified: new Date("2026-05-20"),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-ai-creates-your-soulmate-drawing`,
      lastModified: new Date("2026-05-15"),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/soulmate-sketch-vs-psychic-drawing`,
      lastModified: new Date("2026-05-10"),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
