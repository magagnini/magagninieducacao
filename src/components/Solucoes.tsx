import { produtos } from '../data/produtos';

export function Solucoes() {
  return (
    <section id="solucoes" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Soluções Digitais</h2>
          <p className="mt-4 text-xl text-gray-600 font-medium">
            Tecnologia para resolver problemas reais da rotina escolar.
          </p>
        </div>

        <div className="space-y-24">
          {produtos.solucoesDigitais.map((solucao, idx) => (
            <div key={solucao.id} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-wine-50 text-wine-800 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    {solucao.nome}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{solucao.subtitulo}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solucao.descricao}
                </p>
                
                {solucao.id === 'themis-class' && (
                  <ul className="space-y-3 mb-8">
                    {['Registro de ocorrências', 'Acompanhamento e histórico', 'Comunicação com responsáveis', 'Relatórios e desdobramentos'].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-wine-800 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                <button className="bg-gray-900 hover:bg-wine-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-md">
                  Conhecer o {solucao.nome}
                </button>
              </div>
              
              <div className={`mt-10 lg:mt-0 ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden relative shadow-xl">
                  <img 
                    src={solucao.imagem} 
                    alt={solucao.nome}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100">
                    <span className="font-semibold text-lg mb-2">{solucao.nome} Placeholder</span>
                    <span className="text-sm">{solucao.imagem}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
