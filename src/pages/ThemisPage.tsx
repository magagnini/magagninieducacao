import { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  MessageSquare, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  UserCheck, 
  Building2, 
  Send, 
  Eye, 
  Menu,
  X,
  Phone,
  ArrowLeft,
  Play,
  ExternalLink
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511998713683?text=Ol%C3%A1!%20Quero%20falar%20sobre%20o%20Themis%20Class";

interface ThemisPageProps {
  onBackToMagagnini?: () => void;
}

export function ThemisPage({ onBackToMagagnini }: ThemisPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'pedagogica' | 'disciplinar'>('pedagogica');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const faqs = [
    {
      q: 'O que é o Themis Class?',
      a: 'O Themis Class é uma plataforma digital especializada na gestão de ocorrências escolares, acompanhamento pedagógico/disciplinar e organização da comunicação transparente entre a escola e as famílias dos alunos.'
    },
    {
      q: 'Para quem o Themis Class foi desenvolvido?',
      a: 'Foi desenvolvido para diretores, coordenadores pedagógicos, gestores escolares, orientadores educacionais e professores que precisam de agilidade e segurança no registro e acompanhamento da rotina escolar.'
    },
    {
      q: 'Quem pode utilizar a plataforma?',
      a: 'A escola gerencia perfis de acesso individualizados: Gestor/Direção, Coordenação e Professores, cada um com permissões específicas para visualizar e registrar apenas as informações pertinentes ao seu papel.'
    },
    {
      q: 'O professor consegue registrar ocorrências?',
      a: 'Sim. Professores têm acesso rápido e simplificado para registrar ocorrências de suas turmas e disciplinas, detalhando data, horário, tipo de situação e descrição objetiva.'
    },
    {
      q: 'A escola consegue organizar as comunicações com os responsáveis?',
      a: 'Sim. A plataforma centraliza os contatos realizados, os responsáveis notificados, as datas das tentativas e os retornos obtidos, garantindo que tudo fique documentado no histórico.'
    },
    {
      q: 'É possível acompanhar o histórico dos alunos?',
      a: 'Sim. Cada aluno possui uma linha do tempo completa com todas as ocorrências anteriores, desdobramentos já realizados e padrões comportamentais ou pedagógicos identificados ao longo do ano.'
    },
    {
      q: 'O sistema possui relatórios?',
      a: 'Sim. O Themis Class gera relatórios consolidados por turma, aluno, período e tipo de ocorrência, auxiliando a gestão na tomada de decisões estratégicas e em reuniões de conselho.'
    },
    {
      q: 'Como funciona o controle de acesso e segurança?',
      a: 'A arquitetura utiliza Row Level Security (RLS), controle de acesso baseado em papéis (RBAC), tokens criptografados JWT e segue as diretrizes da OWASP para proteção e privacidade dos dados escolares.'
    },
    {
      q: 'O Themis Class funciona para escolas de diferentes tamanhos?',
      a: 'Sim. O sistema foi projetado para atender com a mesma eficiência desde colégios menores até redes e grandes instituições com milhares de alunos.'
    },
    {
      q: 'Como faço para conhecer a plataforma?',
      a: 'Basta clicar nos botões de contato nesta página para conversar diretamente com nosso time pelo WhatsApp e agendar uma demonstração completa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-wine-100 selection:text-wine-900">
      
      {/* ========================================================= */}
      {/* 1. TOP HEADER                                            */}
      {/* ========================================================= */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Brand */}
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
                  src="/assets/logo/themis-class.png"
                  alt="Themis Class"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/produtos/solucoes-digitais/themis-class.png";
                  }}
                />
                <div className="hidden flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-wine-800 to-black text-white flex items-center justify-center font-serif font-black text-lg shadow-sm">
                    T
                  </div>
                  <div>
                    <span className="font-serif font-black tracking-tight text-neutral-950 text-xl block leading-none">
                      Themis Class
                    </span>
                    <span className="text-[10px] font-bold text-wine-800 tracking-wider uppercase">
                      Gestão & Comunicação Escolar
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#demonstracao-video" className="text-wine-800 hover:text-wine-900 font-bold flex items-center gap-1.5 transition-colors">
                <Play size={13} className="fill-wine-800 text-wine-800" />
                <span>Vídeo</span>
              </a>
              <a href="#como-funciona" className="hover:text-wine-800 transition-colors">Como Funciona</a>
              <a href="#funcionalidades" className="hover:text-wine-800 transition-colors">Funcionalidades</a>
              <a href="#ocorrencias" className="hover:text-wine-800 transition-colors">Ocorrências</a>
              <a href="#comunicacao" className="hover:text-wine-800 transition-colors">Famílias</a>
              <a href="#dashboard" className="hover:text-wine-800 transition-colors">Plataforma</a>
              <a href="#faq" className="hover:text-wine-800 transition-colors">FAQ</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all border border-wine-500/40"
              >
                <span>Quero conhecer</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-wine-800 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {['Como Funciona', 'Funcionalidades', 'Ocorrências', 'Famílias', 'Plataforma', 'Segurança', 'FAQ'].map((item) => {
              const href = `#${item.toLowerCase().replace(/ /g, '-').replace(/[êã]/g, (c) => c === 'ê' ? 'e' : 'a')}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="block px-3 py-2 text-base font-semibold text-neutral-800 hover:text-wine-800 hover:bg-neutral-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md"
              >
                <span>Quero conhecer o Themis Class</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO — PRIMEIRA DOBRA                                  */}
      {/* ========================================================= */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 border border-wine-200 text-wine-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-wine-700" />
                <span>Gestão Escolar de Ocorrências e Acompanhamento</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                A comunicação escolar não precisa esperar a{' '}
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  reunião de pais.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Com o Themis Class, sua escola registra ocorrências, acompanha desdobramentos e mantém as famílias informadas de forma organizada, rápida e segura.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border border-wine-600/40"
                >
                  <span>Quero conhecer o Themis Class</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#demonstracao-video"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-800 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all group"
                >
                  <Play size={16} className="text-wine-800 fill-wine-800 group-hover:scale-110 transition-transform" />
                  <span>Assistir Demonstração</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap gap-6 justify-center lg:justify-start text-xs font-semibold text-neutral-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Sem anotações espalhadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Histórico do aluno centralizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Controle total por perfil</span>
                </div>
              </div>
            </div>

            {/* Right: UI Mockup Preview */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl bg-neutral-900 p-2 sm:p-3 shadow-2xl border border-neutral-800">
                {/* Simulated window header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">themisclass.app/painel</span>
                  <div className="w-4" />
                </div>

                {/* Dashboard Mockup Body */}
                <div className="bg-neutral-950 p-4 rounded-b-2xl text-white space-y-4">
                  {/* Top Stats */}
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-neutral-900/90 border border-neutral-800 p-3 rounded-xl">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Ocorrências Hoje</div>
                      <div className="text-2xl font-bold text-white mt-1">03</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <span>● Todas registradas</span>
                      </div>
                    </div>
                    <div className="bg-neutral-900/90 border border-neutral-800 p-3 rounded-xl">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Famílias Contatadas</div>
                      <div className="text-2xl font-bold text-wine-400 mt-1">100%</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Comunicação ativa</div>
                    </div>
                  </div>

                  {/* Occurrence Card item */}
                  <div className="bg-neutral-900/80 border border-wine-900/50 p-3 rounded-xl text-left space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Lucas Silva • 8° Ano B</span>
                      <span className="px-2 py-0.5 rounded-md bg-wine-900/60 text-wine-300 text-[10px] font-bold border border-wine-700/40">
                        Ocorrência Pedagógica
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-tight">
                      Não entregou a atividade de Matemática e demonstrou dificuldade nos exercícios.
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-neutral-800/80 text-[10px] text-neutral-400">
                      <span>Prof. Carlos • 10:45</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 size={11} /> Responsável Ciente
                      </span>
                    </div>
                  </div>

                  {/* Flow preview */}
                  <div className="bg-neutral-900/60 border border-neutral-800 p-2.5 rounded-xl flex items-center justify-between text-[11px] text-neutral-300">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock size={13} className="text-wine-400" />
                      <span>Encaminhamento agendado</span>
                    </div>
                    <span className="text-wine-400 font-bold">Ver desdobramento →</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SEÇÃO — O PROBLEMA                                     */}
      {/* ========================================================= */}
      <section className="py-20 bg-neutral-950 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            O Desafio da Rotina Escolar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Quando a informação não chega, o problema continua.
          </h2>

          <div className="mt-8 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto space-y-4 leading-relaxed">
            <p>
              Na rotina escolar, uma ocorrência pode acontecer em poucos minutos.
            </p>
            <p>
              Mas registrar, acompanhar, comunicar a família e manter tudo organizado pode consumir muito mais tempo da equipe gestora e dos professores.
            </p>
          </div>

          {/* Cards dos problemas comuns */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              'Anotações em papel',
              'Planilhas desatualizadas',
              'Mensagens espalhadas',
              'Registros manuais perdidos',
              'Conversas informais',
              'Informações na memória'
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center gap-3 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-wine-500 flex-shrink-0" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {/* Frase de impacto */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-wine-950 via-neutral-900 to-wine-950 border border-wine-800/40 max-w-3xl mx-auto shadow-2xl">
            <p className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              “A comunicação com a família não deveria depender do fim do bimestre.”
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SEÇÃO — APRESENTAÇÃO DO THEMIS CLASS                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Solução Centralizada
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Uma nova forma de organizar a comunicação escolar.
            </h2>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              O Themis Class centraliza o registro e o acompanhamento das ocorrências escolares em uma única plataforma. A escola consegue registrar, acompanhar, comunicar e consultar informações com transparência e segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Mais organização',
                desc: 'Alunos, turmas e professores integrados em um fluxo limpo e padronizado.',
                icon: <Building2 className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Mais agilidade',
                desc: 'Registro imediato pelo professor ou coordenador em menos de 1 minuto.',
                icon: <Clock className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Mais acompanhamento',
                desc: 'Histórico longitudinal com visualização clara dos encaminhamentos e desdobramentos.',
                icon: <Eye className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Mais comunicação',
                desc: 'Famílias cientes e engajadas no momento certo, fortalecendo a parceria escola-família.',
                icon: <MessageSquare className="w-6 h-6 text-wine-800" />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-wine-100 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{pillar.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO — DEMONSTRAÇÃO EM VÍDEO (POSIÇÃO ESTRATÉGICA)      */}
      {/* ========================================================= */}
      <section id="demonstracao-video" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-wine-900/25 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-950/80 border border-wine-800/60 text-wine-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Play size={12} className="fill-wine-400 text-wine-400" />
            <span>Demonstração Oficial em Vídeo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Veja o Themis Class em Ação
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Assista à apresentação e conheça na prática como o sistema agiliza o registro de ocorrências, organiza os encaminhamentos e conecta coordenação, professores e famílias.
          </p>

          {/* Video Container Card */}
          <div className="relative group max-w-4xl mx-auto rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            <div 
              className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <img 
                src="/assets/logo/themis-class-video.png" 
                alt="Vídeo Demonstração Themis Class" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/THEMIS-CLASS-VIDEO.png";
                }}
              />
              
              {/* Dark overlay with wine gradient on hover */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-wine-950/20 transition-colors duration-300" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-24 w-24 rounded-full bg-wine-600 opacity-40 animate-ping" />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-wine-900 via-wine-700 to-rose-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/40">
                    <Play size={34} className="ml-1 fill-white text-white sm:w-10 sm:h-10" />
                  </div>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex items-center gap-3 bg-neutral-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800 text-xs text-neutral-300 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-semibold text-white">Demonstração Interativa</span>
                <span className="text-neutral-500">•</span>
                <span>Clique para assistir ao vídeo</span>
              </div>
            </div>
          </div>

          {/* Action Links & YouTube Link */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-wine-800 hover:bg-wine-700 text-white font-bold text-sm shadow-lg transition-all"
            >
              <Play size={16} className="fill-white" />
              <span>Assistir Demonstração</span>
            </button>
            <a
              href="https://www.youtube.com/watch?v=uJ8j--NHcfI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white font-semibold text-sm border border-neutral-800 transition-all group"
            >
              <span>Assistir no YouTube</span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm transition-all"
            >
              <span>Falar com Especialista</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SEÇÃO — COMO FUNCIONA (4 ETAPAS)                       */}
      {/* ========================================================= */}
      <section id="como-funciona" className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Fluxo Sem Complicações
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Da ocorrência ao acompanhamento. Em poucos passos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Registre',
                desc: 'Registre a ocorrência diretamente na plataforma, selecionando aluno, turma, data, horário, disciplina e tipo de ocorrência.'
              },
              {
                step: '02',
                title: 'Comunique',
                desc: 'Organize a comunicação com o responsável e tenha as informações necessárias para realizar o contato.'
              },
              {
                step: '03',
                title: 'Acompanhe',
                desc: 'Acompanhe o histórico e os desdobramentos de cada situação ao longo do tempo.'
              },
              {
                step: '04',
                title: 'Consulte',
                desc: 'Tenha relatórios e informações organizadas para apoiar a gestão escolar e reuniões.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-sm relative group hover:border-wine-300 hover:shadow-md transition-all">
                <div className="text-3xl font-black text-wine-800 font-serif mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm font-semibold text-neutral-500 mb-4 font-serif italic">
              “Do registro ao acompanhamento.”
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-colors"
            >
              <span>Solicitar demonstração do fluxo</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SEÇÃO — FUNCIONALIDADES                                */}
      {/* ========================================================= */}
      <section id="funcionalidades" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Recursos Essenciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Tudo o que sua escola precisa para acompanhar melhor.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Alunos',
                desc: 'Cadastre e organize os alunos da escola, incluindo informações dos responsáveis.',
                icon: <GraduationCap className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Professores',
                desc: 'Gerencie os usuários e organize o acesso dos professores com permissões adequadas.',
                icon: <UserCheck className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Turmas',
                desc: 'Organize alunos e professores por turma para facilitar registros coletivos e filtros.',
                icon: <Users className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Ocorrências',
                desc: 'Registre ocorrências estruturadas: aluno, turma, data, horário, disciplina e classificação.',
                icon: <AlertTriangle className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Comunicações',
                desc: 'Centralize as comunicações relacionadas às ocorrências e acompanhe o status dos contatos.',
                icon: <MessageSquare className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Acompanhamento',
                desc: 'Consulte o histórico dos alunos e acompanhe situações que precisam de atenção contínua.',
                icon: <Eye className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Desdobramentos',
                desc: 'Registre e acompanhe os encaminhamentos pedagógicos realizados após uma ocorrência.',
                icon: <CheckCircle2 className="w-6 h-6 text-wine-800" />
              },
              {
                title: 'Relatórios',
                desc: 'Gere relatórios completos para facilitar a gestão e a prestação de contas pedagógica.',
                icon: <FileText className="w-6 h-6 text-wine-800" />
              }
            ].map((func, idx) => (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-wine-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-wine-50 flex items-center justify-center mb-5">
                    {func.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{func.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{func.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. OCORRÊNCIAS PEDAGÓGICAS E DISCIPLINARES                */}
      {/* ========================================================= */}
      <section id="ocorrencias" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Classificação Correta
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Cada situação precisa chegar à pessoa certa.
            </h2>
            <p className="mt-4 text-neutral-300 text-lg">
              O Themis Class permite separar com clareza a natureza de cada ocorrência, direcionando para o fluxo apropriado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Ocorrência Pedagógica */}
            <div 
              onClick={() => setActiveTab('pedagogica')}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                activeTab === 'pedagogica' 
                  ? 'bg-neutral-950 border-wine-500/80 shadow-2xl shadow-wine-950/50' 
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-700/50 text-xs font-bold uppercase tracking-wider">
                  Pedagógica
                </span>
                <BookOpen className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ocorrência Pedagógica</h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Situações relacionadas ao processo de aprendizagem, dificuldade em conteúdos, não entrega de atividades ou necessidade de apoio pedagógico.
              </p>
              <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-xs text-neutral-400 space-y-1.5">
                <div><strong>Destinatário:</strong> Coordenação Pedagógica e Apoio ao Aluno</div>
                <div><strong>Objetivo:</strong> Intervenção pedagógica antecipada</div>
              </div>
            </div>

            {/* Ocorrência Disciplinar */}
            <div 
              onClick={() => setActiveTab('disciplinar')}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                activeTab === 'disciplinar' 
                  ? 'bg-neutral-950 border-wine-500/80 shadow-2xl shadow-wine-950/50' 
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-wine-950/80 text-wine-300 border border-wine-700/50 text-xs font-bold uppercase tracking-wider">
                  Disciplinar
                </span>
                <AlertTriangle className="text-wine-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ocorrência Disciplinar</h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Situações de comportamento, conflitos, descumprimento de normas escolares e atitudes que exigem mediação e acompanhamento de conduta.
              </p>
              <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-xs text-neutral-400 space-y-1.5">
                <div><strong>Destinatário:</strong> Orientação Educacional e Direção</div>
                <div><strong>Objetivo:</strong> Mediação rápida e comunicação formal aos responsáveis</div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center text-sm font-semibold text-neutral-400 font-serif italic">
            “Mais clareza sobre quem precisa acompanhar cada situação.”
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SEÇÃO — COMUNICAÇÃO COM AS FAMÍLIAS                    */}
      {/* ========================================================= */}
      <section id="comunicacao" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
                Parceria Escola-Família
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 leading-tight">
                A família não precisa descobrir depois.
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Quando uma situação precisa ser comunicada, a escola pode organizar as informações necessárias para entrar em contato com o responsável sem ruídos ou desencontros.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Identificação imediata do responsável e telefones de contato',
                  'Registro do conteúdo exato transmitido à família',
                  'Status de acompanhamento: Notificado, Agendado ou Concluído',
                  'Evita surpresas em reuniões de fim de bimestre'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-neutral-700 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-wine-800 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-wine-50 border border-wine-200">
                <p className="text-sm font-bold text-wine-900 font-serif">
                  Informação organizada para uma comunicação mais rápida.
                </p>
              </div>
            </div>

            {/* Visual Communication Card Mockup */}
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-wine-800" size={18} />
                    <span className="font-bold text-neutral-900 text-sm">Preparar Comunicação ao Responsável</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Pronto para Envio
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-xs text-neutral-600">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="block font-bold text-neutral-900 mb-0.5">Aluno:</span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg block">Mariana Souza (9° Ano A)</span>
                    </div>
                    <div>
                      <span className="block font-bold text-neutral-900 mb-0.5">Responsável:</span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg block">Ana Paula (Mãe)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="block font-bold text-neutral-900 mb-0.5">Data/Horário:</span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg block">27/09 às 14:20</span>
                    </div>
                    <div>
                      <span className="block font-bold text-neutral-900 mb-0.5">Disciplina:</span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg block">Ciências</span>
                    </div>
                    <div>
                      <span className="block font-bold text-neutral-900 mb-0.5">Professor:</span>
                      <span className="p-2 bg-white border border-neutral-200 rounded-lg block">Profª. Juliana</span>
                    </div>
                  </div>

                  <div>
                    <span className="block font-bold text-neutral-900 mb-0.5">Síntese do Contato:</span>
                    <div className="p-3 bg-white border border-neutral-200 rounded-lg text-neutral-700 leading-relaxed">
                      "Entramos em contato para alinhar os estudos e tarefas de Ciências antes da avaliação trimestral. A mãe agradeceu a iniciativa e agendamos retorno em 7 dias."
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-200 flex justify-between items-center">
                  <span className="text-[11px] text-neutral-500">Histórico registrado no perfil da aluna</span>
                  <button className="px-4 py-2 bg-wine-800 text-white rounded-lg text-xs font-bold hover:bg-wine-900 transition-colors flex items-center gap-1.5">
                    <Send size={12} /> Registrar Comunicação
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. SEÇÃO — PAINEL / DASHBOARD                             */}
      {/* ========================================================= */}
      <section id="dashboard" className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              Visão Completa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Informação que ajuda a gestão a enxergar a escola.
            </h2>
            <p className="mt-4 text-neutral-300 text-lg">
              Transforme registros espalhados em informações organizadas para a gestão tomar decisões ágeis.
            </p>
          </div>

          {/* Big Mockup Dashboard Container */}
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-4 sm:p-8 shadow-2xl max-w-5xl mx-auto">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-neutral-800 gap-4">
              <div>
                <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider block">Painel Geral</span>
                <h4 className="text-xl font-bold text-white">Escola Modelo — Ano Letivo 2026</h4>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700">6° ao 9° Ano</span>
                <span className="px-3 py-1.5 rounded-lg bg-wine-900/60 text-wine-300 border border-wine-700/60">Exportar PDF</span>
              </div>
            </div>

            {/* Dashboard Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Ocorrências no Mês', value: '42', note: '85% já resolvidas' },
                { label: 'Alunos Acompanhados', value: '28', note: 'Com plano ativo' },
                { label: 'Comunicações Feitas', value: '39', note: 'Famílias cientes' },
                { label: 'Desdobramentos Concluídos', value: '31', note: 'Casos finalizados' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 font-medium block">{stat.label}</span>
                  <div className="text-3xl font-extrabold text-white mt-1">{stat.value}</div>
                  <span className="text-[10px] text-wine-400 font-semibold block mt-1">{stat.note}</span>
                </div>
              ))}
            </div>

            {/* Timeline preview in dashboard */}
            <div className="mt-6 bg-neutral-950 p-5 rounded-2xl border border-neutral-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                Fluxo Recente: Ocorrência → Desdobramento → Relatório
              </h5>
              <div className="space-y-3">
                {[
                  { time: 'Hoje, 11:20', text: 'Desdobramento pedagógico registrado para Matheus Costa (7° B)', status: 'Concluído' },
                  { time: 'Hoje, 09:15', text: 'Comunicação realizada com responsável de Gabriela Nunes (9° A)', status: 'Família ciente' },
                  { time: 'Ontem, 16:40', text: 'Relatório mensal de ocorrências gerado pela Coordenação', status: 'Disponível' }
                ].map((act, i) => (
                  <div key={i} className="flex flex-wrap items-center justify-between text-xs p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                    <span className="text-neutral-400 w-24">{act.time}</span>
                    <span className="text-neutral-200 font-medium flex-1 px-2">{act.text}</span>
                    <span className="text-emerald-400 font-semibold">{act.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. SEÇÃO — HISTÓRICO & RELATÓRIOS                        */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Histórico do Aluno */}
            <div>
              <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
                Linha do Tempo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 mb-6">
                O histórico do aluno conta uma história.
              </h2>
              <div className="text-neutral-600 text-base leading-relaxed space-y-4">
                <p>
                  Uma ocorrência isolada pode parecer apenas um registro pontual.
                </p>
                <p>
                  Quando acompanhada ao longo do tempo, ela ajuda a escola a identificar padrões, compreender as dificuldades reais de cada estudante e agir com precisão.
                </p>
              </div>

              {/* Steps flow */}
              <div className="mt-8 p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-800">
                <span>Aluno</span>
                <span className="text-wine-800">→</span>
                <span>Ocorrência</span>
                <span className="text-wine-800">→</span>
                <span>Histórico</span>
                <span className="text-wine-800">→</span>
                <span className="text-wine-800 font-black">Desdobramento</span>
              </div>
            </div>

            {/* Relatórios e Desdobramentos */}
            <div className="mt-12 lg:mt-0 p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800">
              <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-2">
                Acompanhamento Real
              </span>
              <h3 className="text-2xl font-bold mb-4">Não basta registrar. É preciso acompanhar.</h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                O Themis Class permite registrar os encaminhamentos realizados após cada ocorrência (conversas, orientações, apoios pedagógicos) e emitir relatórios estruturados para a gestão.
              </p>

              <div className="space-y-3">
                {[
                  'Encaminhamentos pedagógicos formais',
                  'Controle de prazos e datas de reavaliação',
                  'Relatórios individuais ou por turma em PDF',
                  'Documentação segura para conselhos de classe'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 size={16} className="text-wine-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. SEÇÃO — PARA CADA PERFIL                              */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Perfis de Acesso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Uma plataforma. Diferentes necessidades.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                perfil: 'Gestor',
                desc: 'Tenha uma visão organizada da escola, professores, alunos, turmas, ocorrências, comunicações, relatórios e desdobramentos.',
                tag: 'Visão Global'
              },
              {
                perfil: 'Professor',
                desc: 'Registre ocorrências com rapidez e tenha acesso às informações necessárias dentro das permissões do seu perfil.',
                tag: 'Sala de Aula'
              },
              {
                perfil: 'Coordenação',
                desc: 'Acompanhe situações pedagógicas, orientações individuais e os respectivos encaminhamentos dos alunos.',
                tag: 'Apoio Pedagógico'
              },
              {
                perfil: 'Direção',
                desc: 'Tenha informações consolidadas e históricas para acompanhar situações disciplinares e fundamentar decisões.',
                tag: 'Decisão e Governança'
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-wine-50 text-wine-800 mb-4 inline-block">
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{p.perfil}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. SEÇÃO — SEGURANÇA E ARQUITETURA                       */}
      {/* ========================================================= */}
      <section id="seguranca" className="py-24 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-wine-900/60 border border-wine-700/50 flex items-center justify-center mx-auto mb-6 text-wine-300">
            <ShieldCheck size={32} />
          </div>
          
          <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
            Privacidade e Proteção
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Os dados da escola precisam estar protegidos.
          </h2>

          <p className="mt-6 text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            O Themis Class utiliza controles de acesso para separar as permissões de cada perfil e limitar o acesso aos dados estritamente de acordo com a escola e a função de cada usuário.
          </p>

          {/* Badges de segurança */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            {[
              { title: 'RLS', sub: 'Row Level Security' },
              { title: 'RBAC', sub: 'Role-Based Access' },
              { title: 'JWT', sub: 'Autenticação Criptografada' },
              { title: 'OWASP', sub: 'Boas Práticas de API' }
            ].map((sec, idx) => (
              <div key={idx} className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <span className="text-base font-extrabold text-white block">{sec.title}</span>
                <span className="text-xs text-neutral-400">{sec.sub}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 max-w-2xl mx-auto">
            <p className="text-sm font-serif italic text-neutral-300">
              “Segurança não é apenas uma funcionalidade. É uma preocupação presente na arquitetura da plataforma.”
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. SEÇÃO — BENEFÍCIOS                                    */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Impacto Prático
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              O que muda na rotina da escola?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Menos informação espalhada', desc: 'Centralize todos os registros em uma única plataforma segura.' },
              { title: 'Mais agilidade', desc: 'Registre ocorrências sem depender de formulários manuais ou papel.' },
              { title: 'Mais organização', desc: 'Alunos, turmas e professores estruturados em poucos cliques.' },
              { title: 'Mais acompanhamento', desc: 'Consulte históricos pedagógicos e desdobramentos a qualquer momento.' },
              { title: 'Mais comunicação', desc: 'Tenha os dados organizados antes de conversar com as famílias.' },
              { title: 'Mais segurança', desc: 'Acesso restrito e controlado conforme o perfil de cada educador.' }
            ].map((ben, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="text-wine-800 w-6 h-6 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{ben.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 14. PARA ESCOLAS QUE QUEREM EVOLUIR                       */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-r from-wine-950 via-wine-900 to-black text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
            Sua escola já cuida dos alunos. <br className="hidden sm:inline" />
            O Themis Class ajuda a organizar esse cuidado.
          </h2>
          <p className="text-lg sm:text-xl text-wine-100/90 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
            A tecnologia não substitui o olhar dos educadores. Ela ajuda a escola a registrar, organizar e acompanhar aquilo que realmente importa.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-wine-950 bg-white shadow-xl hover:bg-neutral-100 hover:scale-105 transition-all"
          >
            <span>Quero conhecer o Themis Class</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 15. SEÇÃO — PREÇO / MODELO COMERCIAL                      */}
      {/* ========================================================= */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
            Planos Sob Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
            Uma solução que acompanha o tamanho da sua escola.
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            Conheça as condições comerciais do Themis Class para a sua instituição.
          </p>

          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-base font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md transition-all"
            >
              <span>Falar com o comercial</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 16. FAQ                                                   */}
      {/* ========================================================= */}
      <section id="faq" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-neutral-900 flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-wine-800 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 17. CTA FINAL                                             */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            A comunicação com as famílias pode começar hoje.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conheça o Themis Class e descubra uma forma mais organizada de registrar, acompanhar e comunicar as ocorrências da sua escola.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-700 hover:from-wine-700 hover:to-wine-800 shadow-xl hover:-translate-y-0.5 transition-all border border-wine-500/40"
          >
            <span>Quero conhecer o Themis Class</span>
            <ArrowRight size={18} />
          </a>

          <div className="mt-6">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm text-neutral-400 hover:text-white transition-colors underline decoration-neutral-600 flex items-center justify-center gap-1.5"
            >
              <Phone size={14} /> Fale conosco pelo WhatsApp: (11) 99871-3683
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 18. FOOTER INSTITUCIONAL                                  */}
      {/* ========================================================= */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <div className="md:col-span-2">
              <span className="font-serif font-black text-2xl tracking-tight text-white block mb-2">
                Themis Class
              </span>
              <p className="text-sm text-neutral-400 max-w-sm mb-4">
                Gestão escolar. Comunicação com as famílias. Acompanhamento pedagógico e disciplinar.
              </p>
              <div className="text-xs text-neutral-500">
                Uma solução <strong className="text-neutral-300">Magagnini Educação</strong>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-wine-400 mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#dashboard" className="hover:text-white transition-colors">Plataforma</a></li>
                <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-wine-400 mb-4">Contato Comercial</h4>
              <p className="text-sm text-neutral-400 mb-3">WhatsApp: (11) 99871-3683</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-wine-400 hover:text-wine-300 underline"
              >
                Conversar pelo WhatsApp →
              </a>
            </div>

          </div>

          <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Themis Class — Magagnini Educação. Todos os direitos reservados.</p>
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

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-neutral-900/95 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Play size={16} className="text-wine-500 fill-wine-500" />
                <span className="text-sm font-semibold text-neutral-200">
                  Themis Class — Demonstração da Plataforma
                </span>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Fechar vídeo"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/uJ8j--NHcfI?autoplay=1"
                title="Themis Class — Demonstração"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
              <span>Quer ver como aplicar o Themis Class na sua escola?</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-wine-800 hover:bg-wine-700 text-white font-bold transition-colors"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
