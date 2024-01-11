// ProductCard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart, getquantity } from '../redux/CartSlice';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import useWindowSize from '../hooks/useWindowsize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import { alertreducer } from '../redux/Alldata';
const ProductCard = ({imageUrl, description,price,productname,uid})  => {
    console.log(productname,imageUrl,description,price,uid,"i m product card"); 
    const windowSize = useWindowSize();
    // npm cache clean --force
    const dispatch=useDispatch()
    const router=useNavigate()
    const dispatching=()=>{
     const obj={
        description:description,
        imageUrl:imageUrl,
        price:price,
        productname:productname,
        uid:uid,
        quantity:1
        

     }
     

     dispatch(addToCart(obj));
     setTimeout(() => {
      dispatch(alertreducer(false))
    }, 3000);
     
    }
    
    
  return (
  
    <>
    
    <div className="shadow-lg rounded-lg md:p-8 relative lg:h-[97%] w-auto relative xl:p-10 h-full relative" onClick={()=> router(`/product/${uid}`)}>
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={productname}
          className="w-full h-[50vh] object-contain rounded-md"
        />
      </div>
      <h3 className='font-bold text-xl '>{productname}</h3>
      <div className='grid grid-cols-12 grid-flow-col justify-content-start w-auto '>
        
        
      <div className='flex mt-4 space-x-2'>
        <div className='flex col-span-6 space-x-1'>
        <FontAwesomeIcon icon={faIndianRupeeSign} className='my-1'/>
        <p>{price}</p>
        </div>
        <div className='bg-black whitespace-nowrap h-10 px-3 rounded-md'>
         <p className='my-1 text-white'>Add to cart</p>
          </div>
      </div>
      </div>
   
    
    </div>
    </>
  );
};

export default ProductCard;
