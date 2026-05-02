"use client";

import { useNavLocale } from "@/components/providers/LocaleProvider";
import { contact } from "@/lib/site";
import { submitLead } from "@/lib/lead-submit";
import { useState } from "react";

export function InternationalPropertiesLeadForm() {
  const { site } = useNavLocale();
  const i = site.intlLeadForm;
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
      await submitLead("international_properties", {
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        intent: String(data.get("intent") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSent(true);
      form.reset();
    } catch {
      setError(i.error);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      id="international-properties-lead-form"
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-zinc-50/80 p-6 sm:p-8"
      noValidate
    >
      <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-foreground">{i.heading}</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="intl-name" className="text-sm font-medium text-foreground">
            {i.fullName}
          </label>
          <input
            id="intl-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder={i.placeholders.name}
          />
        </div>
        <div>
          <label htmlFor="intl-phone" className="text-sm font-medium text-foreground">
            {i.phone}
          </label>
          <input
            id="intl-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder={i.placeholders.phone}
          />
        </div>
      </div>
      <div>
        <label htmlFor="intl-email" className="text-sm font-medium text-foreground">
          {i.email}
        </label>
        <input
          id="intl-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          placeholder={i.placeholders.email}
        />
      </div>
      <div>
        <label htmlFor="intl-intent" className="text-sm font-medium text-foreground">
          {i.intentLabel}
        </label>
        <select
          id="intl-intent"
          name="intent"
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          defaultValue=""
          required
        >
          <option value="" disabled>
            {i.intentPlaceholder}
          </option>
          <option value="buy-international">{i.intentBuying}</option>
          <option value="sell-international">{i.intentSelling}</option>
          <option value="both">{i.intentBoth}</option>
          <option value="other">{i.intentOther}</option>
        </select>
      </div>
      <div>
        <label htmlFor="intl-message" className="text-sm font-medium text-foreground">
          {i.message}
        </label>
        <textarea
          id="intl-message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          placeholder={i.placeholders.message}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:w-auto sm:px-10"
      >
        {sending ? i.sending : i.submit}
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
