import useWindowSize from "../hooks/useWindowsize"
function OrderData({price,imageurl,quantity,productname,status}){
    console.log("i am entered orders comp",price,imageurl,quantity,productname,status)
    const wsize=useWindowSize()
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