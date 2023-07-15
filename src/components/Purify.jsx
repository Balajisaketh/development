'use client';
import React from 'react'
import useWindowSize from '../hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterreducer } from '../redux/Alldata';
function Purifiers() {
    const windowSize = useWindowSize();
    const filtersdataa=useSelector((state)=>state.prods.filterdata)
console.log(filtersdataa,"i m in");
if(windowSize.width<=425)
{
    return (
   <></>
      )
}
else{
    return (
        <>
        {
            filtersdataa?.map((val,index)=>(
                <div className='shadow-xl column w-3/4 mx-auto'>
                <h1 key={index}>{val?.productname}</h1>
                <h1 key={index}>{val?.price}</h1>
                <p key={index}>{val?.description}</p>
                </div>
                
            ))
        }

        </>
      )
}
 
}

export default Purifiers