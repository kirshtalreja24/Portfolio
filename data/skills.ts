export type SkillLevel = "Advanced" | "Proficient";

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "GSAP", category: "Frontend", level: "Proficient" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Express", category: "Backend", level: "Proficient" },
  { name: "PostgreSQL", category: "Backend", level: "Proficient" },
  { name: "MongoDB", category: "Backend", level: "Proficient" },
  { name: "TypeScript", category: "Languages", level: "Advanced" },
  { name: "JavaScript", category: "Languages", level: "Advanced" },
  { name: "Docker", category: "Tools", level: "Proficient" },
  { name: "Git & GitHub", category: "Tools", level: "Advanced" },
];
