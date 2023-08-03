import React from 'react'
import useWindowSize from '../hooks/useWindowsize'
import { useSelector } from 'react-redux'
const Respcard =()=> {
    const filteredprodsdata=useSelector((state)=>state.prods.filterdata)
    console.log(filteredprodsdata,"in m respcard")
    const windowSize=useWindowSize()
    windowSize.width>820 && windowSize.width<=2560 ?
<>
{
    filteredprodsdata?.map((val,index)=>(
        <div className='grid col-span-3 shadow-md bg-white h-screen w-full'>
            <h1>esrpp</h1>
        <div className='column'>
        <div className="mb-4">
         <img
           src={val?.imagepath}
           alt={val?.productname}
           className="w-full h-auto object-contain rounded-md"
         />
       </div>
       <div className="mb-5">
         <h3 className="text-xl font-bold">{val?.productname}</h3>
         <p>{val?.description}</p>
       </div>
     <div className='grid grid-flow-col'>
         <div className='col-span-1'>
 {val?.price}
         </div>
      <div className='col-sapn-2'>
    Add to cart
      </div>
     </div>
        </div>
     </div>
    ))
}
</> :(<>
</>)
 
  
}

export default Respcard