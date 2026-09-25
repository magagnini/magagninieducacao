import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Categorias } from './components/Categorias';
import { Produtos } from './components/Produtos';
import { Solucoes } from './components/Solucoes';
import { Numeros, ParaQuem, CTA } from './components/SecoesExtras';
import { Contato, Footer } from './components/ContatoFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Produtos />
        <Solucoes />
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
