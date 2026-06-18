import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/structured-data";

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}
