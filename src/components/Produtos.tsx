import { produtos, type Produto } from '../data/produtos';
import { PerspectiveBook } from './PerspectiveBook';
import { ApostilasCarousel } from './ApostilasCarousel';
import { Sparkles, ArrowRight, CheckCircle2, Calculator, Microscope, GraduationCap, Users } from 'lucide-react';

interface ProdutosProps {
  onNavigate?: (page: 'provao-paulista' | 'obmep' | 'matematica' | 'ciencias' | 'themis' | 'atheneum') => void;
  onOpenFlipBook?: (type: 'matematica' | 'ciencias') => void;
}

function ProductCard({ 
  produto, 
  actionText,
  bookSize = "default",
  onSelect,
  onOpenFlipBook
}: { 
  produto: Produto; 
  actionText: string;
  bookSize?: "sm" | "default" | "lg";
  onSelect?: () => void;
  onOpenFlipBook?: (type: 'matematica' | 'ciencias') => void;
}) {
  const isMatematica = produto.id.startsWith('matematica');
  const isCiencias = produto.id.startsWith('ciencias');

  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full group ${
      produto.destaque 
        ? 'border-wine-200 shadow-lg hover:shadow-2xl hover:border-wine-400 bg-gradient-to-b from-wine-50/40 via-white to-white' 
        : 'border-gray-200 shadow-sm hover:shadow-xl hover:border-wine-300'
    }`}>
      {/* 3D Book Showcase Area */}
      <div 
        onClick={() => {
          if (isMatematica && onOpenFlipBook) {
            onOpenFlipBook('matematica');
          } else if (isCiencias && onOpenFlipBook) {
            onOpenFlipBook('ciencias');
          }
        }}
        className={`relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[290px] ${
          (isMatematica || isCiencias) ? 'cursor-pointer' : ''
        }`}
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
          size={bookSize}
          coverImage={produto.imagem}
          title={produto.nome}
          subtitle={produto.descricao}
          badge={produto.detalhe}
          isDestaque={produto.destaque}
        />
        
        {produto.destaque && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-wine-800 text-white shadow-md">
            <Sparkles size={12} className="text-wine-200" />
            <span>Edição Especial</span>
          </div>
        )}
      </div>
      
      {/* Product Details Area */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-wine-900 transition-colors">
            {produto.nome}
          </h3>
        </div>

        {produto.subtitulo && (
          <h4 className="text-xs font-bold text-wine-800 mb-2 uppercase tracking-wider">
            {produto.subtitulo}
          </h4>
        )}

        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed min-h-[44px]">
          {produto.descricao}
        </p>

        <div className="mb-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle2 size={15} className="text-wine-700 flex-shrink-0" />
          <span>Atividades estruturadas e prontas para uso</span>
        </div>
        
        <div className="mt-auto flex flex-col gap-2.5">
          <button 
            onClick={onSelect}
            className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
              produto.destaque
                ? 'bg-wine-800 hover:bg-wine-900 text-white shadow-md hover:shadow-lg hover:gap-3'
                : 'bg-gray-900 hover:bg-wine-800 text-white shadow-sm hover:shadow-md hover:gap-3'
            }`}
          >
            <span>{actionText}</span>
            <ArrowRight size={16} className="transition-transform" />
          </button>

          {isMatematica && onOpenFlipBook && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFlipBook('matematica');
              }}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
            >
              <Sparkles size={13} className="text-wine-800" />
              <span>Folhear 13 Páginas (3D)</span>
            </button>
          )}

          {isCiencias && onOpenFlipBook && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFlipBook('ciencias');
              }}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
            >
              <Sparkles size={13} className="text-wine-800" />
              <span>Folhear 14 Páginas (3D)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Produtos({ onNavigate, onOpenFlipBook }: ProdutosProps) {
  const handleSelectProduct = (prodId: string) => {
    if (!onNavigate) return;
    if (prodId === 'obmep-vol-1') {
      onNavigate('obmep');
    } else if (prodId === 'provao-paulista') {
      onNavigate('provao-paulista');
    } else if (prodId.startsWith('matematica')) {
      onNavigate('matematica');
    } else if (prodId.startsWith('ciencias')) {
      onNavigate('ciencias');
    }
  };

  return (
    <div id="produtos" className="bg-white">
      
      {/* 1. Materiais para Estudantes */}
      <section id="apostilas" className="py-24 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
              <GraduationCap size={15} />
              <span>Para Estudantes</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              Materiais para Estudantes
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Apostilas preparatórias com resoluções comentadas e suporte multimídia para olimpíadas e vestibulares seriados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {produtos.apostilasAcademicas.map((prod) => (
              <ProductCard 
                key={prod.id} 
                produto={prod} 
                actionText="Conhecer apostila completa" 
                bookSize="default"
                onSelect={() => handleSelectProduct(prod.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Materiais para Professores */}
      <section id="atividades" className="py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-50 text-wine-800 text-xs font-bold uppercase tracking-wider mb-4 border border-wine-200">
              <Users size={15} />
              <span>Para Professores</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              Materiais para Professores
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Apostilas adaptadas de Matemática e Ciências e os volumes unificados (Apostilões) para o Ensino Fundamental.
            </p>
          </div>

          {/* Atalhos para as Landing Pages de Matemática e Ciências */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div 
              onClick={() => onNavigate?.('matematica')}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-wine-400 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold">
                  <Calculator size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 group-hover:text-wine-800 transition-colors">
                    Matemática Adaptada
                  </h4>
                  <p className="text-xs text-neutral-500">6º ao 9º ano + Apostilão Anos Finais</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-wine-800 group-hover:translate-x-1 transition-transform" />
            </div>

            <div 
              onClick={() => onNavigate?.('ciencias')}
              className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-wine-400 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold">
                  <Microscope size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 group-hover:text-wine-800 transition-colors">
                    Ciências Adaptadas
                  </h4>
                  <p className="text-xs text-neutral-500">6º ao 9º ano + Apostilão Anos Finais</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-wine-800 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Apostilões em Destaque */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-wine-800" />
                <h3 className="text-xl font-bold text-gray-900">
                  Apostilões — Anos Finais (+500 atividades)
                </h3>
              </div>
            </div>

            {/* BOTÕES ENTRE A ESCRITA E A CAIXA DOS APOSTILÕES - ALINHADOS COM OS CARDS */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {onOpenFlipBook && (
                <>
                  <button
                    type="button"
                    onClick={() => onOpenFlipBook('matematica')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <Sparkles size={15} className="text-wine-300 animate-pulse" />
                    <span>Folhear Amostra de Matemática (13 Páginas 3D)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenFlipBook('ciencias')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <Sparkles size={15} className="text-wine-300 animate-pulse" />
                    <span>Folhear Amostra de Ciências (14 Páginas 3D)</span>
                  </button>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {produtos.atividadesAdaptadas.filter(p => p.destaque).map((prod) => (
                <ProductCard 
                  key={prod.id} 
                  produto={prod} 
                  actionText="Conhecer apostilão completo" 
                  bookSize="default"
                  onSelect={() => handleSelectProduct(prod.id)}
                  onOpenFlipBook={onOpenFlipBook}
                />
              ))}
            </div>
          </div>

          {/* Seções de Apostilas por Ano Escolar (Carrossel no Mobile / Grade no Desktop) */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-900" />
              <h3 className="text-xl font-bold text-gray-900">
                Apostilas por Ano Escolar (~100 atividades cada)
              </h3>
            </div>

            {/* 1. Matemática Adaptada (6º ao 9º Ano) */}
            <div>
              <div className="hidden lg:flex items-center gap-2 mb-4 text-sm font-bold text-neutral-800">
                <Calculator size={18} className="text-wine-800" />
                <span>Matemática Adaptada (6º ao 9º Ano)</span>
              </div>
              <ApostilasCarousel
                disciplina="matematica"
                produtos={produtos.matematicaAdaptada.filter(p => !p.destaque)}
                actionText="Conhecer material"
                onSelectProduct={handleSelectProduct}
                onOpenFlipBook={onOpenFlipBook}
              />
            </div>

            {/* 2. Ciências Adaptadas (6º ao 9º Ano) */}
            <div className="pt-6 border-t border-neutral-200/60 lg:border-none lg:pt-0">
              <div className="hidden lg:flex items-center gap-2 mb-4 text-sm font-bold text-neutral-800">
                <Microscope size={18} className="text-wine-800" />
                <span>Ciências Adaptadas (6º ao 9º Ano)</span>
              </div>
              <ApostilasCarousel
                disciplina="ciencias"
                produtos={produtos.cienciasAdaptadas.filter(p => !p.destaque)}
                actionText="Conhecer material"
                onSelectProduct={handleSelectProduct}
                onOpenFlipBook={onOpenFlipBook}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
