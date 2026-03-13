import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";
import FadeIn from "../../components/FadeIn";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-16">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          This collection doesn’t exist.
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          Project not found
        </h1>
        <Link
          href="/portfolio"
          className="mt-6 inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900"
        >
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10 sm:space-y-14">
      <FadeIn>
        <header className="space-y-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-600 underline decoration-neutral-300/80 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            Back to portfolio
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
                {project.location}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {project.year} · {project.tags.join(" / ")}
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            {project.intro}
          </p>
        </header>
      </FadeIn>

      <section className="-mx-4 space-y-8 sm:-mx-6 sm:space-y-10">
        {project.images.map((image, index) => {
          const isFull = image.layout === "full";
          const isWide = image.layout === "wide";

          let wrapperClasses =
            "relative w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900";

          if (isFull) {
            wrapperClasses += " h-[70vh] min-h-[320px]";
          } else if (isWide) {
            wrapperClasses += " mx-auto max-w-5xl h-[60vh] min-h-[280px]";
          } else {
            wrapperClasses += " mx-auto max-w-3xl h-[52vh] min-h-[260px]";
          }

          return (
            <FadeIn key={image.src} delay={index * 80}>
              <div className={wrapperClasses}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </FadeIn>
          );
        })}
      </section>
    </article>
  );
}
