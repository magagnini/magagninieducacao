import React, { useState } from "react";
import { cn } from "../lib/utils";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

const sizeMap = {
  sm: { 
    width: "160px", 
    height: "216px",
    depth: "18px",
    spineTranslation: "142px" 
  },
  default: { 
    width: "196px", 
    height: "264px",
    depth: "22px",
    spineTranslation: "174px" 
  },
  lg: { 
    width: "240px", 
    height: "324px",
    depth: "26px",
    spineTranslation: "214px" 
  },
};

export interface PerspectiveBookProps {
  size?: "sm" | "default" | "lg";
  className?: string;
  coverImage?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  isDestaque?: boolean;
  children?: React.ReactNode;
  textured?: boolean;
}

export function PerspectiveBook({
  size = "default",
  className = "",
  coverImage,
  title,
  subtitle,
  badge,
  isDestaque = false,
  children,
  textured = true,
}: PerspectiveBookProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const selectedSize = sizeMap[size];

  return (
    <div className="flex items-center justify-center p-4 py-8 group select-none">
      {/* 3D Container with Perspective */}
      <div className="relative [perspective:1000px] w-min h-min">
        {/* Soft centered ambient ground shadow */}
        <div 
          className="absolute -bottom-4 left-4 right-4 h-5 bg-black/30 blur-lg rounded-full pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:bg-black/40"
        />

        {/* 3D Rotating Book Wrapper */}
        <div
          style={{
            width: selectedSize.width,
            height: selectedSize.height,
            transformStyle: "preserve-3d",
          }}
          className="relative transition-transform duration-500 ease-out [transform:rotateY(-6deg)_rotateX(2deg)] group-hover:[transform:rotateY(-18deg)_rotateX(4deg)_scale(1.03)]"
        >
          {/* Back Cover - aligned without shadow bleed */}
          <div
            className="absolute inset-0 bg-neutral-900 rounded-r-[4px] rounded-l-[5px] pointer-events-none"
            style={{
              transform: "translateZ(-8px)",
            }}
          />

          {/* Book Page Edges (Right Thickness - Cleanly nested) */}
          <div
            className="absolute right-0 top-[3px] bottom-[3px] w-[10px] bg-gradient-to-r from-neutral-300 via-neutral-100 to-[#ded6cb] rounded-r-[3px] border-y border-neutral-300 pointer-events-none"
            style={{
              transform: "translateZ(-4px)",
              backgroundImage: "repeating-linear-gradient(to right, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Front Cover (Front 3D Face) */}
          <div
            className={cn(
              "relative overflow-hidden size-full flex flex-col rounded-r-[5px] rounded-l-[5px] border border-black/20 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.35),0_6px_12px_-4px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4),inset_3px_0_4px_rgba(0,0,0,0.25)]",
              isDestaque 
                ? "bg-gradient-to-br from-wine-900 via-wine-800 to-black text-white" 
                : "bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white",
              className
            )}
            style={{
              transform: "translateZ(2px)",
            }}
          >
            {/* Custom or Provided Image Cover */}
            {coverImage && !imageError ? (
              <div className="relative w-full h-full">
                <img
                  src={coverImage}
                  alt={title}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={cn(
                    "w-full h-full object-cover object-center transition-opacity duration-300",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
                
                {/* Fallback while loading */}
                {!imageLoaded && (
                  <EditorialFallbackCover 
                    title={title} 
                    subtitle={subtitle} 
                    badge={badge} 
                    isDestaque={isDestaque} 
                  />
                )}
              </div>
            ) : children ? (
              children
            ) : (
              /* High-end Brand Editorial Fallback Cover */
              <EditorialFallbackCover 
                title={title} 
                subtitle={subtitle} 
                badge={badge} 
                isDestaque={isDestaque} 
              />
            )}

            {/* Spine Fold / Crease Lighting Effect */}
            <div
              className="absolute left-0 top-0 h-full pointer-events-none"
              style={{
                width: "12%",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.25) 20%, rgba(0,0,0,0.2) 40%, rgba(255,255,255,0.15) 60%, transparent 100%)",
              }}
            />

            {/* Gloss / Sheen Highlight diagonal */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-white/[0.18] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
            />

            {/* Subtle Texture overlay */}
            {textured && (
              <div
                className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Editorial Cover Design for Magagnini Educação (used when image is placeholder or loading)
 */
function EditorialFallbackCover({
  title,
  subtitle,
  badge,
  isDestaque,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  isDestaque?: boolean;
}) {
  return (
    <div className={cn(
      "w-full h-full flex flex-col justify-between p-4 relative overflow-hidden text-left",
      isDestaque
        ? "bg-gradient-to-br from-wine-800 via-wine-900 to-black text-white"
        : "bg-gradient-to-br from-neutral-900 via-[#161616] to-black text-white"
    )}>
      {/* Background Graphic Lines / Geometric watermark */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute right-2 top-2 opacity-15 pointer-events-none">
        <GraduationCap size={44} />
      </div>

      {/* Top Header */}
      <div className="relative z-10 pt-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-wine-500" />
          <span className="text-[9px] font-bold tracking-widest uppercase text-white/75 font-sans">
            Magagnini Educação
          </span>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-wine-500/60 via-white/20 to-transparent" />
      </div>

      {/* Center Title & Content */}
      <div className="relative z-10 my-auto py-2">
        <div className="inline-flex items-center gap-1 text-[9px] font-semibold text-wine-300 uppercase tracking-wider mb-1">
          <BookOpen className="w-2.5 h-2.5" />
          <span>Material Pedagógico</span>
        </div>
        <h3 className="font-extrabold text-[14px] leading-tight text-white line-clamp-3 drop-shadow-sm font-sans">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[10px] text-neutral-300 mt-1 line-clamp-2 leading-tight">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Footer & Badge */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
        {badge ? (
          <span className={cn(
            "text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide shadow-sm flex items-center gap-1",
            isDestaque 
              ? "bg-white text-wine-900" 
              : "bg-wine-700 text-white"
          )}>
            {isDestaque && <Sparkles className="w-2.5 h-2.5" />}
            {badge}
          </span>
        ) : (
          <span className="text-[8px] text-white/50 uppercase tracking-wider">Edição Oficial</span>
        )}
        <span className="text-[8px] font-semibold text-white/60 tracking-wider">2026</span>
      </div>
    </div>
  );
}
