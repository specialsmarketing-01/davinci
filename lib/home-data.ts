/** Numbered pillars — dark strip before Golden Visa promo */
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
  { name: "Imtiaz Developments", src: "/partners/imtiaz.png" },
  { name: "Omniyat", src: "/partners/omniyat.png" },
] as const;

/** Signature Communities grid — image/href/layout; copy lives in i18n (same order). */
export const signatureCommunityMedia = [
  {
    imageSrc: "/communities/community-downtown.jpg",
    href: "/our-properties/",
    layout: "tall-left",
    gridClass: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  },
  {
    imageSrc: "/communities/community-marina.jpg",
    href: "/our-properties/",
    layout: "small",
    gridClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    imageSrc: "/communities/community-creek.png",
    href: "/our-properties/",
    layout: "small",
    gridClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    imageSrc: "/communities/community-business-bay.jpg",
    href: "/our-properties/",
    layout: "small",
    gridClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    imageSrc: "/communities/community-palm-jumeirah.png",
    href: "/our-properties/",
    layout: "small",
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    imageSrc: "/communities/community-palm-jebel-ali.png",
    href: "/our-properties/",
    layout: "tall-right",
    gridClass: "lg:col-start-4 lg:row-start-1 lg:row-span-2",
  },
] as const;
