"use client";

import { partnerLogos } from "@/lib/home-data";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function PartnerLogosSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
    setMaxOffset(max);
    setOffset((o) => Math.min(Math.max(0, o), max));
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 500);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, [measure]);

  const step = useCallback(() => {
    const w = viewportRef.current?.clientWidth ?? 320;
    return Math.max(240, Math.round(w * 0.75));
  }, []);

  function goNext() {
    setOffset((o) => Math.min(maxOffset, o + step()));
  }

  function goPrev() {
    setOffset((o) => Math.max(0, o - step()));
  }

  const showArrows = maxOffset > 4;
  const showPrev = showArrows && offset > 2;
  const showNext = showArrows && offset < maxOffset - 2;

  return (
    <section
      className="border-t border-border bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="text-center text-2xl font-light tracking-tight text-foreground sm:text-3xl lg:text-4xl"
        >
          Partners
        </h2>
        <div className="mx-auto mt-8 h-px max-w-md bg-border sm:max-w-lg" aria-hidden />

        <div className="relative mt-12">
          {showPrev ? (
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent sm:w-20"
              aria-hidden
            />
          ) : null}
          {showNext ? (
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent sm:w-20"
              aria-hidden
            />
          ) : null}

          {showPrev ? (
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-foreground/35 transition hover:bg-zinc-100 hover:text-foreground"
              aria-label="Previous partners"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          ) : null}
          {showNext ? (
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-foreground/35 transition hover:bg-zinc-100 hover:text-foreground"
              aria-label="Next partners"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          ) : null}

          <div ref={viewportRef} className="overflow-hidden">
            <ul
              ref={trackRef}
              className={`flex w-max flex-nowrap items-center gap-x-10 transition-transform duration-500 ease-out sm:gap-x-14 ${
                showArrows ? "" : "mx-auto"
              }`}
              style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
            >
              {partnerLogos.map((partner) => (
                <li key={partner.name} className="flex shrink-0 justify-center">
                  <div className="relative h-11 w-[7.5rem] sm:h-12 sm:w-32 md:h-14 md:w-36">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 120px, 144px"
                      onLoad={measure}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
