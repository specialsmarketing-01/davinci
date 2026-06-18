import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PropertyListingJsonLd } from "@/components/seo/PropertyListingJsonLd";
import { PropertyDetailView } from "@/components/properties/PropertyDetailView";
import { buildPropertyMetadata } from "@/lib/property-metadata";
import type { Metadata } from "next";

const slug = "v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai";
const canonicalPath = `/properties/${slug}/`;

export const metadata: Metadata = buildPropertyMetadata(slug, canonicalPath);

export default function V1terResidencePage() {
  return (
    <>
      <PropertyListingJsonLd slug={slug} canonicalPath={canonicalPath} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Properties", path: "/our-properties/" },
          { name: "V1ter Residence", path: canonicalPath },
        ]}
      />
      <main id="main-content" className="flex-1">
        <PropertyDetailView slug={slug} />
      </main>
    </>
  );
}
