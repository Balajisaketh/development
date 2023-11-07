'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { filterreducer, frontloadreducer } from './redux/FrontloadSlice';
import Productcard from './components/Productdata';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tabproductcard from './components/Tabproductcard';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Sidebarr from './components/Sidebarr';
import { sidebarreducer } from './redux/Alldata';
import { addToCart } from './redux/CartSlice';
import { alertreducer } from './redux/Alldata';
function Washingmachinepowders() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const productcategory = query.get('category');
    console.log(productcategory + " product category");
    const windowSize = useWindowSize();
    const [data1,setdata]=useState([])
    const dispatch=useDispatch()
    const router=useNavigate()
    
    
    const alertstatus=useSelector((state)=>state.prods.alertdata)
    console.log(alertstatus,"i m alert status")
    // console.log(filtrrproddata,"i m data from store filter")
    const [brand,setbrand]=useState("initial")
    const [stval,setvalue]=useState()
    const [renddata,setrendata]=useState("yes")
    const [brandDataRendered, setBrandDataRendered] = useState(false);
    const [rendprods,setrendprods]=useState([])
    const [filterdrop,SetFilterdrop]=useState(false)
    const cartdata=useSelector((state)=>state.cart.items)
    const [alldata,setdalldata]=useState([])
    console.log(cartdata,'i m cartdone')    
    let count=0;
    useEffect(()=>{
      dispatch(sidebarreducer(false))
    },[])
    
useEffect(()=>{
    console.log("i m rend data",renddata)

    const pdata=localStorage.getItem('products');
    console.log("hi i m from stor",pdata)

    try{
        if(productcategory!=null || productcategory != undefined || productcategory !="") {

            const body={
                category:productcategory
           }
           console.log("product category",body)
           // Fetch data from the API if not available in localStorage
           axios.post("http://localhost:3001/getbycategory",body).then((res)=>{
            console.log(res.data,'i m resdata from loads')
            if(res.data.length>0){           
                console.log("resdata",res.data.length);
             localStorage.setItem('products',JSON.stringify(res.data))
             
              const filnl=JSON.parse(pdata)
              console.log(filnl,res.data,"i m datatype");
              console.log(filnl.length,res.data.length,"i m datatypelen");
              if(filnl.length>res.data.length  || count==0){
                 setrendata("changed")
                 setvalue(res.data);
                 
            }
            else{
                setrendata("yes")
                count+=1;
            }
            }
            else{
              alert("no products found matching your search")
              console.log(res.rows,"i am  error")
            }
        
           }).catch((error)=>{
               console.log(error,"i m catching error" ) 
           })
           

        } else {
           alert("Category not found") 
        }
            
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
},[]);
useEffect(()=>{
  const body={
    "category":productcategory
  }
  axios.post('http://localhost:3001/api/getbrand',body).then((res)=>{
    setdata(res.data.reverse())
    console.log(res.data,"i m brand data")
  }).catch((err)=>{
    console.error(err,"i m brand error")
  })
},[])
console.log("i m data1:",data1);
const apicallbrand=(brandata)=>{
  const body={
    "category":productcategory,
    "brand":brandata.toLowerCase()
  }
  axios.post('http://localhost:3001/api/getbybrand',body).then((res)=>{
    console.log(res.data,"i m get by brand");
    setvalue(res.data);
  }).catch((err)=>{
    console.error(err,"i m brand error")
  })
}
const dispatching=({imageUrl,price,description,productname,uid})=>{
  const obj={
     description:description,
     imageUrl:imageUrl,
     price:price,
     productname:productname,
     uid:uid,
     quantity:1
     

  }
  

  dispatch(addToCart(obj));
  setTimeout(() => {
   dispatch(alertreducer(false))
 }, 3000);
  
 }
 
const filteredproductsdata=(branddata)=>{
    const pdata=localStorage.getItem('products');
    setbrand(branddata);
    console.log(pdata,"i m pdata");
console.log("Productbrand",branddata)
 branddata === 'All'
  ? setdalldata(JSON.parse(pdata))
  : setdalldata(JSON.parse(pdata).filter((product) => product.brand === branddata));

 apicallbrand(branddata)
// console.log("Productbrand",brand)
// console.log(count,"i m here")
// console.log(stval,"i m here data ")


  }
  const[toggle,settoggle]=useState(true);
  const checkside=useSelector((state)=>state.prods.checksidebar);
  if(windowSize.width>=425 && windowSize.width<768)
  {
      return (
        <>
        <div>
        <Navbar opensidebar={toggle}  />
        {
          checkside==true ? 
          (
            <>
              
            <div className='column '>
            <div className="col-span-auto h-50 bg-black z-10">
  <Sidebarr/>
    </div>
         <div className='mx-auto w-4/5 h-auto p-3 flex flex-row mx-3 bg-white border border-2 z-20 mt-4 shadow-sm rounded'>
          <FontAwesomeIcon icon={faFilter} size='lg' className='mx-2'/>
          <p>Filter</p>
           
         </div>
         <div className="col-span-6 gap-1 m-3 w-3/4  space-y-2 mx-auto">
       
        {
          brand =="initial" ?(
      <>
      {
             stval?.map((val,index)=>{
              console.log(val,"ni amma tra")
              return (
                <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
                  <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
                 <p className='text-left mx-3 font-medium mt-3'>{val?.productname}</p>
                 <div className='flex mx-4 space-x-3'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
              <p className='mt-3 font-medium'>{val?.price}</p>
              </div>
              <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.productname,val?.uid)}>
                Add to Cart
              </div>
                </div>
              )
             })
      }
      </>
          ):(
            <>
            {
             alldata?.map((val,index)=>{
              console.log(val,"ni amma tra")
              return (
                <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
                  <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
                 <p className='text-left mx-3 font-medium mt-3'>{val?.productname}</p>
                 <div className='flex mx-4 space-x-3'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
              <p className='mt-3 font-medium'>{val?.price}</p>
              </div>
              <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.productname,val?.uid)}>
                Add to Cart
              </div>
                </div>
              )
             })
      }
            </>
          )
        }
          </div>
       </div>
            </>
          ) :
          (
            <>
            <div className='column bg-white'>
         <div className='mx-auto w-4/5 h-auto p-3 flex flex-row mx-3 bg-white border border-2 z-20 mt-4 shadow-sm rounded'>
          <FontAwesomeIcon icon={faFilter} size='lg' className='mx-2'/>
          <p>Filter</p>
           
         </div>
         <div className="col-span-6 gap-1 m-3 w-3/4  space-y-2 mx-auto">
       
        {
          brand =="initial" ?(
      <>
      {
             stval?.map((val,index)=>{
              console.log(val,"ni amma tra")
              return (
                <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
                  <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
                 <p className='text-left mx-3 font-medium mt-3'>{val?.productname}</p>
                 <div className='flex mx-4 space-x-3'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
              <p className='mt-3 font-medium'>{val?.price}</p>
              </div>
              <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.productname,val?.uid)}>
                Add to Cart
              </div>
                </div>
              )
             })
      }
      </>
          ):(
            <>
            {
             alldata?.map((val,index)=>{
              console.log(val,"ni amma tra")
              return (
                <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
                  <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
                 <p className='text-left mx-3 font-medium mt-3'>{val?.productname}</p>
                 <div className='flex mx-4 space-x-3'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
              <p className='mt-3 font-medium'>{val?.price}</p>
              </div>
              <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.productname,val?.uid)}>
                Add to Cart
              </div>
                </div>
              )
             })
      }
            </>
          )
        }
          </div>
       </div>
            </>
          )
        }
        </div>
       
      
         </>
        )
  }


