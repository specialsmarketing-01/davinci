import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers at Davinci Properties",
  description:
    "Build a career in Dubai real estate with mentorship, modern tools, and a culture that rewards integrity and client outcomes.",
  path: "/about-davinci/careers/",
});

export default function CareersPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Careers"
        title="Grow with a team that respects craft"
        description="We hire curious advisors and operators who care about client outcomes. If you value mentorship, clean process, and long-term relationships, we would love to hear from you."
        background={images.hero}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Open conversations</h2>
        <p className="mt-4 text-muted leading-relaxed">
          We are always interested in meeting senior leasing consultants, investment specialists, and
          operations talent. Send a short introduction and your portfolio of work—our talent team replies
          within a few business days.
        </p>
        <p className="mt-6 text-muted leading-relaxed">
          Explore how we help clients across{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
            services
          </Link>{" "}
          and{" "}
          <Link
            className="font-semibold text-foreground underline-offset-4 hover:underline"
            href="/our-properties/"
          >
            property journeys
          </Link>
          .
        </p>
        <Link
          href="/contact/"
          className="mt-10 inline-flex rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
        >
          Express interest
        </Link>
      </section>

      <CTA
        title="Want to learn how we work before you apply?"
        description="Book a short call—we will share team structure, expectations, and the type of client work you can expect."
        primaryHref="/contact/"
        primaryLabel="Contact talent"
        secondaryHref="/about-davinci/"
        secondaryLabel="About Davinci"
      />
    </main>
  );
}
