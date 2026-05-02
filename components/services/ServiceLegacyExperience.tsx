"use client";

import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { localizeServiceLegacy } from "@/lib/i18n/localize-service-legacy";
import type { LegacyServiceContent } from "@/lib/services-data";
import { contact } from "@/lib/site";

function translateFooterLine(site: ReturnType<typeof useNavLocale>["site"], line: string): string {
  if (line === "Expert guidance on your preference.") return site.sharedContactLine.expertGuidance;
  if (line === "Our consultants are ready to assist you.") return site.sharedContactLine.consultantsReady;
  if (line === "Our team is available to help you.") return site.sharedContactLine.teamReady;
  return line;
}

export function ServiceLegacyExperience({
  slug,
  legacyEn,
}: {
  slug: string;
  legacyEn: LegacyServiceContent;
}) {
  const { locale, site } = useNavLocale();
  const L = localizeServiceLegacy(locale, slug, legacyEn);
  const emailPhrase =
    L.contactEmailPhrase === "us at" ? site.sharedContactLine.emailPhraseUsAt : site.sharedContactLine.emailPhraseAsAt;

  return (
    <main id="main-content" className="flex-1">
      {L.heroBackground ? (
        <PageHero title={L.pageH1} background={L.heroBackground} />
      ) : (
        <header className="border-b border-border bg-zinc-50">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <h1 className="text-3xl font-light uppercase tracking-[0.12em] text-foreground sm:text-4xl md:text-5xl">
              {L.pageH1}
            </h1>
          </div>
        </header>
      )}
      <article className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[40rem] text-center text-pretty">
          {L.sections.map((sec, i) => (
            <section key={i} className={i > 0 ? "mt-16 sm:mt-20" : ""}>
              <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
                {sec.h2}
              </h2>
              <div
                role="presentation"
                className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
                aria-hidden
              />
              {sec.paragraphs?.length ? (
                <div className="mx-auto mt-8 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
                  {sec.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className={
                        j === 0 && p.length < 140
                          ? "text-lg font-medium leading-snug text-foreground"
                          : undefined
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}
              {sec.bullets?.length ? (
                <ul className="mx-auto mt-6 max-w-[34rem] list-disc space-y-3 pl-6 text-left text-sm leading-[1.65] text-muted marker:text-foreground/35 sm:mt-8 sm:text-base sm:leading-[1.7]">
                  {sec.bullets.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <div className="mx-auto mt-16 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:mt-20 sm:text-base sm:leading-[1.7]">
            {L.closingParagraphs.map((p, i) => (
              <p key={`closing-${i}`}>{p}</p>
            ))}
            {L.contactLine ? (
              <p>
                {site.sharedContactLine.telPrefix}{" "}
                <a
                  className="font-medium text-foreground underline-offset-2 hover:underline"
                  href={contact.phoneHref}
                >
                  {contact.phone}
                </a>{" "}
                {site.sharedContactLine.connectorOrEmail} {emailPhrase}:{" "}
                <a
                  className="font-medium text-foreground underline-offset-2 hover:underline"
                  href={contact.emailHref}
                >
                  {contact.email}
                </a>
              </p>
            ) : null}
            {L.footerLines.map((p, i) => (
              <p key={`foot-${i}`}>{translateFooterLine(site, p)}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
