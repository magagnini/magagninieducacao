import { produtos } from '../data/produtos';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SolucoesProps {
  onOpenThemis?: () => void;
  onOpenAtheneum?: () => void;
}

export function Solucoes({ onOpenThemis, onOpenAtheneum }: SolucoesProps) {
  return (
    <section id="solucoes" className="py-24 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-wine-800 text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            Tecnologia Educacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Soluções Digitais
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 font-medium">
            Tecnologia desenvolvida para resolver problemas reais da rotina escolar.
          </p>
        </div>

        <div className="space-y-28">
          {produtos.solucoesDigitais.map((solucao, idx) => {
            const isThemis = solucao.id === 'themis-class';
            const isAtheneum = solucao.id === 'atheneum-lib';

            return (
              <div 
                key={solucao.id} 
                className={`lg:grid lg:grid-cols-12 lg:gap-16 items-center ${
                  idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:col-start-7' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-wine-50 text-wine-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
                      <ShieldCheck size={14} className="text-wine-700" />
                      <span>{solucao.nome}</span>
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                      {solucao.subtitulo}
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                    {solucao.descricao}
                  </p>
                  
                  {isThemis && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {[
                        'Registro ágil de ocorrências',
                        'Acompanhamento e histórico do aluno',
                        'Comunicação direta com responsáveis',
                        'Relatórios e desdobramentos pedagógicos'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                          <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isAtheneum && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {[
                        'Gestão digital do acervo',
                        'Controle de empréstimos e devoluções',
                        'Histórico de leitura dos alunos',
                        'Catálogo online de fácil consulta'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                          <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="pt-2">
                    {isThemis ? (
                      <button 
                        onClick={onOpenThemis}
                        className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                      >
                        <span>Conhecer o {solucao.nome}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button
                        onClick={onOpenAtheneum}
                        className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                      >
                        <span>Conhecer o {solucao.nome}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Visual / Screenshot / Mockup Column */}
                <div className={`mt-10 lg:mt-0 lg:col-span-6 ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-4 sm:p-6 border border-neutral-800 shadow-2xl group overflow-hidden">
                    {/* Simulated software window header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {isThemis ? 'themisclass.app' : 'atheneumlib.app'}
                      </span>
                      <div className="w-8" />
                    </div>

                    {/* Image Preview / Interactive Window */}
                    <div className="aspect-[4/3] rounded-2xl bg-neutral-950 border border-neutral-800/60 overflow-hidden relative flex items-center justify-center p-6">
                      <img 
                        src={solucao.imagem} 
                        alt={solucao.nome}
                        className="max-w-full max-h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-neutral-400 bg-neutral-950 p-6 text-center">
                        <ShieldCheck size={40} className="text-wine-500 mb-2" />
                        <span className="font-bold text-white text-base mb-1">{solucao.nome}</span>
                        <span className="text-xs text-neutral-400">{solucao.subtitulo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
