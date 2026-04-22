import { SiteLogo } from "@/components/layout/SiteLogo";
import { contact } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";

const featuredProperties = [
  { label: "Luxury Projects", href: "/our-properties/" },
  { label: "Off Plan Projects", href: "/damac-lagoons/" },
  { label: "Sell Property", href: "/our-properties/sell/" },
  { label: "Rent Property", href: "/rent/" },
] as const;

const usefulLinks = [
  { label: "About Davinci", href: "/about-davinci/" },
  { label: "Our Services", href: "/services/" },
  { label: "Careers", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Services", href: "/terms-and-conditions/" },
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

          <nav aria-label="Featured properties">
            <ColumnTitle>Featured Properties</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {featuredProperties.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white transition hover:text-accent-on-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Useful links">
            <ColumnTitle>Useful Links</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white transition hover:text-accent-on-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <ColumnTitle>Contact Info</ColumnTitle>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white">
              <p>
                <span className="font-medium">Office: </span>
                Office — {officeStreet}
              </p>
              <p>
                <span className="font-medium">Hotline: </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">Email: </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.emailHref}>
                  {emailDisplay}
                </a>
              </p>
            </div>
          </address>
        </div>
        <p className="mt-10 border-t border-white/15 pt-5 text-center text-xs text-white/70">
          Copyright 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
