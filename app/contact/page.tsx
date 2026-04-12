import { ContactForm } from "@/components/contact/ContactForm";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";
import { images } from "@/lib/placeholders";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Davinci Properties",
  description:
    "Contact Davinci Properties for Dubai property enquiries—call, WhatsApp, email, or send a message and we will respond quickly.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Share your brief—budget, community preferences, and timeline—and we will propose a practical next step, usually the same day."
        background={images.hero}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-2 lg:px-8">
        <aside className="space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Office</h2>
          <address className="not-italic text-muted">
            <div className="space-y-2">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Phone
              </span>
              <a className="mt-1 inline-block font-medium text-foreground" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
            <p className="mt-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                WhatsApp
              </span>
              <a
                className="mt-1 inline-block font-medium text-foreground"
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us instantly
              </a>
            </p>
            <p className="mt-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Email
              </span>
              <a className="mt-1 inline-block font-medium text-foreground" href={contact.emailHref}>
                {contact.email}
              </a>
            </p>
          </address>
        </aside>
        <ContactForm />
      </div>

      <CTA
        title="Prefer a scheduled call?"
        description="Tell us the best window and whether you are buying, selling, or leasing—we will confirm a time and send a short prep checklist."
        primaryHref={contact.whatsappHref}
        primaryLabel="WhatsApp the team"
        secondaryHref="/our-properties/"
        secondaryLabel="Browse listings"
      />
    </main>
  );
}
