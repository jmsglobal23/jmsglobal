import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeCategory from '../components/HomeContent/HomeCategory'
import HomeMessage from '../components/HomeContent/HomeMessage'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeHighlight from '../components/HomeContent/HomeHighlight'
import HomeCertification from '../components/HomeContent/HomeCertification'
import HomeBenefits from '../components/HomeContent/HomeBenefits'
import Testimonials from '../components/Others/Testimonials'

const Home = () => {
  return (
    <div>
      <>
        <title>Find Perfect Export Company</title>
        <meta name="description" content='From Indian Farms to Global Markets – Freshness You Can Trust' />
        <meta name="keywords" content='Fruits Exports, Vegetable Exports' />
      </>
      <HomeHero />
      <HomeCategory />
      <HomeMessage />
      <HomeBanner />
      <HomeHighlight />
      <HomeCertification />
      <HomeBenefits />
      <Testimonials />
    </div>
  )
}

export default Home
