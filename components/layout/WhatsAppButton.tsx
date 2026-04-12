import { contact } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M16.003 3C9.385 3 4 8.033 4 14.235c0 2.195.58 4.092 1.597 5.873L4 29l9.34-2.45c1.71.47 3.525.72 5.663.72 6.618 0 12.003-5.033 12.003-11.235C31.006 8.033 25.62 3 16.003 3zm6.54 15.54c-.29.81-1.7 1.55-2.37 1.65-.61.1-1.4.15-2.26-.15-.52-.15-1.19-.44-2.06-.86-3.63-1.55-5.99-5.18-6.17-5.42-.18-.24-1.47-1.96-1.47-3.74 0-1.78.93-2.66 1.26-3.02.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22 0 .52-.08.81.62.29.71.99 2.45 1.08 2.63.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.52 1.39 1.24 2.56 1.63 2.92 1.81.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.68z" />
      </svg>
    </a>
  );
}
