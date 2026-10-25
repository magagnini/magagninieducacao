import { useEffect, useRef, useState } from 'react';
import { PageFlip } from 'page-flip';
import { 
  X, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  BookOpen, 
  Maximize2, 
  Minimize2, 
  ShoppingCart,
  Sparkles
} from 'lucide-react';

interface FlipBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookType?: 'matematica' | 'ciencias';
  title?: string;
  subtitle?: string;
  buyUrl?: string;
}

export function FlipBookModal({
  isOpen,
  onClose,
  bookType = 'matematica',
  title,
  subtitle,
  buyUrl
}: FlipBookModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isCiencias = bookType === 'ciencias';

  const defaultTitle = isCiencias
    ? "Apostila Adaptada de Ciências — Anos Finais"
    : "Apostila Adaptada de Matemática — Anos Finais";

  const defaultSubtitle = isCiencias
    ? "Amostra Pedagógica • 14 Primeiras Páginas"
    : "Amostra Pedagógica • 13 Primeiras Páginas";

  const defaultBuyUrl = isCiencias
    ? "https://pay.cakto.com.br/k4zqo3a_1165309"
    : "https://pay.cakto.com.br/zc6nce7_1123320";

  const finalTitle = title || defaultTitle;
  const finalSubtitle = subtitle || defaultSubtitle;
  const finalBuyUrl = buyUrl || defaultBuyUrl;

  const pages = isCiencias
    ? Array.from({ length: 14 }, (_, i) => `/assets/amostras/livro-3d/APOSTILA ADAPTADA DE CIENCIAS/${i + 1}.png`)
    : Array.from({ length: 13 }, (_, i) => `/assets/amostras/livro-3d/APOSTILA ADAPTADA DE MATEMATICA/${i + 1}.png`);

  const [totalPages, setTotalPages] = useState(pages.length);

  useEffect(() => {
    setTotalPages(pages.length);
  }, [pages.length]);

  useEffect(() => {
    if (!isOpen) {
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch {}
        pageFlipRef.current = null;
      }
      return;
    }

    setIsLoading(true);
    setCurrentPage(0);

    // Timeout to allow modal DOM container to paint with full dimensions
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      try {
        // Calculate dynamic dimensions based on viewport
        const isMobile = window.innerWidth < 768;
        const targetWidth = isMobile ? Math.min(window.innerWidth - 32, 420) : 520;
        const targetHeight = Math.round(targetWidth * 1.414); // A4 proportion

        const pf = new PageFlip(containerRef.current, {
          width: targetWidth,
          height: targetHeight,
          size: 'stretch',
          minWidth: 280,
          maxWidth: 700,
          minHeight: 396,
          maxHeight: 990,
          maxShadowOpacity: 0.5,
          showCover: true,
          mobileScrollSupport: false,
          usePortrait: isMobile,
          startPage: 0,
          drawShadow: true,
          flippingTime: 700,
          useMouseEvents: true,
          swipeDistance: 30
        });

        // Load images
        pf.loadFromImages(pages);

        pf.on('flip', (e: { data: number }) => {
          setCurrentPage(e.data);
        });

        pf.on('init', () => {
          setIsLoading(false);
          setTotalPages(pf.getPageCount() || pages.length);
        });

        pageFlipRef.current = pf;
      } catch (err) {
        console.error('Failed to initialize PageFlip:', err);
        setIsLoading(false);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch {}
        pageFlipRef.current = null;
      }
    };
  }, [isOpen, bookType]);

  // Keyboard navigation & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        pageFlipRef.current?.flipNext();
      } else if (e.key === 'ArrowLeft') {
        pageFlipRef.current?.flipPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNext = () => pageFlipRef.current?.flipNext();
  const handlePrev = () => pageFlipRef.current?.flipPrev();
  const handleFirst = () => pageFlipRef.current?.turnToPage(0);
  const handleLast = () => pageFlipRef.current?.turnToPage(pages.length - 1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#070204]/95 backdrop-blur-2xl flex flex-col justify-between select-none animate-fadeIn text-white">
      
      {/* 1. TOP BAR */}
      <header className="w-full px-4 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between gap-4 z-20 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white transition-all text-xs font-semibold cursor-pointer border border-white/10"
            title="Fechar degustação e voltar ao portal"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Voltar ao site</span>
          </button>

          <div className="hidden md:flex items-center gap-3 border-l border-white/10 pl-4">
            <div className="w-9 h-9 rounded-xl bg-wine-900/60 border border-wine-500/40 text-wine-300 flex items-center justify-center font-bold">
              <BookOpen size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white tracking-tight">{finalTitle}</h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-wine-900/80 text-wine-200 px-2 py-0.5 rounded-full border border-wine-500/40">
                  Degustação 3D
                </span>
              </div>
              <p className="text-xs text-neutral-400">{finalSubtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {finalBuyUrl && (
            <a
              href={finalBuyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-wine-800 to-wine-700 hover:from-wine-700 hover:to-wine-600 shadow-3d-wine hover:shadow-3d-wine-hover transition-all whitespace-nowrap"
            >
              <ShoppingCart size={15} />
              <span>Garantir Apostila Completa</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white transition-all cursor-pointer"
            title="Fechar"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* 2. MAIN 3D FLIPBOOK VIEWPORT */}
      <main className="relative flex-grow flex items-center justify-center px-4 py-4 overflow-hidden">
        {/* Glow Effects behind book */}
        <div className="absolute w-[600px] h-[600px] bg-wine-800/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-wine-500/30 border-t-wine-500 rounded-full animate-spin mb-4" />
            <p className="text-sm text-neutral-300 font-medium">Carregando livro 3D interativo...</p>
          </div>
        )}

        {/* Floating Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`absolute left-4 sm:left-8 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md shadow-2xl transition-all cursor-pointer group ${
            currentPage === 0 ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'hover:scale-105 active:scale-95'
          }`}
          title="Página Anterior (Seta Esquerda)"
        >
          <ChevronLeft size={26} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Floating Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage >= pages.length - 1}
          className={`absolute right-4 sm:right-8 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md shadow-2xl transition-all cursor-pointer group ${
            currentPage >= pages.length - 1 ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'hover:scale-105 active:scale-95'
          }`}
          title="Próxima Página (Seta Direita)"
        >
          <ChevronRight size={26} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* PageFlip Container wrapper */}
        <div className="relative flex items-center justify-center max-w-full max-h-[82vh]">
          {/* Subtle desk ambient shadow */}
          <div className="absolute -bottom-6 left-12 right-12 h-8 bg-black/70 blur-xl rounded-full pointer-events-none" />

          {/* Actual element where PageFlip attaches */}
          <div 
            ref={containerRef} 
            className="shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] rounded-lg overflow-visible"
          />
        </div>
      </main>

      {/* 3. BOTTOM CONTROL BAR */}
      <footer className="w-full px-4 sm:px-8 py-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 z-20 bg-black/60 backdrop-blur-md">
        
        {/* Left: Quick Instructions */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles size={14} className="text-wine-400" />
          <span>Arraste a ponta da página ou use as setas do teclado para folhear.</span>
        </div>

        {/* Center: Page Controls */}
        <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
          <button
            onClick={handleFirst}
            disabled={currentPage === 0}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Primeira Página"
          >
            <ChevronsLeft size={16} />
          </button>

          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Página Anterior"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page Counter Badge */}
          <div className="px-4 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono font-bold text-neutral-200 min-w-[120px] text-center">
            {currentPage === 0 ? (
              <span>Capa • Pág. 1 de {totalPages}</span>
            ) : currentPage >= totalPages - 1 ? (
              <span>Pág. {totalPages} de {totalPages}</span>
            ) : (
              <span>Págs. {currentPage + 1} - {Math.min(currentPage + 2, totalPages)} de {totalPages}</span>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage >= pages.length - 1}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Próxima Página"
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={handleLast}
            disabled={currentPage >= pages.length - 1}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Última Página da Amostra"
          >
            <ChevronsRight size={16} />
          </button>
        </div>

        {/* Right: Fullscreen Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer border border-white/10"
            title="Tela Cheia"
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            <span>{isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}</span>
          </button>
        </div>

      </footer>
    </div>
  );
}
