// import React from 'react'
// import axios from 'axios';
// import { Alert } from 'flowbite-react';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {RxAvatar} from 'react-icons/rx';
// import { useDispatch } from 'react-redux';

// import { useNavigate } from "react-router-dom";
// function Login() {
//     const[email,setEmail]=useState(""); 
// 	const[passw,setPassw]=useState("");
//   const [status,setStatus]=useState("");
// const dispatch=useDispatch();
// const history=useNavigate();
// const[res,setres]=useState();
// const handlelogin=(e)=>
// {
//   e.preventDefault()
//   console.log("hi")
  
//   console.log("i m db",email,passw);
//   if(email.length==0)
//   {
//     setStatus("notentered");
//   }
//   else if(passw.length==0)
// ========
// function Home() {
//   const[email,setEmail]=useState(""); 
// 	const[passw,setPassw]=useState("");
//   const[regdata,setregdata]=useState()
//   console.log("email",email);
//   const handlelogin=()=>
//   {
  
//     console.log("hi")
//     console.log("i m db",email,passw);
  
//        axios.post("https://vasistastore.com/login",{email : email, password:passw}).then((response:any)=>
//        {
//         console.log(response.data,"i am response");
//            if(response.status=='success')
//            {
             
//              console.log(response.data.token,"success");
//              localStorage.setItem("token",response.data.token);
//              response.json({data:response.data});
//            }
//            else{
//                  console.log("error ")
//            }
//        }).catch ((error)=>
//        {
//           console.log(error,"i m error: ")
//        })
//   }
//   const logdata=()=>
//   {
//     console.log(email,"email: ")

//   }
//   const handleRegister=(e:any)=>
// >>>>>>>> Stashed changes:src/components/Home.tsx
//   {
//     setStatus("notentered");
//   }
// <<<<<<<< Updated upstream:src/Login.jsx
//   else
//   {
//    const body={
//     "email": email,
//     "password": passw
//    }
//      axios.post("https://vasistastore.com/login",body).then((response)=>
//      {
//       console.log(response,"i am response");
//          if(response.status='success')
//          {
//             setres(response.data)
//             setStatus(response.status)
//            console.log(response.data.token,"success");
         
//            localStorage.setItem("token",response.data.token);
//            dispatch(loginreducer(response.data))
//            console.log(response,"dispatched");
//            history("/layout");
//          }
//          else{
//                console.log("error ")
               
//          }
//      }).catch ((error)=>
//      {
//         console.log(error,"i m error: ")
//      })
// }
// }
// ========
  
// >>>>>>>> Stashed changes:src/components/Home.tsx
//     return (
    
//     <>
    
      
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         {
//           status =="notentered" ?
//            <>
//            <div className='bg-red-400 w-[30vw] mx-auto p-3 rounded-md '>
//            <Alert color="info">
//   <span>
//     <p>
//       <span className="font-medium text-center">
//         Enter your details      
//       </span>

//     </p>
//   </span>
// </Alert>
// </div>
//            </>:
//            <>
  
//            </>
         
//         }
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="httpss://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Login  to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST"  encType="multipart/form-data">
//             <div>
//             <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               onChange={(e)=>
//               {console.log("mail",e.target.value);
//                 setEmail(e.target.value)}}/>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                onChange={(e)=>{
//                 console.log("pass",e.target.value);
//                 setPassw(e.target.value)}

//                }/>
//               </div>
//             </div>
            

//             <div className='flex space-x-10'>
             
//               <button
//                 type="submit"
//                 className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                onClick={()=>handlelogin()}>
//                 Login
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </>
//   )


    
// }
// export default Login