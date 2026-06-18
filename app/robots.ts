import type { MetadataRoute } from "next";

const base = "https://davinci-properties.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "Google-Extended", "PerplexityBot", "ClaudeBot", "anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
