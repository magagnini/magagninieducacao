import { useEffect, useRef } from 'react';

export type MathCanvasTheme = 'wine' | 'obmep';

interface MathCanvasBackgroundProps {
  theme?: MathCanvasTheme;
  className?: string;
  particleDensity?: 'high' | 'medium' | 'subtle';
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  text?: string;
  type: 'math' | 'polyhedron' | 'spark';
  size: number;
  alpha: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  polyhedronIndex?: number;
  rot3D?: { rx: number; ry: number; rz: number; speedRx: number; speedRy: number; speedRz: number };
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

interface PolyhedronDefinition {
  vertices: [number, number, number][];
  edges: [number, number][];
}

// 3D Polyhedra Definitions
const CUBE: PolyhedronDefinition = {
  vertices: [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
  ],
  edges: [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7]
  ]
};

const OCTAHEDRON: PolyhedronDefinition = {
  vertices: [
    [0, 1.3, 0], [0, -1.3, 0], [1.3, 0, 0],
    [-1.3, 0, 0], [0, 0, 1.3], [0, 0, -1.3]
  ],
  edges: [
    [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 4], [4, 3], [3, 5], [5, 2]
  ]
};

const PHI = (1 + Math.sqrt(5)) / 2;
const ICOSAHEDRON: PolyhedronDefinition = {
  vertices: [
    [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
    [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
    [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]
  ],
  edges: [
    [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
    [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
    [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
    [4, 9], [9, 8], [8, 6], [6, 2], [2, 4],
    [5, 4], [5, 9], [1, 9], [1, 8], [7, 8],
    [7, 6], [10, 6], [10, 2], [11, 2], [11, 4]
  ]
};

const POLYHEDRA = [OCTAHEDRON, CUBE, ICOSAHEDRON];

export function MathCanvasBackground({
  theme = 'wine',
  className = '',
  particleDensity = 'medium',
  interactive = true
}: MathCanvasBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

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

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Formulas per theme
    const formulasWine = [
      'f(x) = √x² + b',
      'y = 0²',
      'a² = 1.y₁',
      'x = 40',
      'π ≈ 3.14',
      'Δ = b² - 4ac',
      '∫ f(x) dx',
      '∑ xᵢ',
      'a² + b² = c²',
      'E = mc²',
      'lim x→∞',
      'Ω',
      'λ',
      'σ',
      'θ',
      'dx/dt',
      'log₂(x) = y',
      'e^(iπ) + 1 = 0',
      'sin²θ + cos²θ = 1'
    ];

    const formulasObmep = [
      'π ≈ 3.1415',
      '%',
      'Δ',
      '∑',
      'a² + b² = c²',
      'φ ≈ 1.618',
      '180°',
      '2026',
      '√2',
      'n!',
      'C(n,k)',
      'x / y',
      '22',
      'P(A∩B)',
      'a/sin(A) = 2R',
      'mdc(a,b)',
      'f: X → Y',
      'λ',
      'θ'
    ];

    const activeFormulas = theme === 'obmep' ? formulasObmep : formulasWine;

    // Density config
    const countMultiplier = particleDensity === 'high' ? 1.4 : particleDensity === 'subtle' ? 0.6 : 1.0;
    const baseCount = theme === 'obmep' ? 42 : 46;
    const particleCount = Math.floor(baseCount * countMultiplier);

    // Initialize particles
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isMath = Math.random() < (theme === 'obmep' ? 0.45 : 0.6);
      const isPoly = !isMath && (theme === 'obmep' ? Math.random() < 0.65 : Math.random() < 0.35);

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.75 + 0.25,
        type: isMath ? 'math' : isPoly ? 'polyhedron' : 'spark',
        text: isMath ? activeFormulas[Math.floor(Math.random() * activeFormulas.length)] : undefined,
        size: isMath
          ? Math.floor(Math.random() * 7 + 11)
          : isPoly
          ? Math.floor(Math.random() * 14 + 16)
          : Math.floor(Math.random() * 3 + 2),
        alpha: Math.random() * 0.5 + 0.15,
        speedX: (Math.random() - 0.5) * (theme === 'obmep' ? 0.35 : 0.45),
        speedY: (Math.random() * -0.45) - 0.1, // gently float up
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        polyhedronIndex: Math.floor(Math.random() * POLYHEDRA.length),
        rot3D: {
          rx: Math.random() * Math.PI * 2,
          ry: Math.random() * Math.PI * 2,
          rz: Math.random() * Math.PI * 2,
          speedRx: (Math.random() - 0.5) * 0.018,
          speedRy: (Math.random() - 0.5) * 0.018,
          speedRz: (Math.random() - 0.5) * 0.012
        }
      });
    }

    // Laser Beams
    const beamCount = theme === 'obmep' ? 3 : 5;
    const beams: LaserBeam[] = [];

    const createBeam = (): LaserBeam => {
      const angle = (Math.random() * 0.5 - 0.25) + (Math.random() < 0.5 ? 0.4 : -0.4);
      const startX = Math.random() < 0.5 ? -150 : width + 150;
      const startY = Math.random() * height;
      const targetLength = Math.random() * 340 + 220;

      let color = '#e11d48';
      if (theme === 'obmep') {
        const goldTones = ['#fbbf24', '#f59e0b', '#fef08a', '#10b981'];
        color = goldTones[Math.floor(Math.random() * goldTones.length)];
      } else {
        const wineTones = ['#e11d48', '#9B111E', '#ff4d6d', '#f43f5e'];
        color = wineTones[Math.floor(Math.random() * wineTones.length)];
      }

      return {
        x1: startX,
        y1: startY,
        x2: startX + Math.cos(angle) * targetLength * (startX < 0 ? 1 : -1),
        y2: startY + Math.sin(angle) * targetLength,
        progress: 0,
        speed: Math.random() * 0.015 + 0.007,
        length: targetLength,
        width: Math.random() * 1.8 + 0.8,
        color
      };
    };

    for (let i = 0; i < beamCount; i++) {
      const b = createBeam();
      b.progress = Math.random();
      beams.push(b);
    }

    // Intersection Observer to stop rendering when not visible
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });

    observer.observe(container);

    // 3D Polyhedron rendering helper
    const drawPolyhedron = (
      poly: PolyhedronDefinition,
      scale: number,
      rx: number,
      ry: number,
      rz: number,
      color: string,
      alpha: number
    ) => {
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);

      const projected: [number, number, number][] = [];

      for (let i = 0; i < poly.vertices.length; i++) {
        let [x, y, z] = poly.vertices[i];

        // Rotate X
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;

        // Rotate Y
        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;

        // Rotate Z
        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = x2 * sinZ + y1 * cosZ;

        // Project
        const distance = 4.2;
        const fov = 1 / (distance - z2 * 0.4);
        projected.push([x3 * scale * fov * 3, y3 * scale * fov * 3, z2]);
      }

      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = alpha;
      ctx.beginPath();

      for (let i = 0; i < poly.edges.length; i++) {
        const [p1, p2] = poly.edges[i];
        ctx.moveTo(projected[p1][0], projected[p1][1]);
        ctx.lineTo(projected[p2][0], projected[p2][1]);
      }
      ctx.stroke();

      // Draw shiny corner vertices
      ctx.fillStyle = theme === 'obmep' ? '#fef08a' : '#ffffff';
      for (let i = 0; i < projected.length; i++) {
        ctx.beginPath();
        ctx.arc(projected[i][0], projected[i][1], 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // Main animation loop
    const render = () => {
      if (!isVisible || document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Laser Beams
      beams.forEach((beam, idx) => {
        beam.progress += beam.speed;
        if (beam.progress > 1) {
          beams[idx] = createBeam();
          return;
        }

        const headX = beam.x1 + (beam.x2 - beam.x1) * beam.progress;
        const headY = beam.y1 + (beam.y2 - beam.y1) * beam.progress;
        const tailLength = beam.length * 0.42;
        const angle = Math.atan2(beam.y2 - beam.y1, beam.x2 - beam.x1);
        const tailX = headX - Math.cos(angle) * tailLength;
        const tailY = headY - Math.sin(angle) * tailLength;

        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.75, beam.color);
        grad.addColorStop(1, '#ffffff');

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = beam.width;
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // Tip spark
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(headX, headY, beam.width * 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 2. Draw Floating Particles (Formulas, 3D Polyhedra, Sparks)
      particles.forEach((p) => {
        // Mouse avoidance/attraction
        if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 1) {
            const force = (140 - dist) / 140;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.rot3D) {
          p.rot3D.rx += p.rot3D.speedRx;
          p.rot3D.ry += p.rot3D.speedRy;
          p.rot3D.rz += p.rot3D.speedRz;
        }

        // Wrap around borders
        if (p.x < -80) p.x = width + 80;
        if (p.x > width + 80) p.x = -80;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.type === 'math' && p.text) {
          ctx.rotate(p.rotation);
          ctx.globalAlpha = p.alpha * p.z;
          ctx.font = `${p.size * p.z}px "KaTeX_Math", "Times New Roman", serif, italic`;

          if (theme === 'obmep') {
            ctx.fillStyle = '#fbbf24'; // Olympic amber gold
            ctx.shadowColor = '#d97706';
          } else {
            ctx.fillStyle = '#f87171'; // Soft rose wine
            ctx.shadowColor = '#9B111E';
          }

          ctx.shadowBlur = 8;
          ctx.fillText(p.text, 0, 0);
        } else if (p.type === 'polyhedron' && p.rot3D && p.polyhedronIndex !== undefined) {
          const poly = POLYHEDRA[p.polyhedronIndex % POLYHEDRA.length];
          const color = theme === 'obmep' ? 'rgba(251, 191, 36, 0.85)' : 'rgba(255, 255, 255, 0.55)';
          drawPolyhedron(
            poly,
            p.size * p.z,
            p.rot3D.rx,
            p.rot3D.ry,
            p.rot3D.rz,
            color,
            p.alpha * p.z
          );
        } else {
          // Floating Spark / Stardust
          ctx.globalAlpha = p.alpha * p.z;
          ctx.fillStyle = theme === 'obmep' ? '#fbbf24' : '#ffffff';
          ctx.shadowColor = theme === 'obmep' ? '#f59e0b' : '#e11d48';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * p.z * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (interactive && container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      observer.disconnect();
    };
  }, [theme, particleDensity, interactive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
