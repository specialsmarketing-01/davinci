import { SellHubBody } from "@/components/pages/SellHubBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Sell Property in Dubai",
  description:
    "Sell Dubai property with pricing strategy, presentation, and negotiation support—designed to protect value and reduce time on market.",
  path: "/our-properties/sell/",
});

export default function SellPropertiesPage() {
  return <SellHubBody />;
}
