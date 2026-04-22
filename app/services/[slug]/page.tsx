import { getServiceBySlug, services } from "@/lib/services-data";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";
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
  const title = service.metaTitle ?? service.title;
  const description = service.metaDescription ?? service.summary;
  return buildPageMetadata({
    title,
    description,
    path: `/services/${service.slug}/`,
    image: service.legacyContent?.heroBackground,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  if (service.legacyContent) {
    const L = service.legacyContent;
    return (
      <main id="main-content" className="flex-1">
        {L.heroBackground ? (
          <PageHero title={L.pageH1} background={L.heroBackground} />
        ) : (
          <header className="border-b border-border bg-zinc-50">
            <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <h1 className="text-3xl font-light uppercase tracking-[0.12em] text-foreground sm:text-4xl md:text-5xl">
                {L.pageH1}
              </h1>
            </div>
          </header>
        )}
        <article className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[40rem] text-center text-pretty">
            {L.sections.map((sec, i) => (
              <section key={i} className={i > 0 ? "mt-16 sm:mt-20" : ""}>
                <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
                  {sec.h2}
                </h2>
                <div
                  role="presentation"
                  className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
                  aria-hidden
                />
                {sec.paragraphs?.length ? (
                  <div className="mx-auto mt-8 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
                    {sec.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className={
                          j === 0 && p.length < 140
                            ? "text-lg font-medium leading-snug text-foreground"
                            : undefined
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}
                {sec.bullets?.length ? (
                  <ul className="mx-auto mt-6 max-w-[34rem] list-disc space-y-3 pl-6 text-left text-sm leading-[1.65] text-muted marker:text-foreground/35 sm:mt-8 sm:text-base sm:leading-[1.7]">
                    {sec.bullets.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <div className="mx-auto mt-16 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:mt-20 sm:text-base sm:leading-[1.7]">
              {L.closingParagraphs.map((p, i) => (
                <p key={`closing-${i}`}>{p}</p>
              ))}
              {L.contactLine ? (
                <p>
                  Contact us on Tel:{" "}
                  <a
                    className="font-medium text-foreground underline-offset-2 hover:underline"
                    href={contact.phoneHref}
                  >
                    {contact.phone}
                  </a>{" "}
                  or email {L.contactEmailPhrase === "us at" ? "us at" : "as at"}:{" "}
                  <a
                    className="font-medium text-foreground underline-offset-2 hover:underline"
                    href={contact.emailHref}
                  >
                    {contact.email}
                  </a>
                </p>
              ) : null}
              {L.footerLines.map((p, i) => (
                <p key={`foot-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main id="main-content" className="flex-1">
      <header className="border-b border-border bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Service</p>
          <h1 className="mt-3 text-4xl font-light sm:text-5xl">{service.title}</h1>
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
