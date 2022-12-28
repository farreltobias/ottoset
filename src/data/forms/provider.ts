const radioOptions = [
  {
    id: '1',
    label: 'Serviços voltados para grupos geradores (GMG)',
    value: 'GMG',
  },
  {
    id: '2',
    label: 'Serviços voltados para energia solar fotovoltaica (UFV)',
    value: 'UFV',
  },
];

export const inputs = [
  {
    name: 'name',
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
  {
    name: 'email',
    label: 'Seu email',
    placeholder: 'Digite seu email',
  },
  {
    name: 'telephone',
    label: 'Celular (Whatsapp)',
    placeholder: 'Digite seu telefone',
    mask: '(99) 99999-9999',
  },
  {
    name: 'state',
    label: 'Estado',
    placeholder: 'Estado',
  },
  {
    name: 'city',
    label: 'Cidade',
    placeholder: 'Nome da cidade',
  },
  {
    name: 'area',
    label: 'Área de atuação',
    placeholder: 'Área de atuação',
    radio: radioOptions,
  },
];
