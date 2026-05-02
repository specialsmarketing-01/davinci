"use client";

import { StatCounter } from "@/components/StatCounter";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";

/** Full-width trust strip below hero — readable spacing, no image overlays */
export function StatsSection() {
  const { site } = useNavLocale();
  const st = site.stats;

  return (
    <section
      className="w-full overflow-x-hidden bg-black text-white"
      aria-labelledby="stats-heading"
    >
      <div className="px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <p
          id="stats-heading"
          className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-accent-on-dark md:mb-8 md:text-xs"
        >
          {st.atAGlance}
        </p>

        <div className="grid w-full grid-cols-1 items-stretch gap-0 md:min-h-[260px] md:grid-cols-[minmax(0,1.22fr)_minmax(0,0.56fr)_minmax(0,1.22fr)] lg:min-h-[280px]">
          {/* Crypto — wider column */}
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-10 sm:px-5 md:py-12 md:pl-5 md:pr-4 lg:pl-6 lg:pr-5">
            <div className="group relative max-w-[240px] shrink-0">
              <Image
                src="/crypto_set-copy-1.png"
                alt={st.cryptoAlt}
                width={240}
                height={132}
                className="h-auto w-full object-contain transition duration-300 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 216px, 240px"
              />
            </div>
            <p className="max-w-[16rem] text-center text-[13px] font-medium uppercase leading-snug tracking-[0.22em] text-accent-on-dark sm:text-[14px]">
              {st.cryptoCaption}
            </p>
          </div>

          {/* Languages — narrow column; minimal horizontal padding */}
          <div className="flex items-center justify-center px-3 py-10 md:px-2 md:py-12 lg:px-3">
            <StatCounter target={12} prefix="+" label={st.languagesLabel} />
          </div>

          {/* Photo + happy clients — wider column */}
          <div className="flex min-h-[220px] w-full min-w-0 flex-col sm:min-h-[240px] md:min-h-0 md:flex-row">
            <div className="group relative min-h-[200px] w-full min-w-0 flex-1 md:min-h-full">
              <Image
                src="/aweb.jpg"
                alt={st.residentialAlt}
                fill
                sizes="(max-width: 767px) 100vw, 38vw"
                className="rounded-none object-cover object-center transition duration-300 ease-out group-hover:scale-[1.01]"
              />
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-center justify-center gap-1 bg-[#020101f0] px-5 py-8 md:w-auto md:min-w-[9rem] md:px-4 md:py-10 lg:min-w-[10rem] lg:px-5">
              <StatCounter target={500} suffix="+" label={st.happyClientsLabel} align="center" />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500 md:mt-8">
          {st.footerLine}
        </p>
      </div>
    </section>
  );
}
