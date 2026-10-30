import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Microscope, 
  Dna, 
  GraduationCap, 
  Layers, 
  Check, 
  ChevronDown, 
  Menu, 
  X,
  ExternalLink,
  Atom,
  BookOpen
} from 'lucide-react';
import { produtos } from '../data/produtos';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { EmpilhamentoDeVantagens } from '../components/EmpilhamentoDeVantagens';

const WHATSAPP_URL = "https://wa.me/5511998713683?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20Apostilas%20Adaptadas%20de%20Ci%C3%AAncias";

interface CienciasAdaptadaPageProps {
  onBackToMagagnini?: () => void;
  onOpenFlipBook?: () => void;
}

export function CienciasAdaptadaPage({ onBackToMagagnini, onOpenFlipBook }: CienciasAdaptadaPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const vantagensGerais = [
    {
      titulo: '🔬 Atividades Adaptadas com Rigor Científico',
      descricao: 'Conceitos de Biologia, Física, Química e Astronomia explicados de forma clara, contextualizada e acessível.',
      icone: <Microscope className="w-5 h-5 text-wine-800" />,
      beneficio: 'Inclusão pedagógica sem perda de profundidade conceitual'
    },
    {
      titulo: '🧬 Esquemas Visuais e Infográficos Didáticos',
      descricao: 'Ilustrações de células, ecossistemas, corpo humano e reações químicas com apoio visual de alta nitidez.',
      icone: <Dna className="w-5 h-5 text-wine-800" />,
      beneficio: 'Compreensão intuitiva para estudantes visuais e neuroatípicos'
    },
    {
      titulo: '🌍 Alinhamento Completo com a BNCC',
      descricao: 'Todos os eixos temáticos (Matéria e Energia, Vida e Evolução, Terra e Universo) contemplados.',
      icone: <Atom className="w-5 h-5 text-wine-800" />,
      beneficio: 'Segurança no cumprimento integral do currículo escolar'
    },
    {
      titulo: '📝 Exercícios Objetivos e Estruturados',
      descricao: 'Comandos diretos que eliminam a fadiga de leitura e colocam o foco na fixação de conceitos científicos.',
      icone: <GraduationCap className="w-5 h-5 text-wine-800" />,
      beneficio: 'Facilita a avaliação formativa contínua em sala regular ou AEE'
    },
    {
      titulo: '⏱️ Pronto para Impressão e Aplicação',
      descricao: 'Formato prático em alta resolução para uso individual, aulas de reforço ou atividades orientadas.',
      icone: <Layers className="w-5 h-5 text-wine-800" />,
      beneficio: 'Economia imediata de horas no planejamento pedagógico'
    }
  ];

  const faqs = [
    {
      q: 'Quais anos escolares são atendidos pelas apostilas de Ciências?',
      a: 'As apostilas cobrem individualmente o 6º, 7º, 8º e 9º anos do Ensino Fundamental, além do Apostilão Anos Finais que reúne todos os quatro anos em um único volume.'
    },
    {
      q: 'As apostilas atendem alunos com necessidades educacionais especiais?',
      a: 'Sim! As atividades foram concebidas com recursos de acessibilidade pedagógica, linguagem simplificada, apoios visuais e redução de sobrecarga cognitiva, sendo ideais para alunos com TEA, TDAH, deficiência intelectual ou defasagem.'
    },
    {
      q: 'Como posso adquirir o material para minha escola?',
      a: 'Você pode solicitar diretamente pelo WhatsApp com nossa equipe pedagógica para receber orçamentos institucionais, compras em lote ou aquisições individuais.'
    },
    {
      q: 'Qual é o formato de entrega das apostilas?',
      a: 'As apostilas são entregues em formato digital PDF de alta resolução, pronto para impressão em qualquer impressora escolar ou gráfica.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER                                                 */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
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
                  src="/assets/logo/logo-preta.png"
                  alt="Magagnini Educação"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/LOGO PRETA PNG.png";
                  }}
                />
                <span className="hidden sm:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest">
                  Ciências Adaptadas
                </span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#materiais" className="hover:text-wine-800 transition-colors">Visão Geral</a>
              <a href="#diferenciais" className="hover:text-wine-800 transition-colors">Diferenciais</a>
              <a href="#vantagens" className="hover:text-wine-800 transition-colors">Vantagens</a>
              <a href="#produtos" className="hover:text-wine-800 transition-colors">Apostilas & Apostilão</a>
              <a href="#faq" className="hover:text-wine-800 transition-colors">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-wine-500/40"
              >
                <span>Conhecer Materiais</span>
                <ArrowRight size={16} />
              </a>
            </div>

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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a 
              href="#materiais" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Visão Geral
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Diferenciais
            </a>
            <a 
              href="#produtos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Apostilas & Apostilão
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              FAQ
            </a>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — APOSTILAS ADAPTADAS DE CIÊNCIAS (REGRA 55)      */}
      {/* ========================================================= */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-700" />
                <span>Ciências da Natureza • Anos Finais</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Apostilas Adaptadas de Ciências.<br />
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  Ciência Acessível e Concreta.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Materiais estruturados e adaptados com ilustrações didáticas para o 6º, 7º, 8º e 9º anos e o Apostilão de Ciências Anos Finais (+500 atividades).
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                {[
                  'Ilustrações científicas de fácil leitura',
                  'Termos explicados no contexto da atividade',
                  'Adequadas para AEE e sala regular',
                  'Economia de tempo para o professor'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800">
                    <CheckCircle2 size={18} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#produtos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all border border-wine-600/40"
                >
                  <span>Ver Todos os Materiais de Ciências</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#diferenciais"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-700 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all"
                >
                  <span>Ver Diferenciais Pedagógicos ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Vitrine de Capa Real 3D */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-wine-800/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/atividades-adaptadas/ciencias-8-ano.png"
                  title="Ciências Adaptadas"
                  subtitle="Anos Finais"
                  badge="+500 Atividades"
                  isDestaque={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CONHEÇA OS MATERIAIS (REGRA 55)                        */}
      {/* ========================================================= */}
      <section id="materiais" className="py-20 bg-neutral-50/80 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Catálogo de Ciências
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Materiais de Ciências Disponíveis
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Apostilas individuais por ano escolar e o Apostilão completo que reúne toda a grade dos anos finais.
            </p>
          </div>

          {/* Cards para 6°, 7°, 8°, 9° e Apostilão */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {produtos.cienciasAdaptadas.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const btn = document.getElementById(`compra-${item.id}`) || document.getElementById(item.id);
                  if (btn) {
                    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    window.history.pushState(null, '', `#${item.id}`);
                  }
                }}
                className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between group cursor-pointer ${
                  item.destaque 
                    ? 'bg-gradient-to-b from-wine-50 to-white border-wine-300 shadow-md hover:shadow-xl hover:border-wine-500' 
                    : 'bg-white border-neutral-200 hover:border-wine-300 hover:shadow-md'
                }`}
              >
                {item.destaque && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-wine-800 text-white mb-2 shadow-sm">
                    Recomendado
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                  <Microscope size={20} />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm mb-1 leading-snug">
                  {item.nome.replace('Apostila Adaptada de ', '').replace('Apostilão de ', '')}
                </h3>
                <span className="text-xs text-neutral-500">{item.detalhe}</span>
                <span className="mt-3 text-xs font-bold text-wine-800 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Ver detalhes ↓
                </span>
              </a>
            ))}
          </div>

          {onOpenFlipBook && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={onOpenFlipBook}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-neutral-950 via-wine-900 to-neutral-950 border border-wine-500/40 hover:border-wine-400 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Sparkles size={18} className="text-wine-400 animate-pulse" />
                <span>Folhear Amostra Digital em 3D (14 Páginas)</span>
                <BookOpen size={18} className="text-wine-300 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DIFERENCIAIS (REGRA 55 — ESPAÇO RESERVADO PREPARADO)   */}
      {/* ========================================================= */}
      <section id="diferenciais" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Diferenciais Pedagógicos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Metodologia de Ciências Adaptadas
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Espaço reservado para os diferenciais específicos que serão refinados para a área de Ciências.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Microscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Mediação Visual dos Fenômenos</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Transformação de fenômenos abstratos (como fluxo de energia, reações químicas e divisão celular) em diagramas acessíveis.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Dna size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Vocabulário Científico Acessível</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Terminologia científica apresentada sempre associada a glossários ilustrados e analogias com o cotidiano do estudante.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Atom size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Investigação Científica Inclusiva</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Atividades que estimulam a curiosidade, a observação e a formulação de hipóteses de maneira engajadora e prática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EMPILHAMENTO DE VANTAGENS (REGRA 55 & 56 — SEM PREÇO)  */}
      {/* ========================================================= */}
      <div id="vantagens">
        <EmpilhamentoDeVantagens
          badgeSecao="Recursos Inclusos"
          tituloSecao="O que você encontra neste material"
          subtituloSecao="Estrutura preparada para receber os futuros conteúdos pedagógicos e benefícios de Ciências."
          vantagens={vantagensGerais}
          tema="light"
        />
      </div>

      {/* ========================================================= */}
      {/* 6. PRODUTOS — APRESENTAÇÃO INDIVIDUAL (REGRA 52 & 55)     */}
      {/* ========================================================= */}
      <section id="produtos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Apostilas em Detalhe
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Apostilas de Ciências para Cada Etapa
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Apresentação individual de cada volume com seus benefícios recebidos e botão de ação.
            </p>
          </div>

          <div className="space-y-24">
            {produtos.cienciasAdaptadas.map((prod) => {
              const isApostilao = prod.destaque;
              const hasLink = Boolean(prod.linkCompra);

              return (
                <div 
                  key={prod.id} 
                  id={prod.id}
                  className={`scroll-mt-28 p-8 sm:p-12 rounded-3xl border transition-all ${
                    isApostilao 
                      ? 'bg-gradient-to-br from-wine-950 via-neutral-900 to-black text-white border-wine-700/80 shadow-2xl relative overflow-hidden' 
                      : 'bg-neutral-50/70 border-neutral-200 text-neutral-900 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isApostilao && (
                    <div className="absolute top-0 right-0 w-80 h-80 bg-wine-800/20 rounded-full blur-[100px] pointer-events-none" />
                  )}

                  <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center relative z-10">
                    
                    <div className="lg:col-span-5 flex justify-center mb-8 lg:mb-0">
                      <div 
                        onClick={isApostilao ? onOpenFlipBook : undefined}
                        className={`relative group ${isApostilao && onOpenFlipBook ? 'cursor-pointer' : ''}`}
                        title={isApostilao && onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
                      >
                        <PerspectiveBook
                          size="default"
                          coverImage={prod.imagem}
                          title={prod.nome}
                          subtitle={prod.descricao}
                          badge={prod.detalhe}
                          isDestaque={isApostilao}
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isApostilao 
                            ? 'bg-wine-800 text-white shadow-sm' 
                            : 'bg-wine-50 text-wine-800 border border-wine-200'
                        }`}>
                          {prod.ano || 'Ciências'}
                        </span>
                        {isApostilao && (
                          <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                            <Sparkles size={14} />
                            Edição Completa
                          </span>
                        )}
                      </div>

                      <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 ${
                        isApostilao ? 'text-white' : 'text-neutral-950'
                      }`}>
                        {prod.nome}
                      </h3>

                      <p className={`text-base leading-relaxed mb-6 ${
                        isApostilao ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {prod.descricao}
                      </p>

                      {/* Lista Individual "Você recebe:" */}
                      <div className={`p-6 rounded-2xl mb-8 border ${
                        isApostilao 
                          ? 'bg-neutral-900/80 border-neutral-800' 
                          : 'bg-white border-neutral-200/80 shadow-sm'
                      }`}>
                        <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                          isApostilao ? 'text-wine-400' : 'text-wine-800'
                        }`}>
                          Você recebe com este material:
                        </h4>

                        <div className="space-y-3">
                          {prod.vantagens?.map((v, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm">
                              <Check size={16} className={`flex-shrink-0 mt-0.5 ${
                                isApostilao ? 'text-wine-400' : 'text-wine-700'
                              }`} />
                              <span className={isApostilao ? 'text-neutral-200' : 'text-neutral-700'}>
                                {v}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Botão de Compra / Contato */}
                      <div id={`compra-${prod.id}`} className="scroll-mt-36">
                        {hasLink ? (
                          <a
                            href={prod.linkCompra}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all group"
                          >
                            <span>
                              {isApostilao ? 'QUERO O APOSTILÃO DE CIÊNCIAS' : `QUERO MINHA APOSTILA — ${prod.ano?.toUpperCase()}`}
                            </span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <a
                            href={`${WHATSAPP_URL} - ${encodeURIComponent(prod.nome)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all group"
                          >
                            <span>GARANTIR MEU MATERIAL — {prod.ano?.toUpperCase()}</span>
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. DEPOIMENTOS (REGRA 55 — ESPAÇO RESERVADO)              */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/70 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              O que dizem os educadores
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Espaço reservado para os depoimentos que serão fornecidos posteriormente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Espaço para Depoimento 1',
                role: 'Professor(a) de Ciências • Rede Escolar',
                quote: 'O material adaptado de Ciências permite que todos os estudantes participem ativamente da aula com autonomia e compreensão dos fenômenos naturais.'
              },
              {
                name: 'Espaço para Depoimento 2',
                role: 'Coordenação Pedagógica',
                quote: 'A clareza dos esquemas gráficos e a qualidade das questões tornam o trabalho do professor muito mais produtivo e eficiente.'
              },
              {
                name: 'Espaço para Depoimento 3',
                role: 'Professor(a) de Educação Especial',
                quote: 'Excelente suporte para o AEE, com atividades graduadas que respeitam o ritmo de aprendizagem de cada estudante.'
              }
            ].map((dep, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-wine-700 text-lg mb-3">★★★★★</div>
                  <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                    “{dep.quote}”
                  </p>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <span className="font-bold text-neutral-950 block text-sm">{dep.name}</span>
                  <span className="text-xs text-neutral-500">{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. OFERTA (REGRA 55 & 53 — ESPAÇO RESERVADO)              */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Oferta Especial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Espaço reservado para informações comerciais futuras.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Área preparada para receber posteriormente tabela de preços, condições especiais, descontos e combos dos materiais de Ciências.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-rose-700 hover:from-wine-700 hover:to-rose-600 shadow-2xl hover:scale-105 transition-all border border-wine-500/40"
          >
            <span>FALAR COM ESPECIALISTA NO WHATSAPP</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FAQ                                                    */}
      {/* ========================================================= */}
      <section id="faq" className="py-20 bg-white border-t border-neutral-100">
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
                Apostilas Adaptadas de Ciências
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-wine-400 hover:text-wine-300 underline"
            >
              Falar com a Equipe Pedagógica no WhatsApp →
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Magagnini Educação. Todos os direitos reservados.</p>
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
