import { JsonLd } from "@/components/seo/JsonLd";
import { buildPropertyListingSchema } from "@/lib/structured-data";

export function PropertyListingJsonLd({
  slug,
  canonicalPath,
}: {
  slug: string;
  canonicalPath: string;
}) {
  const schema = buildPropertyListingSchema(slug, canonicalPath);
  if (!schema) return null;
  return <JsonLd data={schema} />;
}
