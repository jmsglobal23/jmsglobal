import React from 'react'
import Hero from '../components/Others/Hero'
import { contactHero } from '../assets/heroData'
import ContactCard from '../components/ContactContent/ContactCard'
import ContactForm from '../components/ContactContent/ContactForm'

const Contact = () => {
  return (
    <div>
      <Hero contactHero={contactHero} />
      <ContactCard />
      <ContactForm />
    </div>
  )
}

export default Contact
