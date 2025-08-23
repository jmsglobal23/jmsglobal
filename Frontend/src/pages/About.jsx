import React from 'react'
import Hero from '../components/Others/Hero'
import { aboutHero } from '../assets/heroData'
import AboutChooseUs from '../components/AboutContent/AboutChooseUs'
import Testimonials from '../components/Others/Testimonials'

const About = () => {
  return (
    <div>
      <Hero aboutHero={aboutHero}/>
      <AboutChooseUs />
      <Testimonials />
    </div>
  )
}

export default About
