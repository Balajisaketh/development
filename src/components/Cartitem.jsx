// CartItem.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from "../hooks/useWindowsize";
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
const CartItem = ({ product, decrement,increment, deleteItem }) => {
  console.log("i am cart cheking prod",product)
  const wsaize=useWindowSize();
console.log(wsaize,"i m deteted")
    if(wsaize.width<=375 && wsaize.width<768)
{
    return (
      // b
   <>
    <div className="grid grid-flow-col col-span-12   my-auto p-1 mx-1 shadow-md rounded-md h-auto">
  <div className="grid col-span-1 ">
<img src={product?.imageUrl} alt={product.productname} className="h-[80px] mx-auto w-[100px] justify-self-end"/>
  </div>
  <div className="col-span-2 grid grid-flow-row w-[80%]">
<p className="justify-self-start mx-2 text-left">{product?.productname}</p>
<p className="justify-self-start mx-1 "> 
<span>  <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/>   </span>
{product?.price*product?.quantity}
</p>

  </div>
  <div className="col-span-2  h-full">
<>
<div className="grid grid-flow-col justify-center  mt-5 rounded border border-black w-[100px]  py-3">
 
 <FontAwesomeIcon icon={faMinus} className='mt-1 mx-2'  onClick={()=>decrement(product?.uid)}/>
       <p >{product?.quantity}</p>
      <FontAwesomeIcon icon={faPlus} className='mt-1 mx-2' onClick={()=>increment(product?.uid)}/>
</div>
</>
  </div>
  <div className="col-span-2  h-full mx-3">
<>
<FontAwesomeIcon icon={faTrash} className="mt-6" size="xl" color="red" onClick={()=>deleteItem(product?.uid)}/>
</>
  </div>
 </div>

   </>
      )
}
else if(wsaize.width>=768 && wsaize.width<=1023){
  console.log("entered here");
 return(
  <div className="grid grid-flow-col col-span-9  my-auto p-1 mx-6 shadow-md rounded-md h-auto">
  <div className="grid col-span-1 ">
<img src={product?.imageUrl} alt={product.productname} className="h-[80px] mx-auto w-[60px] justify-self-end"/>
  </div>
  <div className="col-span-2 grid grid-flow-row w-auto">
<p className="justify-self-start mx-2 text-left">{product?.productname}</p>
<p className="justify-self-start mx-1"> 
<span>  <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/>   </span>
{product?.price*product?.quantity}
</p>

  </div>
  <div className="col-span-2  h-full">
<>
<div className="grid grid-flow-col justify-center mx-auto mt-5 rounded border border-black w-[130px] space-x-2 py-3">
 
 <FontAwesomeIcon icon={faMinus} className='mt-1 '  onClick={()=>decrement(product?.uid)}/>
       <p >{product?.quantity}</p>
      <FontAwesomeIcon icon={faPlus} className='mt-1' onClick={()=>increment(product?.uid)}/>
</div>
</>
  </div>
  <div className="col-span-2  h-full">
<>
<FontAwesomeIcon icon={faTrash} className="mt-6" size="xl" color="red" onClick={()=>deleteItem(product?.uid)}/>
</>
  </div>
 </div>
 )
 
}
else if(wsaize.width>=1024)
  {

  return (
 <div className="grid grid-flow-col col-span-9  my-auto p-1 mx-6 shadow-md rounded-md h-auto">
  <div className="grid col-span-1 ">
<img src={product?.imageUrl} alt={product.name} className="h-[80px] mx-auto w-[60px] justify-self-end"/>
  </div>
  <div className="col-span-2 grid grid-flow-row w-[200px]">
<p className="justify-self-start mx-2 text-left  text-lg font-bold">{product?.productname}</p>
<p className="justify-self-start mx-2"> 
<span>  <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/>   </span>
{product?.price*product?.quantity}
</p>

  </div>
  <div className="col-span-2  h-full">
<>
<div className="grid grid-flow-col justify-center mx-auto mt-5 rounded border border-black w-[130px] space-x-2 py-3">
 
 <FontAwesomeIcon icon={faMinus} className='mt-1 '  onClick={()=>decrement(product?.uid)}/>
       <p>{product?.quantity}</p>
      <FontAwesomeIcon icon={faPlus} className='mt-1' onClick={()=>increment(product?.uid)}/>
</div>
</>
  </div>
  <div className="col-span-2  h-full">
<>
<FontAwesomeIcon icon={faTrash} className="mt-6" size="xl" color="red" onClick={()=>deleteItem(product?.uid)}/>
</>
  </div>
 </div>
  );
  }
};

export default CartItem;
