import { projectSpotlights } from "@/lib/home-data";
import { images } from "@/lib/placeholders";
import Image from "next/image";
import Link from "next/link";

export function ProjectsStrip() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20" aria-labelledby="projects-heading">
      <div className="absolute inset-0">
        <Image
          src={images.waterfront.src}
          alt={images.waterfront.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Projects</p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-light text-white sm:text-4xl"
          >
            Discover the latest developments shaping Dubai
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            From beachfront masterplans to skyline-defining towers—preview communities where
            lifestyle, connectivity, and long-term value align.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {projectSpotlights.map((name) => (
            <li key={name}>
              <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur">
                {name}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/our-properties/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
          >
            Browse new launches
          </Link>
        </div>
      </div>
    </section>
  );
}
