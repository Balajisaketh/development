// ProductCard.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, getquantity } from '../redux/CartSlice';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
<<<<<<< Updated upstream
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import { alertreducer } from '../redux/Alldata';
import { useNavigate} from 'react-router-dom';
>>>>>>> Stashed changes
const ProductCard = ({imageUrl, description,price,productname,uid})  => {
    console.log(productname,imageUrl,description,price,uid,"i m product card"); 
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
    }
<<<<<<< Updated upstream
=======
    const navigateToProductDetail = () => {
      // Construct the URL for the product details page (adjust the route path as needed)
      const productDetailURL = `/product/${uid}`;
  
      // Use the router function to navigate to the product details page
      router(productDetailURL);
    };
    
>>>>>>> Stashed changes
  return (
    <>
<<<<<<< Updated upstream
    <div className="h-auto bg-white shadow-lg rounded-lg p-4 md:p-8 relative lg:h-auto relative p-10 xl:p-10 h-full relative">
=======

    <div className="h-fit-content w-auto bg-white shadow-lg rounded-lg p-4 md:p-8 relative lg:h-auto relative p-10 xl:p-10 h-full relative" onClick={()=>navigateToProductDetail()}>
>>>>>>> Stashed changes
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={productname}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
      <div className="mb-5">
        <h3 className="text-xl font-bold">{productname}</h3>
        
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:grid grid-flow-col gap-3 space-x-4 items-center">
<<<<<<< Updated upstream
        <span className="text-lg font-bold text-black mb-2 md:mb-0 md:text-xl">
          ${price}
        </span>
        <button className="px-4 py-2 rounded-full bg-orange-400  text-white" onClick={()=>dispatching()}>
=======
        {/* <span className="text-lg font-bold text-black mb-2 md:mb-0 md:text-xl">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> {price}
        </span> */}
        <div className='flex'>
        <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
        <p className='mt-3'>{price}</p>
        </div>
        <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white" onClick={()=>dispatching()}>
>>>>>>> Stashed changes
          Add to Cart
        </button>
      </div>
    
    </div>
    </>
  );
};

export default ProductCard;
