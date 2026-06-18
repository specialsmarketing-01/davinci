import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/structured-data";
import type { ServiceEntry } from "@/lib/services-data";

export function ServiceJsonLd({ service }: { service: ServiceEntry }) {
  return <JsonLd data={buildServiceSchema(service)} />;
}
