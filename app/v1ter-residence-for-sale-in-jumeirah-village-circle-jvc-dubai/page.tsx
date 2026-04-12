import { PropertyDetailView } from "@/components/properties/PropertyDetailView";
import { buildPropertyMetadata } from "@/lib/property-metadata";
import type { Metadata } from "next";

const slug = "v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai";

export const metadata: Metadata = buildPropertyMetadata(
  slug,
  "/v1ter-residence-for-sale-in-jumeirah-village-circle-jvc-dubai/",
);

export default function V1terResidencePage() {
  return (
    <main id="main-content" className="flex-1">
      <PropertyDetailView slug={slug} />
    </main>
  );
}
