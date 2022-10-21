import Whatsapp from '@public/social/whatsapp.svg';
import Phone from '@public/others/phone.svg';
import Email from '@public/others/email-outline.svg';

import { phone, email, whatsapp } from './static/ottoset';

export const contacts = [
  {
    Icon: Email,
    type: 'email',
    email,
    link: `mailto:${email}`,
    onlyFooter: true,
  },
  {
    Icon: Phone,
    type: 'telefone',
    number: phone,
    link: `tel:${phone}`,
  },
  {
    Icon: Whatsapp,
    type: 'whatsapp',
    number: whatsapp,
    link: `https://wa.me/${whatsapp}`,
  },
];
