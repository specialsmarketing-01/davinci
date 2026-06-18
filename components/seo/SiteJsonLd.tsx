import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildJsonLdGraph,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/structured-data";

export function SiteJsonLd() {
  const data = buildJsonLdGraph(buildOrganizationSchema(), buildWebSiteSchema());
  return <JsonLd data={data} />;
}
