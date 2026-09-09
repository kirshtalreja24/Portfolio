export type SkillLevel = "Advanced" | "Proficient";

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
  level: SkillLevel;
  /** Shown in the About section's "Primary Tech Stack" summary. */
  featured?: boolean;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced", featured: true },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "GSAP", category: "Frontend", level: "Proficient" },
  { name: "Node.js", category: "Backend", level: "Advanced", featured: true },
  { name: "Express", category: "Backend", level: "Proficient", featured: true },
  { name: "PostgreSQL", category: "Backend", level: "Proficient", featured: true },
  { name: "MongoDB", category: "Backend", level: "Proficient", featured: true },
  { name: "TypeScript", category: "Languages", level: "Advanced" },
  { name: "JavaScript", category: "Languages", level: "Advanced" },
  { name: "Docker", category: "Tools", level: "Proficient", featured: true },
  { name: "Git & GitHub", category: "Tools", level: "Advanced" },
];
