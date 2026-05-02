"use client";

import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { serviceCard } from "@/lib/i18n/service-cards";
import type { ServiceEntry } from "@/lib/services-data";
import Link from "next/link";

export function ServiceGenericExperience({ service }: { service: ServiceEntry }) {
  const { locale, site } = useNavLocale();
  const card = serviceCard(locale, service.slug);
  const title = card?.title ?? service.title;
  const summary = card?.summary ?? service.summary;

  return (
    <main id="main-content" className="flex-1">
      <header className="border-b border-border bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{site.serviceGeneric.kicker}</p>
          <h1 className="mt-3 text-4xl font-light sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{summary}</p>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="leading-relaxed text-muted">{site.serviceGeneric.body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            {site.serviceGeneric.primaryCta}
          </Link>
          <Link
            href="/services/"
            className="inline-flex justify-center rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:bg-zinc-50"
          >
            {site.serviceGeneric.secondaryCta}
          </Link>
        </div>
        <p className="mt-10 text-sm text-muted">
          {site.serviceGeneric.footerBeforeHub}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            {site.serviceGeneric.footerHub}
          </Link>
          {site.serviceGeneric.footerMiddle}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/about-davinci/">
            {site.serviceGeneric.footerAbout}
          </Link>
          {site.serviceGeneric.footerAfter}
        </p>
      </article>
    </main>
  );
}
