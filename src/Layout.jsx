
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import useWindowSize from './hooks/useWindowsize'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import Sidebarr from './components/Sidebarr'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { allprods } from './redux/Alldata'
function Layout() {
  const wsaize=useWindowSize();
  const[toggle,settoggle]=useState(true);
  const dispatch=useDispatch();
  const [prods,setprods]=useState([])
  const checkside=useSelector((state)=>state.prods.checksidebar);
  console.log("i sm checkside", checkside)

  if(wsaize.width>=375 && wsaize.width<768)
  {
    return (
      <>
      <div className='row overflow-hidden'>
      <Navbar opensidebar={toggle} className="overflow-hidden"/>
      {
  checkside ?
  (
    <div className='column  w-full h-auto p-3 overflow-hidden '>    
    <div className="col-span-auto h-auto bg-black z-10">
  <Sidebarr/>
    </div>
    <div className='col-span-auto  h-screen  rounded-md '>
      <Hero/>
      </div>
      <Footer/>
  
 </div>
  ):(
<>
<div className="col-span-12 h-auto w-auto   overflow-hidden p-4 mt-5 ">

<div className='col-span-auto h-screen w-full'>
      <Hero/>
      </div>
      <Footer/>
    
        </div>
</>
  )
 }
      </div>
      </>
      )
  }
 else if(wsaize.width<=768 && wsaize.width>375)
  {
    return (
      <div className='h-screen bg-[#3F8FF]'>
          <Navbar/>
          <Hero/>
          <Footer/>
          
      </div>
    )
  }  
  else{ 
    return (
      <div className='h-screen bg-[#3F8FF]'>
      <Navbar/>
      <Hero/>
      <Footer/>
      
  </div>

    )
  }
}

export default Layout