import { produtos } from '../data/produtos';
import { PerspectiveBook } from './PerspectiveBook';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProdutoItem {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  detalhe?: string;
  subtitulo?: string;
  destaque?: boolean;
}

function ProductCard({ 
  produto, 
  actionText,
  bookSize = "default" 
}: { 
  produto: ProdutoItem; 
  actionText: string;
  bookSize?: "sm" | "default" | "lg";
}) {
  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full group ${
      produto.destaque 
        ? 'border-wine-200 shadow-lg hover:shadow-2xl hover:border-wine-400 bg-gradient-to-b from-wine-50/40 via-white to-white' 
        : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200'
    }`}>
      {/* 3D Book Showcase Area */}
      <div className="relative pt-6 pb-2 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent rounded-t-3xl min-h-[290px]">
        {/* Subtle grid accent background */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}
        />

        {/* 3D Perspective Book */}
        <PerspectiveBook
          size={bookSize}
          coverImage={produto.imagem}
          title={produto.nome}
          subtitle={produto.descricao}
          badge={produto.detalhe}
          isDestaque={produto.destaque}
        />
        
        {/* Floating badge for Apostilões or Top Sellers */}
        {produto.destaque && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-wine-800 text-white shadow-md">
            <Sparkles size={12} className="text-wine-200" />
            <span>Produto Especial</span>
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

        {/* Features Preview */}
        <div className="mb-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle2 size={15} className="text-wine-700 flex-shrink-0" />
          <span>Atividades estruturadas e prontas para uso</span>
        </div>
        
        {/* Call to action button */}
        <button className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
          produto.destaque
            ? 'bg-wine-800 hover:bg-wine-900 text-white shadow-md hover:shadow-lg hover:gap-3'
            : 'bg-gray-900 hover:bg-wine-800 text-white shadow-sm hover:shadow-md hover:gap-3'
        }`}>
          <span>{actionText}</span>
          <ArrowRight size={16} className="transition-transform" />
        </button>
      </div>
    </div>
  );
}

export function Produtos() {
  return (
    <div id="produtos" className="bg-white">
      {/* Apostilas Acadêmicas */}
      <section id="apostilas" className="py-24 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-sm font-bold tracking-widest uppercase mb-3 inline-block">
              Preparação e Excelência
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              Apostilas Acadêmicas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Materiais voltados à preparação acadêmica e ao desenvolvimento de habilidades essenciais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {produtos.apostilasAcademicas.map((prod) => (
              <ProductCard 
                key={prod.id} 
                produto={prod} 
                actionText="Conhecer apostila" 
                bookSize="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Atividades Adaptadas */}
      <section id="atividades" className="py-24 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-wine-800 text-sm font-bold tracking-widest uppercase mb-3 inline-block">
              Inclusão e Pedagogia
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              Atividades Adaptadas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Materiais desenvolvidos para apoiar o trabalho pedagógico com atividades estruturadas e adaptadas para diferentes níveis.
            </p>
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
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
