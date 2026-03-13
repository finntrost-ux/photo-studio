import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          Comfort Studios — Finn Trost
        </h1>
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          Documentary moments. Urban poetry.
        </p>
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
          Finn is a Berlin-based documentary and street photographer working
          between Kreuzberg corners, subway platforms, and small rooms with
          long light. The work sits somewhere between quiet observation and
          fashion editorial—built around gesture, rhythm, and how a city looks
          when you slow it down.
        </p>
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
          Comfort Studios is a loose name for an ongoing archive: nights out,
          in-between journeys, portraits of friends and strangers, and the
          small cinematic accidents that happen when you always carry a camera.
        </p>

        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            Based in
          </p>
          <p>Berlin, Kreuzberg</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@comfort.studio"
            className="inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Email
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            View portfolio
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200 dark:bg-neutral-900">
          <Image
            src="/portrait/finn-trost.jpg"
            alt="Portrait of Finn Trost"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

