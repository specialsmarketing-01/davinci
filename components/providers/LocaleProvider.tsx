"use client";

import {
  NAV_LOCALE_STORAGE_KEY,
  type NavLocale,
  isNavLocale,
  navTranslations,
} from "@/lib/i18n/nav";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LocaleContextValue = {
  locale: NavLocale;
  setLocale: (locale: NavLocale) => void;
  t: (typeof navTranslations)["en"];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<NavLocale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(NAV_LOCALE_STORAGE_KEY) : null;
      if (isNavLocale(raw)) setLocaleState(raw);
    } catch {
      // ignore quota / privacy mode
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(NAV_LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = locale === "ar" ? "ar" : locale === "ru" ? "ru" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, hydrated]);

  const setLocale = useCallback((next: NavLocale) => setLocaleState(next), []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: navTranslations[locale],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useNavLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useNavLocale must be used within LocaleProvider");
  return ctx;
}
