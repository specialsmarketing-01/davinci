import { siteName } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found on Davinci Properties.",
  path: "/404/",
  noindex: true,
});

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for may have moved or no longer exists on {siteName}.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center bg-foreground px-8 py-3 text-sm font-semibold text-accent transition hover:bg-foreground/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
