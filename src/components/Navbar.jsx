

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.jpg'
  import { faCoffee,faCircleArrowRight, faShoppingCart, faUserCircle, faArrowDown, faChevronDown, faHamburger, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { ToggleSwitch } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { sidebarreducer } from '../redux/Alldata'
import { filterreducer } from '../redux/Alldata'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getquantity } from '../redux/CartSlice'
import useWindowSize from '../hooks/useWindowsize'
function Navbar({opensidebar}) {
  console.log("ia m check",opensidebar)
const router=useNavigate()
  const [prod,setprod]= useState(false)
let cartItems=useSelector((state)=>state.cart.items)
// Calculate the total quantity of cart items
const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
const wsaize=useWindowSize();


  const [areasWeServe,setAreasWeServe]=useState(false)

  const [data,setData]= useState(false)
  const [data1,setData1]= useState(false)
const dispatch=useDispatch()
const [sidebarstatus,setsidebarstatus]=useState(false)
 
  const ToggleSwitch=()=>{
    setData(!data)
  }

  const ToggleSwitch1=()=>{
    setData1(!data1)
  }
  const togglebar=()=>{
       setsidebarstatus(!sidebarstatus)
       dispatch(sidebarreducer(sidebarstatus))
  }
  
   const getfilteredprods=(dataval,routedata)=>{
    console.log(dataval,routedata,"i m data route")
    router('/'+routedata + "?category=" + dataval)
   }
   if(wsaize.width>=375 && wsaize.width<768)
   {
    return(
      <div className='grid grid-cols-10 overflow-x-hidden grid-flow-col shadow-lg   border border-10  border-gray  h-14 relative '>
  <div className='col-span-12 flex justify-center items-center absolute inset-0'>
    <p className='w-auto whitespace-nowrap text-center font-bold text-cyan-500 py-4'>Sri Vashista</p>
  </div>
  <div className='absolute right-7 flex top-4'>
    {/* Your content here */}
    
    <p className='text-red-900'>{totalQuantity}</p>
        <FontAwesomeIcon icon={faShoppingCart} size='xl' className='my-auto' onClick={()=>router("/cart")}/>
    
  </div>
  <div className='absolute left-2' onClick={()=>togglebar()}>
    {/* Your content here */}
    <FontAwesomeIcon icon={faBars} size='lg' className='mt-4 mx-2' />
  </div>
     
</div>

    )
   
   }
   else if(wsaize.width>=768 && wsaize.width<=1023)
   {
    return (
      <div className='grid grid-cols-12 grid-flow-col space-x-2 shadow-xl py-10 relative'>
      <div className='col-span-2 font-bold text-cyan-500 text-2xl'>
      
      <img src={logo} className='w-20 h-20 mx-10' onClick={()=>router("/")}/>     
                   </div>  
      <div className='col-span-6 grid grid-flow-col'>
      <div className='col-span-3 column relative'>
      <div className='flex space-x-6 justify-center'>
      <p className='text-xl py-1 mt-4'>Products</p>
      <FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch()} size='xl' className='py-5'/>
      </div>
      {
        
        data ?(
         <>
         <div className=' z-40 shadow-xl grid grid-cols-2  h-auto absolute right-2 top-10 mt-2 bg-white'>
           
           <ul className='justify-start column'>
            <li className='text-left m-3'>
      
      <a href="#" className="block mx-1  whitespace-nowrap text-left hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("waterfilter","waterfilters")}>Water purifiers</a>
      
      </li>
      
      <li className='text-left m-3'>
      
      <a href="#" className="block mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("stove","stove")}>Stoves</a>
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block  whitespace-nowrap  hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("chimneys", "chimneys")}>Chimneys</a>
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block  whitespace-nowrap   hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("geysers", "geysers")}>Geysers</a>
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block  whitespace-nowrap   hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("frontload", "frontloadliquids")}>Front Load liquids</a>
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block   whitespace-nowrap  hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("topload","toploadliquids")}>Top Load liquids</a>
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block whitespace-nowrap hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("washingpowders","washingpowders")}>Washing powders</a>
      
      </li>
      </ul>
         </div>
         </>
      
        ):(
      <>
      </>
        )
      } 
      </div>
      <div className='col-span-3 column relative'>
      <p className='text-lg font-bold my-3 text-cyan-500'>Sri Vashista Enterprises</p>
      {/* <div className='flex space-x-6 justify-center'>
      <p className='text-xl py-1'>Services</p>
      <FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch1()} size='xl' className='py-2'/>
      </div> */}

      {
        
        data1 ?(
         <>
         <div className=' z-40 shadow-xl grid grid-cols-2  w-auto h-auto absolute right-2 top-10 mt-2 bg-white'>
           
           <ul className='justify-start column'>
            <li className='text-left m-3'>
      
      <a href="#" className="block  whitespace-nowrap text-left hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500 ">Washing Machine Servicing</a>
      
      </li>
      
      <li className='text-left m-3'>
      
      <a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500">Water Filter Servicing</a>
      
      
      </li>
      <li className='text-left m-3'>
      
      <a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500">Mineral Water plant</a>
      
      </li>
      </ul>
         </div>
         </>
      
        ):(
      <>
      </>
        )
      } 
      </div>
      </div>
      <div className='col-span-4 grid grid-flow-col'>
      <h1 className='m-auto text-lg'>Your orders</h1>
      
      
      <p className='text-red-900'>{totalQuantity}</p>
      <FontAwesomeIcon icon={faShoppingCart} size='xl' className='my-auto' onClick={()=>router("/cart")}/>
      {/* <FontAwesomeIcon icon={faUserCircle} size='xl' className='my-auto'/> */}
      </div>
      {
        console.log(data,'i m data')
      }
      
      </div>
        )
   
   }
    else{
      return (
        <div className='grid grid-cols-12 grid-flow-col space-x-2 shadow-xl py-10 relative'>
        <div className='col-span-2 font-bold text-cyan-500 text-2xl'>
        
                    <img src={logo} className='w-20 h-20 mx-10' onClick={()=>router("/")}/>  

                     </div>  
        <div className='col-span-6 grid grid-flow-col'>
        <div className='col-span-3 column relative'>
        <div className='flex space-x-6 justify-center'>
        <p className='text-xl py-1 mt-3'>Products</p>
        <FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch()} size='xl' className='py-5'/>
        </div>
        {
          
          data ?(
           <>
           <div className=' z-40 shadow-xl grid grid-cols-2  h-auto absolute right-2 top-10 mt-2 bg-white'>
             
             <ul className='justify-start column'>
              <li className='text-left m-3'>
        
        <a href="#" className="block mx-1  whitespace-nowrap text-left hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("waterfilter","waterfilters")}>Water purifiers</a>
        
        </li>
        
        <li className='text-left m-3'>
        
        <a href="#" className="block mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("stove","stove")}>Stoves</a>
        
        </li>
        <li className='text-left m-3'>
        
        <a href="#" className="block  whitespace-nowrap  hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("chimneys", "chimneys")}>Chimneys</a>
        
        </li>
        <li className='text-left m-3'>
      
      <a href="#" className="block  whitespace-nowrap   hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("geysers", "geysers")}>Geysers</a>
      
      </li>
        <li className='text-left m-3'>
        
        <a href="#" className="block  whitespace-nowrap  mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("frontload", "frontloadliquids")}>Front Load liquids</a>
        
        </li>
        <li className='text-left m-3'>
        
        <a href="#" className="block   whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("topload","toploadliquids")}>Top Load liquids</a>
        
        </li>
        <li className='text-left m-3'>
        
        <a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("washingpowders","washingpowders")}>Washing machine powders</a>
        
        </li>
        </ul>
           </div>
           </>
        
          ):(
        <>
        </>
          )
        } 
        </div>
        <div className='col-span-3 column relative'>
          <p className='text-2xl font-bold my-3 text-cyan-500'>Sri Vashista Enterprises</p>
        {/* <div className='flex space-x-6 justify-center'>
        <p className='text-xl py-1'>Services</p>
        <FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch1()} size='xl' className='py-2'/>
        </div> */}
        {
          
          data1 ?(
           <>
           <div className=' z-40 shadow-xl grid grid-cols-2  w-auto h-auto absolute right-2 top-10 mt-2 bg-white'>
             
             <ul className='justify-start column'>
              <li className='text-left m-3'>
        
        <a href="#" className="block  whitespace-nowrap text-left hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500 ">Washing Machine Servicing</a>
        
        </li>
        
        <li className='text-left m-3'>
        
        <a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500">Water Filter Servicing</a>
        
        
        </li>
        <li className='text-left m-3'>
        
        <a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500">Mineral Water plant</a>
        
        </li>
        </ul>
           </div>
           </>
        
          ):(
        <>
        </>
          )
        } 
        </div>
        </div>
        <div className='col-span-4 grid grid-flow-col'>
        <h1 className='m-auto text-lg' onClick={()=>router("/orders")}>Your orders</h1>
        <p className='text-red-900'>{totalQuantity}</p>
        <FontAwesomeIcon icon={faShoppingCart} size='xl' className='my-auto' onClick={()=>router("/cart")}/>
        {/* <FontAwesomeIcon icon={faUserCircle} size='xl' className='my-auto'/> */}
        </div>
        {
          console.log(data,'i m data')
        }
        
        </div>
          )
    }
  

}




export default Navbar

