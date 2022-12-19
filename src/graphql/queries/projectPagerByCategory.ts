import gql from 'graphql-tag';

import { PARAGRAPHS_FIELDS, PROJECT_FIELDS } from './fields';

export const PROJECT_PAGER_BY_CATEGORY = gql`
  ${PROJECT_FIELDS}
  ${PARAGRAPHS_FIELDS}
  query getProjects($cursor: String = "", $category: String!) {
    allProjects(
      sortBy: meta_lastPublicationDate_DESC
      first: 6
      after: $cursor
      where: { category: $category }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        cursor
        node {
          ...Project
          ...Paragraph
        }
      }
    }
  }
`;
