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

function Stoves() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const productcategory = query.get('category');
    // console.log(productcategory + " product category");
    const windowSize = useWindowSize();
    const [data1,setdata]=useState([])
    const dispatch=useDispatch()
    const router=useNavigate()
    const filtrrproddata=useSelector((state)=>state.topload)
    console.log("i aM Data from topload",filtrrproddata);
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

if(windowSize.width<=425)
{
    return (
   <>


   </>
      )
}
else if(windowSize.width<=768 && windowSize.width<=820){
    return (
        <>
        <div className='grid grid-cols-12 row grid-flow-col relative  w-full h-auto'>
            <div className='w-screen h-auto absolute top-3 bg-red-300'>

              <Navbar/>

        
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

export default Stoves