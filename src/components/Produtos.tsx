import { produtos } from '../data/produtos';

function ProductCard({ produto, actionText }: { produto: any, actionText: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full group">
      <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden flex items-center justify-center p-6">
        <img 
          src={produto.imagem} 
          alt={produto.nome}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-100 p-4 text-center">
          <span className="text-sm font-medium mb-1">Placeholder: {produto.nome}</span>
          <span className="text-xs break-all">{produto.imagem}</span>
        </div>
        
        {produto.detalhe && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
            produto.destaque ? 'bg-wine-800 text-white shadow-md' : 'bg-gray-900 text-white'
          }`}>
            {produto.detalhe}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h3>
        {produto.subtitulo && (
          <h4 className="text-sm font-semibold text-wine-800 mb-2 uppercase tracking-wider">{produto.subtitulo}</h4>
        )}
        <p className="text-gray-600 text-sm mb-6 flex-grow">{produto.descricao}</p>
        
        <button className="w-full py-3 px-4 bg-gray-50 hover:bg-wine-800 hover:text-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-wine-800 transition-colors">
          {actionText}
        </button>
      </div>
    </div>
  );
}

export function Produtos() {
  return (
    <div id="produtos" className="bg-white">
      {/* Apostilas Acadêmicas */}
      <section id="apostilas" className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Apostilas Acadêmicas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Materiais voltados à preparação acadêmica e ao desenvolvimento de habilidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {produtos.apostilasAcademicas.map((prod) => (
              <ProductCard key={prod.id} produto={prod} actionText="Conhecer apostila" />
            ))}
          </div>
        </div>
      </section>

      {/* Atividades Adaptadas */}
      <section id="atividades" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Atividades Adaptadas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Materiais desenvolvidos para apoiar o trabalho pedagógico com atividades estruturadas e adaptadas.
            </p>
          </div>
          
          {/* Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {produtos.atividadesAdaptadas.filter(p => p.destaque).map((prod) => (
              <ProductCard key={prod.id} produto={prod} actionText="Conhecer apostilão" />
            ))}
          </div>

          {/* Grid de Anos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produtos.atividadesAdaptadas.filter(p => !p.destaque).map((prod) => (
              <ProductCard key={prod.id} produto={prod} actionText="Conhecer material" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
