import { seoKeywords, siteName, siteUrl } from "@/lib/site";
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

const GEO_META = {
  "geo.region": "AE-DU",
  "geo.placename": "Dubai",
  "geo.position": "25.1865;55.2675",
  ICBM: "25.1865, 55.2675",
} as const;

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: SeoImage;
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const ogImage = image
    ? { ...DEFAULT_OG_IMAGE, url: image.src, alt: image.alt }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: [...seoKeywords],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "real estate",
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
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: path,
    },
    other: GEO_META,
  };
}
