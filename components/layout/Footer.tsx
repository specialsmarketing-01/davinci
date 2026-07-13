"use client";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact, siteName, socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
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

const mapQuery = `${contact.addressLines[1]}, ${siteName}`;

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <p className="text-body font-normal text-white">{children}</p>
      <div className="mt-2 h-px w-full bg-white" aria-hidden />
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

const socialIconButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-accent-on-dark hover:text-accent-on-dark lg:h-10 lg:w-10";

function FooterSocialLinks({ className }: { className?: string }) {
  const { site } = useNavLocale();
  const f = site.footer;

  return (
    <div
      className={cn("flex flex-wrap items-center gap-4", className)}
      role="group"
      aria-label={f.ariaSocial}
    >
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={f.whatsappLabel}
        className={socialIconButtonClass}
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.telegramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={f.telegramLabel}
        className={socialIconButtonClass}
      >
        <TelegramIcon className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.facebookHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={f.facebookLabel}
        className={socialIconButtonClass}
      >
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={f.instagramLabel}
        className={socialIconButtonClass}
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a href={contact.emailHref} aria-label={f.emailLabel} className={socialIconButtonClass}>
        <EmailIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

function FooterMobileLuxury() {
  const { site } = useNavLocale();
  const f = site.footer;
  const officeStreet = contact.addressLines[1];
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&z=16`;
  const mapAria = site.officeMap.ariaSection.replace("{siteName}", siteName);

  return (
    <div className="lg:hidden">
      <div className="relative w-full" aria-label={mapAria}>
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
          <iframe
            title={site.officeMap.iframeTitle.replace("{siteName}", siteName)}
            src={mapEmbedSrc}
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            aria-hidden
          />
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4 py-12 text-center sm:px-6 sm:py-14">
        <SiteLogo className="justify-center" />
        <p className="text-body mt-5 text-white/75">{f.tagline}</p>

        <a
          href={contact.phoneHref}
          className="mt-8 inline-block text-2xl font-light tracking-tight text-accent-on-dark transition hover:text-accent sm:text-3xl"
        >
          {contact.phoneDisplay}
        </a>

        <Link
          href="/contact/#contact-form"
          className="text-body mt-6 inline-flex w-full max-w-md items-center justify-center bg-accent px-8 py-3.5 font-medium uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110"
        >
          {f.bookCall}
        </Link>

        <FooterSocialLinks className="mt-8 justify-center" />

        <address className="text-body mt-10 space-y-2 not-italic text-white/80">
          <p>{officeStreet}</p>
          <p>{f.officeHours}</p>
          <p>
            <a className="transition hover:text-accent-on-dark hover:underline" href={contact.emailHref}>
              {contact.email}
            </a>
          </p>
        </address>

        <nav className="text-body mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2" aria-label={f.ariaUseful}>
          <Link href="/terms-and-conditions/" className="underline decoration-white/30 underline-offset-4 hover:text-accent-on-dark">
            {f.termsConditions}
          </Link>
          <Link href="/privacy-policy/" className="underline decoration-white/30 underline-offset-4 hover:text-accent-on-dark">
            {f.privacyPolicy}
          </Link>
          <Link href="/privacy-policy/" className="underline decoration-white/30 underline-offset-4 hover:text-accent-on-dark">
            {f.cookieNotice}
          </Link>
        </nav>

        <p className="text-body mt-6 text-white/45">{f.copyright}</p>
      </div>
    </div>
  );
}

function FooterDesktopClassic() {
  const { site } = useNavLocale();
  const f = site.footer;
  const officeStreet = contact.addressLines[1];
  const [emailLocal, emailHost] = contact.email.split("@");
  const emailDisplay =
    emailLocal && emailHost
      ? `${emailLocal.charAt(0).toUpperCase()}${emailLocal.slice(1)}@${emailHost}`
      : contact.email;

  return (
    <div className="hidden lg:block">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <SiteLogo />
            <FooterSocialLinks className="mt-6" />
          </div>

          <nav aria-label={f.ariaFeatured}>
            <ColumnTitle>{f.featuredTitle}</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {featuredHrefs.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-body text-white transition hover:text-accent-on-dark">
                    {f.featured[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.ariaUseful}>
            <ColumnTitle>{f.usefulTitle}</ColumnTitle>
            <ul className="mt-4 space-y-2">
              {usefulHrefs.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-body text-white transition hover:text-accent-on-dark">
                    {f.useful[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <ColumnTitle>{f.contactTitle}</ColumnTitle>
            <div className="text-body mt-4 space-y-3 text-white">
              <p>
                <span className="font-medium">{f.officePrefix} </span>
                Office — {officeStreet}
              </p>
              <p>
                <span className="font-medium">{f.hotlinePrefix} </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">{f.emailPrefix} </span>
                <a className="hover:text-accent-on-dark hover:underline" href={contact.emailHref}>
                  {emailDisplay}
                </a>
              </p>
            </div>
          </address>
        </div>

        <p className="text-body mt-10 border-t border-white/15 pt-5 text-center text-white/70">
          {f.copyright}
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-black text-white">
      <FooterMobileLuxury />
      <FooterDesktopClassic />
    </footer>
  );
}
