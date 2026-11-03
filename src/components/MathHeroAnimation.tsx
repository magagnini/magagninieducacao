import { useEffect, useRef, useState } from 'react';
import { Sparkles, GraduationCap, Award } from 'lucide-react';
import { PerspectiveBook } from './PerspectiveBook';

interface MathHeroAnimationProps {
  onOpenFlipBook?: () => void;
  coverImage?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  text?: string;
  type: 'math' | 'geometry' | 'confetti' | 'spark';
  size: number;
  alpha: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
}

interface LaserBeam {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  speed: number;
  length: number;
  width: number;
  color: string;
}

export function MathHeroAnimation({
  onOpenFlipBook,
  coverImage = "/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png",
  title = "Apostilão de Matemática — Anos Finais",
  subtitle = "Mais de 500 atividades adaptadas e estruturadas",
  badge = "+500 atividades"
}: MathHeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tilt tracking
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Math symbols and formulas
    const mathFormulas = [
      'f(x) = √x² + b',
      'y = 0²',
      'a² = 1.y1',
      'x = 40',
      'π ≈ 3.14',
      'Δ = b² - 4ac',
      '∫ f(x) dx',
      '∑ x_i',
      'a² + b² = c²',
      'E = mc²',
      'f(x) = (4²/x + 1/b)²',
      'lim x→∞',
      'Ω',
      'λ',
      'σ',
      'θ',
      '∇ × B',
      'dx/dt'
    ];

    // Initialize particles
    const particleCount = 36;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isMath = Math.random() < 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // depth
        type: isMath ? 'math' : Math.random() < 0.5 ? 'geometry' : 'confetti',
        text: isMath ? mathFormulas[Math.floor(Math.random() * mathFormulas.length)] : undefined,
        size: isMath ? Math.floor(Math.random() * 6 + 11) : Math.floor(Math.random() * 6 + 4),
        alpha: Math.random() * 0.55 + 0.15,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() * -0.5) - 0.15, // float upwards slightly
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015
      });
    }

    // Initialize Laser Beams
    const beams: LaserBeam[] = [];
    const createBeam = (): LaserBeam => {
      const angle = (Math.random() * 0.6 - 0.3) + (Math.random() < 0.5 ? 0.35 : -0.35); // diagonal angles
      const startX = Math.random() < 0.5 ? -100 : width + 100;
      const startY = Math.random() * height;
      const targetLength = Math.random() * 260 + 180;
      
      return {
        x1: startX,
        y1: startY,
        x2: startX + Math.cos(angle) * targetLength * (startX < 0 ? 1 : -1),
        y2: startY + Math.sin(angle) * targetLength,
        progress: 0,
        speed: Math.random() * 0.018 + 0.008,
        length: targetLength,
        width: Math.random() * 1.8 + 0.8,
        color: Math.random() < 0.7 ? '#e11d48' : '#9B111E'
      };
    };

    for (let i = 0; i < 4; i++) {
      const b = createBeam();
      b.progress = Math.random(); // spread initially
      beams.push(b);
    }

    // Animation Loop
    let time = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(container);

    const render = () => {
      if (!isVisible || document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Laser Beams in Background
      beams.forEach((beam, idx) => {
        beam.progress += beam.speed;
        if (beam.progress > 1) {
          beams[idx] = createBeam();
          return;
        }

        const headX = beam.x1 + (beam.x2 - beam.x1) * beam.progress;
        const headY = beam.y1 + (beam.y2 - beam.y1) * beam.progress;
        const tailLength = beam.length * 0.45;
        const angle = Math.atan2(beam.y2 - beam.y1, beam.x2 - beam.x1);
        const tailX = headX - Math.cos(angle) * tailLength;
        const tailY = headY - Math.sin(angle) * tailLength;

        // Beam glow
        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, 'rgba(155, 17, 30, 0)');
        grad.addColorStop(0.7, beam.color);
        grad.addColorStop(1, '#ffffff');

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = beam.width;
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // Tip spark
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(headX, headY, beam.width * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 2. Draw Floating Math Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        // Wrap around edges
        if (p.x < -60) p.x = width + 60;
        if (p.x > width + 60) p.x = -60;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.alpha * p.z;

        if (p.type === 'math' && p.text) {
          ctx.font = `${p.size * p.z}px "KaTeX_Math", "Times New Roman", serif, italic`;
          ctx.fillStyle = '#f87171'; // soft rose
          ctx.shadowColor = '#9B111E';
          ctx.shadowBlur = 8;
          ctx.fillText(p.text, 0, 0);
        } else if (p.type === 'geometry') {
          // Geometry Triangle
          const s = p.size * p.z * 1.5;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.866, s * 0.5);
          ctx.lineTo(-s * 0.866, s * 0.5);
          ctx.closePath();
          ctx.stroke();
          // Right-angle marker
          ctx.strokeRect(-s * 0.2, s * 0.3, s * 0.2, s * 0.2);
        } else {
          // Floating paper confetti / math sheet fragment
          const w = p.size * p.z * 1.4;
          const h = p.size * p.z * 1.8;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.fillRect(-w / 2, -h / 2, w, h);
          ctx.strokeStyle = 'rgba(225, 29, 72, 0.4)';
          ctx.strokeRect(-w / 2, -h / 2, w, h);
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Handle Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 18, y: -y * 18 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#180308]/90 via-[#0e0204]/90 to-black/95 border border-wine-500/30 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(155,17,30,0.45)] overflow-hidden transition-all duration-300 group"
    >
      {/* 1. Canvas Background with Mathematical Particles and Laser Beams */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Ambient Red/Wine Light Pulse */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-wine-600/25 rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 right-0 w-60 h-60 bg-wine-800/20 rounded-full blur-[80px] pointer-events-none" />

      {/* 3. Card Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-wine-500" />
          </span>
          <span className="text-xs font-sans font-bold tracking-widest text-white/90 uppercase">
            Showcase 3D Interativo
          </span>
        </div>
        <span className="text-[11px] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-wine-800/80 text-wine-200 border border-wine-500/40">
          Experiência Viva
        </span>
      </div>

      {/* 4. Interactive Floating 3D Book */}
      <div 
        onClick={onOpenFlipBook}
        className={`relative z-10 py-6 flex flex-col items-center justify-center [perspective:1400px] ${
          onOpenFlipBook ? 'cursor-pointer' : ''
        }`}
        title={onOpenFlipBook ? "Clique para folhear a amostra digital em 3D" : undefined}
      >
        {/* Soft Dynamic Desk Shadow that breathes with float */}
        <div 
          className="absolute bottom-4 w-48 h-6 bg-black/80 rounded-full blur-xl pointer-events-none transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(0.85) translateY(4px)' : 'scale(1)',
            opacity: isHovered ? 0.6 : 0.85
          }}
        />

        {/* 3D Motion Book Container */}
        <div
          className="relative transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(${isHovered ? '-8px' : '0px'})`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Subtle gloss reflection overlay across cover */}
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

        {/* Interactive CTA to flip book */}
        {onOpenFlipBook && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenFlipBook();
            }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-wine-100 bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 hover:from-wine-800 hover:to-wine-700 border border-wine-500/50 shadow-lg hover:shadow-wine-900/50 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
          >
            <Sparkles size={13} className="text-amber-300 animate-pulse" />
            <span>Folhear Amostra Interativa (3D)</span>
          </button>
        )}
      </div>

      {/* 5. Floating Feature Badges */}
      <div className="relative z-10 pt-2 grid grid-cols-2 gap-3">
        <div className="bg-black/60 border border-white/10 rounded-2xl p-3 backdrop-blur-md hover:border-wine-500/40 transition-colors">
          <div className="flex items-center gap-2 text-wine-300 font-bold text-xs mb-1">
            <GraduationCap size={14} />
            <span>Acadêmico</span>
          </div>
          <p className="text-[11px] text-neutral-300 leading-tight">
            OBMEP & Provão Paulista
          </p>
        </div>

        <div className="bg-black/60 border border-white/10 rounded-2xl p-3 backdrop-blur-md hover:border-wine-500/40 transition-colors">
          <div className="flex items-center gap-2 text-wine-300 font-bold text-xs mb-1">
            <Award size={14} />
            <span>Inclusão</span>
          </div>
          <p className="text-[11px] text-neutral-300 leading-tight">
            Atividades Adaptadas
          </p>
        </div>
      </div>
    </div>
  );
}
