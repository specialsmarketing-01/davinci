import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CTA({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-black text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          ) : null}
          <h2 className={eyebrow ? "mt-4 text-3xl font-light sm:text-4xl" : "text-3xl font-light sm:text-4xl"}>
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
            >
              {primaryLabel}
            </CtaLink>
            {secondaryHref && secondaryLabel && (
              <CtaLink
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </CtaLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
