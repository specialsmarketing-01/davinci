import { images } from "@/lib/placeholders";
import type { PropertyCardData } from "@/lib/property-card";

export type FeaturedProperty = PropertyCardData;

export const featuredProperties: FeaturedProperty[] = [
  {
    id: "1",
    title: "Signature Golf Villa Collection",
    priceLabel: "From AED 5.82M",
    location: "Damac Hills, Dubai",
    beds: "5–7",
    type: "Villa",
    image: images.villa,
    href: "/damac-lagoons/",
  },
  {
    id: "2",
    title: "Skyline Residences — Premium Apartments",
    priceLabel: "From AED 830K",
    location: "Jumeirah Village Circle",
    beds: "1–3",
    type: "Apartment",
    image: images.apartment,
    href: "/v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai/",
  },
  {
    id: "3",
    title: "Hotel-Branded Tower Suites",
    priceLabel: "From AED 600K",
    location: "Business Bay",
    beds: "1–2",
    type: "Branded Residence",
    image: images.penthouse,
    href: "/properties/v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai/",
  },
];

export const serviceHighlights = [
  {
    title: "Investment Advisory",
    description:
      "Scenario planning and market context so every decision is grounded in numbers—not noise.",
    href: "/services/property-investment-consultancy/",
  },
  {
    title: "Visa & Residency",
    description:
      "Coordinated guidance across Golden Visa and Dubai residence routes tied to your property goals.",
    href: "/services/get-dubai-residence-visa/",
  },
  {
    title: "Mortgage Strategy",
    description:
      "Compare structures, fees, and repayment profiles with advisors who speak bank and buyer.",
    href: "/services/mortgage-advisory/",
  },
] as const;

export const whyUs = [
  {
    step: "01",
    title: "Committed team",
    body: "Senior consultants who stay accountable from first viewing to handover.",
  },
  {
    step: "02",
    title: "Market fluency",
    body: "On-the-ground pricing intelligence across communities you actually want to live in.",
  },
  {
    step: "03",
    title: "The Davinci standard",
    body: "Transparent timelines, disciplined follow-up, and documentation you can rely on.",
  },
  {
    step: "04",
    title: "Experienced negotiators",
    body: "Calm representation in competitive situations—off-plan, resale, and rental.",
  },
] as const;

export const projectSpotlights = [
  "Safa District",
  "Damac Gems Estate",
  "Downtown Dubai",
  "Riviera Beachfront",
  "Branded Hotel Residences",
] as const;
