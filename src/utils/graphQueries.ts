export const projectCard = `{
  project {
    title
    category
    description
    cover
    slices {
      ... on artigo {
        variation {
          ... on default {
            items {
              paragraph
            }
          }
        }
      }
    }
  }
}`;
