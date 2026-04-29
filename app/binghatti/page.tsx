import { ContactForm } from "@/components/contact/ContactForm";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const projectFacts = [
  { label: "Location", value: "Majan, Dubai" },
  { label: "Unit Types", value: "Studio, 1 BR, 2 BR" },
  { label: "Starting From", value: "AED 585,000" },
] as const;

const amenities = [
  "Adult & Kids Swimming Pool",
  "Plaza",
  "Outdoor Cinema",
  "Children's Play Area",
  "Seating Area",
  "Indoor Gym",
] as const;

const locationFacts = [
  { minutes: "10 Minutes", destination: "Dubai International Airport" },
  { minutes: "12 Minutes", destination: "Dubai Mall" },
  { minutes: "4 Minutes", destination: "Global Village" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Binghatti SkyFlame | Majan Dubai | From AED 585,000",
  description:
    "Binghatti SkyFlame in Majan, Dubai. Studio, 1 BR, and 2 BR residences from AED 585,000 with premium amenities and strategic connectivity.",
  path: "/binghatti/",
  image: {
    src: "/binghatti/25015_Bird_Night_expanded-1.png",
    alt: "Binghatti SkyFlame exterior in Dubai at night",
  },
});

export default function BinghattiLandingPage() {
  return (
    <main id="main-content" className="flex-1 bg-[#0a0a0c] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/binghatti/25015_Bird_Night_expanded-1.png"
          alt="Binghatti SkyFlame skyline facade in Majan, Dubai"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />

        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col px-4 pb-14 pt-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="flex items-center justify-between">
            <Image
              src="/binghatti/nav-logo.svg"
              alt="Binghatti SkyFlame"
              width={178}
              height={40}
              className="h-auto w-[9.5rem] sm:w-[11rem]"
            />
            <Link
              href="#lead-form"
              className="rounded-full border border-white/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Register your interest
            </Link>
          </div>

          <div className="mt-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-white/80">Majan, Dubai</p>
            <h1 className="mt-3 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Binghatti SkyFlame
            </h1>
            <p className="mt-5 text-lg text-white/90 sm:text-xl">
              Studio, 1 BR, 2 BR | From AED 585,000
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#lead-form"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
              >
                Register your interest
              </Link>
              <Link
                href="#project-details"
                className="rounded-full border border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="project-details" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-light text-white sm:text-3xl">Binghatti SkyFlame</h2>
            <div className="mt-6 space-y-5">
              {projectFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">{fact.label}</p>
                  <p className="mt-1 text-lg text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light text-white sm:text-4xl">Private Residences that meet the sky</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Residences feature sophisticated interiors and high-end finishes. Meticulous design
              ensures that every space promotes a sense of clarity and ease. Stone, glass and bespoke
              materials are used to create an atmosphere of flow and flourish.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Every home is equipped with the latest smart home features and AI-driven tech for seamless
              comfort and maximum efficiency. This intelligent design is secured by 24/7 monitoring and
              dedicated security services.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/35 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Skyline Views Await</p>
          <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">Aminities At Binghatti SkyFlame</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((item) => (
              <div key={item} className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
                <p className="text-base font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/binghatti/25015_ameneties-1-copy.webp"
                alt="Binghatti SkyFlame amenities and podium zone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/binghatti/25015_Seating_Area-1-copy.webp"
                alt="Binghatti SkyFlame premium seating and lifestyle area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="#lead-form"
              className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
            >
              Register your interest now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-light text-white sm:text-4xl">Location</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              The tower&apos;s strategic location ensures direct and efficient road access to core
              areas of Dubai. It sits near major highways such as Sheikh Mohammed Bin Zayed Road
              (E311) and Dubai - Al Ain Road.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Iconic and must-visit landmarks like Downtown Dubai, Burj Khalifa and Dubai Mall are
              minutes away, with major leisure hubs such as Global Village and Dubai Miracle Garden
              within mere minutes.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {locationFacts.map((fact) => (
                <div key={fact.destination} className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/65">{fact.minutes} from</p>
                  <p className="mt-2 text-base text-white">{fact.destination}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/binghatti/25015_street_sunrise-1.png"
                alt="Binghatti SkyFlame location approach and city access"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/binghatti/CAM02-05-1-copy.webp"
                alt="Binghatti SkyFlame architectural exterior view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="lead-form" className="border-t border-white/10 bg-black/40 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image
              src="/binghatti/flare-form-image_50.webp"
              alt="Binghatti SkyFlame registration visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Register your interest</p>
            <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">
              Secure Your Binghatti Property
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Fill in your details, and our team will contact you with exclusive opportunities in
              Binghatti&apos;s latest developments.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
