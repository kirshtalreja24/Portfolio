import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-ink">{project.title}</h3>
        <ExternalLink
          className="mt-1 h-5 w-5 shrink-0 text-ink/40 transition-colors group-hover:text-primary"
          strokeWidth={2}
        />
      </div>
      <p className="mt-3 text-sm text-neutral">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
