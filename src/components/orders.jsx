import axios from "axios"
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowsize"
function OrderData({price,imageurl,quantity,productname,status}){
    console.log("i am entered orders comp",price,imageurl,quantity,productname,status)
    const wsize=useWindowSize()
    const [products,setProducts]=useState([]);
    const [animationVisible, setAnimationVisible] = useState(false);
    

    // const changedid=()=>{
      
    //    
    //   console.log("i am ordrdata",overallorders);
    //   }
    
    // const deleteprod=(uidddata)=>{
    //   console.log(uidddata,"i am unique prod id");
      
    //    axios.delete( `http://localhost:3001/api/orders/${uidddata}/${orderidata}`).then((res)=>{
    //     if(res.data.message="removed sucessfully")
    //     {
    //       console.log("called done")
          
          
    //       // const updatedProducts =  overallorders.map(product => {
    //       //   return product.your_json_array_column
    //       //   // console.log('ni abba ra', uid);
    //       //   // console.log('ni abba re', product.uid);
    //       //   // Add any additional information you want to print
    //       //   // ...
          
            
    //       // });
    //       // console.log(updatedProducts," hamaya check here");
          
    //       // setProducts(updatedProducts);
          
        
          
    //     }
          
    //    })
       
    // }
    const returnapicall=(uiddata)=>{
      const body={
        productname:productname,
        price:price,
        quantity:quantity,
        imgpath:imageurl
 
      }
      console.log("i am body data",body)
       axios.post("http://localhost:3001/returns",body).then((res)=>{
        console.log(res.data,"i am return data print");
        if(res.data.message="return placed")
        {
             console.log("i am calling inside")
          
          
        }
         
       })

    }
    if(wsize.width>=425 && wsize.width<768)
    {
  return (
    <>

    </>
  )
    }
    else if(wsize.width>=768 && wsize.width<=1023){
        return(
            <>
            </>
        )

    }
    else{
        return(
          
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
             <p className="font-medium my-[20vh]">{quantity}</p>
           </div>

           <div className="col-span-2">
             <p className="font-medium my-[20vh]">{quantity*price}</p>
           </div>
           <div className="col-span-2">
            {
               status==="order placed" || status==="orderplaced" ?
               (
<>
<p className="font-medium my-[20vh] text-green-500">{status}</p>
</>
               ) :(
                <>
                <p className="font-medium my-[20vh] text-red-500">{status}</p>
                </>
               )

            }
             
           </div>
           <div className="col-span-2 my-[20vh]">
           <button className="bg-red-900 p-4 rounded-md text-white">Return</button>
            </div>
            </div>

            </>
        )
    }
}
export default OrderData