"use client";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";

const featuredHrefs = [
  "/our-properties/",
  "/damac-lagoons/",
  "/our-properties/sell/",
  "/rent/",
] as const;

const usefulHrefs = [
  "/about-davinci/",
  "/services/",
  "/contact/",
  "/privacy-policy/",
  "/terms-and-conditions/",
] as const;

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <p className="text-sm font-normal text-white">{children}</p>
      <div className="mt-2 h-px w-full bg-white" aria-hidden />
    </>
  );
}

export function Footer() {
  const { site } = useNavLocale();
  const officeStreet = contact.addressLines[1];
  const [emailLocal, emailHost] = contact.email.split("@");
  const emailDisplay =
    emailLocal && emailHost
      ? `${emailLocal.charAt(0).toUpperCase()}${emailLocal.slice(1)}@${emailHost}`
      : contact.email;

  return (
    <footer className="border-t border-border bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <SiteLogo
              imageClassName="!h-auto max-h-[3.75rem] w-auto max-w-[min(100%,240px)] sm:max-h-[3.85rem] sm:max-w-[260px]"
            />
          </div>

          <nav aria-label={site.footer.ariaFeatured}>
            <ColumnTitle>{site.footer.featuredTitle}</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {featuredHrefs.map((href) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white transition hover:text-accent-on-dark"
                  >
                    {site.footer.featured[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={site.footer.ariaUseful}>
            <ColumnTitle>{site.footer.usefulTitle}</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {usefulHrefs.map((href) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white transition hover:text-accent-on-dark"
                  >
                    {site.footer.useful[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <ColumnTitle>{site.footer.contactTitle}</ColumnTitle>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white">
              <p>
                <span className="font-medium">{site.footer.officePrefix} </span>
                Office — {officeStreet}
              </p>
              <p>
                <span className="font-medium">{site.footer.hotlinePrefix} </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">{site.footer.emailPrefix} </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.emailHref}>
                  {emailDisplay}
                </a>
              </p>
            </div>
          </address>
        </div>
        <p className="mt-10 border-t border-white/15 pt-5 text-center text-xs text-white/70">
          {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
