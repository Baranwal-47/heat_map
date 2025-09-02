import React from 'react'
import Header1 from '../components/Header1'
import Hero from '../components/mainpage/Hero'
import AboutHap from '../components/mainpage/AboutHap'
import Explore from '../components/mainpage/Explore'
import KeyObjectives from '../components/mainpage/KeyObjectives'
import Footer1 from '../components/Footer1'
import HowToUse from '../components/mainpage/HowToUse'
import FAQSection from '../components/mainpage/FAQSection'

const Homepage = () => {
  return (
    <div>
      <Header1 />
      <Hero />
      <AboutHap />
      <Explore />
      <KeyObjectives />
      <HowToUse />
      <FAQSection />
      <Footer1 />
      
    </div>
  )
}

export default Homepage
