"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function SellRentPropertySplitSection() {
  const { site } = useNavLocale();
  const cards = site.home.sellRentCards;

  return (
    <section
      className="w-full overflow-x-hidden border-b border-white/10 bg-black text-white"
      aria-label={site.home.sellRentAria}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group relative flex min-h-[260px] overflow-hidden bg-black sm:min-h-[280px] lg:min-h-[300px] ${
              index === 0 ? "md:border-r md:border-white/10" : ""
            }`}
          >
            <div className="relative z-10 flex flex-1 items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <h2 className="max-w-[10rem] text-xl font-light leading-snug tracking-tight text-white sm:max-w-none sm:text-3xl lg:text-4xl">
                {card.title}
              </h2>
            </div>

            <div className="absolute inset-y-0 right-0 w-[72%] sm:w-[65%] lg:w-[65%]">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className={cn(
                  "object-cover transition duration-500 ease-out group-hover:scale-[1.03]",
                  index === 0
                    ? "object-[88%_center] sm:object-[82%_center] lg:object-[78%_center]"
                    : "object-right lg:object-center",
                )}
                sizes="(max-width: 767px) 72vw, 32vw"
                unoptimized
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent sm:via-black/55"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
