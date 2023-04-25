import React from 'react'

import HomeLogo from '../../assets/homepage.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="homepage-logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
