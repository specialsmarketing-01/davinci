"use client";

import { GetInTouchLeadForm } from "@/components/sections/GetInTouchLeadForm";
import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { images } from "@/lib/placeholders";
import Link from "next/link";

export function OurPropertiesHubBody() {
  const { site } = useNavLocale();
  const p = site.ourPropertiesHub;

  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow={p.heroEyebrow}
        title={p.heroTitle}
        description={p.heroDescription}
        background={images.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="hub-heading">
        <h2 id="hub-heading" className="sr-only">
          {p.srOnlyHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/our-properties/sell/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">{p.cardSellTitle}</p>
            <p className="mt-2 text-sm text-muted">{p.cardSellBody}</p>
          </Link>
          <Link
            href="/rent/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">{p.cardRentTitle}</p>
            <p className="mt-2 text-sm text-muted">{p.cardRentBody}</p>
          </Link>
          <Link
            href="/our-properties/international-properties/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">{p.cardIntlTitle}</p>
            <p className="mt-2 text-sm text-muted">{p.cardIntlBody}</p>
          </Link>
          <Link
            href="/our-properties/list-your-property/"
            className="rounded-2xl border border-border bg-zinc-50 p-5 transition hover:border-accent/40 hover:shadow-md"
          >
            <p className="text-sm font-medium text-foreground">{p.cardListTitle}</p>
            <p className="mt-2 text-sm text-muted">{p.cardListBody}</p>
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-zinc-50 py-16 sm:py-20" aria-labelledby="lead-form-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{p.leadKicker}</p>
            <h2 id="lead-form-heading" className="mt-3 text-3xl font-light sm:text-4xl">
              {p.leadHeading}
            </h2>
            <p className="mt-4 text-muted">{p.leadDescription}</p>
            <div className="mt-8">
              <GetInTouchLeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
