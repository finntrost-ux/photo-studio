import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <span className="rounded-md px-2 py-1 transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/10">
            Comfort Studios
          </span>
          <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
            Finn Trost
          </span>
        </Link>

        <div className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
          <Link
            href="/portfolio"
            className="rounded-md px-3 py-2 transition-colors hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/10 dark:hover:text-zinc-50"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 transition-colors hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/10 dark:hover:text-zinc-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 transition-colors hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/10 dark:hover:text-zinc-50"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}