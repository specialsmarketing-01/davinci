"use client";

import { contact } from "@/lib/site";
import { submitLead } from "@/lib/lead-submit";
import { useState } from "react";

export function ContactForm() {
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
      await submitLead("contact", {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
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
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-zinc-50/80 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className="text-sm font-medium text-foreground">
          What Are You Interested In?
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="buying">Buying</option>
          <option value="selling">Selling</option>
          <option value="area-information">Area Information</option>
          <option value="home-valuation">Home Valuation</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          placeholder="Tell us about timelines, budget range, and communities you are considering."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:w-auto sm:px-10"
      >
        {sending ? "Sending..." : "Send message"}
      </button>
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
  );
}
