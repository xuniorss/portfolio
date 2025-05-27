import type { RefObject } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export const HeroSection = ({
  heroRef,
  mousePosition,
  scrollToSection,
}: {
  heroRef: RefObject<HTMLElement | null>;
  mousePosition: {
    x: number;
    y: number;
  };
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            João Silva
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack & UI/UX Designer especializado em criar
            experiências digitais excepcionais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Ver Projetos
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:text-blue-400"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
