import { ListYourPropertyForm } from "@/components/contact/ListYourPropertyForm";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "List Your Property | Experienced Agents",
  description:
    "List your property with Davinci Properties—experienced agents, market insights, and marketing tailored to serious buyers and tenants in Dubai.",
  path: "/our-properties/list-your-property/",
});

export default function ListYourPropertyPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        title="LIST YOUR PROPERTY"
        background={images.listYourPropertyHero}
        fullViewport
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-foreground">Listing your property</strong> with Davinci
            Properties can make all the difference. Our team of experienced agents will guide you through the
            process, from setting a competitive price to marketing your property to the right audience. We
            provide you with the latest market insights, innovative marketing strategies, and personalized
            service to ensure a smooth and successful transaction.
          </p>
          <p>
            Whether you&apos;re looking to sell or rent your property, we&apos;re committed to getting you the
            best possible results.
          </p>
          <p>
            Contact us today to schedule a consultation and take the first step toward a successful property
            listing.
          </p>
        </div>

        <h2 className="mt-14 text-lg font-semibold uppercase tracking-[0.14em] text-foreground sm:text-xl">
          How to list your property in Dubai
        </h2>

        <div className="mt-8">
          <ListYourPropertyForm />
        </div>
      </section>
    </main>
  );
}
