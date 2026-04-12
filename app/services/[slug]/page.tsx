import { getServiceBySlug, services } from "@/lib/services-data";
import { seoKeywords, siteName } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }
  return {
    title: service.title,
    description: service.summary,
    keywords: [...seoKeywords],
    openGraph: {
      title: `${service.title} | ${siteName}`,
      description: service.summary,
      url: `/services/${service.slug}/`,
    },
    alternates: {
      canonical: `/services/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main id="main-content" className="flex-1">
      <header className="border-b border-border bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Service</p>
          <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-semibold sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{service.summary}</p>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted leading-relaxed">
          This overview is designed to help you orient quickly. For a personalised plan—timelines,
          documentation, and introductions—reach out to our consultants and we will respond with clear next
          steps.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            Book a consultation
          </Link>
          <Link
            href="/services/"
            className="inline-flex justify-center rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:bg-zinc-50"
          >
            All services
          </Link>
        </div>
        <p className="mt-10 text-sm text-muted">
          Explore listings on the{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            properties hub
          </Link>{" "}
          or read{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/about-davinci/">
            about Davinci
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
