"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { signatureCommunityMedia } from "@/lib/home-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const imageSizes: Record<
  (typeof signatureCommunityMedia)[number]["layout"],
  string
> = {
  "tall-left": "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px",
  small: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 480px",
  "tall-right": "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px",
};

const layoutClasses: Record<
  (typeof signatureCommunityMedia)[number]["layout"],
  string
> = {
  "tall-left":
    "min-h-[280px] sm:min-h-[300px] lg:min-h-0 col-span-2 row-span-2 lg:col-span-1 lg:row-span-2",
  small: "min-h-[220px] sm:min-h-[240px] lg:min-h-0",
  "tall-right":
    "min-h-[280px] sm:min-h-[300px] lg:min-h-0 col-span-2 row-span-2 lg:col-span-1 lg:row-span-2",
};

export function SignatureCommunitiesSection() {
  const { site } = useNavLocale();
  const h = site.home;
  const items = h.signatureCommunitiesItems;

  return (
    <section
      className="border-b border-white/10 bg-black text-white"
      aria-labelledby="signature-communities-heading"
    >
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.8rem] font-medium uppercase tracking-[0.35em] text-accent-on-dark sm:text-[0.9rem]">
            {h.signatureCommunitiesKicker}
          </p>
          <h2
            id="signature-communities-heading"
            className="mt-4 text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            {h.signatureCommunitiesHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {h.signatureCommunitiesBody}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:min-h-[min(68vh,720px)] xl:min-h-[min(72vh,780px)]">
          {items.map((item, index) => {
            const media = signatureCommunityMedia[index];
            if (!media) return null;

            return (
              <Link
                key={item.name}
                href={media.href}
                className={cn(
                  "group relative isolate flex overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:border-accent-on-dark/40",
                  layoutClasses[media.layout],
                  media.gridClass,
                )}
              >
                <Image
                  src={media.imageSrc}
                  alt={item.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  sizes={imageSizes[media.layout]}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition duration-300 group-hover:from-black/90"
                  aria-hidden
                />
                <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-5 sm:p-6">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent-on-dark sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="mt-1 block text-base font-light text-white sm:text-lg">
                      {item.name}
                    </span>
                  </div>
                  <span
                    className="mb-1 shrink-0 text-lg text-accent-on-dark opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
