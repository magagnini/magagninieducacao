import { BookOpen, Puzzle, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

export function Categorias() {
  const categorias = [
    {
      titulo: 'Apostilas Acadêmicas',
      descricao: 'Materiais voltados à preparação acadêmica e ao desenvolvimento de habilidades.',
      icone: <BookOpen className="w-8 h-8 text-wine-800" />,
      link: '#apostilas'
    },
    {
      titulo: 'Atividades Adaptadas',
      descricao: 'Materiais estruturados para apoiar o trabalho pedagógico e atender diferentes necessidades de aprendizagem.',
      icone: <Puzzle className="w-8 h-8 text-wine-800" />,
      link: '#atividades'
    },
    {
      titulo: 'Soluções Digitais',
      descricao: 'Ferramentas tecnológicas desenvolvidas para resolver problemas reais do ambiente escolar.',
      icone: <Laptop className="w-8 h-8 text-wine-800" />,
      link: '#solucoes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categorias.map((cat, index) => {
            const initialMotion = 
              index === 0
                ? { opacity: 0, x: -60, y: 0 }
                : index === 1
                ? { opacity: 0, x: 0, y: 60 }
                : { opacity: 0, x: 60, y: 0 };

            return (
              <motion.div 
                key={index} 
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full group"
              >
                <div className="w-16 h-16 bg-wine-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-wine-100 transition-colors">
                  {cat.icone}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.titulo}</h3>
                <p className="text-gray-600 flex-grow mb-6">{cat.descricao}</p>
                <a 
                  href={cat.link}
                  className="text-wine-800 font-semibold flex items-center group-hover:text-wine-900"
                >
                  Ver produtos
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
