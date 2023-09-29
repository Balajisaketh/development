import React from 'react'
import { Fade,Bounce,Zoom } from 'react-reveal'
import image from '../images/ttt.jpg'
import Logo from '../images/logo.jpg'
import mobile from '../images/edit.jpg'
import Typed from 'react-typed';
function Banner() {
  return (
     <>
     <div className=' sm:block object-cover bg-cover bg-center h-screen w-screen  md:hidden'style={{ backgroundImage:`url(${mobile})` }}>
     <Bounce top delay={2000}>
      <img src={Logo} className="rounded-full   w-20 shadow-lg shadow-teal-800 h-20 my-7  absolute top-9 left-20"/>
      </Bounce>
      <Typed style={{color:'white',fontSize:"40px",fontWeight:"bolder"}} className='typeeffect absolute top-60 left-10 text-center'
                    strings={[
                      '  Welcome To',
                      'Sri Venkateswara Home Appliances',
                  ]}
                    typeSpeed={40}
                    fadeOut={true}
                    fadeOutDelay={700}
                    backSpeed={50}
                    showCursor={false}
 
                />
                {/* hi */}
                
   <Fade left duration={2500} delay={4000}>
       <button type="button" className="w-100 text-bold z-10 absolute top-[60vh] left-25    text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button>
       </Fade>
     </div>
    {/* // home screnn for tabs and more */}
    <div className='xs:hidden sm:hidden md:block w-screen  bg-cover bg-center h-screen mr-3 relative ' style={{ backgroundImage:`url(${image})` }}>
      
      <Bounce top delay={2000}>
      <img src={Logo} className="rounded-full   w-20 shadow-lg shadow-teal-800 h-20 my-7  absolute top-9 left-20"/>
      </Bounce>
  <Typed style={{color:'white',fontSize:"40px",fontWeight:"bolder"}} className='typeeffect absolute top-60 left-20'
                    strings={[
                      ' ..... Welcome To',
                      'Sri Venkateswara Home Appliances',
                  ]}
                    typeSpeed={40}
                    fadeOut={true}
                    fadeOutDelay={700}
                    backSpeed={50}
                    showCursor={false}
                />
        
      <Fade left duration={2500} delay={4000}>
       <button type="button" className="w-100 text-bold z-10 absolute top-80 left-40 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Shop Now</button>
       </Fade>
       
    </div>
    </>
   
  )
}

export default Banner