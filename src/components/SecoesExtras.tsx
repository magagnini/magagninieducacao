export function Numeros() {
  const stats = [
    { label: 'Atividades por apostila', value: '100+' },
    { label: 'Atividades nos apostilões', value: '500+' },
    { label: 'Soluções digitais', value: '2' },
    { label: 'Uma proposta integrada', value: 'Educação + Tecnologia' }
  ];

  return (
    <section className="py-20 bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-wine-200 font-medium text-lg uppercase tracking-wide mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParaQuem() {
  const publicos = [
    { nome: 'Professores', desc: 'Materiais para apoiar o planejamento e desenvolvimento das aulas.' },
    { nome: 'Escolas', desc: 'Soluções e materiais para apoiar a rotina educacional.' },
    { nome: 'Gestores', desc: 'Tecnologia para organização e acompanhamento das informações escolares.' },
    { nome: 'Estudantes', desc: 'Materiais para estudo, prática e desenvolvimento de habilidades.' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Para quem é?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {publicos.map((pub, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-wine-200 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pub.nome}</h3>
              <p className="text-gray-600">{pub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24 bg-wine-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wine-700 to-wine-900"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Conhecimento para ensinar. <br className="hidden md:block"/> Tecnologia para transformar.
        </h2>
        <p className="text-xl md:text-2xl text-wine-100 mb-10 font-medium">
          A Magagnini Educação reúne materiais educacionais e soluções digitais para aproximar conhecimento, prática pedagógica e tecnologia.
        </p>
        <a 
          href="#produtos" 
          className="inline-block bg-white text-wine-900 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-gray-50 hover:scale-105 transition-all"
        >
          Conheça nossos produtos
        </a>
      </div>
    </section>
  );
}
