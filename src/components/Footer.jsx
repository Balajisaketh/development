// import { faSquare } from '@fortawesome/free-regular-svg-icons'
// import { faAmbulance} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'


import React from 'react'
import Fade from "react-reveal";
function footer() {
  
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

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 ">
            <h2 className="text-2xl font-semibold text-white ">Sri vashista</h2>
           
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Our products</h2>
            <ul className="space-y-2 justify-start">
            <li><p className="hover:text-blue-500">Washing liquids</p></li>
              <li><p className="hover:text-blue-500">Stoves</p></li>
              <li><p className="hover:text-blue-500">Chimneys</p></li>
              <li><p className="hover:text-blue-500">Water purifiers</p></li>
              
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Connect</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 ">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Address</h2>
            
           
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
};







export default footer