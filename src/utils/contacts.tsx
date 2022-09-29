import Whatsapp from '@public/social/whatsapp.svg';
import Phone from '@public/others/phone.svg';
import Email from '@public/others/email-outline.svg';

import { information } from './infomation';

export const contacts = [
  {
    Icon: Email,
    type: 'email',
    email: information.email,
    link: `mailto:${information.email}`,
    onlyFooter: true,
  },
  {
    Icon: Phone,
    type: 'telefone',
    number: information.phoneNumber,
    link: `tel:${information.phoneNumber}`,
  },
  {
    Icon: Whatsapp,
    type: 'whatsapp',
    number: information.whatsapp,
    link: `https://wa.me/${information.whatsapp}`,
  },
];
