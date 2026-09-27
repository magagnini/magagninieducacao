import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Categorias } from './components/Categorias';
import { Produtos } from './components/Produtos';
import { Solucoes } from './components/Solucoes';
import { Numeros, ParaQuem, CTA } from './components/SecoesExtras';
import { Contato, Footer } from './components/ContatoFooter';
import { ThemisPage } from './pages/ThemisPage';
import { AtheneumPage } from './pages/AtheneumPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'magagnini' | 'themis' | 'atheneum'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/themis-class' || hash === '#themis-class') {
        return 'themis';
      }
      if (path === '/atheneum-lib' || hash === '#atheneum-lib') {
        return 'atheneum';
      }
    }
    return 'magagnini';
  });

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/themis-class' || hash === '#themis-class') {
        setCurrentPage('themis');
      } else if (path === '/atheneum-lib' || hash === '#atheneum-lib') {
        setCurrentPage('atheneum');
      } else {
        setCurrentPage('magagnini');
      }
    };

    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);
    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
    };
  }, []);

  const navigateToThemis = () => {
    setCurrentPage('themis');
    window.history.pushState({}, '', '#themis-class');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAtheneum = () => {
    setCurrentPage('atheneum');
    window.history.pushState({}, '', '#atheneum-lib');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMagagnini = () => {
    setCurrentPage('magagnini');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'themis') {
    return <ThemisPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'atheneum') {
    return <AtheneumPage onBackToMagagnini={navigateToMagagnini} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Produtos />
        <Solucoes 
          onOpenThemis={navigateToThemis} 
          onOpenAtheneum={navigateToAtheneum} 
        />
        <Numeros />
        <ParaQuem />
        <CTA />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
