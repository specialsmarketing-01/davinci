import { StatsSection } from "@/components/StatsSection";
import { CTA } from "@/components/sections/CTA";
import { ExclusiveListingsLeadSection } from "@/components/sections/ExclusiveListingsLeadSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsStrip } from "@/components/sections/ProjectsStrip";
import { JourneyStagePillarsSection } from "@/components/sections/JourneyStagePillarsSection";
import { AboutDavinciSplitSection } from "@/components/sections/AboutDavinciSplitSection";
import { PartnerLogosSection } from "@/components/sections/PartnerLogosSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
      <ServicesSection />
      <ProjectsStrip />
      <PartnerLogosSection />
      <AboutDavinciSplitSection />
      <CTA
        title="Ready to move with clarity?"
        description="Share your goals—purchase, lease, or portfolio planning—and we will assemble a concise roadmap with timelines, milestones, and next actions."
        primaryHref="/contact/"
        primaryLabel="Schedule a call"
        secondaryHref="/our-properties/"
        secondaryLabel="Browse listings"
      />
    </main>
  );
}
