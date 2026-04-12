import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { blogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Insights & Market Notes",
  description:
    "Davinci Properties insights—practical notes on Dubai real estate trends, buyer and tenant considerations, and portfolio planning.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Blog"
        title="Insights that respect your time"
        description="We publish concise market notes and checklists—designed to help you ask better questions, not chase hype."
        background={images.hero}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {blogPosts.length === 0 ? (
          <p className="text-muted leading-relaxed">
            New articles are on the way. In the meantime, explore our{" "}
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
              services
            </Link>{" "}
            or{" "}
            <Link
              className="font-semibold text-foreground underline-offset-4 hover:underline"
              href="/contact/"
            >
              contact
            </Link>{" "}
            the team for a tailored briefing.
          </p>
        ) : (
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li key={post.slug} className="rounded-2xl border border-border p-6">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="font-[family-name:var(--font-playfair)] text-xl font-semibold hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-muted">{post.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CTA
        title="Want a private market briefing?"
        description="Tell us what you are evaluating—we will share relevant comparables and a clear next step."
        primaryHref="/contact/"
        primaryLabel="Book a call"
        secondaryHref="/our-properties/"
        secondaryLabel="Explore properties"
      />
    </main>
  );
}
