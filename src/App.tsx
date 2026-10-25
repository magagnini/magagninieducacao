import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PerfilSelector } from './components/PerfilSelector';
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
import { AlunosPage } from './pages/AlunosPage';
import { ProfessoresPage } from './pages/ProfessoresPage';
import { GestoresPage } from './pages/GestoresPage';
import { FlipBookModal } from './components/FlipBookModal';
import { ProdutividadeInteligentePage } from './pages/ProdutividadeInteligentePage';

export type AppPage = 
  | 'magagnini' 
  | 'alunos'
  | 'professores'
  | 'gestores'
  | 'themis' 
  | 'atheneum' 
  | 'obmep' 
  | 'provao-paulista' 
  | 'matematica' 
  | 'ciencias'
  | 'produtividade-inteligente';

function App() {
  const [flipBookOpen, setFlipBookOpen] = useState(false);
  const [flipBookType, setFlipBookType] = useState<'matematica' | 'ciencias'>('matematica');

  const handleOpenFlipBook = (type: 'matematica' | 'ciencias' = 'matematica') => {
    setFlipBookType(type);
    setFlipBookOpen(true);
  };

  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      // Profiles
      if (path === '/alunos' || hash === '#alunos') return 'alunos';
      if (path === '/professores' || hash === '#professores') return 'professores';
      if (path === '/gestores' || hash === '#gestores') return 'gestores';

      // Products & Solutions
      if (path === '/themis-class' || hash === '#themis-class') return 'themis';
      if (path === '/atheneum-lib' || hash === '#atheneum-lib') return 'atheneum';
      if (path === '/materiais/obmep' || hash === '#obmep') return 'obmep';
      if (path === '/materiais/provao-paulista' || hash === '#provao-paulista') return 'provao-paulista';
      if (path === '/materiais/matematica' || hash === '#matematica-adaptada') return 'matematica';
      if (path === '/materiais/ciencias' || hash === '#ciencias-adaptadas') return 'ciencias';
      if (path === '/livros/produtividade-inteligente' || path === '/produtividade-inteligente' || hash === '#produtividade-inteligente') return 'produtividade-inteligente';
    }
    return 'magagnini';
  });

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === '/alunos' || hash === '#alunos') {
        setCurrentPage('alunos');
      } else if (path === '/professores' || hash === '#professores') {
        setCurrentPage('professores');
      } else if (path === '/gestores' || hash === '#gestores') {
        setCurrentPage('gestores');
      } else if (path === '/themis-class' || hash === '#themis-class') {
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
      } else if (path === '/livros/produtividade-inteligente' || path === '/produtividade-inteligente' || hash === '#produtividade-inteligente') {
        setCurrentPage('produtividade-inteligente');
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
    setFlipBookOpen(false);
    setCurrentPage(page);
    let targetUrl = '/';
    
    if (page === 'alunos') targetUrl = '/alunos';
    else if (page === 'professores') targetUrl = '/professores';
    else if (page === 'gestores') targetUrl = '/gestores';
    else if (page === 'themis') targetUrl = '#themis-class';
    else if (page === 'atheneum') targetUrl = '#atheneum-lib';
    else if (page === 'obmep') targetUrl = '#obmep';
    else if (page === 'provao-paulista') targetUrl = '#provao-paulista';
    else if (page === 'matematica') targetUrl = '#matematica-adaptada';
    else if (page === 'ciencias') targetUrl = '#ciencias-adaptadas';
    else if (page === 'produtividade-inteligente') targetUrl = '#produtividade-inteligente';

    try {
      window.history.pushState({}, '', targetUrl);
    } catch {
      // Fallback for file protocol or restricted history
      if (page === 'alunos') window.location.hash = '#alunos';
      else if (page === 'professores') window.location.hash = '#professores';
      else if (page === 'gestores') window.location.hash = '#gestores';
      else window.location.hash = targetUrl;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMagagnini = () => {
    setFlipBookOpen(false);
    setCurrentPage('magagnini');
    try {
      window.history.pushState({}, '', '/');
    } catch {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FlipBookModal 
        isOpen={flipBookOpen} 
        onClose={() => setFlipBookOpen(false)} 
        bookType={flipBookType}
      />
      
      {currentPage === 'themis' && <ThemisPage onBackToMagagnini={navigateToMagagnini} />}
      
      {currentPage === 'atheneum' && <AtheneumPage onBackToMagagnini={navigateToMagagnini} />}
      
      {currentPage === 'obmep' && <ObmepPage onBackToMagagnini={navigateToMagagnini} />}
      
      {currentPage === 'provao-paulista' && <ProvaoPaulistaPage onBackToMagagnini={navigateToMagagnini} />}
      
      {currentPage === 'matematica' && (
        <MatematicaAdaptadaPage 
          onBackToMagagnini={navigateToMagagnini} 
          onOpenFlipBook={() => handleOpenFlipBook('matematica')}
        />
      )}
      
      {currentPage === 'ciencias' && (
        <CienciasAdaptadaPage 
          onBackToMagagnini={navigateToMagagnini} 
          onOpenFlipBook={() => handleOpenFlipBook('ciencias')}
        />
      )}
      
      {currentPage === 'alunos' && (
        <AlunosPage 
          onBackToMagagnini={navigateToMagagnini}
          onNavigateToProfessores={() => navigateToPage('professores')}
          onNavigateToGestores={() => navigateToPage('gestores')}
          onNavigateToProvao={() => navigateToPage('provao-paulista')}
          onNavigateToObmep={() => navigateToPage('obmep')}
          onNavigateToProdutividade={() => navigateToPage('produtividade-inteligente')}
        />
      )}

      {currentPage === 'produtividade-inteligente' && (
        <ProdutividadeInteligentePage
          onBackToMagagnini={navigateToMagagnini}
          onNavigateToAlunos={() => navigateToPage('alunos')}
        />
      )}
      
      {currentPage === 'professores' && (
        <ProfessoresPage 
          onBackToMagagnini={navigateToMagagnini}
          onNavigateToAlunos={() => navigateToPage('alunos')}
          onNavigateToGestores={() => navigateToPage('gestores')}
          onNavigateToMatematica={() => navigateToPage('matematica')}
          onNavigateToCiencias={() => navigateToPage('ciencias')}
          onOpenFlipBook={handleOpenFlipBook}
        />
      )}
      
      {currentPage === 'gestores' && (
        <GestoresPage 
          onBackToMagagnini={navigateToMagagnini}
          onNavigateToAlunos={() => navigateToPage('alunos')}
          onNavigateToProfessores={() => navigateToPage('professores')}
          onNavigateToThemis={() => navigateToPage('themis')}
          onNavigateToAtheneum={() => navigateToPage('atheneum')}
        />
      )}
      
      {currentPage === 'magagnini' && (
        <div className="min-h-screen bg-white">
          <Header 
            onNavigate={navigateToPage} 
            currentPage={currentPage} 
            onCloseFlipBook={() => setFlipBookOpen(false)}
          />
          <main>
            <Hero onOpenFlipBook={() => handleOpenFlipBook('matematica')} />
            <PerfilSelector onSelectProfile={(p) => navigateToPage(p)} />
            <Sobre />
            <Categorias />
            <Produtos 
              onNavigate={(p) => navigateToPage(p)} 
              onOpenFlipBook={handleOpenFlipBook} 
            />
            <Solucoes 
              onOpenThemis={() => navigateToPage('themis')} 
              onOpenAtheneum={() => navigateToPage('atheneum')} 
            />
            <Numeros />
            <ParaQuem />
            <CTA onConhecerSobre={() => {
              const el = document.getElementById('sobre');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Contato />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
