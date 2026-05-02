import { RentHubBody } from "@/components/pages/RentHubBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Rent Property in Dubai",
  description:
    "Rent Dubai apartments and villas with guided viewings, transparent lease terms, and responsive support through move-in.",
  path: "/rent/",
});

export default function RentHubPage() {
  return <RentHubBody />;
}
