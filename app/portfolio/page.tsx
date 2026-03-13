import Link from "next/link";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Portfolio</h1>

      <div style={{ marginTop: 24, display: "grid", gap: 20 }}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              padding: 20,
              display: "block",
            }}
          >
            <h2 style={{ margin: "0 0 8px 0" }}>{project.title}</h2>
            <p style={{ margin: "0 0 8px 0", opacity: 0.7 }}>
              {project.year} · {project.tags.join(" / ")}
            </p>
            <p style={{ margin: 0 }}>{project.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
