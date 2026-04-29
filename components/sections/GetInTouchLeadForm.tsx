"use client";

import { submitLead } from "@/lib/lead-submit";
import { useState } from "react";

export function GetInTouchLeadForm() {
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
      await submitLead("get_in_touch", {
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
      });
      setSent(true);
      form.reset();
    } catch {
      setError("We could not submit your request right now.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm leading-relaxed text-muted" role="status">
        Thank you. We have received your request and will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <h2
        id="get-in-touch-heading"
        className="text-lg font-normal uppercase tracking-[0.12em] text-foreground"
      >
        Get in touch
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="sr-only">
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Name"
            className="w-full border border-zinc-200 bg-white px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="sr-only">
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Phone"
            className="w-full border border-zinc-200 bg-white px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="lead-email" className="sr-only">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
          className="w-full border border-zinc-200 bg-white px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-foreground py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-background transition hover:bg-foreground/90"
      >
        {sending ? "Sending..." : "Subscribe"}
      </button>
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
