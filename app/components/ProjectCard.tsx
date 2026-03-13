import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../data/projects";

type Variant = "grid" | "list";

type Props = {
  project: Project;
  variant?: Variant;
  index?: number;
};

export default function ProjectCard({ project, variant = "grid", index = 0 }: Props) {
  const href = `/portfolio/${project.slug}`;

  const gridLayout =
    variant === "grid"
      ? index % 5 === 0
        ? "md:col-span-2 md:row-span-2"
        : index % 3 === 0
        ? "md:col-span-2"
        : ""
      : "";

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 text-left transition-all duration-500 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 ${gridLayout}`}
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-neutral-200 dark:bg-neutral-900">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={
            variant === "grid"
              ? "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              : "(min-width: 1024px) 1024px, 100vw"
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 text-neutral-50">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
              {project.location}
            </p>
            <h2 className="mt-1 truncate text-lg font-semibold leading-tight sm:text-xl">
              {project.title}
            </h2>
            <p className="mt-1 text-xs text-neutral-300">
              {project.year} · {project.tags.join(" / ")}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-500/60 bg-neutral-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-200 backdrop-blur-sm group-hover:border-neutral-100 group-hover:bg-neutral-50 group-hover:text-neutral-900">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

