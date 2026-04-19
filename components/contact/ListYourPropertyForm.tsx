"use client";

import { contact } from "@/lib/site";
import { useState } from "react";

export function ListYourPropertyForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      id="list-your-property-form"
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-zinc-50/80 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lyp-name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="lyp-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="lyp-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="lyp-email"
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
        <label htmlFor="lyp-interest" className="text-sm font-medium text-foreground">
          What Are You Interested In?
        </label>
        <select
          id="lyp-interest"
          name="interest"
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          defaultValue=""
          required
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
        <label htmlFor="lyp-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="lyp-message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-accent"
          placeholder="Tell us about your property, timeline, and how we can help."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:w-auto sm:px-10"
      >
        Send message
      </button>
      {sent && (
        <p className="text-sm text-muted" role="status">
          Thanks—this demo form does not transmit data. For a real enquiry, email{" "}
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
