import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our program' title='What We Offer' />
        <Program />
        <About/>
        <Title subTitle='Gallery' title='Campus photos' />
        <Campus />
       <Title subTitle='TESTIMONIALS' title='What Student Says ' />
       <Testimonial />
       <Title subTitle='Contact Us' title='Get in Touch' />
       <Contact />

      </div>
       </div>
  )
}

export default App
