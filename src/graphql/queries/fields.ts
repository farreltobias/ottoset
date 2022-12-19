import gql from 'graphql-tag';

export const SLICES_FIELDS = gql`
  fragment Slices on Project {
    slices {
      ... on ProjectSlicesArtigo {
        label
        type
        variation {
          ... on ProjectSlicesArtigoDefault {
            primary {
              title
              image
            }
            items {
              paragraph
            }
          }
        }
      }
    }
  }
`;

export const PARAGRAPHS_FIELDS = gql`
  fragment Paragraph on Project {
    slices {
      ... on ProjectSlicesArtigo {
        variation {
          ... on ProjectSlicesArtigoDefault {
            items {
              paragraph
            }
          }
        }
      }
    }
  }
`;

export const PROJECT_FIELDS = gql`
  fragment Project on Project {
    title
    category
    description
    cover
    _meta {
      uid
    }
  }
`;

export const CURSOR_FIELDS = gql`
  fragment Cursor on ProjectConnectionEdge {
    cursor
    node {
      _meta {
        uid
      }
    }
  }
`;
