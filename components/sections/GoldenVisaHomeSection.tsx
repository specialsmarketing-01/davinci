"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";

export function GoldenVisaHomeSection() {
  const { site } = useNavLocale();
  const h = site.home;
  const bullets = h.goldenBullets;
  return (
    <section
      className="border-b border-white/10 bg-black py-8 text-white sm:py-10 lg:py-12"
      aria-labelledby="golden-visa-home-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="mx-auto flex w-full max-w-xl justify-center lg:mx-0 lg:max-w-none">
            <Image
              src="/golden-visa-home-promo.png"
              alt="UAE Golden Visa card — 10-year residency, UAE emblem, and Dubai skyline graphic"
              width={1920}
              height={1440}
              className="h-auto w-full max-w-md object-contain lg:max-w-lg"
              sizes="(max-width: 1023px) min(100vw - 2rem, 640px), min(42rem, 50vw)"
              quality={92}
              priority={false}
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{h.goldenKicker}</p>
            <h2
              id="golden-visa-home-heading"
              className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl"
            >
              {h.goldenHeading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {h.goldenIntro}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {bullets.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
