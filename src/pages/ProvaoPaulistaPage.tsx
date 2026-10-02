import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Target, 
  GraduationCap, 
  Building2, 
  ChevronDown, 
  Menu, 
  X,
  FileText
} from 'lucide-react';
import { PerspectiveBook } from '../components/PerspectiveBook';
import { EmpilhamentoDeVantagens } from '../components/EmpilhamentoDeVantagens';

const CHECKOUT_PROVAO = "https://pay.cakto.com.br/ypkhicy_752822";
const WHATSAPP_PROVAO = "https://wa.me/5511998713683?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Apostila%20do%20Prov%C3%A3o%20Paulista";

interface ProvaoPaulistaPageProps {
  onBackToMagagnini?: () => void;
}

export function ProvaoPaulistaPage({ onBackToMagagnini }: ProvaoPaulistaPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const vantagensEmpilhamento = [
    {
      titulo: '📘 Apostila Completa do Provão Paulista',
      descricao: 'Compilação estruturada de questões reais com foco nas exigências da banca examinadora.',
      icone: <BookOpen className="w-5 h-5 text-wine-800" />,
      beneficio: 'Material direcionado exclusivamente para a prova'
    },
    {
      titulo: '✍️ Resoluções Comentadas Passo a Passo',
      descricao: 'Gabarito justificado e análise dos distratores mais comuns de cada alternativa.',
      icone: <FileText className="w-5 h-5 text-wine-800" />,
      beneficio: 'Aprenda o motivo exato de cada resposta correta'
    },
    {
      titulo: '🎯 Separação por Áreas do Conhecimento',
      descricao: 'Matemática, Linguagens, Ciências da Natureza e Humanas divididas de forma didática.',
      icone: <Target className="w-5 h-5 text-wine-800" />,
      beneficio: 'Cronograma de estudos balanceado e eficiente'
    },
    {
      titulo: '🏛️ Foco nas Vagas da USP, UNICAMP, UNESP e FATEC',
      descricao: 'Treinamento específico voltado para as universidades estaduais de maior concorrência.',
      icone: <Building2 className="w-5 h-5 text-wine-800" />,
      beneficio: 'Estratégia direta para a vaga na universidade pública'
    },
    {
      titulo: '⏱️ Metodologia de Gestão de Tempo de Prova',
      descricao: 'Dicas práticas de resolução rápida para otimizar seus minutos no dia do exame.',
      icone: <Sparkles className="w-5 h-5 text-wine-800" />,
      beneficio: 'Segurança e agilidade no preenchimento do gabarito'
    }
  ];

  const faqs = [
    {
      q: 'Para quais séries a apostila é indicada?',
      a: 'O material foi estruturado para contemplar estudantes de todo o Ensino Médio que prestarão as Etapas I, II e III do Provão Paulista Seriado.'
    },
    {
      q: 'As questões são comentadas?',
      a: 'Sim! Todas as questões possuem resolução comentada, detalhando a lógica pedagógica e o raciocínio necessário para chegar à alternativa correta.'
    },
    {
      q: 'Como recebo meu material?',
      a: 'Após a confirmação da compra, você recebe o material digital completo em formato PDF de alta resolução imediatamente por e-mail e WhatsApp.'
    },
    {
      q: 'Escolas e professores podem adquirir em lote?',
      a: 'Sim, possuímos condições especiais para turmas, colégios e secretarias. Basta entrar em contato com nossa equipe pedagógica.'
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
                  Provão Paulista
                </span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#sobre-o-material" className="hover:text-wine-800 transition-colors">Sobre a Apostila</a>
              <a href="#universidades" className="hover:text-wine-800 transition-colors">Universidades</a>
              <a href="#vantagens" className="hover:text-wine-800 transition-colors">Vantagens</a>
              <a href="#faq" className="hover:text-wine-800 transition-colors">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={CHECKOUT_PROVAO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-wine-500/40"
              >
                <span>Quero Minha Apostila</span>
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
              href="#sobre-o-material" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Sobre a Apostila
            </a>
            <a 
              href="#universidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Universidades
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
                href={CHECKOUT_PROVAO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-wine-800 shadow"
              >
                <span>QUERO MINHA APOSTILA</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO                                                   */}
      {/* ========================================================= */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-700" />
                <span>Vestibular Seriado Paulista</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Apostila do Provão Paulista.<br />
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  Sua Vaga nas Melhores Universidades.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Material preparatório completo com questões comentadas, separação por área do conhecimento e análise detalhada dos conteúdos mais cobrados.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                {[
                  'Questões oficiais comentadas',
                  'Separação por áreas do conhecimento',
                  'Gabaritos explicados passo a passo',
                  'Foco em USP, UNICAMP, UNESP e FATEC'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800">
                    <CheckCircle2 size={18} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href={CHECKOUT_PROVAO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-900 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 transition-all border border-wine-600/40"
                >
                  <span>QUERO MINHA APOSTILA</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#sobre-o-material"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-700 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all"
                >
                  <span>Conhecer Conteúdo ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Book in 3D */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-wine-800/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <PerspectiveBook
                  size="lg"
                  coverImage="/assets/produtos/apostilas-academicas/provao-paulista.png"
                  title="Provão Paulista"
                  subtitle="Preparatório Oficial"
                  badge="Ensino Médio • Resolvida"
                  isDestaque={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. UNIVERSIDADES & OBJETIVO                               */}
      {/* ========================================================= */}
      <section id="universidades" className="py-20 bg-neutral-950 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            O Maior Portal de Vagas do Estado de SP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            O Provão Paulista reserva milhares de vagas diretas.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
            A forma mais estratégica de ingressar no ensino superior público estudando por questões focadas no perfil da prova seriada.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { sigla: 'USP', nome: 'Universidade de São Paulo' },
              { sigla: 'UNICAMP', nome: 'Universidade de Campinas' },
              { sigla: 'UNESP', nome: 'Universidade Estadual Paulista' },
              { sigla: 'FATEC', nome: 'Faculdade de Tecnologia de SP' }
            ].map((uni, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-wine-800/80 transition-all text-center">
                <div className="text-2xl font-black text-white font-serif mb-1 text-wine-400">{uni.sigla}</div>
                <div className="text-xs text-neutral-400 font-medium">{uni.nome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SOBRE O MATERIAL                                       */}
      {/* ========================================================= */}
      <section id="sobre-o-material" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Estrutura Didática
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              O que você encontra nesta apostila
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Planejada para que você revise a teoria aplicando diretamente em questões reais de prova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Questões Separadas por Área</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Estude organizadamente por blocos temáticos: Matemática, Língua Portuguesa, Biologia, Física, Química, História, Geografia e Filosofia/Sociologia.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Gabarito com Explicação</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Cada item possui resolução detalhada para que o estudante compreenda a lógica da resposta e não caia nas pegadinhas da banca examinadora.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-wine-100 text-wine-800 flex items-center justify-center font-bold mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Foco nos Padrões Recorrentes</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Mapeamento das habilidades mais exigidas e conceitos-chave que sempre reaparecem nos exames da Vunesp e bancas estaduais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EMPILHAMENTO DE VANTAGENS (REGRA 56 & ZERO PREÇO)      */}
      {/* ========================================================= */}
      <div id="vantagens">
        <EmpilhamentoDeVantagens
          badgeSecao="Recursos Inclusos"
          tituloSecao="O que você encontra neste material"
          subtituloSecao="Tudo o que você precisa para chegar no dia da prova com tranquilidade e preparação de alto nível."
          vantagens={vantagensEmpilhamento}
          tema="light"
        />
      </div>

      {/* ========================================================= */}
      {/* 6. OFERTA & CTA FINAL                                     */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Garanta Seu Exemplar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Prepare-se para o Provão Paulista com quem entende de aprovação.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Adquira agora a apostila completa e comece hoje mesmo sua rotina de estudos focada na conquista da sua vaga universitária.
          </p>

          <a
            href={CHECKOUT_PROVAO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-rose-700 hover:from-wine-700 hover:to-rose-600 shadow-2xl hover:scale-105 transition-all border border-wine-500/40"
          >
            <span>QUERO MINHA APOSTILA PROVÃO PAULISTA</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FAQ                                                    */}
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
                Apostila Provão Paulista • Vestibular Seriado
              </span>
            </div>

            <a
              href={WHATSAPP_PROVAO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-wine-400 hover:text-wine-300 underline"
            >
              Falar no WhatsApp →
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
