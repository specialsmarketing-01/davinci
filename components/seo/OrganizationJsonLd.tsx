import { contact, siteDescription, siteName } from "@/lib/site";

const siteUrl = "https://davinci-properties.com";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLines[1],
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
