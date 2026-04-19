import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import type { PropertyDetail } from "@/lib/properties-data";
import { getPropertyBySlug } from "@/lib/properties-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function marketingPathFor(slug: string): string | null {
  if (slug === "damac-lagoons") return "/damac-lagoons/";
  if (slug === "v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai") {
    return "/v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai/";
  }
  return null;
}

function RelatedLinks({ slug }: { slug: string }) {
  const catalog = `/properties/${slug}/`;
  const marketing = marketingPathFor(slug);
  return (
    <nav aria-label="Related URLs" className="rounded-2xl border border-border bg-zinc-50 p-6">
      <p className="text-sm font-semibold text-foreground">Explore this listing</p>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        <li>
          <Link className="font-medium text-foreground underline-offset-4 hover:underline" href={catalog}>
            Catalog URL: {catalog}
          </Link>
        </li>
        {marketing && (
          <li>
            <Link className="font-medium text-foreground underline-offset-4 hover:underline" href={marketing}>
              Marketing URL: {marketing}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function PropertyDetailView({
  slug,
  showRelatedUrls = true,
}: {
  slug: string;
  showRelatedUrls?: boolean;
}) {
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <PropertyDetailBody property={property} showRelatedUrls={showRelatedUrls} />
  );
}

export function PropertyDetailBody({
  property,
  showRelatedUrls = true,
}: {
  property: PropertyDetail;
  showRelatedUrls?: boolean;
}) {
  return (
    <>
      <PageHero
        eyebrow="Featured listing"
        title={property.title}
        description={property.summary}
        background={property.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Image gallery
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {property.gallery.map((img, i) => (
            <div key={`${property.slug}-g-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-normal">Overview</h2>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Price</dt>
                <dd className="mt-1 text-lg font-semibold">{property.priceLabel}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Location</dt>
                <dd className="mt-1 text-lg">{property.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Bedrooms</dt>
                <dd className="mt-1 text-lg">{property.beds}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Bathrooms</dt>
                <dd className="mt-1 text-lg">{property.baths}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Size</dt>
                <dd className="mt-1 text-lg">{property.sizeLabel}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Type</dt>
                <dd className="mt-1 text-lg">{property.type}</dd>
              </div>
            </dl>

            <h3 className="mt-12 text-xl font-normal">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {property.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {property.paragraphs.map((p, i) => (
              <p key={i} className="mt-6 text-muted leading-relaxed">
                {p}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link className="font-semibold text-accent underline-offset-4 hover:underline" href="/our-properties/">
                Back to properties hub
              </Link>
              <span className="text-zinc-300">·</span>
              <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
                Explore services
              </Link>
              <span className="text-zinc-300">·</span>
              <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
                Contact the team
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            {showRelatedUrls && <RelatedLinks slug={property.slug} />}
            <div className="rounded-2xl border border-border bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-foreground">Need a second opinion?</p>
              <p className="mt-2 text-sm text-muted">
                Ask for comparables, payment-plan clarity, and a realistic rental or resale outlook—before you
                commit.
              </p>
              <Link
                href="/contact/"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
              >
                Message an advisor
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTA
        title="Book a private walkthrough or video tour"
        description="Share your timeline and financing preference—we will coordinate viewings, developer updates, and a concise offer strategy."
        primaryHref="/contact/"
        primaryLabel="Schedule a viewing"
        secondaryHref="/our-properties/"
        secondaryLabel="More listings"
      />
    </>
  );
}
