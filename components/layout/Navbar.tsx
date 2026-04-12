"use client";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { cn } from "@/lib/utils";
import { propertiesMenu, servicesMenu } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePropsOpen, setMobilePropsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobilePropsOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const navLink =
    "text-sm font-medium tracking-wide text-foreground/90 transition-colors hover:text-foreground";

  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const aboutExact = normalizedPath === "/about-davinci";

  const isActive = (href: string) => {
    const current = normalizedPath;
    const target = href.replace(/\/$/, "") || "/";
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <SiteLogo onNavigate={closeMobile} className="min-w-0 shrink" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            href="/"
            className={cn(navLink, "rounded-md px-3 py-2", isActive("/") && "text-foreground")}
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={cn(
                navLink,
                "inline-flex items-center gap-1 rounded-md px-3 py-2",
                pathname.startsWith("/our-properties") && "text-foreground",
              )}
              aria-expanded="false"
              aria-haspopup="true"
            >
              Our Properties
              <Chevron open={false} />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[240px] rounded-lg border border-border bg-background py-2 shadow-xl">
                <ul className="flex flex-col">
                  {propertiesMenu.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-black/[0.03] hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className={cn(
                navLink,
                "inline-flex items-center gap-1 rounded-md px-3 py-2",
                pathname.startsWith("/services") && "text-foreground",
              )}
            >
              Services
              <Chevron open={false} />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[280px] rounded-lg border border-border bg-background py-2 shadow-xl">
                <ul className="flex flex-col">
                  {servicesMenu.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-black/[0.03] hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link
            href="/about-davinci/"
            className={cn(navLink, "rounded-md px-3 py-2", aboutExact && "text-foreground")}
          >
            About
          </Link>
          <Link
            href="/contact/"
            className={cn(navLink, "rounded-md px-3 py-2", isActive("/contact/") && "text-foreground")}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            <Link href="/" className="block rounded-md px-3 py-3 text-base font-medium" onClick={closeMobile}>
              Home
            </Link>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium"
              onClick={() => setMobilePropsOpen((v) => !v)}
            >
              Our Properties
              <Chevron open={mobilePropsOpen} />
            </button>
            {mobilePropsOpen && (
              <ul className="ml-2 border-l border-border pl-3">
                {propertiesMenu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm text-foreground/85"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <Chevron open={mobileServicesOpen} />
            </button>
            {mobileServicesOpen && (
              <ul className="ml-2 max-h-64 overflow-y-auto border-l border-border pl-3">
                {servicesMenu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm text-foreground/85"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/about-davinci/"
              className="block rounded-md px-3 py-3 text-base font-medium"
              onClick={closeMobile}
            >
              About
            </Link>
            <Link href="/contact/" className="block rounded-md px-3 py-3 text-base font-medium" onClick={closeMobile}>
              Contact
            </Link>
            <Link
              href="/contact/"
              className="mt-2 flex w-full items-center justify-center rounded-full bg-foreground py-3 text-sm font-semibold text-background"
              onClick={closeMobile}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
