import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "International Property Opportunities",
  description:
    "Explore international real estate with coordinated introductions and planning alongside your Dubai strategy—aligned to regulation and liquidity.",
  path: "/our-properties/international-properties/",
});

export default function InternationalPropertiesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Global reach"
        title="Build a portfolio that respects borders—and your calendar"
        description="We help clients sequence decisions across markets without losing momentum on UAE priorities, with introductions to vetted partners where appropriate."
        background={images.hero}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">How we work</h2>
        <p className="mt-4 text-muted leading-relaxed">
          International buying is rarely about a single asset—it is about timing, taxation context, and how
          liquidity moves between jurisdictions. We start with your Dubai plan, then align external options to
          the same risk tolerance and holding period.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          Availability varies by region and season. If you share target markets, we outline practical entry
          points, documentation expectations, and a realistic decision timeline.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link className="font-semibold text-accent underline-offset-4 hover:underline" href="/services/">
            Review services
          </Link>
          <span className="text-zinc-300">·</span>
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
            Book a strategy call
          </Link>
        </div>
      </section>

      <CTA
        title="Discuss a cross-border roadmap"
        description="Tell us what you are optimising for—yield, residency ties, or diversification—and we will propose a sensible sequence of next steps."
        primaryHref="/contact/"
        primaryLabel="Contact the team"
        secondaryHref="/our-properties/"
        secondaryLabel="Back to properties hub"
      />
    </main>
  );
}
