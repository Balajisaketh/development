import React, { useState } from 'react'
import {BsCart,BsSearch} from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
function Navbar() {
const[open,setopen]=useState(false)
const logindata=useSelector((state)=>state.loginreducer.logindata)
  console.log(logindata,"i am logindata from reducer");
  const regdata=useSelector((state)=>state.regreducer.regdata)
  console.log(regdata,"i am regdata from reducer");
  const imagedata=regdata.path
  console.log(imagedata,"i am imagedata from")
  return (
    <div className='grid grid-cols-12 gap-3 py-2 bg-black'> 
      <div className='grid grid-flow-col col-span-4 bg-black py-4 my-auto'>
    <a className='text-white'>Home</a>
    <a className='text-white'>Products</a>
    <a className='text-white'>Contact us</a>
      </div> 
      <div className='col-span-5  my-auto'> 
        <input type='search' placeholder="search products" className='w-full p-2 rounded-lg text-left text-xl'/>
      </div>
      <div className='col-span-3 space-x-2 my-auto'>
        <BsCart color='white' className='align-middle' size={"40px"}/>
        <div className='rounded h-30 bg-red-900'>
           <img src={imagedata} className='h-auto'/>
        </div>
     </div> 
     </div>
  )
}

export default Navbar