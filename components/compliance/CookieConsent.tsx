"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CookiePreferences = {
  essential: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  consentedAt: string;
  method: "accept_all" | "reject_optional" | "save_preferences";
};

const STORAGE_KEY = "davinci_cookie_preferences_v1";

function savePreferences(preferences: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function CookieConsent() {
  const { site } = useNavLocale();
  const c = site.cookie;
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) return;
    setVisible(true);
  }, []);

  const basePayload = useMemo(
    () => ({
      essential: true as const,
      functional,
      analytics,
      marketing,
      consentedAt: new Date().toISOString(),
    }),
    [functional, analytics, marketing],
  );

  function acceptAll() {
    savePreferences({
      ...basePayload,
      functional: true,
      analytics: true,
      marketing: true,
      method: "accept_all",
    });
    setVisible(false);
  }

  function rejectOptional() {
    savePreferences({
      ...basePayload,
      functional: false,
      analytics: false,
      marketing: false,
      method: "reject_optional",
    });
    setVisible(false);
  }

  function saveCustom() {
    savePreferences({
      ...basePayload,
      method: "save_preferences",
    });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-[90] rounded-xl border border-border bg-white p-4 shadow-xl sm:inset-x-6 sm:bottom-6 sm:p-5 lg:mx-auto lg:max-w-3xl"
      role="dialog"
      aria-live="polite"
      aria-label={c.ariaLabel}
    >
      <p className="text-sm font-semibold text-foreground">{c.heading}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
      <p className="mt-2 text-xs text-muted">
        {c.privacyPrefix}{" "}
        <Link className="underline hover:text-foreground" href="/privacy-policy/">
          {c.privacyPolicy}
        </Link>{" "}
        {c.termsMiddle}{" "}
        <Link className="underline hover:text-foreground" href="/terms-and-conditions/">
          {c.termsConditions}
        </Link>
        .
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={acceptAll}
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-background"
        >
          {c.acceptAll}
        </button>
        <button
          type="button"
          onClick={rejectOptional}
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
        >
          {c.rejectOptional}
        </button>
        <button
          type="button"
          onClick={() => setCustomizeOpen((open) => !open)}
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
          aria-expanded={customizeOpen}
          aria-controls="cookie-customize"
        >
          {c.customize}
        </button>
      </div>

      {customizeOpen ? (
        <div id="cookie-customize" className="mt-4 rounded-lg border border-border bg-zinc-50 p-3">
          <div className="space-y-2 text-sm">
            <label className="flex items-center justify-between gap-4">
              <span>{c.essential}</span>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-accent" />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>{c.functional}</span>
              <input
                type="checkbox"
                checked={functional}
                onChange={(e) => setFunctional(e.target.checked)}
                className="h-4 w-4 accent-accent"
              />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>{c.analytics}</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-accent"
              />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>{c.marketing}</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4 accent-accent"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={saveCustom}
            className="mt-3 rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-background"
          >
            {c.savePreferences}
          </button>
        </div>
      ) : null}
    </aside>
  );
}
