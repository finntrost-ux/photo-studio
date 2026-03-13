import { projects } from "../../../data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-16">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          This collection doesn’t exist.
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Project not found
        </h1>
        <Link
          href="/portfolio"
          className="mt-6 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/10"
        >
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 underline decoration-black/20 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:decoration-white/20 dark:hover:text-zinc-50"
        >
          Back to portfolio
        </Link>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {project.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {project.year} · {project.tags.join(" / ")}
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {project.intro}
        </p>
      </header>

      <section className="overflow-hidden rounded-3xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            className="object-contain p-16 opacity-80"
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Gallery
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.gallery.length} images
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-black"
            >
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-12 opacity-70"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
