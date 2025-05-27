import { projects } from "@/constants/projects";
import { ExternalLink, Github } from "lucide-react";
import type { Dispatch, RefObject, SetStateAction } from "react";

export const ProjectsSection = ({
  projectsRef,
  filterCategory,
  setFilterCategory,
}: {
  projectsRef: RefObject<HTMLElement | null>;
  filterCategory: string;
  setFilterCategory: Dispatch<SetStateAction<string>>;
}) => {
  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((project) => project.category === filterCategory);

  return (
    <section ref={projectsRef} className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projetos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8" />

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "mobile", "design"].map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filterCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category === "all"
                ? "Todos"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    className="p-2 bg-gray-900/80 rounded-full hover:bg-blue-500 transition-colors duration-300"
                    aria-label="Ver código no GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500 transition-colors duration-300"
                    aria-label="Ver demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
