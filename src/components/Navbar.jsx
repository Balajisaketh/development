import React, { useState } from 'react'
import {BsCart,BsSearch} from "react-icons/bs";

function Navbar() {
const[open,setopen]=useState(false)
  return (
    <div className='grid grid-cols-12 gap-3 py-2 bg-black'>
      <div className='grid grid-flow-col col-span-4 bg-black py-4 my-auto'>
    <a className='text-white'>Home</a>
    <a className='text-white'>Products</a>
    <a className='text-white'>Contact us</a>
      </div>
     
   
      <div className='grid grid-flow-col my-auto relative col-span-6 rounded-full relative'>
        <BsSearch color='grey' className='absolute top-3 right-5' size={"25px"}/>
   <input type='search' className='rounded-lg border-solid-900 border-black text-center w-full py-3' placeholder='Search For Products '/>
      </div>
      <div className='grid grid-flow-col col-span-2 bg-black py-4 my-auto'>
   <BsCart size={"40px"} color="white"/>
      </div>
     </div>
    
  )
}

export default Navbar