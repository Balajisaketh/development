'use client';
import React, { useCallback, useMemo } from 'react'
import useWindowSize from './hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons';
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
import Sidebarr from './components/Sidebarr';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { sidebarreducer } from './redux/Alldata';
import Fade from 'react-reveal/Fade';
import { alertreducer } from './redux/Alldata';
import { addToCart } from './redux/CartSlice';
import Mobilecard from './components/Mobilecard';

function Stoves() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const checkside=useSelector((state)=>state.prods.checksidebar);
    const productcategory = query.get('category');
    // console.log(productcategory + " product category");
    const windowSize = useWindowSize();
    const [filterdrop,setdropfilter]=useState(false)
    const [drop,setdrop]=useState()
    const [data1,setdata]=useState([])
    const[toggle,settoggle]=useState(true);
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
    
    const cartdata=useSelector((state)=>state.cart.items)
    const [alldata,setdalldata]=useState([])
    const [sorteddata,setsorteddata]=useState();
    console.log(cartdata,'i m cartdone')    
    const [pricefilter ,setpricefilter]=useState("nofilter")
    let count=0;
    useEffect(()=>{
      dispatch(sidebarreducer(false))
    },[])
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
     useEffect(() => {
      console.log(brand,"i am brand chking useeffect");
      brand=='initial' ?
      console.log("do something")
      :
      filteredproductsdata(brand);
       // This will show the updated state
    }, [brand]);
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
           axios.post("https://vasistastore.com/getbycategory",body).then((res)=>{
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
  axios.post('https://vasistastore.com/api/getbrand',body).then((res)=>{
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
  axios.post('https://vasistastore.com/api/getbybrand',body).then((res)=>{
    console.log(res.data,"i m get by brand");
    setvalue(res.data);
  }).catch((err)=>{
    console.error(err,"i m brand error")
  })
}
const filteredproductsdata=(branddata)=>{
  console.log("on click calling brand",branddata)
  const pdata=localStorage.getItem('products');
  setbrand(branddata);
  console.log(pdata,"i m pdata");
console.log("Productbrand",brand)
branddata==="ALL" ? setsorteddata(setdalldata(JSON.parse(pdata)))
: setsorteddata(setdalldata(JSON.parse(pdata).filter((product) => product.brand === branddata)));
  
console.log("chek bey",branddata)
// here filter based on brand
const filteredProducts = JSON.parse(pdata).filter(product => product.brand === branddata);
console.log(filteredProducts,"i am sorted data by brand");
branddata==="ALL" ? setsorteddata(setdalldata(JSON.parse(pdata)))
: setsorteddata(filteredProducts)

pricefilter ==="ascending" ?
lowtohigh() :
hightolow()
// console.log("Productbrand",brand)
// console.log(count,"i m here")
// console.log(stval,"i m here data ")


  }

console.log("i am checking issue",sorteddata)
const lowtohigh=()=>{
  setpricefilter("ascending")
  console.log("entered",brand);
  console.log([...alldata],"i am datta check all")
  const sorted = stval.sort((a, b) => a.price - b.price);
  const filteredData = brand === "initial" || brand=="ALL" ? alldata : alldata.filter((product) => product.brand === brand);
  console.log("ni abba sorted",filteredData);
  const sortagain=alldata.sort((a, b) => a.price - b.price);
  console.log("sorting agai ",sortagain);
  setsorteddata(sortagain);
  console.log(sorteddata,"i am data check")
}
const hightolow=()=>{
setpricefilter("descending")
console.log("entered",brand)
const sorted = stval.sort((a, b) => b.price - a.price);
const filteredData = brand === "initial" || brand=='ALL' ? alldata : alldata.filter((product) => product.brand === brand);
console.log("i am checking  error",filteredData);
const sortagain=filteredData.sort((a, b) => b.price - a.price);
console.log("sorting again  hgih ",sortagain);
setsorteddata(sortagain);

  

}
if(windowSize.width>=375 && windowSize.width<768)
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
  <div className='flex flex-row justify-between'>
            <div className='flex mx-10 my-3'>
         <p className='text-normal text-sm'>Brands</p>
         <FontAwesomeIcon icon={faChevronDown} className='m-1' onClick={()=>setdrop(!drop)}/>
            </div>
            <div className='column'>
            <div className='flex mx-10 my-3'>

         <p className='text-normal text-sm'>Sort price</p>
         <FontAwesomeIcon icon={faChevronDown} className='m-1' onClick={()=>setdropfilter(!filterdrop)}/>
            </div>
            {
      filterdrop==true ?
      (
<div className='z-10 shadow-md m-3 p-3 grid grid-cols-4  h-auto'>

<div className='column'>
  <div onClick={()=>lowtohigh()}>
      <p className='m-1 whitespace-nowrap'>Low to High</p>
      </div>
      <div onClick={()=>hightolow()}>
      <p className='m-1 whitespace-nowrap'>High to Low </p>
      </div>
</div>
</div>
      ) :(
<></>
      )
}

            </div>
            </div>
          
            {
              drop ==true ?
              (
                <>
                {
        
        data1?.map((val, i)=>{
            console.log(val,"i m object in brand mobile")
            return (
               <>
                        <>
       <div className=' z-10 shadow-md  grid grid-cols-4 w-1/2 h-auto m-3 px-3'>
         
    <p className='flex text-center ' onClick={()=>{
                             filteredproductsdata(val?.brand)
                             }}>{val?.brand}</p>
       </div>
       </>
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

       <div className='column bg-white'>
       

       <div className="col-span-6 gap-1 m-3 w-3/4  space-y-2 mx-auto">
     
       {
  brand ==='All' ?
  (
        <>
        {
   stval?.map((val,index)=>{
    console.log(val,"ni amma tra")
    return (
      <Fade bottom>
      <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      </Fade>
    )
   })
}
        </>
  ):

  brand =="initial" ?(
    <>
    {
       stval?.map((val,index)=>{
        console.log(val,"ni amma tra")
        return (
          <Fade bottom>
          <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
          </Fade>
          )
       })
        
    }
    </>
        ):
(brand === 'All' || brand === 'initial') && pricefilter === 'ascending' ? (
  <>
    {sorteddata?.map((val, index) => (
       <Fade bottom>
       <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
       </Fade>
    ))}
  </>
) : (brand === 'All' || brand === 'initial') && pricefilter === 'descending' ? (
  <>
    {sorteddata?.slice().reverse().map((val, index) => (
       <Fade bottom>
       <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
       </Fade>
    ))}
  </>
) : (
  
  pricefilter!=="ascending" && pricefilter!=="descending" ?
  (
    <>
    
  {alldata
      ?.filter((val) => val?.brand === brand).map((val, index) => (
        <Fade bottom>
        <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        </Fade>
      ))}
    </>
  )
 :
 pricefilter=="ascending" ?
(
  <>
  
  {sorteddata?.map((val, index) => (
 <Fade bottom>
 <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
 </Fade>
    ))}
  </>
):
pricefilter=="descending" ?
(
  <>
  {/* <p>i am higher</p> */}
  {sorteddata?.map((val, index) => (
       <Fade bottom>
       <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
       </Fade>
    ))}
  </>
):
(
  <>
  </>
)
)
}
        </div>
     </div>
     </div>
          </>
        ) :
        (
          <>
          <div className='column bg-white'>
          <div className='col-span-12 h-10'>
          <div className='flex lfex-row justify-between'>
            <div className='flex mx-10 my-3'>
         <p className='text-normal text-sm'>Brands</p>
         <FontAwesomeIcon icon={faChevronDown} className='m-1' onClick={()=>setdrop(!drop)}/>
            </div>
            <div className='flex mx-10 my-3'>
         <p className='text-normal text-sm'>Sort price</p>
         <FontAwesomeIcon icon={faChevronDown} className='m-1' onClick={()=>setdropfilter(!filterdrop)}/>
            </div>
            
            </div>
          
  </div>
       {/* <div className='mx-auto w-4/5 h-auto p-3 flex flex-row mx-3 bg-white border border-2 z-20 mt-4 shadow-sm rounded'>
        <FontAwesomeIcon icon={faFilter} size='lg' className='mx-2'/>
        <p>Filter</p>
         
       </div> */}
         {
              drop ==true ?
              (
                <>
                {
        
        data1?.map((val, i)=>{
            console.log(val,"i m object in brand mobile")
            return (
               <>
                        <>
       <div className=' z-10 shadow-md  grid grid-cols-4 w-1/2 h-10 m-3 px-3'>
         
    <p className='flex tex-center' onClick={()=>{
                             filteredproductsdata(val?.brand)
                             }}>{val?.brand}</p>
       </div>
       </>
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
          
          {
      filterdrop==true ?
      (
<div className='absolute top-20  right-4 z-10 shadow-md m-3 p-3'>

<div className='column'>
  <div onClick={()=>lowtohigh()}>
      <p className='m-1' >Low to High</p>
      </div>
      <div onClick={()=>hightolow()}>
      <p className='m-1'>High to Low </p>
      </div>
</div>
</div>
      ) :(
<></>
      )
}
       <div className="col-span-6 gap-1 m-3 w-3/4  space-y-2 mx-auto">
     
       {
  brand ==='All' ?
  (
        <>
        {
   stval?.map((val,index)=>{
    console.log(val,"ni amma tra")
    return (
      <Fade bottom>
      <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      </Fade>
      )
   })
}
        </>
  ):

  brand =="initial" ?(
    <>
    {
       stval?.map((val,index)=>{
        console.log(val,"ni amma tra")
        return (
          <Fade bottom>
          <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
          </Fade>
      )
       })
        
    }
    </>
        ):
(brand === 'All' || brand === 'initial') && pricefilter === 'ascending' ? (
  <>
    {sorteddata?.map((val, index) => (
       <Fade bottom>
       <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
       </Fade>
    ))}
  </>
) : (brand === 'All' || brand === 'initial') && pricefilter === 'descending' ? (
  <>
    {sorteddata?.slice().reverse().map((val, index) => (
       <Fade bottom>
       <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
       </Fade>
    ))}
  </>
) : (
  
  pricefilter!=="ascending" && pricefilter!=="descending" ?
  (
    <>
    
  {alldata
      ?.filter((val) => val?.brand === brand).map((val, index) => (
        <Fade bottom>
        <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        </Fade>
      ))}
    </>
  )
 :
 pricefilter=="ascending" ?
(
  <>
  
  {sorteddata?.map((val, index) => (
       <Fade bottom>
      <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      </Fade>
    ))}
  </>
):
pricefilter=="descending" ?
(
  <>
  {/* <p>i am higher</p> */}
  {sorteddata?.map((val, index) => (
       <Fade bottom>
      <Mobilecard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      </Fade>
    ))}
  </>
):
(
  <>
  </>
)
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


// else if(windowSize.width>=768 && windowSize.width<=1023){
//   return (
//       <>
//       <div>
//       <Navbar/>
//        <div className='grid grid-cols-12 grid-flow-col my-[6vh] relative'>
//        <div className='grid col-span-3 h-[75vh] w-auto '>
//        <h1 className='text-lg text-black-300 font-medium'>Filter by Brand
       
//        </h1>
     
//        {
          
//           data1?.map((val, i)=>{
//               console.log(val,"i m object in brand")
//               return (
//                  <>
//                  <ul className='list-none mt-4'>
//                  <li className='bg-white shadow-md rounded-md w-3/4 mx-auto p-4 border border-gray-300' onClick={()=>{
//                                filteredproductsdata(val?.brand)
//                                }}>
//                             {val?.brand}
//                       </li>
//                  </ul>
//                  </>
//               )
//           })
//                          }

//        </div>
       
       
//        <div className='grid col-span-8'>
    
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

// {
//   brand=='initial' && pricefilter=="ascending"?
//   (
//    <>
//    {
//       alldata?.map((val,index)=>{
//         console.log(val,"ni amma tra")
//         return (
//           <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
//             <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
//            <p className='text-left mx-3 font-medium mt-3'>{val?.name}</p>
//            <div className='flex mx-4 space-x-3'>
//         <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
//         <p className='mt-3 font-medium'>{val?.price}</p>
//         </div>
//         <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-2/3 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.name,val?.uid)}>
//           Add to Cart
//         </div>
//           </div>
//         )
//        })
//    }
//    </>
//   ) :
//   brand=='initial' && pricefilter=="descending"?
//   (
//    <>
//    {
//       sorteddata?.map((val,index)=>{
//         console.log(val,"ni amma tra")
//         return (
//           <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
//             <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
//            <p className='text-left mx-3 font-medium mt-3'>{val?.name}</p>
//            <div className='flex mx-4 space-x-3'>
//         <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
//         <p className='mt-3 font-medium'>{val?.price}</p>
//         </div>
//         <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-3/4 " onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.name,val?.uid)}>
//           Add to Cart
//         </div>
//           </div>
//         )
//        })
//    }
   
//    </>

//   ) :
//   brand =="All" || brand=="initial" ?(
// <>
// {
//      stval?.map((val,index)=>{
//       console.log(val,"ni amma tra")
//       return (
//         <Tabproductcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
//       )
//      })
// }
// </>
//   ):(
//     <>
//     {
//       brand=='initial' && pricefilter=="ascending"?
//       (
//        <>
//        {
//           alldata?.map((val,index)=>{
//             console.log(val,"ni amma tra")
//             return (
//               <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
//                 <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
//                <p className='text-left mx-3 font-medium mt-3'>{val?.name}</p>
//                <div className='flex mx-4 space-x-3'>
//             <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
//             <p className='mt-3 font-medium'>{val?.price}</p>
//             </div>
//             <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white " onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.name,val?.uid)}>
//               Add to Cart
//             </div>
//               </div>
//             )
//            })
//        }

//        </>
//       ) :
//       brand=='initial' && pricefilter=="descending"?
//       (
//        <>
//        {
//           alldata?.map((val,index)=>{
//             console.log(val,"ni amma tra")
//             return (
//               <div className='column  mt-3 mx-auto border border-2 rounded   border-gray-100  h-auto shadow-md '>
//                 <img src={val?.imagepath} className='h-40 w-auto mx-auto mt-5'/>
//                <p className='text-left mx-3 font-medium mt-3'>{val?.name}</p>
//                <div className='flex mx-4 space-x-3'>
//             <FontAwesomeIcon icon={faIndianRupeeSign} className=" mt-4"/>
//             <p className='mt-3 font-medium'>{val?.price}</p>
//             </div>
//             <div className="rounded-md  py-3 px-2  bg-orange-400 whitespace-nowrap text-white w-3/4 mx-auto m-4" onClick={()=>dispatching(val?.imagepath,val?.price,val?.description,val?.name,val?.uid)}>
//               Add to Cart
//             </div>
//               </div>
//             )
//            })
//        }
       
//        </>

//       ) :
//      alldata?.map((val,index)=>{
//       console.log(val,"ni amma tra")
//       return (
//         <Tabproductcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
//       )
//      })
// }
//     </>
//   )
// }
//   </div>
//   </div>
  
//       </div>
       
//       </div>



      
//       </>
//     )
// }
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
                                                                <div className='mt-10 mx-auto  column '>
                  <h2 className='font-bold mb-5'>Sort By Price</h2>
          <div className='flex justify-center'>
        <input type='radio' name="option" onClick={()=>lowtohigh()}/>
        <p className='mx-2'>Low to High</p>
          </div>
          <div className='flex justify-center my-4'>
        <input type='radio' name="option" onClick={()=>hightolow()}/>
        <p className='mx-2'>High to Low</p>
          </div>
       </div>

       </div>
       
       
       <div className='grid col-span-8'>
    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {
    brand ==='All' ?
    (
          <>
          {
     stval?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Tabproductcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
}
          </>
    ):

    brand =="initial" ?(
      <>
      {
         stval?.map((val,index)=>{
          console.log(val,"ni amma tra")
          return (
            <Tabproductcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
          )
         })
          
      }
      </>
          ):
  (brand === 'All' || brand === 'initial') && pricefilter === 'ascending' ? (
    <>
      {sorteddata?.map((val, index) => (
        <Tabproductcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ) : (brand === 'All' || brand === 'initial') && pricefilter === 'descending' ? (
    <>
      {sorteddata?.slice().reverse().map((val, index) => (
        <Tabproductcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ) : (
    
    pricefilter!=="ascending" && pricefilter!=="descending" ?
    (
      <>
      
    {alldata
        ?.filter((val) => val?.brand === brand).map((val, index) => (
          <Tabproductcard
            key={index}
            productname={val?.name}
            imageUrl={val?.imagepath}
            price={val?.price}
            description={val?.description}
            uid={val?.uid}
          />
        ))}
      </>
    )
   :
   pricefilter=="ascending" ?
  (
    <>
    
    {sorteddata?.map((val, index) => (
        <Tabproductcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ):
  pricefilter=="descending" ?
  (
    <>
    {/* <p>i am higher</p> */}
    {sorteddata?.map((val, index) => (
        <Tabproductcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ):
  (
    <>
    </>
  )
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
         <h1 className='text-lg text-black-300 font-bold'>Filter By Brand
         
         </h1>  
        <div className='column'>

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
                <div className='mt-10 mx-auto  column '>
                  <h2 className='font-bold mb-5'>Sort By Price</h2>
          <div className='flex justify-center'>
        <input type='radio' name="option" onClick={()=>lowtohigh()}/>
        <p className='mx-2'>Low to High</p>
          </div>
          <div className='flex justify-center my-4'>
        <input type='radio' name="option" onClick={()=>hightolow()}/>
        <p className='mx-2'>High to Low</p>
          </div>
       </div>
       </div>
               </div>

         
         <div className='grid col-span-8'>
      
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* {
     alldata?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
  } */}
  {/* {
    brand=='initial' && pricefilter=="ascending"?
    (
     <>
     {
        sorteddata?.map((val,index)=>{
          console.log(val,"ascendin")
          return (
            
              <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            
          )
         })
     }
     </>
    ) :
    brand=='initial' && pricefilter=="descending"?
    (
     <>
     {
      
      sorteddata?.map((val,index)=>{
          console.log(val,"dscnding")
          
            return (
              <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
            
          )
         })
     }
     </>

    ) :
    brand=="All" || brand =="initial"?(
<>
{
       stval?.map((val,index)=>{
        console.log(val,"top load data fro stoe")
        return (
          <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        )
       })
}

</>
    ):(
      <>
      {
        brand=='initial' && pricefilter=="ascending"?
         (
          <>
          {
              sorteddata?.map((val,index)=>{
                console.log(val,"ni amma tra")
                return (
                  <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
                )
               })
          }
          </>
         ) :
         brand=='initial' && pricefilter=="descending"?
         (
          <>
          {
              sorteddata?.map((val,index)=>{
                console.log(val,"ni amma tra")
                return (
                  <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
                )
               })
          }
          </>

         ) :
       alldata?.map((val,index)=>{
        console.log(val,"ni amma tra")
        return (
          <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
        )
       })
}

      </>
    )
  } */}
    {
    brand ==='All' ?
    (
          <>
          {
     stval?.map((val,index)=>{
      console.log(val,"ni amma tra")
      return (
        <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
      )
     })
}
          </>
    ):

    brand =="initial" ?(
      <>
      {
         stval?.map((val,index)=>{
          console.log(val,"ni amma tra")
          return (
            <Productcard key={index} productname={val?.name} imageUrl={val?.imagepath} price={val?.price} description={val?.description} uid={val?.uid}/>
          )
         })
          
      }
      </>
          ):
  (brand === 'All' || brand === 'initial') && pricefilter === 'ascending' ? (
    <>
      {sorteddata?.map((val, index) => (
        <Productcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ) : (brand === 'All' || brand === 'initial') && pricefilter === 'descending' ? (
    <>
      {sorteddata?.slice().reverse().map((val, index) => (
        <Productcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ) : (
    
    pricefilter!=="ascending" && pricefilter!=="descending" ?
    (
      <>
      
    {alldata
        ?.filter((val) => val?.brand === brand).map((val, index) => (
          <Productcard
            key={index}
            productname={val?.name}
            imageUrl={val?.imagepath}
            price={val?.price}
            description={val?.description}
            uid={val?.uid}
          />
        ))}
      </>
    )
   :
   pricefilter=="ascending" ?
  (
    <>
    
    {sorteddata?.map((val, index) => (
        <Productcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ):
  pricefilter=="descending" ?
  (
    <>
    {/* <p>i am higher</p> */}
    {sorteddata?.map((val, index) => (
        <Productcard
          key={index}
          productname={val?.name}
          imageUrl={val?.imagepath}
          price={val?.price}
          description={val?.description}
          uid={val?.uid}
        />
      ))}
    </>
  ):
  (
    <>
    </>
  )
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