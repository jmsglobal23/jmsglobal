import React from 'react'
import EventItems from '../../components/EventContent/EventItems'
import Hero from '../../components/Others/Hero'
import { eventHero } from '../../assets/heroData'

const Events = () => {
  return (
    <div>
      <Hero eventHero={eventHero} />
      <EventItems />
    </div>
  )
}

export default Events
