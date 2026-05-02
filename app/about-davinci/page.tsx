import { AboutDavinciBody } from "@/components/pages/AboutDavinciBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "DaVinci Properties Dubai Real Estate | About Company Overview",
  description:
    "About Davinci Properties—Dubai residential and commercial brokerage, experienced agents, tailored service, and support across buy, sell, lease, and management.",
  path: "/about-davinci/",
});

export default function AboutDavinciPage() {
  return <AboutDavinciBody />;
}
