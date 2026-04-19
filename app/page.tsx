import { StatsSection } from "@/components/StatsSection";
import { ExclusiveListingsLeadSection } from "@/components/sections/ExclusiveListingsLeadSection";
import { Hero } from "@/components/sections/Hero";
import { JourneyStagePillarsSection } from "@/components/sections/JourneyStagePillarsSection";
import { AboutDavinciSplitSection } from "@/components/sections/AboutDavinciSplitSection";
import { PartnerLogosSection } from "@/components/sections/PartnerLogosSection";
import { GoldenVisaHomeSection } from "@/components/sections/GoldenVisaHomeSection";
import { OfficeMapSection } from "@/components/sections/OfficeMapSection";
import { seoKeywords, siteDescription, siteName } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Dubai Real Estate & Property Advisory",
  description: `${siteDescription} Explore ${seoKeywords.join(", ")} with a trusted partner.`,
  keywords: [...seoKeywords],
  openGraph: {
    title: `Luxury Dubai Real Estate & Property Advisory | ${siteName}`,
    description: siteDescription,
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

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
