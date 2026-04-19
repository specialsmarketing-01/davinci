import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Rental Properties — Curated Search",
  description:
    "A focused rental desk for Dubai—prioritising commute, schools, and lease clarity with responsive support through move-in.",
  path: "/our-properties/rent-2/",
});

export default function RentTwoPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Rentals"
        title="A dedicated rental workflow for fast-moving markets"
        description="This route is ideal when you want a consultant-led shortlist, disciplined viewing schedules, and lease terms explained before you sign."
        background={images.apartment}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-normal">What you can expect</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
          <li>Brief capture: budget, move-in date, must-haves, and commute anchors</li>
          <li>Shortlist refresh as inventory changes—without spamming your inbox</li>
          <li>Offer support and handover coordination through keys</li>
        </ul>
        <p className="mt-8 text-muted">
          For a broader rental overview, visit the{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/rent/">
            dedicated rent hub
          </Link>
          .
        </p>
      </section>

      <CTA
        title="Send your rental brief"
        description="We will reply with viable options and honest availability notes—then coordinate viewings around your schedule."
        primaryHref="/contact/"
        primaryLabel="Start your search"
        secondaryHref="/rent/"
        secondaryLabel="Open rent hub"
      />
    </main>
  );
}
