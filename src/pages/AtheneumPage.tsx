import { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Users, 
  Search, 
  BarChart3, 
  GraduationCap, 
  Video, 
  ChevronDown, 
  ArrowLeft, 
  Menu, 
  X, 
  Calendar,
  Layers,
  Zap,
  Check
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511998713683?text=Ola!%20Gostaria%20de%20falar%20sobre%20o%20Atheneum%20Lib";

interface AtheneumPageProps {
  onBackToMagagnini?: () => void;
}

export function AtheneumPage({ onBackToMagagnini }: AtheneumPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'acervo' | 'emprestimos' | 'leitores'>('dashboard');

  const faqs = [
    {
      q: 'O Atheneum Lib precisa ser instalado em algum computador?',
      a: 'Não. O Atheneum Lib é 100% online e funciona direto no navegador, seja no computador da biblioteca, no notebook da coordenação, no tablet ou no smartphone. Seus dados ficam salvos em nuvem de forma segura.'
    },
    {
      q: 'Existe algum limite de livros ou alunos cadastrados?',
      a: 'No Plano Anual Completo, você tem cadastro ilimitado de acervo (livros, periódicos, apostilas) e leitores (alunos, professores e colaboradores da instituição).'
    },
    {
      q: 'Como funciona o treinamento incluso?',
      a: 'Assim que sua assinatura é ativada, você e sua equipe recebem acesso imediato à plataforma com módulos em vídeo passo a passo: desde o cadastro do primeiro exemplar até a organização de relatórios e dinâmicas de empréstimo.'
    },
    {
      q: 'Minha escola já usa uma planilha. Consigo migrar os dados?',
      a: 'Sim! Nossa equipe auxilia no processo de importação e formatação dos seus dados existentes para que você não perca nenhum registro do seu acervo atual.'
    },
    {
      q: 'Como funciona o suporte técnico?',
      a: 'O suporte prioritário é realizado diretamente via WhatsApp e e-mail por nossa equipe especializada em gestão pedagógica e bibliotecária, garantindo respostas rápidas sem robôs ou esperas burocráticas.'
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'Você pode testar e utilizar o Atheneum Lib com sua equipe por 7 dias inteiros. Se por qualquer motivo achar que não atende às necessidades da sua escola, basta nos enviar uma mensagem e devolveremos 100% do valor pago.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-wine-800 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. HEADER / NAVEGAÇÃO                                     */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo e Voltar */}
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
                  src="/assets/logo/atheneum-lib.png"
                  alt="Atheneum Lib"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/produtos/solucoes-digitais/atheneum-lib.png";
                  }}
                />
                <div>
                  <span className="font-serif font-black tracking-tight text-neutral-950 text-xl block leading-none">
                    Atheneum Lib
                  </span>
                  <span className="text-[10px] font-bold text-wine-800 tracking-wider uppercase">
                    Gestão de Bibliotecas
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
              <a href="#como-funciona" className="hover:text-wine-800 transition-colors">Como Funciona</a>
              <a href="#funcionalidades" className="hover:text-wine-800 transition-colors">Funcionalidades</a>
              <a href="#treinamento" className="hover:text-wine-800 transition-colors">Treinamento</a>
              <a href="#para-quem" className="hover:text-wine-800 transition-colors">Para Quem É</a>
              <a href="#planos" className="hover:text-wine-800 transition-colors">Planos & Preço</a>
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
                <span>Garantir Acesso</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile menu trigger */}
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

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Como Funciona
            </a>
            <a 
              href="#funcionalidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Funcionalidades
            </a>
            <a 
              href="#treinamento" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Treinamento
            </a>
            <a 
              href="#para-quem" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Para Quem É
            </a>
            <a 
              href="#planos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Planos & Preço
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-wine-800 shadow"
              >
                <span>Garantir Acesso Agora</span>
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
                <span>O aplicativo completo para gestão de bibliotecas</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Controle acervo, empréstimos e usuários em um único sistema{' '}
                <span className="text-wine-800 underline decoration-wine-200 decoration-wavy decoration-2">
                  simples, organizado e confiável.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Elimine livros perdidos, anotações manuais e planilhas confusas. Tenha o controle total da biblioteca escolar na palma da mão, com treinamento passo a passo incluso.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#planos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-wine-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border border-wine-600/40"
                >
                  <span>Começar Agora</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#como-funciona"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-neutral-700 bg-white border border-neutral-300 hover:border-wine-800 hover:text-wine-800 shadow-sm transition-all"
                >
                  <span>Ver Como Funciona ↓</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap gap-6 justify-center lg:justify-start text-xs font-semibold text-neutral-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Sem limites de acervo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Acesso 100% online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-wine-700" />
                  <span>Curso em vídeo incluso</span>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Software Mockup */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-neutral-950 p-4 sm:p-5 border border-neutral-800 shadow-2xl overflow-hidden">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">atheneumlib.app/painel</span>
                  <div className="w-6" />
                </div>

                {/* Tabs inside Mockup */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-neutral-900 rounded-xl mb-4 text-xs font-semibold text-neutral-400">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === 'dashboard' ? 'bg-wine-800 text-white shadow' : 'hover:text-white'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab('acervo')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === 'acervo' ? 'bg-wine-800 text-white shadow' : 'hover:text-white'
                    }`}
                  >
                    Acervo
                  </button>
                  <button
                    onClick={() => setActiveTab('emprestimos')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === 'emprestimos' ? 'bg-wine-800 text-white shadow' : 'hover:text-white'
                    }`}
                  >
                    Empréstimos
                  </button>
                  <button
                    onClick={() => setActiveTab('leitores')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === 'leitores' ? 'bg-wine-800 text-white shadow' : 'hover:text-white'
                    }`}
                  >
                    Alunos
                  </button>
                </div>

                {/* Tab 1: Dashboard View */}
                {activeTab === 'dashboard' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                        <span className="text-[10px] text-neutral-400 uppercase font-semibold">Acervo Total</span>
                        <div className="text-xl font-extrabold text-white mt-0.5">1.842</div>
                        <span className="text-[10px] text-emerald-400">livros catalogados</span>
                      </div>
                      <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                        <span className="text-[10px] text-neutral-400 uppercase font-semibold">Empréstimos Ativos</span>
                        <div className="text-xl font-extrabold text-white mt-0.5">86</div>
                        <span className="text-[10px] text-wine-400">3 devoluções hoje</span>
                      </div>
                    </div>

                    <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800 text-left">
                      <div className="text-xs font-bold text-white mb-2 flex items-center justify-between">
                        <span>Mais Lidos do Mês</span>
                        <span className="text-[10px] text-wine-400">Ranking</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { title: 'Dom Casmurro', author: 'Machado de Assis', loans: 38 },
                          { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', loans: 31 },
                          { title: 'Capitães da Areia', author: 'Jorge Amado', loans: 27 },
                        ].map((book, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-md bg-wine-950 text-wine-300 flex items-center justify-center text-[10px] font-bold">
                                {idx + 1}
                              </span>
                              <div>
                                <span className="font-semibold text-neutral-200 block leading-tight">{book.title}</span>
                                <span className="text-[10px] text-neutral-500">{book.author}</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-mono">{book.loans} empréstimos</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Acervo View */}
                {activeTab === 'acervo' && (
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 bg-neutral-900 p-2 rounded-lg border border-neutral-800 text-xs text-neutral-400">
                      <Search size={14} className="text-neutral-500" />
                      <span>Buscar por título, autor ou ISBN...</span>
                    </div>
                    {[
                      { title: 'Vidas Secas', author: 'Graciliano Ramos', status: 'Disponível', code: 'L-1042', color: 'text-emerald-400 bg-emerald-950/60' },
                      { title: 'A Metamorfose', author: 'Franz Kafka', status: 'Emprestado', code: 'L-0891', color: 'text-amber-400 bg-amber-950/60' },
                      { title: 'Quarto de Despejo', author: 'Carolina Maria de Jesus', status: 'Disponível', code: 'L-0715', color: 'text-emerald-400 bg-emerald-950/60' }
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-neutral-200 block">{item.title}</span>
                          <span className="text-[10px] text-neutral-500">{item.author} • {item.code}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 3: Empréstimos View */}
                {activeTab === 'emprestimos' && (
                  <div className="space-y-2 text-left">
                    {[
                      { student: 'Ana Clara Souza', grade: '8º Ano A', book: 'A Hora da Estrela', due: 'Hoje', alert: false },
                      { student: 'Lucas Mendes', grade: '9º Ano B', book: 'Memórias Póstumas', due: 'Atrasado 2d', alert: true },
                      { student: 'Beatriz Lima', grade: '7º Ano C', book: 'O Cortiço', due: 'Em 4 dias', alert: false }
                    ].map((loan, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-neutral-200 block">{loan.student} ({loan.grade})</span>
                          <span className="text-[10px] text-neutral-400">{loan.book}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          loan.alert ? 'text-rose-400 bg-rose-950/70 border border-rose-800/60' : 'text-neutral-300 bg-neutral-800'
                        }`}>
                          {loan.due}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 4: Leitores View */}
                {activeTab === 'leitores' && (
                  <div className="space-y-2 text-left">
                    {[
                      { name: 'Gabriel Santana', category: 'Aluno - 9º Ano A', totalRead: 14, badge: 'Leitor Ouro' },
                      { name: 'Profª Mariana Costa', category: 'Docente - Literatura', totalRead: 26, badge: 'Destaque' },
                      { name: 'Camila Rocha', category: 'Aluno - 8º Ano B', totalRead: 9, badge: 'Leitor Prata' }
                    ].map((user, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-wine-900/80 text-wine-200 flex items-center justify-center font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <span className="font-semibold text-neutral-200 block">{user.name}</span>
                            <span className="text-[10px] text-neutral-500">{user.category}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-bold text-wine-400 block">{user.badge}</span>
                          <span className="text-[9px] text-neutral-500">{user.totalRead} livros lidos</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Simulated footer bar */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Sincronização em tempo real
                  </span>
                  <span className="font-mono text-wine-400">Atheneum OS v2.4</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SEÇÃO — O PROBLEMA DAS BIBLIOTECAS                     */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-3">
              A Realidade das Instituições
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Gerenciar uma biblioteca não deveria ser complicado.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-neutral-400 leading-relaxed">
              Mas na prática, muitas escolas e instituições ainda sofrem com processos manuais, fichas de papel rasgadas e falta de controle.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Registros em papel',
                desc: 'Cadernos e fichas físicas que se perdem, rasgam ou se tornam ilegíveis com o tempo.',
                icon: <Layers className="w-5 h-5 text-wine-400" />
              },
              {
                title: 'Livros perdidos',
                desc: 'Obras emprestadas que nunca retornam porque ninguém sabe exatamente com qual aluno ficaram.',
                icon: <BookOpen className="w-5 h-5 text-wine-400" />
              },
              {
                title: 'Controle manual',
                desc: 'Horas preciosas perdidas anotando códigos e preenchendo fichários que ninguém consulta.',
                icon: <Clock className="w-5 h-5 text-wine-400" />
              },
              {
                title: 'Sem histórico do leitor',
                desc: 'Dificuldade para saber o que cada turma leu e acompanhar o progresso de leitura dos alunos.',
                icon: <Users className="w-5 h-5 text-wine-400" />
              },
              {
                title: 'Falta de dados claros',
                desc: 'Impossibilidade de gerar relatórios rápidos sobre o acervo, obras mais procuradas e perdas.',
                icon: <BarChart3 className="w-5 h-5 text-wine-400" />
              },
              {
                title: 'Tarefas repetitivas',
                desc: 'Retrabalho constante para cadastrar exemplares repetidos e cobrar prazos de entrega.',
                icon: <Zap className="w-5 h-5 text-wine-400" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-wine-800/80 transition-all">
                <div className="w-10 h-10 rounded-xl bg-wine-950/80 border border-wine-800/50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-wine-950 via-neutral-900 to-wine-950 border border-wine-800/40 max-w-3xl mx-auto shadow-2xl">
            <p className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              “Uma biblioteca organizada precisa de um sistema à altura.”
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SEÇÃO — CENTRALIZAÇÃO & SOLUÇÃO                        */}
      {/* ========================================================= */}
      <section id="como-funciona" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              A Solução Ideal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              A Atheneum Lib centraliza tudo o que você precisa.
            </h2>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              Um ambiente único, pensado para bibliotecas reais, eliminando a complexidade do dia a dia e modernizando o acesso ao livro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Gestão de Acervo',
                desc: 'Cadastre títulos, autores, gêneros, editoras e organize exemplares por localização física nas prateleiras.',
                icon: <BookOpen className="w-6 h-6 text-wine-800" />
              },
              {
                step: '02',
                title: 'Cadastro de Usuários',
                desc: 'Organize leitores por turmas, séries ou categorias (alunos, professores, servidores e comunidade).',
                icon: <Users className="w-6 h-6 text-wine-800" />
              },
              {
                step: '03',
                title: 'Empréstimos Ágeis',
                desc: 'Registre saídas e devoluções em poucos segundos com cálculo automático de datas e notificações de prazo.',
                icon: <Calendar className="w-6 h-6 text-wine-800" />
              },
              {
                step: '04',
                title: 'Métricas & Relatórios',
                desc: 'Acompanhe leitores mais ativos, livros mais procurados e mantenha auditoria precisa do patrimônio.',
                icon: <BarChart3 className="w-6 h-6 text-wine-800" />
              }
            ].map((card, i) => (
              <div key={i} className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-wine-300 hover:shadow-lg transition-all relative group">
                <span className="text-3xl font-extrabold text-neutral-200 group-hover:text-wine-200 transition-colors block mb-3">
                  {card.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-wine-100 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{card.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SEÇÃO — TREINAMENTO INCLUSO (DIFERENCIAL EXCLUSIVO)    */}
      {/* ========================================================= */}
      <section id="treinamento" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wine-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-950 border border-wine-800/80 text-wine-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Video size={14} className="text-wine-400" />
                <span>Treinamento e Capacitação Inclusos</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Não é apenas um sistema.{' '}
                <span className="text-wine-400">É o método completo de gestão.</span>
              </h2>

              <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                Ao adquirir o Atheneum Lib, você ganha acesso à nossa <strong>plataforma exclusiva de treinamentos</strong>, ensinando passo a passo como aproveitar cada recurso para transformar a biblioteca da sua escola.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Acesso Imediato',
                    desc: 'Login e senha liberados automaticamente após a confirmação para você começar hoje mesmo.',
                    icon: <Zap className="w-5 h-5 text-wine-400" />
                  },
                  {
                    title: 'Passo a Passo Visual',
                    desc: 'Aprenda vendo e fazendo: desde a catalogação inicial até a emissão de relatórios para a diretoria.',
                    icon: <Video className="w-5 h-5 text-wine-400" />
                  },
                  {
                    title: 'Suporte Pedagógico Especializado',
                    desc: 'Nossa equipe pronta para tirar dúvidas da rotina da biblioteca e orientar sua instituição.',
                    icon: <GraduationCap className="w-5 h-5 text-wine-400" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="p-2.5 rounded-lg bg-wine-950 text-wine-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.title}</h4>
                      <p className="text-neutral-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video / Course Mockup Card */}
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs text-neutral-400">
                  <span className="font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-wine-400" />
                    Curso Completo de Gestão de Bibliotecas
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-wine-950 text-wine-400 font-semibold border border-wine-800/50">
                    Incluso no Plano
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { mod: 'Módulo 1', title: 'Cadastrando seu primeiro livro e padronizando o acervo', time: '12 min' },
                    { mod: 'Módulo 2', title: 'Importação de alunos, turmas e regras de empréstimo', time: '18 min' },
                    { mod: 'Módulo 3', title: 'Rotina diária: empréstimos, devoluções e prazos em 10 segundos', time: '15 min' },
                    { mod: 'Módulo 4', title: 'Indicadores pedagógicos: ranking de leitura e projetos escolares', time: '20 min' }
                  ].map((lesson, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between hover:border-wine-800/60 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-wine-950 text-wine-400 flex items-center justify-center font-bold text-xs">
                          {i + 1}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-wine-400 block">{lesson.mod}</span>
                          <span className="text-xs font-semibold text-neutral-200">{lesson.title}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">{lesson.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-center">
                  <a
                    href="#planos"
                    className="inline-flex items-center gap-2 text-wine-400 hover:text-wine-300 font-bold text-sm transition-colors"
                  >
                    <span>Quero garantir meu acesso ao curso + sistema</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SEÇÃO — PRINCIPAIS FUNCIONALIDADES                    */}
      {/* ========================================================= */}
      <section id="funcionalidades" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Recursos Essenciais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Tudo o que você precisa para uma gestão eficiente.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Desenvolvido com foco na simplicidade: ferramentas poderosas que qualquer membro da equipe aprende a usar rapidamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5 font-bold">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Gestão de Acervo</h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Cadastro completo com ISBN</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Busca inteligente e filtros</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Status em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Múltiplos exemplares</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Usuários e Leitores</h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Cadastro de alunos por turma</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Professores e funcionários</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Histórico individual de leitura</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Controle de pendências</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 font-bold">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Empréstimos</h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Registro ágil em segundos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Prazos e datas automáticas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Alerta de devoluções e atrasos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Renovações rápidas</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-wine-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 font-bold">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Relatórios & Métricas</h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Livros mais lidos do ano</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Leitores e turmas mais ativas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Dados para prestação de contas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-wine-700 flex-shrink-0" />
                  <span>Exportação simples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SEÇÃO — PARA QUEM É A ATHENEUM LIB                     */}
      {/* ========================================================= */}
      <section id="para-quem" className="py-24 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Público-Alvo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Para quem é a Atheneum LIB?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A Atheneum LIB foi criada para instituições que desejam organização, controle e eficiência na gestão do acervo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Escolas públicas e privadas',
                desc: 'Que precisam organizar empréstimos, evitar perdas de livros e manter o histórico atualizado dos alunos e do acervo.'
              },
              {
                title: 'Bibliotecas escolares',
                desc: 'Que querem sair do papel e do controle manual para um sistema simples, digital, ágil e seguro.'
              },
              {
                title: 'Instituições de ensino',
                desc: 'Que desejam acompanhar movimentações, gerar relatórios claros e ter dados confiáveis para tomada de decisão pedagógica.'
              },
              {
                title: 'Coordenadores e gestores',
                desc: 'Que precisam de controle rápido sobre o acervo sem depender de planilhas soltas e desencontradas.'
              },
              {
                title: 'Bibliotecários e monitores',
                desc: 'Que entendem que uma biblioteca organizada economiza tempo e estimula o amor pela leitura nos estudantes.'
              },
              {
                title: 'Instituições que querem evoluir',
                desc: 'Que valorizam a tecnologia como aliada da educação para transformar espaços de leitura em centros dinâmicos.'
              }
            ].map((target, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-wine-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center mb-4 font-bold">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{target.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SEÇÃO — PLANO & OFERTA ESPECIAL                        */}
      {/* ========================================================= */}
      <section id="planos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Condições para sua Escola
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Acesso Completo para sua Instituição.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Tudo o que você precisa em um único plano completo, sem cobranças extras ou surpresas.
            </p>
          </div>

          {/* Pricing Highlight Card */}
          <div className="max-w-xl mx-auto bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative text-white">
            
            {/* Top pill */}
            <div className="bg-gradient-to-r from-wine-800 via-wine-700 to-rose-700 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white">
              Melhor Oferta • Acesso Completo Anual
            </div>

            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Plano Anual Completo
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  Acesso total a todas as funcionalidades do Atheneum Lib.
                </p>
              </div>

              {/* Items Breakdown without prices */}
              <div className="space-y-3.5 pb-8 border-b border-neutral-800 text-sm">
                <div className="flex items-center justify-between text-neutral-200">
                  <span className="flex items-center gap-2.5">
                    <Check size={18} className="text-wine-400 flex-shrink-0" />
                    <span>Sistema de Gestão Completo</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs uppercase bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">Incluso</span>
                </div>

                <div className="flex items-center justify-between text-neutral-200">
                  <span className="flex items-center gap-2.5">
                    <Check size={18} className="text-wine-400 flex-shrink-0" />
                    <span>Curso de Gestão de Bibliotecas</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs uppercase bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">Incluso</span>
                </div>

                <div className="flex items-center justify-between text-neutral-200">
                  <span className="flex items-center gap-2.5">
                    <Check size={18} className="text-wine-400 flex-shrink-0" />
                    <span>Suporte Prioritário no WhatsApp</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs uppercase bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">Incluso</span>
                </div>

                <div className="flex items-center justify-between text-neutral-200">
                  <span className="flex items-center gap-2.5">
                    <Check size={18} className="text-wine-400 flex-shrink-0" />
                    <span>Backups semanais em nuvem</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs uppercase bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">Incluso</span>
                </div>

                <div className="flex items-center justify-between text-neutral-200">
                  <span className="flex items-center gap-2.5">
                    <Check size={18} className="text-wine-400 flex-shrink-0" />
                    <span>Acervo e Leitores ilimitados</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs uppercase bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">Incluso</span>
                </div>
              </div>

              {/* Consultation / Contact text */}
              <div className="my-8 text-center">
                <span className="text-xs uppercase tracking-wider text-wine-400 font-bold block mb-2">
                  Atendimento Comercial Exclusivo
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
                  Entre em contato conosco pelo WhatsApp para conhecer a plataforma, tirar dúvidas e solicitar uma demonstração personalizada para a sua instituição.
                </p>
              </div>

              {/* Action Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-wine-800 to-rose-700 hover:from-wine-700 hover:to-rose-600 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Falar sobre o Atheneum Lib no WhatsApp</span>
                <ArrowRight size={18} />
              </a>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 text-center">
                <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                <span>Atendimento humanizado e demonstração sem compromisso.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. SEÇÃO — SOBRE A MAGAGNINI EDUCAÇÃO                     */}
      {/* ========================================================= */}
      <section className="py-24 bg-neutral-50/80 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-8">
            Compromisso real com a educação brasileira.
          </h2>

          <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed text-left">
            <p>
              A <strong>Magagnini Educação</strong> nasce do chão da sala de aula e da vivência real com alunos e professores da educação básica e do ensino superior. Somos uma iniciativa educacional focada em transformar a forma como o ensino é construído, estudado e vivenciado, unindo rigor pedagógico, linguagem acessível e materiais pensados para quem aprende de verdade.
            </p>
            <p>
              Também temos como pilar o desenvolvimento de <strong>soluções digitais que simplificam e fortalecem os processos escolares</strong>. Acreditamos que a tecnologia deve servir à aprendizagem e à gestão pedagógica, tornando o planejamento mais ágil, a organização mais eficiente e o acompanhamento do desempenho mais estratégico.
            </p>
            <p>
              Por isso, criamos ferramentas como o <strong>Themis Class</strong> e a <strong>Atheneum Lib</strong>, que apoiam escolas, gestores e professores na otimização do tempo, na valorização do hábito leitor e na tomada de decisões baseadas em dados claros.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. SEÇÃO — FAQ INTERATIVO                                */}
      {/* ========================================================= */}
      <section id="faq" className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Perguntas Frequentes
            </h2>
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
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-wine-800 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-neutral-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-wine-800' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100 pt-4 bg-neutral-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Ainda tem alguma dúvida?</h3>
            <p className="text-neutral-600 text-sm mb-6">
              Nossa equipe está disponível no WhatsApp para entender a realidade da sua escola.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-wine-800 hover:bg-wine-900 text-white font-bold text-sm shadow transition-colors"
            >
              <span>Falar com a equipe no WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. FOOTER ATHENEUM LIB                                   */}
      {/* ========================================================= */}
      <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/logo/atheneum-lib.png"
                  alt="Atheneum Lib"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/produtos/solucoes-digitais/atheneum-lib.png";
                  }}
                />
                <span className="font-serif font-black text-xl text-white">Atheneum Lib</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                O aplicativo completo para gestão de bibliotecas escolares. Simplicidade, segurança e controle do acervo em um único lugar.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img 
                  src="/assets/logo/logo-branca.png" 
                  alt="Magagnini Educação" 
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/LOGO BRANCA PNG.png";
                  }}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-wine-400 uppercase tracking-wider mb-4">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#treinamento" className="hover:text-white transition-colors">Treinamento</a></li>
                <li><a href="#para-quem" className="hover:text-white transition-colors">Para Quem É</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos & Preço</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-wine-400 uppercase tracking-wider mb-4">
                Atendimento
              </h4>
              <p className="text-xs text-neutral-400 mb-2">WhatsApp: (11) 99871-3683</p>
              <p className="text-xs text-neutral-400 mb-4">contato@magagninieducacao.com.br</p>
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
            <p>© {new Date().getFullYear()} Atheneum Lib — Magagnini Educação. Todos os direitos reservados.</p>
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
