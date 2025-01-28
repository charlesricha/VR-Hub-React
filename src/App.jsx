import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Aboutus from './components/Aboutus'


const App = () => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-purple-500 height-screen p-8 text-white font-outfit'>
    <Hero/>
    <Aboutus/>
    <Products/>
    </div>
  )
}

export default App
