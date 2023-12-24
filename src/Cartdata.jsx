import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import useWindowSize from './hooks/useWindowsize'
import { increaseQuantity,decreaseQuantity ,resetcart} from './redux/CartSlice'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus ,faPlus,faTrash,faArrowLeft,faIndianRupeeSign, faCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import CartItem from './components/Cartitem'
import Usermodal from './modals/usermodal'
import { Alert } from 'flowbite-react';
function Cartdata() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
const checkstatus=useSelector((state)=>state.prods.check)
console.log("i am check status",checkstatus);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const submitForm = (data) => {
    // Handle form submission here, for example, send data to a server
    console.log("Form data submitted:", data);
  };
    const cartvalus=useSelector((state)=>state.cart.items)
    console.log("cart data",cartvalus);

    const navigate=useNavigate();
  const wsaize=useWindowSize();
  console.log(wsaize,"i m hw");
  console.log(cartvalus,"i m here cart values");
const [quantityupdated,setquantity]=useState(1)
    const [open,isopen]=useState(false);
    const dispatch=useDispatch()
    const statedta=useSelector((state)=>state.cart.items)
    console.log("i m a t",statedta)
    console.log(cartvalus,"i m from redux store") 
    
    const [count, setCount] = useState(1);
    let c=1
    const totalCartPrice = cartvalus.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
