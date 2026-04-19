import { ContactForm } from "@/components/contact/ContactForm";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "List Your Property in Dubai",
  description:
    "List your Dubai property with Davinci Properties—qualified viewings, channel strategy, and weekly performance visibility.",
  path: "/our-properties/list-your-property/",
});

export default function ListYourPropertyPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="List with us"
        title="Put your property in front of serious buyers and tenants"
        description="We combine disciplined pricing, polished presentation, and responsive follow-up—so enquiries convert into qualified viewings."
        background={images.villa}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-normal">What we optimise</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
              <li>Comparable-driven pricing with candid trade-offs—not inflated promises</li>
              <li>Media coordination and channel selection aligned to your timeline</li>
              <li>Weekly reporting on engagement, feedback, and next actions</li>
            </ul>
            <p className="mt-8 text-sm text-muted">
              Prefer to speak first?{" "}
              <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
                Call or WhatsApp
              </Link>{" "}
              the team—responses are typically same day.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTA
        title="Need a market-ready launch plan?"
        description="Share title details, access for photography, and your target window—we will return a concise proposal before anything goes live."
        primaryHref="/contact/"
        primaryLabel="Request a call back"
        secondaryHref="/our-properties/sell/"
        secondaryLabel="Selling support"
      />
    </main>
  );
}
