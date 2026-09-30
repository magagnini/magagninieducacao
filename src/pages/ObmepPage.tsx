import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  QrCode, 
  Video, 
  Compass, 
  Award, 
  Check, 
  GraduationCap, 
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { EmpilhamentoDeVantagens } from '../components/EmpilhamentoDeVantagens';

const COMPRA_URL = "https://obmep-1-edicao.vercel.app/#comprar";

interface ObmepPageProps {
  onBackToMagagnini?: () => void;
}

export function ObmepPage({ onBackToMagagnini }: ObmepPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const vantagensEmpilhamento = [
    {
      titulo: '📘 Apostila Principal',
      descricao: 'Questões rigorosamente organizadas por nível e ano para um treinamento metódico e direcionado.',
      icone: <BookOpen className="w-5 h-5 text-wine-800" />,
      beneficio: 'Treinamento completo e focado nas provas reais'
    },
    {
      titulo: '✍️ Resoluções Escritas Detalhadas',
      descricao: 'Entenda cada linha de raciocínio passo a passo, sem saltos lógicos ou respostas mecânicas.',
      icone: <Compass className="w-5 h-5 text-wine-800" />,
      beneficio: 'Compreensão profunda do raciocínio matemático'
    },
    {
      titulo: '📱 QR Codes em Cada Questão',
      descricao: 'Acesso instantâneo com a câmera do celular direto na página onde você está resolvendo a questão.',
      icone: <QrCode className="w-5 h-5 text-wine-800" />,
      beneficio: 'Sem perder tempo procurando vídeos ou links'
    },
    {
      titulo: '🎥 Resoluções em Vídeo',
      descricao: 'Aprenda visualmente com a explicação clara do professor resolvendo na lousa digital.',
      icone: <Video className="w-5 h-5 text-wine-800" />,
      beneficio: 'Fixação visual de conceitos e técnicas operatórias'
    },
    {
      titulo: '🧠 Estratégias de Raciocínio',
      descricao: 'Desenvolva diferentes caminhos, intuição matemática e métodos analíticos para problemas olímpicos.',
      icone: <Sparkles className="w-5 h-5 text-wine-800" />,
      beneficio: 'Autonomia para solucionar questões inéditas'
    },
    {
      titulo: '📚 Questões dos Últimos Anos',
      descricao: 'Seleção minuciosa cobrindo as edições de 2023 a 2025 para refletir o padrão atual da prova.',
      icone: <Award className="w-5 h-5 text-wine-800" />,
      beneficio: 'Alinhamento 100% fiel às tendências recentes da banca'
    },
    {
      titulo: '🔄 Atualizações Futuras Inclusas',
      descricao: 'Mais de 100 novos QR Codes serão adicionados futuramente com a visão de outro professor.',
      icone: <CheckCircle2 className="w-5 h-5 text-wine-800" />,
      badge: 'Incluso',
      isBonus: true,
      beneficio: 'Múltiplas abordagens e novas resoluções garantidas'
    }
  ];

  const faqs = [
    {
      q: 'A apostila atende a todos os níveis da OBMEP?',
      a: 'Sim! O material reúne questões selecionadas dos 3 níveis: Nível 1 (6º e 7º ano), Nível 2 (8º e 9º ano) e Nível 3 (Ensino Médio).'
    },
    {
      q: 'Como funcionam os vídeos nos QR Codes?',
      a: 'Cada questão possui um QR Code impresso logo ao lado. Basta apontar a câmera do smartphone para abrir a resolução em vídeo correspondente instantaneamente.'
    },
    {
      q: 'O que são as atualizações futuras inclusas?',
      a: 'Você receberá sem custo adicional as atualizações de conteúdo, incluindo mais de 100 novos vídeos com visões complementares e estratégias alternativas de resolução de outros professores renomados.'
    },
    {
      q: 'Como recebo o acesso ao material?',
      a: 'Ao concluir sua compra pela página oficial, o acesso ao material e a todos os recursos complementares é enviado imediatamente para o seu e-mail cadastrado.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER NAVEGAÇÃO                                       */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Voltar */}
            <div className="flex items-center gap-3">
              {onBackToMagagnini && (
                <button
                  onClick={onBackToMagagnini}
                  className="mr-2 p-2 rounded-xl text-neutral-500 hover:text-wine-800 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Voltar ao portal Magagnini Educação"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Magagnini Educação</span>
                </button>
              )}
              
              <a href="#inicio" className="flex items-center gap-3 group">
                <img
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/logo.png";
                  }}
                />
                <span className="hidden sm:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest">
                  OBMEP Preparatório
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#o-que-encontrar" className="hover:text-wine-800 transition-colors">O que você encontra</a>
              <a href="#experiencia-guiada" className="hover:text-wine-800 transition-colors">Metodologia Guiada</a>
              <a href="#atualizacoes" className="hover:text-wine-800 transition-colors">Atualizações</a>
              <a href="#professores" className="hover:text-wine-800 transition-colors">Professores</a>
              <a href="#vantagens" className="hover:text-wine-800 transition-colors">Vantagens</a>
              <a href="#depoimentos" className="hover:text-wine-800 transition-colors">Depoimentos</a>
            </nav>

            {/* CTA Topo */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={COMPRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-wine-500/40"
              >
                <span>Garantir Apostila</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile trigger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-neutral-700 hover:text-wine-800 hover:bg-neutral-100"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a 
              href="#o-que-encontrar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              O que você encontra
            </a>
            <a 
              href="#experiencia-guiada" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Metodologia Guiada
            </a>
            <a 
              href="#atualizacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Atualizações Futuras
            </a>
            <a 
              href="#professores" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Professores
            </a>
            <a 
              href="#vantagens" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Vantagens
            </a>
            <div className="pt-2">
              <a
                href={COMPRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-wine-800 shadow"
              >
                <span>QUERO GARANTIR MINHA APOSTILA</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — APOSTILA OBMEP (REGRA 27)                       */}
      {/* ========================================================= */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-700" />
                <span>Olimpíada Brasileira de Matemática das Escolas Públicas</span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Apostila da OBMEP.<br />
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  A Preparação Definitiva.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Questões dos últimos 3 anos dos 3 níveis da OBMEP com resoluções escritas detalhadas e em vídeo.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                {[
                  'Resoluções escritas detalhadas',
                  'QR Codes com resolução em vídeo',
                  'Explicações passo a passo',
                  'Material ideal para treinar para a OBMEP'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800">
                    <CheckCircle2 size={18} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href={COMPRA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all border border-wine-600/40"
                >
                  <span>QUERO GARANTIR MINHA APOSTILA</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#o-que-encontrar"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-700 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all"
                >
                  <span>Ver Conteúdo Completo ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Real Book Cover in 3D Perspective */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-wine-800/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/apostilas-academicas/obmep-vol-1.png"
                  title="Apostila OBMEP"
                  subtitle="Volume 1 • 2023 a 2025"
                  badge="3 Níveis • Com Vídeos"
                  isDestaque={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. O QUE VOCÊ VAI ENCONTRAR NA APOSTILA (REGRA 28)        */}
      {/* ========================================================= */}
      <section id="o-que-encontrar" className="py-24 bg-neutral-50/70 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Estrutura do Material
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              O que você vai encontrar na apostila
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Níveis organizados, separação por ano e uma metodologia imersiva.
            </p>
          </div>

          {/* 3 Cards de Nível */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            
            {/* Nível 1 */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-amber-500 text-2xl font-black mb-3">⭐</div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-2 group-hover:text-wine-900 transition-colors">
                  Nível 1
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-100">
                  Para alunos do 6º e 7º ano
                </span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Construindo a base do raciocínio lógico, proporcionalidade, padrões numéricos e problemas geométricos intuitivos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-wine-800">
                <Check size={16} />
                <span>Base sólida e confiança olímpica</span>
              </div>
            </div>

            {/* Nível 2 */}
            <div className="p-8 rounded-3xl bg-white border-2 border-wine-300/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group bg-gradient-to-b from-wine-50/20 to-white">
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-wine-800 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                Alta Procura
              </div>
              <div>
                <div className="text-amber-500 text-2xl font-black mb-3">⭐⭐</div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-2 group-hover:text-wine-900 transition-colors">
                  Nível 2
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-100">
                  Para alunos do 8º e 9º ano
                </span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Desafios intermediários essenciais: equações, combinatória introdutória, geometria euclidiana e estratégias dedutivas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-wine-100 flex items-center gap-2 text-xs font-semibold text-wine-800">
                <Check size={16} />
                <span>Rumo à classificação para a 2ª fase</span>
              </div>
            </div>

            {/* Nível 3 */}
            <div className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-amber-500 text-2xl font-black mb-3">⭐⭐⭐</div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-2 group-hover:text-wine-900 transition-colors">
                  Nível 3
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-100">
                  Ensino Médio
                </span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Preparação avançada rumo ao ouro: teoria dos números, funções, geometria plana profunda, probabilidades e demonstrações elegantes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-wine-800">
                <Check size={16} />
                <span>Foco em medalhas e menções honrosas</span>
              </div>
            </div>

          </div>

          {/* Destaques em linha */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
            <h4 className="text-lg font-bold text-neutral-900 mb-6 text-center">
              Recursos integrados em cada página do material:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                '✔ Questões selecionadas de 2023 a 2025',
                '✔ Resoluções completas e detalhadas',
                '✔ Estratégias de raciocínio passo a passo',
                '✔ QR Codes em cada questão',
                '✔ Explicações em vídeo'
              ].map((text, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold flex items-center justify-center text-center">
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. EXPERIÊNCIA GUIADA (REGRA 29)                          */}
      {/* ========================================================= */}
      <section id="experiencia-guiada" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Metodologia Ativa de Aprendizagem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Não é só uma apostila. É uma experiência guiada.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Desenvolva autonomia intelectual seguindo o fluxo desenhado por quem é especialista em competições científicas.
            </p>
          </div>

          {/* Sequência Visual em 4 Passos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '1',
                title: 'Resolva a questão',
                desc: 'Tente usar seu próprio raciocínio primeiro. A luta com o problema é a etapa que mais desenvolve o cérebro.',
                icon: <Compass className="w-6 h-6 text-wine-800" />
              },
              {
                step: '2',
                title: 'Confira a resolução escrita',
                desc: 'Leia o passo a passo caso tenha dúvidas. Veja a estrutura lógica de raciocínio formulada de forma limpa.',
                icon: <BookOpen className="w-6 h-6 text-wine-800" />
              },
              {
                step: '3',
                title: 'Escaneie o QR Code',
                desc: 'Aponte o celular diretamente para a página. O vídeo específico da questão abrirá na mesma hora na sua tela.',
                icon: <QrCode className="w-6 h-6 text-wine-800" />
              },
              {
                step: '4',
                title: 'Assista à explicação',
                desc: 'Entenda visualmente cada detalhe da resolução com comentários perspicazes e dicas de prova do professor.',
                icon: <Video className="w-6 h-6 text-wine-800" />
              }
            ].map((step, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-wine-300 hover:shadow-lg transition-all relative group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-wine-800 text-white flex items-center justify-center font-serif font-black text-xl mb-6 shadow-md shadow-wine-900/20 group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-semibold text-wine-800">
                  {step.icon}
                  <span>Etapa essencial</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ATUALIZAÇÕES FUTURAS INCLUSAS (REGRA 30)               */}
      {/* ========================================================= */}
      <section id="atualizacoes" className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-950 border border-wine-800/80 text-wine-300 text-xs font-bold uppercase tracking-wider mb-6">
            <span>🚀 Atualizações futuras inclusas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Mais de 100 novos QR Codes serão adicionados futuramente com a visão de outro professor.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprender matemática olímpica é compreender que existem múltiplos caminhos para a mesma resposta. Ao adquirir hoje, você já garante acesso a todos esses novos vídeos:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
            {[
              'Novas estratégias',
              'Diferentes formas de pensar',
              'Múltiplas abordagens',
              'Novas resoluções'
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-wine-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. QUEM FEZ O MATERIAL (REGRA 31 — CREDIBILIDADE CURTA)   */}
      {/* ========================================================= */}
      <section id="professores" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Corpo Docente e Autoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Quem desenvolveu o material
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Professores e pesquisadores formados pela USP com sólida experiência no ecossistema olímpico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Douglas / Planeta Matemática */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-wine-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-wine-800 text-white flex items-center justify-center font-bold text-lg">
                    PM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 leading-tight">Planeta Matemática</h3>
                    <span className="text-xs font-bold text-wine-800 uppercase tracking-wider">Prof. Dr. Douglas</span>
                  </div>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Douglas é pesquisador e educador formado pela Universidade de São Paulo, Doutor em Matemática pela USP, bacharel em Matemática e formado em Engenharia de Computação pela Faculdade de Tecnologia Termomecânica. Professor orientador da OBMEP e integrante da Comissão Organizadora da Olimpíada de Matemática do Grande ABC.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <GraduationCap size={16} className="text-wine-800" />
                <span>Doutor em Matemática pela USP</span>
              </div>
            </div>

            {/* Vinícius Magagnini / Magagnini Educação */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-wine-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-bold text-lg">
                    ME
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 leading-tight">Magagnini Educação</h3>
                    <span className="text-xs font-bold text-wine-800 uppercase tracking-wider">Vinícius Magagnini</span>
                  </div>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Vinícius Magagnini é graduando em Licenciatura em Matemática pela USP, medalhista da OBMEP e atuante na educação e produção de materiais educacionais de alto rendimento com linguagem acessível e rigor didático.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <Award size={16} className="text-wine-800" />
                <span>Medalhista da OBMEP • IME-USP</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. PARA QUEM É A APOSTILA (REGRA 32)                      */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Destinatários
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Para quem é a apostila OBMEP?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🥇',
                title: 'Alunos que querem se preparar para a OBMEP.',
                desc: 'Treino intensivo para alcançar notas altas na 1ª fase e conquistar medalhas na 2ª fase.'
              },
              {
                icon: '🧠',
                title: 'Estudantes apaixonados por desafios matemáticos.',
                desc: 'Jovens que buscam desenvolver raciocínio lógico avançado além do currículo tradicional.'
              },
              {
                icon: '🏫',
                title: 'Professores que querem listas organizadas.',
                desc: 'Docentes que desejam questões gabaritadas e resolvidas para criar turmas olímpicas na escola.'
              },
              {
                icon: '👪',
                title: 'Pais que procuram material didático.',
                desc: 'Famílias que querem fornecer material estruturado e de alta qualidade para o estudo em casa.'
              }
            ].map((card, i) => (
              <div key={i} className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-wine-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">{card.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. EMPILHAMENTO DE VANTAGENS (REGRA 33 & 56 — ZERO PREÇO) */}
      {/* ========================================================= */}
      <div id="vantagens">
        <EmpilhamentoDeVantagens
          badgeSecao="Recursos Inclusos"
          tituloSecao="O que você encontra neste material"
          subtituloSecao="Um compilado completo para transformar seu treino em conquistas reais."
          vantagens={vantagensEmpilhamento}
          tema="light"
        />
      </div>

      {/* ========================================================= */}
      {/* 9. DEPOIMENTOS (REGRA 34)                                 */}
      {/* ========================================================= */}
      <section id="depoimentos" className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Avaliações Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              O que estão dizendo...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Mariana S.',
                role: 'Aluna do 9º Ano • Medalhista de Bronze',
                quote: 'Os vídeos nos QR Codes salvaram minhas dúvidas. Conseguir ver a explicação do professor na hora em que eu travava na questão fez toda a diferença na minha preparação.'
              },
              {
                name: 'Prof. Carlos Eduardo',
                role: 'Professor de Matemática da Rede Pública',
                quote: 'Uso a apostila com meu clube de matemática na escola. É o melhor material organizado que já encontrei: os 3 níveis separados e resoluções com rigor sem ser confuso.'
              },
              {
                name: 'Lucas P.',
                role: 'Estudante do Ensino Médio • Nível 3',
                quote: 'As resoluções detalham ideias que as soluções oficiais do site não mostram. O passo a passo abre a mente para pensar como um medalhista.'
              }
            ].map((dep, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-wine-700 text-lg mb-3">★★★★★</div>
                  <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                    “{dep.quote}”
                  </p>
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <span className="font-bold text-neutral-950 block text-sm">{dep.name}</span>
                  <span className="text-xs text-neutral-500">{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. OFERTA & CTA FINAL (REGRA 53 — ÁREA COMERCIAL)        */}
      {/* ========================================================= */}
      <section id="comprar" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Garanta Seu Exemplar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Pronto para conquistar sua medalha na OBMEP?
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Acesso imediato às questões selecionadas de 2023 a 2025, resoluções em vídeo via QR Code e atualizações futuras inclusas.
          </p>

          <a
            href={COMPRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-rose-700 hover:from-wine-700 hover:to-rose-600 shadow-2xl hover:scale-105 transition-all border border-wine-500/40"
          >
            <span>QUERO GARANTIR MINHA APOSTILA</span>
            <ExternalLink size={20} />
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-wine-400" />
              Acesso Imediato
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-wine-400" />
              Compra Segura
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-wine-400" />
              Garantia Incondicional
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. FAQ                                                   */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-neutral-200 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-wine-800 transition-colors"
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-neutral-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-wine-800' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-3 bg-neutral-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FOOTER OBMEP                                          */}
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
                Apostila Preparatória OBMEP
              </span>
            </div>

            <a
              href={COMPRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-wine-400 hover:text-wine-300 underline"
            >
              Comprar na Plataforma Oficial →
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Magagnini Educação & Planeta Matemática. Todos os direitos reservados.</p>
            {onBackToMagagnini && (
              <button 
                onClick={onBackToMagagnini}
                className="hover:text-neutral-300 transition-colors"
              >
                ← Voltar para o Portal Magagnini Educação
              </button>
            )}
          </div>
        </div>
      </footer>

    </div>
  );
}
