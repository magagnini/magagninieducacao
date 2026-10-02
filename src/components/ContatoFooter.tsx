import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() && !formData.mensagem.trim()) {
      alert('Por favor, preencha seu nome e sua mensagem para iniciar o contato.');
      return;
    }

    const linhas = [
      'Olá, Vinícius! Vim pelo site da Magagnini Educação.',
      '',
      `*Nome:* ${formData.nome.trim() || 'Não informado'}`,
      `*Telefone:* ${formData.telefone.trim() || 'Não informado'}`,
      `*E-mail:* ${formData.email.trim() || 'Não informado'}`,
      `*Assunto:* ${formData.assunto.trim() || 'Contato Geral'}`,
      '',
      '*Mensagem:*',
      formData.mensagem.trim() || 'Olá! Gostaria de conversar com você sobre as soluções da Magagnini Educação.'
    ];

    const texto = linhas.join('\n');
    const url = `https://wa.me/5511998713683?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors bg-white" 
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone (WhatsApp)</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors bg-white" 
                    placeholder="(00) 00000-0000" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors bg-white" 
                  placeholder="seu@email.com" 
                />
              </div>
              
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <input 
                  type="text" 
                  id="assunto" 
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors bg-white" 
                  placeholder="Como podemos ajudar?" 
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem"
                  required
                  rows={4} 
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-wine-800 focus:border-wine-800 transition-colors resize-none bg-white" 
                  placeholder="Escreva sua mensagem..."
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-wine-800 text-white font-bold py-4 rounded-xl hover:bg-wine-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Enviar mensagem via WhatsApp</span>
                <Send size={16} />
              </button>
              <p className="text-xs text-center text-gray-500">
                Ao enviar, você será direcionado para iniciar a conversa no WhatsApp oficial Magagnini Educação: <strong>(11) 99871-3683</strong>.
              </p>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700">
            <a 
              href="https://wa.me/5511998713683" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-wine-800 transition-colors"
            >
              <span className="w-10 h-10 bg-wine-50 text-wine-800 rounded-full flex items-center justify-center mr-3 font-bold border border-wine-200">
                W
              </span>
              <span className="font-semibold">(11) 99871-3683</span>
            </a>
            <a 
              href="mailto:contato@magagninieducacao.com.br" 
              className="flex items-center hover:text-wine-800 transition-colors"
            >
              <span className="w-10 h-10 bg-wine-50 text-wine-800 rounded-full flex items-center justify-center mr-3 font-bold border border-wine-200">
                @
              </span>
              <span className="font-semibold">contato@magagninieducacao.com.br</span>
            </a>
            <div className="flex items-center">
              <span className="w-10 h-10 bg-wine-50 text-wine-800 rounded-full flex items-center justify-center mr-3 font-bold border border-wine-200">
                I
              </span>
              <span className="font-semibold">@magagnini.educacao</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/assets/logo/magagnini-mista-preta.png" 
              alt="Magagnini Educação" 
              className="h-12 w-auto object-contain mb-4 rounded-lg"
              onError={(e) => {
                e.currentTarget.src = '/assets/logo/MISTA PRETA - 1920X800.png';
              }}
            />
            <p className="text-gray-400 font-medium text-sm">
              Materiais didáticos de excelência e soluções digitais para a rotina escolar.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-wine-400">Navegação</h4>
            <ul className="space-y-2 text-center md:text-left text-sm">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#apostilas" className="text-gray-400 hover:text-white transition-colors">Apostilas Acadêmicas</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-white transition-colors">Atividades Adaptadas</a></li>
              <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Soluções Digitais</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-wine-400">Atendimento</h4>
            <a 
              href="https://wa.me/5511998713683" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors mb-2 text-sm flex items-center gap-2"
            >
              <span>WhatsApp: (11) 99871-3683</span>
            </a>
            <p className="text-gray-400 mb-2 text-sm">contato@magagninieducacao.com.br</p>
            <p className="text-gray-400 text-sm">São Paulo - SP</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Magagnini Educação — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
