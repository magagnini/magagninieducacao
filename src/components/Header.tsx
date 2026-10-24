import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, GraduationCap, Users, Building2 } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: 'magagnini' | 'alunos' | 'professores' | 'gestores' | 'themis' | 'atheneum' | 'obmep' | 'provao-paulista' | 'matematica' | 'ciencias' | 'produtividade-inteligente') => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = 'magagnini' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string, pageTarget?: 'alunos' | 'professores' | 'gestores') => {
    setIsOpen(false);
    if (pageTarget && onNavigate) {
      onNavigate(pageTarget);
      return;
    }
    if (currentPage !== 'magagnini' && onNavigate && href.startsWith('#')) {
      onNavigate('magagnini');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
          : 'bg-white/80 backdrop-blur-md border-b border-neutral-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => onNavigate ? onNavigate('magagnini') : window.location.href = '/'}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img
                src="/assets/logo/magagnini-mista-branca.png"
                alt="Magagnini Educação"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/MISTA BRANCA - 1920X800.png";
                }}
              />
            </button>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            <button
              onClick={() => onNavigate ? onNavigate('magagnini') : window.location.href = '/'}
              className={`px-3.5 py-2 text-sm font-sans font-semibold rounded-lg transition-colors cursor-pointer ${
                currentPage === 'magagnini' ? 'text-wine-800 font-bold' : 'text-neutral-700 hover:text-wine-800'
              }`}
            >
              Início
            </button>

            {/* Profile Links with subtle badges */}
            <button
              onClick={() => handleLinkClick('#alunos', 'alunos')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-sans font-semibold rounded-lg transition-colors cursor-pointer ${
                currentPage === 'alunos' ? 'text-wine-800 font-bold bg-wine-50' : 'text-neutral-700 hover:text-wine-800 hover:bg-neutral-50'
              }`}
            >
              <GraduationCap size={16} className="text-wine-700" />
              <span>Alunos</span>
            </button>

            <button
              onClick={() => handleLinkClick('#professores', 'professores')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-sans font-semibold rounded-lg transition-colors cursor-pointer ${
                currentPage === 'professores' ? 'text-wine-800 font-bold bg-wine-50' : 'text-neutral-700 hover:text-wine-800 hover:bg-neutral-50'
              }`}
            >
              <Users size={16} className="text-wine-700" />
              <span>Professores</span>
            </button>

            <button
              onClick={() => handleLinkClick('#gestores', 'gestores')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-sans font-semibold rounded-lg transition-colors cursor-pointer ${
                currentPage === 'gestores' ? 'text-wine-800 font-bold bg-wine-50' : 'text-neutral-700 hover:text-wine-800 hover:bg-neutral-50'
              }`}
            >
              <Building2 size={16} className="text-wine-700" />
              <span>Gestores</span>
            </button>

            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#produtos');
              }}
              className="px-3.5 py-2 text-sm font-sans font-semibold text-neutral-700 hover:text-wine-800 transition-colors rounded-lg cursor-pointer"
            >
              Materiais
            </a>

            <a
              href="#solucoes"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#solucoes');
              }}
              className="px-3.5 py-2 text-sm font-sans font-semibold text-neutral-700 hover:text-wine-800 transition-colors rounded-lg cursor-pointer"
            >
              Soluções
            </a>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contato');
              }}
              className="px-3.5 py-2 text-sm font-sans font-semibold text-neutral-700 hover:text-wine-800 transition-colors rounded-lg cursor-pointer"
            >
              Contato
            </a>
          </nav>

          {/* Quick Profile Selection Pill in Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('#perfis', undefined)}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 border border-wine-500/40 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
            >
              <Sparkles size={14} className="text-wine-200" />
              <span>Escolha seu Perfil</span>
              <ArrowRight size={14} className="text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-neutral-800 hover:text-wine-800 hover:bg-neutral-100/80 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onNavigate) onNavigate('magagnini');
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors text-left"
            >
              <span>Início</span>
              <ArrowRight size={16} className="text-neutral-400" />
            </button>

            <button
              onClick={() => handleLinkClick('#alunos', 'alunos')}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors text-left"
            >
              <span className="flex items-center gap-2">
                <GraduationCap size={18} className="text-wine-800" />
                <span>Sou Aluno</span>
              </span>
              <ArrowRight size={16} className="text-wine-800" />
            </button>

            <button
              onClick={() => handleLinkClick('#professores', 'professores')}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors text-left"
            >
              <span className="flex items-center gap-2">
                <Users size={18} className="text-wine-800" />
                <span>Sou Professor</span>
              </span>
              <ArrowRight size={16} className="text-wine-800" />
            </button>

            <button
              onClick={() => handleLinkClick('#gestores', 'gestores')}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors text-left"
            >
              <span className="flex items-center gap-2">
                <Building2 size={18} className="text-wine-800" />
                <span>Sou Gestor</span>
              </span>
              <ArrowRight size={16} className="text-wine-800" />
            </button>

            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#produtos');
              }}
              className="flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors"
            >
              <span>Materiais Didáticos</span>
              <ArrowRight size={16} className="text-neutral-400" />
            </a>

            <a
              href="#solucoes"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#solucoes');
              }}
              className="flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors"
            >
              <span>Soluções Digitais</span>
              <ArrowRight size={16} className="text-neutral-400" />
            </a>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contato');
              }}
              className="flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors"
            >
              <span>Contato</span>
              <ArrowRight size={16} className="text-neutral-400" />
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('#perfis')}
              className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 text-white px-6 py-3.5 rounded-2xl text-base font-sans font-bold shadow-3d-wine hover:shadow-3d-wine-hover transition-all cursor-pointer"
            >
              <Sparkles size={18} className="text-wine-200" />
              <span>Como podemos ajudar você?</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
