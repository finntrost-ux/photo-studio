import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Portfolio
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            A curated feed of collections. Add your real photos in `public/` and
            update `data/projects.ts` to point covers and galleries to them.
          </p>
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          {projects.length} collections
        </div>
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group mb-5 block break-inside-avoid overflow-hidden rounded-2xl border border-black/5 bg-white transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-white/5"
          >
            <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                className="object-contain p-12 opacity-70 transition-opacity group-hover:opacity-95 dark:opacity-80"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-medium text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {project.year} · {project.tags.join(" / ")}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium text-zinc-700 dark:border-white/15 dark:text-zinc-300">
                  Open
                </span>
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.intro}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
