import gql from 'graphql-tag';

import { PROJECT_FIELDS, SLICES_FIELDS } from './fields';

export const SINGLE_PROJECT = gql`
  ${PROJECT_FIELDS}
  ${SLICES_FIELDS}
  query getProject($slug: String!) {
    project(uid: $slug, lang: "pt-br") {
      ...Project
      ...Slices
    }
  }
`;
