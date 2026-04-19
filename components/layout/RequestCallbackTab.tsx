import Link from "next/link";

/** Fixed vertical tab on the viewport edge (reference layout). */
export function RequestCallbackTab() {
  return (
    <Link
      href="/contact/"
      className="fixed right-0 top-1/2 z-30 hidden h-44 w-11 -translate-y-1/2 items-center justify-center border-y border-l border-white/10 bg-black text-[10px] font-medium uppercase tracking-[0.22em] text-white shadow-lg shadow-black/30 sm:flex"
      aria-label="Request a call back"
    >
      <span className="inline-block origin-center rotate-[-90deg] whitespace-nowrap">
        Request call back
      </span>
    </Link>
  );
}
