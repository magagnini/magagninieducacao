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
import { ObmepPage } from './pages/ObmepPage';
import { ProvaoPaulistaPage } from './pages/ProvaoPaulistaPage';
import { MatematicaAdaptadaPage } from './pages/MatematicaAdaptadaPage';
import { CienciasAdaptadaPage } from './pages/CienciasAdaptadaPage';

type AppPage = 
  | 'magagnini' 
  | 'themis' 
  | 'atheneum' 
  | 'obmep' 
  | 'provao-paulista' 
  | 'matematica' 
  | 'ciencias';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/themis-class' || hash === '#themis-class') return 'themis';
      if (path === '/atheneum-lib' || hash === '#atheneum-lib') return 'atheneum';
      if (path === '/materiais/obmep' || hash === '#obmep') return 'obmep';
      if (path === '/materiais/provao-paulista' || hash === '#provao-paulista') return 'provao-paulista';
      if (path === '/materiais/matematica' || hash === '#matematica-adaptada') return 'matematica';
      if (path === '/materiais/ciencias' || hash === '#ciencias-adaptadas') return 'ciencias';
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
      } else if (path === '/materiais/obmep' || hash === '#obmep') {
        setCurrentPage('obmep');
      } else if (path === '/materiais/provao-paulista' || hash === '#provao-paulista') {
        setCurrentPage('provao-paulista');
      } else if (path === '/materiais/matematica' || hash === '#matematica-adaptada') {
        setCurrentPage('matematica');
      } else if (path === '/materiais/ciencias' || hash === '#ciencias-adaptadas') {
        setCurrentPage('ciencias');
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

  const navigateToPage = (page: AppPage) => {
    setCurrentPage(page);
    let hash = '';
    if (page === 'themis') hash = '#themis-class';
    else if (page === 'atheneum') hash = '#atheneum-lib';
    else if (page === 'obmep') hash = '#obmep';
    else if (page === 'provao-paulista') hash = '#provao-paulista';
    else if (page === 'matematica') hash = '#matematica-adaptada';
    else if (page === 'ciencias') hash = '#ciencias-adaptadas';

    window.history.pushState({}, '', hash || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMagagnini = () => {
    setCurrentPage('magagnini');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render individual product / solution landing pages
  if (currentPage === 'themis') {
    return <ThemisPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'atheneum') {
    return <AtheneumPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'obmep') {
    return <ObmepPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'provao-paulista') {
    return <ProvaoPaulistaPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'matematica') {
    return <MatematicaAdaptadaPage onBackToMagagnini={navigateToMagagnini} />;
  }

  if (currentPage === 'ciencias') {
    return <CienciasAdaptadaPage onBackToMagagnini={navigateToMagagnini} />;
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Produtos onNavigate={(p) => navigateToPage(p)} />
        <Solucoes 
          onOpenThemis={() => navigateToPage('themis')} 
          onOpenAtheneum={() => navigateToPage('atheneum')} 
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
