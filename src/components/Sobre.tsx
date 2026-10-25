import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Building2, Sparkles } from 'lucide-react';

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Educação, conhecimento e tecnologia.
            </h2>
            <div className="mt-6 text-gray-600 space-y-6 text-lg">
              <p>
                A <strong className="text-wine-800 font-semibold">Magagnini Educação</strong> desenvolve materiais educacionais e soluções digitais voltadas para diferentes necessidades do ambiente escolar.
              </p>
              <p>
                Nossa proposta reúne produção acadêmica, materiais de apoio, atividades adaptadas e tecnologia para ajudar professores, gestores e instituições de ensino.
              </p>
              <p>
                O objetivo é transformar conhecimento em materiais práticos e soluções que possam ser utilizados no cotidiano educacional.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-0"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-950 via-[#100306] to-neutral-900 border border-neutral-800 overflow-hidden relative shadow-2xl flex items-center justify-center group">
              {/* Imagem real quando presente na pasta */}
              <img 
                src="/assets/institucional/sobre.jpg" 
                alt="Sobre a Magagnini Educação" 
                className="w-full h-full object-cover relative z-20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Apresentação Visual do Ecossistema Integrado */}
              <div className="absolute inset-0 p-6 sm:p-9 flex flex-col justify-between text-white z-10 overflow-hidden">
                {/* Glow decorativo de fundo */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-wine-800/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-wine-900/25 rounded-full blur-3xl pointer-events-none" />

                {/* Topo do Card */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold text-wine-200">
                    <Sparkles size={13} className="text-amber-300" />
                    <span>Ecossistema Integrado</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">Do Fundamental ao Ensino Médio</span>
                </div>

                {/* 3 Pilares com ícones e micro-descrições */}
                <div className="my-auto space-y-2.5">
                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center gap-3 hover:bg-white/[0.1] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-wine-900/80 border border-wine-500/40 text-wine-300 flex items-center justify-center font-bold flex-shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Para Estudantes</h4>
                      <p className="text-[11px] text-neutral-400">OBMEP, Provão Paulista & Mentalidade de Alta Performance</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center gap-3 hover:bg-white/[0.1] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-wine-900/80 border border-wine-500/40 text-wine-300 flex items-center justify-center font-bold flex-shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Para Professores</h4>
                      <p className="text-[11px] text-neutral-400">Apostilas Adaptadas de Matemática & Ciências (BNCC Anos Finais)</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center gap-3 hover:bg-white/[0.1] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-wine-900/80 border border-wine-500/40 text-wine-300 flex items-center justify-center font-bold flex-shrink-0">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Para Gestores</h4>
                      <p className="text-[11px] text-neutral-400">Themis Class & Atheneum: Comunicação, Governança e Bibliotecas</p>
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-white/10">
                  <span className="font-semibold text-neutral-300">Magagnini Educação</span>
                  <span className="text-wine-400 font-bold">Transformando Conhecimento</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
