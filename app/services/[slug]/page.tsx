import { ServiceGenericExperience } from "@/components/services/ServiceGenericExperience";
import { ServiceLegacyExperience } from "@/components/services/ServiceLegacyExperience";
import { getServiceBySlug, services } from "@/lib/services-data";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }
  const title = service.metaTitle ?? service.title;
  const description = service.metaDescription ?? service.summary;
  return buildPageMetadata({
    title,
    description,
    path: `/services/${service.slug}/`,
    image: service.legacyContent?.heroBackground,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  if (service.legacyContent) {
    return <ServiceLegacyExperience slug={service.slug} legacyEn={service.legacyContent} />;
  }

  return <ServiceGenericExperience service={service} />;
}
