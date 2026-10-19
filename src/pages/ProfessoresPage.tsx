import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Puzzle, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  ExternalLink,
  Menu, 
  X,
  Compass
} from 'lucide-react';
import { PerspectiveBook } from '../components/PerspectiveBook';

function YoutubeIcon({ className = "w-5 h-5", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

interface ProfessoresPageProps {
  onBackToMagagnini?: () => void;
  onNavigateToAlunos?: () => void;
  onNavigateToGestores?: () => void;
  onNavigateToMatematica?: () => void;
  onNavigateToCiencias?: () => void;
}

export function ProfessoresPage({
  onBackToMagagnini,
  onNavigateToAlunos,
  onNavigateToGestores,
  onNavigateToMatematica,
  onNavigateToCiencias
}: ProfessoresPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@matcomvini";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER NAVEGAÇÃO PROFESSORES                           */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <div className="flex items-center gap-3">
              {onBackToMagagnini && (
                <button
                  onClick={onBackToMagagnini}
                  className="mr-1 p-2 rounded-xl text-neutral-500 hover:text-wine-800 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Voltar ao portal principal"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Portal Geral</span>
                </button>
              )}

              <button 
                onClick={onBackToMagagnini}
                className="flex items-center gap-3 group text-left cursor-pointer"
              >
                <img
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/MISTA BRANCA - 1920X800.png";
                  }}
                />
                <span className="hidden md:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest">
                  Área do Professor
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#materiais-adaptados" className="hover:text-wine-800 transition-colors">Apostilas Adaptadas</a>
              <a href="#importancia-adaptacao" className="hover:text-wine-800 transition-colors">Por que Adaptar?</a>
              <a href="#conteudos-canal" className="hover:text-wine-800 transition-colors">Conteúdos do Canal</a>
              
              <div className="h-4 w-px bg-neutral-300 mx-2" />

              {onNavigateToAlunos && (
                <button 
                  onClick={onNavigateToAlunos}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Alunos →
                </button>
              )}
              {onNavigateToGestores && (
                <button 
                  onClick={onNavigateToGestores}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Gestores →
                </button>
              )}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#materiais-adaptados"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all"
              >
                <span>Apostilas Adaptadas</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-neutral-700 hover:text-wine-800 hover:bg-neutral-100 cursor-pointer"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a 
              href="#materiais-adaptados" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Apostilas Adaptadas
            </a>
            <a 
              href="#importancia-adaptacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Importância das Atividades Adaptadas
            </a>
            <a 
              href="#conteudos-canal" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Conteúdos do Canal para a Sala
            </a>

            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              {onBackToMagagnini && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onBackToMagagnini(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-700 hover:text-wine-800"
                >
                  ← Voltar ao Portal Geral
                </button>
              )}
              {onNavigateToAlunos && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigateToAlunos(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-wine-800"
                >
                  Ir para Área do Aluno →
                </button>
              )}
              {onNavigateToGestores && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigateToGestores(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-wine-800"
                >
                  Ir para Área do Gestor →
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — PROFESSORES                                     */}
      {/* ========================================================= */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-to-b from-neutral-950 via-[#0a0204] to-neutral-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-wine-800/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-wine-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/60 border border-wine-500/40 text-wine-200 text-xs font-bold uppercase tracking-wider mb-6">
                <Users size={15} className="text-wine-400" />
                <span>Área do Professor • Apoio à Prática Pedagógica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Mais recursos para ensinar. Mais caminhos para aprender.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Materiais educacionais e conteúdos que ajudam você a organizar suas aulas, diversificar atividades e apoiar estudantes com diferentes necessidades de aprendizagem.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#materiais-adaptados"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-700 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all"
                >
                  <BookOpen size={18} />
                  <span>Conhecer materiais adaptados</span>
                </a>

                <a
                  href="#conteudos-canal"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-md"
                >
                  <YoutubeIcon size={18} className="text-red-400" />
                  <span>Explorar conteúdos gratuitos</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 text-left">
                <div>
                  <div className="text-wine-400 font-bold text-lg">+1.000 Atividades</div>
                  <div className="text-xs text-neutral-400">Matemática & Ciências</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">BNCC Integrada</div>
                  <div className="text-xs text-neutral-400">Alinhamento curricular</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">Pronto para Uso</div>
                  <div className="text-xs text-neutral-400">PDFs em alta resolução</div>
                </div>
              </div>
            </div>

            {/* Right: Book Showcase Preview */}
            <div className="mt-14 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-wine-800/30 rounded-3xl blur-2xl opacity-75 pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png"
                  title="Apostilão de Matemática"
                  subtitle="Anos Finais (+500 atividades)"
                  badge="BNCC • Anos Finais"
                  isDestaque={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. A IMPORTÂNCIA DOS MATERIAIS ADAPTADOS                  */}
      {/* ========================================================= */}
      <section id="importancia-adaptacao" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Diversidade e Prática Docente
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Cada aluno aprende de uma maneira. Seu material pode acompanhar essa diversidade.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Em uma mesma turma, os estudantes podem apresentar diferentes ritmos, conhecimentos prévios e necessidades de apoio. Materiais adaptados ajudam o professor a diversificar as estratégias de ensino, organizar atividades e oferecer outras formas de acesso aos conteúdos. Eles não substituem o planejamento docente. São recursos para ampliar as possibilidades de trabalho pedagógico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icone: <Puzzle size={24} />,
                titulo: 'Mais possibilidades de abordagem',
                texto: 'Utilize atividades variadas para trabalhar um mesmo conteúdo com diferentes linguagens e apoios visuais.'
              },
              {
                icone: <Layers size={24} />,
                titulo: 'Organização pedagógica',
                texto: 'Tenha materiais estruturados que possam apoiar o planejamento e a preparação das aulas regulares ou AEE.'
              },
              {
                icone: <Compass size={24} />,
                titulo: 'Apoio à aprendizagem',
                texto: 'Ofereça oportunidades de prática e retomada dos conteúdos com redução de sobrecarga cognitiva e foco no essencial.'
              },
              {
                icone: <Sliders size={24} />,
                titulo: 'Flexibilidade em sala',
                texto: 'Adapte a utilização dos materiais conforme os objetivos pedagógicos e as necessidades da turma.'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-6 border border-wine-100">
                    {card.icone}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">{card.titulo}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{card.texto}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pedagogy Note */}
          <div className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-neutral-600 italic">
              * Nossos materiais são elaborados como suporte estruturado à prática docente. A decisão pedagógica e a condução da aprendizagem continuam sendo soberanas do professor em sala de aula.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. APOSTILAS ADAPTADAS (MATEMÁTICA E CIÊNCIAS)            */}
      {/* ========================================================= */}
      <section id="materiais-adaptados" className="py-24 bg-neutral-50/60 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Catálogo Pedagógico Adaptado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Materiais para apoiar seu trabalho em sala de aula.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Conheça as apostilas adaptadas de Matemática e Ciências desenvolvidas para apoiar o trabalho pedagógico nos Anos Finais do Ensino Fundamental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Matemática — Anos Finais */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-6">
                  <PerspectiveBook
                    size="default"
                    coverImage="/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png"
                    title="Apostilão de Matemática"
                    subtitle="6º ao 9º Ano (+500 atividades)"
                    badge="+500 Atividades"
                    isDestaque={true}
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-wine-50 text-wine-800 border border-wine-200">
                    6º ao 9º Ano • Matemática
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                  Matemática — Anos Finais
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Apresenta as apostilas adaptadas de Matemática do 6º, 7º, 8º e 9º ano e o Apostilão de Matemática reunindo mais de 500 atividades estruturadas com apoio visual e gradação de dificuldade.
                </p>

                <div className="space-y-2 mb-8 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Apostilas individuais (6º, 7º, 8º e 9º anos) com ~100 atividades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Apostilão completo reunindo todos os quatro anos finais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Linguagem direta, apoio visual e alinhamento à BNCC</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                {onNavigateToMatematica ? (
                  <button
                    onClick={onNavigateToMatematica}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all cursor-pointer"
                  >
                    <span>Conhecer materiais de Matemática</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <a
                    href="#matematica-adaptada"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all"
                  >
                    <span>Conhecer materiais de Matemática</span>
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Card 2: Ciências — Anos Finais */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-6">
                  <PerspectiveBook
                    size="default"
                    coverImage="/assets/produtos/atividades-adaptadas/apostilao-ciencias-anos-finais.png"
                    title="Apostilão de Ciências"
                    subtitle="6º ao 9º Ano (+500 atividades)"
                    badge="+500 Atividades"
                    isDestaque={false}
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-wine-50 text-wine-800 border border-wine-200">
                    6º ao 9º Ano • Ciências
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                  Ciências — Anos Finais
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Apresenta as apostilas adaptadas de Ciências do 6º, 7º, 8º e 9º ano e o Apostilão de Ciências com infográficos didáticos, esquemas visuais e contextualização científica acessível.
                </p>

                <div className="space-y-2 mb-8 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Apostilas individuais (6º, 7º, 8º e 9º anos) com esquemas visuais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Apostilão completo de Ciências para planejamento integrado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>Eixos da BNCC: Matéria, Vida, Evolução, Terra e Universo</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                {onNavigateToCiencias ? (
                  <button
                    onClick={onNavigateToCiencias}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all cursor-pointer"
                  >
                    <span>Conhecer materiais de Ciências</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <a
                    href="#ciencias-adaptadas"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all"
                  >
                    <span>Conhecer materiais de Ciências</span>
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CONTEÚDOS DO CANAL PARA LEVAR ALÉM DA SALA DE AULA     */}
      {/* ========================================================= */}
      <section id="conteudos-canal" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Recursos Multimídia Complementares
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Seus alunos também podem ir além do conteúdo tradicional.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              No canal da Magagnini Educação, há conteúdos de Matemática, resolução de avaliações e preparação acadêmica que podem servir como referências complementares para estudantes do Ensino Fundamental. As resoluções de questões de vestibulares e avaliações podem ajudar a mostrar aplicações dos conceitos matemáticos e despertar o interesse por desafios mais complexos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titulo: 'Playlists de Matemática',
                descricao: 'Aulas didáticas com métodos passo a passo para fundamentar conteúdos essenciais.',
                tag: 'Fundamentação'
              },
              {
                titulo: 'Resoluções de Provas',
                descricao: 'Análise comentada de avaliações oficiais para demonstrar como o raciocínio é exigido na prática.',
                tag: 'Bancas Reais'
              },
              {
                titulo: 'Conteúdos do Provão Paulista',
                descricao: 'Videoaulas focadas nas questões seriadas que preparam os alunos para o Ensino Médio.',
                tag: 'Vestibular Seriado'
              },
              {
                titulo: 'Desafios & Preparação Acadêmica',
                descricao: 'Problemas de olimpíadas como a OBMEP para estimular o raciocínio dos alunos que querem ir além.',
                tag: 'Raciocínio Avançado'
              }
            ].map((bloco, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-wine-800 bg-wine-50 px-2.5 py-1 rounded-full border border-wine-200 inline-block mb-3">
                    {bloco.tag}
                  </span>
                  <h3 className="font-bold text-neutral-950 text-base mb-2">{bloco.titulo}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{bloco.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all"
            >
              <YoutubeIcon size={20} />
              <span>Explorar o canal no YouTube</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CTA FINAL — PROFESSORES                                */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-wine-950 to-black text-white relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-4">
            Parceria Educacional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Seu planejamento pode contar com mais recursos.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Conheça materiais que podem apoiar suas aulas e descubra novos conteúdos para ampliar as possibilidades de aprendizagem dos seus alunos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#materiais-adaptados"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-3d-wine transition-all"
            >
              <BookOpen size={18} />
              <span>Conhecer apostilas adaptadas</span>
            </a>
            <a
              href="#conteudos-canal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-neutral-900 bg-white hover:bg-neutral-100 transition-all"
            >
              <YoutubeIcon size={18} className="text-red-600" />
              <span>Acessar conteúdos gratuitos</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/magagnini-mista-preta.png"
                alt="Magagnini Educação"
                className="h-10 w-auto object-contain rounded"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/MISTA PRETA - 1920X800.png";
                }}
              />
              <span className="text-xs text-neutral-400">
                Magagnini Educação • Área do Professor
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
              {onBackToMagagnini && (
                <button onClick={onBackToMagagnini} className="hover:text-white transition-colors cursor-pointer">
                  Portal Geral
                </button>
              )}
              {onNavigateToAlunos && (
                <button onClick={onNavigateToAlunos} className="hover:text-white transition-colors cursor-pointer">
                  Área do Aluno
                </button>
              )}
              {onNavigateToGestores && (
                <button onClick={onNavigateToGestores} className="hover:text-white transition-colors cursor-pointer">
                  Área do Gestor
                </button>
              )}
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Magagnini Educação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
