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
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-0 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <p
          id="stats-heading"
          className="mb-10 text-center text-[0.8rem] font-medium uppercase tracking-[0.25em] text-accent-on-dark sm:mb-12 sm:text-[0.9rem]"
        >
          {st.atAGlance}
        </p>

        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Crypto */}
          <div className="flex flex-col items-center justify-center gap-5 px-6 py-12 sm:gap-6 sm:py-14 md:px-8 lg:px-10">
            <div className="group relative w-full max-w-[280px] shrink-0 sm:max-w-[300px]">
              <Image
                src="/crypto_set-copy-1.png"
                alt={st.cryptoAlt}
                width={300}
                height={165}
                className="mx-auto h-auto w-full object-contain transition duration-300 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 260px, 300px"
              />
            </div>
            <p className="text-center text-[0.8rem] font-medium uppercase leading-snug tracking-[0.22em] text-accent-on-dark sm:text-[0.9rem]">
              {st.cryptoCaption}
            </p>
          </div>

          {/* Languages */}
          <div className="flex items-center justify-center px-6 py-12 sm:py-14 md:px-8 lg:px-10">
            <StatCounter target={12} prefix="+" label={st.languagesLabel} />
          </div>

          {/* Happy clients */}
          <div className="flex items-center justify-center px-6 py-12 sm:py-14 md:px-8 lg:px-10">
            <StatCounter target={500} suffix="+" label={st.happyClientsLabel} />
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 px-4 py-8 text-center text-sm leading-relaxed text-zinc-500 sm:mt-10 sm:py-10 sm:text-base">
          {st.footerLine}
        </p>
      </div>
    </section>
  );
}
