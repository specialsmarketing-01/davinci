"use client";

import { useState } from "react";

export function GetInTouchLeadForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-sm leading-relaxed text-muted" role="status">
        Thank you—we will reach out with curated listings and updates.
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
        className="w-full bg-foreground py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-background transition hover:bg-foreground/90"
      >
        Subscribe
      </button>
    </form>
  );
}
