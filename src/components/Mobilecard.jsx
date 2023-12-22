import FontAwesomeIcon from "react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
function Mobilecard({imageUrl, description,price,productname,uid})
{


    return (
        <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
        <img src={imageUrl} className='h-40 w-auto mx-auto mt-5'/>
       <p className='text-left mx-3 font-medium mt-3'>{productname}</p>
       <div className='flex mx-4 space-x-3'>
    <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
    <p className='mt-3 font-medium'>{price}</p>
    </div>
    <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" >
      Add to Cart
    </div>
      </div>
      )
}
export default Mobilecard;