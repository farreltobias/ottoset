import { StaticImageData } from 'next/image';

import agribusiness from '@public/photos/agribusiness.webp';
import hospital from '@public/photos/hospital.webp';
import hospitality from '@public/photos/hospitality.webp';

export type Expertise = {
  title: string;
  image: StaticImageData;
  link: string;
};

export const expertises: Expertise[] = [
  {
    title: 'Hospitais',
    image: hospital,
    link: '/contato',
  },
  {
    title: 'Agronegócio',
    image: agribusiness,
    link: '/contato',
  },
  {
    title: 'Hotelaria',
    image: hospitality,
    link: '/contato',
  },
  {
    title: 'Hospitais',
    image: hospital,
    link: '/contato',
  },
];
