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

/** Numbered pillars — dark strip before Services */
export const journeyStagePillars = [
  {
    step: "01",
    title: "Committed team",
    body: "Experienced agents and industry experts, committed to exceptional service.",
  },
  {
    step: "02",
    title: "Industry experts",
    body: "Our team includes knowledgeable industry experts for informed real estate advice.",
  },
  {
    step: "03",
    title: "The Davinci advantage",
    body: "Trusted expertise and personalized service for your real estate success.",
  },
  {
    step: "04",
    title: "Experienced agents",
    body: "Our experienced agents bring knowledge, skill, and personalized attention to every transaction.",
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

/** Developer partner logos — files in /public/partners/ */
export const partnerLogos = [
  { name: "DAMAC", src: "/partners/damac.png" },
  { name: "Aldar", src: "/partners/aldar.png" },
  { name: "Azizi Developments", src: "/partners/azizi.png" },
  { name: "Danube Properties", src: "/partners/danube-properties.png" },
  { name: "Dubai Holding", src: "/partners/dubai-holding.png" },
  { name: "Nakheel", src: "/partners/nakheel.png" },
  { name: "Ellington Properties", src: "/partners/ellington.png" },
  { name: "ORO24 Developments", src: "/partners/oro24.png" },
  { name: "Sobha Realty", src: "/partners/sobha.png" },
  { name: "Emaar", src: "/partners/emaar.png" },
  { name: "Omniyat", src: "/partners/omniyat.png" },
] as const;

export const projectSpotlights = [
  "Safa District",
  "Damac Gems Estate",
  "Downtown Dubai",
  "Riviera Beachfront",
  "Branded Hotel Residences",
] as const;

/** Home — exactly 3 featured projects; images are remote (Unsplash). */
export const dubaiFeaturedProjects = [
  {
    title: "Gems Estates at Damac Hills, Dubai",
    location: "Dubai, Damac Hills",
    price: "AED 1,584,794",
    imageSrc:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Luxury villa and pool at twilight",
    href: "/our-properties/",
    tagline: null as string | null,
  },
  {
    title: "Maimoon Gardens",
    location: "Dubai, Jumeirah Village",
    price: "AED 830,000",
    imageSrc:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Dubai skyline and waterfront towers at golden hour",
    href: "/our-properties/",
    tagline: "The perfect blend of affordability and sustainability",
  },
  {
    title: "SLS Dubai Hotel Apartments",
    location: "Dubai, Business Bay",
    price: "AED 600,000",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Waterfront residential architecture with palm-lined promenade",
    href: "/our-properties/",
    tagline: null as string | null,
  },
] as const;
