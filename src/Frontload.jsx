'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { filterreducer, frontloadreducer } from './redux/FrontloadSlice';
import Productcard from './components/Productdata';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function Frontload() {
    const windowSize = useWindowSize();
    const data=["All","bosch","Tide","surfxcel","ifb","Ariel"]
    const dispatch=useDispatch()
    const router=useNavigate()
<<<<<<< Updated upstream
    const filtrrproddata=useSelector((state)=>state.frontload.frontliquid)
    console.log(filtrrproddata,"i m data from store filter")
=======
    // const filtrrproddata=useSelector((state)=>state.frontload.frontliquid)
    const alertstatus=useSelector((state)=>state.prods.alertdata)
    console.log(alertstatus,"i m alert status")
    // console.log(filtrrproddata,"i m data from store filter")
>>>>>>> Stashed changes
    const [brand,setbrand]=useState("initial")
    const [stval,setvalue]=useState([])
    const [renddata,setrendata]=useState("yes")
    const cartdata=useSelector((state)=>state.cart.items)
    console.log(cartdata,'i m cartdone')    
    let count=0;
useEffect(()=>{
    console.log("i m rend data",renddata)

    const pdata=localStorage.getItem('products');
    console.log("hi i m from store",pdata)

    try{
        const body={
            category:"frontload"
       }
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
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
},[]);
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
const filteredproductsdata=(branddata)=>{
    const pdata=localStorage.getItem('products');
    setbrand(branddata);
    console.log(pdata,"i m pdata");
console.log("Productbrand",branddata)
const filteredProductsfromtopload = branddata === 'All'
  ? JSON.parse(pdata)
  : JSON.parse(pdata).filter((product) => product.brand === branddata.toLowerCase());
console.log( filteredProductsfromtopload,"i m here filtered")
filteredProductsfromtopload.map((product,index)=>{ 
const objfiltered={
    branddata:  product.brand,
    productname:  product.productname,
    price:  product.price,
    quantity:product.quantity,
    category:product.category,
    imagepath:product.imagepath,
    uid:product.uid,
    description:product.description


}
console.log(objfiltered,"i m objected")    
dispatch(frontloadreducer(objfiltered))
})

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
        filtrrproddata?.map((val,index)=>{
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
<<<<<<< Updated upstream
                data?.map((val,index)=>(
<ul className='list-none mt-4'>
                <li className='bg-white shadow-md rounded-md w-3/4 mx-auto p-4 border border-gray-300' onClick={()=>{
                    filteredproductsdata(data[index])
                    }}>
                 {val}
                </li>
               </ul>
                ))
=======
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
            
data1.reverse()?.map((val, i)=>{
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
>>>>>>> Stashed changes
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
                  ):brand.toLocaleLowerCase()=="bosch" ?(
                    <>
                    {
       filtrrproddata?.map((val,index)=>{
            console.log(val?.imagepath,'i m  bisch value');
            return (
                <>
 
                <Productcard key={index} productname={val?.productname} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
                </>
                 
            )
                 
        })
    }
                    </>
                  ):brand.toLocaleLowerCase()=="tide"?(<>
                  <h1>pusro</h1>
                  </>):brand.toLocaleLowerCase()=="surfxecl"?(
                    <>
                    <h1>surfcslk</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="ifb"?(
                    <>
                    <h1>ifb</h1>
                    </>
                  ):brand.toLocaleLowerCase()=="ariel" ?(
                    <>
                    <h1>Ariel</h1>
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


export default Frontload