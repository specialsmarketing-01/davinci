import { ServicesIndexBody } from "@/components/pages/ServicesIndexBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Real Estate Services in Dubai",
  description:
    "Davinci Properties services—investment consultancy, visas, mortgage advisory, and practical guides for buyers, sellers, tenants, and landlords.",
  path: "/services/",
});

export default function ServicesIndexPage() {
  return <ServicesIndexBody />;
}
