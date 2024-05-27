import { gql } from '@apollo/client';

export const GET_HERO_HEADER = gql`
    query HeroHeader {
      page(id: "15", idType: DATABASE_ID) {
        heroheader {
          headTitle
          descriptionArea
          imageHeader {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
`;
