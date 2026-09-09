"use client";

import { useRef } from "react";
import WebCorner, { WEB_CORNER_SIZE } from "./WebCorner";
import WebStrand from "./WebStrand";
import { skills } from "@/data/skills";
import { useScrollTimeline } from "@/lib/gsap";

const featuredSkills = skills.filter((skill) => skill.featured).map((skill) => skill.name);

// TODO(content): replace with real bio copy once resume details are provided.
const BIO =
  "A full-stack engineer who enjoys turning complex problems into simple, elegant interfaces — currently building web experiences that are fast, accessible, and a little fun to use.";

export default function About() {
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollTimeline(
    introRef,
    (tl) => {
      tl.from([eyebrowRef.current, headingRef.current], {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: 0.15,
      });
    },
    { start: "top 80%" }
  );

  return (
    <section id="about" className="web-watermark relative bg-surface-soft py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div ref={introRef}>
          <WebCorner
            className={`pointer-events-none absolute -left-10 -top-10 z-10 opacity-60 ${WEB_CORNER_SIZE}`}
          />

          <p ref={eyebrowRef} className="eyebrow mb-4 motion-reduce:opacity-100">
            🕸 Behind the Mask
          </p>
          <h2 ref={headingRef} className="section-heading motion-reduce:opacity-100">
            KIRSH
            <br />
            TALREJA.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">{BIO}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink/60">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <WebStrand />
      </div>
    </section>
  );
}
