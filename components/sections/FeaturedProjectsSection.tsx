import { dubaiFeaturedProjects } from "@/lib/home-data";
import Image from "next/image";
import Link from "next/link";

function CardActions() {
  return (
    <div className="flex shrink-0 items-center gap-3 text-white/90" aria-hidden>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <title>Gallery</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-11.25 3.75 3.75m-9 9 3.75 3.75m-9-9h9m9-9v9m0 9h-9m-9-9v-9"
        />
      </svg>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <title>Favorite</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <title>Compare</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v7.125c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.25v-7.125Zm0-9.75C3 3.504 3.504 3 4.125 3h2.25C7.496 3 8 3.504 8 4.125v15.75c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 19.875V3.375Zm9 0C12 3.504 12.504 3 13.125 3h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V3.375Zm0 9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v7.125c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-7.125Z"
        />
      </svg>
    </div>
  );
}

type Project = (typeof dubaiFeaturedProjects)[number];

function FeaturedProjectCard({
  project,
  layout,
}: {
  project: Project;
  layout: "large" | "compact";
}) {
  const isLarge = layout === "large";

  return (
    <Link
      href={project.href}
      className={`group relative block overflow-hidden rounded-lg border border-white/10 bg-black ${
        isLarge
          ? "min-h-[min(72vh,640px)] lg:col-span-3 lg:row-span-2 lg:min-h-0"
          : "min-h-[280px] lg:col-span-2 lg:min-h-0"
      }`}
    >
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        sizes={
          isLarge
            ? "(max-width: 1024px) 100vw, 60vw"
            : "(max-width: 1024px) 100vw, 38vw"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-95" />
      <span className="absolute right-4 top-4 rounded bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        Buy
      </span>

      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col justify-end ${
          isLarge ? "p-6 sm:p-8" : "p-5 sm:p-6"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h3
              className={`font-light leading-tight text-white ${
                isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/80">{project.location}</p>
            <p className="mt-4 inline-block bg-white px-3 py-2 text-sm font-semibold tracking-tight text-black">
              {project.price}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-3 sm:max-w-[14rem]">
            {project.tagline ? (
              <p className="text-right text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-white/75 sm:text-[11px]">
                {project.tagline}
              </p>
            ) : null}
            <CardActions />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjectsSection() {
  /** Large card + two stacked; data defines three projects with remote images. */
  const featuredProjects = dubaiFeaturedProjects.slice(0, 3);
  const [featured, ...rest] = featuredProjects;

  return (
    <section
      className="bg-black py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="featured-projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="featured-projects-heading"
          className="text-center text-xs font-normal uppercase tracking-[0.35em] text-white sm:text-sm"
        >
          Dubai featured projects
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-5 lg:grid-rows-2 lg:gap-4 lg:[grid-template-rows:minmax(0,1fr)_minmax(0,1fr)]">
          <FeaturedProjectCard project={featured} layout="large" />
          {rest.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} layout="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
