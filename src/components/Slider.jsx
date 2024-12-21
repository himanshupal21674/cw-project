// SliderComponent.js
import React, { useState, useEffect } from 'react';
import { RiArrowRightSLine,RiArrowLeftSLine } from "react-icons/ri";
import { sliderImages } from '../utils/constant';

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full my-8 overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          
        }}
      >
        {sliderImages?.map((image, index) => (
            <div
            key={index}
            className="relative group min-w-[100%] rounded-lg overflow-hidden"
         
          >
          <img
            key={index}
            src={image}
            alt={`Slide ${index+1}`}
            className="w-full"
          />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-1 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full "
      >
       <RiArrowLeftSLine className='font-extrabold text-[7rem]'/>
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full "
      >
       <RiArrowRightSLine className='font-extrabold text-[7rem]'/>
      </button>

 
    </div>
  );
};

export default SliderComponent;
