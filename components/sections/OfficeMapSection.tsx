"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact, siteName } from "@/lib/site";

const mapQuery = `${contact.addressLines[1]}, ${siteName}`;

export function OfficeMapSection() {
  const { site } = useNavLocale();
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&z=16`;

  const aria = site.officeMap.ariaSection.replace("{siteName}", siteName);

  return (
    <section
      className="m-0 w-full border-y border-border p-0"
      aria-label={aria}
    >
      <div className="relative h-[200px] w-full overflow-hidden bg-zinc-100 sm:h-[220px] md:h-[240px]">
        <iframe
          title={site.officeMap.iframeTitle.replace("{siteName}", siteName)}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
