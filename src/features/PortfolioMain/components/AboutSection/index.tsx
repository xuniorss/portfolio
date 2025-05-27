import { Award, Code, Users, Zap } from "lucide-react";
import type { RefObject } from "react";

export const AboutSection = ({
  aboutRef,
}: {
  aboutRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section ref={aboutRef} className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de
            experiência criando soluções digitais inovadoras. Especializado em
            React, Node.js e design de interfaces, combino habilidades técnicas
            com visão criativa para entregar projetos excepcionais.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Minha abordagem é centrada no usuário, sempre buscando criar
            experiências intuitivas e performáticas que resolvem problemas reais
            e geram impacto positivo.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">50+ Projetos</h3>
              <p className="text-sm text-gray-400">Entregues com sucesso</p>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">30+ Clientes</h3>
              <p className="text-sm text-gray-400">Satisfeitos globalmente</p>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-green-400/50 transition-all duration-300">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">5+ Anos</h3>
              <p className="text-sm text-gray-400">De experiência</p>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
              <Zap className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7</h3>
              <p className="text-sm text-gray-400">Suporte dedicado</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="João Silva"
              className="w-full h-full object-cover rounded-full border-4 border-gray-700 relative z-10 hover:border-blue-400 transition-all duration-300"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
