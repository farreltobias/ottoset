export const getInputs = (mask: string) => [
  {
    name: 'name',
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
  {
    name: 'telephone',
    label: 'Telefone',
    placeholder: 'Digite seu telefone fixo ou celular',
    mask,
  },
  {
    name: 'service',
    label: 'Quais serviços você está buscando?',
    placeholder: 'Grupo geradores, Energia solar, Manutenção predial...',
  },
  {
    name: 'message',
    label: 'Sua mensagem',
    placeholder: 'Olá,',
  },
  {
    name: 'privacy',
    value: 'privacy',
    label: 'Li e concordo com a Política de privacidade',
    checkbox: true,
  },
];
