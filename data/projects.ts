export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

// TODO(content): swap in real project descriptions + links before launch.
export const projects: Project[] = [
  {
    title: "Multi-Tenant SaaS Platform",
    description:
      "Containerized multi-tenant SaaS app with strict data isolation, dynamic tenancy resolution, and role-based access control.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://github.com/kirshtalreja24",
  },
  {
    title: "Realtime Collaboration Tool",
    description:
      "Live-cursor collaborative editor with conflict-free sync, presence indicators, and optimistic UI updates.",
    stack: ["Next.js", "TypeScript", "WebSockets"],
    link: "https://github.com/kirshtalreja24",
  },
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "Order management dashboard with real-time inventory sync, analytics charts, and role-scoped permissions.",
    stack: ["React", "Express", "MongoDB"],
    link: "https://github.com/kirshtalreja24",
  },
  {
    title: "Developer Portfolio Engine",
    description:
      "This very site — a GSAP-driven scroll narrative built on Next.js with a fully typed content layer.",
    stack: ["Next.js", "Tailwind CSS", "GSAP"],
    link: "https://github.com/kirshtalreja24",
  },
];
