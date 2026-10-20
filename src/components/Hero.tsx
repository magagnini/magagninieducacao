import { ArrowRight, BookOpen, Laptop, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PerspectiveBook } from './PerspectiveBook';

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-[#090204]"
    >
      {/* Dynamic Multi-Layer Gradient & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep ambient wine radial glow 1 */}
        <div 
          className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full opacity-45 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(155, 17, 30, 0.6) 0%, rgba(132, 21, 32, 0.2) 50%, transparent 75%)'
          }}
        />

        {/* Deep wine radial glow 2 (center-right behind book) */}
        <div 
          className="absolute top-1/4 right-0 w-[650px] h-[650px] rounded-full opacity-50 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(175, 20, 35, 0.5) 0%, rgba(155, 17, 30, 0.25) 45%, transparent 70%)'
          }}
        />

        {/* Velvet bottom gradient transitioning smoothly */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/10 to-transparent opacity-95" />

        {/* High-tech geometric matrix dots */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Subtle diagonal light streaks */}
        <div className="absolute -top-40 right-1/4 w-[1px] h-[900px] bg-gradient-to-b from-transparent via-wine-500/20 to-transparent rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-wine-950/90 via-black to-wine-950/80 border border-wine-500/35 backdrop-blur-xl shadow-lg mb-6 group cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-wine-500" />
              </span>
              <span className="text-xs font-sans font-bold tracking-[0.18em] uppercase text-wine-200">
                Portal Educacional Integrado
              </span>
              <Sparkles size={13} className="text-amber-300" />
            </div>

            {/* H1 Main Title with Editorial Typography */}
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-white">
              <span className="block font-serif font-black tracking-tight text-white drop-shadow-md">
                Educação que
              </span>
              <span className="block mt-2 font-serif font-bold italic bg-gradient-to-r from-rose-200 via-wine-400 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
                transforma conhecimento em oportunidades.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base text-neutral-300 sm:text-lg md:text-xl lg:text-lg xl:text-xl font-sans font-normal leading-relaxed max-w-2xl">
              A Magagnini Educação reúne materiais didáticos, conteúdos gratuitos e soluções digitais para apoiar estudantes, professores e gestores escolares.
            </p>

            {/* Micro Highlights Pill */}
            <div className="mt-6 flex flex-wrap gap-4 items-center text-xs font-sans text-neutral-300 sm:justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-wine-400" />
                <span>Alunos: Provão Paulista & OBMEP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-wine-400" />
                <span>Professores: Atividades Adaptadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-wine-400" />
                <span>Gestores: Themis Class & Atheneum</span>
              </div>
            </div>

            {/* 3D Action Buttons */}
            <div className="mt-9 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              
              {/* Primary 3D Button */}
              <a
                href="#perfis"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-sans font-bold text-white bg-gradient-to-r from-wine-800 via-wine-700 to-wine-900 border border-wine-500/50 shadow-3d-wine hover:shadow-3d-wine-hover hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group overflow-hidden"
              >
                {/* Shiny gloss beam */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <BookOpen size={19} className="text-wine-200 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Conheça nossos conteúdos</span>
                <ArrowRight size={17} className="text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary 3D Glassmorphic Button */}
              <a
                href="#solucoes"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-sans font-bold text-white backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-wine-400/60 shadow-3d-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group"
              >
                <Laptop size={19} className="text-neutral-300 group-hover:text-wine-300 transition-colors" />
                <span className="tracking-wide">Explore nossas soluções</span>
                <ArrowRight size={17} className="text-white/70 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition with 3D Book Showcase */}
          <div className="mt-14 lg:mt-0 lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Pedestal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-wine-800/40 via-wine-600/20 to-black/60 rounded-3xl blur-2xl transform scale-95" />

            {/* Composition Card Container */}
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* Header inside showcase */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-wine-500" />
                  <span className="text-xs font-sans font-bold tracking-widest text-white/90 uppercase">
                    Portal Magagnini
                  </span>
                </div>
                <span className="text-[11px] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-wine-800/80 text-wine-200 border border-wine-500/30">
                  Alunos • Professores • Gestores
                </span>
              </div>

              {/* 3D Perspective Book inside Hero com rotação cinematográfica de entrada */}
              <div className="py-2 flex items-center justify-center [perspective:1200px]">
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    rotateY: -220, 
                    rotateX: 18, 
                    scale: 0.65, 
                    y: 40 
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0, 
                    rotateX: 0, 
                    scale: 1, 
                    y: 0 
                  }}
                  transition={{ 
                    duration: 1.35, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <PerspectiveBook
                    size="lg"
                    coverImage="/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png"
                    title="Apostilão de Matemática — Anos Finais"
                    subtitle="Mais de 500 atividades adaptadas e estruturadas"
                    badge="+500 atividades"
                    isDestaque={true}
                  />
                </motion.div>
              </div>

              {/* Floating Floating Badges around the book */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <div className="bg-black/60 border border-white/10 rounded-2xl p-3 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-wine-300 font-bold text-xs mb-1">
                    <GraduationCap size={14} />
                    <span>Acadêmico</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-tight">
                    OBMEP & Provão Paulista
                  </p>
                </div>

                <div className="bg-black/60 border border-white/10 rounded-2xl p-3 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-rose-300 font-bold text-xs mb-1">
                    <Laptop size={14} />
                    <span>Tecnologia</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-tight">
                    Themis Class & Atheneum
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-[11px] font-sans text-neutral-400">
                  Conhecimento para ensinar • Oportunidades para aprender • Tecnologia para transformar
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
