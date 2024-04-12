  import React, { useEffect, useState } from "react"
  import useWindowSize from "./hooks/useWindowsize"
  import axios from 'axios'
import OrderData from "./components/orders"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
  function Orders()
  {
    const windowSize=useWindowSize()  
    const [ordid,setordid]=useState("")
    const [orderdata,setorderdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
       serachbyid(ordid) 
      //  hieee
    },[ordid])
  const serachbyid=(ordid)=>{
      console.log("i am entering search",ordid)
      setordid(ordid)
      axios.get(`https://vasistastore.com/getordersbyorderid/${ordid}`).then((res)=>{
          const arrayValues = res.data;
          console.log("i am checking rry",res.data)
        arrayValues.length>0?
        
          arrayValues.map((indx,vlue)=>{
          console.log(indx.your_json_array_column,"i am here inside array")    
                setorderdata([indx.your_json_array_column])
              

          }): setorderdata([])
          
          

      
      }).catch((err)=>{
          console.log(err,"i am err")
      })




  }
  
    if(windowSize.width>=375 && windowSize.width<768)
    {
      return (
          <>
          <div className="grid grid-cols-12 grid-flow-row">
            <div className="mx-auto col-span-12 mx-auto my-4">
              <p className="font-bold text-black text-lg">Your Orders</p>

            </div>
            <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleArrowLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
            <div className="col-span-12 flex flex-row my-10 mx-auto">
             <input type="search" className="rounded mx-2 text-center font-md border borer-2 border-black" placeholder="search orderid" onChange={(e)=>setordid(e.target.value)}/>
             <button className="bg-black text-white p-2 rounded-md "  onClick={()=>serachbyid(ordid)}>Search</button>
            </div>
            <div>
              
              <div className="col-span-12  h-auto rounded mt-10 ">
                {
                  console.log(orderdata,"i am display check me")
                }
               {
                orderdata.length>0 ?
                (
                  <>
                        {
                          orderdata[0]?.map((val,index)=>
                          {
                            console.log(val?.status,"i am diplayg hamaya")
                            return (
                              <>
                              
                              <OrderData price={val?.price} imageurl={val?.imageUrl} quantity={val?.quantity} productname={val?.name} orderid={ordid} status={val?.status} uid={val?.uid}/>
                              
                              <hr className="w-[90vw] border-t-2 border-gray mx-auto"></hr>
                              </>
                            )
                          })
                        }
                  </>
  
                ):(
                  <>
                  
                  
                  </>
                )
               }
              </div>
              </div>

          </div>


          </>
      )
    }
    else if(windowSize.width>=768 && windowSize.width<=1023)
    {
      return (
          <>
          <div className="column h-screen w-full">
              <div className="flex justifty-between">
                <p className="mt-10 font-bold text-xl mx-20">Your Orders</p>
                <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleArrowLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
              <div className="flex space-x-4 h-20 absolute right-10">

                  <input type="text" placeholder="Order ID" onChange={(e)=>setordid(e.target.value)} className="p-2 h-10 mt-10"/>
                  <button className="w-[10vw] bg-black text-white p-2 rounded mt-10" onClick={()=>serachbyid(ordid)}>Search</button>
              </div>
              </div>
            <div className="col-span-12  h-auto rounded mt-10 ">
              {
                console.log(orderdata,"i am display check me")
              }
             {
              orderdata.length>0 ?
              (
                <>
                      {
                        orderdata[0]?.map((val,index)=>
                        {
                          console.log(val?.status,"i am diplayg hamaya")
                          return (
                            <>
                            <OrderData price={val?.price} imageurl={val?.imageUrl} quantity={val?.quantity} productname={val?.name} orderid={ordid} status={val?.status} uid={val?.uid}/>
                            <hr className="w-[90vw] border-t-2 border-gray mx-auto"></hr>
                            </>
                          )
                        })
                      }
                </>

              ):(
                <>
                
                
                </>
              )
             }
            </div>
            </div>
              </>
      )
    }
    else{
      return (
          <>
            <div className="column h-screen w-full">
              <div className="flex justifty-between">
                <p className="mt-10 font-bold text-xl mx-20">Your Orders</p>
                <div className='absolute left-10 top-10'>
  <FontAwesomeIcon icon={faCircleArrowLeft} className='justify-self-start' color='grey' size='xl' onClick={()=>navigate("/")} />
  </div>
              <div className="flex space-x-4 h-20 absolute right-10">

                  <input type="text" placeholder="Order ID" onChange={(e)=>setordid(e.target.value)} className="p-2 h-10 mt-10"/>
                  <button className="w-[10vw] bg-black text-white p-2 rounded mt-10" onClick={()=>serachbyid(ordid)}>Search</button>
              </div>
              </div>
            <div className="col-span-12  h-auto rounded mt-10 ">
              {
                console.log(orderdata,"i am display check me")
              }
             {
              orderdata.length>0 ?
              (
                <>
                      {
                        orderdata[0]?.map((val,index)=>
                        {
                          console.log(val?.status,"i am diplayg hamaya")
                          return (
                            <>
                            <OrderData price={val?.price} imageurl={val?.imageUrl} quantity={val?.quantity} productname={val?.name} orderid={ordid} status={val?.status} uid={val?.uid}/>
                            <hr className="w-[90vw] border-t-2 border-gray mx-auto"></hr>
                            </>
                          )
                        })
                      }
                </>

              ):(
                <>
                
                
                </>
              )
             }
            </div>
            </div>
          </>
      )
    }
  }
  export default Orders