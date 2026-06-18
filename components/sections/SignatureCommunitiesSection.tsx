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
  small: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
  "tall-right": "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px",
};

const layoutClasses: Record<
  (typeof signatureCommunityMedia)[number]["layout"],
  string
> = {
  "tall-left": "min-h-[260px] sm:min-h-[240px] lg:min-h-0 lg:rounded-l-[1.75rem]",
  small: "min-h-[200px] sm:min-h-[190px] lg:min-h-0",
  "tall-right": "min-h-[260px] sm:min-h-[240px] lg:min-h-0 lg:rounded-r-[1.75rem]",
};

export function SignatureCommunitiesSection() {
  const { site } = useNavLocale();
  const h = site.home;
  const items = h.signatureCommunitiesItems;

  return (
    <section
      className="border-b border-border bg-white"
      aria-labelledby="signature-communities-heading"
    >
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="max-w-2xl">
          <h2
            id="signature-communities-heading"
            className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {h.signatureCommunitiesHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {h.signatureCommunitiesBody}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0.5 sm:grid-cols-2 sm:gap-1 lg:mt-16 lg:grid-cols-4 lg:grid-rows-2 lg:gap-1 lg:min-h-[min(68vh,720px)] xl:min-h-[min(72vh,780px)]">
          {items.map((item, index) => {
            const media = signatureCommunityMedia[index];
            if (!media) return null;

            return (
              <Link
                key={item.name}
                href={media.href}
                className={cn(
                  "group relative isolate flex overflow-hidden bg-zinc-900",
                  layoutClasses[media.layout],
                  media.gridClass,
                )}
              >
                <Image
                  src={media.imageSrc}
                  alt={item.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  sizes={imageSizes[media.layout]}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5"
                  aria-hidden
                />
                <div className="relative mt-auto w-full p-5 sm:p-6">
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.name}
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
