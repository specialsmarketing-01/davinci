import type { PropertyCardData } from "@/lib/property-card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  property: PropertyCardData;
};

export function PropertyCard({ property }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={property.href} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image.src}
          alt={property.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground">
          {property.type}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold leading-snug text-foreground">
          <Link href={property.href} className="hover:underline">
            {property.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{property.location}</p>
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
          <div>
            <dt className="sr-only">Bedrooms</dt>
            <dd>{property.beds} beds</dd>
          </div>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="font-semibold text-foreground">{property.priceLabel}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <Link
            href={property.href}
            className="inline-flex items-center text-sm font-semibold text-accent transition hover:underline"
          >
            View details
            <span aria-hidden className="ml-1 transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
