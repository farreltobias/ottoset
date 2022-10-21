import { Children } from 'react';

import generator from '@public/photos/generator.png';
import aviation from '@public/photos/aviation.png';

import { areas } from './content';

export const slides = [
  {
    title: (
      <>
        Grupos <br /> Geradores
      </>
    ),
    description: areas,
    image: {
      path: generator,
      name: 'Gerador',
    },
  },
  {
    title: 'Aviação',
    description: areas,
    image: {
      path: aviation,
      name: 'Aviação',
    },
  },
];
