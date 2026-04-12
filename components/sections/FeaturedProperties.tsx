import { PropertyCard } from "@/components/cards/PropertyCard";
import { featuredProperties } from "@/lib/home-data";
import Link from "next/link";

export function FeaturedProperties() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-24" aria-labelledby="featured-properties-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Luxury</p>
            <h2
              id="featured-properties-heading"
              className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold sm:text-4xl"
            >
              Exclusive property listings
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Explore hand-picked residences across Dubai—from golf villas and waterfront homes to
              branded towers with hotel-level service. Every listing is supported by transparent
              pricing context and a clear path to offer.
            </p>
          </div>
          <Link
            href="/our-properties/"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-white px-6 py-2.5 text-sm font-semibold transition hover:border-foreground/30"
          >
            View exclusives
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
