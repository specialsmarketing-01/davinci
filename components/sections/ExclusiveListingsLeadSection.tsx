"use client";

import { GetInTouchLeadForm } from "@/components/sections/GetInTouchLeadForm";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import Link from "next/link";

export function ExclusiveListingsLeadSection() {
  const { site } = useNavLocale();
  const h = site.home;

  return (
    <section
      className="border-b border-border bg-white"
      aria-labelledby="exclusive-lead-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-center text-xs font-medium uppercase tracking-[0.45em] text-accent sm:text-sm">
          {h.exclusiveKicker}
        </p>

        <div className="mt-12 grid items-start gap-14 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto max-w-xl text-center">
            <h2
              id="exclusive-lead-heading"
              className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              {h.exclusiveHeading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {h.exclusiveBody}
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/our-properties/"
                className="inline-flex min-w-[12rem] items-center justify-center bg-foreground px-10 py-3.5 text-sm font-semibold text-accent transition hover:bg-foreground/90"
              >
                {h.exclusiveCta}
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <GetInTouchLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
