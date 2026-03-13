import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Contact
      </h1>
      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
        For bookings and collaborations, send a short note with dates, location,
        and a reference mood.
      </p>

      <div className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-black">
        <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Email
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          <a className="underline decoration-black/20 dark:decoration-white/20" href="mailto:hello@comfort.studio">
            hello@comfort.studio
          </a>
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/portfolio"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:hover:bg-white/5"
          >
            Browse work
          </Link>
          <a
            href="mailto:hello@comfort.studio"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Send email
          </a>
        </div>
      </div>
    </div>
  );
}

