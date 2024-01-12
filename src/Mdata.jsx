import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Mdata() {
    const [data,setdata]=useState([])
    useEffect(()=>{
     axios.get("https://vasistastore.com/getproducts").then((res)=>{
   setdata(res.data.rows);
   console.log(res.data,"i m ");

     }).catch((err)=>{
       console.log(err,"i m error");
     })
    },[])
  return (
    <div>
        {
            data?.map((val,index)=>
            (
                <img src={val?.imagepath} className='w-screen h-full'/>
            ))
        }
    </div>
  )
}

export default Mdata