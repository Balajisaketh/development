  import React, { useEffect, useState } from "react"
  import useWindowSize from "./hooks/useWindowsize"
  import axios from 'axios'
  function Orders()
  {
    const windowSize=useWindowSize()  
    const [ordid,setordid]=useState("")
    const [orderdata,setorderdata]=useState()
  const serachbyid=(ordid)=>{
      
      setordid(ordid)
      axios.get(`http://localhost:3001/getordersbyorderid/${ordid}`).then((res)=>{
          const arrayValues = res.data;
        arrayValues.length>0?
        
          arrayValues.map((indx,vlue)=>{
          console.log(indx.your_json_array_column,"i am here")    
                setorderdata(indx.your_json_array_column)
              

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
            <div className="col-span-12  h-auto rounded mt-10">
              
              {
                orderdata?.map((val,index)=>{
                  console.log(val,index,"i am  mapping")
                  return (
                    <>
                    <div className="flex space-x-10 mt-4  p-5 w-[80vw] mx-auto my-5 border-2 border-black rounded-md">
                    <img
          src={val?.imageUrl} // Replace with your image URL
          alt="Product Image"
          className="w-[10vw] h-auto"
        />
        <p className="text-black">{val?.description}</p>
                    </div>

                    </>
                  )
                })
              }
            </div>
            </div>
          </>
      )
    }
  }
  export default Orders