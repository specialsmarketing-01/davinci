import { PropertyDetailView } from "@/components/properties/PropertyDetailView";
import { buildPropertyMetadata } from "@/lib/property-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildPropertyMetadata("damac-lagoons", "/damac-lagoons/");

export default function DamacLagoonsPage() {
  return (
    <main id="main-content" className="flex-1">
      <PropertyDetailView slug="damac-lagoons" />
    </main>
  );
}
