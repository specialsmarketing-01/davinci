import { blogPosts } from "@/lib/blog";
import { propertyDetails } from "@/lib/properties-data";
import { services } from "@/lib/services-data";
import type { MetadataRoute } from "next";

const base = "https://davinci-properties.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/our-properties/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/our-properties/sell/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/our-properties/list-your-property/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/our-properties/international-properties/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/our-properties/rent-2/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/rent/", priority: 0.85, changeFrequency: "weekly" },
    { path: "/binghatti/", priority: 0.75, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about-davinci/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/blog/", priority: 0.6, changeFrequency: "weekly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency,
    priority,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}/`,
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const p of propertyDetails) {
    entries.push({
      url: `${base}/properties/${p.slug}/`,
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
