import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useWindowSize from "../hooks/useWindowsize";
import countrydata from '../jsondata/Country.json'
import { useSelector } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const Usermodal = ({ onClose, onSubmit }) => {
  const cartprods=useSelector((state)=>state.cart.items)
  console.log("i am cart data",cartprods)
  
    console.log("inside modal")
    const wsaize=useWindowSize();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address1:"",
      address2:""

    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding property in the formData object
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const[countryid, setCountryid]=useState('');
 const[state, setState]=useState([]);
 const[stateid, setStateid]= useState('');

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

  const userinfo=(e)=>{
    e.preventDefault()
    const body={
           fullname:formData.name,
           email:formData.email,
           phonenumber:formData.phonenumber,
           country:countryid,
           state:stateid,
           addres1:formData.address1,
           address2:formData.address2
          
    }
    axios.post("http://localhost:3001/insertusers",body).then((res)=>{
      console.log("i am resp dara",res.data.status)

         if(res.data.status==true)
         {
             
             console.log("insert done")   
             const fixuid=uuidv4()
             const updatedJsonArr = cartprods.map((item) => ({
              ...item,

            }));
            
            console.log("hamaya i a thre",updatedJsonArr) 
            
         const body={
        proddata:updatedJsonArr,
        orderid:fixuid 
         }
            
             axios.post("http://localhost:3001/addorders",body).then((res)=>{

                  if(res.status==true){
                    console.log("order placed succesfully")
                  }
             }).catch((e)=>{
              console.log("error in inserting derails of roder")

             })
          }
         


    }).catch((err)=>{
      console.log("i am error",err)

    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
if(wsaize.width>=425 && wsaize.width<=768)
{
   return (
       <>
       <div className="popup shadow-lg w-auto m-2 z-10    overflow-x-hidden my-40">
      <div className="popup-inner">
       
      <form className="flex  border   rounded h-auto flex-col gap-4 w-auto max-w-md ">
    
     <div className="row mx-auto m-10 rounded-md w-auto ">
        <h2>Enter Your Delivery Details</h2>
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" value={formData.name}  placeholder="Name"/>
        <input type="text" className="border border-2 p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" value={formData.email}  placeholder="email@email.com"/>
        <PhoneInput
                    country={'In'}
                    className="mt-4 mx-12 text-left w-3/4"
                    placeholder="enter your phone number"
                    value={formData.phone} 
                />
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="Address Lane 1" value={formData.address1} />
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="Address Lane 2" value={formData.address2} />
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
        <Button type="submit" className="w-1/4 mx-auto bg-black  mt-6" onClick={(e)=>userinfo(e)}>
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
    
     <div className="row mx-auto m-10 rounded-md w-auto ">
        <h2>Enter Your Delivery Details</h2>
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="Name"/>
        <input type="text" className="border border-2 p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="email@email.com"/>
        <PhoneInput
                    country={'In'}
                    className="mt-4 mx-12 text-left w-3/4"
                    placeholder="enter your phone number"
                />
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="Address Lane 1"/>
        <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto" placeholder="Address Lane 2"/>
        <div className="content">
        <div className="row">
          <div className="col-sm-12">
         
         <form className="row g-3" onSubmit={handleSubmit}>

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
        <Button type="submit" className="w-1/4 mx-auto bg-black  mt-6" onClick={(e)=>userinfo(e)}>
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
