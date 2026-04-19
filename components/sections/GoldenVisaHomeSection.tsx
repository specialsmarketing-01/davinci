import Image from "next/image";

const bullets = [
  "Renewable 5- or 10-year residence; sponsor family where rules allow.",
  "Property-led routes often start from AED 2M—we keep your plan aligned with current requirements.",
] as const;

export function GoldenVisaHomeSection() {
  return (
    <section
      className="border-b border-white/10 bg-black py-16 text-white sm:py-24"
      aria-labelledby="golden-visa-home-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto flex w-full max-w-xl justify-center lg:mx-0 lg:max-w-none">
            <Image
              src="/golden-visa-home-promo.png"
              alt="UAE Golden Visa card — 10-year residency graphic with UAE emblem and Dubai skyline"
              width={900}
              height={675}
              className="h-auto w-full max-w-md object-contain lg:max-w-lg"
              sizes="(max-width: 1024px) 100vw, 448px"
              priority={false}
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Golden Visa</p>
            <h2
              id="golden-visa-home-heading"
              className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl"
            >
              UAE Golden Visa
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Long-term residency for investors and select talents. We help you see how your property
              goals fit eligibility, documents, and next steps.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
