import React from 'react'
import Hero from '../components/Hero'
import ZoomShowcase from '../components/ZoomShowcase'
import PassionStatement from '../components/PassionStatement'
import Capabilities from '../components/Capabilities'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ZoomShowcase />
      <Capabilities />
      <PassionStatement />
      <div style={{ height: '60px' }}></div>
      <WhyChooseUs />
      <Services />
    </div>
  )
}

export default HomePage
