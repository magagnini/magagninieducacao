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
  Compass,
  Calculator,
  Microscope,
  Sparkles,
  Dna,
  Atom
} from 'lucide-react';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { produtos } from '../data/produtos';
import { motion } from 'framer-motion';

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
  onOpenFlipBook?: () => void;
}

export function ProfessoresPage({
  onBackToMagagnini,
  onNavigateToAlunos,
  onNavigateToGestores,
  onNavigateToMatematica,
  onNavigateToCiencias,
  onOpenFlipBook
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
          <div className="flex items-center justify-between h-20 gap-4">
            
            <div className="flex items-center gap-3 flex-shrink-0">
              {onBackToMagagnini && (
                <button
                  onClick={onBackToMagagnini}
                  className="mr-1 p-2 rounded-xl text-neutral-500 hover:text-wine-800 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer whitespace-nowrap"
                  title="Voltar ao portal principal"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Portal Geral</span>
                </button>
              )}

              <button 
                onClick={onBackToMagagnini}
                className="flex items-center gap-3 group text-left cursor-pointer flex-shrink-0"
              >
                <img
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-9 sm:h-10 w-auto object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/MISTA BRANCA - 1920X800.png";
                  }}
                />
                <span className="hidden md:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest whitespace-nowrap">
                  Área do Professor
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm font-semibold text-neutral-700 whitespace-nowrap">
              <a href="#materiais-adaptados" className="hover:text-wine-800 transition-colors whitespace-nowrap">Apostilas Adaptadas</a>
              <a href="#importancia-adaptacao" className="hover:text-wine-800 transition-colors whitespace-nowrap">Por que Adaptar?</a>
              <a href="#conteudos-canal" className="hover:text-wine-800 transition-colors whitespace-nowrap">Vídeos & Canal</a>
              
              <div className="h-4 w-px bg-neutral-300 mx-1 xl:mx-2 flex-shrink-0" />

              {onNavigateToAlunos && (
                <button 
                  onClick={onNavigateToAlunos}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  Alunos →
                </button>
              )}
              {onNavigateToGestores && (
                <button 
                  onClick={onNavigateToGestores}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  Gestores →
                </button>
              )}
            </nav>

            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="#materiais-adaptados"
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                <span>Ver Materiais</span>
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
            
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
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
            </motion.div>

            {/* Right: Book Showcase Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 lg:mt-0 lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              <div 
                onClick={onOpenFlipBook}
                className="relative group cursor-pointer"
                title="Clique para folhear a amostra digital 3D"
              >
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

              {onOpenFlipBook && (
                <button
                  onClick={onOpenFlipBook}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-wine-200 bg-white/10 hover:bg-white/15 border border-white/20 shadow-md backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles size={13} className="text-wine-400" />
                  <span>Folhear amostra interativa (13 pág.)</span>
                </button>
              )}
            </motion.div>

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
            ].map((card, idx) => {
              const initialMotion = 
                idx === 0 
                  ? { opacity: 0, x: -60, y: 0 }
                  : idx === 3
                  ? { opacity: 0, x: 60, y: 0 }
                  : { opacity: 0, x: 0, y: 60 };

              return (
                <motion.div 
                  key={idx}
                  initial={initialMotion}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-6 border border-wine-100">
                      {card.icone}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 mb-3">{card.titulo}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{card.texto}</p>
                  </div>
                </motion.div>
              );
            })}
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
          
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
              <Users size={15} />
              <span>Para Professores</span>
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl tracking-tight">
              Materiais para Professores
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Apostilas adaptadas de Matemática e Ciências e os volumes unificados (Apostilões) para o Ensino Fundamental.
            </p>
          </div>

          {/* Atalhos para as Áreas (Matemática e Ciências) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onNavigateToMatematica?.()}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-wine-400 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold">
                  <Calculator size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 group-hover:text-wine-800 transition-colors">
                    Matemática Adaptada
                  </h4>
                  <p className="text-xs text-neutral-500">6º ao 9º ano + Apostilão Anos Finais</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-wine-800 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onNavigateToCiencias?.()}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-wine-400 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold">
                  <Microscope size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 group-hover:text-wine-800 transition-colors">
                    Ciências Adaptadas
                  </h4>
                  <p className="text-xs text-neutral-500">6º ao 9º ano + Apostilão Anos Finais</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-wine-800 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
          
          {/* Apostilões em Destaque */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-wine-800" />
              <h3 className="text-xl font-bold text-neutral-950">
                Apostilões — Anos Finais (+500 atividades)
              </h3>
            </div>

            {/* Botões entre a escrita e a caixa dos apostilões */}
            <div className="flex flex-wrap items-center gap-3 mb-6 max-w-4xl mx-auto">
              {onOpenFlipBook && (
                <button
                  type="button"
                  onClick={onOpenFlipBook}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <Sparkles size={15} className="text-wine-300 animate-pulse" />
                  <span>Folhear Amostra de Matemática (13 Páginas 3D)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => alert("Amostra 3D de Ciências em preparação! Em breve estará disponível.")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 shadow-sm transition-all cursor-pointer group"
              >
                <Sparkles size={15} className="text-neutral-400" />
                <span>Folhear Amostra de Ciências (Em Breve)</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {produtos.atividadesAdaptadas.filter(p => p.destaque).map((prod, idx) => {
                const isMatematica = prod.id.startsWith('matematica');
                return (
                  <motion.div 
                    key={prod.id}
                    initial={{ opacity: 0, x: idx === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-3xl border border-wine-200 shadow-lg hover:shadow-2xl hover:border-wine-400 bg-gradient-to-b from-wine-50/40 via-white to-white transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* 3D Book Showcase */}
                    <div 
                      onClick={() => {
                        if (isMatematica && onOpenFlipBook) {
                          onOpenFlipBook();
                        }
                      }}
                      className={`relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[290px] ${isMatematica && onOpenFlipBook ? 'cursor-pointer' : ''}`}
                    >
                      <div 
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
                          backgroundSize: "16px 16px"
                        }}
                      />

                      <PerspectiveBook
                        size="default"
                        coverImage={prod.imagem}
                        title={prod.nome}
                        subtitle={prod.descricao}
                        badge={prod.detalhe}
                        isDestaque={true}
                      />
                      
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-wine-800 text-white shadow-md">
                        <Sparkles size={12} className="text-wine-200" />
                        <span>Edição Especial</span>
                      </div>

                      {isMatematica && onOpenFlipBook && (
                        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-neutral-900/90 text-white backdrop-blur shadow-md hover:bg-wine-800 transition-colors">
                          <Sparkles size={12} className="text-wine-300" />
                          <span>Folhear 13 Páginas</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Details Area */}
                    <div className="p-6 md:p-7 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-neutral-950 group-hover:text-wine-900 transition-colors">
                          {prod.nome}
                        </h3>
                      </div>

                      {prod.subtitulo && (
                        <h4 className="text-xs font-bold text-wine-800 mb-2 uppercase tracking-wider">
                          {prod.subtitulo}
                        </h4>
                      )}

                      <p className="text-neutral-600 text-sm mb-6 flex-grow leading-relaxed">
                        {prod.descricao}
                      </p>

                      <div className="mb-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle2 size={15} className="text-wine-700 flex-shrink-0" />
                        <span>Atividades estruturadas e prontas para uso</span>
                      </div>
                      
                      <div className="flex flex-col gap-2.5">
                        <button 
                          onClick={() => {
                            if (prod.id.startsWith('matematica')) {
                              onNavigateToMatematica?.();
                            } else {
                              onNavigateToCiencias?.();
                            }
                          }}
                          className="w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 bg-wine-800 hover:bg-wine-900 text-white shadow-md hover:shadow-lg hover:gap-3 transition-all duration-200 cursor-pointer"
                        >
                          <span>Conhecer apostilão completo</span>
                          <ArrowRight size={16} className="transition-transform" />
                        </button>

                        {isMatematica && onOpenFlipBook && (
                          <button
                            onClick={onOpenFlipBook}
                            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors cursor-pointer"
                          >
                            <Sparkles size={13} className="text-wine-800" />
                            <span>Folhear 13 Páginas (3D)</span>
                          </button>
                        )}

                        {!isMatematica && (
                          <button
                            type="button"
                            onClick={() => alert("Amostra 3D de Ciências em preparação! Em breve estará disponível.")}
                            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border border-neutral-200 transition-colors cursor-pointer"
                          >
                            <Sparkles size={13} className="text-neutral-400" />
                            <span>Folhear Amostra (Em Breve)</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Grid de Apostilas por Ano Escolar */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <h3 className="text-xl font-bold text-neutral-950">
                Apostilas por Ano Escolar (~100 atividades cada)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {produtos.atividadesAdaptadas.filter(p => !p.destaque).map((prod, idx) => {
                const initialMotion = 
                  idx % 4 === 0 
                    ? { opacity: 0, x: -50, y: 0 }
                    : idx % 4 === 3 
                    ? { opacity: 0, x: 50, y: 0 }
                    : { opacity: 0, x: 0, y: 50 };

                return (
                  <motion.div 
                    key={prod.id}
                    initial={initialMotion}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.75, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* 3D Book Showcase */}
                    <div className="relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[240px]">
                      <div 
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
                          backgroundSize: "16px 16px"
                        }}
                      />

                      <PerspectiveBook
                        size="sm"
                        coverImage={prod.imagem}
                        title={prod.nome}
                        subtitle={prod.descricao}
                        badge={prod.detalhe}
                        isDestaque={false}
                      />
                    </div>
                    
                    {/* Product Details Area */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-base font-bold text-neutral-950 group-hover:text-wine-900 transition-colors">
                          {prod.nome}
                        </h3>
                      </div>

                      {prod.subtitulo && (
                        <h4 className="text-[11px] font-bold text-wine-800 mb-2 uppercase tracking-wider">
                          {prod.subtitulo}
                        </h4>
                      )}

                      <p className="text-neutral-600 text-xs mb-5 flex-grow leading-relaxed">
                        {prod.descricao}
                      </p>

                      <div className="mb-5 pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                        <CheckCircle2 size={14} className="text-wine-700 flex-shrink-0" />
                        <span>Atividades estruturadas e prontas para uso</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => {
                            if (prod.id.startsWith('matematica')) {
                              onNavigateToMatematica?.();
                            } else {
                              onNavigateToCiencias?.();
                            }
                          }}
                          className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-neutral-900 hover:bg-wine-800 text-white shadow-sm hover:shadow-md hover:gap-2.5 transition-all duration-200 cursor-pointer"
                        >
                          <span>Conhecer material</span>
                          <ArrowRight size={14} className="transition-transform" />
                        </button>

                        {prod.id.startsWith('matematica') && onOpenFlipBook && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenFlipBook();
                            }}
                            className="w-full py-2 px-3 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors cursor-pointer"
                          >
                            <Sparkles size={12} className="text-wine-800" />
                            <span>Folhear 13 Páginas (3D)</span>
                          </button>
                        )}

                        {prod.id.startsWith('ciencias') && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              alert("Amostra 3D de Ciências em preparação! Em breve estará disponível.");
                            }}
                            className="w-full py-2 px-3 rounded-lg font-medium text-[11px] flex items-center justify-center gap-1.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border border-neutral-200 transition-colors cursor-pointer"
                          >
                            <Sparkles size={12} className="text-neutral-400" />
                            <span>Folhear Amostra (Em Breve)</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* BLOCO: BIOLOGIA E FÍSICA EM BREVE                         */}
          {/* ========================================================= */}
          <div className="rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-wine-950 text-white p-8 sm:p-12 border border-wine-500/30 relative overflow-hidden shadow-2xl">
            {/* Glows decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-wine-700/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-neutral-800/40 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/80 border border-wine-500/40 text-wine-200 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-300" />
                <span>Próximos Lançamentos Pedagógicos</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                Biologia e Física estarão disponíveis em breve
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Nossa equipe pedagógica já está desenvolvendo as novas apostilas adaptadas de <strong>Biologia</strong> e <strong>Física</strong> para os Anos Finais do Ensino Fundamental e Ensino Médio, mantendo o rigor editorial com esquemas visuais, linguagem clara e atividades inclusivas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                <motion.div 
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-wine-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-wine-900/60 text-wine-300 flex items-center justify-center font-bold mb-4 border border-wine-700/50">
                    <Dna size={24} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">Biologia Adaptada</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-wine-950 text-wine-300 border border-wine-700/60 px-2.5 py-0.5 rounded-full">
                      Em Breve
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Citologia, Genética, Ecologia, Fisiologia Humana e Evolução com infográficos didáticos, mapas conceituais e atividades estruturadas para diferentes ritmos de aprendizagem.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-wine-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-wine-900/60 text-wine-300 flex items-center justify-center font-bold mb-4 border border-wine-700/50">
                    <Atom size={24} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">Física Adaptada</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-wine-950 text-wine-300 border border-wine-700/60 px-2.5 py-0.5 rounded-full">
                      Em Breve
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Mecânica, Termologia, Ondulatória, Óptica e Eletricidade básica explicadas de forma intuitiva, associando fenômenos do cotidiano a esquemas gráficos acessíveis.
                  </p>
                </motion.div>
              </div>

              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://wa.me/5511998713683?text=Ol%C3%A1!%20Gostaria%20de%20ser%20avisado%20sobre%20o%20lan%C3%A7amento%20das%20apostilas%20adaptadas%20de%20Biologia%20e%20F%C3%ADsica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Ser avisado no lançamento via WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
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
            ].map((bloco, idx) => {
              const initialMotion = 
                idx === 0 
                  ? { opacity: 0, x: -50, y: 0 }
                  : idx === 3 
                  ? { opacity: 0, x: 50, y: 0 }
                  : { opacity: 0, x: 0, y: 50 };

              return (
                <motion.div 
                  key={idx}
                  initial={initialMotion}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-wine-800 bg-wine-50 px-2.5 py-1 rounded-full border border-wine-200 inline-block mb-3">
                      {bloco.tag}
                    </span>
                    <h3 className="font-bold text-neutral-950 text-base mb-2">{bloco.titulo}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{bloco.descricao}</p>
                  </div>
                </motion.div>
              );
            })}
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
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
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
        </motion.div>
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
