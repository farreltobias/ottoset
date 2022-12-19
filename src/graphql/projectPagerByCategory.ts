import { client } from 'prismicio';

import { convertProject, Project } from '@utils/convertProject';

import { PROJECT_PAGER_BY_CATEGORY } from './queries/projectPagerByCategory';
import { ProjectsPage } from './projectPager';
import { AllProjectsQuery } from './types';

export const projectPagerByCategory = async (
  category: string,
  cursor = '',
): Promise<ProjectsPage> => {
  const {
    data: {
      allProjects: { pageInfo, edges },
    },
  } = await client.query<AllProjectsQuery>({
    query: PROJECT_PAGER_BY_CATEGORY,
    variables: {
      cursor,
      category,
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
