'use client';
import React from 'react'
import useWindowSize from '../hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Fade, Slide } from 'react-reveal';


function Hero() {
    const windowSize = useWindowSize();
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const slides = [
       
        {
          url: 'https://d3mquo2i52s67z.cloudfront.net/stoving.jpg',
        },
        {
          url: 'https://d3mquo2i52s67z.cloudfront.net/rename.jpg',
        },
        

      ];
     
if(windowSize.width>=375 && windowSize.width<768)
{
    return (
      <Fade bottom delay={1000}>
    <div className='column'>
      <Fade bottom delay={1000}>
     <div className='max-w-[2560px]  w-full  m-auto  relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`,backgroundSize:"cover",height:340,paddingTop:"30px" }}
        className='w-full h-[25vh] mt-6 rounded-2xl bg-center duration-500 bg-no-repeat object-scale-down py-10'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[20vh] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronLeft} size={30} onClick={prevSlide}/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[20vh] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        
        <FontAwesomeIcon icon={faChevronRight} size={30} onClick={nextSlide} color='white'/>
      </div>
      <div className='flex top-2 justify-center py-2 h-20'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            
          </div>
        ))}
      </div>

      </div>
      </Fade>
      <Fade bottom delay={1000}>
      <h1 className='font-bold text-2xl mt-4'>About us</h1> 
      </Fade>
      <Fade bottom delay={1000}>
      <div className='mt-10'>
       <div className='column h-[30vh] bg-gradient-to-r from-[#FFD3A5] to-[#FD6586] rounded-md'>
        
         <div className='flex space-x-3 p-4'>

           <h3 className='text-lg font-semibold text-white'>Free Shipping & Returns*</h3>
         </div>
         <div className='flex space-x-3 p-4 mx-auto'>

           <h3 className='text-lg font-semibold text-white'>Long Time Warranty</h3>
         </div>
         <div className='flex space-x-3 p-4'>

           <h3 className='text-lg font-semibold text-white'>Top Notch Customer Support</h3>
         </div>
       </div>
      </div>
      </Fade>
    </div>
    </Fade>
    
    
      )
}
else{
    return (
        <>
        
<div className='max-w-[2560px] h-[100vh] mb-4   w-full  p-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronLeft} size={30} onClick={prevSlide}/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        
        <FontAwesomeIcon icon={faChevronRight} size={30} onClick={nextSlide} color='white'/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            
          </div>
        ))}
      </div>
      
    </div>
        </>
      )
}
 
}

export default Hero