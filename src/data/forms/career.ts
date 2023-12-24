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
    name: 'curriculum',
    label: 'Anexe seu currículo',
    accept: {
      'application/pdf': ['.pdf'],
    },
  },
  {
    name: 'message',
    label: 'Sobre você e a vaga pretendida',
    placeholder: 'Sua mensagem',
  },
];
