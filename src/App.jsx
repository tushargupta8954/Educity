import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'


const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our program' title='What We Offer' />
        <Program />
      </div>
       </div>
  )
}

export default App
