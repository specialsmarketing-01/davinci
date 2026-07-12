export const siteName = "Davinci Properties";

export const siteUrl = "https://davinci-properties.com";

export const siteDescription =
  "Premium Dubai real estate advisors helping you buy, sell, and rent exceptional homes and investment properties with clarity and confidence.";

export const seoKeywords = [
  "Dubai Properties",
  "Buy Property Dubai",
  "Luxury Real Estate Dubai",
  "Apartments for Sale Dubai",
  "Dubai Real Estate Agent",
  "Sell Property Dubai",
  "Rent Property Dubai",
  "UAE Golden Visa Property",
  "Business Bay Real Estate",
  "Dubai Marina Apartments",
  "Downtown Dubai Property",
  "Real Estate Consultant Dubai",
] as const;

/** Office postal block — line 1: company name, line 2: full street / area (use everywhere the office address appears). */
export const officeAddressLines = [
  "Davinci Properties",
  "G06-17 - G0, The Exchange Tower - الخليج التجاري - Dubai, United Arab Emirates",
] as const;

export const contact = {
  phone: "+971 52 772 9114",
  /** Same number as `phone`, formatted for display. */
  phoneDisplay: "+971 (52) 772 9114",
  phoneHref: "tel:+971527729114",
  /** Opens WhatsApp chat for the same mobile number as `phoneHref`. */
  whatsappHref: "https://wa.me/971527729114",
  email: "office@davinci-properties.com",
  emailHref: "mailto:office@davinci-properties.com",
  addressLines: officeAddressLines,
  officeHours: {
    lines: ["Mon - Fri:", "10 AM - 6 PM"] as const,
  },
};
