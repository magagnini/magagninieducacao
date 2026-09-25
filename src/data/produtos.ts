export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  detalhe?: string;
  link?: string;
}

export const produtos = {
  apostilasAcademicas: [
    {
      id: 'provao-paulista',
      nome: 'Apostila Provão Paulista',
      descricao: 'Material voltado à preparação para o Provão Paulista.',
      imagem: '/assets/produtos/apostilas-academicas/provao-paulista.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'obmep-vol-1',
      nome: 'Apostila OBMEP Vol. 1',
      descricao: 'Material voltado à preparação e desenvolvimento de habilidades relacionadas à OBMEP.',
      imagem: '/assets/produtos/apostilas-academicas/obmep-vol-1.png',
      detalhe: '~100 atividades'
    }
  ],
  atividadesAdaptadas: [
    {
      id: 'matematica-anos-finais',
      nome: 'Apostilão de Matemática — Anos Finais',
      descricao: 'Material estruturado para apoiar o trabalho pedagógico de forma completa.',
      imagem: '/assets/produtos/atividades-adaptadas/apostilao-matematica-anos-finais.png',
      detalhe: '+500 atividades',
      destaque: true
    },
    {
      id: 'ciencias-anos-finais',
      nome: 'Apostilão de Ciências — Anos Finais',
      descricao: 'Material estruturado para apoiar o trabalho pedagógico de forma completa.',
      imagem: '/assets/produtos/atividades-adaptadas/apostilao-ciencias-anos-finais.png',
      detalhe: '+500 atividades',
      destaque: true
    },
    {
      id: 'matematica-6-ano',
      nome: 'Apostila adaptada de Matemática 6° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 6º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-6-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'matematica-7-ano',
      nome: 'Apostila adaptada de Matemática 7° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 7º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-7-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'matematica-8-ano',
      nome: 'Apostila adaptada de Matemática 8° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 8º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-8-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'matematica-9-ano',
      nome: 'Apostila adaptada de Matemática 9° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 9º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/matematica-9-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'ciencias-6-ano',
      nome: 'Apostila adaptada de Ciências 6° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 6º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-6-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'ciencias-7-ano',
      nome: 'Apostila adaptada de Ciências 7° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 7º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-7-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'ciencias-8-ano',
      nome: 'Apostila adaptada de Ciências 8° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 8º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-8-ano.png',
      detalhe: '~100 atividades'
    },
    {
      id: 'ciencias-9-ano',
      nome: 'Apostila adaptada de Ciências 9° ANO',
      descricao: 'Atividades estruturadas e adaptadas para o 9º ano.',
      imagem: '/assets/produtos/atividades-adaptadas/ciencias-9-ano.png',
      detalhe: '~100 atividades'
    }
  ],
  solucoesDigitais: [
    {
      id: 'themis-class',
      nome: 'Themis Class',
      subtitulo: 'Gestão de Ocorrências Escolares',
      descricao: 'Solução digital para gestão de ocorrências escolares e comunicação com os responsáveis. Registro, acompanhamento, histórico, relatórios e desdobramentos.',
      imagem: '/assets/produtos/solucoes-digitais/themis-class.png',
    },
    {
      id: 'atheneum-lib',
      nome: 'Atheneum Lib',
      subtitulo: 'Gestão de Bibliotecas',
      descricao: 'Solução digital completa para gestão de bibliotecas escolares, facilitando o acesso ao acervo e o controle de empréstimos.',
      imagem: '/assets/produtos/solucoes-digitais/atheneum-lib.png',
    }
  ]
};
