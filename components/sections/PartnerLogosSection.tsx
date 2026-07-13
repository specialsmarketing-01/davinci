"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { partnerLogos } from "@/lib/home-data";
import Image from "next/image";

export function PartnerLogosSection() {
  const { site } = useNavLocale();
  return (
    <section
      className="border-t border-border bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="text-center text-[2.0625rem] font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {site.home.partnersHeading}
        </h2>
        <div className="mx-auto mt-8 h-px max-w-md bg-border sm:max-w-lg" aria-hidden />

        <div className="relative mt-12 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
            aria-hidden
          />

          <div className="flex w-max animate-partner-marquee items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-x-4 sm:gap-x-12 md:gap-x-14"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {partnerLogos.map((partner) => (
                  <div
                    key={`${copy}-${partner.name}`}
                    className="relative h-[3.634rem] w-[34.2vw] max-w-[8.73rem] shrink-0 sm:h-[4.025rem] sm:w-[11.5rem] sm:max-w-none md:h-[4.6rem] md:w-[12.65rem]"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 33vw, 221px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
