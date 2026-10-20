import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  BookOpen, 
  Clock, 
  Users, 
  FileText, 
  CheckCircle2, 
  Menu, 
  X
} from 'lucide-react';

interface GestoresPageProps {
  onBackToMagagnini?: () => void;
  onNavigateToAlunos?: () => void;
  onNavigateToProfessores?: () => void;
  onNavigateToThemis?: () => void;
  onNavigateToAtheneum?: () => void;
}

export function GestoresPage({
  onBackToMagagnini,
  onNavigateToAlunos,
  onNavigateToProfessores,
  onNavigateToThemis,
  onNavigateToAtheneum
}: GestoresPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER NAVEGAÇÃO GESTORES                              */}
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
                  Área do Gestor
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm font-semibold text-neutral-700 whitespace-nowrap">
              <a href="#organizacao" className="hover:text-wine-800 transition-colors whitespace-nowrap">Importância</a>
              <a href="#themis-class" className="hover:text-wine-800 transition-colors whitespace-nowrap">Themis Class</a>
              <a href="#atheneum-lib" className="hover:text-wine-800 transition-colors whitespace-nowrap">Atheneum Lib</a>
              <a href="#beneficios" className="hover:text-wine-800 transition-colors whitespace-nowrap">Benefícios</a>
              
              <div className="h-4 w-px bg-neutral-300 mx-1 xl:mx-2 flex-shrink-0" />

              {onNavigateToAlunos && (
                <button 
                  onClick={onNavigateToAlunos}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  Alunos →
                </button>
              )}
              {onNavigateToProfessores && (
                <button 
                  onClick={onNavigateToProfessores}
                  className="text-neutral-500 hover:text-wine-800 text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  Professores →
                </button>
              )}
            </nav>

            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="#themis-class"
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                <span>Soluções Digitais</span>
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
              href="#organizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Organização Escolar
            </a>
            <a 
              href="#themis-class" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Themis Class — Ocorrências
            </a>
            <a 
              href="#atheneum-lib" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Atheneum Lib — Bibliotecas
            </a>
            <a 
              href="#beneficios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Benefícios para a Gestão
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
              {onNavigateToProfessores && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigateToProfessores(); }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-wine-800"
                >
                  Ir para Área do Professor →
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — GESTORES                                        */}
      {/* ========================================================= */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-to-b from-neutral-950 via-[#070103] to-neutral-950 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-wine-800/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-wine-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/60 border border-wine-500/40 text-wine-200 text-xs font-bold uppercase tracking-wider mb-6">
                <Building2 size={15} className="text-wine-400" />
                <span>Gestão Escolar & Tecnologia Administrativa</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Uma escola organizada consegue acompanhar melhor seus processos.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Conheça soluções digitais para organizar informações, acompanhar ocorrências escolares e estruturar a gestão da biblioteca.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#themis-class"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-700 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all"
                >
                  <ShieldCheck size={18} />
                  <span>Conhecer gestão de ocorrências</span>
                </a>

                <a
                  href="#atheneum-lib"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-md"
                >
                  <BookOpen size={18} />
                  <span>Conhecer gestão de bibliotecas</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 text-left">
                <div>
                  <div className="text-wine-400 font-bold text-lg">Centralização</div>
                  <div className="text-xs text-neutral-400">Tudo em uma única tela</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">Segurança</div>
                  <div className="text-xs text-neutral-400">Nuvem e permissões</div>
                </div>
                <div>
                  <div className="text-wine-400 font-bold text-lg">Comunicação</div>
                  <div className="text-xs text-neutral-400">Escola + Famílias</div>
                </div>
              </div>
            </div>

            {/* Right: Solutions Graphic Showcase */}
            <div className="mt-14 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md rounded-3xl bg-neutral-900 border border-neutral-800 p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">gestao.magagnini.app</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-wine-900/60 text-wine-400 flex items-center justify-center font-bold">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Themis Class</div>
                        <div className="text-xs text-neutral-400">Ocorrências & Famílias</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-wine-800/80 text-wine-200 px-2.5 py-1 rounded-full">
                      Ativo
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 text-rose-300 flex items-center justify-center font-bold">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Atheneum Lib</div>
                        <div className="text-xs text-neutral-400">Gestão de Bibliotecas</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                      Cloud
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-center">
                  <p className="text-xs text-neutral-400">
                    Soluções sob medida para diretores, mantenedores e coordenadores
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. A IMPORTÂNCIA DA ORGANIZAÇÃO ESCOLAR                   */}
      {/* ========================================================= */}
      <section id="organizacao" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Rotina & Eficiência
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Informação organizada ajuda a escola a agir com mais clareza.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              A rotina escolar envolve registros, comunicações, acompanhamento de situações e organização de informações. Quando esses processos estão dispersos, torna-se mais difícil consultar históricos, acompanhar providências e manter uma visão organizada do que acontece na escola. Ferramentas digitais podem ajudar a centralizar informações, padronizar processos e facilitar o acesso aos registros conforme as permissões de cada usuário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-6 border border-wine-100">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Histórico organizado</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Consulte registros e acompanhe informações relevantes ao longo do tempo, evitando perdas de dados e retrabalho da equipe gestora.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-6 border border-wine-100">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Comunicação estruturada</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Organize os processos de comunicação entre escola e responsáveis com transparência, agilidade e registro formal de notificações.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-6 border border-wine-100">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Acompanhamento</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Registre as ações realizadas e facilite a continuidade do trabalho pedagógico e administrativo entre coordenação e professores.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THEMIS CLASS — GESTÃO DE OCORRÊNCIAS                   */}
      {/* ========================================================= */}
      <section id="themis-class" className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-wine-50 text-wine-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
                <ShieldCheck size={14} className="text-wine-700" />
                <span>Gestão Escolar & Ocorrências</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Themis Class
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-wine-800 mb-6">
                Gestão de Ocorrências Escolares
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                O Themis Class é uma solução digital para apoiar o registro, a organização e o acompanhamento das ocorrências escolares, além de facilitar a comunicação entre a escola e os responsáveis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Registro ágil de ocorrências',
                  'Cadastro de alunos, turmas e professores',
                  'Comunicação direta com responsáveis',
                  'Histórico pedagógico e disciplinar do aluno',
                  'Relatórios de gestão e acompanhamento',
                  'Desdobramentos e providências registradas'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                {onNavigateToThemis ? (
                  <button
                    onClick={onNavigateToThemis}
                    className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover transition-all cursor-pointer"
                  >
                    <span>Conhecer o Themis Class</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <a
                    href="#themis-class"
                    className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover transition-all"
                  >
                    <span>Conhecer o Themis Class</span>
                    <ArrowRight size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Visual Column */}
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="rounded-3xl bg-neutral-900 p-6 border border-neutral-800 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">themisclass.app</span>
                  <div className="w-6" />
                </div>

                <div className="aspect-[4/3] rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src="/assets/produtos/solucoes-digitais/themis-class.png"
                    alt="Themis Class"
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/logo/themis-class.png";
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ATHENEUM LIB — GESTÃO DE BIBLIOTECAS                   */}
      {/* ========================================================= */}
      <section id="atheneum-lib" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="order-2 lg:order-1 lg:col-span-6 mt-12 lg:mt-0">
              <div className="rounded-3xl bg-neutral-900 p-6 border border-neutral-800 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">atheneumlib.app</span>
                  <div className="w-6" />
                </div>

                <div className="aspect-[4/3] rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src="/assets/produtos/solucoes-digitais/atheneum-lib.png"
                    alt="Atheneum Lib"
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/logo/atheneum-lib.png";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-wine-50 text-wine-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
                <BookOpen size={14} className="text-wine-700" />
                <span>Gestão de Bibliotecas</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Atheneum Lib
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-wine-800 mb-6">
                Gestão de Bibliotecas Escolares
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                Uma biblioteca organizada facilita a localização dos materiais, o controle do acervo e a organização da rotina de atendimento. O Atheneum Lib é a solução digital da Magagnini Educação voltada à gestão de bibliotecas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Gestão digital completa do acervo',
                  'Controle simplificado de empréstimos e devoluções',
                  'Histórico de leitura dos estudantes',
                  'Catálogo online de consulta ágil',
                  'Organização de exemplares por gênero e autor',
                  'Plataforma 100% online em nuvem'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                    <CheckCircle2 size={16} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                {onNavigateToAtheneum ? (
                  <button
                    onClick={onNavigateToAtheneum}
                    className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover transition-all cursor-pointer"
                  >
                    <span>Conhecer o Atheneum Lib</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <a
                    href="#atheneum-lib"
                    className="inline-flex items-center justify-center gap-2.5 bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-3d-wine hover:shadow-3d-wine-hover transition-all"
                  >
                    <span>Conhecer o Atheneum Lib</span>
                    <ArrowRight size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BENEFÍCIOS PARA A GESTÃO                               */}
      {/* ========================================================= */}
      <section id="beneficios" className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Impacto Administrativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Mais organização para apoiar as decisões da escola.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Pilares práticos para otimizar o fluxo de trabalho da equipe diretiva e pedagógica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titulo: 'Centralização de informações',
                desc: 'Elimine planilhas soltas e anotações manuais mantendo todos os dados em um sistema único.'
              },
              {
                titulo: 'Maior organização dos registros',
                desc: 'Padronize a forma como ocorrências e empréstimos são catalogados pela equipe.'
              },
              {
                titulo: 'Facilidade de consulta',
                desc: 'Localize fichas de alunos, relatórios de turmas e obras da biblioteca em segundos.'
              },
              {
                titulo: 'Acompanhamento dos processos',
                desc: 'Monitore as providências tomadas e dê continuidade às ações pedagógicas com segurança.'
              },
              {
                titulo: 'Organização do acervo da biblioteca',
                desc: 'Saiba exatamente quais livros estão disponíveis, emprestados ou com devolução pendente.'
              },
              {
                titulo: 'Apoio à rotina administrativa',
                desc: 'Economize tempo da coordenação e aumente a produtividade da gestão com processos digitais.'
              }
            ].map((ben, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:border-wine-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold text-sm mb-4 border border-wine-100">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-neutral-950 text-lg mb-2">{ben.titulo}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CTA FINAL — GESTORES                                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-wine-950 to-black text-white relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-4">
            Modernização Escolar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Sua escola merece processos mais organizados.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Conheça as soluções digitais da Magagnini Educação e descubra como elas podem apoiar a rotina de gestão da sua instituição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {onNavigateToThemis ? (
              <button
                onClick={onNavigateToThemis}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-3d-wine transition-all cursor-pointer"
              >
                <ShieldCheck size={18} />
                <span>Conhecer o Themis Class</span>
              </button>
            ) : (
              <a
                href="#themis-class"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-700 shadow-3d-wine transition-all"
              >
                <ShieldCheck size={18} />
                <span>Conhecer o Themis Class</span>
              </a>
            )}

            {onNavigateToAtheneum ? (
              <button
                onClick={onNavigateToAtheneum}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-neutral-900 bg-white hover:bg-neutral-100 transition-all cursor-pointer"
              >
                <BookOpen size={18} />
                <span>Conhecer o Atheneum Lib</span>
              </button>
            ) : (
              <a
                href="#atheneum-lib"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-neutral-900 bg-white hover:bg-neutral-100 transition-all"
              >
                <BookOpen size={18} />
                <span>Conhecer o Atheneum Lib</span>
              </a>
            )}
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
                className="h-10 w-auto object-contain rounded"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/MISTA PRETA - 1920X800.png";
                }}
              />
              <span className="text-xs text-neutral-400">
                Magagnini Educação • Área do Gestor
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
              {onNavigateToProfessores && (
                <button onClick={onNavigateToProfessores} className="hover:text-white transition-colors cursor-pointer">
                  Área do Professor
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
