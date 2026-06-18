import { getPropertyBySlug } from "@/lib/properties-data";
import type { ServiceEntry } from "@/lib/services-data";
import { contact, siteDescription, siteName } from "@/lib/site";

export const SITE_URL = "https://davinci-properties.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const siteFaq: FaqItem[] = [
  {
    question: "What is Davinci Properties?",
    answer:
      "Davinci Properties is a Dubai-based real estate advisory firm helping clients buy, sell, rent, and invest in residential property across the UAE with transparent guidance and local market expertise.",
  },
  {
    question: "What areas in Dubai does Davinci Properties cover?",
    answer:
      "Davinci Properties advises clients across prime Dubai communities including Downtown Dubai, Dubai Marina, Business Bay, Dubai Creek, Palm Jumeirah, Palm Jebel Ali, JVC, and other family and investment-focused districts.",
  },
  {
    question: "How can I contact Davinci Properties?",
    answer:
      "You can call +971 52 772 9114, email office@davinci-properties.com, or visit the office at G06-17, The Exchange Tower, Business Bay, Dubai. Office hours are Monday to Friday, 10 AM to 6 PM.",
  },
  {
    question: "Does Davinci Properties help with UAE Golden Visa through property?",
    answer:
      "Yes. Davinci Properties guides investors on UAE Golden Visa eligibility linked to qualifying property investment, documentation, and next steps. Thresholds and rules should be verified against current UAE requirements.",
  },
  {
    question: "Can I buy, sell, or rent property in Dubai through Davinci Properties?",
    answer:
      "Yes. Davinci Properties supports buyers, sellers, landlords, and tenants with property search, listing, leasing guidance, mortgage coordination, and investment consultancy across Dubai.",
  },
  {
    question: "Does Davinci Properties accept cryptocurrency for property transactions?",
    answer:
      "Davinci Properties supports clients exploring cryptocurrency payment options where permitted by developers, banks, and transaction requirements. Speak with the team for case-by-case guidance.",
  },
];

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationSchema() {
  return {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: siteName,
    description: siteDescription,
    url: SITE_URL,
    logo: absoluteUrl("/Davinci-properties-logo.png"),
    image: absoluteUrl("/Davinci-properties-logo.png"),
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    priceRange: "AED",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLines[1],
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1865,
      longitude: 55.2675,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    knowsAbout: [
      "Dubai real estate",
      "Luxury property Dubai",
      "UAE Golden Visa",
      "Property investment UAE",
      "Dubai Marina",
      "Downtown Dubai",
      "Business Bay",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phoneHref.replace("tel:", ""),
        email: contact.email,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic", "Russian"],
      },
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteName,
    url: SITE_URL,
    description: siteDescription,
    inLanguage: ["en-AE", "ar-AE", "ru"],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema(service: ServiceEntry) {
  const path = `/services/${service.slug}/`;
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.summary,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    serviceType: service.title,
  };
}

export function buildPropertyListingSchema(slug: string, canonicalPath: string) {
  const property = getPropertyBySlug(slug);
  if (!property) return null;

  const url = absoluteUrl(canonicalPath);
  const image = property.hero.src.startsWith("http")
    ? property.hero.src
    : absoluteUrl(property.hero.src);

  return {
    "@type": "RealEstateListing",
    "@id": `${url}#listing`,
    name: property.title,
    description: property.summary,
    url,
    image: [image, ...property.gallery.map((g) => (g.src.startsWith("http") ? g.src : absoluteUrl(g.src)))],
    datePosted: "2024-01-01",
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      description: property.priceLabel,
      availability: "https://schema.org/InStock",
      seller: { "@id": ORGANIZATION_ID },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "AE",
    },
    numberOfRooms: property.beds,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sizeLabel,
    },
  };
}

export function buildJsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
