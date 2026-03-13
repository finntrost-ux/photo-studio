import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import ProjectCard from "./components/ProjectCard";
import FadeIn from "./components/FadeIn";

export default function Home() {
  const featured = projects[0];

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Fullscreen hero */}
      <section className="relative -mx-4 -mt-2 h-[calc(100vh-4rem)] overflow-hidden rounded-none bg-neutral-900 sm:-mx-6 sm:rounded-3xl">
        <div className="relative h-full w-full">
          {featured && (
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-neutral-950/55 mix-blend-multiply" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pb-10 pt-20 sm:px-10 sm:pb-14 sm:pt-24 lg:px-16">
          <div className="flex justify-between text-xs font-medium uppercase tracking-[0.22em] text-neutral-300">
            <span>Comfort Studios — Finn Trost</span>
            <span>Berlin · Kreuzberg</span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.28em] text-neutral-300">
                Documentary moments · Urban poetry
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
                A Berlin-based documentary and street photography portfolio.
              </h1>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-200">
                <span>Documentary · Street · Editorial</span>
                <span className="h-px w-10 bg-neutral-400/70" />
                {featured && (
                  <span className="truncate">
                    Latest: {featured.title} · {featured.year}
                  </span>
                )}
              </div>
            </FadeIn>
          </div>

          <div className="flex items-center justify-between">
            <FadeIn delay={260}>
              <div className="flex gap-3 text-xs text-neutral-200">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border border-neutral-200/70 bg-neutral-50/10 px-4 py-2 font-medium uppercase tracking-[0.16em] text-neutral-50 backdrop-blur-sm transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  View portfolio
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-neutral-500/60 px-4 py-2 font-medium uppercase tracking-[0.16em] text-neutral-100/90 transition-colors hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  About the work
                </Link>
              </div>
            </FadeIn>

            <a
              href="#projects"
              className="group hidden flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 sm:flex"
            >
              Scroll
              <span className="h-12 w-px origin-top scale-y-100 bg-neutral-400/80 transition-transform duration-500 group-hover:scale-y-125" />
            </a>
          </div>
        </div>
      </section>

      {/* Editorial grid */}
      <section id="projects" className="space-y-6">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
                Portfolio
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-600 underline decoration-neutral-300/80 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              View all projects
            </Link>
          </div>
        </FadeIn>

        <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 60}>
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
