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
    console.log(`http://localhost:3001/getordersbyorderid/${ordid}`,"i am ordr")
    axios.get(`http://localhost:3001/getordersbyorderid/${ordid}`).then((res)=>{
        const arrayValues = res.data;
       arrayValues.length>0?
        arrayValues.map((indx,vlue)=>{
        console.log(indx.your_json_array_column,"i am here")    
              setorderdata(vlue.your_json_array_column)
            

        }): console.log("i am not fund")
        
        

    
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
            <div>
                <input type="text" placeholder="Order ID" onChange={(e)=>setordid(e.target.value)} onKeyDown={()=>serachbyid(ordid)}/>
            </div>
           <div className="col-span-12 shadow-md h-screen rounded">

             
           </div>
          </div>
        </>
     )
  }
}
export default Orders