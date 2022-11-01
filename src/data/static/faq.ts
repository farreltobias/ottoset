export const faq = [
  {
    category: 'Geral',
    question: 'O que é a Ottoset Energy?',
    answer: `A Ottoset Energy é uma empresa de engenharia e consultoria que atua no mercado de energia renovável, com foco em energia solar fotovoltaica, energia eólica, energia hídrica e energia geotérmica. A Ottoset Energy também atua no mercado de energia convencional, com foco em grupo geradores, automação, aviação, manutenção e adequação, serviços GMC e serviços UFV.`,
  },
  {
    category: 'Geral',
    question: 'Quais são os serviços prestados pela Ottoset Energy?',
    answer: `A Ottoset Energy presta serviços de engenharia e consultoria nas áreas de energia renovável, energia convencional, automação, aviação, manutenção e adequação, serviços GMC e serviços UFV.`,
  },
  {
    category: 'Geral',
    question: 'Quais são os projetos realizados pela Ottoset Energy?',
    answer: `A Ottoset Energy realiza projetos nas áreas de energia renovável, energia convencional, automação, aviação, manutenção e adequação, serviços GMC e serviços UFV.`,
  },
  {
    category: 'Geral',
    question: 'Quais são os clientes da Ottoset Energy?',
    answer: `A Ottoset Energy atende clientes de diversos segmentos, como: indústrias, comércios, condomínios, hospitais, escolas, universidades, igrejas, hotéis, restaurantes, supermercados, entre outros.`,
  },
  {
    category: 'Geral',
    question: 'Quais são as certificações da Ottoset Energy?',
    answer: `A Ottoset Energy possui certificação ISO 9001:2015, certificação ISO 14001:2015 e certificação OHSAS 18001:2007.`,
  },
  {
    category: 'Geral',
    question: 'Quais são as vantagens de contratar a Ottoset Energy?',
    answer: `A Ottoset Energy possui uma equipe de profissionais altamente qualificados, com vasta experiência no mercado de energia renovável e energia convencional. Além disso, a Ottoset Energy possui certificação ISO 9001:2015, certificação ISO 14001:2015 e certificação OHSAS 18001:2007.`,
  },
  {
    category: 'Energia Solar',
    question: 'O que é energia solar fotovoltaica?',
    answer: `A energia solar fotovoltaica é a energia gerada a partir da conversão direta da luz solar em energia elétrica, por meio de células fotovoltaicas. A energia solar fotovoltaica é uma fonte de energia limpa, renovável e sustentável, que não emite gases poluentes na atmosfera.`,
  },
  {
    category: 'Energia Solar',
    question: 'Quais são os benefícios da energia solar fotovoltaica?',
    answer: `A energia solar fotovoltaica é uma fonte de energia limpa, renovável e sustentável, que não emite gases poluentes na atmosfera. Além disso, a energia solar fotovoltaica é uma fonte de energia que não necessita de combustível, não necessita de manutenção e não necessita de operação. A energia solar fotovoltaica também é uma fonte de energia que não necessita de infraestrutura, como linhas de transmissão e subestações.`,
  },
  {
    category: 'Energia Solar',
    question: 'Quais são os tipos de energia solar fotovoltaica?',
    answer: `A energia solar fotovoltaica pode ser classificada em dois tipos: energia solar fotovoltaica conectada à rede e energia solar fotovoltaica isolada.`,
  },
  {
    category: 'Energia Solar',
    question: 'O que é energia solar fotovoltaica conectada à rede?',
    answer: `A energia solar fotovoltaica conectada à rede é a energia gerada a partir da conversão direta da luz solar em energia elétrica, por meio de células fotovoltaicas, que é injetada na rede elétrica, para ser consumida por outros usuários da rede elétrica.`,
  },
  {
    category: 'Energia Solar',
    question: 'O que é energia solar fotovoltaica isolada?',
    answer: `A energia solar fotovoltaica isolada é a energia gerada a partir da conversão direta da luz solar em energia elétrica, por meio de células fotovoltaicas, que é utilizada para atender às necessidades de consumo de energia elétrica do próprio local onde a energia solar fotovoltaica é gerada.`,
  },
  {
    category: 'Grupo geradores',
    question: 'O que é um grupo gerador?',
    answer: `Um grupo gerador é um conjunto de equipamentos que converte energia mecânica em energia elétrica. Um grupo gerador é composto por um motor, um alternador, um sistema de controle e um sistema de combustível.`,
  },
  {
    category: 'Grupo geradores',
    question: 'Quais são os tipos de grupo gerador?',
    answer: `Os grupos geradores podem ser classificados em dois tipos: grupos geradores de energia elétrica e grupos geradores de energia térmica.`,
  },
  {
    category: 'Grupo geradores',
    question: 'O que é um grupo gerador de energia elétrica?',
    answer: `Um grupo gerador de energia elétrica é um conjunto de equipamentos que converte energia mecânica em energia elétrica. Um grupo gerador de energia elétrica é composto por um motor, um alternador, um sistema de controle e um sistema de combustível.`,
  },
  {
    category: 'Grupo geradores',
    question: 'O que é um grupo gerador de energia térmica?',
    answer: `Um grupo gerador de energia térmica é um conjunto de equipamentos que converte energia térmica em energia elétrica. Um grupo gerador de energia térmica é composto por um motor, um alternador, um sistema de controle e um sistema de combustível.`,
  },
  {
    category: 'Grupo geradores',
    question: 'Quais são os benefícios de um grupo gerador?',
    answer: `Os grupos geradores são equipamentos que convertem energia mecânica em energia elétrica. Os grupos geradores são equipamentos que podem ser utilizados em diversos segmentos, como: indústrias, comércios, condomínios, hospitais, escolas, universidades, igrejas, hotéis, restaurantes, supermercados, entre outros.`,
  },
];

export const categories = [
  'Todos',
  ...Array.from(new Set(faq.map((item) => item.category))).sort(),
];
