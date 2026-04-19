import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Sell Property in Dubai",
  description:
    "Sell Dubai property with pricing strategy, presentation, and negotiation support—designed to protect value and reduce time on market.",
  path: "/our-properties/sell/",
});

export default function SellPropertiesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Sell"
        title="Bring your asset to market with confidence"
        description="We help you position your property with credible pricing, targeted marketing, and calm negotiation—so serious buyers recognise value quickly."
        background={images.villa}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-normal">What to expect</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
          <li>Comparable market analysis with transparent assumptions</li>
          <li>Presentation guidance and introductions to trusted staging partners where needed</li>
          <li>Offer review with scenario planning—not pressure</li>
        </ul>
        <p className="mt-8 text-muted">
          Explore complementary guidance via our{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/seller-guide/">
            seller guide
          </Link>{" "}
          or return to the{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            properties hub
          </Link>
          .
        </p>
      </section>

      <CTA
        title="Request a valuation conversation"
        description="Share your unit details and timeline. We will outline a go-to-market plan you can compare—no obligation."
        primaryHref="/contact/"
        primaryLabel="Contact the team"
        secondaryHref="/our-properties/list-your-property/"
        secondaryLabel="List with Davinci"
      />
    </main>
  );
}
