"use client";

import { contact } from "@/lib/site";
import { submitLead } from "@/lib/lead-submit";
import { useState } from "react";

export function SellPropertyLeadSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError(null);

    try {
      await submitLead("sell_property", {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        interest: String(data.get("interest") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSent(true);
      form.reset();
    } catch {
      setError("We could not send your message. Please email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="border-y border-border bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="sell-lead-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="lg:border-r lg:border-border lg:pr-12">
            <h2 id="sell-lead-heading" className="max-w-md text-2xl font-light uppercase leading-snug tracking-[0.18em] text-foreground sm:text-3xl md:text-[1.75rem] md:leading-tight">
              <span className="block">Committed to your</span>
              <span className="relative mt-3 inline-block">
                <svg
                  className="pointer-events-none absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.75rem)] text-accent sm:-inset-x-4 sm:-inset-y-2.5 sm:w-[calc(100%+2.25rem)]"
                  viewBox="0 0 340 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M18 46c12-28 118-40 198-32 52 5 108 22 112 44 4 24-48 38-128 42-96 5-184-18-182-54Z"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.92"
                  />
                </svg>
                <span className="relative uppercase tracking-[0.18em] text-zinc-400">Successful</span>
              </span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="sell-lead-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="sell-lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label htmlFor="sell-lead-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="sell-lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="sell-lead-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="sell-lead-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone"
                    className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label htmlFor="sell-lead-interest" className="sr-only">
                    What are you interested in
                  </label>
                  <select
                    id="sell-lead-interest"
                    name="interest"
                    className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      What Are You Interested In?
                    </option>
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                    <option value="area-information">Area Information</option>
                    <option value="home-valuation">Home Valuation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="sell-lead-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="sell-lead-message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
                />
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-md bg-accent px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:bg-accent/90"
                >
                  {sending ? "Sending..." : "Send"}
                </button>
              </div>
              {error && (
                <p className="text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}
              {sent && (
                <p className="text-sm text-muted" role="status">
                  Thanks. We have received your enquiry. You can also email{" "}
                  <a className="font-medium text-foreground underline" href={contact.emailHref}>
                    {contact.email}
                  </a>{" "}
                  or call{" "}
                  <a className="font-medium text-foreground underline" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
