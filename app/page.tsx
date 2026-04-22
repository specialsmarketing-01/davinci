import { StatsSection } from "@/components/StatsSection";
import { ExclusiveListingsLeadSection } from "@/components/sections/ExclusiveListingsLeadSection";
import { Hero } from "@/components/sections/Hero";
import { JourneyStagePillarsSection } from "@/components/sections/JourneyStagePillarsSection";
import { AboutDavinciSplitSection } from "@/components/sections/AboutDavinciSplitSection";
import { PartnerLogosSection } from "@/components/sections/PartnerLogosSection";
import { GoldenVisaHomeSection } from "@/components/sections/GoldenVisaHomeSection";
import { OfficeMapSection } from "@/components/sections/OfficeMapSection";
import { buildPageMetadata } from "@/lib/seo";
import { siteDescription } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Luxury Dubai Real Estate & Property Advisory",
  description: `${siteDescription} Browse properties, services, and market-ready guidance in Dubai.`,
  path: "/",
  image: {
    src: "/home-hero.png",
    alt: "Luxury property and skyline themes from Davinci Properties Dubai",
  },
});

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <StatsSection />
      <ExclusiveListingsLeadSection />
      <JourneyStagePillarsSection />
      <GoldenVisaHomeSection />
      <PartnerLogosSection />
      <AboutDavinciSplitSection />
      <OfficeMapSection />
    </main>
  );
}
