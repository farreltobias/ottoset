import { v4 as uuidv4 } from 'uuid';
import { StaticImageData } from 'next/image';

import project from '@public/photos/projects.jpg';

type ProjectType = 'generator' | 'solar' | 'maintenance' | 'aviation';

export type Project = {
  id: string;
  title: string;
  link: string;
  img: StaticImageData;
  description: string;
  duration: number;
  type: ProjectType;
};

export type Tab = {
  label: string;
  projects: Project[];
};

const MINUTES_IN_MILLISECONDS = 60000;

const projects: Project[] = [
  {
    id: uuidv4(),
    title: 'Hoftalon - Hospital de Olhos de Londrina',
    link: '/',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: MINUTES_IN_MILLISECONDS,
    type: 'maintenance',
  },
  {
    id: uuidv4(),
    title: 'Segrpro - Gerador de energia',
    link: '/',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 10 * MINUTES_IN_MILLISECONDS,
    type: 'generator',
  },
  {
    id: uuidv4(),
    title: 'Hospital São Rafael - Energia Solar',
    link: '/',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 15 * MINUTES_IN_MILLISECONDS,
    type: 'solar',
  },
  {
    id: uuidv4(),
    title: 'Hospital São Rafael - Aviação',
    link: '/',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 5 * MINUTES_IN_MILLISECONDS,
    type: 'aviation',
  },
  {
    id: uuidv4(),
    title: 'Hospital do Câncer de Londrina - Gerador de energia',
    link: '/',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 60 * MINUTES_IN_MILLISECONDS,
    type: 'generator',
  },
];

export const tabs: Tab[] = [
  {
    label: 'Tudo',
    projects,
  },
  {
    label: 'Grupo Geradores',
    projects: projects.filter((project) => project.type === 'generator'),
  },
  {
    label: 'Energia Solar',
    projects: projects.filter((project) => project.type === 'solar'),
  },
  {
    label: 'Manutenção',
    projects: projects.filter((project) => project.type === 'maintenance'),
  },
  {
    label: 'Aviação',
    projects: projects.filter((project) => project.type === 'aviation'),
  },
];
