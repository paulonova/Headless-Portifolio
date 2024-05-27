import { GET_HERO_HEADER } from '@/graphql/hero-header'
import createApolloClient from '@/lib/apolloClient'
import { HeroHeaderData } from '@/types/heroHeaderType'
import { useEffect, useState } from 'react'

interface NavItemProps {
  id: number
  name: string
  link: string
}

interface HeaderNavProps {
  data: any
}

export const Navbar: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItemProps[]>([])

  useEffect(() => {
    const apolloClient = createApolloClient()
    const data = apolloClient.query<{ HeaderMenu: HeaderNavProps }>({
      query: GET_HERO_HEADER,
    })
  }, [])

  return (
    <div>
      <p>Nav Bar</p>
    </div>
  )
}
