'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { filterreducer } from './redux/Alldata';
import Productcard from './components/Productdata';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Purifiers() {
    const windowSize = useWindowSize();
    const dispatch=useDispatch()
    const router=useNavigate()
    const [stval,setvalue]=useState()
    const [renddata,setrendata]=useState("yes")
    const cartdata=useSelector((state)=>state.cart.items)
    console.log(cartdata,'i m cartdone')    
    let count=0;
useEffect(()=>{
    console.log("i m rend data",renddata)

    const pdata=localStorage.getItem('products');
    try{
        const body={
            category:"waterfilter"
       }
            // Fetch data from the API if not available in localStorage
            axios.post("http://localhost:3001/getbycategory",body).then((res)=>{
                console.log(res.data,'i m resdata')
                if(res.data.length>0){           
                    console.log("resdata",res.data.length);
                 localStorage.setItem('products',JSON.stringify(res.data))
                  const filnl=JSON.parse(pdata)
                  console.log(filnl,res.data,"i m datatype");
                  console.log(filnl.length,res.data.length,"i m datatypelen");
                  if(filnl.length>res.data.length  || count==0){
                     setrendata("changed")
                     setvalue(res.data);
                     
                }
                else{
                    setrendata("yes")
                    count+=1;
                }
                }
                else{
                  alert("no products found matching your search")
                  console.log(res.rows,"i am  error")
                }
            
               }).catch((error)=>{
                   console.log(error,"i m catching error" ) 
               })
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
},[]);
console.log(count,"i m here")
console.log(stval,"i m here data ")
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
        <div className='grid grid-cols-12 grid-flow-col'>
         <div className='grid col-span-3 h-screen w-auto bg-green-400'>
               <p>jhfdx</p>
         </div>
         <div className='grid col-span-9'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            )
        })
    }
    </div>
    </div>
        </div>


        
        </>
      )
}
 
}

export default Purifiers