import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Educação que</span>
              <span className="block text-wine-800 mt-1">transforma conteúdo em resultado.</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Materiais educacionais, atividades adaptadas e soluções digitais desenvolvidas para tornar o trabalho educacional mais organizado, acessível e eficiente.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a
                href="#apostilas"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-wine-800 hover:bg-wine-900 transition-colors md:py-4 md:text-lg"
              >
                Conheça nossos materiais
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-wine-800 text-base font-medium rounded-full text-wine-800 bg-transparent hover:bg-wine-50 transition-colors md:py-4 md:text-lg"
              >
                Conheça nossas soluções
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md bg-white border border-gray-100 overflow-hidden aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Espaço reservado para composição visual */}
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-wine-100 text-wine-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Educação + Matemática + Tecnologia</h3>
                <p className="text-sm text-gray-500 mt-2">Produção de materiais estruturados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
