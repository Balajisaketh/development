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
function Cartdata() {
    const cartvalus=useSelector((state)=>state.cart.items)
    const navigate=useNavigate();
  const wsaize=useWindowSize();
  console.log(wsaize,"i m hw");
  console.log(cartvalus,"i m here");
const [quantityupdated,setquantity]=useState(1)
    
    const dispatch=useDispatch()
    const statedta=useSelector((state)=>state.cart.items)
    console.log("i m a t",statedta)
    console.log(cartvalus,"i m from redux store") 
    
    const [count, setCount] = useState(1);
    let c=1
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
  
  
  if(wsaize.width<=820 && wsaize.width>425)
{
  
  return (
    <>

<div className='grid grid-flow-col col-span-12 h-10  h-screen relative'>
    <div className='col-span-8  grid-flow-row relative'>
      <div className='absolute left-10 top-3'>
  <FontAwesomeIcon icon={faCircleLeft} className='justify-self-start' color='grey' />
  </div>
  <div className='rounded w-40 absolute right-20 top-10 bg-red-950' onClick={()=>removecartdata()}>
    Reset cart
  </div>
     {/* <div className='grid  grid-flow-col col-span-8 space-x-10 mt-10'>
     <p className='col-span-2 text-sm'>Name</p>
<p className='col-span-2 text-sm text-center'>Quantity</p>
<p className='col-span-2 text-sm'>price</p>
<p className='col-span-2 text-sm'>Remove item</p>
     </div> */}
     
     <div className='grid grid-flow-row col-span-9  h-screen mt-10 bg-red-200'>
      {
        cartvalus.map((val,index)=>(

    <>
           <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement} />
    </>
        ))  
      }
     </div>
   </div>
    <div className='col-span-2 bg-yellow-800 h-screen'>

    </div>
  </div>
      </>
  )
}
else if(wsaize.width>820 && wsaize.width<=2560)
{

return(
  <>
  <div className='grid grid-flow-col col-span-12 h-auto shadow-lg h-screen'>
    
    <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/layout")} />
  </div>
  <div className='rounded w-30 absolute right-48 p-3 top-7 border border-2 border-gray rounded-md  bg-red-500 text-white' onClick={()=>removecartdata()}>
    Reset cart
  </div>
    <div className='col-span-8  grid-flow-row relative mt-20'>

     <div className='grid grid-flow-row col-span-9  h-auto space-y-8'>
      {
        cartvalus.length>0 ?cartvalus.map((val,index)=>(

    <>
           <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement}/>
    </>
        )):(
          <><p className='text-2xl text-black m-auto'>Cart Empty</p></>
        )
      }
     </div>
   </div>
    <div className='col-span-2 bg-yellow-800 h-screen'>

    </div>
  </div>
  </>
)
}
else if(wsaize.width>=325 && wsaize.width<=819)
{
  return(
    <>
    <div className='grid grid-flow-col col-span-12 h-10 shadow-lg h-screen'>
      <div className='col-span-8  grid-flow-row'>
       {/* <div className='grid  grid-flow-col col-span-8 space-x-10 mt-10'>
       <p className='col-span-2 text-sm'>Name</p>
  <p className='col-span-2 text-sm text-center'>Quantity</p>
  <p className='col-span-2 text-sm'>price</p>
  <p className='col-span-2 text-sm'>Remove item</p>
       </div> */}
       <div className='grid grid-flow-row col-span-12  h-screen'>
        {
          cartvalus.map((val,index)=>(
  
      <>
             <CartItem key={index} product={val} decrement={handleDecrement} increment={handleIncrement}/>
      </>
          ))
        }
       </div>
     </div>
     
    </div>
    </>
  )
}
}

export default Cartdata