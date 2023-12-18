import axios from "axios"
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowsize"
import animationdata from '../../src/images/Lottie/tick.json';
import Lottie from 'react-lottie';
import { useDispatch, useSelector} from 'react-redux';
import { ordersslice, removeOrder } from "../redux/Alldata";
function OrderData({price,imageurl,quantity,productname,uid,orderidata}){
    console.log("i am entered orders comp",price,imageurl,quantity,productname,uid,orderidata)
    const allord=useSelector((state)=>state.prods.orders)
    console.log("i am order data",allord);
const dispatch=useDispatch()
    const [prods,setprods]=useState()
    const handlereturns = (uiddata) => {
      console.log("i am im handle returns");
      const newCartvalus = allord.your_json_array_column.filter( function(item) {
        return item.uid != uiddata
      });
      dispatch(removeOrder(newCartvalus));
      console.log("i am check new",newCartvalus);
      setProducts(newCartvalus);
    }
    
    const wsize=useWindowSize()
    const [products,setProducts]=useState([]);
    const [animationVisible, setAnimationVisible] = useState(false);
    

    // const changedid=()=>{
      
    //    
    //   console.log("i am ordrdata",overallorders);
    //   }
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationdata,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const deleteprod=(uidddata)=>{
      console.log(uidddata,"i am unique prod id");
      
       axios.delete( `http://localhost:3001/api/orders/${uidddata}/${orderidata}`).then((res)=>{
        if(res.data.message="removed sucessfully")
        {
          console.log("called done")
          setAnimationVisible(true);
          handlereturns(uidddata);
          
          // const updatedProducts =  overallorders.map(product => {
          //   return product.your_json_array_column
          //   // console.log('ni abba ra', uid);
          //   // console.log('ni abba re', product.uid);
          //   // Add any additional information you want to print
          //   // ...
          
            
          // });
          // console.log(updatedProducts," hamaya check here");
          
          // setProducts(updatedProducts);
          
        
          
        }
          
       })
       
    }
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
          deleteprod(uiddata)
          
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
            {
            console.log(products,"i am checking prodcuts bey")
            }
           {
            
    animationVisible ?
    (
      <>
      <Lottie options={defaultOptions} height={50} width={50} />
      </>

    ):(
      <>
      <div>
      
          {/* <div className="grid grid-flow-col gap-2 grid-cols-12 mx-auto my-10"> */}
            {allord.length > 0 ? (
              allord?.map((val, indx) => {
                  
                  
                 return val.your_json_array_column?.map((value,index)=>
                  
                    
                (


                      <>
                      
                      <div className="grid grid-flow-col gap-2 grid-cols-12 mx-auto my-10 "> 
                  <div className="col-span-3" key={indx}>
                    <img
                      src={value?.imageUrl
                      }
                      alt={value?.productname}
                      className="w-full h-[40vh] object-contain rounded-md mx-5"
                    />
                  </div>
                  <div className="col-span-3" key={indx}>
                    <h2 className="font-bold my-[20vh] mx-2">{value?.productname}</h2>
                  </div>
                  <div className="col-span-2" key={indx}>
                    <p className="font-medium my-[20vh]">{value?.quantity}</p>
                  </div>
                  <div className="col-span-2" key={indx}>
                    <p className="font-medium my-[20vh]">{value?.quantity * value?.price}</p>
                  </div>
                  <div className="col-span-2" key={indx}>
                    <button
                      className="font-medium my-[20vh] bg-red-900 w-[100] p-4 text-white rounded-md"
                      onClick={() => returnapicall(value?.uid)}
                    >
                      Return
                    </button>
                  </div>
                  </div>
                </>

                  ));
                  
                
                
                  })
            ) : (
              <p>No orders available</p>
            )}
          </div>
        
    
      </>

     
    )
 }


            </>
        )
    }
}
export default OrderData