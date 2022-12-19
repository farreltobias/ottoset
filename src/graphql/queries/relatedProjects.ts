import gql from 'graphql-tag';

import { CURSOR_FIELDS } from './fields';

export const BEFORE_CURSOR = gql`
  ${CURSOR_FIELDS}
  query getBeforeProject($cursor: String!) {
    allProjects(
      sortBy: meta_lastPublicationDate_DESC
      last: 1
      before: $cursor
    ) {
      edges {
        ...Cursor
      }
    }
  }
`;

export const AFTER_CURSOR = gql`
  ${CURSOR_FIELDS}
  query getAfterProject($cursor: String!) {
    allProjects(
      sortBy: meta_lastPublicationDate_DESC
      first: 1
      after: $cursor
    ) {
      edges {
        ...Cursor
      }
    }
  }
`;
