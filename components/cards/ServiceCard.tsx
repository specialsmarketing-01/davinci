import Link from "next/link";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-zinc-50/80 p-6 transition hover:border-accent/40 hover:shadow-md">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:underline"
      >
        Learn more
      </Link>
    </article>
  );
}
