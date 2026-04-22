import { GetInTouchLeadForm } from "@/components/sections/GetInTouchLeadForm";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Dubai Properties for Sale & Lease",
  description:
    "Browse curated Dubai properties—villas, apartments, and branded residences—with advisory support from shortlist to transfer.",
  path: "/our-properties/",
});

export default function OurPropertiesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Our properties"
        title="Find a home that matches your rhythm"
        description="Use this hub to explore active highlights and jump into specialist journeys—selling, leasing, international diversification, or listing with us."
        background={images.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="hub-heading">
        <h2 id="hub-heading" className="sr-only">
          Property journeys
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/our-properties/sell/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">Sell</p>
            <p className="mt-2 text-sm text-muted">Pricing, presentation, and negotiation support.</p>
          </Link>
          <Link
            href="/rent/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">Rent</p>
            <p className="mt-2 text-sm text-muted">Tenant-first search with lease clarity upfront.</p>
          </Link>
          <Link
            href="/our-properties/international-properties/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">International</p>
            <p className="mt-2 text-sm text-muted">Plan diversification beyond the UAE with structure.</p>
          </Link>
          <Link
            href="/our-properties/list-your-property/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">List</p>
            <p className="mt-2 text-sm text-muted">Marketing reach with transparent reporting.</p>
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-zinc-50 py-16 sm:py-20" aria-labelledby="lead-form-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Enquiry</p>
            <h2 id="lead-form-heading" className="mt-3 text-3xl font-light sm:text-4xl">
              Share your property brief
            </h2>
            <p className="mt-4 text-muted">
              Tell us your budget, preferred communities, and timeline. We will send tailored options
              and next steps.
            </p>
            <div className="mt-8">
              <GetInTouchLeadForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
