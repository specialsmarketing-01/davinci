import { ContactPageBody } from "@/components/pages/ContactPageBody";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Team | Davinci Properties Dubai",
  description:
    "Contact Davinci Properties in Dubai—call, email, or send a message. Office at The Exchange Tower, Business Bay. Mon–Fri 10 AM – 6 PM.",
  path: "/contact/",
});

export default function ContactPage() {
  return <ContactPageBody />;
}
