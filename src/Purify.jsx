'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterreducer } from './redux/Alldata';
function Purifiers() {
    const windowSize = useWindowSize();
    const filtersdataa=useSelector((state)=>state.prods.filterdata)
    const [stval,setstval]=useState([])
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(filtersdataa));
    },[filtersdataa]);
console.log(localStorage.getItem('cart'),"i m done")

useEffect(()=>{
    const newdata=localStorage.getItem('cart')
    if(newdata!=null)
    {
       setstval(JSON.parse(newdata))
       console.log("set val",newdata)
    }
},[localStorage.getItem('cart')])
useEffect(()=>{
    console.log("set val len",stval.length)
})
if(windowSize.width<=425)
{
    return (
   <>


   </>
      )
}
else{
    return (
        <>
        <div className='grid grid-cols-12 grid-flow-col h-screen w-full'>
            <div className='col-span-3 h-screen w-full bg-green-200'>
<h1>jlo</h1>
            </div>
        
            <div className='grid grid-flow-row col-span-9 h-auto'>
            {
                stval?.map((val,index)=>(
                    <>
                    
                 <div className='shadow-xl w-full  h-auto grid grid-flow-col col-span-9 '>
<div className='col-span-4 m-5'>
<img src={val?.imgpath} />
</div>
<div className='col-span-5 column  bg-red-900'>
<h1>{val?.productname}</h1>
<h1>{val?.productname}</h1>
<h1>{val?.productname}</h1>
</div>
                 </div>


                   
                   
                    </>
                ))
            }
         </div>
         
        
</div>
        </>
      )
}
 
}

export default Purifiers