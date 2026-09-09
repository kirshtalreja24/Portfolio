"use client";

import { useRef } from "react";
import WebCorner, { WEB_CORNER_SIZE } from "./WebCorner";
import HeroVisual from "./HeroVisual";
import { useIntroReveal } from "@/lib/gsap";

export default function Hero() {
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useIntroReveal(introRef, (tl) => {
    tl.from(eyebrowRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }).from(
      [line1Ref.current, line2Ref.current],
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      },
      "-=0.2"
    );
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-24"
    >
      <HeroVisual />

      <WebCorner
        className={`pointer-events-none absolute -left-10 -top-10 z-10 opacity-60 ${WEB_CORNER_SIZE}`}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div ref={introRef} className="max-w-xl">
          <p ref={eyebrowRef} className="eyebrow mb-4 motion-reduce:opacity-100">
            Your friendly neighborhood engineer
          </p>
          <h1 className="font-headline font-bold text-5xl italic uppercase leading-none tracking-tight text-ink headline-shadow md:text-7xl">
            <span ref={line1Ref} className="block motion-reduce:opacity-100">
              Kirsh
            </span>
            <span ref={line2Ref} className="block motion-reduce:opacity-100">
              Talreja.
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Explore Projects
            </a>
            {/* TODO(content): point at the real resume file once it's added to public/assets/resume.pdf */}
            <a
              href="/assets/resume.pdf"
              download
              className="rounded-lg bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-ink/80"
            >
              ↓ SDE_Resume.pdf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
