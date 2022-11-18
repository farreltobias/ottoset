import { StaticImageData } from 'next/image';

import Airplane from '@public/icons/airplane.svg';
import Config from '@public/icons/config.svg';
import Lightning from '@public/icons/lightning.svg';
import Sun from '@public/icons/sun.svg';

import aviationImage from '@public/photos/aviation.png';
import aviationBigImage from '@public/photos/aviation-big.png';
import maintenanceBigImage from '@public/photos/facility.png';
import generatorImage from '@public/photos/generator.png';
import maintenanceImage from '@public/photos/maintenance.png';
import photovoltaicImage from '@public/photos/photovoltaic.png';
import photovoltaicBigImage from '@public/photos/sunset.png';

import { aviation, facility, generator, solar } from './content';

export type Service = {
  title: string;
  subTitle?: string;
  description: string[];
  icon: React.ReactNode;
  image: StaticImageData;
  background: StaticImageData;
  link: string;
};

export const services: Service[] = [
  {
    title: 'ottoset\ngeradores',
    icon: <Lightning />,
    description: generator,
    image: generatorImage,
    background: generatorImage,
    link: '/servicos#grupo-geradores',
  },
  {
    title: 'ottoset\naviação',
    icon: <Airplane />,
    description: aviation,
    image: aviationImage,
    background: aviationBigImage,
    link: '/servicos#aviacao',
  },
  {
    title: 'ottoset\nsolar',
    icon: <Sun />,
    description: solar,
    image: photovoltaicImage,
    background: photovoltaicBigImage,
    link: '/servicos#fotovoltaica',
  },
  {
    title: 'ottoset\nfacility',
    icon: <Config />,
    description: facility,
    image: maintenanceImage,
    background: maintenanceBigImage,
    link: '/servicos#manutencao',
    subTitle: 'soluções prediais',
  },
];
