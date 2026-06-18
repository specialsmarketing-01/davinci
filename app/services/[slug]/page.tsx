import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
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
    return (
      <>
        <ServiceJsonLd service={service} />
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.title, path: `/services/${service.slug}/` },
          ]}
        />
        <ServiceLegacyExperience slug={service.slug} legacyEn={service.legacyContent} />
      </>
    );
  }

  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.title, path: `/services/${service.slug}/` },
        ]}
      />
      <ServiceGenericExperience service={service} />
    </>
  );
}
