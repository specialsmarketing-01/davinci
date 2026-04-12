import { seoKeywords, siteName } from "@/lib/site";
import type { Metadata } from "next";

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    keywords: [...seoKeywords],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
    },
    alternates: {
      canonical: path,
    },
  };
}
