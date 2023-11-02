'use client';
import React from 'react'
import useWindowSize from '../hooks/useWindowsize';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';


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
     
if(windowSize.width>=425 && windowSize.width<768)
{
    return (
    
     <div className='max-w-[2560px] h-[500px] w-full m-auto relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`,objectFit: 'contain',backgroundSize:'90%' }}
        className='w-full h-screen  rounded-2xl bg-center bg-cover duration-500 bg-no-repeat'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50vh] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faChevronLeft} size={30} onClick={prevSlide}/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50vh] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        
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
    
      )
}
else{
    return (
        <>
        
<div className='max-w-[2560px] h-[100vh] mb-4  mt-6 w-full  p-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
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