import React from 'react';
import AddToCartButton from './Addcartbtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ title, imageUrl, description }) => {
    console.log(title, imageUrl, description,"ProductCard");
  return (
    // <div className="rounded-lg overflow-hidden shadow-lg">
    //   <img className="w-full h-48 object-cover object-center" src={imageUrl}  />
    //   <div className="p-4">
    //     <h3 className="text-xl font-semibold mb-2">{title}</h3>
    //     <p>{description}</p>
    //     <AddToCartButton className="mt-4"/>
    //   </div>
    // </div>
    <div className="w-full relative group card bg-white">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <img src={imageUrl} className="w-full h-full"  />
        </div>
       
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
             
            </li>
            <li
            
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
              </span>
            </li>
            <li
              
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
             
            </li>
           
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {title}
          </h2>
          <p className="text-[#767676] text-[14px]">${description}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;