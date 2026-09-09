"use client";

import { useRef } from "react";
import WebCorner, { WEB_CORNER_SIZE } from "./WebCorner";
import WebStrand from "./WebStrand";
import { skills } from "@/data/skills";
import { useScrollTimeline } from "@/lib/gsap";

const featuredSkills = skills.filter((skill) => skill.featured).map((skill) => skill.name);

const SECONDARY_ARSENAL = ["Photoshop", "Illustrator", "CapCut", "DaVinci Resolve", "Canva"];

const BIO_PARAGRAPHS = [
  "Final-year Computer Science student at FAST-NUCES Karachi, building AI-powered products and full-stack web experiences — from stroke-level diffusion models to production React and Node apps. Currently splitting time across software engineering and AI research internships, with a growing focus on generative AI and adaptive learning systems.",
  "Outside the codebase, I've taken on Media Manager, Web Developer, and Marketing Lead roles across university societies — mixing technical builds with content and design work along the way.",
];

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

          <div className="mt-6 max-w-md space-y-4 text-sm leading-relaxed text-ink/70">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

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

          <div className="mt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink/60">
              Secondary Arsenal
            </p>
            <div className="flex flex-wrap gap-2">
              {SECONDARY_ARSENAL.map((tool) => (
                <span
                  key={tool}
                  className="cursor-default rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                >
                  {tool}
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
