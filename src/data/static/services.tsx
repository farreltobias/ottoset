import { StaticImageData } from 'next/image';

import Airplane from '@public/icons/airplane.svg';
import Config from '@public/icons/config.svg';
import Lightning from '@public/icons/lightning.svg';
import Sun from '@public/icons/sun.svg';

import aviation from '@public/photos/aviation.png';
import generator from '@public/photos/generator.png';
import maintenance from '@public/photos/maintenance.png';
import photovoltaic from '@public/photos/photovoltaic.png';

import { areas } from './content';

export type Service = {
  title: string;
  subTitle?: string;
  description: string[];
  icon: React.ReactNode;
  image: StaticImageData;
  link: string;
};

export const services: Service[] = [
  {
    title: 'ottoset\ngeradores',
    icon: <Lightning />,
    description: areas,
    image: generator,
    link: '/servicos#grupo-geradores',
  },
  {
    title: 'ottoset\naviação',
    icon: <Airplane />,
    description: areas,
    image: aviation,
    link: '/servicos#aviacao',
  },
  {
    title: 'ottoset\nsolar',
    icon: <Sun />,
    description: areas,
    image: photovoltaic,
    link: '/servicos#fotovoltaica',
  },
  {
    title: 'ottoset\nfacility',
    icon: <Config />,
    description: areas,
    image: maintenance,
    link: '/servicos#manutencao',
    subTitle: 'soluções prediais',
  },
];
