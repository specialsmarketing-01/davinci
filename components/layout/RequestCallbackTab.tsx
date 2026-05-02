"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PhoneHandsetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Floating contact: WhatsApp + request callback — visible on all breakpoints.
 * Mobile: FAB column bottom-right for thumb reach. Desktop: stacked strip on viewport edge.
 */
export function RequestCallbackTab() {
  const { site } = useNavLocale();
  const label = site.callbackTab;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const wa = (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={() => setMobileOpen(false)}
      className={cn(
        "flex items-center justify-center bg-[#25D366] text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        "sm:h-14 sm:w-11 sm:rounded-none sm:border sm:border-black/25 sm:border-r-0",
        "h-14 w-14 rounded-full sm:rounded-none",
      )}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );

  const callback = (
    <Link
      href="/contact/"
      aria-label={label}
      onClick={() => setMobileOpen(false)}
      className={cn(
        "flex items-center justify-center border border-black/60 bg-black text-white shadow-lg transition hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "sm:h-44 sm:w-11 sm:flex-col sm:justify-center sm:border-black/70 sm:bg-black sm:p-2",
        "h-14 w-14 rounded-full sm:rounded-none",
      )}
    >
      <span className="hidden sm:flex sm:max-h-full sm:flex-1 sm:items-center sm:justify-center">
        <span className="inline-block max-w-[9rem] origin-center rotate-[-90deg] whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em]">
          {label}
        </span>
      </span>
      <PhoneHandsetIcon className="h-6 w-6 sm:hidden" />
    </Link>
  );

  const mobileWaClasses = cn(
    "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  );

  return (
    <>
      {/* Mobile — bottom-right collapsible FAB stack (toggle taps to expand upward) */}
      <div className={cn("fixed bottom-28 right-4 z-30 flex flex-col-reverse items-center gap-3 sm:hidden", "pointer-events-none [&_*]:pointer-events-auto")}>
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-haspopup="true"
          aria-controls="mobile-contact-fab-actions"
          id="mobile-contact-fab-trigger"
          onClick={() => setMobileOpen((o) => !o)}
          className={cn(
            mobileWaClasses,
            "pointer-events-auto border-2 border-black/15",
          )}
        >
          {mobileOpen ? (
            <ChevronDownIcon className="h-7 w-7" aria-hidden />
          ) : (
            <WhatsAppIcon className="h-7 w-7" aria-hidden />
          )}
          <span className="sr-only">{mobileOpen ? "Hide contact shortcuts" : "Show WhatsApp & request callback"}</span>
        </button>
        {mobileOpen ? (
          <div
            id="mobile-contact-fab-actions"
            role="group"
            aria-labelledby="mobile-contact-fab-trigger"
            className="flex flex-col gap-3"
          >
            {wa}
            {callback}
          </div>
        ) : null}
      </div>

      {/* Desktop — right edge */}
      <div
        className={cn(
          "fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col sm:flex",
          "pointer-events-none [&>*]:pointer-events-auto",
        )}
      >
        {wa}
        {callback}
      </div>
    </>
  );
}
