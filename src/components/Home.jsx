import axios from 'axios';
import React from 'react'
import { useState } from 'react';
function Home() {
  const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
  const handleform=(e)=>
  {
    e.preventDefault()
    console.log("i m db");
     const body={
      "email": email,
      "password": passw
     }
       axios.post("http://localhost:3001/login",body).then((response)=>
       {
            console.log(response.data.token,"success");
            localStorage.setItem("token",response.data.token);
       }).catch ((error)=>
       {
          console.log(error,"i m error: ")
       })
  }
  
    return (
    
    <div>
      <img src="http://localhost:3002/mob1.jpg"/>
      	<div>
			<form action=""> 
      <div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="pass">Password</label>
					<input type="text" name="password" id="pass" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
				</div>  
			<button type="submit" onClick={(e)=>handleform(e)}>button</button>
			</form>
		</div>
    </div>
  )
}

export default Home