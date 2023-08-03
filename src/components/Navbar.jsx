

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faCoffee,faCircleArrowRight, faShoppingCart, faUserCircle, faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { ToggleSwitch } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { filterreducer } from '../redux/Alldata'
import axios from 'axios'
function Navbar() {
const router=useNavigate()
  const [prod,setprod]= useState(false)

  const [areasWeServe,setAreasWeServe]=useState(false)

  const [data,setData]= useState(false)
  const [data1,setData1]= useState(false)
const dispatch=useDispatch()
 
  const ToggleSwitch=()=>{
    setData(!data)
  }

  const ToggleSwitch1=()=>{
    setData1(!data1)
  }
   const getfilteredprods=(dataval,routedata)=>{
    console.log(dataval,routedata,"i m data route")
    router('/'+routedata)
   }

  return (
<div className='grid grid-cols-12 grid-flow-col space-x-2 shadow-xl py-10 relative'>
<div className='col-span-2 font-bold text-cyan-500 text-2xl'>

            <p className='mx-2'>Sri Vashista</p>      
             </div>  
<div className='col-span-6 grid grid-flow-col'>
<div className='col-span-3 column relative'>
<div className='flex space-x-6 justify-center'>
<p className='text-xl py-1'>Products</p>
<FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch()} size='xl' className='py-2'/>
</div>
{
  
  data ?(
   <>
   <div className=' z-40 shadow-xl grid grid-cols-2  h-auto absolute right-2 top-10 mt-2 bg-white'>
     
     <ul className='justify-start column'>
      <li className='text-left m-3'>

<a href="#" className="block mx-1  whitespace-nowrap text-left hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>getfilteredprods("waterfilter","filters")}>Water purifiers</a>

</li>

<li className='text-left m-3'>

<a href="#" className="block mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>router("/stoves")}>Stoves</a>

</li>
<li className='text-left m-3'>

<a href="#" className="block  whitespace-nowrap  hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>router("/chimneys")}>Chimneys</a>

</li>
<li className='text-left m-3'>

<a href="#" className="block  whitespace-nowrap  mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>router("/frontloadliquid")}>Front Load liquids</a>

</li>
<li className='text-left m-3'>

<a href="#" className="block   whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>router("/topliquid")}>Top Load liquids</a>

</li>
<li className='text-left m-3'>

<a href="#" className="block whitespace-nowrap mx-1 hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white hover:text-blue-500" onClick={()=>router("/washingmachinepowders")}>Washing machine powders</a>

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
<div className='flex space-x-6 justify-center'>
<p className='text-xl py-1'>Services</p>
<FontAwesomeIcon icon={faChevronDown} onClick={()=>ToggleSwitch1()} size='xl' className='py-2'/>
</div>
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
<FontAwesomeIcon icon={faShoppingCart} size='xl' className='my-auto' onClick={()=>router("/cart")}/>
<FontAwesomeIcon icon={faUserCircle} size='xl' className='my-auto'/>
</div>
{
  console.log(data,'i m data')
}

</div>
  )

}




export default Navbar

