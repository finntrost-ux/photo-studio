import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <p className="text-sm text-zinc-600 dark:text-zinc-300">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Page not found
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        The page you’re looking for doesn’t exist (or has moved).
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Go home
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:hover:bg-white/5"
        >
          View portfolio
        </Link>
      </div>
    </div>
  );
}

