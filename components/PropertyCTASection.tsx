import { PropertyCTALeadForm } from "@/components/PropertyCTALeadForm";
import Link from "next/link";

const headingSerif =
  "font-[family-name:var(--font-playfair)] font-bold text-black antialiased";

export function PropertyCTASection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 text-zinc-900 md:py-20" aria-labelledby="property-cta-heading">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:gap-12 md:px-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 lg:px-12 xl:gap-x-16 xl:px-16">
        {/* Left — inset from edge, tight vertical rhythm */}
        <div className="flex flex-col items-start justify-center text-left pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
          <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.5em] text-[#C8A96A]">
            LUXURY
          </p>
          <h2
            id="property-cta-heading"
            className={`${headingSerif} mt-2 text-[3.25rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.75rem] md:text-[4rem] lg:text-[4.25rem] xl:text-[4.5rem] 2xl:text-[4.75rem]`}
          >
            <span className="block">Exclusive Property</span>
            <span className="block">Listings</span>
          </h2>
          <p className="mt-3 max-w-[20rem] text-[14px] leading-relaxed text-zinc-500 sm:max-w-[22rem] sm:text-[15px]">
            Discover our exclusive property listings featuring luxury homes, apartments, and villas in prime
            locations. With personalized service and attention to detail, we make finding your dream property a
            seamless experience.
          </p>
          <Link
            href="/our-properties/"
            className="mt-4 inline-flex items-center justify-center rounded-sm bg-black px-6 py-3 text-[13px] font-medium leading-none text-[#C8A96A] transition hover:bg-zinc-900"
          >
            View Exclusives
          </Link>
        </div>

        {/* Right — narrower form, vertically centered */}
        <div className="flex flex-col justify-center lg:pl-4 xl:pl-8">
          <h3 className="text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-black">
            GET IN TOUCH
          </h3>
          <PropertyCTALeadForm />
        </div>
      </div>
    </section>
  );
}
