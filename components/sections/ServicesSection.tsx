import { ServiceCard } from "@/components/cards/ServiceCard";
import { serviceHighlights } from "@/lib/home-data";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Services</p>
          <h2
            id="services-heading"
            className="mt-3 text-3xl font-light sm:text-4xl"
          >
            What we deliver together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Whether you are relocating, investing for yield, or preparing a portfolio exit, our
            specialists align strategy, documentation, and introductions—without the noise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((s) => (
            <ServiceCard key={s.href} title={s.title} description={s.description} href={s.href} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
