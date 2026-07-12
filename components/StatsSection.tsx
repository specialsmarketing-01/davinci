"use client";

import { StatCounter } from "@/components/StatCounter";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";

/** Full-width trust strip — crypto, languages, happy clients */
export function StatsSection() {
  const { site } = useNavLocale();
  const st = site.stats;

  return (
    <section
      className="w-full overflow-x-hidden bg-black text-white"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-0 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <p
          id="stats-heading"
          className="text-body mb-6 text-center font-medium uppercase tracking-[0.25em] text-accent-on-dark sm:mb-12"
        >
          {st.atAGlance}
        </p>

        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Crypto */}
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-7 sm:gap-6 sm:py-14 md:px-8 lg:px-10">
            <div className="group relative w-full max-w-[224px] shrink-0 sm:max-w-[240px]">
              <Image
                src="/crypto_set-copy-1.png"
                alt={st.cryptoAlt}
                width={300}
                height={165}
                className="mx-auto h-auto w-full object-contain transition duration-300 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 260px, 300px"
              />
            </div>
            <p className="text-body text-center font-medium uppercase leading-snug tracking-[0.22em] text-accent-on-dark">
              {st.cryptoCaption}
            </p>
          </div>

          {/* Languages */}
          <div className="flex items-center justify-center px-6 py-7 sm:py-14 md:px-8 lg:px-10">
            <StatCounter target={12} prefix="+" label={st.languagesLabel} />
          </div>

          {/* Happy clients */}
          <div className="flex items-center justify-center px-6 py-7 sm:py-14 md:px-8 lg:px-10">
            <StatCounter target={500} suffix="+" label={st.happyClientsLabel} />
          </div>
        </div>

        <p className="text-body mt-4 border-t border-white/10 px-4 py-5 text-center text-zinc-500 sm:mt-10 sm:py-10">
          {st.footerLine}
        </p>
      </div>
    </section>
  );
}
