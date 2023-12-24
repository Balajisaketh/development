
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addToCart, getquantity } from '../redux/CartSlice';
import { alertreducer } from '../redux/Alldata';
function Mobilecard({imageUrl, description,price,productname,uid})

{
    
console.log("entered comp",imageUrl,description,price,productname)
    console.log(imageUrl,"i am here in mobile");
    const dispatch=useDispatch()
    const checkcal=()=>{
      console.log("calling now")
    }
    const dispatching=()=>{
        console.log("calling diaptch",imageUrl,description,price,productname)
        const obj={
           description:description,
           imageUrl:imageUrl,
           price:price,
           productname:productname,
           uid:uid,
           quantity:1
           
   
        }

        console.log("object data",obj)
   
        dispatch(addToCart(obj));
        setTimeout(() => {
         dispatch(alertreducer(false))
       }, 3000);
        
       }
    return (
      
        <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
         <img
          src={imageUrl}
          alt={productname}
          className="w-full h-[50vh] object-contain rounded-md mt-4"
        />
       <p className='text-center mx-auto font-medium mt-3'>{productname}</p>
    
     <p className="text-center text-black"><span><FontAwesomeIcon icon={faIndianRupeeSign}  className="mx-2 mt-4"/> </span>{price}</p>
    <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching()}>
      Add to Cart
    </div>
      </div>
      )
}
export default Mobilecard;