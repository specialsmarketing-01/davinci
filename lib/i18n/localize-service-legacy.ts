import type { LegacyServiceContent } from "@/lib/services-data";
import type { NavLocale } from "@/lib/i18n/nav";

/**
 * Full translated legacy bodies per locale/slug. Keys omitted fall back to English `en` from services-data.
 * Add entries over time; contact/footer chrome is translated separately in the client view.
 */
const PACK: Partial<
  Record<NavLocale, Partial<Record<string, LegacyServiceContent>>>
> = {
  ar: {},
  ru: {},
};

export function localizeServiceLegacy(
  locale: NavLocale,
  slug: string,
  en: LegacyServiceContent,
): LegacyServiceContent {
  if (locale === "en") return en;
  const alt = PACK[locale]?.[slug];
  return alt ?? en;
}
