import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "About Davinci Properties",
  description:
    "Discover Davinci Properties—our Dubai real estate philosophy, how we work with clients, and what you can expect from end to end.",
  path: "/about-davinci/",
});

export default function AboutDavinciPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="About"
        title="A brokerage built for clarity in fast markets"
        description="Davinci Properties is a UAE-focused advisory helping clients buy, sell, and lease with disciplined process, transparent communication, and introductions you can trust."
        background={images.lifestyle}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl">
            <Image
              src={images.lifestyle.src}
              alt={images.lifestyle.alt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">What we believe</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Property decisions are emotional and financial at the same time. We protect both: clear numbers,
              candid trade-offs, and a calm cadence—so you never feel rushed into a signature you do not
              understand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our consultants combine community-level knowledge with transaction experience across off-plan
              launches, resale, and high-end leasing—always aligned to your brief, not ours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link
                className="font-semibold text-accent underline-offset-4 hover:underline"
                href="/about-davinci/careers/"
              >
                Careers
              </Link>
              <span className="text-zinc-300">·</span>
              <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
                Services
              </Link>
              <span className="text-zinc-300">·</span>
              <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready for a conversation without pressure?"
        description="Tell us what you are trying to solve—timeline, budget, and constraints—and we will propose a practical next step."
        primaryHref="/contact/"
        primaryLabel="Speak with us"
        secondaryHref="/our-properties/"
        secondaryLabel="View properties hub"
      />
    </main>
  );
}
