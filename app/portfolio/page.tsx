import Link from "next/link";
import { projects } from "../../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
              Portfolio
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              A vertical index of ongoing and completed projects—street,
              documentary, and editorial work from Berlin and beyond.
            </p>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            {projects.length} projects
          </div>
        </div>
      </FadeIn>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 80}>
            <ProjectCard project={project} variant="list" />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div className="border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          <p>Documentary moments. Urban poetry.</p>
        </div>
      </FadeIn>
    </div>
  );
}
