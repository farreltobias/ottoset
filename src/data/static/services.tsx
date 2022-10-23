import Lightning from '@public/icons/lightning.svg';
import Airplane from '@public/icons/airplane.svg';
import Sun from '@public/icons/sun.svg';
import Config from '@public/icons/config.svg';

import generator from '@public/photos/generator.png';
import aviation from '@public/photos/aviation.png';
import photovoltaic from '@public/photos/photovoltaic.png';
import maintenance from '@public/photos/maintenance.png';

export const services = [
  {
    title: (
      <>
        Grupos <br /> Geradores
      </>
    ),
    icon: <Lightning viewBox="0 0 48 48" />,
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
    icon: <Sun viewBox="0 0 48 48" />,
    image: {
      path: photovoltaic,
      name: 'Fotovoltaica',
    },
    link: '/',
  },
  {
    title: 'Manutenção',
    icon: <Config viewBox="0 0 48 48" />,
    image: {
      path: maintenance,
      name: 'Manutenção',
    },
    link: '/',
  },
];
