type CategoryProjectPrios = "web" | "mobile" | "design";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  category: CategoryProjectPrios;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com dashboard administrativo, pagamentos integrados e sistema de inventário em tempo real.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
  {
    id: 2,
    title: "Fitness App Mobile",
    description:
      "Aplicativo mobile para acompanhamento de exercícios com IA para recomendações personalizadas e tracking de progresso.",
    tech: ["React Native", "Firebase", "TensorFlow", "Redux"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "mobile",
  },
  {
    id: 3,
    title: "Design System",
    description:
      "Sistema de design completo com componentes reutilizáveis, documentação interativa e tokens de design.",
    tech: ["Figma", "Storybook", "TypeScript", "Styled Components"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "design",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Dashboard em tempo real para análise de dados com visualizações interativas e relatórios customizáveis.",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
  {
    id: 5,
    title: "Social Network App",
    description:
      "Rede social com funcionalidades de chat em tempo real, stories e sistema de recomendação baseado em ML.",
    tech: ["React Native", "GraphQL", "WebRTC", "AWS", "Docker"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "mobile",
  },
  {
    id: 6,
    title: "Brand Identity",
    description:
      "Identidade visual completa para startup de tecnologia incluindo logo, paleta de cores e guidelines.",
    tech: ["Adobe Creative Suite", "Figma", "Principle", "After Effects"],
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "design",
  },
];
