import { getPropertyBySlug } from "@/lib/properties-data";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function buildPropertyMetadata(slug: string, canonicalPath: string): Metadata {
  const p = getPropertyBySlug(slug);
  if (!p) {
    return {};
  }
  return buildPageMetadata({
    title: p.title,
    description: p.summary,
    path: canonicalPath,
    image: p.hero,
  });
}
