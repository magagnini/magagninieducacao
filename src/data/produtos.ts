export interface Produto {
  id: string;
  nome: string;
  subtitulo?: string;
  imagem: string;
  descricao: string;
  categoria: 'academica' | 'matematica' | 'ciencias' | 'digital';
  ano?: string;
  detalhe?: string;
  destaque?: boolean;
  vantagens?: string[];
  bonus?: string[];
  linkCompra?: string;
  ativo: boolean;
}

export const produtos = {
  apostilasAcademicas: [
    {
      id: 'obmep-vol-1',
      nome: 'Apostila da OBMEP — Vol. 1',
      subtitulo: 'A Preparação Definitiva',
      descricao: 'Questões dos últimos 3 anos dos 3 níveis da OBMEP com resoluções escritas detalhadas e em vídeo via QR Code.',
      imagem: '/assets/produtos/apostilas-academicas/obmep-vol-1.png',
      categoria: 'academica' as const,
      detalhe: '3 Níveis • QR Codes',
      destaque: true,
      vantagens: [
        'Questões selecionadas de 2023 a 2025',
        'Resoluções escritas completas e detalhadas',
        'QR Codes com resolução em vídeo em cada questão',
        'Estratégias de raciocínio passo a passo',
        'Mais de 100 novos QR Codes em atualizações futuras inclusas'
      ],
      linkCompra: 'https://obmep-1-edicao.vercel.app/#comprar',
      ativo: true
    },
    {
      id: 'provao-paulista',
      nome: 'Apostila Provão Paulista',
      subtitulo: 'Preparação para o Vestibular Seriado',
      descricao: 'Material preparatório completo para o Provão Paulista, com questões resolvidas e orientações por disciplina.',
      imagem: '/assets/produtos/apostilas-academicas/provao-paulista.png',
      categoria: 'academica' as const,
      detalhe: 'Ensino Médio • Resolvida',
      destaque: false,
      vantagens: [
        'Questões das edições do Provão Paulista comentadas item a item',
        'Separação por áreas do conhecimento e disciplinas',
        'Gabarito detalhado com explicação passo a passo',
        'Foco nas vagas diretas da USP, UNICAMP, UNESP e FATEC'
      ],
      linkCompra: 'https://wa.me/5511998713683?text=Ol%C3%A1!%20Quero%20adquirir%20a%20Apostila%20do%20Prov%C3%A3o%20Paulista',
      ativo: true
    }
  ],

  matematicaAdaptada: [
    {
      id: 'matematica-anos-finais',
      nome: 'Apostilão de Matemática — Anos Finais',
      subtitulo: '6° ao 9° Ano Reunidos',
      ano: '6° ao 9° Ano',
      descricao: 'Coletânea definitiva reunindo todo o conteúdo adaptado de Matemática do 6º ao 9º ano em um único volume (+500 atividades).',
      imagem: '/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png',
      categoria: 'matematica' as const,
      detalhe: '+500 atividades',
      destaque: true,
      vantagens: [
        'Mais de 500 atividades adaptadas e estruturadas',
        'Acesso completo a todos os anos finais (6º, 7º, 8º e 9º)',
        'Economia máxima e praticidade pedagógica para o professor',
        'Instrumento de referência alinhado à BNCC'
      ],
      linkCompra: 'https://pay.cakto.com.br/zc6nce7_1123320',
      ativo: true
    },
    {
      id: 'matematica-6-ano',
      nome: 'Apostila Adaptada de Matemática — 6° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '6° Ano',
      descricao: 'Atividades estruturadas, adaptadas e progressivas com recursos visuais para o 6º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-6-ano.png',
      categoria: 'matematica' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Atividades estruturadas com apoio visual e concreto',
        'Gradação cuidadosa de dificuldade para inclusão real',
        'Alinhamento com as habilidades essenciais da BNCC',
        'Foco na construção das bases do raciocínio matemático'
      ],
      linkCompra: undefined, // Preparado sem link inventado conforme regra 58
      ativo: true
    },
    {
      id: 'matematica-7-ano',
      nome: 'Apostila Adaptada de Matemática — 7° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '7° Ano',
      descricao: 'Atividades estruturadas, adaptadas e progressivas para o 7º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-7-ano.png',
      categoria: 'matematica' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Linguagem clara, direta e livre de sobrecargas conceituais',
        'Exercícios resolvidos como modelo de aplicação',
        'Estratégias que estimulam a autonomia do estudante',
        'Pronta para impressão e uso em sala regular ou AEE'
      ],
      linkCompra: 'https://pay.cakto.com.br/id8dw7v_1118011',
      ativo: true
    },
    {
      id: 'matematica-8-ano',
      nome: 'Apostila Adaptada de Matemática — 8° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '8° Ano',
      descricao: 'Atividades estruturadas, adaptadas e progressivas para o 8º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-8-ano.png',
      categoria: 'matematica' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Álgebra e geometria com suporte gráfico intuitivo',
        'Divisão de problemas complexos em etapas acessíveis',
        'Adequada para estudantes com necessidades educacionais específicas',
        'Gabaritos e orientações pedagógicas para o educador'
      ],
      linkCompra: 'https://pay.cakto.com.br/32etgf5_1118004',
      ativo: true
    },
    {
      id: 'matematica-9-ano',
      nome: 'Apostila Adaptada de Matemática — 9° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '9° Ano',
      descricao: 'Atividades estruturadas, adaptadas e progressivas para o 9º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-9-ano.png',
      categoria: 'matematica' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Funções, probabilidade e teoremas explicados com clareza',
        'Reforço de pré-requisitos essenciais com segurança',
        'Preparação inclusiva para a transição ao Ensino Médio',
        'Material rigorosamente testado na prática escolar'
      ],
      linkCompra: 'https://pay.cakto.com.br/id8dw7v_1118011',
      ativo: true
    }
  ],

  cienciasAdaptadas: [
    {
      id: 'ciencias-anos-finais',
      nome: 'Apostilão de Ciências — Anos Finais',
      subtitulo: '6° ao 9° Ano Reunidos',
      ano: '6° ao 9° Ano',
      descricao: 'Coletânea completa reunindo todo o conteúdo adaptado de Ciências do 6º ao 9º ano em um único volume (+500 atividades).',
      imagem: '/assets/produtos/atividades-adaptadas/apostilao-ciencias-anos-finais.png',
      categoria: 'ciencias' as const,
      detalhe: '+500 atividades',
      destaque: true,
      vantagens: [
        'Mais de 500 atividades estruturadas e ilustradas do 6º ao 9º ano',
        'Cobertura de todos os eixos temáticos da BNCC de Ciências',
        'Instrumento definitivo para o planejamento pedagógico adaptado',
        'Economia de tempo e padronização com qualidade editorial'
      ],
      linkCompra: undefined, // Preparado para quando fornecido
      ativo: true
    },
    {
      id: 'ciencias-6-ano',
      nome: 'Apostila Adaptada de Ciências — 6° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '6° Ano',
      descricao: 'Atividades estruturadas e adaptadas com ilustrações didáticas para o 6º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-6-ano.png',
      categoria: 'ciencias' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Esquemas visuais explicativos de fácil compreensão',
        'Termos científicos apresentados de forma contextualizada',
        'Atividades em formato acessível para reforço e avaliação',
        'Alinhamento integral à BNCC para o 6º ano'
      ],
      linkCompra: undefined,
      ativo: true
    },
    {
      id: 'ciencias-7-ano',
      nome: 'Apostila Adaptada de Ciências — 7° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '7° Ano',
      descricao: 'Atividades estruturadas e adaptadas com ilustrações didáticas para o 7º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-7-ano.png',
      categoria: 'ciencias' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Biodiversidade e ecossistemas explicados com recursos gráficos',
        'Exercícios objetivos que reduzem a sobrecarga de leitura',
        'Gradação de complexidade para inclusão pedagógica efetiva',
        'Pronta para uso individual ou atividades guiadas'
      ],
      linkCompra: undefined,
      ativo: true
    },
    {
      id: 'ciencias-8-ano',
      nome: 'Apostila Adaptada de Ciências — 8° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '8° Ano',
      descricao: 'Atividades estruturadas e adaptadas com ilustrações didáticas para o 8º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-8-ano.png',
      categoria: 'ciencias' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Sistemas do corpo humano explicados por esquemas visuais',
        'Atividades adaptadas que facilitam a fixação de conceitos',
        'Material inclusivo para estudantes com dificuldades de aprendizagem',
        'Suporte integral ao professor regente e profissional de apoio'
      ],
      linkCompra: undefined,
      ativo: true
    },
    {
      id: 'ciencias-9-ano',
      nome: 'Apostila Adaptada de Ciências — 9° Ano',
      subtitulo: 'Ensino Fundamental',
      ano: '9° Ano',
      descricao: 'Atividades estruturadas e adaptadas com ilustrações didáticas para o 9º ano do Ensino Fundamental.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-9-ano.png',
      categoria: 'ciencias' as const,
      detalhe: '~100 atividades',
      destaque: false,
      vantagens: [
        'Introdução concreta à Física e Química básica',
        'Modelos visuais claros para átomos, matéria e energia',
        'Questões guiadas passo a passo com suporte conceitual',
        'Transição segura e estimulante para o Ensino Médio'
      ],
      linkCompra: undefined,
      ativo: true
    }
  ],

  solucoesDigitais: [
    {
      id: 'themis-class',
      nome: 'Themis Class',
      subtitulo: 'Gestão de Ocorrências Escolares',
      descricao: 'Solução digital para gestão de ocorrências escolares e comunicação com os responsáveis. Registro, acompanhamento, histórico, relatórios e desdobramentos.',
      imagem: '/assets/produtos/solucoes-digitais/themis-class.png',
      categoria: 'digital' as const,
      detalhe: 'Web • Responsivo',
      ativo: true
    },
    {
      id: 'atheneum-lib',
      nome: 'Atheneum Lib',
      subtitulo: 'Gestão de Bibliotecas',
      descricao: 'Solução digital completa para gestão de bibliotecas escolares, facilitando o acesso ao acervo e o controle de empréstimos.',
      imagem: '/assets/produtos/solucoes-digitais/atheneum-lib.png',
      categoria: 'digital' as const,
      detalhe: 'Web • Cloud',
      ativo: true
    }
  ],

  // Compatibility getter: returns all adapted activities combined
  get atividadesAdaptadas(): Produto[] {
    return [...this.matematicaAdaptada, ...this.cienciasAdaptadas];
  }
};
