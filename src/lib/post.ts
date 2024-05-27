import { gql } from '@apollo/client'
import { createApolloClient } from './apolloClient'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`

export interface Post {
  id: string
  title: string
  content: string
}

export const fetchPosts = async () => {
  const apolloClient = createApolloClient()
  const { data } = await apolloClient.query({ query: GET_POSTS })
  return data.posts.nodes as Post[]
}
