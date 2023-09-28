import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, getquantity } from '../redux/CartSlice';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import { alertreducer } from '../redux/Alldata';
function Tabproductcard({imageUrl, description,price,productname,uid}) {
    console.log(productname,imageUrl,description,price,uid,"i m product card"); 
    const dispatch=useDispatch()
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
    <div  className="p-4 border border-gray-300 rounded">
          {/* Render item data here */}
          <div>
          <img
          src={imageUrl}
          alt={productname}
          className="w-full h-[50vh] object-contain rounded-md"
        />
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:grid grid-flow-col gap-3 space-x-4 items-center">
        {/* <span className="text-lg font-bold text-black mb-2 md:mb-0 md:text-xl">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> {price}
        </span> */}
        <div className='flex'>
        <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
        <p className='mt-3'>{price}</p>
        </div>
        <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white" onClick={()=>dispatching()}>
          Add to Cart
        </div>
      </div>
          </div>
        </div>
  )
}

export default Tabproductcard