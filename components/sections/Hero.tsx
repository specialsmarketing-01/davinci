import { images } from "@/lib/placeholders";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative isolate -mt-16 min-h-svh overflow-hidden"
      aria-label="Davinci Properties — Dubai real estate"
    >
      <div className="absolute inset-0">
        <Image
          src={images.homeHero.src}
          alt={images.homeHero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/[0.18]"
          aria-hidden
        />
      </div>
      <h1 className="sr-only">Davinci Properties — luxury Dubai real estate</h1>
    </section>
  );
}
