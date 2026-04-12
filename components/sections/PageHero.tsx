import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  background?: { src: string; alt: string };
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  background,
  align = "left",
  className,
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        background ? "min-h-[280px] bg-zinc-950 sm:min-h-[320px]" : "bg-zinc-50",
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
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
        </div>
      )}
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.3em]",
              background ? "text-accent" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          id="page-hero-heading"
          className={cn(
            "mt-3 max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl",
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
