import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";
import { images } from "@/lib/placeholders";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Team | Davinci Properties Dubai",
  description:
    "Contact Davinci Properties in Dubai—call, WhatsApp, email, or send a message. Office at The Exchange Tower, Business Bay. Mon–Fri 10 AM – 6 PM.",
  path: "/contact/",
});

function ContactDetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">{label}</h3>
      <div className="mt-2 text-foreground">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Contact"
        title="CONTACT US"
        description="Reach our Dubai team by phone, email, or the form—we typically reply the same business day."
        background={images.hero}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">Contact</p>
        <h2 className="mt-2 text-center text-3xl font-light text-foreground sm:text-4xl">Our team</h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <address className="not-italic">
            <div className="space-y-10">
              <ContactDetailBlock label="Phone">
                <a className="text-xl font-light tracking-tight hover:underline" href={contact.phoneHref}>
                  {contact.phoneDisplay}
                </a>
              </ContactDetailBlock>
              <ContactDetailBlock label="Email">
                <a className="text-xl font-light tracking-tight break-all hover:underline" href={contact.emailHref}>
                  {contact.email}
                </a>
              </ContactDetailBlock>
              <ContactDetailBlock label="Address">
                <div className="max-w-sm space-y-1 text-base font-light leading-relaxed text-muted">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </ContactDetailBlock>
              <ContactDetailBlock label="Hours">
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
