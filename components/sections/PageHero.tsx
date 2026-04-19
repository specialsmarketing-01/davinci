import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  background?: { src: string; alt: string; objectPosition?: string };
  /** With `background`, use full viewport height so the image fills the hero (object-cover). */
  fullViewport?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  background,
  fullViewport = false,
  align = "left",
  className,
}: Props) {
  const fullBleed = Boolean(background && fullViewport);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        background && !fullViewport && "min-h-[280px] bg-black sm:min-h-[320px]",
        fullBleed && "flex min-h-[100svh] flex-col bg-black",
        !background && "bg-zinc-50",
        className,
      )}
      aria-labelledby="page-hero-heading"
    >
      {background && (
        <div className="absolute inset-0">
          <Image
            src={background.src}
            alt={background.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            style={
              background.objectPosition ? { objectPosition: background.objectPosition } : undefined
            }
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
        </div>
      )}
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          fullBleed && "flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24",
          !fullBleed && "py-14 sm:py-16",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "text-xs font-medium uppercase tracking-[0.3em]",
              background ? "text-accent" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          id="page-hero-heading"
          className={cn(
            "mt-3 max-w-3xl text-4xl font-light sm:text-5xl",
            background ? "text-white" : "text-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg leading-relaxed",
              background ? "text-zinc-200" : "text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
