import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-surface-soft py-32">
      <div className="mx-auto max-w-6xl px-6 lg:pl-40">
        <p className="eyebrow mb-4">Featured Works</p>
        <h2 className="section-heading mb-12">Projects.</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
