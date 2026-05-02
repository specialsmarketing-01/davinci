"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact } from "@/lib/site";
import { submitLead } from "@/lib/lead-submit";
import { useState } from "react";

export function ContactForm() {
  const { site } = useNavLocale();
  const cf = site.contactForm;
  const ft = site.formThanks;
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
      setError(cf.error);
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
            {cf.fullName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder={cf.placeholders.name}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {cf.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder={cf.placeholders.email}
          />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className="text-sm font-medium text-foreground">
          {cf.interestLabel}
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          defaultValue=""
        >
          <option value="" disabled>
            {cf.placeholderOption}
          </option>
          <option value="buying">{cf.buying}</option>
          <option value="selling">{cf.selling}</option>
          <option value="area-information">{cf.areaInformation}</option>
          <option value="home-valuation">{cf.homeValuation}</option>
          <option value="other">{cf.other}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {cf.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          placeholder={cf.placeholders.message}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:w-auto sm:px-10"
      >
        {sending ? cf.sending : cf.submit}
      </button>
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      {sent && (
        <p className="text-sm text-muted" role="status">
          {ft.received}{" "}
          {ft.alsoEmail}{" "}
          <a className="font-medium text-foreground underline" href={contact.emailHref}>
            {contact.email}
          </a>{" "}
          {ft.orCall}{" "}
          <a className="font-medium text-foreground underline" href={contact.phoneHref}>
            {contact.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
