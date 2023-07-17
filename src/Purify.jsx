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
import Productcard from './components/Productcard';
function Purifiers() {
    const windowSize = useWindowSize();
    const filtersdataa=useSelector((state)=>state.prods.filterdata)
    const [stval,setstval]=useState([])
console.log(filtersdataa,"Filter")  
useEffect(()=>{
  console.log("Purifiers",filtersdataa)
},[])

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
        {
    filtersdataa?.map((val,index)=>{
        console.log(val?.imgpath,"i m path");

    })
}
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
{
    filtersdataa?.map((val,index)=>(
        <Productcard key={index} title={val?.price} description={val?.description} imageUrl={val?.imgpath}/>
    ))
}
</div>
        
        </>
      )
}
 
}

export default Purifiers