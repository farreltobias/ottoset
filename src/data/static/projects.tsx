import { StaticImageData } from 'next/legacy/image';

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

const projects = [
  {
    id: 'ee7b3938-65da-45f6-ae76-81d93091b5af',
    title: 'Hoftalon - Hospital de Olhos de Londrina',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: MINUTES_IN_MILLISECONDS,
    type: 'maintenance',
  },
  {
    id: 'd86a7845-b4de-4303-b73e-f9857333bca6',
    title: 'Segrpro - Gerador de energia',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 10 * MINUTES_IN_MILLISECONDS,
    type: 'generator',
  },
  {
    id: 'ac1ffae3-f845-4a65-9ce4-68e0af441bf4',
    title: 'Hospital São Rafael - Energia Solar',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 15 * MINUTES_IN_MILLISECONDS,
    type: 'solar',
  },
  {
    id: '41543e41-f706-47be-a424-288011a13f22',
    title: 'Hospital São Rafael - Aviação',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 5 * MINUTES_IN_MILLISECONDS,
    type: 'aviation',
  },
  {
    id: 'cb624a4e-7c1a-4231-83f1-7dd60771db05',
    title: 'Hospital do Câncer de Londrina - Gerador de energia',
    img: project,
    description: 'Consultoria, Instalação, Manutenção',
    duration: 60 * MINUTES_IN_MILLISECONDS,
    type: 'generator',
  },
].map(({ id, ...rest }) => ({
  id,
  link: `/projetos/${id}`,
  ...rest,
})) as Project[];

const tabs: Tab[] = [
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

export { projects, tabs };
