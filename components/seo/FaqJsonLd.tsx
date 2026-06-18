import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema, type FaqItem } from "@/lib/structured-data";

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  return <JsonLd data={buildFaqSchema(faqs)} />;
}
