
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function Layout() {
  
  return (
    <div className='h-screen'>
        <Navbar/>
        <Hero/>
        <Footer/>
        
    </div>
  )
}

export default Layout