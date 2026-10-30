import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Compass, 
  TrendingUp, 
  ExternalLink,
  Play,
  Clock,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PerspectiveBook } from '../components/PerspectiveBook';
import type { FlipBookType } from '../components/FlipBookModal';

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

interface AlunosPageProps {
  onBackToMagagnini?: () => void;
  onNavigateToProfessores?: () => void;
  onNavigateToGestores?: () => void;
  onNavigateToProvao?: () => void;
  onNavigateToObmep?: () => void;
  onNavigateToProdutividade?: () => void;
  onOpenFlipBook?: (type: FlipBookType) => void;
}

export function AlunosPage({
  onBackToMagagnini,
  onNavigateToProfessores,
  onNavigateToGestores,
  onNavigateToProvao,
  onNavigateToObmep,
  onNavigateToProdutividade,
  onOpenFlipBook
}: AlunosPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const YOUTUBE_VIDEO_URL = "https://youtu.be/6ZkrOkYGJfs?si=vTouxsbDkI3g6RHL";
  const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@matcomvini";
  const CAKTO_PROVAO_URL = "https://pay.cakto.com.br/ypkhicy_752822";
  const OBMEP_BUY_URL = "https://pay.cakto.com.br/oiqigca_1260017";

  const playlists = [
    {
      serie: '1ª Série do Ensino Médio',
      ano: 'Provão Paulista',
      titulo: 'Matemática — Etapa I',
      descricao: 'Resoluções comentadas das questões oficiais do Provão Paulista para os alunos do 1º ano do Ensino Médio.',
      tag: 'Etapa I',
      url: 'https://www.youtube.com/playlist?list=PLbpYC5UwHBZk'
    },
    {
      serie: '2ª Série do Ensino Médio',
      ano: 'Provão Paulista',
      titulo: 'Matemática — Etapa II',
      descricao: 'Análise detalhada de cada questão, métodos de resolução rápida e revisão dos principais tópicos de Geometria e Álgebra.',
      tag: 'Etapa II',
      url: 'https://www.youtube.com/playlist?list=PLA5SZpb119QM'
    },
    {
      serie: '3ª Série do Ensino Médio',
      ano: 'Provão Paulista',
      titulo: 'Matemática — Etapa III',
      descricao: 'Treinamento completo focado na conquista direta das vagas na USP, UNICAMP, UNESP e FATEC.',
      tag: 'Etapa III • Vaga Direta',
      url: 'https://www.youtube.com/playlist?list=PLN9x695LWUW0'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white overflow-x-hidden w-full max-w-full">
      
      {/* ========================================================= */}
      {/* 1. HEADER NAVEGAÇÃO ALUNOS                                */}
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
                  src="/assets/logo/logo-preta.png"
                  alt="Magagnini Educação"
                  className="h-9 sm:h-10 w-auto object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/LOGO PRETA PNG.png";
                  }}
                />
                <span className="hidden md:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest whitespace-nowrap">
                  Área do Aluno
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm font-semibold text-neutral-700 whitespace-nowrap">
              <a href="#por-que-estudar" className="hover:text-wine-800 transition-colors whitespace-nowrap">Por que Estudar</a>
              <a href="#oportunidades" className="hover:text-wine-800 transition-colors whitespace-nowrap">Oportunidades</a>
              <a href="#conteudos-gratuitos" className="hover:text-wine-800 transition-colors whitespace-nowrap">Vídeos & Aulas</a>
              <a href="#apostilas-estudantes" className="hover:text-wine-800 transition-colors whitespace-nowrap">Apostilas</a>
              
              <div className="h-4 w-px bg-neutral-300 mx-1 xl:mx-2 flex-shrink-0" />

              {onNavigateToProfessores && (
                <button 
                  onClick={onNavigateToProfessores}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  Professores →
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
                href="#apostilas-estudantes"
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                <span>Ver Apostilas</span>
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
              href="#por-que-estudar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Por que estudar?
            </a>
            <a 
              href="#oportunidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Bolsas & Oportunidades
            </a>
            <a 
              href="#conteudos-gratuitos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Vídeos & Playlists
            </a>
            <a 
              href="#apostilas-estudantes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Apostilas para Estudantes
            </a>

            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              {onBackToMagagnini && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onBackToMagagnini(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-700 hover:text-wine-800"
                >
                  ← Voltar ao Portal Magagnini Educação
                </button>
              )}
              {onNavigateToProfessores && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigateToProfessores(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-wine-800"
                >
                  Ir para Área do Professor →
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
      {/* 2. HERO — ALUNOS                                          */}
      {/* ========================================================= */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-to-b from-neutral-950 via-[#0e0306] to-neutral-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-wine-800/25 rounded-full blur-[120px] pointer-events-none" />
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
                <GraduationCap size={15} className="text-wine-400" />
                <span>Área do Aluno • Preparação Acadêmica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Seu próximo resultado começa com o que você aprende hoje.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Estude com estratégia, pratique com questões reais e descubra oportunidades que podem transformar sua trajetória acadêmica.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#conteudos-gratuitos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-700 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all"
                >
                  <Play size={18} className="fill-white" />
                  <span>Começar a estudar</span>
                </a>

                <a
                  href="#apostilas-estudantes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-md"
                >
                  <BookOpen size={18} />
                  <span>Explorar nossas apostilas</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 text-left">
                <div>
                  <div className="text-wine-400 font-bold text-lg">100% Oficial</div>
                  <div className="text-xs text-neutral-400">Questões reais das bancas</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">Em Vídeo</div>
                  <div className="text-xs text-neutral-400">Resoluções comentadas</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">Oportunidades</div>
                  <div className="text-xs text-neutral-400">OBMEP & Provão Paulista</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Book Showcase Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 lg:mt-0 lg:col-span-5 flex justify-center relative"
            >
              <div 
                onClick={() => onOpenFlipBook?.('provao-paulista')}
                className={`relative group flex flex-col items-center ${onOpenFlipBook ? 'cursor-pointer' : ''}`}
                title={onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
              >
                <div className="absolute -inset-4 bg-wine-800/30 rounded-3xl blur-2xl opacity-75 pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/apostilas-academicas/provao-paulista.png"
                  title="Apostila Provão Paulista"
                  subtitle="Preparação Completa com Questões Comentadas"
                  badge="Ensino Médio"
                  isDestaque={true}
                />
                {onOpenFlipBook && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFlipBook('provao-paulista');
                    }}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-wine-900 bg-wine-50 hover:bg-wine-100 border border-wine-300 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Sparkles size={13} className="text-wine-800" />
                    <span>Folhear amostra interativa (9 pág. 3D)</span>
                  </button>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SEÇÃO — POR QUE ESTUDAR?                               */}
      {/* ========================================================= */}
      <section id="por-que-estudar" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Propósito e Autonomia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Estudar abre caminhos que você talvez ainda nem conheça.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Estudar vai muito além de tirar boas notas. É uma maneira de desenvolver autonomia, ampliar suas oportunidades e descobrir capacidades que você ainda não conhecia. Cada questão resolvida, cada conceito compreendido e cada dificuldade superada contribuem para a construção do seu futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icone: <Compass size={24} />,
                titulo: 'Desenvolva seu raciocínio',
                texto: 'Aprenda a interpretar problemas, construir estratégias e encontrar soluções com lógica e clareza.'
              },
              {
                icone: <TrendingUp size={24} />,
                titulo: 'Amplie suas oportunidades',
                texto: 'Prepare-se para avaliações, processos seletivos, olimpíadas e diferentes caminhos acadêmicos.'
              },
              {
                icone: <Award size={24} />,
                titulo: 'Conquiste reconhecimento',
                texto: 'Participe de olimpíadas científicas e tenha a oportunidade de conquistar medalhas e certificados conforme os critérios de cada competição.'
              },
              {
                icone: <GraduationCap size={24} />,
                titulo: 'Construa seu futuro',
                texto: 'O conhecimento pode ampliar suas possibilidades de ingresso em instituições de ensino e de participação em programas acadêmicos.'
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

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SEÇÃO — BOLSAS, MEDALHAS E OPORTUNIDADES               */}
      {/* ========================================================= */}
      <section id="oportunidades" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Reconhecimento & Conquistas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Seu esforço pode abrir novas portas.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Existem programas acadêmicos, olimpíadas científicas e oportunidades educacionais que reconhecem o desempenho e a dedicação dos estudantes. Dependendo do programa, dos critérios de seleção e dos resultados obtidos, essas oportunidades podem incluir bolsas de estudo, participação em programas de iniciação científica, certificados, medalhas e experiências acadêmicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-wine-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-950 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-800/60">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Bolsas de estudo</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Conheça processos seletivos e programas que podem oferecer oportunidades de formação para estudantes dedicados.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                Foco em dedicação e mérito
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-wine-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-950 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-800/60">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Olimpíadas científicas</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Desenvolva seu raciocínio lógico e participe de desafios nacionais como a OBMEP, conquistando destaque e aprendizado.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                OBMEP, OBA e competições científicas
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-wine-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-950 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-800/60">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Iniciação científica</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Descubra programas que aproximam estudantes do pensamento científico, da pesquisa universitária e da investigação prática.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                Introdução à pesquisa acadêmica
              </div>
            </motion.div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="#apostilas-estudantes"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-3d-wine hover:shadow-3d-wine-hover transition-all"
            >
              <span>Quero melhorar minha preparação</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SEÇÃO — VÍDEO DE APRESENTAÇÃO                          */}
      {/* ========================================================= */}
      <section id="conteudos-gratuitos" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 text-center lg:text-left mb-10 lg:mb-0"
            >
              <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
                Canal Magagnini Educação
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Aprenda comigo e evolua a cada questão.
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                No canal da Magagnini Educação, você encontra resoluções de questões, explicações de Matemática e conteúdos de preparação para avaliações. A proposta é ajudar você a compreender o raciocínio por trás das respostas, em vez de simplesmente decorar procedimentos.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all"
                >
                  <YoutubeIcon size={18} />
                  <span>Assistir no YouTube</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <span>Acessar Canal Oficial</span>
                </a>
              </div>
            </motion.div>

            {/* Embedded Responsive YouTube Player */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/6ZkrOkYGJfs"
                  title="Apresentação Magagnini Educação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 px-2">
                <span>Vídeo oficial de preparação • Vinícius Magagnini</span>
                <a 
                  href={YOUTUBE_VIDEO_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wine-800 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Abrir no YouTube <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PLAYLISTS — PROVÃO PAULISTA DE MATEMÁTICA              */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Aulas e Resoluções Gratuitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Prepare-se para o Provão Paulista com resoluções em vídeo.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Revise as questões de Matemática do Provão Paulista e acompanhe as resoluções para compreender os métodos utilizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playlists.map((pl, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-wine-50 text-wine-800 border border-wine-200">
                      {pl.tag}
                    </span>
                    <YoutubeIcon size={22} className="text-red-600" />
                  </div>

                  <span className="text-xs font-semibold text-neutral-400 block mb-1">
                    {pl.serie}
                  </span>

                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-wine-800 transition-colors">
                    {pl.titulo}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {pl.descricao}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <a
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-neutral-900 group-hover:bg-wine-800 shadow-sm transition-all"
                  >
                    <Play size={14} className="fill-white" />
                    <span>Assistir no Canal</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SEÇÃO — EM BREVE: PROVÃO PAULISTA DE FÍSICA            */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-neutral-900 via-neutral-950 to-wine-950 text-white border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-wine-800/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-wine-800 text-white mb-4 shadow-sm">
                  <Clock size={12} />
                  <span>Novos Conteúdos em Breve</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Em breve: Provão Paulista de Física.
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  A preparação continua! Em breve, vamos ampliar os conteúdos de resolução de provas para incluir o Provão Paulista de Física. A proposta é ajudar você a revisar os conceitos, interpretar os enunciados e compreender as estratégias utilizadas na resolução das questões.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-neutral-900 bg-white hover:bg-neutral-100 shadow-lg transition-all"
                >
                  <YoutubeIcon size={18} className="text-red-600" />
                  <span>Conhecer o canal</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SEÇÃO — APOSTILAS PARA ESTUDANTES                      */}
      {/* ========================================================= */}
      <section id="apostilas-estudantes" className="py-24 bg-neutral-50/60 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Materiais de Preparação Direcionada
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Quer organizar melhor sua preparação?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Conheça nossas apostilas impressas e digitais com questões selecionadas, gabaritos comentados e resoluções em vídeo via QR Code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Apostila Provão Paulista */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => onOpenFlipBook?.('provao-paulista')}
                  className={`flex justify-center mb-6 ${onOpenFlipBook ? 'cursor-pointer' : ''}`}
                  title={onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
                >
                  <PerspectiveBook
                    size="default"
                    coverImage="/assets/produtos/apostilas-academicas/provao-paulista.png"
                    title="Apostila Provão Paulista"
                    subtitle="100 questões com resoluções"
                    badge="Vestibular Seriado"
                    isDestaque={false}
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-wine-50 text-wine-800 border border-wine-200">
                    Ensino Médio
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                  Apostila Provão Paulista
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Uma proposta de preparação com 100 questões, espaço para resolução, QR Codes e resoluções em texto e vídeo.
                </p>

                <div className="space-y-2 mb-8 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>100 questões com espaço de desenvolvimento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>Resoluções comentadas em texto e em vídeo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>Foco em USP, UNICAMP, UNESP e FATEC</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                {onNavigateToProvao ? (
                  <button
                    onClick={onNavigateToProvao}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all cursor-pointer"
                  >
                    <span>Conhecer a apostila</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <a
                    href="#provao-paulista"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all"
                  >
                    <span>Conhecer a apostila</span>
                    <ArrowRight size={16} />
                  </a>
                )}

                {onOpenFlipBook && (
                  <button
                    type="button"
                    onClick={() => onOpenFlipBook('provao-paulista')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors cursor-pointer"
                  >
                    <Sparkles size={14} className="text-wine-800" />
                    <span>Folhear Amostra (9 Páginas 3D)</span>
                  </button>
                )}

                <a
                  href={CAKTO_PROVAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <span>Adquirir Agora</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Apostila OBMEP Vol. 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => onOpenFlipBook?.('obmep')}
                  className={`flex justify-center mb-6 ${onOpenFlipBook ? 'cursor-pointer' : ''}`}
                  title={onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
                >
                  <PerspectiveBook
                    size="default"
                    coverImage="/assets/produtos/apostilas-academicas/obmep-vol-1.png"
                    title="Apostila da OBMEP — Vol. 1"
                    subtitle="3 Níveis com QR Codes"
                    badge="Olimpíada Brasileira"
                    isDestaque={true}
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-wine-800 text-white shadow-sm">
                    3 Níveis Reunidos
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                  Apostila OBMEP Vol. 1
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Questões dos últimos três anos dos três níveis da OBMEP, com resoluções escritas detalhadas e explicações em vídeo acessadas por QR Codes.
                </p>

                <div className="space-y-2 mb-8 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>Nível 1 (6º e 7º), Nível 2 (8º e 9º) e Nível 3 (Ensino Médio)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>Resoluções passo a passo com raciocínio lógico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine-800" />
                    <span>QR Codes com explicações audiovisuais em cada questão</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                {onNavigateToObmep ? (
                  <button
                    onClick={onNavigateToObmep}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all cursor-pointer"
                  >
                    <span>Conhecer a apostila</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <a
                    href="#obmep"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all"
                  >
                    <span>Conhecer a apostila</span>
                    <ArrowRight size={16} />
                  </a>
                )}

                {onOpenFlipBook && (
                  <button
                    type="button"
                    onClick={() => onOpenFlipBook('obmep')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors cursor-pointer"
                  >
                    <Sparkles size={14} className="text-wine-800" />
                    <span>Folhear Amostra (10 Páginas 3D)</span>
                  </button>
                )}

                <a
                  href={OBMEP_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <span>Adquirir Agora</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. SEÇÃO — 1º LIVRO PUBLICADO: PRODUTIVIDADE INTELIGENTE  */}
      {/* ========================================================= */}
      <section id="produtividade-inteligente" className="py-24 bg-gradient-to-b from-neutral-950 via-[#0e0306] to-neutral-950 text-white relative overflow-hidden border-b border-neutral-800">
        {/* Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-wine-800/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-wine-900/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl border border-wine-500/30 bg-gradient-to-br from-neutral-900/90 via-black to-wine-950/40 p-5 sm:p-10 md:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="lg:grid lg:grid-cols-12 lg:gap-14 items-center">
              
              {/* Left Column: Book Presentation & Copy */}
              <div className="lg:col-span-7 text-center lg:text-left mb-12 lg:mb-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/80 border border-wine-500/40 text-wine-200 text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles size={14} className="text-wine-400" />
                  <span>1º Livro Publicado • Vinícius Magagnini</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Produtividade Inteligente
                </h2>

                <p className="mt-2 text-lg sm:text-xl font-serif italic text-wine-300">
                  Do estudo ao resultado
                </p>

                <p className="mt-5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  "Este não é apenas um livro sobre estudos. É um convite à transformação. Você vai descobrir como estudar de forma eficaz, organizar sua rotina e, principalmente, cultivar uma mentalidade poderosa para vencer o desânimo, a procrastinação e o medo de não ser capaz."
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-neutral-300 italic">
                  "Em um mundo de distrações, quem se supera se torna rei! Não perca mais para si mesmo: organize-se, aprenda a estudar e vença."
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-wine-400 flex-shrink-0" />
                    <span>Aprovado em +8 Federais e na USP</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-wine-400 flex-shrink-0" />
                    <span>Exatas, autoconhecimento e método</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-wine-400 flex-shrink-0" />
                    <span>Elimine o desânimo e a procrastinação</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-wine-400 flex-shrink-0" />
                    <span>Formato digital para ler em qualquer lugar</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center">
                  <button
                    onClick={() => {
                      if (onNavigateToProdutividade) {
                        onNavigateToProdutividade();
                      } else {
                        window.open('/#produtividade-inteligente', '_blank');
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-600 hover:from-wine-700 hover:to-wine-500 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all cursor-pointer group"
                  >
                    <span>Conhecer o livro e a história</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {onOpenFlipBook && (
                    <button
                      type="button"
                      onClick={() => onOpenFlipBook('produtividade-inteligente')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
                    >
                      <Sparkles size={16} className="text-wine-400" />
                      <span>Folhear Amostra (18 Pág. 3D)</span>
                    </button>
                  )}

                  <a
                    href="https://pay.cakto.com.br/un24g4z_1240721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs sm:text-sm font-semibold text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                  >
                    <span>Adquirir Agora</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Book Cover (Clicking redirects to the new tab / landing page!) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div 
                  onClick={() => {
                    if (onNavigateToProdutividade) {
                      onNavigateToProdutividade();
                    } else {
                      window.open('/#produtividade-inteligente', '_blank');
                    }
                  }}
                  className="relative group cursor-pointer flex flex-col items-center"
                  title="Clique para abrir a página oficial do livro"
                >
                  <div className="absolute -inset-4 bg-wine-800/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Perspective 3D Book */}
                  <div className="py-2 transition-transform duration-300 group-hover:scale-105">
                    <PerspectiveBook
                      size="lg"
                      coverImage="/assets/produtos/apostilas-academicas/PRODUTIVIDADE INTELIGENTE CAPA.jpeg"
                      title="Produtividade Inteligente"
                      subtitle="Do estudo ao resultado"
                      badge="1º Livro Publicado"
                      isDestaque={true}
                    />
                  </div>

                  <span className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-wine-200 bg-white/10 group-hover:bg-wine-800 border border-white/20 transition-all shadow-md">
                    <Sparkles size={13} className="text-wine-400" />
                    <span>Clique para ver detalhes do livro →</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. CTA FINAL — ALUNOS                                    */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-wine-950 to-black text-white relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-4">
            Rumo à Sua Próxima Conquista
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Você não precisa estudar sem direção.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Comece com uma questão, aprenda com cada erro e construa sua preparação passo a passo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#conteudos-gratuitos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-3d-wine transition-all"
            >
              <Play size={18} className="fill-white" />
              <span>Acessar conteúdos gratuitos</span>
            </a>
            <a
              href="#apostilas-estudantes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-neutral-900 bg-white hover:bg-neutral-100 transition-all"
            >
              <BookOpen size={18} />
              <span>Conhecer as apostilas</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FOOTER                                                */}
      {/* ========================================================= */}
      <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/logo-branca.png"
                alt="Magagnini Educação"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/LOGO BRANCA PNG.png";
                }}
              />
              <span className="text-xs text-neutral-400">
                Magagnini Educação • Área do Aluno
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
              {onBackToMagagnini && (
                <button onClick={onBackToMagagnini} className="hover:text-white transition-colors cursor-pointer">
                  Portal Geral
                </button>
              )}
              {onNavigateToProfessores && (
                <button onClick={onNavigateToProfessores} className="hover:text-white transition-colors cursor-pointer">
                  Área do Professor
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
