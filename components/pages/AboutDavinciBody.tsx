"use client";

import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function AboutDavinciBody() {
  const { site } = useNavLocale();
  const a = site.aboutPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero
        title={a.heroTitle}
        description={a.heroDescription}
        background={{
          src: "/about-davinci-skyline-night.png",
          alt: a.heroSkylineAlt,
          objectPosition: "50% 45%",
        }}
      />

      <article className="bg-background py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[40rem] px-4 text-center text-pretty sm:px-6">
          <section>
            <h2 className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              {a.overviewKicker}
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mt-8 text-sm font-medium text-foreground sm:text-base">{a.overviewLead}</p>
            <p className="mx-auto mt-6 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              {a.overviewBody}
            </p>
          </section>

          <section className="mt-16 text-left sm:mt-20">
            <h2 className="text-center text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              {a.brokerageKicker}
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <div className="mx-auto mt-8 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              <p>{a.brokerageIntro}</p>
              {a.brokerageP.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>
        </div>

        <figure className="mx-auto mt-14 w-full max-w-5xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]">
            <Image
              src="/about-davinci-architecture.png"
              alt={a.imageAlt}
              width={1024}
              height={682}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </figure>

        <div className="mx-auto max-w-[40rem] px-4 text-center text-pretty sm:px-6">
          <div className="mx-auto mt-16 max-w-[38rem] space-y-6 text-sm leading-[1.65] text-muted sm:mt-20 sm:text-base sm:leading-[1.7]">
            <p>
              {a.contactTel}{" "}
              <a className="font-medium text-foreground underline-offset-2 hover:underline" href={contact.phoneHref}>
                {contact.phone}
              </a>{" "}
              {a.contactEmailPhrase}{" "}
              <a className="font-medium text-foreground underline-offset-2 hover:underline" href={contact.emailHref}>
                {contact.email}
              </a>
            </p>
            <p>{a.guidanceLine}</p>
          </div>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              {a.approachKicker}
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              {a.approachBody}
            </p>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-foreground sm:text-sm sm:tracking-[0.24em]">
              {a.commitmentKicker}
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              {a.commitmentBody}
            </p>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-foreground sm:text-sm sm:tracking-[0.22em]">
              {a.languagesKicker}
            </h2>
            <div
              role="presentation"
              className="mx-auto mt-5 h-px w-44 bg-foreground/20 sm:mt-6 sm:w-52"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-[38rem] text-sm leading-[1.65] text-muted sm:text-base sm:leading-[1.7]">
              {a.languagesBody}
            </p>
          </section>

          <p className="mt-14 text-xs uppercase tracking-[0.18em] text-muted sm:mt-16">{a.footerLine}</p>

          <p className="mt-10 text-sm text-muted">
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/services/">
              {a.navServices}
            </Link>
            <span className="mx-2 text-zinc-300">·</span>
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/contact/">
              {a.navContact}
            </Link>
            <span className="mx-2 text-zinc-300">·</span>
            <Link className="font-semibold text-foreground underline-offset-4 hover:underline" href="/our-properties/">
              {a.navProperties}
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
