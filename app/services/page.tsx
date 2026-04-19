import { services } from "@/lib/services-data";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Real Estate Services in Dubai",
  description:
    "Davinci Properties services—investment consultancy, visas, mortgage advisory, and practical guides for buyers, sellers, tenants, and landlords.",
  path: "/services/",
});

export default function ServicesIndexPage() {
  return (
    <main id="main-content" className="flex-1">
      <header className="border-b border-border bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Services</p>
          <h1 className="mt-3 text-4xl font-light sm:text-5xl">
            Expertise across the full property lifecycle
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Choose a topic to read a concise overview. For tailored advice, start with a short call—we will
            map the right workflow to your goals.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <article className="h-full rounded-2xl border border-border p-6 transition hover:border-accent/40 hover:shadow-md">
                <h2 className="text-xl font-normal">
                  <Link href={`/services/${s.slug}/`} className="hover:underline">
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
                <Link
                  href={`/services/${s.slug}/`}
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                >
                  Read overview
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          Ready to talk?{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
            Contact the team
          </Link>{" "}
          or explore{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
            properties
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
