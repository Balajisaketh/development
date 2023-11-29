import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowsize';
import { alertreducer } from '../redux/Alldata';
import { addToCart, getquantity } from '../redux/CartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faRubleSign, faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
function Proddescription() {
  const wsaize=useWindowSize();
  const [selectedItem, setselectedItem] = useState(null);
  const storedProducts = JSON.parse(localStorage.getItem('products'));
  console.log(storedProducts,"i am here data")
  const { uid } = useParams();
  console.log("i am params data",uid)
  
  useEffect(()=>{

    const foundItem = storedProducts.find((product) => product.uid == uid)
    console.log(foundItem,"i am founded")
    setselectedItem(foundItem)

  },[uid])
  

  
console.log(selectedItem,"i am data selected")
  const dispatch=useDispatch()
    
    const dispatching=()=>{
      if(selectedItem)
      {
   console.log(selectedItem.imagepath,"j am selected")
      
     const obj={
        description:selectedItem.description,
        imageUrl:selectedItem.imagepath,
        price:selectedItem.price,
        productname:selectedItem.name,
        uid:uid,
        quantity:1
        

     }
     

     dispatch(addToCart(obj));
     setTimeout(() => {
      dispatch(alertreducer(false))
    }, 3000);
     
    }
    
  }
  
if(wsaize.width<=425)
{
    return (
   <>


   </>
      )
}
else if(wsaize.width<=1023 && wsaize.width>425)

  //  a
  return (
    <div className='column'>
      <Navbar/>
      <div className='grid grid-flow-col'>

 <div className='grid-cols-auto  m'>
        <img
          src={selectedItem?.imagepath} // Replace with your image URL
          alt="Product Image"
          className="max-w-full h-auto mx-auto w-[200] my-10 mx-10"
        />
      </div>
      <div className='grid grid-flow-row grid-cols-auto h-auto border   ml-10 '>
        <div className='column'>

  <h1 className='font-bold text-2xl text-left ml-3 mt-4 '>{selectedItem?.productname}</h1>
  <p className="text-black font-bold mb-4 mx-2 my-4 text-left"><span><FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> </span>{selectedItem?.price}</p>
  <p className='text-left ml-3 mt-5'>{selectedItem?.description}</p>
  <div className='text-left mx-3 mt-5'>
  <button className='bg-orange-400 p-4 rounded-md  text-white' onClick={()=>dispatching()}>Add to Cart</button>
  </div>
        </div>
      </div>
      </div>
  </div>
  )
  else if(wsaize.width>=1024)
  {
    return (
      <>
     <Navbar/>
     <div className="flex mt-10">
      <div className=" ml-20">
        <img
          src={selectedItem?.imagepath} // Replace with your image URL
          alt="Product Image"
          className="max-w-full h-auto"
        />
      </div>
      {/* <div className="grid grid-flow-col  bg-red-800 rounded shadow ml-10 w-20">
        <h1 className="text-2xl font-bold mb-2 text-left mx-20 my-4">{foundItem.productname}</h1>
        <p className="text-gray-700 mb-4 mx-20 my-4 text-left">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-green-600 font-semibold mb-4 mx-20 my-4 text-left"><span><FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> </span>{foundItem.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mx-20 my-4 text-left">
          Add to Cart
        </button>
      </div> */}
      <div className='grid grid-flow-row w-[70vw] h-auto border   ml-10 '>
        <div className='column'>

  <h1 className='font-bold text-2xl text-left ml-10 mt-4 '>{selectedItem?.productname}</h1>
  <p className="text-black font-bold mb-4 mx-7 my-4 text-left"><span><FontAwesomeIcon icon={faIndianRupeeSign} className="mx-2 mt-4"/> </span>{selectedItem?.price}</p>
  <p className='text-left ml-10 mt-5'>{selectedItem?.description}</p>
  <div className='text-left m-10'>
  <button className='bg-orange-400 p-4 rounded-md  text-white' onClick={()=>dispatching()}>Add to Cart</button>
  </div>
        </div>
      </div>
    </div>
      </>
    )
  }
}

export default Proddescription