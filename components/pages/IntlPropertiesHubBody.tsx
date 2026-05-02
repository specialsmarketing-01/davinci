"use client";

import { InternationalPropertiesLeadForm } from "@/components/contact/InternationalPropertiesLeadForm";
import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { images } from "@/lib/placeholders";

export function IntlPropertiesHubBody() {
  const { site } = useNavLocale();
  const p = site.intlPropertiesPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero title={p.heroTitle} background={images.internationalPropertiesHero} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>{p.intro}</p>
        </div>

        <div className="mt-14 space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-foreground sm:text-xl">
            {p.interestHeading}
          </h2>
          <p className="text-base leading-relaxed text-muted">{p.interestBody}</p>
        </div>

        <div className="mt-10">
          <InternationalPropertiesLeadForm />
        </div>
      </section>
    </main>
  );
}
