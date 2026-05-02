"use client";

import { ListYourPropertyForm } from "@/components/contact/ListYourPropertyForm";
import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { images } from "@/lib/placeholders";

export function ListYourPropertyHubBody() {
  const { site } = useNavLocale();
  const p = site.listYourPropertyPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero title={p.heroTitle} background={images.listYourPropertyHero} fullViewport />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-foreground">{p.p1Bold}</strong>
            {p.p1Rest}
          </p>
          <p>{p.p2}</p>
          <p>{p.p3}</p>
        </div>

        <h2 className="mt-14 text-lg font-semibold uppercase tracking-[0.14em] text-foreground sm:text-xl">
          {p.howHeading}
        </h2>

        <div className="mt-8">
          <ListYourPropertyForm />
        </div>
      </section>
    </main>
  );
}
