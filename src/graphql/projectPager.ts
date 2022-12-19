import { client } from 'prismicio';
import { ProjectConnectionConnection } from 'src/types/generated/graphql';

import { convertProject, Project } from '@utils/convertProject';

import { PROJECT_PAGER } from './queries';
import { AllProjectsQuery } from './types';

export type ProjectsPage = {
  pageInfo: ProjectConnectionConnection['pageInfo'];
  projects: Project[];
};

export const projectPager = async (cursor = ''): Promise<ProjectsPage> => {
  const {
    data: {
      allProjects: { pageInfo, edges },
    },
  } = await client.query<AllProjectsQuery>({
    query: PROJECT_PAGER,
    variables: {
      cursor,
    },
  });

  const projects = edges?.reduce((acc: Project[], project) => {
    const convertedProject = convertProject(project);

    if (convertedProject) {
      acc.push(convertedProject);
    }

    return acc;
  }, []);

  return { pageInfo, projects: projects || [] };
};
