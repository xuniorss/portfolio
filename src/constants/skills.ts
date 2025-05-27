export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
};

export const skills: Skill[] = [
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Vue.js/Nuxt.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js/Express", level: 88, category: "backend" },
  { name: "Python/FastAPI", level: 82, category: "backend" },
  { name: "PostgreSQL/MongoDB", level: 85, category: "backend" },
  { name: "Docker/K8s", level: 78, category: "tools" },
  { name: "AWS/GCP", level: 80, category: "tools" },
  { name: "Figma/Adobe XD", level: 90, category: "tools" },
];
