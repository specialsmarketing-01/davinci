import { blogPosts } from "@/lib/blog";
import { propertyDetails } from "@/lib/properties-data";
import { services } from "@/lib/services-data";
import type { MetadataRoute } from "next";

const base = "https://davinci-properties.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/our-properties/",
    "/our-properties/sell/",
    "/our-properties/list-your-property/",
    "/our-properties/international-properties/",
    "/our-properties/rent-2/",
    "/rent/",
    "/damac-lagoons/",
    "/v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai/",
    "/services/",
    "/about-davinci/",
    "/about-davinci/careers/",
    "/contact/",
    "/privacy-policy/",
    "/terms-and-conditions/",
    "/blog/",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const p of propertyDetails) {
    entries.push({
      url: `${base}/properties/${p.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
