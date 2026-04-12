import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Rent Property in Dubai",
  description:
    "Rent Dubai apartments and villas with guided viewings, transparent lease terms, and responsive support through move-in.",
  path: "/rent/",
});

export default function RentHubPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Rent"
        title="Lease with clarity in competitive neighbourhoods"
        description="From executive apartments to family villas—we prioritise realistic budgets, commute fit, and documentation readiness so your move stays on schedule."
        background={images.penthouse}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-zinc-50 p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Tenant-first process</h2>
            <p className="mt-4 text-muted leading-relaxed">
              We coordinate viewings efficiently, clarify deposits and renewals upfront, and stay available
              through handover—so you can focus on settling in rather than chasing updates.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Need a tighter search?</h2>
            <p className="mt-4 text-muted leading-relaxed">
              If you want a consultant-led shortlist with scheduled viewings, use our{" "}
              <Link
                className="font-semibold text-foreground underline-offset-4 hover:underline"
                href="/our-properties/rent-2/"
              >
                curated rental desk
              </Link>
              .
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Landlords can explore management-oriented guidance via the{" "}
              <Link
                className="font-semibold text-foreground underline-offset-4 hover:underline"
                href="/services/landlord-guide/"
              >
                landlord guide
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <CTA
        title="Tell us your move-in window"
        description="Share budget, communities, and must-haves—we will respond with options and next steps, usually the same day."
        primaryHref="/contact/"
        primaryLabel="Message the leasing team"
        secondaryHref="/our-properties/"
        secondaryLabel="Browse spotlight listings"
      />
    </main>
  );
}
