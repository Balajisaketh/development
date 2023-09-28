
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { allproductsdatareducer } from '../src/redux/Alldata';
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios';
function Layout() {
  const dispatch=useDispatch()
  useEffect(()=>{
       axios.get("http://localhost:3001/getproducts").then((res)=>{
           console.log("response data from layout",res.data.rows)
          dispatch(allproductsdatareducer(res.data.rows))
       }).catch((error)=>{
                alert("no products found")
       })
  },[])
  return (
    <div className='h-screen'>
        <Navbar/>
        <Hero/>
        <Footer/>
        
    </div>
  )
}

export default Layout