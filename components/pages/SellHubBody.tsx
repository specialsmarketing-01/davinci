"use client";

import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { SellPropertyLeadSection } from "@/components/sections/SellPropertyLeadSection";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { images } from "@/lib/placeholders";
import Link from "next/link";

export function SellHubBody() {
  const { site } = useNavLocale();
  const s = site.sellPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        description={s.description}
        background={images.sellPropertyHero}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-normal">{s.expectHeading}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
          {s.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-muted">
          {s.footerExplore}{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/seller-guide/">
            {s.footerSellerGuide}
          </Link>{" "}
          {s.footerOrReturn}{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            {s.footerHub}
          </Link>
          .
        </p>
      </section>

      <SellPropertyLeadSection />

      <CTA
        title={s.ctaTitle}
        description={s.ctaDescription}
        primaryHref="/contact/"
        primaryLabel={s.ctaPrimary}
        secondaryHref="/our-properties/list-your-property/"
        secondaryLabel={s.ctaSecondary}
      />
    </main>
  );
}
