import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { RefObject } from "react";

export const ContactSection = ({
  contactRef,
}: {
  contactRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section ref={contactRef} className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Entre em Contato
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8" />
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas
          oportunidades e desafios interessantes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">joao.silva@email.com</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group">
            <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold mb-2">Telefone</h3>
            <p className="text-gray-400">+55 (11) 99999-9999</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-green-400/50 transition-all duration-300 group">
            <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold mb-2">Localização</h3>
            <p className="text-gray-400">São Paulo, SP</p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            className="p-4 bg-gray-800 rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:text-white" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:text-white" />
          </a>
          <a
            href="mailto:joao.silva@email.com"
            className="p-4 bg-gray-800 rounded-full hover:bg-purple-500 hover:scale-110 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 group-hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
