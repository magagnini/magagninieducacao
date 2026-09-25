import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Apostilas Acadêmicas', href: '#apostilas' },
    { name: 'Atividades Adaptadas', href: '#atividades' },
    { name: 'Soluções Digitais', href: '#solucoes' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center">
              <img
                src="/assets/logo/logo.png"
                alt="Magagnini Educação"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5YjExMWUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MT0dPIEFRVUk8L3RleHQ+PC9zdmc+';
                }}
              />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-wine-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#produtos"
              className="bg-wine-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-wine-900 transition-colors shadow-md hover:shadow-lg"
            >
              Conheça nossos materiais
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-wine-800 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-wine-800 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#produtos"
            className="block w-full text-center mt-4 bg-wine-800 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-wine-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Conheça nossos materiais
          </a>
        </div>
      )}
    </header>
  );
}
