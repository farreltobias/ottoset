import information from './infomation';

export const contacts = [
  {
    type: 'telefone',
    number: information.phoneNumber,
    link: `tel:${information.phoneNumber}`,
  },
  {
    type: 'whatsapp',
    number: information.whatsapp,
    link: `https://wa.me/${information.whatsapp}`,
  },
];
