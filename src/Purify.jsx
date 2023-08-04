'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { filterreducer } from './redux/Alldata';
import Productcard from './components/Productdata';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function Purifiers() {
    const windowSize = useWindowSize();
    const [data1,setdata]=useState([])
    const dispatch=useDispatch()
    const router=useNavigate()
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const productcategory = query.get('category');
    console.log(productcategory + " product category");
    const filtrrproddata=useSelector((state)=>state.prods.filterdata)
    console.log(filtrrproddata,"i m data from store filter bosch")
    const [brand,setbrand]=useState("initial")
    const [stval,setvalue]=useState([])
    const [renddata,setrendata]=useState("yes")
    const cartdata=useSelector((state)=>state.cart.items)
    console.log(cartdata,'i m cartdone')    
    let count=0;
    useEffect(()=>{
      console.log("useeffect called")
      const body={
          category:productcategory
      }
      console.log(body,'i m product')
  axios.post("http://localhost:3001/api/getbybrand",body).then((res)=>{
      setdata(res.data)

  }).catch((err)=>{
      console.log(err,"i m eror")
      
  });
  },[])
useEffect(()=>{
    console.log("i m rend data",renddata)

    const pdata=localStorage.getItem('products');
    console.log("hi i m from stor",pdata)

    try{
        const body={
            category:productcategory
       }
            // Fetch data from the API if not available in localStorage
            axios.post("http://localhost:3001/getbycategory",body).then((res)=>{
                console.log(res.data,'i m resdata')
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
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
},[]);
const filteredproductsdata=(branddata)=>{
    const pdata=localStorage.getItem('products');
    setbrand(branddata);
    console.log(pdata,"i m pdata");
console.log("Productbrand",branddata)
const filteredProducts = branddata === 'All'
  ? JSON.parse(pdata)
  : JSON.parse(pdata).filter((product) => product.brandname === branddata.toLowerCase());
console.log(filteredProducts,"i m here filtered")
const objfiltered={
    branddata: filteredProducts.brandname,
    productname: filteredProducts.productname,
    price: filteredProducts.price,
    quantity:filteredProducts.quantity,
    category:filteredProducts.category,
    imagepath:filteredProducts.imagepath,
    uid:filteredProducts.uid,
    description:filteredProducts.description


}
console.log("brands",objfiltered)
dispatch(filterreducer(objfiltered))

}
console.log("Productbrand",brand)
console.log(count,"i m here")
console.log(stval,"i m here data ")
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
            <div className='w-screen h-auto my-[42vh]'>
            <div className='grid grid-cols-12 grid-flow-col'>
         <div className='grid col-span-3 h-screen w-auto bg-green-400'>
               <p>jhfdx</p>
         </div>
         <div className='grid col-span-9'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            )
        })
    }
    </div>
    </div>
    
        </div>
        
            </div>
           

              
        </div>

        {/* <div className='grid grid-cols-12 grid-flow-col'>
         <div className='grid col-span-3 h-screen w-auto bg-green-400'>
               <p>jhfdx</p>
         </div>
         <div className='grid col-span-9'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            )
        })
    }
    </div>
    </div>
    
        </div>
         */}


        
        </>
      )
}

else 
{
    return (
        <>
        {/* <div className='grid grid-cols-12 row grid-flow-col relative  w-screen h-auto'>
            <div className='w-screen h-auto absolute top-3 '>

              <Navbar/>

        
            </div>
             <div className='w-screen h-auto my-[42vh] '>
            <div className='grid grid-cols-12 grid-flow-col w-screen h-auto'>
         <div className='col-span-3 h-auto      '>
               <h1 className='text-xl text-black font-medium'>Filter by Brand</h1>
             <div className='col-span-2 w-3/4 mx-auto'>
             {
                data?.map((val,index)=>(
<ul className='list-none mt-4'>
                <li className='bg-white shadow-md rounded-md p-4 border border-gray-300' onClick={()=>{
                    filteredproductsdata(data[index])
                    }}>
                 {val}
                </li>
               </ul>
                ))
               }
               
             </div>

         </div>
         <div className='grid col-span-8'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {
                  brand =='All' ? (
                    <>
                    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            )
        })
    }
                    </>
                  )  : brand== 'Purosis' || 'purosis' ?
                  (<>
                  <h1>puros</h1>
                  </>): brand=='Aqua' || 'aqua' ?
                  (
                    <></>
                  ): brand=='Hindustan uniliver'|| 'hindustanuniliver' || 'hindustan uniliver' ?
                  (
                    <></>
                  ) :brand=='kent'|| 'kent' ?(
<>
</>
                  ):brand =='Faber || faber'
            }
    
    </div>
    </div>
    
        </div>
        
            </div> 
          

              
        </div> */}
    <div>
        <Navbar/>
         <div className='grid grid-cols-12 grid-flow-col my-[6vh]'>
         <div className='grid col-span-3 h-[75vh] w-auto '>
         <h1 className='text-xl text-black font-medium'>Filter by Brand</h1>
       {
        data1?.map((val, i)=>{
          console.log(val,"i am from water filters")
          if(val==null || val==undefined)
          {
            <></>
          }
          else{
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
                          }
      })
    
       }
         </div>
         {/* <div className='grid col-span-9'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            )
        })
    }
    </div>
    </div> */}
         <div className='grid col-span-8'>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {
                  brand.toLocaleLowerCase() =='all'  ? (
                    <>
                    {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <>
                
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
                </>
            )
        })
    }
                    </>
                  ):brand.toLocaleLowerCase()=="aqua" ?(
                    <>
                    <h1>aqua</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="purosis"?(<>
                  <h1>pusro</h1>
                  </>):brand.toLocaleLowerCase()=="bluestar"?(
                    <>
                    <h1>bluestar</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="kent"?(
                    <>
                    <h1>kent</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="livpure" ?(
                    <>
                    <h1>livpure</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="faber" ?(
                    <>
                    <h1>faber</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="initial" ?(
                    <>
                                 {
        stval?.map((val,index)=>{
            console.log(val?.uid,'i m value');
            return (
                <>
                
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
                </>
            )
        })
    }
                    </>
                  ) :(<></>)
            }

    </div>
    </div>
    
        </div>
         
        </div>

        
        </>
      )
}

 
}


export default Purifiers