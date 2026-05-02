import { IntlPropertiesHubBody } from "@/components/pages/IntlPropertiesHubBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "International Properties",
  description:
    "Explore international luxury homes with Davinci Properties—curated global portfolio, expert agents, and seamless support for buyers and sellers.",
  path: "/our-properties/international-properties/",
});

export default function InternationalPropertiesPage() {
  return <IntlPropertiesHubBody />;
}
