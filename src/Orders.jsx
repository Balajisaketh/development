  import React, { useEffect, useState } from "react"
  import useWindowSize from "./hooks/useWindowsize"
  import axios from 'axios'
import OrderData from "./components/orders"
  function Orders()
  {
    const windowSize=useWindowSize()  
    const [ordid,setordid]=useState("")
    const [orderdata,setorderdata]=useState([])
  const serachbyid=(ordid)=>{
      console.log("i am entering search",ordid)
      setordid(ordid)
      axios.get(`http://localhost:3001/getordersbyorderid/${ordid}`).then((res)=>{
          const arrayValues = res.data;
          console.log("i am checking rry",res.data)
        arrayValues.length>0?
        
          arrayValues.map((indx,vlue)=>{
          console.log(indx.your_json_array_column,"i am here inside array")    
                setorderdata([...orderdata,indx.your_json_array_column])
              

          }): setorderdata([])
          
          

      
      }).catch((err)=>{
          console.log(err,"i am err")
      })




  }
  
    if(windowSize.width>=425 && windowSize.width<768)
    {
      return (
          <>

          </>
      )
    }
    else if(windowSize.width>=768 && windowSize.width<=1023)
    {
      return (
          <>
              </>
      )
    }
    else{
      return (
          <>
            <div className="column h-screen w-full">
              <div className="flex justifty-between">
                <p className="mt-10 font-bold text-xl mx-10">Your Orders</p>
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
                          console.log(val?.productname,"i am diplayg hamaya")
                          return (
                            <>
                            <OrderData price={val?.price} imageurl={val?.imageUrl} quantity={val?.quantity} productname={val?.productname}/>
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