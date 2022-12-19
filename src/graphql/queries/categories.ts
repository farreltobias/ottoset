import gql from 'graphql-tag';

export const CATEGORIES = gql`
  query getCategories($cursor: String = "") {
    allProjects(sortBy: category_DESC, first: 10, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          category
        }
      }
    }
  }
`;