else if(windowSize.width>=768 && windowSize.width<=1023){
  return (
      <>
      <div>
      <Navbar/>
       <div className='grid grid-cols-12 grid-flow-col my-[6vh] relative'>
       <div className='grid col-span-3 h-[75vh] w-auto '>
       <h1 className='text-lg text-black-300 font-medium'>Filter by Brand
       
       </h1>
     
       {
          
          data1?.map((val, i)=>{
              console.log(val,"i m object in brand")
              return (
                 <>
                 <ul className='list-none mt-4'>
                 <li className='bg-white shadow-md rounded-md w-3/4 mx-auto p-4 border border-gray-300' onClick={()=>{
                               filteredproductsdata(val?.brand)
                               }}>
                            {val?.brand}
                      </li>
                 </ul>
                 </>
              )
          })
                         }

       </div>
       
       
       <div className='grid col-span-8'>
    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

{
  brand =="initial" ?(
<>
{
     stval?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Tabproductcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
}
</>
  ):(
    <>
    {
     alldata?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Tabproductcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
}
    </>
  )
}
  </div>
  </div>
  
      </div>
       
      </div>



      
      </>
    )
}

else 
{
    return (
        <>
      
    <div>
        <Navbar/>
         <div className='grid grid-cols-12 grid-flow-col my-[6vh] relative'>
         <div className='grid col-span-3 h-[75vh] w-auto '>
         <h1 className='text-lg text-black-300 font-medium'>Filter by Brand
         <span><FontAwesomeIcon icon={faFilter} size='md' className='mx-3 mt-4' color='gray' onClick={()=>SetFilterdrop(!filterdrop)}/></span>
         </h1>
         {
            filterdrop==true ?(
                <>
                <div className='w-1/2 mx-auto'>

             
<select name="cars" id="cars">
  <option>Filter By</option>
  <option >Price</option>
  <option >Brand</option>
  
</select>
                </div>
                </>
            ):(
                <></>
            )
         }
         {
            
data1?.map((val, i)=>{
    console.log(val,"i m object in brand")
    return (
       <>
       <ul className='list-none mt-4'>
       <li className='bg-white shadow-md rounded-md w-3/4 mx-auto p-4 border border-gray-300' onClick={()=>{
                     filteredproductsdata(val?.brand)
                     }}>
                  {val?.brand}
            </li>
       </ul>
       </>
    )
})
               }

         </div>
         
         
         <div className='grid col-span-8'>
      
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* {
     alldata?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
  } */}
  {
    brand =="initial" ?(
<>
{
       stval?.map((val,index)=>{
        console.log(val,"top load data fro stoe")
        return (
          <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        )
       })
}

</>
    ):(
      <>
      {
       alldata?.map((val,index)=>{
        console.log(val,"ni amma tra")
        return (
          <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        )
       })
}

      </>
    )
  }
    </div>
    </div>
    
        </div>
         
        </div>

        
        </>
      )
}

 


}

export default Washingmachinepowders