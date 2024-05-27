import React from 'react'
import { GetServerSideProps } from 'next'
import { createApolloClient } from '@/lib/apolloClient'
import { GET_HERO_HEADER } from '@/graphql/hero-header'
import { HeroHeaderData } from '@/types/heroHeaderType'
import HeroHeader from '@/components/HeroHeader'

interface HomeProps {
  data: HeroHeaderData | null
  error: string | null
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <HeroHeader data={data as HeroHeaderData} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<{ heroHeader: HeroHeaderData }>({
    query: GET_HERO_HEADER,
  })

  return {
    props: {
      data: data,
    },
  }
}

export default Home
