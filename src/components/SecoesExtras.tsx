export function Numeros() {
  const stats = [
    { label: 'Atividades por apostila', value: '100+' },
    { label: 'Atividades nos apostilões', value: '500+' },
    { label: 'Soluções digitais', value: '2' },
    { label: 'Perfis atendidos', value: 'Alunos • Professores • Gestores' }
  ];

  return (
    <section className="py-20 bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-wine-200 font-medium text-sm sm:text-base uppercase tracking-wide mt-2">
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
    { nome: 'Alunos', desc: 'Preparação com questões reais, resoluções em vídeo, olimpíadas e oportunidades acadêmicas.' },
    { nome: 'Professores', desc: 'Materiais adaptados e recursos pedagógicos para enriquecer a prática em sala de aula.' },
    { nome: 'Gestores', desc: 'Soluções digitais inteligentes para organização de ocorrências e gestão de bibliotecas.' },
    { nome: 'Escolas', desc: 'Uma parceria completa que une conteúdo editorial de excelência e tecnologia de ponta.' }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-wine-800 text-xs font-bold uppercase tracking-widest block mb-3">
            Públicos Atendidos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Soluções pensadas para quem vive a educação
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Apoiamos cada elo da comunidade escolar com recursos adequados às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {publicos.map((pub, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200/80 hover:border-wine-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center font-bold text-sm mb-4 border border-wine-100">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.nome}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA({ onConhecerSobre }: { onConhecerSobre?: () => void }) {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 via-wine-950 to-neutral-950 text-white relative overflow-hidden border-t border-wine-900/60">
      <div className="absolute inset-0 bg-gradient-to-br from-wine-900/30 via-transparent to-black pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-wine-400 text-xs font-bold uppercase tracking-widest block mb-4">
          Magagnini Educação
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Conhecimento para ensinar.<br className="hidden sm:block" />
          <span className="text-rose-300"> Oportunidades para aprender.</span><br className="hidden sm:block" />
          <span className="text-amber-200"> Tecnologia para transformar.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          A Magagnini Educação reúne materiais educacionais, conteúdos gratuitos e soluções digitais para aproximar conhecimento, prática pedagógica e tecnologia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#sobre" 
            onClick={(e) => {
              if (onConhecerSobre) {
                e.preventDefault();
                onConhecerSobre();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-neutral-950 font-bold px-8 py-4 rounded-2xl text-base shadow-xl hover:bg-neutral-100 hover:scale-105 active:scale-100 transition-all cursor-pointer"
          >
            <span>Conheça a Magagnini Educação</span>
          </a>
          <a
            href="#perfis"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-wine-800/80 hover:bg-wine-700 text-white font-bold px-8 py-4 rounded-2xl text-base border border-wine-500/40 shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            <span>Escolha seu Perfil</span>
          </a>
        </div>
      </div>
    </section>
  );
}
