"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";

export function AboutDavinciSplitSection() {
  const { site } = useNavLocale();
  const h = site.home;

  return (
    <section
      className="relative z-[1] bg-[#020101f0] py-20 text-white sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="about-davinci-split-heading"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        <div className="mx-auto w-full max-w-[72rem] rounded-sm lg:max-w-[80rem] shadow-[0_28px_56px_-8px_rgba(0,0,0,0.55),0_12px_28px_-6px_rgba(0,0,0,0.35)]">
          <div className="overflow-hidden rounded-sm bg-[#020101f0] px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
              <h2
                id="about-davinci-split-heading"
                className="text-[1.65rem] font-light leading-snug tracking-tight text-white sm:text-[1.65rem] md:text-3xl"
              >
                {h.aboutHeading}
              </h2>
              <div className="text-body mt-4 max-w-full space-y-4 text-zinc-400 sm:mt-5">
                {h.aboutBody.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
