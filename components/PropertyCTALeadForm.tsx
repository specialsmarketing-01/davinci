"use client";

import type { FormEvent } from "react";

const fieldClass =
  "h-11 w-full rounded-sm border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900/20";

export function PropertyCTALeadForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-6 w-full max-w-[20rem] space-y-3 sm:max-w-[21rem]"
      noValidate
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
        <div>
          <label htmlFor="property-cta-name" className="sr-only">
            Name
          </label>
          <input
            id="property-cta-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="property-cta-phone" className="sr-only">
            Phone
          </label>
          <input
            id="property-cta-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="property-cta-email" className="sr-only">
          Email
        </label>
        <input
          id="property-cta-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="h-11 w-full rounded-sm bg-black text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-zinc-900"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}
