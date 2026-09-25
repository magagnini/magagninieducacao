export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Educação, conhecimento e tecnologia.
            </h2>
            <div className="mt-6 text-gray-600 space-y-6 text-lg">
              <p>
                A <strong className="text-wine-800 font-semibold">Magagnini Educação</strong> desenvolve materiais educacionais e soluções digitais voltadas para diferentes necessidades do ambiente escolar.
              </p>
              <p>
                Nossa proposta reúne produção acadêmica, materiais de apoio, atividades adaptadas e tecnologia para ajudar professores, gestores e instituições de ensino.
              </p>
              <p>
                O objetivo é transformar conhecimento em materiais práticos e soluções que possam ser utilizados no cotidiano educacional.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative shadow-lg">
              <img 
                src="/assets/institucional/sobre.jpg" 
                alt="Sobre a Magagnini Educação" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gradient-to-br from-gray-50 to-gray-200">
                <span className="font-medium text-lg">Imagem Institucional</span>
                <span className="text-sm">/assets/institucional/sobre.jpg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
