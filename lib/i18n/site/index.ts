import type { NavLocale } from "@/lib/i18n/nav";
import type { SiteCopy } from "@/lib/i18n/site/en";
import { siteAr } from "@/lib/i18n/site/ar";
import { siteEn } from "@/lib/i18n/site/en";
import { siteRu } from "@/lib/i18n/site/ru";

export type { SiteCopy } from "@/lib/i18n/site/en";

const table = {
  en: siteEn,
  ar: siteAr,
  ru: siteRu,
} satisfies Record<NavLocale, SiteCopy>;

export function getSiteCopy(locale: NavLocale): SiteCopy {
  return table[locale] ?? siteEn;
}
