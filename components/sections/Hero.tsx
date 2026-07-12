"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { useEffect, useRef } from "react";

export function Hero() {
  const { site } = useNavLocale();
  const h = site.home;
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
      className="relative isolate -mt-16 min-h-[75svh] overflow-hidden pointer-events-none"
      aria-label={h.heroVideoAria}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src="/213422.mp4" type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/55"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25"
          aria-hidden
        />
      </div>
      <div className="relative z-10 flex min-h-[75svh] flex-col justify-end px-4 pb-10 pt-16 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <p className="text-body mx-auto max-w-3xl text-center font-light text-white">
          {h.heroTagline}
        </p>
      </div>
      <h1 className="sr-only">{h.heroSrOnly}</h1>
    </section>
  );
}
