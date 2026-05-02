"use client";

import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { images } from "@/lib/placeholders";
import Link from "next/link";

export function RentHubBody() {
  const { site } = useNavLocale();
  const r = site.rentPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow={r.eyebrow}
        title={r.title}
        description={r.description}
        background={images.penthouse}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-zinc-50 p-8">
            <h2 className="text-2xl font-normal">{r.tenantTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted">{r.tenantBody}</p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-normal">{r.searchTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted">
              {r.searchLine1Prefix}{" "}
              <Link
                className="font-semibold text-foreground underline-offset-4 hover:underline"
                href="/our-properties/rent-2/"
              >
                {r.curatedDeskLink}
              </Link>
              {r.searchLine1Suffix}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              {r.landlordsPrefix}{" "}
              <Link
                className="font-semibold text-foreground underline-offset-4 hover:underline"
                href="/services/landlord-guide/"
              >
                {r.landlordGuideLink}
              </Link>
              {r.landlordsSuffix}
            </p>
          </article>
        </div>
      </section>

      <CTA
        title={r.ctaTitle}
        description={r.ctaDescription}
        primaryHref="/contact/"
        primaryLabel={r.ctaPrimary}
        secondaryHref="/our-properties/"
        secondaryLabel={r.ctaSecondary}
      />
    </main>
  );
}
