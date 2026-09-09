import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import SpiderDangle from "./SpiderDangle";

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

      <SpiderDangle variant="sway" size="lg" />
    </section>
  );
}
