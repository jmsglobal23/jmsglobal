import React from 'react'
import Hero from '../components/Others/Hero'
import { aboutHero } from '../assets/heroData'
import AboutChooseUs from '../components/AboutContent/AboutChooseUs'
import AboutUs from '../components/AboutContent/AboutUs'
import AboutTestimonials from '../components/AboutContent/AboutTestimonials'
import AboutHighlight from '../components/AboutContent/AboutHighlight'

const About = () => {
  return (
    <div>
      <Hero aboutHero={aboutHero}/>
      <AboutUs />
      <AboutHighlight />
      <AboutChooseUs />
      <AboutTestimonials />
    </div>
  )
}

export default About
