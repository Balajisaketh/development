// CartItem.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
const CartItem = ({ product, decrement,increment, deleteItem }) => {
  const subtotal = product.price * product.quantity;
  
  return (
 <div className="grid grid-flow-col col-span-9  my-auto p-1 mx-6 shadow-md rounded-md h-auto ">
  <div className="grid col-span-1 ">
<img src={product?.imageUrl} alt={product.productname} className="h-[80px] mx-auto w-[60px] justify-self-end"/>
  </div>
  <div className="col-span-2 grid grid-flow-row ">
<p className="justify-self-start mx-2 w-20">{product?.productname}</p>
<p className="justify-self-start mx-2"> 
<<<<<<< Updated upstream
<span><FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/></span>
{product?.price*product?.quantity}
=======
<span>  <FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/>   </span>
{subtotal}
>>>>>>> Stashed changes
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
  <div className="col-span-2  h-full">
   
  </div>
 </div>
  );
};

export default CartItem;
