import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Compass, 
  GraduationCap, 
  Layers, 
  Check, 
  ChevronDown, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { produtos } from '../data/produtos';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { EmpilhamentoDeVantagens } from '../components/EmpilhamentoDeVantagens';

interface MatematicaAdaptadaPageProps {
  onBackToMagagnini?: () => void;
}

export function MatematicaAdaptadaPage({ onBackToMagagnini }: MatematicaAdaptadaPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const vantagensGerais = [
    {
      titulo: '🧩 Atividades Estruturadas e Adaptadas',
      descricao: 'Enunciados claros e objetivos, fontes ampliadas e redução expressiva de sobrecarga cognitiva.',
      icone: <BookOpen className="w-5 h-5 text-wine-800" />,
      beneficio: 'Inclusão pedagógica real para múltiplos ritmos de aprendizagem'
    },
    {
      titulo: '👁️ Apoio Visual e Esquemas Concretos',
      descricao: 'Uso de representações gráficas, malhas quadriculadas, retas numéricas e modelos geométricos ilustrados.',
      icone: <Calculator className="w-5 h-5 text-wine-800" />,
      beneficio: 'Facilita a transição do pensamento concreto para o abstrato'
    },
    {
      titulo: '📈 Gradação Cuidadosa de Dificuldade',
      descricao: 'Exercícios que partem do reconhecimento intuitivo até a aplicação prática guiada passo a passo.',
      icone: <Compass className="w-5 h-5 text-wine-800" />,
      beneficio: 'Gera confiança e previne a frustração do estudante'
    },
    {
      titulo: '📋 Alinhamento Rigoroso com a BNCC',
      descricao: 'Habilidades essenciais dos anos finais do Ensino Fundamental selecionadas com precisão.',
      icone: <GraduationCap className="w-5 h-5 text-wine-800" />,
      beneficio: 'Garante o cumprimento dos objetivos de aprendizagem do ano letivo'
    },
    {
      titulo: '⏳ Economia Real de Tempo para o Educador',
      descricao: 'Material pronto para impressão e aplicação imediata em sala regular ou atendimento educacional especializado (AEE).',
      icone: <Layers className="w-5 h-5 text-wine-800" />,
      beneficio: 'Dezenas de horas poupadas no planejamento semanal de adaptações'
    }
  ];

  const faqs = [
    {
      q: 'Para quem as apostilas adaptadas de Matemática são indicadas?',
      a: 'São indicadas para estudantes com necessidades educacionais específicas (como TEA, TDAH, deficiência intelectual, discalculia ou defasagem pedagógica) e para todos os alunos que se beneficiam de uma abordagem estruturada com apoio visual.'
    },
    {
      q: 'O material está alinhado à Base Nacional Comum Curricular (BNCC)?',
      a: 'Sim. Todas as atividades foram estruturadas em consonância com as habilidades essenciais da BNCC de Matemática para os Anos Finais (6º ao 9º ano).'
    },
    {
      q: 'Qual é a diferença entre as apostilas individuais e o Apostilão?',
      a: 'As apostilas individuais contemplam cerca de 100 atividades direcionadas exclusivamente para um ano específico (6º, 7º, 8º ou 9º ano). O Apostilão reúne mais de 500 atividades cobrindo todos os quatro anos em um único volume completo.'
    },
    {
      q: 'Como é feita a entrega do material após a compra?',
      a: 'O material é 100% digital em formato PDF de alta resolução, pronto para impressão e encadernação. O envio é automático e imediato após a confirmação do pagamento no checkout.'
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
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/logo.png";
                  }}
                />
                <span className="hidden sm:inline-block border-l border-neutral-300 pl-3 text-xs font-bold text-wine-800 uppercase tracking-widest">
                  Matemática Adaptada
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
                <span>Escolher Apostila</span>
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
      {/* 2. HERO — APOSTILAS ADAPTADAS DE MATEMÁTICA               */}
      {/* ========================================================= */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-700" />
                <span>Educação Inclusiva & Ensino Fundamental</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Apostilas Adaptadas de Matemática.<br />
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  Inclusão e Aprendizado Real.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Materiais estruturados com rigor pedagógico, recursos visuais intuitivos e gradação de dificuldade para o 6º, 7º, 8º e 9º anos e o Apostilão Anos Finais.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                {[
                  'Atividades adaptadas prontas para uso',
                  'Apoio visual e redução de sobrecarga',
                  'Alinhadas às habilidades da BNCC',
                  'Economia de horas de planejamento'
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
                  <span>Ver Todos os Materiais de Matemática</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#diferenciais"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-700 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all"
                >
                  <span>Conhecer os Diferenciais ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Showcase with 3D Book */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-wine-800/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/atividades-adaptadas/matematica-8-ano.png"
                  title="Matemática Adaptada"
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
      {/* 3. CONHEÇA OS MATERIAIS (GUIA RÁPIDO)                    */}
      {/* ========================================================= */}
      <section id="materiais" className="py-20 bg-neutral-50/80 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Catálogo Completo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Materiais de Matemática Disponíveis
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Escolha entre o volume completo unificado (Apostilão) ou as edições individuais por ano escolar.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {produtos.matematicaAdaptada.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between group ${
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
                  <Calculator size={20} />
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
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DIFERENCIAIS DA MATEMÁTICA ADAPTADA                    */}
      {/* ========================================================= */}
      <section id="diferenciais" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Rigor Pedagógico
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              O que torna este material único para a sala de aula
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Desenvolvido a partir da prática real com estudantes, unindo acessibilidade didática e precisão conceitual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Linguagem Descomplicada</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Enunciados fragmentados em comandos diretos, evitando parágrafos extensos que causam fadiga de leitura e desviam o foco do cálculo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Suporte Gráfico & Concreto</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Ilustrações contextualizadas, modelos geométricos em malha e esquemas passo a passo que auxiliam na compreensão intuitiva dos números.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Progressão Gradativa</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                A complexidade das atividades é dosada para que o aluno experimente sucesso logo nas primeiras questões, construindo segurança para desafios maiores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EMPILHAMENTO GERAL DE VANTAGENS (REGRA 56 — SEM PREÇO) */}
      {/* ========================================================= */}
      <div id="vantagens">
        <EmpilhamentoDeVantagens
          badgeSecao="Recursos Inclusos"
          tituloSecao="O que você encontra neste material"
          subtituloSecao="Vantagens pensadas para simplificar o cotidiano escolar do professor e impulsionar a aprendizagem do aluno."
          vantagens={vantagensGerais}
          tema="light"
        />
      </div>

      {/* ========================================================= */}
      {/* 6. APRESENTAÇÃO INDIVIDUAL DOS PRODUTOS (REGRA 52)         */}
      {/* ========================================================= */}
      <section id="produtos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Apostilas em Detalhe
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Escolha o Material Ideal para a Sua Turma
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Cada apostila possui sua própria estrutura pedagógica, capa dedicada, benefícios específicos e botão direto de compra.
            </p>
          </div>

          <div className="space-y-24">
            {produtos.matematicaAdaptada.map((prod) => {
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
                    
                    {/* Imagem do Produto com PerspectiveBook */}
                    <div className="lg:col-span-5 flex justify-center mb-8 lg:mb-0">
                      <div className="relative group">
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

                    {/* Conteúdo & Empilhamento Individual (Regra 52) */}
                    <div className="lg:col-span-7">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isApostilao 
                            ? 'bg-wine-800 text-white shadow-sm' 
                            : 'bg-wine-50 text-wine-800 border border-wine-200'
                        }`}>
                          {prod.ano || 'Matemática'}
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

                      {/* Lista de Vantagens Individuais: "Você recebe:" */}
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

                      {/* Botão de Compra Individual (Regra 59) */}
                      <div>
                        {hasLink ? (
                          <a
                            href={prod.linkCompra}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all group"
                          >
                            <span>
                              {isApostilao ? 'QUERO O APOSTILÃO' : `QUERO MINHA APOSTILA — ${prod.ano?.toUpperCase()}`}
                            </span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <a
                            href="https://wa.me/5511998713683?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Apostila%20Adaptada%20de%20Matem%C3%A1tica%20do%206%C2%BA%20Ano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all group"
                          >
                            <span>CONSULTAR DISPONIBILIDADE NO WHATSAPP</span>
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
      {/* 7. DEPOIMENTOS                                            */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/70 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Experiências Compartilhadas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              O que dizem os professores que utilizam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Profª Cláudia Ramos',
                role: 'Professora de AEE e Sala Regular',
                quote: 'Eu gastava os finais de semana inteiros adaptando listas de matemática. O material da Magagnini Educação salvou minha rotina. As atividades são realmente inclusivas e respeitam o tempo do estudante.'
              },
              {
                name: 'Prof. Marcos Vinícius',
                role: 'Coordenador Pedagógico',
                quote: 'Adotamos o Apostilão de Matemática para todo o corpo docente da escola. Facilitou a padronização das adaptações e os alunos começaram a participar ativamente das aulas.'
              },
              {
                name: 'Renata Albuquerque',
                role: 'Mãe e Tutora de Aluno com TEA',
                quote: 'O apoio visual fez meu filho finalmente compreender equações de 1º grau sem chorar ou ter crises de ansiedade. É o melhor investimento educacional que fizemos.'
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
      {/* 8. OFERTA & CTA FINAL (REGRA 53)                          */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Garanta Seu Material
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Transforme o ensino de matemática com materiais adaptados de verdade.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tenha em mãos atividades estruturadas, graduadas e alinhadas à BNCC para potencializar a inclusão na sua escola.
          </p>

          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-rose-700 hover:from-wine-700 hover:to-rose-600 shadow-2xl hover:scale-105 transition-all border border-wine-500/40"
          >
            <span>GARANTIR MEU MATERIAL DE MATEMÁTICA</span>
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
                src="/assets/logo/magagnini-mista-preta.png"
                alt="Magagnini Educação"
                className="h-10 w-auto object-contain rounded"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/MISTA PRETA - 1920X800.png";
                }}
              />
              <span className="text-xs text-neutral-400">
                Apostilas Adaptadas de Matemática
              </span>
            </div>

            <a
              href="https://wa.me/5511998713683"
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
