import React from 'react'
import Hero2 from '../components/Hero2'
import ZoomShowcase from '../components/ZoomShowcase'
import PassionStatement from '../components/PassionStatement'
import Capabilities from '../components/Capabilities'
import AchieveSuccess from '../components/AchieveSuccess'
import ExploreRange from '../components/ExploreRange'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'

const HomePage = () => {
  return (
    <div>
      <Hero2 />
      {/* <ZoomShowcase /> */}
      <PassionStatement />
      <Capabilities />
      <AchieveSuccess />
      <ExploreRange />
      <WhatWeDo />
      <WhyChooseUs />
      <Services />
    </div>
  )
}

export default HomePage
