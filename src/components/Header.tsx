import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Apostilas Acadêmicas', href: '#apostilas' },
    { name: 'Atividades Adaptadas', href: '#atividades' },
    { name: 'Soluções Digitais', href: '#solucoes' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
          : 'bg-white/70 backdrop-blur-md border-b border-neutral-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/assets/logo/magagnini-mista-branca.png"
                  alt="Magagnini Educação"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/logo/MISTA BRANCA - 1920X800.png";
                  }}
                />
                {/* Elegant Brand Fallback Logo */}
                <div className="hidden flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-wine-800 to-black text-white flex items-center justify-center font-serif font-bold text-xl shadow-md border border-wine-600/40">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-black tracking-tight text-neutral-900 text-lg leading-tight group-hover:text-wine-800 transition-colors">
                      MAGAGNINI
                    </span>
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-wine-800 uppercase leading-none">
                      Educação
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-sans font-semibold text-neutral-700 hover:text-wine-800 transition-colors rounded-lg group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-wine-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Premium 3D Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#produtos"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-sans font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 border border-wine-500/40 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle gloss line */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <BookOpen size={16} className="text-wine-200 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Conheça nossos materiais</span>
              <ArrowRight size={15} className="text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-neutral-800 hover:text-wine-800 hover:bg-neutral-100/80 transition-colors"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 text-base font-sans font-semibold text-neutral-800 hover:text-wine-800 hover:bg-wine-50/60 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={16} className="text-neutral-400" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 text-white px-6 py-3.5 rounded-2xl text-base font-sans font-bold shadow-3d-wine hover:shadow-3d-wine-hover transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Sparkles size={18} className="text-wine-200" />
              <span>Conheça nossos materiais</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
