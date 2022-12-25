const monitor = [
  'Plantão 24 horas realizado por engenheiros e técnicos especializados;',
  'Manutenção Preditiva, Preventiva e Corretiva',
  'Técnicos habilitados para atendimento em todo o país;',
  'Monitoramento Remoto de Grupo Gerador, com gerenciamento de risco e status online, pelo celular;',
  'Monitoramento Remoto de sistemas fotovoltaicos, análise de eficiência e curvas de produção;',
  'Vasta experiência com empresas multinacionais, realizando atendimentos de norte a sul do país;',
  'Controle de qualidade e soluções ágeis.',
];

const generator = [
  'venda',
  'instalação',
  'locação',
  'automação',
  'manutenção',
  'monitoramento remoto',
];

const aviation = ['modernização de GPU'];

const facility = ['soluções prediais'];

const solar = [
  'venda',
  'instalação',
  'locação',
  'manutenção',
  'monitoramento remoto',
];

export type Mision = {
  topic: string;
  content: string;
};

const missions: Mision[] = [
  {
    topic: 'Missão',
    content:
      'Fornecer soluções seguras, inteligentes e customizáveis em energia',
  },
  {
    topic: 'Visão',
    content: 'Ser a empresa líder em soluções energéticas eficazes no Brasil.',
  },
  {
    topic: 'Valores',
    content:
      'Inovação, competitividade, sustentabilidade, responsabilidade social, disponibilidade e comprometimento',
  },
];

const services = [
  'Manutenção Preditiva, Preventiva e Corretiva',
  'Monitoramento Remoto',
  'Chamados avulsos',
  'Status online',
  'Contratos mensais, semestrais e anuais',
  'Falhas acionamentos Relatórios gerenciais',
  'Avaliação técnica',
  'Laudos técnicos',
  'Atendimento 24h',
];

const diferentials = [
  'Técnicos qualificados em todo o Brasil',
  'Plantão 24 horas',
  'Monitoramento pelo celular: Monitoramento Remoto de Grupo Gerador, com gerenciamento de risco e status online, pelo celular.',
  'Monitoramento Remoto de Grupo Gerador, com gerenciamento de risco e status online - pelo celular;',
  'APP de Controle: Acompanhamento online dos serviços, relatórios técnicos e gerenciais, interação ponta a ponta com os técnicos e plataforma ajustável de acordo com a necessidade do cliente.',
];

export {
  monitor,
  missions,
  services,
  diferentials,
  generator,
  facility,
  solar,
  aviation,
};
