import { Navbar } from '@/components/HeadMenu'
import { createApolloClient } from '@/lib/apolloClient'
import '@/styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

const client = createApolloClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
