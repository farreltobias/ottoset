import Airplane from '@public/icons/airplane.svg';
import Config from '@public/icons/config.svg';
import Lightning from '@public/icons/lightning.svg';
import Sun from '@public/icons/sun.svg';

import aviation from '@public/photos/aviation.png';
import generator from '@public/photos/generator.png';
import maintenance from '@public/photos/maintenance.png';
import photovoltaic from '@public/photos/photovoltaic.png';

export const services = [
  {
    title: (
      <>
        Grupos <br /> Geradores
      </>
    ),
    icon: <Lightning />,
    image: {
      path: generator,
      name: 'Gerador',
    },
    link: '/',
  },
  {
    title: 'Aviação',
    icon: <Airplane />,
    image: {
      path: aviation,
      name: 'Aviação',
    },
    link: '/',
  },
  {
    title: 'Fotovoltaica',
    icon: <Sun />,
    image: {
      path: photovoltaic,
      name: 'Fotovoltaica',
    },
    link: '/',
  },
  {
    title: 'Manutenção',
    icon: <Config />,
    image: {
      path: maintenance,
      name: 'Manutenção',
    },
    link: '/',
  },
];
