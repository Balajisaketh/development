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
    <div className="h-auto w-auto bg-white shadow-lg rounded-lg p-4 md:p-8 relative lg:h-auto relative p-10 xl:p-10 h-full relative" onClick={()=> router(`/product/${uid}`)}>
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={productname}
          className="w-full h-[50vh] object-contain rounded-md"
        />
      </div>
      <div className="mb-5">
        <h3 className="text-xl font-bold">{productname}</h3>
        
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:grid grid-flow-col gap-3 space-x-4 items-center">
        {/* <span className="text-lg font-bold text-black mb-2 md:mb-0 md:text-xl">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> {price}
        </span> */}
        <div className='flex'>
        <FontAwesomeIcon icon={faIndianRupeeSign} className=" mx-1 mt-4"/>
        <p className='mt-3'>{price}</p>
        </div>
        <div className="rounded-md  p-3  bg-orange-400  text-white" onClick={()=>dispatching()}>
          Add to Cart
        </div>
      </div>
    
    </div>
    </>
  );
};

export default ProductCard;
