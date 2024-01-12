import axios from "axios"
import useWindowSize from "../hooks/useWindowsize"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"
function OrderData({price,imageurl,quantity,productname,orderid,status,uid}){
  const [returnstatus,setreturnstatus]=useState("empty")
    console.log("i am entered orders comp",price,imageurl,quantity,productname,orderid,status,uid)
    const returnprod=()=>{
      setreturnstatus("")
          const body={
            price:price,
            quantity:quantity,
            image:imageurl,
            productname:productname,
            orderid,orderid,
            uid:uid



          }
          console.log("i am ch4king",body);
         axios.post("https://vasistastore.com/returnorders",body).then((res)=>{
          console.log(res,"i am res")
             if(res.data.message=="returnplaced" || res.data.message=="return placed"){
                  console.log("placd")
                  setreturnstatus("returnplaced")


             }


         }).catch((err)=>{
          console.log(err);
         })
    }
    const wsize=useWindowSize()
    if(wsize.width>=375 && wsize.width<768)
    {
      return(
      
      returnstatus=="returnplaced" ?
      (
<>
          <div className="grid  grid-flow-col gap-7 grid-cols-12 mx-auto my-10">
        <div className="col-span-3 ">
        <img
        src={imageurl}
        alt={productname}
        className="w-[60vw] h-[100px] mx-3"
      />
        </div>
        <div className="col-span-6  text-center px-4 w-[100vw] ">
            <h2 className="font-medium text-left">{productname}</h2>
            <p className="font-medium text-left">quantity:{quantity}</p>
            <div className="flex my-3 text-left">
             <FontAwesomeIcon icon={faIndianRupeeSign} className="mt-2 px-3"/>
            <p className="font-medium ">{quantity*price}</p>
            </div>
        </div>
        

            <div className="col-span-1 mx-12">
            <p className="font-bold text-orange-600 text-lg">Returned</p>
            </div>
          </div>
          <div className="col-span-12 mx-auto   w-[100vw] ">
            <button className="bg-red-400 w-[40vw] text-white my-4 p-2 rounded-md mx-auto" onClick={()=>returnprod()}>
               Return
            </button>
            </div>
        
        </>
      ):(
        <>
          <div className="grid  grid-flow-col gap-7 grid-cols-12 mx-auto my-10">
        <div className="col-span-3">
        <img
        src={imageurl}
        alt={productname}
        className="w-[60vw] h-[100px] mx-3"
      />
        </div>
        <div className="col-span-6 mx-4">
            <h2 className="font-medium text-left">{productname}</h2>
            <p className="font-medium text-left">quantity:{quantity}</p>
            <div className="flex my-3 text-left">
             <FontAwesomeIcon icon={faIndianRupeeSign} className="mt-2 px-3"/>
            <p className="font-medium ">{quantity*price}</p>
            </div>
        </div>
        
         
            <div className="col-span-1 mx-12">
            <p className="font-bold text-green-300 text-lg">Order placed</p>
            </div>
          </div>
          <div className="col-span-12 mx-auto   w-[100vw] " onClick={()=>returnprod()}>
            <button className="bg-red-400 w-[40vw] text-white my-4 p-2 rounded-md mx-auto" >
               Return
            </button>
            </div>
        </>
      )
      )

    }
    else if(wsize.width>=768 && wsize.width<=1023){
      return(
        returnstatus=="returnplaced" ?
        (
          <>
          <div className="grid  grid-flow-col gap-2 grid-cols-12 mx-auto my-10">
        <div className="col-span-3">
        <img
        src={imageurl}
        alt={productname}
        className="w-full h-[40vh] object-contain rounded-md mx-10"
      />
        </div>
        <div className="col-span-3">
            <h2 className="font-bold  my-[20vh] mx-2">{productname}</h2>
        </div>
         <div className="col-span-1">
           <p className="font-medium my-[20vh]">{quantity}</p>
         </div>

         <div className="col-span-2">
           <p className="font-medium my-[20vh]">{quantity*price}</p>
           <p className="text-md text-orange-300 font-bold">Return placed</p>
         </div>
         <div className="col-span-2" >
            <button className="bg-red-900 text-white my-[20vh] p-3 rounded-md" onClick={()=>returnprod()}>
               Return
            </button>
            </div>
          </div>
          </>
        ):
        (
          <>
          <div className="grid  grid-cols-12 grid-flow-col gap-2 grid-cols-12 mx-auto my-10">
        <div className="col-span-3">
        <img
        src={imageurl}
        alt={productname}
        className="w-full h-[40vh] object-contain rounded-md mx-10"
      />
        </div>
        <div className="col-span-3">
            <h2 className="font-bold  my-[20vh] mx-2">{productname}</h2>
        </div>
         <div className="col-span-1">
           <p className="font-medium my-[20vh]">quantity:{quantity}</p>
         </div>

         <div className="col-span-2">
         <div className="flex my-3 text-left">
             <FontAwesomeIcon icon={faIndianRupeeSign} className="mt-2 px-3"/>
            <p className="font-medium ">{quantity*price}</p>
            </div>
           
           <p className="text-md text-green-400 font-bold">order placed</p>
         </div>
         <div className="col-span-2" >
            <button className="bg-red-900 text-white p-3 rounded-md my-[20vh]" onClick={()=>returnprod()}>
               Return
            </button>
            </div>
          </div>

          </>
        )
      )

    }
    else{
        return(
          returnstatus=="returnplaced" ?
          (
            <>
            <div className="grid grid-flow-col gap-2 grid-cols-12 mx-auto my-10">
          <div className="col-span-3">
          <img
          src={imageurl}
          alt={productname}
          className="w-full h-[40vh] object-contain rounded-md mx-10"
        />
          </div>
          <div className="col-span-3">
              <h2 className="font-bold  my-[20vh] ">{productname}</h2>
          </div>
           <div className="col-span-2">
             <p className="font-medium my-[20vh]">quantity:{quantity}</p>
           </div>

           <div className="col-span-2 mt-10">
            <div className="row">
           <div className="flex  text-center my-20">
             <FontAwesomeIcon icon={faIndianRupeeSign} className="mt-2 px-3"/>
            <p className="font-medium">{quantity*price}</p>
            </div>
           
             <p className="text-md  text-left text-orange-300 font-bold mt-4">Return placed</p>
           </div>
           </div>
           <div className="col-span-2" >
              <button className="bg-red-900 text-white my-[20vh] p-3 rounded-md" onClick={()=>returnprod()}>
                 Return
              </button>
              </div>
            </div>
            </>
          ):
          (
            <>
            <div className="grid grid-flow-col gap-2 grid-cols-12 mx-auto my-10">
          <div className="col-span-3">
          <img
          src={imageurl}
          alt={productname}
          className="w-full h-[40vh] object-contain rounded-md mx-10"
        />
          </div>
          <div className="col-span-3">
              <h2 className="font-bold  my-[20vh] mx-2">{productname}</h2>  
          </div>
           <div className="col-span-1">
           
           </div>
           <div className="col-span-2">
             <p className="font-medium my-[20vh]">quantity:{quantity}</p>
           </div>
           <div className="col-span-2">
            <div className="row">
           <div className="flex mt-20 text-left">
             <FontAwesomeIcon icon={faIndianRupeeSign} className="mt-2 px-3"/>
            <p className="font-medium">{quantity*price}</p>
            </div>
           
             <p className="text-md  text-left  mt-4 text-green-400 font-bold ">order placed</p>
           </div>
           </div>
           <div className="col-span-2" >
              <button className="bg-red-900 text-white p-3 rounded-md my-[20vh]" onClick={()=>returnprod()}>
                 Return
              </button>
              </div>
            </div>

            </>
          )
        )
    }
}
export default OrderData