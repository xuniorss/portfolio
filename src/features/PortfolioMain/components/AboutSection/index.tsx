import { calcularDiferencaDeAno } from '@/utils/calcularDiferencaDeAno'
import { Award, Zap } from 'lucide-react'
import type { RefObject } from 'react'

export const AboutSection = ({
   aboutRef,
}: {
   aboutRef: RefObject<HTMLElement | null>
}) => {
   const anosExperiencia = calcularDiferencaDeAno(2017) - 1

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
                  Sou desenvolvedor full stack com mais de {anosExperiencia}{' '}
                  anos de experiência em aplicações web modernas. Especializado
                  em React, Node.js e TypeScript, entrego soluções escaláveis,
                  bem estruturadas e focadas na experiência do usuário.
               </p>
               <p className="text-lg text-gray-300 leading-relaxed">
                  Com pós-graduação em Engenharia de Software, atuo com código
                  limpo, testes automatizados, boas práticas de versionamento e
                  integração contínua. Busco sempre unir excelência técnica com
                  foco em resultados reais.
               </p>

               <div className="grid grid-cols-2 gap-6 mt-8">
                  {/* <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                     <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                     <h3 className="font-semibold mb-1">50+ Projetos</h3>
                     <p className="text-sm text-gray-400">
                        Entregues com sucesso
                     </p>
                  </div> */}
                  {/* <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                     <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                     <h3 className="font-semibold mb-1">30+ Clientes</h3>
                     <p className="text-sm text-gray-400">
                        Satisfeitos globalmente
                     </p>
                  </div> */}
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                     <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                     <h3 className="font-semibold mb-1">
                        {anosExperiencia}+ Anos
                     </h3>
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
                     src="/src/assets/me.PNG"
                     alt="Gilberto Júnior"
                     className="w-full h-full object-cover rounded-full border-4 border-gray-700 relative z-10 hover:border-blue-400 transition-all duration-300"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg animate-pulse" />
               </div>
            </div>
         </div>
      </section>
   )
}
