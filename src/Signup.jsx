import axios from 'axios';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {storage} from './firebaseauth'
import { ref, uploadBytes } from "firebase/storage";
import {v4} from 'uuid'
import { useState } from 'react';
import {faGoogleLogo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcGoogle } from 'react-icons/fa';
import {RxAvatar} from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { registerreducer } from './redux/RegSlice';
function Signup() {
  const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
  const[avatar,setAvatar]=useState(null);
  const[regdata,setregdata]=useState()
  const[check,setcheck]=useState("empty");
  const dispatch = useDispatch()
  
  const fileinput=(e)=>
  {
    const filedata = e.target.files[0];
    console.log(filedata,"i m data");
    setAvatar(filedata);
    

  }

  const handleRegister=(e)=>
  {
    e.preventDefault();
    if(email.length==0 || passw.length==0)
    {
      setcheck("notfound");
    }
    console.log("i m db",email,passw);
    console.log("i m avatar",avatar);
    const imgref=ref(storage,`profileimages/${avatar+v4()}`)
    uploadBytes(imgref,avatar).then(()=>
    {
      alert("Uploaded ime success");
    }).catch((error)=>
    {
        console.log(error,"i m error");
    })
    const formData = new FormData();
formData.append("email", email);
formData.append("password", passw);
formData.append("avatar", avatar);
     const config={
      headers: {
        "Content-Type": "multipart/form-data",
      },
     }
       axios.post("https://vasistastore.com/register", 
       
      formData,config).then((response)=>
       {
        setcheck("success")
            console.log(response.data,"success");
            dispatch(registerreducer(response.data))
            
       }).catch ((error)=>
       {
        setcheck("error")
          console.log(error,"i m error: ")
       })      
  }
    return (
    
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {
             check =="error" ?
             <>
             <div className='bg-red-400 mx-auto w-[40vw] p-3 text-white rounded-lg'>
             <p>Please enter all the missing fields or check your credentials</p>
             </div>
             </>:
             check == "success" ?
             <>
             <div className='bg-green-800 mx-auto w-[40vw] p-3 text-white rounded-lg'>
             <p>Registration successs</p>
             </div>
             </>:<></>
        }
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="httpss://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
            <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setEmail(e.target.value)}  />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=>setPassw(e.target.value)} />
              </div>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload Profile Picture</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e)=>fileinput(e)}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div >
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             onClick={(e)=>handleRegister(e)} >
                Register
              </button>

            </div>
            <div className='flex'>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

   

  

export default Signup