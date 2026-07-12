"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";

export function GoldenVisaHomeSection() {
  const { site } = useNavLocale();
  const h = site.home;
  const bullets = h.goldenBullets;
  return (
    <section
      className="border-b border-white/10 bg-black pb-8 pt-4 text-white sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-6"
      aria-labelledby="golden-visa-home-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="mx-auto flex w-full max-w-xl justify-center lg:max-w-none">
            <Image
              src="/golden-visa-home-promo.png"
              alt="UAE passport and Golden Visa brochure with 10-year residency card and Dubai skyline"
              width={1024}
              height={677}
              className="mx-auto h-auto w-full max-w-md object-contain lg:max-w-lg"
              sizes="(max-width: 1023px) min(100vw - 2rem, 640px), min(42rem, 50vw)"
              unoptimized
              priority={false}
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{h.goldenKicker}</p>
            <h2
              id="golden-visa-home-heading"
              className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl"
            >
              {h.goldenHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0">
              {h.goldenIntro}
            </p>
            <ul className="mx-auto mt-6 max-w-xl space-y-2.5 text-left text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
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
