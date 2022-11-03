import Airplane from '@public/icons/airplane.svg';
import Config from '@public/icons/config.svg';
import Lightning from '@public/icons/lightning.svg';
import Sun from '@public/icons/sun.svg';

import aviation from '@public/photos/aviation.png';
import generator from '@public/photos/generator.png';
import maintenance from '@public/photos/maintenance.png';
import photovoltaic from '@public/photos/photovoltaic.png';

import { areas } from './content';

export const services = [
  {
    title: (
      <>
        ottoset <br /> geradores
      </>
    ),
    icon: <Lightning />,
    description: areas,
    image: {
      path: generator,
      name: 'Gerador',
    },
    link: '/servicos#grupo-geradores',
  },
  {
    title: (
      <>
        ottoset <br /> aviação
      </>
    ),
    icon: <Airplane />,
    description: areas,
    image: {
      path: aviation,
      name: 'Aviação',
    },
    link: '/servicos#aviacao',
  },
  {
    title: (
      <>
        ottoset <br /> solar
      </>
    ),
    icon: <Sun />,
    description: areas,
    image: {
      path: photovoltaic,
      name: 'Fotovoltaica',
    },
    link: '/servicos#fotovoltaica',
  },
  {
    title: (
      <>
        ottoset <br /> facility
      </>
    ),
    icon: <Config />,
    description: areas,
    image: {
      path: maintenance,
      name: 'Manutenção',
    },
    link: '/servicos#manutencao',
  },
];
