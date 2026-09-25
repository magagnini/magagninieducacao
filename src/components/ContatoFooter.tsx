export function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Entre em contato</h2>
            <p className="mt-4 text-lg text-gray-600">
              Quer conhecer nossos materiais ou nossas soluções digitais? Entre em contato com a Magagnini Educação.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" id="nome" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input type="tel" id="telefone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <input type="text" id="assunto" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors" placeholder="Como podemos ajudar?" />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea id="mensagem" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors resize-none" placeholder="Escreva sua mensagem..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-wine-800 text-white font-bold py-4 rounded-xl hover:bg-wine-900 transition-colors shadow-md">
                Enviar mensagem
              </button>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 font-bold text-wine-800">W</span>
              <span>[WhatsApp Placeholder]</span>
            </div>
            <div className="flex items-center">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 font-bold text-wine-800">I</span>
              <span>[Instagram Placeholder]</span>
            </div>
            <div className="flex items-center">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 font-bold text-wine-800">@</span>
              <span>[E-mail Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/assets/logo/logo-branca.png" 
              alt="Magagnini Educação" 
              className="h-12 mb-4"
              onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MT0dPIEJSQU5DQTwvdGV4dD48L3N2Zz4=';
              }}
            />
            <p className="text-gray-400 font-medium">Magagnini Educação</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-wine-400">Navegação</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#apostilas" className="text-gray-400 hover:text-white transition-colors">Apostilas Acadêmicas</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-white transition-colors">Atividades Adaptadas</a></li>
              <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Soluções Digitais</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-wine-400">Contato</h4>
            <p className="text-gray-400 mb-2">[WhatsApp Placeholder]</p>
            <p className="text-gray-400 mb-2">[E-mail Placeholder]</p>
            <p className="text-gray-400">[Instagram Placeholder]</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Magagnini Educação — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
