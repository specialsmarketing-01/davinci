"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";

export function SkipNavLink() {
  const { t } = useNavLocale();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
    >
      {t.skipToMain}
    </a>
  );
}
