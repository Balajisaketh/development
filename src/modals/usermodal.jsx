  import React, { useState } from "react";
  import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
  import PhoneInput from 'react-phone-input-2'
  import 'react-phone-input-2/lib/style.css'
  import useWindowSize from "../hooks/useWindowsize";
  import countrydata from '../jsondata/Country.json'
  import { useSelector } from "react-redux";
  import { Alert } from 'flowbite-react';
  import axios from "axios";
  import { v4 as uuidv4 } from 'uuid';
import { validate } from "uuid";
import { useDispatch } from "react-redux";
import { validationreducer } from "../redux/Alldata";
  const Usermodal = ({ onClose, onSubmit }) => {
    const cartprods=useSelector((state)=>state.cart.items)
    const dispatch=useDispatch();
    console.log("i am cart data",cartprods)
    
      console.log("inside modal")
      const wsaize=useWindowSize();
  const [name,setname]=useState('');
  const [mail,setmail]=useState('')
  const [add,setadd]=useState('');
  const [add1,setadd1]=useState('');
  const [phno,setphno]=useState('');


    const handlename = (e) => {
      console.log("emetre",e.target.value)
      setname(e.target.value)
    };
    const handlemail = (e) => {
      console.log("emetre",e.target.value)
      setmail(e.target.value)
    };
    const handleaddress = (e) => {
      console.log("emetre",e.target.value)
      setadd(e.target.value)

    };
    const handleaddress1 = (e) => {
      console.log("emetre",e.target.value)
      setadd1(e.target.value)
    };
    const handlephone= (e) => {
      console.log(e,"i am edata")
      console.log("emetre",e)
      setphno(e)
console.log("i am enterd in to phone")

    };
    
  const[countryid, setCountryid]=useState('');
  const[state, setState]=useState([]);
  const[stateid, setStateid]= useState('');
  const [price,setprice]=useState()
  const [alertStatus,setAlertStatus]=useState({status: "idle", message: 'data not saved'})
    const handlecounty=(e)=>{
      const getcountryId= e.target.value;
      const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
      setState(getStatedata);
      setCountryid(getcountryId);
    //console.log(getcountryId);
    }

    const handlestate = (e)=>{
      const stateid= e.target.value;
      //console.log(stateid);
      setStateid(stateid);
      
    }
    const Validate=()=>{
      console.log("entered to bvaliate");
      
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      
    if(mail.length ===0 || phno.length ===0 || add.length ===0 || add1.length===0 ||countryid.length==0 || stateid.length==0){
      
      dispatch(validationreducer("empty"))
    }else if(!mail.test(emailRegex)){
     
      
      dispatch(validationreducer("Invalidmail"))
    }else if(phno.length!==10){
      dispatch(validationreducer("invalidphonenumber"))


    }
   else{
    userinfo()
   }

    }
    
    const userinfo=()=>{

      
      
      const updatedJsonArr = cartprods.map((item) => ({
        ...item,
        "status":"orderplaced"

      }));
      console.log(updatedJsonArr,"i am cheking name of prod");
      
      cartprods?.map((product)=>{
        console.log(product.price*product.quantity,"i m data")
        setprice(product.price*product.quantity);

      })
      const calculateTotalPrice = () => {
        // Use reduce to sum up the prices in the orderData array
        const totalPrice = cartprods.reduce((total, order) => total + order.price*order.quantity, 0);
        return totalPrice;
      };
      console.log("i am printed",calculateTotalPrice());

  console.log("i am price data",price)
      const fixuid=uuidv4()
      const body={
        fullname:name,
        email:mail,
        price:calculateTotalPrice(),
        phonenumber:phno,
        country:countryid,
        state:stateid,
        addres1:add,
        address2:add1,
        proddata:updatedJsonArr,
        orderid:fixuid,   
  }
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }


  console.log("i am body data",config,body);
      axios.post("https://vasistastore.com/addorders",body).then((res)=>{
        console.log("i am resp dara",res.data.status)
        if(res.status==true){
                      console.log("order placed succesfully")
                    }
      }).catch((err)=>{
        console.log("i am error in inserting order data",err)

      })

    }

  if(wsaize.width>=425 && wsaize.width<=768)
  {
    return (
        <>
        
        <div className="popup shadow-lg w-auto m-2 z-10    overflow-x-hidden my-40">
          
        <div className='w-full  px-4 h-[70vh] overflow-y-auto 2xl:px-4 pt-4'  >
                   
                    </div>
        <div className="popup-inner">
        <form className="flex  border   rounded h-auto flex-col gap-4 w-auto max-w-md ">
      
      <div className="row mx-auto m-10 rounded-md w-auto ">
          <h2>Enter Your Delivery Details</h2>
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" name="namedata"  placeholder="Name" onChange={(e)=>handlename(e)}/>
          <input type="text" className="border border-2 p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" name="mail" placeholder="email@email.com" onChange={(e)=>handlemail(e)}/>
          <PhoneInput
                      country={'In'}
                      className="mt-4 mx-12 text-left w-3/4"
                      placeholder="enter your phone number"
                      onChange={(e)=>handlephone(e)}
                      
                  />
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  placeholder="Address Lane 1" name="address" onChange={(e)=>handleaddress(e)}/>
          
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  placeholder="Address Lane 2" name="address1" onChange={(e)=>handleaddress1(e)}/>
          <div className="content">
          <div className="row">
            <div className="col-sm-12">
          
          <form className="row g-3" onSubmit={()=>userinfo()}>

                <div className="col-md-3  mt-5  mx-auto">
                          
                      <div className="text-dark border-none"> 
                        <select name='country' className='form-control  border border-red p-2 border-gray-500 w-3/4' onChange={(e)=>handlecounty(e)}>
                          <option value="">--Select Country--</option>
                          {
                          countrydata.map( (getcountry,index)=>(
                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                          ))

                          }
                    
                      
                          </select>           
                      </div>
                      </div>
                      <div className="col-md-3 mt-5">
                      
                      <div className="text-dark"> 
                      <select name='states' className='form-control border border-red p-2 border-gray-500 w-3/4' onChange={(e)=>handlestate(e)}>
                          <option value="">--Select State--</option>
                          {
                            state.map((getstate, index)=>(
                              <option value={getstate.state_id} key={index}>{getstate.state_name }</option>
                            ))
                          }
                        
                        
                          </select>          
                      </div>
                      </div>

              
                  

          </form>
          </div>
          </div>
          </div>
          <div className="flex">
          <Button type="submit" className="w-1/4 mx-auto bg-black  mt-6" onClick={()=>userinfo()}>
          Proceed to Pay
        </Button>
        <Button type="submit" className="w-1/4 mx-auto bg-red-900 mt-6" onClick={onclose}>
          Close
        </Button>
          </div>
      
      </div>
      </form>
        </div>
      </div>
        </>
    )
  }
  else{
    return (
      <div className="popup shadow-sm w-1/2 z-10 mx-auto my-40">
        
        <div className="popup-inner">
        
        <form className="flex  border   rounded h-auto flex-col gap-4 w-auto max-w-md ">
        {
          alertStatus && alertStatus.status==="empty" ?
          <>
                     <div className='bg-green-400 w-[30vw] mx-auto p-3 rounded-md text-white '>
           <Alert  color="danger">
  <span>
    <p>
      <span className="font-medium text-center">
     Please Enter your credentials
      </span>

    </p>
  </span>
</Alert>
</div>

          </>:
          <>
          </>

        }
      <div className="row mx-auto m-10 rounded-md w-auto ">
          <h2>Enter Your Delivery Details</h2>
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" name="namedata"  
          onChange={(e)=>handlename(e)}/>
          <input type="text" className="border border-2 p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" name="mail"  placeholder="email@email.com" onChange={(e)=>handlemail(e)} />
          <PhoneInput
                      country={'In'}
                      className="mt-4 mx-12 text-left w-3/4"
                      placeholder="enter your phone number"
                      value={phno}
                      onChange={(e)=>handlephone(e)}
                  />
                  
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"   placeholder="Address Lane 1" onChange={(e)=>handleaddress(e)}/>
          
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"   placeholder="Address Lane 2" onChange={(e)=>handleaddress1(e)}/>
          
          <div className="content">
          <div className="row">
            <div className="col-sm-12">
          
          <form className="row g-3" >

                <div className="col-md-3  mt-5  mx-auto">
                          
                      <div className="text-dark border-none"> 
                        <select name='country' className='form-control  border border-red p-2 border-gray-500 w-3/4' onChange={(e)=>handlecounty(e)}>
                          <option value="">--Select Country--</option>
                          {
                          countrydata.map( (getcountry,index)=>(
                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                          ))

                          }
                    
                      
                          </select>           
                      </div>
                      </div>
                      <div className="col-md-3 mt-5">
                      
                      <div className="text-dark"> 
                      <select name='states' className='form-control border border-red p-2 border-gray-500 w-3/4' onChange={(e)=>handlestate(e)}>
                          <option value="">--Select State--</option>
                          {
                            state.map((getstate, index)=>(
                              <option value={getstate.state_id} key={index}>{ getstate.state_name }</option>
                            ))
                          }
                        
                        
                          </select>          
                      </div>
                      </div>

              
                  

          </form>
          </div>
          </div>
          </div>
          <div className="flex">
          <Button type="submit" className="w-1/4 mx-auto bg-black  mt-6" onClick={()=>userinfo()}>
          Proceed to Pay
        </Button>
        <Button type="submit" className="w-1/4 mx-auto bg-red-900 mt-6" onClick={onclose}>
          Close
        </Button>
          </div>
      
      </div>
      </form>
        </div>
      </div>
    );
                        }
  };

  export default Usermodal;
