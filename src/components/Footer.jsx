// import { faSquare } from '@fortawesome/free-regular-svg-icons'
// import { faAmbulance} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'


import React from 'react'
import Fade from "react-reveal";
import logo from '../images/logo.jpg'
import useWindowSize from '../hooks/useWindowsize';
function Footer() {
  const wsize = useWindowSize();
  if(wsize.width>=375 && wsize.width<768)
  {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-6 ">
              <img src={logo} className='mx-40 rounded-full h-14 w-10'/>
              <h2 className="text-2xl font-semibold text-white">Sri vashista</h2>
              <p className="text-2xl font-semibold text-white">Enterprises</p>
             
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Our products</h2>
              <ul className="space-y-2 justify-start">
              <li><p className="hover:text-blue-500">Washing liquids</p></li>
                <li><p className="hover:text-blue-500">Stoves</p></li>
                <li><p className="hover:text-blue-500">Chimneys</p></li>
                <li><p className="hover:text-blue-500">Geysers</p></li>
                <li><p className="hover:text-blue-500">Water purifiers</p></li>
                
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Services</h2>
              <ul className="space-y-2">
              <li><p className="hover:text-blue-500 text-center">Water filter Servicing</p></li>
                <li><p className="hover:text-blue-500 text-center">Mineral Water plant</p></li>
                <li><p className="hover:text-blue-500 text-center">Washing Machine Servicing</p></li>
                
              </ul>
            </div>
            <div className="mb-6 ">
              <h2 className="text-2xl font-semibold text-white mb-4">Address</h2>
              <p className='text-left text-lg text-center'>Cyan Road</p>
              <p className='text-left text-lg text-center'>VengalraoNagar,Ratnam School Street,Nellore,524004</p>
              
             
             
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sri vashista. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  else if(wsize.width>=768 && wsize.width<1023)
  {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-6 ">
            <img src={logo} className='rounded-full w-[60px] h-[60px] mx-40'/>
              <h2 className="text-2xl font-semibold text-white ">Sri vashista</h2>
              <p className="text-xl font-semibold text-white mt-1">Enterprises</p>
             
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4 text-left">Our products</h2>
              <ul className="space-y-2 justify-start">
              <li><p className="hover:text-blue-500 text-left">Washing liquids</p></li>
                <li><p className="hover:text-blue-500 text-left">Stoves</p></li>
                <li><p className="hover:text-blue-500 text-left">Chimneys</p></li>
                <li><p className="hover:text-blue-500 text-left">Geysers</p></li>
                <li><p className="hover:text-blue-500 text-left">Water purifiers</p></li>
                
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Services</h2>
              <ul className="space-y-2">
              <li><p className="hover:text-blue-500 text-center">Water filter Servicing</p></li>
                <li><p className="hover:text-blue-500 text-center">Mineral Water plant</p></li>
                <li><p className="hover:text-blue-500 text-center">Washing Machine Servicing</p></li>
                
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4 text-left">Address</h2>
              <p className='text-left text-lg'>Cyan Road</p>
              <p className='text-left text-lg'>VengalraoNagar,Ratnam School Street,Nellore,524004</p>
              
             
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sri vashista. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }

//   return (
//     <Fade up>
//     <div className='bg-[#2F80ED] '>
//     <div className='grid grid-cols-12 py-20'>
//      <div className='col-span-3 column space-y-5 ml-4'>
//     <h2 className='text-white popins text-xl'>Phone Number</h2>
//     <p className='text-white popins'>+91 6305618403</p>
//      </div>
//      <div className='col-span-3 space-y-5'>
//      <h2 className='text-white popins text-xl'>Email</h2>
//      <p className='text-white popins'>shyam@mindfreak.dev</p>
//      </div>
//      <div className='col-span-3 space-y-5'>
//      <h2 className='text-white popins text-xl'>Address</h2>
//      <p className='text-white w-40 popins'>261, 447 Broadway, 2nd Floor, New York, 
//      NY, New York, US, 10013</p>
//      </div>
//      <div className='col-span-3 mx-30'>
// <h1 className='text-white text-2xl'>Services provided</h1>
// <ul className='text-white my-3 space-y-2 popins'>
//     <li>App Development</li>
//     <li>Full Stack Development</li>
//     <li>OS Development</li>
//     <li>Graphic Design </li>
// </ul>
//      </div>
//      {/* <div className='col-span-3 mx-30 space-x-3 ml-4'>
//      <FontAwesomeIcon icon={faFacebook} size="2xl" color="white"/>
//      <FontAwesomeIcon icon={faTwitter} size="2xl" color="white"/>
//      <FontAwesomeIcon icon={faLinkedin} size="2xl" color="white"/>
//      </div> */}
//     </div>
//     </div>
//     </Fade>
//   )
else{
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 ">
            <img src={logo} className='rounded-full w-[60px] h-[60px] mx-20'/>
            <h2 className="text-2xl font-semibold text-white mt-4">Sri vashista</h2>
            <p className="text-xl font-semibold text-white mt-1">Enterprises</p>
           
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4 text-left">Our products</h2>
            <ul className="space-y-2 justify-start">
              <li><p className="hover:text-blue-500 text-left">Stoves</p></li>
              <li><p className="hover:text-blue-500 text-left">Chimneys</p></li>
              <li><p className="hover:text-blue-500 text-left">Geysers</p></li>
              <li><p className="hover:text-blue-500 text-left">Frontload Liquids</p></li>
              <li><p className="hover:text-blue-500 text-left">Washing liquids</p></li>
              <li><p className="hover:text-blue-500 text-left">Topload liquids</p></li>
              <li><p className="hover:text-blue-500 text-left">Water purifiers</p></li>
              
            </ul>
          </div>
          <div className="mb-6 ">
            <h2 className="text-2xl font-semibold text-white mb-4 text-left">Our Services</h2>
            <ul className="space-y-2">
            <li><p className="hover:text-blue-500 text-left">Water filter Servicing</p></li>
                <li><p className="hover:text-blue-500 text-left">Mineral Water plant</p></li>
                <li><p className="hover:text-blue-500 text-left">Washing Machine Servicing</p></li>
                
              
            </ul>
          </div>
          <div className="mb-6 mx-4">
            <h2 className="text-2xl font-semibold text-white mb-4 text-left">Address</h2>
            <p className='text-left text-md'>Cyan Road</p>
              <p className='text-left text-md'>VengalraoNagar,Ratnam School Street,Nellore,524004</p>
              
           
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sri vashista. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
};







export default Footer