import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Davinci Properties website—review with counsel and customise for your organisation.",
  path: "/terms-and-conditions/",
});

export default function TermsAndConditionsPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions"
        description="These terms govern your use of our website and general information content. They are not a substitute for regulated advice."
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-muted leading-relaxed">
          By using this website you agree to these terms. Content is provided for general information and does
          not constitute financial, legal, or tax advice. You should seek independent professional advice before
          making decisions.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          Replace this placeholder with counsel-approved terms covering liability, intellectual property,
          governing law, dispute resolution, and acceptable use—aligned to your operating entities and markets.
        </p>
        <p className="mt-8 text-sm text-muted">
          Related:{" "}
          <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/privacy-policy/">
            Privacy policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
