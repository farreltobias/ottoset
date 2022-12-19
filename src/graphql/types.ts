import { Query } from 'src/types/generated/graphql';

export type AllProjectsQuery = {
  allProjects: Query['allProjects'];
};

export type ProjectQuery = {
  project: Query['project'];
};
