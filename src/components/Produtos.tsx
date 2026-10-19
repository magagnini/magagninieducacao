import { produtos, type Produto } from '../data/produtos';
import { PerspectiveBook } from './PerspectiveBook';
import { Sparkles, ArrowRight, CheckCircle2, Calculator, Microscope, GraduationCap, Users } from 'lucide-react';

interface ProdutosProps {
  onNavigate?: (page: 'provao-paulista' | 'obmep' | 'matematica' | 'ciencias' | 'themis' | 'atheneum') => void;
}

function ProductCard({ 
  produto, 
  actionText,
  bookSize = "default",
  onSelect
}: { 
  produto: Produto; 
  actionText: string;
  bookSize?: "sm" | "default" | "lg";
  onSelect?: () => void;
}) {
  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full group ${
      produto.destaque 
        ? 'border-wine-200 shadow-lg hover:shadow-2xl hover:border-wine-400 bg-gradient-to-b from-wine-50/40 via-white to-white' 
        : 'border-gray-200 shadow-sm hover:shadow-xl hover:border-wine-300'
    }`}>
      {/* 3D Book Showcase Area */}
      <div className="relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[290px]">
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

        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {produto.descricao}
        </p>

        <div className="mb-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle2 size={15} className="text-wine-700 flex-shrink-0" />
          <span>Atividades estruturadas e prontas para uso</span>
        </div>
        
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
      </div>
    </div>
  );
}

export function Produtos({ onNavigate }: ProdutosProps) {
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
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-wine-800" />
              <h3 className="text-xl font-bold text-gray-900">
                Apostilões — Anos Finais (+500 atividades)
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {produtos.atividadesAdaptadas.filter(p => p.destaque).map((prod) => (
                <ProductCard 
                  key={prod.id} 
                  produto={prod} 
                  actionText="Conhecer apostilão completo" 
                  bookSize="default"
                  onSelect={() => handleSelectProduct(prod.id)}
                />
              ))}
            </div>
          </div>

          {/* Grid de Apostilas por Ano Escolar */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-900" />
              <h3 className="text-xl font-bold text-gray-900">
                Apostilas por Ano Escolar (~100 atividades cada)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {produtos.atividadesAdaptadas.filter(p => !p.destaque).map((prod) => (
                <ProductCard 
                  key={prod.id} 
                  produto={prod} 
                  actionText="Conhecer material" 
                  bookSize="sm"
                  onSelect={() => handleSelectProduct(prod.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
