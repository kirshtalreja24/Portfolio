import Image from "next/image";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

// TODO(content): swap the hanging mask thumbnail for a full-body illustration asset.
export default function Skills() {
  return (
    <section id="skills" className="web-watermark relative overflow-hidden bg-surface py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">Arsenal &amp; Expertise</p>
        <h2 className="section-heading mb-12">Technical Skills.</h2>

        <div className="grid gap-4 pr-0 sm:grid-cols-2 lg:pr-40">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 origin-top animate-sway lg:block">
        <div className="mx-auto h-24 w-0.5 bg-primary/50" />
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary shadow-xl">
          <Image
            src="/assets/spiderman-mask.png"
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
