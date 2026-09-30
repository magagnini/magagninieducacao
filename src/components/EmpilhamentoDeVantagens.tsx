import React from 'react';
import { CheckCircle2, Sparkles, Gift } from 'lucide-react';

export interface VantagemItem {
  titulo: string;
  descricao?: string;
  icone?: React.ReactNode;
  beneficio?: string;
  badge?: string;
  isBonus?: boolean;
}

export interface EmpilhamentoDeVantagensProps {
  badgeSecao?: string;
  tituloSecao?: string;
  subtituloSecao?: string;
  vantagens: VantagemItem[];
  tema?: 'dark' | 'light';
  children?: React.ReactNode;
  className?: string;
}

export function EmpilhamentoDeVantagens({
  badgeSecao = "O que você recebe",
  tituloSecao = "O que você encontra neste material",
  subtituloSecao,
  vantagens,
  tema = 'light',
  children,
  className = ""
}: EmpilhamentoDeVantagensProps) {
  const isDark = tema === 'dark';

  return (
    <section className={`py-20 ${isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50/70 text-neutral-900'} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {badgeSecao && (
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
              isDark 
                ? 'bg-wine-950/80 border-wine-800/60 text-wine-300' 
                : 'bg-wine-50 border-wine-200 text-wine-800'
            }`}>
              <Sparkles size={14} className={isDark ? 'text-wine-400' : 'text-wine-700'} />
              <span>{badgeSecao}</span>
            </div>
          )}

          {tituloSecao && (
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-neutral-950'}`}>
              {tituloSecao}
            </h2>
          )}

          {subtituloSecao && (
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {subtituloSecao}
            </p>
          )}
        </div>

        {/* Stack Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {vantagens.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                item.isBonus
                  ? isDark
                    ? 'bg-gradient-to-br from-wine-950/40 via-neutral-900 to-neutral-900 border-wine-800/70 shadow-lg'
                    : 'bg-gradient-to-br from-wine-50/60 via-white to-white border-wine-300 shadow-sm'
                  : isDark
                    ? 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-neutral-200/90 hover:border-wine-300 hover:shadow-md'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-base font-bold ${
                item.isBonus
                  ? 'bg-wine-800 text-white shadow-sm'
                  : isDark
                    ? 'bg-neutral-800 text-wine-400 border border-neutral-700'
                    : 'bg-wine-50 text-wine-800 border border-wine-100'
              }`}>
                {item.icone || (item.isBonus ? <Gift size={20} /> : <CheckCircle2 size={20} />)}
              </div>

              {/* Text content */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {item.titulo}
                  </h3>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-wine-800 text-white">
                      {item.badge}
                    </span>
                  )}
                  {item.isBonus && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-neutral-950">
                      Bônus Especial
                    </span>
                  )}
                </div>

                {item.descricao && (
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {item.descricao}
                  </p>
                )}

                {item.beneficio && (
                  <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-wine-700">
                    <CheckCircle2 size={14} className="flex-shrink-0" />
                    <span>{item.beneficio}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional slot for additional custom elements (strictly non-pricing) */}
        {children && <div className="mt-10">{children}</div>}

      </div>
    </section>
  );
}

// Named alias export for OfferStack
export const OfferStack = EmpilhamentoDeVantagens;
