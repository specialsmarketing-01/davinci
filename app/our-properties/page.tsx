import { OurPropertiesHubBody } from "@/components/pages/OurPropertiesHubBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Dubai Properties for Sale & Lease",
  description:
    "Browse curated Dubai properties—villas, apartments, and branded residences—with advisory support from shortlist to transfer.",
  path: "/our-properties/",
});

export default function OurPropertiesPage() {
  return <OurPropertiesHubBody />;
}
