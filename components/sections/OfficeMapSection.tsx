import { contact, siteName } from "@/lib/site";

const mapQuery = `${contact.addressLines[1]}, ${siteName}`;

export function OfficeMapSection() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&z=16`;

  return (
    <section
      className="m-0 w-full border-y border-border p-0"
      aria-label={`Map of ${siteName} office`}
    >
      <div className="relative h-[200px] w-full overflow-hidden bg-zinc-100 sm:h-[220px] md:h-[240px]">
        <iframe
          title={`Map — ${siteName} office`}
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
