"use client";

import { useRef } from "react";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import SpiderDangle from "./SpiderDangle";
import Sticker, { STICKERS } from "./Sticker";
import { useScrollTimeline } from "@/lib/gsap";

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollTimeline(
    headerRef,
    (tl) => {
      tl.from([eyebrowRef.current, headingRef.current], {
        scale: 0.7,
        rotate: -6,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.1,
      });
    },
    { start: "top 80%" }
  );

  return (
    <section id="skills" className="web-watermark relative overflow-hidden bg-surface py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headerRef}>
          <p ref={eyebrowRef} className="eyebrow mb-4 motion-reduce:opacity-100">
            Arsenal &amp; Expertise
          </p>
          <h2 ref={headingRef} className="section-heading mb-12 motion-reduce:opacity-100">
            Technical Skills.
          </h2>
        </div>

        <div className="grid gap-4 pr-0 sm:grid-cols-2 lg:pr-40">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <SpiderDangle variant="sway" size="lg" />
      <Sticker src={STICKERS.exclaim} className="bottom-12 left-10" size={64} rotate={10} />
    </section>
  );
}
