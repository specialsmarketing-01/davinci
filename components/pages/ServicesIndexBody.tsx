"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { serviceCard } from "@/lib/i18n/service-cards";
import { services } from "@/lib/services-data";
import Link from "next/link";

export function ServicesIndexBody() {
  const { locale, site } = useNavLocale();
  const s = site.servicesIndex;

  return (
    <main id="main-content" className="flex-1">
      <header className="border-b border-border bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{s.kicker}</p>
          <h1 className="mt-3 text-4xl font-light sm:text-5xl">{s.heading}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{s.intro}</p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((svc) => {
            const card = serviceCard(locale, svc.slug);
            const title = card?.title ?? svc.title;
            const summary = card?.summary ?? svc.summary;
            return (
              <li key={svc.slug}>
                <article className="h-full rounded-2xl border border-border p-6 transition hover:border-accent/40 hover:shadow-md">
                  <h2 className="text-xl font-normal">
                    <Link href={`/services/${svc.slug}/`} className="hover:underline">
                      {title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
                  <Link
                    href={`/services/${svc.slug}/`}
                    className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                  >
                    {s.readOverview}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-sm text-muted">
          {s.ctaLead}{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
            {s.ctaContact}
          </Link>{" "}
          {s.ctaOr}{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            {s.ctaProps}
          </Link>
          {s.ctaEnd}
        </p>
      </section>
    </main>
  );
}
