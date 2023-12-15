  import React, { useEffect, useState } from "react"
  import useWindowSize from "./hooks/useWindowsize"
  import axios from 'axios'
import { useDispatch } from "react-redux"
  import { ordersslice } from "./redux/Alldata"
import OrderData from "./components/orders"
  function Orders()
  {
    const windowSize=useWindowSize()  
    const [ordid,setordid]=useState("")
    const [orderdata,setorderdata]=useState([])
    const dispatch = useDispatch();
    const serachbyid = (ordid, setordid) => {
      
    
      console.log("I am entering search", ordid);
      // setordid(ordid);
    
      axios.get(`http://localhost:3001/getordersbyorderid/${ordid}`)
        .then((res) => {
          console.log(res.data,"i am doubtful bout this")
          const arrayValues = res.data;
          console.log("check gere bb", res.data);
    
          if (arrayValues.length > 0) {
            dispatch(ordersslice(res.data));
            arrayValues?.map((indx) => {
              console.log(indx.your_json_array_column, "I am here inside array");
              setorderdata((prevData) => [...prevData, indx.your_json_array_column]);
            });
          } else {
            setorderdata([]);
          }
        })
        .catch((err) => {
          console.log(err, "I am an error");
        });
    };
  
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
                  console.log("printing",orderdata[0])
                }
                      {
                        

                        orderdata[0]?.map((val,index)=>
                        {
                          console.log(val?.productname,"i am diplayg hamaya")
                          return (
                            <>
                            <OrderData price={val?.price} imageurl={val?.imageUrl} quantity={val?.quantity} productname={val?.productname} uid={val?.uid} orderidata={ordid}/>
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