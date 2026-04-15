import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ZoomShowcase from './components/ZoomShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'  

function App() {
  return (
    <div style={{ backgroundColor: '#111827', color: '#f3f4f6', overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <ZoomShowcase />
      <WhyChooseUs />
      <Services />
      <About />
      
      <Portfolio />
      
      
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
