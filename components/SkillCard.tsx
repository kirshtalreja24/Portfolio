import type { Skill } from "@/data/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-surface p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-ink">{skill.name}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${
            skill.level === "Advanced"
              ? "bg-primary/10 text-primary"
              : "bg-ink/5 text-ink/70"
          }`}
        >
          {skill.level}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-neutral">
        {skill.category}
      </p>
    </div>
  );
}
