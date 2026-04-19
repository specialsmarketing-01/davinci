import { images } from "@/lib/placeholders";

/** Optional legacy body copied from davinci-properties.com for a given service slug. */
export type LegacyServiceContent = {
  /** When set, page opens with `PageHero` using this image; `pageH1` becomes the hero title. */
  heroBackground?: { src: string; alt: string; objectPosition?: string };
  pageH1: string;
  sections: readonly {
    h2: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
  }[];
  closingParagraphs: readonly string[];
  /** Trailing lines after the contact line (e.g. tagline). */
  footerLines: readonly string[];
  /** When true, renders the standard Davinci contact sentence with tel/mail links. */
  contactLine?: true;
  /** Text between “email” and “:” in the contact line. Defaults to `as at`. */
  contactEmailPhrase?: "as at" | "us at";
};

export type ServiceEntry = {
  slug: string;
  title: string;
  summary: string;
  /** When set, the service detail page renders this body instead of the generic template. */
  legacyContent?: LegacyServiceContent;
  /** Overrides `<title>` / OpenGraph title for this service only. */
  metaTitle?: string;
  metaDescription?: string;
};

export const services: ServiceEntry[] = [
  {
    slug: "property-investment-consultancy",
    title: "Property & Investment Consultancy",
    summary:
      "Professional asset management and investment intelligence for buyers, sellers, landlords, and tenants in the UAE.",
    metaTitle: "Real Estate Consultant Dubai | Property & Investment Consultancy",
    metaDescription:
      "Davinci Properties—Dubai investment consultancy, honest advice, and market-leading local expertise for informed property decisions.",
    legacyContent: {
      heroBackground: {
        src: "/property-investment-consultancy-hero.png",
        alt: "Business professionals reviewing property data on laptop and tablet at a meeting",
        objectPosition: "50% 45%",
      },
      pageH1: "PROPERTY & INVESTMENT CONSULTANCY",
      sections: [
        { h2: "TIME TO SELL YOUR HOME OR BUY A PROPERTY" },
        {
          h2: "PROFESSIONAL CONSULTING",
          paragraphs: [
            "Davinci Properties as a leading real estate brokerage agency, based in Dubai, our a special team of highly-qualified experts of investments expertise covers a comprehensive range of real estate sectors whereby we provide a wide range of professional asset management and asset intelligence services with honest advice to our clients to suit buyers, sellers, landlords and tenants alike.",
            "Davinci Properties company incorporated in the United Arab Emirates, based in Dubai, we are offer advice, market leading expertise of local market knowledge along with our deep understanding of business goals, for those who value time, money and up – to – date information. You can make an informed decision before you invest.",
            "Our clients use us because of our honest advice, ethical practices and our reputation built up over many years.",
          ],
        },
      ],
      closingParagraphs: [
        "If you are planning to buy or sell a property in UAE please contact us for a confidential discussion and experience our friendly yet effective service.",
      ],
      contactLine: true,
      footerLines: ["Expert guidance on your preference."],
    },
  },
  {
    slug: "golden-visa",
    title: "Golden Visa",
    summary:
      "Invest AED 2 million in UAE real estate and obtain a 10-year Golden Visa—long-term residency with sponsor-free renewal and family sponsorship.",
    metaTitle: "Golden Visa Dubai | Golden Visa UAE | Golden Visa UAE Benefits",
    metaDescription:
      "UAE Golden Visa through property investment—AED 2 million threshold, 10-year residency, key benefits, and expert guidance from Davinci Properties.",
    legacyContent: {
      heroBackground: {
        src: "/golden-visa-hero.png",
        alt: "Gold key and pocket watch on currency symbolising UAE Golden Visa and long-term residency",
        objectPosition: "50% 50%",
      },
      pageH1: "GOLDEN VISA",
      sections: [
        { h2: "THE GOLDEN PRIVILEGES TO PPREMIUM RESIDENTS" },
        {
          h2: "WHAT IS THE UAE GOLDEN VISA?",
          paragraphs: [
            "Invest AED 2 million in real estate and get a UAE 10-years residency golden visa",
            "The UAE's 'Golden visa' is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits which include:",
          ],
          bullets: [
            "An entry visa for six months with multiple entries to proceed with residence issuance",
            "A long-term, renewable residence visa valid for 5 or 10 years",
            "The privilege of not needing a sponsor",
            "The ability to sponsor their family members, including spouses and children regardless of their ages",
            "The permit for family members to stay in the UAE until the end of their permit duration, if the primary holder of the Golden visa passes away.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Expert guidance on your preference."],
    },
  },
  {
    slug: "get-dubai-residence-visa",
    title: "Get Dubai Residence Visa",
    summary:
      "Buy Dubai property from AED 750,000 and qualify for a residence visa—DLD rules, Green and Golden visa context, and guidance from Davinci Properties.",
    metaTitle: "Dubai Residence Visa | Dubai Residence Visa Cost Guide Online",
    metaDescription:
      "Dubai residence visa through property from AED 750,000—DLD announcement, 2022 UAE visa updates, Cabinet regulations, and how Davinci Properties can help.",
    legacyContent: {
      heroBackground: {
        src: images.hero.src,
        alt: images.hero.alt,
        objectPosition: "50% 38%",
      },
      pageH1: "GET DUBAI RESIDENCE VISA",
      sections: [
        {
          h2: "DUBAI RESIDENCE VISA",
          paragraphs: [
            "On buying property of AED 750000 in value",
            "The Dubai Land Department (DLD) has announced that Dubai residence visas will now be issued to those who buy property worth AED 750000 or more. This is a great initiative as it bolsters the Dubai real estate market and allows citizens of other countries to live in this beautiful city.",
            "On October 3 2022, new visa provisions took effect in the UAE. Long-term visas, which include the 5-year Green Residence Visa and the 10-year Golden Residence Visa now are more accessible to foreigners, as stated by the country's Identity, Citizenship, Customs & Port Security.",
            "On Monday, April 18, the UAE Cabinet – under the guidance of Sheikh Mohammed bin Rashid Al Maktoum, the UAE Vice President, Prime Minister, and Ruler of Dubai – revealed a wide set of executive regulations, the main goal of which is to attract and retain investors and top talent in the country.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Our consultants are ready to assist you."],
    },
  },
  {
    slug: "mortgage-advisory",
    title: "Mortgage Advisory",
    summary:
      "Personalised mortgage support in Dubai—off-plan and ready property finance, equity release, and step-by-step guidance through approval.",
    metaTitle: "Mortgage Advisory in Dubai | Davinci Properties",
    metaDescription:
      "Mortgage advisory for UAE property—DaVinci consultants, market and financing expertise, exclusive rates, off-plan and ready mortgages, and equity release.",
    legacyContent: {
      heroBackground: {
        src: images.mortgageAdvisoryHero.src,
        alt: images.mortgageAdvisoryHero.alt,
        objectPosition: images.mortgageAdvisoryHero.objectPosition,
      },
      pageH1: "MORTGAGE ADVISORY",
      sections: [
        { h2: "FINANCIAL SOLUTION" },
        {
          h2: "WE CUT THROUGH THE COMPLEXITIES OF FINANCING",
          paragraphs: [
            "DaVinci consultant a personalised experience from the initial enquiry right through to mortgage approval. You'll get access to specialized market and financing knowledge, exclusive rates, and step-by-step support spanning the buying process, fees, timescales and borrowing limits.",
            "Securing financing can be a complex process. If you are planning to investing in the UAE real estate market, having an experienced mortgage advisor by your side is a must.",
            "Our experts includes",
          ],
          bullets: [
            "Mortgage on new off-plan property",
            "Mortgage on ready property",
            "Equity Release",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Our consultants are ready to assist you."],
    },
  },
  {
    slug: "buyer-guide",
    title: "Buyer Guide",
    summary:
      "Steps to buying a home in Dubai—trusted Davinci agents, freehold purchase rules, budgeting, RERA forms, and sale purchase agreement support.",
    metaTitle: "Buyer Guide Real Estate in Dubai - Buying Property in Dubai",
    metaDescription:
      "Dubai buyer guide from Davinci Properties—trusted agents, freehold eligibility, affordability planning, RERA compliance, and SPA signing.",
    legacyContent: {
      heroBackground: {
        src: "/buyer-guide-hero.png",
        alt: "Luxury high-rise apartment living area with city views at dusk",
        objectPosition: "50% 45%",
      },
      pageH1: "BUYER GUIDE",
      sections: [
        {
          h2: "WORK WITH A DAVINCI TRUSTED AGENTS",
          paragraphs: [
            "When a person is ready to make that dream a reality there are certain steps to buying a home that must be followed.",
            "It's important to enlist the help of a trusted real estate professional who will be able to provide expert guidance at each step of the home-buying process.",
            "Properties in Dubai's freehold areas can be purchased by any nationality, who is either based in or outside the UAE.",
            "Find out how much house you can afford and plan for additional costs.",
            "We will proceed to sign all the necessary RERA forms and the sale purchase agreement.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      contactEmailPhrase: "us at",
      footerLines: ["Our consultants are ready to assist you."],
    },
  },
  {
    slug: "seller-guide",
    title: "Seller Guide",
    summary:
      "Prepare, price, and market your Dubai home with Davinci—proven selling method, best-price focus, local experts, and RERA-compliant agreements.",
    metaTitle: "Seller Guide Real Estate in Dubai | How to Sell Property in Dubai",
    metaDescription:
      "Sell property in Dubai with Davinci Properties—listing preparation, pricing, buyer reach, expert consultants, and RERA forms plus agreement signing.",
    legacyContent: {
      heroBackground: {
        src: "/seller-guide-hero.png",
        alt: "Real estate listing agreement with keys and lockbox on a wooden desk",
        objectPosition: "50% 48%",
      },
      pageH1: "SELLER GUIDE",
      sections: [
        {
          h2: "COMMITTED TO YOUR SUCCESSFUL",
          paragraphs: [
            "Davinci properties was developed to provide our clients with a consistent and proven method to prepare their homes for sale, price their homes appropriately, and get the word out to as many prospective buyers as possible.",
            "We ensure our clients get the best price in the market. If you are planning to sell your property, here's our the steps in the residential home selling process guide.",
            "Our consultants are local market experts who always work to sell your property in the shortest possible time.",
            "We will proceed to sign all the necessary RERA forms and buying agreement.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Our consultants are ready to assist you."],
    },
  },
  {
    slug: "tenant-guide",
    title: "Tenant Guide",
    summary:
      "Rent in Dubai with Davinci—RERA-listed homes, Ejari leases, security deposits, DEWA and telecom setup, and smooth move-in with your landlord.",
    metaTitle: "DaVinci-Properties Tenant Guide | Rent a Property in Dubai",
    metaDescription:
      "Tenant guide for Dubai rentals—broker support, RERA-qualified consultants, Ejari contracts, DEWA after registration, and building move-in formalities.",
    legacyContent: {
      heroBackground: {
        src: "/tenant-guide-hero.png",
        alt: "People signing a rental agreement at a desk",
        objectPosition: "55% 45%",
      },
      pageH1: "TENANT GUIDE",
      sections: [
        {
          h2: "HOW TO RENT IN DUBAI WITH DAVINCI PROPERTIES ?",
          paragraphs: [
            "You found a reputable real estate broker company who takes a whole load of stress off your shoulders, especially in a competitive rental market. Our professional consultants keep you updated on new and upcoming opt for a RERA-listed property that meet your criteria and is your intermediary regarding lease negotiations. Ensure they are fully RERA qualified and have in-depth knowledge of the areas you are looking at, which need to be sorted out before you move in.",
            "After finalising a property, you will have to pay a security deposit to secure the rental property for yourself. Once you've agreed on the terms and conditions of the lease, your broker will draw up an agreement under the Ejari contract system. After both parties have signed and the cheques have cleared, you can move in.",
            "Your Dubai Electricity and Water Authority (DEWA) connection is linked to the Ejari system, so you can't connect the supply until your Ejari is registered. You will have to submit a set of documents and deposits with DEWA and either of the two UAE telecom operators UAE to secure connections in your leased property.",
            "Landlord will have to fulfil all the building move-in formalities, so your process is without any hassles.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Our team is available to help you."],
    },
  },
  {
    slug: "landlord-guide",
    title: "Landlord Guide",
    summary:
      "Lease in Dubai with Davinci—tenant selection, exclusive listings, RERA forms, portal marketing, viewings, and property management for landlords.",
    metaTitle: "DaVinci-Properties Company Step by Step Landlord Guide in Dubai",
    metaDescription:
      "Landlord guide for Dubai—choosing tenants, passive income, exclusive Davinci listings, RERA listing forms, marketing, viewings, and property management.",
    legacyContent: {
      heroBackground: {
        src: "/landlord-guide-hero.png",
        alt: "Legal agreement document with a fountain pen",
        objectPosition: "50% 42%",
      },
      pageH1: "LANDLORD GUIDE",
      sections: [
        {
          h2: "HOW TO LEASE IN DUBAI ?",
          paragraphs: [
            "Choosing new tenants who will pay on time, respect your property, and stay for an extended period, will make your life easier and your business more profitable.",
            "Renting out a property can be a great way to generate passive income whilst retaining ownership. A knowledgeable broker is key in listing your property and finding the right calibre of tenants. Do your homework and look for a brokerage with a solid reputation and a track record of marketing similar properties with Davinci Properties.",
            "Listing your property exclusively with Davinci Properties comes with certain benefits. It incentivizes the broker, and they'll be more motivated to invest extra time and marketing know-how to attract a great tenant.",
            "Registered owners must sign a RERA listing form for their broker to list the property. For your broker to complete their due diligence, they will also ask you for a copy of the title deeds and your ID.",
            "Your property should be listed on your broker's website and various real estate portals. Your broker should also be hard at work arranging viewings for prospective tenants they already have on their books. Your broker should connect with you regularly to feedback how any viewings and the general tenant search are going.",
            "Once your property is rented, we strongly recommend that you consider professional property management, especially if you own multiple properties or are a remote landlord.",
          ],
        },
      ],
      closingParagraphs: [],
      contactLine: true,
      footerLines: ["Our consultants are ready to assist you."],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
