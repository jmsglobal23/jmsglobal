import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeCategory from '../components/HomeContent/HomeCategory'
import HomeMessage from '../components/HomeContent/HomeMessage'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeHighlight from '../components/HomeContent/HomeHighlight'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeCategory />
      <HomeMessage />
      <HomeBanner />
      <HomeHighlight />
    </div>
  )
}

export default Home
