import { GraduationCap, Users, Building2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface PerfilSelectorProps {
  onSelectProfile: (profile: 'alunos' | 'professores' | 'gestores') => void;
}

export function PerfilSelector({ onSelectProfile }: PerfilSelectorProps) {
  const perfis = [
    {
      id: 'alunos' as const,
      tag: 'Área do Estudante',
      titulo: 'Sou aluno',
      descricao: 'Prepare-se para provas, desenvolva seu raciocínio matemático e descubra oportunidades para avançar nos estudos.',
      botaoTexto: 'Explorar área do aluno',
      icone: <GraduationCap size={32} className="text-wine-800" />,
      beneficios: [
        'Resoluções em vídeo do Provão Paulista',
        'Apostilas de preparação (OBMEP & Provão)',
        'Oportunidades, bolsas e olimpíadas científicas'
      ],
      destaque: false,
      gradiente: 'from-wine-50/50 via-white to-white',
      borda: 'border-neutral-200 hover:border-wine-300'
    },
    {
      id: 'professores' as const,
      tag: 'Área Docente',
      titulo: 'Sou professor',
      descricao: 'Encontre materiais didáticos, atividades adaptadas e conteúdos que podem apoiar seu trabalho em sala de aula.',
      botaoTexto: 'Explorar área do professor',
      icone: <Users size={32} className="text-wine-800" />,
      beneficios: [
        'Apostilas adaptadas de Matemática e Ciências',
        'Apostilões Anos Finais (+500 atividades)',
        'Conteúdos do canal para levar além da sala'
      ],
      destaque: true,
      gradiente: 'from-wine-950 via-neutral-900 to-black text-white',
      borda: 'border-wine-800/80 hover:border-wine-500 shadow-2xl'
    },
    {
      id: 'gestores' as const,
      tag: 'Gestão Escolar',
      titulo: 'Sou gestor',
      descricao: 'Conheça soluções digitais para organizar ocorrências escolares, acompanhar informações e melhorar a gestão de bibliotecas.',
      botaoTexto: 'Explorar área do gestor',
      icone: <Building2 size={32} className="text-wine-800" />,
      beneficios: [
        'Themis Class: Gestão de ocorrências e famílias',
        'Atheneum Lib: Organização do acervo de biblioteca',
        'Centralização e histórico escolar estruturado'
      ],
      destaque: false,
      gradiente: 'from-wine-50/50 via-white to-white',
      borda: 'border-neutral-200 hover:border-wine-300'
    }
  ];

  return (
    <section id="perfis" className="py-24 bg-white relative overflow-hidden border-b border-neutral-100">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-wine-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-wine-700" />
            <span>Portal Magagnini Educação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Como podemos ajudar você?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Escolha seu perfil e descubra conteúdos, materiais e soluções preparados para suas necessidades.
          </p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {perfis.map((perfil) => {
            const isDark = perfil.destaque;

            return (
              <div
                key={perfil.id}
                onClick={() => onSelectProfile(perfil.id)}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between border transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white border-wine-800/80 shadow-2xl relative overflow-hidden'
                    : 'bg-white border-neutral-200 text-neutral-900 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Glow for highlighted card */}
                {isDark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-wine-800/25 rounded-full blur-[90px] pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Top Bar with Tag and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isDark 
                        ? 'bg-wine-800 text-white shadow-sm' 
                        : 'bg-wine-50 text-wine-800 border border-wine-200'
                    }`}>
                      {perfil.tag}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isDark
                        ? 'bg-neutral-800/90 text-wine-400 border border-neutral-700'
                        : 'bg-wine-50 text-wine-800 border border-wine-100'
                    }`}>
                      {perfil.icone}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${
                    isDark ? 'text-white' : 'text-neutral-950 group-hover:text-wine-800 transition-colors'
                  }`}>
                    {perfil.titulo}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {perfil.descricao}
                  </p>

                  {/* Bullet Highlights */}
                  <div className={`space-y-2.5 pt-4 pb-6 border-t ${
                    isDark ? 'border-neutral-800' : 'border-neutral-100'
                  }`}>
                    {perfil.beneficios.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${
                          isDark ? 'text-wine-400' : 'text-wine-800'
                        }`} />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 relative z-10">
                  <button
                    type="button"
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 group-hover:gap-4 ${
                      isDark
                        ? 'bg-gradient-to-r from-wine-800 to-wine-700 text-white shadow-3d-wine hover:shadow-3d-wine-hover hover:from-wine-700 hover:to-wine-600'
                        : 'bg-neutral-950 text-white group-hover:bg-wine-800 shadow-md group-hover:shadow-lg'
                    }`}
                  >
                    <span>{perfil.botaoTexto}</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
