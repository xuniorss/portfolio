import { skills } from "@/constants/skills";
import { Code, Palette, Zap } from "lucide-react";
import type { RefObject } from "react";

export const SkillsSection = ({
  skillsRef,
}: {
  skillsRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section ref={skillsRef} className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {["frontend", "backend", "tools"].map((category) => (
            <div
              key={category}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category === "frontend" && (
                  <Palette className="w-6 h-6 text-blue-400 mr-2" />
                )}
                {category === "backend" && (
                  <Code className="w-6 h-6 text-green-400 mr-2" />
                )}
                {category === "tools" && (
                  <Zap className="w-6 h-6 text-purple-400 mr-2" />
                )}
                <h3 className="text-xl font-semibold capitalize">
                  {category === "frontend"
                    ? "Frontend"
                    : category === "backend"
                    ? "Backend"
                    : "Ferramentas"}
                </h3>
              </div>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
