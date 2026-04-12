import { PropertyDetailView } from "@/components/properties/PropertyDetailView";
import { propertyDetails } from "@/lib/properties-data";
import { buildPropertyMetadata } from "@/lib/property-metadata";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return propertyDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return buildPropertyMetadata(slug, `/properties/${slug}/`);
}

export default async function PropertyCatalogPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main id="main-content" className="flex-1">
      <PropertyDetailView slug={slug} />
    </main>
  );
}
