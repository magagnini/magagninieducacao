import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { type Produto } from '../data/produtos';
import { PerspectiveBook } from './PerspectiveBook';

interface ApostilasCarouselProps {
  disciplina: 'matematica' | 'ciencias';
  tituloSecao?: string;
  produtos: Produto[];
  actionText?: string;
  onSelectProduct?: (id: string) => void;
  onOpenFlipBook?: (type: 'matematica' | 'ciencias') => void;
}

export function ApostilasCarousel({
  disciplina,
  tituloSecao,
  produtos,
  actionText = "Conhecer material",
  onSelectProduct,
  onOpenFlipBook
}: ApostilasCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const isMatematica = disciplina === 'matematica';
  const total = produtos.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Detect horizontal swipe with clear threshold and angle
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const renderCardContent = (prod: Produto) => {
    return (
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-wine-300 transition-all duration-300 flex flex-col h-full group">
        {/* 3D Book Showcase Area */}
        <div 
          onClick={() => {
            if (onOpenFlipBook) {
              onOpenFlipBook(isMatematica ? 'matematica' : 'ciencias');
            }
          }}
          className="relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[250px] cursor-pointer"
          title={`Clique para folhear a amostra 3D de ${isMatematica ? 'Matemática' : 'Ciências'}`}
        >
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
              backgroundSize: "16px 16px"
            }}
          />

          <PerspectiveBook
            size="sm"
            coverImage={prod.imagem}
            title={prod.nome}
            subtitle={prod.descricao}
            badge={prod.detalhe}
            isDestaque={false}
          />

          {/* Discreet hover flip hint */}
          <div className="absolute bottom-2.5 right-3.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-neutral-900/90 text-white shadow-md group-hover:bg-wine-800 transition-colors">
            <Sparkles size={11} className="text-wine-300" />
            <span>Folhear 3D</span>
          </div>
        </div>

        {/* Product Details Area */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-neutral-950 group-hover:text-wine-900 transition-colors">
              {prod.nome}
            </h3>
          </div>

          {prod.subtitulo && (
            <h4 className="text-[11px] font-bold text-wine-800 mb-2 uppercase tracking-wider">
              {prod.subtitulo}
            </h4>
          )}

          <p className="text-neutral-600 text-xs mb-5 min-h-[44px] flex-grow leading-relaxed">
            {prod.descricao}
          </p>

          <div className="mb-5 pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
            <CheckCircle2 size={14} className="text-wine-700 flex-shrink-0" />
            <span>Atividades estruturadas e prontas para uso</span>
          </div>
          
          {/* Card Action Buttons (with uniform baseline alignment) */}
          <div className="mt-auto flex flex-col gap-2">
            <button 
              type="button"
              onClick={() => onSelectProduct?.(prod.id)}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-neutral-900 hover:bg-wine-800 text-white shadow-sm hover:shadow-md hover:gap-2.5 transition-all duration-200 cursor-pointer"
            >
              <span>{actionText}</span>
              <ArrowRight size={14} className="transition-transform" />
            </button>

            {onOpenFlipBook && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenFlipBook(isMatematica ? 'matematica' : 'ciencias');
                }}
                className="w-full py-2.5 px-3 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors cursor-pointer"
              >
                <Sparkles size={12} className="text-wine-800" />
                <span>
                  {isMatematica ? 'Folhear 13 Páginas (3D)' : 'Folhear 14 Páginas (3D)'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Optional Discipline Section Title if provided */}
      {tituloSecao && (
        <div className="flex items-center gap-3 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
          <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
            {tituloSecao}
          </h3>
        </div>
      )}

      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW: Standard 4-column grid (hidden on mobile)     */}
      {/* ============================================================== */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {produtos.map((prod) => (
          <div key={prod.id} className="h-full">
            {renderCardContent(prod)}
          </div>
        ))}
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE VIEW: Interactive Swipeable Carousel (lg:hidden)    */}
      {/* ============================================================== */}
      <div 
        className="block lg:hidden focus:outline-none"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={`Carrossel de apostilas de ${isMatematica ? 'Matemática' : 'Ciências'}`}
      >
        {/* Explanatory Header as requested */}
        <div className="mb-4 text-center sm:text-left">
          <p className="text-sm font-bold text-neutral-900 sm:text-base">
            Explore as apostilas do 6º ao 9º ano
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Use as setas ou deslize para o lado para navegar entre as séries.
          </p>
        </div>

        {/* Carousel Viewport (Strictly overflow-hidden to prevent document horizontal scroll) */}
        <div 
          className="relative overflow-hidden w-full touch-pan-y rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {produtos.map((prod) => (
              <div 
                key={prod.id}
                className="w-full flex-shrink-0 px-1 sm:px-2 box-border max-w-sm sm:max-w-md mx-auto"
              >
                {renderCardContent(prod)}
              </div>
            ))}
          </div>
        </div>

        {/* Intuitive Controls Bar: Previous Arrow | Position Indicator | Next Arrow */}
        <div className="mt-5 flex items-center justify-between max-w-sm sm:max-w-md mx-auto px-2">
          
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Apostila anterior"
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-400'
                : 'border-neutral-300 bg-white hover:bg-wine-50 text-neutral-800 hover:text-wine-800 hover:border-wine-300 shadow-sm active:scale-95'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Position Indicator & Dots */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-bold text-neutral-800 tracking-wide">
              {currentIndex + 1} de {total}
            </span>
            
            {/* Visual Step Dots */}
            <div className="flex items-center gap-1.5" role="tablist">
              {produtos.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para ${p.ano || `${idx + 6}º Ano`}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex 
                      ? 'w-6 bg-wine-800' 
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === total - 1}
            aria-label="Próxima apostila"
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
              currentIndex === total - 1
                ? 'opacity-30 cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-400'
                : 'border-neutral-300 bg-white hover:bg-wine-50 text-neutral-800 hover:text-wine-800 hover:border-wine-300 shadow-sm active:scale-95'
            }`}
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </div>
  );
}
