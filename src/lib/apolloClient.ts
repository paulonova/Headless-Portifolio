// lib/apolloClient.js// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
