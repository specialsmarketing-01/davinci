import { images } from "@/lib/placeholders";
import type { PropertyCardData } from "@/lib/property-card";

export type PropertyDetail = {
  slug: string;
  title: string;
  summary: string;
  priceLabel: string;
  location: string;
  beds: string;
  baths: string;
  sizeLabel: string;
  type: string;
  hero: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  highlights: string[];
  paragraphs: string[];
};

const lagoon: PropertyDetail = {
  slug: "damac-lagoons",
  title: "Damac Lagoons — Waterfront-Inspired Living",
  summary:
    "A master-planned community pairing lagoon-style amenities with villa and townhouse options, designed for families who want resort energy with everyday practicality.",
  priceLabel: "From AED 1.58M",
  location: "Dubai",
  beds: "4–7",
  baths: "4–8",
  sizeLabel: "From 2,150 sq ft",
  type: "Villas & townhouses",
  hero: images.waterfront,
  gallery: [images.villa, images.interior, images.lifestyle],
  highlights: [
    "Lagoon-inspired amenities with curated landscaping and walkable precincts",
    "Strong rental appeal across mid-to-large unit formats",
    "Flexible payment plans on selected inventory (subject to developer approval)",
  ],
  paragraphs: [
    "Damac Lagoons is positioned for buyers who want a community identity—water features, green corridors, and a sense of arrival without sacrificing commute practicality across Dubai.",
    "We help you compare inventory by phase, handover timeline, and service charge assumptions so your offer reflects real carrying costs—not brochure optimism.",
    "If you are financing, we can coordinate mortgage conversations early and stress-test monthly obligations against rental comparables in nearby districts.",
  ],
};

const v1ter: PropertyDetail = {
  slug: "v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai",
  title: "V1ter Residence — Contemporary Apartments in JVC",
  summary:
    "A modern mid-rise address in Jumeirah Village Circle, ideal for first-time buyers and investors seeking balanced entry pricing with strong tenant demand.",
  priceLabel: "From AED 830K",
  location: "Jumeirah Village Circle (JVC), Dubai",
  beds: "Studio–3",
  baths: "1–3",
  sizeLabel: "From 420 sq ft",
  type: "Apartments",
  hero: images.apartment,
  gallery: [images.penthouse, images.interior, images.hero],
  highlights: [
    "Strong tenant pool driven by affordability and community amenities",
    "Compact layouts suited to professional renters and small households",
    "Straightforward access to Al Khail Road and key business districts",
  ],
  paragraphs: [
    "JVC remains one of Dubai’s most liquid rental markets. V1ter Residence appeals to buyers who want a clear rental story: consistent demand, predictable maintenance, and a product that photographs well online.",
    "We review service charges, parking allocation, and balcony usability—details that materially affect rent and resale velocity.",
    "Whether you plan to owner-occupy or place the unit on the rental market, we can model both scenarios with conservative assumptions.",
  ],
};

export const propertyDetails: PropertyDetail[] = [lagoon, v1ter];

export function getPropertyBySlug(slug: string) {
  return propertyDetails.find((p) => p.slug === slug);
}

export function listPropertiesForGrid(): PropertyCardData[] {
  return propertyDetails.map((p) => ({
    id: p.slug,
    title: p.title,
    priceLabel: p.priceLabel,
    location: p.location,
    beds: p.beds,
    type: p.type,
    image: p.hero,
    href: `/properties/${p.slug}/`,
  }));
}
