export type ServiceEntry = {
  slug: string;
  title: string;
  summary: string;
};

export const services: ServiceEntry[] = [
  {
    slug: "property-investment-consultancy",
    title: "Property Investment Consultancy",
    summary:
      "Structured guidance on Dubai investment fundamentals, yield modelling, and portfolio alignment with your timeline.",
  },
  {
    slug: "golden-visa",
    title: "Golden Visa",
    summary:
      "Navigate eligibility, documentation, and timelines for long-term residency options linked to property investment.",
  },
  {
    slug: "get-dubai-residence-visa",
    title: "Dubai Residence Visa",
    summary:
      "Practical support for residence pathways, renewals, and compliance so your move stays predictable.",
  },
  {
    slug: "mortgage-advisory",
    title: "Mortgage Advisory",
    summary:
      "Compare lending scenarios, stress-test repayments, and coordinate with banks for a smoother approval journey.",
  },
  {
    slug: "buyer-guide",
    title: "Buyer Guide",
    summary:
      "A clear overview of search, offers, transfers, and handover—written for first-time and repeat buyers alike.",
  },
  {
    slug: "seller-guide",
    title: "Seller Guide",
    summary:
      "Pricing strategy, presentation, marketing, and negotiation support designed to protect your upside.",
  },
  {
    slug: "tenant-guide",
    title: "Tenant Guide",
    summary:
      "Understand rights, deposits, renewals, and community norms before you sign your next lease.",
  },
  {
    slug: "landlord-guide",
    title: "Landlord Guide",
    summary:
      "Leasing workflows, compliance checkpoints, and tenant experience tips for stable long-term income.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
