export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "InkMimic",
    description:
      "AI-powered handwriting generation platform that replicates individual handwriting styles with a stroke-level diffusion model — typed-to-handwriting generation, style analysis, and web + mobile apps on a FastAPI backend.",
    stack: ["Python", "PyTorch", "FastAPI", "React", "React Native", "Supabase"],
    link: "https://github.com/kirshtalreja24",
  },
  {
    title: "CGAN Movie Recommender",
    description:
      "Conditional-GAN recommender trained on the MovieLens 100K dataset, modeling user–item interactions through adversarial learning with cold-start support via interactive user ratings.",
    stack: ["Python", "PyTorch", "Streamlit"],
    link: "https://github.com/kirshtalreja24/cgan-based-movie-recommender-system",
  },
  {
    title: "WanderLust",
    description:
      "Full-stack MEN-stack travel app with role-based CRUD listings, Cloudinary image uploads, Mapbox location mapping, and Passport.js authentication.",
    stack: ["Node.js", "Express", "MongoDB", "Passport.js"],
    link: "https://github.com/kirshtalreja24/WANDERLUST",
  },
  {
    title: "This Portfolio",
    description:
      "This very site — a Spider-Man-themed, GSAP-driven scroll narrative built on Next.js with a fully typed content layer.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    link: "https://github.com/kirshtalreja24/Portfolio",
  },
];
