import React from 'react'
import Hero from '../components/Hero'
import ZoomShowcase from '../components/ZoomShowcase'
import PassionStatement from '../components/PassionStatement'
import KeyFeatures from '../components/KeyFeatures'
import Capabilities from '../components/Capabilities'
import AchieveSuccess from '../components/AchieveSuccess'
import ExploreRange from '../components/ExploreRange'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* <ZoomShowcase /> */}
      <PassionStatement />
      
      <Capabilities />
      <AchieveSuccess />
      <ExploreRange />
      <WhatWeDo />
      <WhyChooseUs />
      <Services />
      <KeyFeatures />
    </div>
  )
}

export default HomePage
