"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useScrollTimeline } from "@/lib/gsap";

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollTimeline(
    headerRef,
    (tl) => {
      tl.from([eyebrowRef.current, headingRef.current], {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
      });
    },
    { start: "top 80%" }
  );

  return (
    <section id="projects" className="relative bg-surface-soft py-32">
      <div className="mx-auto max-w-6xl px-6 lg:pl-40">
        <div ref={headerRef}>
          <p ref={eyebrowRef} className="eyebrow mb-4 motion-reduce:opacity-100">
            Featured Works
          </p>
          <h2 ref={headingRef} className="section-heading mb-12 motion-reduce:opacity-100">
            Projects.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
