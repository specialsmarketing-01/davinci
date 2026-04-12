import { images } from "@/lib/placeholders";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>
      <div className="relative mx-auto flex min-h-[min(88vh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Dubai luxury real estate
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Elevate how you buy, sell, and lease property in Dubai
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Curated listings, disciplined negotiation, and end-to-end coordination—so your next move
            feels confident from the first conversation to key handover.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/our-properties/"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-black/20 transition hover:brightness-110"
            >
              Explore properties
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Book a consultation
            </Link>
          </div>
        </div>
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 animate-fade-up animate-delay-200">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Languages
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-playfair)] text-2xl text-white">12+</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Happy clients
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-playfair)] text-2xl text-white">2.5k+</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Avg. response
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-playfair)] text-2xl text-white">&lt; 2h</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Crypto-ready
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-playfair)] text-2xl text-white">Yes</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
