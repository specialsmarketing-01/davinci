import { SiteLogo } from "@/components/layout/SiteLogo";
import { contact, siteName } from "@/lib/site";
import Link from "next/link";

const useful = [
  { label: "About Davinci", href: "/about-davinci/" },
  { label: "Services", href: "/services/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
] as const;

const featured = [
  { label: "Buy", href: "/our-properties/" },
  { label: "Rent", href: "/rent/" },
  { label: "Sell", href: "/our-properties/sell/" },
  { label: "List your property", href: "/our-properties/list-your-property/" },
] as const;

const social = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <SiteLogo forDarkBackground className="[&_img]:h-14 sm:[&_img]:h-[3.85rem]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              A Dubai-focused real estate advisory helping clients acquire, lease, and monetize
              exceptional homes and investment assets with transparency and care.
            </p>
          </div>
          <nav aria-label="Featured links">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Featured</p>
            <ul className="mt-4 space-y-2">
              {featured.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Useful links">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Useful links</p>
            <ul className="mt-4 space-y-2">
              {useful.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-300 transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-zinc-300">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-3">
              <a className="text-sm text-accent hover:underline" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
            <p className="mt-2">
              <a className="text-sm text-zinc-300 hover:text-white" href={contact.emailHref}>
                {contact.email}
              </a>
            </p>
            <ul className="mt-6 flex flex-wrap gap-4">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-400 transition hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteName}. All rights reserved.
          </p>
          <p className="text-zinc-600">Licensed real estate marketing &amp; advisory services.</p>
        </div>
      </div>
    </footer>
  );
}
