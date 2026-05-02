import { ListYourPropertyHubBody } from "@/components/pages/ListYourPropertyHubBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "List Your Property | Experienced Agents",
  description:
    "List your property with Davinci Properties—experienced agents, market insights, and marketing tailored to serious buyers and tenants in Dubai.",
  path: "/our-properties/list-your-property/",
});

export default function ListYourPropertyPage() {
  return <ListYourPropertyHubBody />;
}
