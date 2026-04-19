import { whyUs } from "@/lib/home-data";
import { images } from "@/lib/placeholders";
import Image from "next/image";

export function WhyUs() {
  return (
    <section className="border-y border-border bg-white py-16 sm:py-24" aria-labelledby="why-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-[420px]">
          <Image
            src={images.interior.src}
            alt={images.interior.alt}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-xs text-sm font-medium text-white">
            Interiors, light, and location—curated with the same rigor we apply to contracts and
            compliance.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Why Davinci</p>
          <h2 id="why-heading" className="mt-3 text-3xl font-light sm:text-4xl">
            A partner-led experience built for Dubai&apos;s pace
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We combine hospitality-level responsiveness with institutional discipline—so you always
            know what happens next.
          </p>
          <ol className="mt-10 space-y-8">
            {whyUs.map((item) => (
              <li key={item.step} className="flex gap-5">
                <span className="text-2xl text-accent">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-normal text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
