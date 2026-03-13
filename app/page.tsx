import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-72 bg-[radial-gradient(closest-side,rgba(0,0,0,.06),transparent)] dark:bg-[radial-gradient(closest-side,rgba(255,255,255,.10),transparent)]" />

      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            PHOTO · STORIES · TRAVEL
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Comfort Studios
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            A minimal photoblog with clean typography, generous whitespace, and
            image-first storytelling.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:hover:bg-white/5"
            >
              Book a shoot
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[linear-gradient(135deg,rgba(0,0,0,.04),transparent)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,.10),transparent)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={projects[0]?.cover.src ?? "/window.svg"}
                alt={projects[0]?.cover.alt ?? "Featured cover"}
                fill
                className="object-contain p-14 opacity-70 dark:opacity-80"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  Featured: {projects[0]?.title ?? "Collection"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {projects[0]?.year ?? ""} ·{" "}
                  {(projects[0]?.tags ?? []).slice(0, 2).join(" / ")}
                </p>
              </div>
              <Link
                href={projects[0] ? `/portfolio/${projects[0].slug}` : "/portfolio"}
                className="shrink-0 rounded-full px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50"
              >
                Open
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Latest collections
          </h2>
          <Link
            href="/portfolio"
            className="text-sm text-zinc-600 underline decoration-black/20 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:decoration-white/20 dark:hover:text-zinc-50"
          >
            See all
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-white/5"
            >
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  className="object-contain p-12 opacity-70 transition-opacity group-hover:opacity-90 dark:opacity-80"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {project.year} · {project.tags.join(" / ")}
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {project.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
