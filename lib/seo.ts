import { seoKeywords, siteName } from "@/lib/site";
import type { Metadata } from "next";

type SeoImage = {
  src: string;
  alt: string;
};

const DEFAULT_OG_IMAGE = {
  url: "/home-hero.png",
  width: 1200,
  height: 630,
  alt: "Davinci Properties Dubai real estate",
} as const;

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: SeoImage;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const ogImage = image
    ? { ...DEFAULT_OG_IMAGE, url: image.src, alt: image.alt }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: [...seoKeywords],
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: path,
    },
  };
}
