import { StaticImageData } from 'next/legacy/image';

import project from '@public/photos/projects.jpg';

type ProjectType = 'generator' | 'solar' | 'maintenance' | 'aviation';

export type Project = {
  id: string;
  order: number;
  slug: string;
  title: string;
  img: StaticImageData;
  description: string;
  duration: number;
  category: ProjectType;
};

export type Tab = {
  label: string;
  projects: Project[];
};

const MINUTES_IN_MILLISECONDS = 60000;

const projects: Project[] = [
  {
    id: 'ee7b3938-65da-45f6-ae76-81d93091b5af',
    order: 1,
    title: 'Hoftalon - Hospital de Olhos de Londrina',
    slug: 'hoftalon-hospital-de-olhos-de-londrina',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: MINUTES_IN_MILLISECONDS,
    category: 'maintenance',
  },
  {
    id: 'd86a7845-b4de-4303-b73e-f9857333bca6',
    order: 2,
    title: 'Segrpro - Gerador de energia',
    slug: 'segrpro-gerador-de-energia',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 10 * MINUTES_IN_MILLISECONDS,
    category: 'generator',
  },
  {
    id: 'ac1ffae3-f845-4a65-9ce4-68e0af441bf4',
    order: 3,
    title: 'Hospital São Rafael - Energia Solar',
    slug: 'hospital-sao-rafael-energia-solar',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 15 * MINUTES_IN_MILLISECONDS,
    category: 'solar',
  },
  {
    id: '41543e41-f706-47be-a424-288011a13f22',
    order: 4,
    title: 'Hospital São Rafael - Aviação',
    slug: 'hospital-sao-rafael-aviacao',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 5 * MINUTES_IN_MILLISECONDS,
    category: 'aviation',
  },
  {
    id: 'cb624a4e-7c1a-4231-83f1-7dd60771db05',
    order: 5,
    title: 'Hospital do Câncer de Londrina - Gerador de energia',
    slug: 'hospital-do-cancer-de-londrina-gerador-de-energia',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 60 * MINUTES_IN_MILLISECONDS,
    category: 'generator',
  },
];

const tabs: Tab[] = [
  {
    label: 'Tudo',
    projects,
  },
  {
    label: 'Grupo Geradores',
    projects: projects.filter((project) => project.category === 'generator'),
  },
  {
    label: 'Energia Solar',
    projects: projects.filter((project) => project.category === 'solar'),
  },
  {
    label: 'Manutenção',
    projects: projects.filter((project) => project.category === 'maintenance'),
  },
  {
    label: 'Aviação',
    projects: projects.filter((project) => project.category === 'aviation'),
  },
];

export { projects, tabs };
