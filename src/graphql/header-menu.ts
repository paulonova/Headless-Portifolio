import { gql } from '@apollo/client'

export const GET_HEADER_MENU = gql`
  query HeaderMenu {
    menus {
      nodes {
        name
        menuItems {
          nodes {
            path
            label
          }
        }
      }
    }
  }
`