const handleIncrement = (uiddata) => {
      console.log("i m entered");
      console.log(uiddata,)
       cartvalus?.map((val,index)=>{
        console.log(uiddata,val.uid,"check")
       const findproduct=cartvalus.find((item)=>item.uid==uiddata)
   console.log(findproduct.quantity+1,"found")
      setquantity(findproduct.quantity+1)      
      dispatch(increaseQuantity({ productId:uiddata,quantity:findproduct.quantity+1}))
      console.log(quantityupdated,"i m here");
   })
      


      console.log('Increment',uiddata,quantityupdated);
    };
  const removecartdata = ()=>{
    console.log('hi entered');
    dispatch(resetcart([]))
  }
    const handleDecrement = (uiddata) => {
      console.log('Decrementcalled',uiddata,quantityupdated);
      setCount(count - 1);
      if(c==0)
      {
         console.log('Decrement',uiddata,c);

  
      }
      else{
        cartvalus?.map((val,index)=>{
          console.log(uiddata,val.uid,"check")
         const findproduct=cartvalus.find((item)=>item.uid==uiddata)
     console.log(findproduct.quantity,"found")
        setquantity(findproduct.quantity)
        dispatch(decreaseQuantity({productId:uiddata,quantity:findproduct.quantity-1}))
     })
      }
    };

    const handleDeleteItem = (uiddata) => {
      const newCartvalus = cartvalus.filter( function(item) {
        return item.uid != uiddata
      });
    dispatch(resetcart(newCartvalus))
    };
  
  const windowsize=useWindowSize()

  if(windowsize.width>=375 && windowsize.width<768)
{
  

return(
  <>
  
  {isPopupOpen && (
    <Usermodal onClose={closePopup} onSubmit={submitForm} />
  )}
  <div className='grid grid-flow-row col-span-12 h-auto shadow-lg h-auto'>
    
    <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
  <div className='rounded w-30 absolute right-[30%] p-3 top-7 border border-2 border-gray rounded-md  bg-red-500 text-white' onClick={()=>removecartdata()}>
    Reset cart
  </div>
    <div className='col-span-8  grid-flow-row relative mt-20'>

     <div className='grid grid-flow-row col-span-12  h-auto space-y-8 my-10'>
      {
        cartvalus.length>0 ?cartvalus.map((val,index)=>
        {
          console.log("i am stunnded",val)
        return(

    <>
           <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement} deleteItem = {handleDeleteItem}/>
    </>
        )}):(
          <><p className='text-2xl text-black m-auto'>Cart Empty</p></>
        )
      }
     </div>
   </div>

   <div className='col-span-8 '>
     <div className='card shadow-lg bg-white h-[50vh] ml-4 mr-4  mt-10'>
           {
            totalCartPrice ==0 ?
            <p>{"0.00"}</p>:
            <div className='column space-y-2 my-10w-1/2 absolute right-6'>
              <div className='flex  w-40 t-2 mx-auto'>
                <p>Total Bill :</p>
                  <p>&#8377;  {totalCartPrice}</p>
                  </div>

                  <button className='w-auto bg-yellow-900 whitespace-nowrap text-white py-3 px-3 rounded-lg' onClick={()=>openPopup()}>Proceed to checkout</button>
              </div>
           }
     </div>
    </div>
  </div>
  </>
)
}
else if(wsaize.width>=768 && wsaize.width<=2560)
{

return(
  <>
     
    {isPopupOpen && (
    <Usermodal onClose={closePopup} onSubmit={submitForm} />
  )}
  <div className='grid grid-flow-col col-span-12 h-auto shadow-lg h-auto'>
    
    <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
  <div className='rounded w-30 absolute right-[40%] p-3 top-7 border border-2 border-gray rounded-md  bg-red-500 text-white' onClick={()=>removecartdata()}>
    Reset cart
  </div>
    <div className='col-span-8    grid-flow-row relative mt-20'>

     <div className='grid grid-flow-row col-span-9  h-auto space-y-8'>
      {
        cartvalus.length>0 ?cartvalus.map((val,index)=>(

    <>
           <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement} deleteItem = {handleDeleteItem}/>
    </>
        )):(
          <><p className='text-2xl text-black m-auto'>Cart Empty</p></>
        )
      }
     </div>
   </div>
    <div className='col-span-2 h-auto '>
     <div className='card shadow-lg bg-white h-[50vh] ml-4 mr-4  mt-10'>
           {
            totalCartPrice ==0 ?
            <p>{"0.00"}</p>:
            <div className='column space-y-2 my-10'>
                  <p>&#8377;  {totalCartPrice}</p>

                  <button className='w-3/4 bg-yellow-900 whitespace-nowrap text-white py-3 px-3 rounded-lg' onClick={()=>openPopup()}>Proceed to checkout</button>
              </div>
           }
     </div>
    </div>
  </div>
  </>
)
}
else if(wsaize.width>=425 && wsaize.width<768)
{
  return(
    <>
      {isPopupOpen && (
    <Usermodal onClose={closePopup} onSubmit={submitForm} />
  )}
     <div className='grid grid-flow-row col-span-12 h-auto shadow-lg h-auto'>
    
    <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
  <div className='rounded w-30 absolute right-[10%] p-3 top-7 border border-2 border-gray rounded-md  bg-red-500 text-white' onClick={()=>removecartdata()}>
    Reset cart
  </div>
    <div className='col-span-8  grid-flow-row relative mt-20'>

     <div className='grid grid-flow-row col-span-12  h-auto space-y-8 my-10'>
      {
        cartvalus.length>0 ?cartvalus.map((val,index)=>
        {
          console.log("i am mobile check here",val)
          return(

    <>
           <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement} deleteItem = {handleDeleteItem}/>
    </>
        )}):(
          <><p className='text-2xl text-black m-auto'>Cart Empty</p></>
        )
      }
     </div>
   </div>

   <div className='col-span-8 '>
     <div className='card shadow-lg bg-white h-[50vh] ml-4 mr-4  mt-10'>
           {
            totalCartPrice ==0 ?
            <p>{"0.00"}</p>:
            <div className='column space-y-2 my-10w-1/2 absolute right-6'>
              <div className='flex  w-40 t-2 mx-auto'>
                <p>Total Bill :</p>
                  <p>&#8377;  {totalCartPrice}</p>
                  </div>

                  <button className='w-auto bg-yellow-900 whitespace-nowrap text-white py-3 px-3 rounded-lg' onClick={()=>openPopup()} onSubmit={()=>submitForm()}>Proceed to checkout</button>
              </div>
           }
     </div>
    </div>
  </div>
    </>
  

  )
}
}

export default Cartdata