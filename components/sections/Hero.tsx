 "use client";

import { images } from "@/lib/placeholders";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setSlowPlayback = () => {
      video.defaultPlaybackRate = 0.55;
      video.playbackRate = 0.55;
    };

    setSlowPlayback();
    video.addEventListener("loadeddata", setSlowPlayback);
    void video.play().catch(() => {
      // Ignore autoplay blocks; muted+playsInline usually allows playback.
    });

    return () => {
      video.removeEventListener("loadeddata", setSlowPlayback);
    };
  }, []);

  return (
    <section
      className="relative isolate min-h-[75svh] overflow-hidden"
      aria-label="Davinci Properties — Dubai real estate"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={images.homeHero.src}
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src="/213422.mp4" type="video/mp4" />
        </video>
        <Image
          src={images.homeHero.src}
          alt={images.homeHero.alt}
          fill
          priority
          className="object-cover opacity-0"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/55"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto flex min-h-[75svh] max-w-7xl items-end px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <h1 className="animate-hero-title max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Real Estate Dubai
        </h1>
      </div>
    </section>
  );
}
