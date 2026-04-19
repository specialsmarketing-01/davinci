import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";
import { images } from "@/lib/placeholders";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "DaVinci Properties Dubai Real Estate | About Company Overview",
  description:
    "About Davinci Properties—Dubai residential and commercial brokerage, experienced agents, tailored service, and support across buy, sell, lease, and management.",
  path: "/about-davinci/",
});

export default function AboutDavinciPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        title="ABOUT DAVINCI"
        description="DaVinci Properties Dubai Real Estate | About Company Overview"
        background={{ ...images.hero, objectPosition: "50% 40%" }}
      />

      <article className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[40rem] text-center text-pretty">
          <section>
            <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              Company overview
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mt-8 text-sm font-medium text-foreground sm:text-base">
              DaVinci Properties Dubai Real Estate | About Company Overview
            </p>
            <p className="mx-auto mt-6 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              DaVinci properties is a real estate brokerage agency that specializes in providing exceptional
              residential and commercial properties to its clients. With a focus on quality and attention to
              detail, Davinci Properties offers a wide range of properties that are designed to meet the needs of
              individuals and businesses alike. weather you&apos;re looking for a luxurious home or prime commercial
              space, Davinci properties has the expertise and experience to help you find the perfect property.
            </p>
          </section>

          <section className="mt-16 text-left sm:mt-20">
            <h2 className="text-center text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              Real estate brokerage
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <div className="mx-auto mt-8 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              <p>
                Our team of experienced agents is dedicated to providing you with the highest level of service and
                expertise in the industry.
              </p>
              <p>
                We understand that buying or selling a property can be a daunting process, but with our guidance and
                support, it can be a seamless and rewarding experience. We pride ourselves on our extensive knowledge
                of the local market and our ability to match buyers with the perfect property that meets their unique
                needs and preferences.
              </p>
              <p>
                Whether you&apos;re looking for a luxurious villa, a spacious apartment, or a cozy townhouse, we have a
                wide selection of properties to choose from. Our listings include a range of amenities, such as swimming
                pools, gyms, landscaped gardens, and stunning views.
              </p>
              <p>
                At our real estate company, we also offer a range of services beyond just buying and selling properties.
                We can assist with property management, rental agreements, and even help with the legal and financial
                aspects of your real estate transactions.
              </p>
              <p>
                So if you&apos;re looking for a reliable and trustworthy real estate partner, look no further than our
                company. Let us help you find your perfect home or investment property today.
              </p>
            </div>
          </section>

          <div className="mx-auto mt-16 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:mt-20 sm:text-base sm:leading-[1.7]">
            <p>
              Contact us on Tel:{" "}
              <a className="font-medium text-foreground underline-offset-2 hover:underline" href={contact.phoneHref}>
                {contact.phone}
              </a>{" "}
              or email as at:{" "}
              <a className="font-medium text-foreground underline-offset-2 hover:underline" href={contact.emailHref}>
                {contact.email}
              </a>
            </p>
            <p>Expert guidance on your preference.</p>
          </div>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              Our Approach
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              At Davinci, we understand that every client is unique, and we strive to provide customized solutions that
              meet their specific needs and preferences. We listen to our clients and work closely with them throughout
              the process to ensure they are fully satisfied with the outcome.
            </p>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              Our Commitment
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              We are committed to providing transparent and honest service to our clients. We believe in building
              long-term relationships based on trust, integrity, and mutual respect. Our goal is to exceed our
              client&apos;s expectations and earn their loyalty for years to come.
            </p>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.18em] text-foreground sm:text-sm sm:tracking-[0.22em]">
              Discover your dream home with our expertise.
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              With over 12 languages spoken among our team members, we can communicate effectively with clients from
              all around the world.
            </p>
          </section>

          <p className="mt-14 text-xs uppercase tracking-[0.18em] text-muted sm:mt-16">
            About Davinci | Real estate Company Dubai
          </p>

          <p className="mt-10 text-sm text-muted">
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
              Services
            </Link>
            <span className="mx-2 text-zinc-300">·</span>
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
              Contact
            </Link>
            <span className="mx-2 text-zinc-300">·</span>
            <Link
              className="font-semibold text-foreground underline-offset-4 hover:underline"
              href="/our-properties/"
            >
              Properties
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
