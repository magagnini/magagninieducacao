import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Brain, 
  Target, 
  ShieldCheck, 
  ExternalLink, 
  ChevronDown, 
  Flame, 
  Award,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { motion } from 'framer-motion';

interface ProdutividadeInteligentePageProps {
  onBackToMagagnini?: () => void;
  onNavigateToAlunos?: () => void;
}

export function ProdutividadeInteligentePage({
  onBackToMagagnini,
  onNavigateToAlunos
}: ProdutividadeInteligentePageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Link oficial direto no checkout da Cakto
  const CHECKOUT_URL = "https://pay.cakto.com.br/un24g4z_1240721";

  const faqs = [
    {
      q: 'O livro é físico ou digital?',
      a: 'O livro está disponível em formato digital interativo para leitura imediata em qualquer celular, tablet, computador ou leitor digital (PDF de alta definição), com diagramação moderna e confortável.'
    },
    {
      q: 'Para quem este livro é indicado?',
      a: 'É indicado para vestibulandos (USP, UNICAMP, ENEM, Federais), estudantes do Ensino Médio, concurseiros e qualquer pessoa que queira aprender a estudar com foco, parar de procrastinar e transformar horas de esforço em aprovações reais.'
    },
    {
      q: 'Como vou receber meu acesso após a compra?',
      a: 'Assim que a compra for confirmada no checkout seguro, você receberá imediatamente no seu e-mail o link de acesso com o material completo pronto para leitura.'
    },
    {
      q: 'Possui garantia?',
      a: 'Sim! Você conta com 7 dias de garantia incondicional. Se por qualquer motivo achar que o conteúdo não agregou na sua rotina de estudos, você pode solicitar 100% do seu dinheiro de volta.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER NAVEGAÇÃO                                       */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/80 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => {
                  if (onNavigateToAlunos) onNavigateToAlunos();
                  else if (onBackToMagagnini) onBackToMagagnini();
                  else window.location.href = '/#alunos';
                }}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer whitespace-nowrap"
                title="Voltar à Área do Aluno"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Área do Aluno</span>
              </button>

              <button 
                onClick={onBackToMagagnini || (() => { window.location.href = '/'; })}
                className="flex items-center gap-3 group text-left cursor-pointer flex-shrink-0"
              >
                <img
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-8 sm:h-9 w-auto object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/MISTA BRANCA - 1920X800.png";
                  }}
                />
                <span className="hidden md:inline-block border-l border-neutral-700 pl-3 text-xs font-bold text-wine-400 uppercase tracking-widest whitespace-nowrap">
                  Produtividade Inteligente
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs xl:text-sm font-semibold text-neutral-300 whitespace-nowrap">
              <a href="#sobre-o-livro" className="hover:text-wine-400 transition-colors">Sobre a Obra</a>
              <a href="#pilares" className="hover:text-wine-400 transition-colors">Os 4 Pilares</a>
              <a href="#conteudo" className="hover:text-wine-400 transition-colors">O que você aprende</a>
              <a href="#autor" className="hover:text-wine-400 transition-colors">O Autor</a>
              <a href="#faq" className="hover:text-wine-400 transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-wine-800 to-wine-600 hover:from-wine-700 hover:to-wine-500 shadow-3d-wine hover:shadow-3d-wine-hover transition-all whitespace-nowrap"
              >
                <span>Garantir Meu Exemplar</span>
                <ArrowRight size={14} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <a 
              href="#sobre-o-livro" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800"
            >
              Sobre a Obra
            </a>
            <a 
              href="#pilares" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800"
            >
              Os 4 Pilares
            </a>
            <a 
              href="#conteudo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800"
            >
              O que você aprende
            </a>
            <a 
              href="#autor" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800"
            >
              O Autor
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800"
            >
              FAQ
            </a>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — PRODUTIVIDADE INTELIGENTE                       */}
      {/* ========================================================= */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-[#0d0305] to-neutral-950">
        
        {/* Atmosphere Glowing Effects */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-wine-800/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[450px] h-[450px] bg-wine-900/15 rounded-full blur-[110px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/80 border border-wine-500/40 text-wine-200 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-400" />
                <span>Primeiro Livro Publicado • Vinícius Magagnini</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Produtividade <span className="bg-gradient-to-r from-wine-400 via-rose-300 to-amber-200 bg-clip-text text-transparent">Inteligente</span>
              </h1>
              
              <p className="mt-3 text-xl sm:text-2xl font-serif italic text-wine-200">
                Do estudo ao resultado.
              </p>

              {/* Tagline from book cover */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
                <p className="text-sm sm:text-base text-neutral-300 font-medium italic leading-relaxed">
                  "Em um mundo de distrações, quem se supera se torna rei! Não perca mais para si mesmo: organize-se, aprenda a estudar e vença."
                </p>
              </div>

              {/* Back cover description excerpt */}
              <p className="mt-6 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Este não é apenas um livro sobre estudos. É um convite à transformação. Você vai descobrir como estudar de forma eficaz, organizar sua rotina e cultivar uma mentalidade poderosa para vencer o desânimo, a procrastinação e o medo de não ser capaz.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-600 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all group"
                >
                  <Flame size={18} className="text-amber-300 animate-pulse" />
                  <span>Garantir meu exemplar agora</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#sobre-o-livro"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                >
                  <BookOpen size={18} className="text-wine-400" />
                  <span>Conhecer a obra ↓</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 text-left">
                <div>
                  <div className="text-wine-400 font-black text-lg">+8 Universidades</div>
                  <div className="text-xs text-neutral-400">Aprovações em Federais</div>
                </div>
                <div>
                  <div className="text-wine-400 font-black text-lg">Aprovado na USP</div>
                  <div className="text-xs text-neutral-400">Melhor faculdade do país</div>
                </div>
                <div>
                  <div className="text-wine-400 font-black text-lg">Método Prático</div>
                  <div className="text-xs text-neutral-400">Exatas + Mentalidade</div>
                </div>
              </div>
            </motion.div>

            {/* Right Showcase: 3D Book & Cover Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 lg:mt-0 lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              {/* Container with glowing card background */}
              <div className="relative group w-full max-w-md flex flex-col items-center">
                <div className="absolute -inset-4 bg-gradient-to-tr from-wine-800/30 via-wine-600/20 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* 3D Perspective Book */}
                <div className="relative py-4 flex justify-center [perspective:1200px]">
                  <PerspectiveBook
                    size="lg"
                    coverImage="/assets/produtos/livros/produtividade-inteligente-capa.png"
                    title="Produtividade Inteligente"
                    subtitle="do estudo ao resultado"
                    badge="1º Livro Publicado"
                    isDestaque={true}
                  />
                </div>

                {/* Subtitle Card with Quick Summary */}
                <div className="mt-6 w-full p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-2xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-2 text-xs font-bold text-wine-400 uppercase tracking-wider">
                    <Award size={15} />
                    <span>Obra Autoral • Vinícius Magagnini</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Une exatas, autoconhecimento e desenvolvimento pessoal de um jeito único e jamais visto para sua vida acadêmica.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. A HISTÓRIA & PROPOSTA DA OBRA                          */}
      {/* ========================================================= */}
      <section id="sobre-o-livro" className="py-24 bg-neutral-900/60 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Por que este livro existe?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O que separa você dos seus maiores objetivos não é falta de inteligência.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Muitos estudantes passam horas sentados na frente de livros e videoaulas, sentindo que o tempo voa mas o conteúdo não entra. O problema não é você: é a falta de um método estruturado que conecte seu estado emocional, sua rotina prática e a forma certa de absorver conhecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-wine-500/40 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-900/40 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-700/40">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mentalidade Poderosa</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Aprenda a vencer a voz interna do desânimo, a ansiedade das provas decisivas e a insegurança de achar que não vai dar conta.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-wine-500/40 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-900/40 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-700/40">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Foco sem Distrações</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Técnicas concretas para blindar seu ambiente, dominar a atenção profunda e eliminar de vez as pausas involuntárias no celular.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-wine-500/40 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-900/40 text-wine-400 flex items-center justify-center font-bold mb-6 border border-wine-700/40">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Estudo em Resultado</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                A metodologia que transformou o aprendizado de exatas em uma alavanca para aprovação em mais de 8 federais e na USP.
              </p>
            </div>
          </div>

          {/* Full Mockup Showcase Section */}
          <div className="mt-16 rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 mb-8 lg:mb-0">
                <span className="text-xs font-bold text-wine-400 uppercase tracking-widest block mb-2">
                  Visão Geral da Edição
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Uma obra completa para transformar sua trajetória.
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  "Com reflexões profundas, técnicas práticas e experiências pessoais marcantes que me fizeram chegar na melhor universidade do país, ser aprovado em mais de 8 universidades federais, me manter lá dentro e ter sucesso no que tange os meus próprios projetos pessoais, esta obra une exatas, autoconhecimento e desenvolvimento pessoal de um jeito único e jamais visto."
                </p>
                <div className="space-y-2 text-xs text-neutral-400 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-wine-400 flex-shrink-0" />
                    <span>Linguagem direta, sem enrolação ou teorias vazias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-wine-400 flex-shrink-0" />
                    <span>Exercícios práticos de mentalidade e organização</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-wine-400 flex-shrink-0" />
                    <span>Formato digital para ler em qualquer lugar</span>
                  </div>
                </div>

                <a
                  href={KIWIFY_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-md transition-all"
                >
                  <span>Adquirir o livro agora</span>
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Book Spread Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative group max-w-md w-full">
                  <div className="absolute -inset-2 bg-wine-800/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />
                  <img
                    src="/assets/produtos/livros/produtividade-inteligente.png"
                    alt="Mockup do Livro Produtividade Inteligente"
                    className="w-full h-auto rounded-2xl border border-neutral-800 shadow-2xl object-contain filter drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/produtos/livros/produtividade-inteligente-capa.png";
                    }}
                  />
                  <div className="mt-3 text-center text-xs text-neutral-500">
                    Edição Oficial • Magagnini Educação
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OS 4 PILARES DA PRODUTIVIDADE INTELIGENTE              */}
      {/* ========================================================= */}
      <section id="pilares" className="py-24 bg-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Metodologia de Alta Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Os 4 Pilares da Produtividade Inteligente
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              A estrutura que você precisa para dominar a rotina de estudos e conquistar resultados consistentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-wine-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-wine-400 tracking-wider uppercase mb-2 block">
                  Pilar 01
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Mentalidade & Autodomínio</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Como reconfigurar sua mente para lidar com a frustração dos erros, eliminar o medo de não ser aprovado e manter a disciplina inabalável mesmo nos dias em que a motivação sumir.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-wine-400" />
                <span>Supere a procrastinação na raiz</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-wine-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-wine-400 tracking-wider uppercase mb-2 block">
                  Pilar 02
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Gestão de Tempo & Rotina Real</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Chega de cronogramas irreais de 14 horas que você abandona na primeira semana. Construa uma rotina sustentável que se adapta à sua vida, aos imprevistos e protege seu descanso.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-wine-400" />
                <span>Constância sustentável a longo prazo</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-wine-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-wine-400 tracking-wider uppercase mb-2 block">
                  Pilar 03
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Aprendizagem Ativa & Retenção</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  Como estudar matérias difíceis (especialmente Matemática e Ciências) de forma a entender a lógica profunda dos conceitos, evitando o esquecimento nas semanas anteriores à prova.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-wine-400" />
                <span>Fixação permanente de conteúdo</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-wine-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-wine-400 tracking-wider uppercase mb-2 block">
                  Pilar 04
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Estratégia de Prova & Alta Performance</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  O que fazer nos dias que antecedem vestibulares e olimpíadas. Controle de tempo por questão, gerenciamento de estresse no dia D e estratégias táticas de pontuação.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-wine-400" />
                <span>Transforme preparo em nota na lista de chamada</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SOBRE O AUTOR                                          */}
      {/* ========================================================= */}
      <section id="autor" className="py-24 bg-neutral-900/40 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-neutral-950 via-[#0d0305] to-neutral-950 border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-wine-800/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-2">
                Conheça o Autor
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Vinícius Magagnini Lima
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed mb-6">
                Educador, autor e fundador da <strong>Magagnini Educação</strong>. Conquistou aprovação na <strong>Universidade de São Paulo (USP)</strong> — considerada a melhor universidade do país — e em mais de <strong>8 universidades federais</strong> de ponta.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                Toda a metodologia compartilhada nesta obra foi testada e lapidada em anos de dedicação real aos estudos, enfrentando os mesmos desafios de desânimo, pressão familiar e rotina sobrecarregada que milhares de estudantes enfrentam todos os dias. Este livro é o atalho consolidado para você atingir seus maiores objetivos acadêmicos.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800 text-center">
                <div className="p-3 rounded-2xl bg-white/[0.03]">
                  <div className="text-lg font-bold text-white">USP</div>
                  <div className="text-[11px] text-neutral-400">Universidade de SP</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03]">
                  <div className="text-lg font-bold text-white">+8 Federais</div>
                  <div className="text-[11px] text-neutral-400">Aprovações Oficiais</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03]">
                  <div className="text-lg font-bold text-white">+100k</div>
                  <div className="text-[11px] text-neutral-400">Alunos Impactados</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03]">
                  <div className="text-lg font-bold text-white">Autor</div>
                  <div className="text-[11px] text-neutral-400">Livro Publicado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OFERTA & CHECKOUT                                      */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 via-[#100306] to-neutral-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Comece Hoje Mesmo Sua Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Garanta Seu Exemplar de Produtividade Inteligente
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
            Acesso imediato ao material completo com método prático, orientações claras e garantia de satisfação.
          </p>

          <div className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 bg-neutral-900/90 border border-wine-500/40 shadow-[0_20px_60px_rgba(155,17,30,0.25)] relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-wine-800 text-white text-xs font-black uppercase tracking-wider rounded-bl-2xl">
              Edição Oficial
            </div>

            <div className="text-left mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Livro Produtividade Inteligente</h3>
              <p className="text-xs text-wine-300 font-medium">Do estudo ao resultado • Por Vinícius Magagnini</p>
            </div>

            <div className="space-y-3 mb-8 text-left text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-wine-400 flex-shrink-0" />
                <span>Livro digital completo em alta definição</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-wine-400 flex-shrink-0" />
                <span>Método prático de organização de rotina</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-wine-400 flex-shrink-0" />
                <span>Estratégias de foco profundo e retenção</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-wine-400 flex-shrink-0" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-600 shadow-3d-wine hover:shadow-3d-wine-hover hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <span>Comprar Meu Livro Agora</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheck size={16} className="text-wine-400" />
              <span>Compra 100% segura e processamento instantâneo</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FAQ                                                    */}
      {/* ========================================================= */}
      <section id="faq" className="py-24 bg-neutral-900/60 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Perguntas Frequentes sobre o Livro
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div 
                key={i}
                className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-white text-base">{f.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-wine-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/50 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-neutral-900">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/magagnini-mista-preta.png"
                alt="Magagnini Educação"
                className="h-9 w-auto object-contain rounded"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/MISTA PRETA - 1920X800.png";
                }}
              />
              <span className="text-xs text-neutral-400">
                Magagnini Educação • Produtividade Inteligente
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
              <button 
                onClick={onBackToMagagnini || (() => { window.location.href = '/'; })} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Portal Geral
              </button>
              <button 
                onClick={onNavigateToAlunos || (() => { window.location.href = '/#alunos'; })} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Área do Aluno
              </button>
              <a 
                href={CHECKOUT_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wine-400 hover:text-wine-300 font-bold transition-colors"
              >
                Comprar Livro →
              </a>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Vinícius Magagnini • Magagnini Educação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
