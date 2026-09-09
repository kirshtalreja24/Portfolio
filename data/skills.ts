export type SkillLevel = "Advanced" | "Proficient";

export interface Skill {
  name: string;
  category: "Languages" | "AI & ML" | "Web & Mobile" | "Backend & Data" | "Tools";
  level: SkillLevel;
  /** Shown in the About section's "Primary Tech Stack" summary. */
  featured?: boolean;
}

export const skills: Skill[] = [
  { name: "Python", category: "Languages", level: "Advanced", featured: true },
  { name: "C++", category: "Languages", level: "Proficient" },
  { name: "JavaScript", category: "Languages", level: "Advanced" },

  { name: "PyTorch", category: "AI & ML", level: "Advanced", featured: true },
  { name: "TensorFlow", category: "AI & ML", level: "Advanced" },
  { name: "Computer Vision", category: "AI & ML", level: "Proficient" },
  { name: "NLP", category: "AI & ML", level: "Proficient" },

  { name: "React", category: "Web & Mobile", level: "Advanced", featured: true },
  { name: "React Native", category: "Web & Mobile", level: "Proficient" },
  { name: "Next.js", category: "Web & Mobile", level: "Advanced" },
  { name: "Node.js", category: "Web & Mobile", level: "Advanced", featured: true },
  { name: "FastAPI", category: "Web & Mobile", level: "Proficient", featured: true },
  { name: "Tailwind CSS", category: "Web & Mobile", level: "Advanced" },

  { name: "PostgreSQL", category: "Backend & Data", level: "Proficient", featured: true },
  { name: "MongoDB", category: "Backend & Data", level: "Proficient" },
  { name: "Supabase", category: "Backend & Data", level: "Proficient" },

  { name: "Git & GitHub", category: "Tools", level: "Advanced" },
];
