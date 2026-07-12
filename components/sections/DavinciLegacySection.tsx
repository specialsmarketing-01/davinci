"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";

export function DavinciLegacySection() {
  const { site } = useNavLocale();
  const l = site.home.legacy;

  return (
    <section
      className="border-b border-border bg-white"
      aria-labelledby="davinci-legacy-heading"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-body text-center font-medium uppercase tracking-[0.45em] text-accent">
          {l.kicker}
        </p>
        <h2
          id="davinci-legacy-heading"
          className="mt-6 text-center text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
        >
          {l.heading}
        </h2>

        <div className="text-body mt-10 space-y-6 text-muted sm:mt-12">
          {l.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 space-y-3 border-t border-border pt-10 sm:mt-12">
          {l.closingLines.map((line, index) => (
            <p
              key={index}
              className="text-body text-center font-light text-foreground"
            >
              {line}
            </p>
          ))}
          <p className="text-body pt-4 text-center font-medium uppercase tracking-[0.2em] text-accent">
            {l.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
