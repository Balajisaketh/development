// ProductCard.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
const ProductCard = ({imageUrl, description,price,productname})  => {
    console.log(productname,imageUrl,description,price,"i m product card");
    const dispatch=useDispatch()
    const dispatching=()=>{
     const obj={
        description:description,
        imageUrl:imageUrl,
        price:price,
        productname:productname

     }
     dispatch(addToCart(obj));
    }
  return (
    <div className="h-auto bg-white shadow-lg rounded-lg p-4 md:p-8 lg:h-full p-10 xl:p-10 h-full">
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={productname}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
      <div className="mb-2">
        <h3 className="text-xl font-bold">{productname}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:grid grid-flow-col gap-3 space-x-4 items-center">
        <span className="text-lg font-bold text-indigo-600 mb-2 md:mb-0 md:text-xl">
          ${price}
        </span>
        <button className="px-4 py-2 rounded-md bg-indigo-600 text-white" onClick={()=>dispatching()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
