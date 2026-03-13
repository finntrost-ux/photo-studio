import { projects } from "../../../data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 8 }}>{project.title}</h1>
      <p style={{ marginTop: 0, opacity: 0.7 }}>
        {project.year} · {project.tags.join(" / ")}
      </p>
      <p style={{ maxWidth: 700 }}>{project.intro}</p>
    </div>
  );
}
