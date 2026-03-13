import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-neutral-50/80 backdrop-blur-sm supports-[backdrop-filter]:bg-neutral-50/60 dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-50"
        >
          <span className="rounded-md px-2 py-1 transition-colors group-hover:bg-neutral-200/70 dark:group-hover:bg-neutral-800/70">
            Comfort Studios
          </span>
          <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">
            Finn Trost
          </span>
        </Link>

        <div className="flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-300">
          <Link
            href="/portfolio"
            className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-200/70 hover:text-neutral-950 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-50"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-200/70 hover:text-neutral-950 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-200/70 hover:text-neutral-950 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-50"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}