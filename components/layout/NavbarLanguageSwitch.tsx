"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import type { NavLocale } from "@/lib/i18n/nav";
import { cn } from "@/lib/utils";

const options: { code: NavLocale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "ع" },
  { code: "ru", label: "Русский", short: "RU" },
];

export function NavbarLanguageSwitch({ isHome }: { isHome: boolean }) {
  const { locale, setLocale, t } = useNavLocale();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center rounded-md border p-0.5",
        isHome ? "border-white/45 bg-black/10 backdrop-blur-sm" : "border-border bg-background/80",
      )}
      role="group"
      aria-label={t.languageSwitcher}
    >
      {options.map(({ code, label, short }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            title={label}
            aria-pressed={active}
            className={cn(
              "min-w-[2.25rem] rounded px-2 py-1 text-xs font-semibold tracking-wide transition-colors",
              isHome
                ? active
                  ? "bg-white text-black"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
                : active
                  ? "bg-foreground text-background"
                  : "text-foreground/75 hover:bg-black/[0.06] hover:text-foreground",
            )}
          >
            <span className="sm:hidden">{short}</span>
            <span className="hidden sm:inline">{code === "ar" ? label : short}</span>
          </button>
        );
      })}
    </div>
  );
}
