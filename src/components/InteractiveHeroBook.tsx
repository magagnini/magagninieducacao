import { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { PerspectiveBook } from './PerspectiveBook';

export type HeroBookTheme = 'wine' | 'obmep' | 'matematica' | 'ciencias';

interface InteractiveHeroBookProps {
  coverImage: string;
  title: string;
  subtitle: string;
  badge: string;
  flipBookLabel: string;
  onOpenFlipBook?: () => void;
  theme?: HeroBookTheme;
  extraBadge?: {
    icon?: string;
    text: string;
  };
}

export function InteractiveHeroBook({
  coverImage,
  title,
  subtitle,
  badge,
  flipBookLabel,
  onOpenFlipBook,
  theme = 'wine',
  extraBadge
}: InteractiveHeroBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 18,
      y: -y * 18
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Theme styling helpers
  const getGlowClasses = () => {
    switch (theme) {
      case 'obmep':
        return 'bg-gradient-to-tr from-amber-500/25 via-emerald-500/30 to-amber-300/20';
      case 'matematica':
        return 'bg-gradient-to-tr from-cyan-500/35 via-blue-600/30 to-amber-400/25';
      case 'ciencias':
        return 'bg-gradient-to-tr from-teal-500/35 via-emerald-500/30 to-cyan-400/25';
      case 'wine':
      default:
        return 'bg-gradient-to-tr from-wine-800/40 via-wine-600/25 to-rose-500/20';
    }
  };

  const getExtraBadgeClasses = () => {
    switch (theme) {
      case 'obmep':
        return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 border border-yellow-200/80 shadow-amber-900/30';
      case 'matematica':
        return 'bg-gradient-to-r from-blue-600 via-cyan-600 to-amber-500 text-white border border-cyan-300/60 shadow-blue-950/40';
      case 'ciencias':
        return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 text-white border border-teal-300/60 shadow-emerald-950/40';
      case 'wine':
      default:
        return 'bg-gradient-to-r from-wine-800 to-rose-700 text-white border border-rose-400/40 shadow-wine-950/40';
    }
  };

  const getShadowColor = () => {
    switch (theme) {
      case 'obmep':
        return 'bg-emerald-950/90';
      case 'matematica':
        return 'bg-slate-950/90';
      case 'ciencias':
        return 'bg-[#021814]/90';
      case 'wine':
      default:
        return 'bg-black/90';
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case 'obmep':
        return 'text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 border border-yellow-200/90 shadow-amber-900/30';
      case 'matematica':
        return 'text-white bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 hover:from-blue-600 hover:to-cyan-500 border border-cyan-400/50 shadow-cyan-950/40';
      case 'ciencias':
        return 'text-white bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 hover:from-emerald-600 hover:to-teal-500 border border-teal-400/50 shadow-teal-950/40';
      case 'wine':
      default:
        return 'text-white bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 hover:from-wine-800 hover:to-wine-700 border border-wine-500/50 shadow-wine-950/40';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenFlipBook}
      className={`relative group flex flex-col items-center select-none [perspective:1400px] ${
        onOpenFlipBook ? 'cursor-pointer' : ''
      }`}
      title={onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
    >
      {/* Ambient Radial Backlight Glow */}
      <div
        className={`absolute -inset-6 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${getGlowClasses()}`}
      />

      {/* Mascot / Extra Tag Badge if available */}
      {extraBadge && (
        <div
          className={`absolute -top-3 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-lg transition-transform duration-300 ${
            isHovered ? '-translate-y-1 scale-105' : 'translate-y-0'
          } ${getExtraBadgeClasses()}`}
        >
          {extraBadge.icon && <span>{extraBadge.icon}</span>}
          <span>{extraBadge.text}</span>
        </div>
      )}

      {/* 3D Tilting Book Body */}
      <div
        className="relative transition-transform duration-300 ease-out will-change-transform pt-2"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(${isHovered ? '-10px' : '0px'})`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Soft Dynamic Desk Shadow below book */}
        <div
          className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full blur-xl pointer-events-none transition-all duration-500 ${getShadowColor()}`}
          style={{
            transform: `translateX(-50%) scale(${isHovered ? 0.85 : 1})`,
            opacity: isHovered ? 0.6 : 0.85
          }}
        />

        {/* Gloss highlight overlay */}
        <div className="absolute inset-0 z-20 rounded-lg pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <PerspectiveBook
          size="lg"
          coverImage={coverImage}
          title={title}
          subtitle={subtitle}
          badge={badge}
          isDestaque={true}
        />
      </div>

      {/* Button: Folhear Amostra Interativa */}
      {onOpenFlipBook && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenFlipBook();
          }}
          className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 ${getButtonClasses()}`}
        >
          <Sparkles
            size={14}
            className={theme === 'obmep' ? 'text-amber-950 fill-amber-950' : 'text-amber-300 fill-amber-300'}
          />
          <span>{flipBookLabel}</span>
        </button>
      )}
    </div>
  );
}
