import aviation from '@public/photos/aviation.png';
import generator from '@public/photos/generator.png';
import maintenance from '@public/photos/maintenance.png';
import photovoltaic from '@public/photos/photovoltaic.png';

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
  {
    title: 'Fotovoltaica',
    description: areas,
    image: {
      path: photovoltaic,
      name: 'Fotovoltaica',
    },
  },
  {
    title: 'Manutenção',
    description: areas,
    image: {
      path: maintenance,
      name: 'Manutenção',
    },
  },
];
