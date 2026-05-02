"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact } from "@/lib/site";
import { images } from "@/lib/placeholders";
import type { ReactNode } from "react";

function ContactDetailBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">{label}</h3>
      <div className="mt-2 text-foreground">{children}</div>
    </div>
  );
}

export function ContactPageBody() {
  const { site } = useNavLocale();
  const p = site.contactPage;

  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow={p.heroEyebrow}
        title={p.heroTitle}
        description={p.heroDescription}
        background={images.hero}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">
          {p.sectionKicker}
        </p>
        <h2 className="mt-2 text-center text-3xl font-light text-foreground sm:text-4xl">{p.sectionHeading}</h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <address className="not-italic">
            <div className="space-y-10">
              <ContactDetailBlock label={p.labelPhone}>
                <a className="text-xl font-light tracking-tight hover:underline" href={contact.phoneHref}>
                  {contact.phoneDisplay}
                </a>
              </ContactDetailBlock>
              <ContactDetailBlock label={p.labelEmail}>
                <a className="text-xl font-light tracking-tight break-all hover:underline" href={contact.emailHref}>
                  {contact.email}
                </a>
              </ContactDetailBlock>
              <ContactDetailBlock label={p.labelAddress}>
                <div className="max-w-sm space-y-1 text-base font-light leading-relaxed text-muted">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </ContactDetailBlock>
              <ContactDetailBlock label={p.labelHours}>
                <div className="space-y-1 text-base font-light leading-relaxed text-muted">
                  {contact.officeHours.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </ContactDetailBlock>
            </div>
          </address>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
