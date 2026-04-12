import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Davinci Properties privacy policy—how we handle personal data, communications, and your rights when you use our website and services.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="We take data protection seriously. This page explains what we collect, why we collect it, and the choices available to you."
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-muted leading-relaxed">
          We collect only the information required to respond to enquiries, deliver services, and meet
          regulatory obligations. You may request access, correction, or deletion of personal data subject
          to applicable law.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          This placeholder should be reviewed by legal counsel and adapted to your operating entities,
          jurisdictions, and data processors before publication.
        </p>
        <p className="mt-8 text-sm text-muted">
          Related:{" "}
          <Link
            className="font-semibold text-foreground underline-offset-4 hover:underline"
            href="/terms-and-conditions/"
          >
            Terms &amp; conditions
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
