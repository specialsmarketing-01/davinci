import { InternationalPropertiesLeadForm } from "@/components/contact/InternationalPropertiesLeadForm";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { images } from "@/lib/placeholders";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "International Properties",
  description:
    "Explore international luxury homes with Davinci Properties—curated global portfolio, expert agents, and seamless support for buyers and sellers.",
  path: "/our-properties/international-properties/",
});

export default function InternationalPropertiesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero title="INTERNATIONAL PROPERTIES" background={images.internationalPropertiesHero} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>
            Our international properties portfolio is carefully curated to showcase some of the most
            desirable and luxurious homes across the globe. From stunning beachfront villas to contemporary
            urban apartments, we provide access to exceptional properties in sought-after locations worldwide.
            Our team of expert agents is well-versed in the intricacies of international property transactions,
            ensuring a smooth and seamless experience for our clients. Whether you are looking for a vacation
            home or a sound investment opportunity, our international properties division offers unparalleled
            expertise and personalized service to help you find your dream property.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-foreground sm:text-xl">
            Interested in buying or selling international properties?
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Contact us now to discuss your real estate needs and how we can assist you in finding the perfect
            property or buyer.
          </p>
        </div>

        <div className="mt-10">
          <InternationalPropertiesLeadForm />
        </div>
      </section>
    </main>
  );
}
