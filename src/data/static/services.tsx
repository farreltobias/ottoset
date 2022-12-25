import { StaticImageData } from 'next/image';

import Airplane from '@public/icons/airplane.svg';
import Config from '@public/icons/config.svg';
import Lightning from '@public/icons/lightning.svg';
import Sun from '@public/icons/sun.svg';

import aviationImage from '@public/photos/aviation.webp';
import facilityImage from '@public/photos/facility.webp';
import generatorImage from '@public/photos/generator.webp';
import photovoltaicImage from '@public/photos/photovoltaic.webp';

export type Service = {
  title: string;
  subTitle?: string;
  icon: React.ReactNode;
  image: StaticImageData;
  link: string;
};

export const services: Service[] = [
  {
    title: 'ottoset\ngeradores',
    icon: <Lightning />,
    image: generatorImage,
    link: '/servicos#grupo-geradores',
  },
  {
    title: 'ottoset\naviação',
    icon: <Airplane />,
    image: aviationImage,
    link: '/servicos#aviacao',
  },
  {
    title: 'ottoset\nsolar',
    icon: <Sun />,
    image: photovoltaicImage,
    link: '/servicos#fotovoltaica',
  },
  {
    title: 'ottoset\nfacility',
    subTitle: 'soluções prediais',
    icon: <Config />,
    image: facilityImage,
    link: '/servicos#manutencao',
  },
];
