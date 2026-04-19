import { journeyStagePillars } from "@/lib/home-data";

export function JourneyStagePillarsSection() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="journey-pillars-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h2
          id="journey-pillars-heading"
          className="mx-auto max-w-3xl text-center text-3xl font-light leading-tight tracking-tight sm:text-4xl"
        >
          Guidance for every stage of your property journey
        </h2>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {journeyStagePillars.map((item) => (
            <div key={item.step} className="flex flex-col items-start text-left">
              <div className="flex w-full items-center gap-3">
                <span className="shrink-0 text-4xl font-light tabular-nums tracking-tight text-white sm:text-[2.5rem]">
                  {item.step}
                </span>
                <div className="h-px min-w-0 flex-1 max-w-[7rem] bg-zinc-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-[11px] font-normal uppercase tracking-[0.2em] text-accent sm:text-xs">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
