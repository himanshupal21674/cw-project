import { useState, useRef } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";



const Subslider = ({sliderData}) => {
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -980, behavior: "smooth" });
    }
  };

  return (
    <div className="relative container mx-auto">
          <button
          onClick={scrollLeft}
          className="absolute -left-3 bottom-8 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 cursor-pointer text-white text-3xl font-extrabold"
        >
          <SlArrowLeft className="text-gray-900/60"/>
        </button>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-hidden scrollbar-hide"
        >
          {sliderData.map((src, index) => (
            <div
              key={index}
              className="relative group min-w-[220px] h-full rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={src.url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="text-center flex flex-col gap-3">
                <h1 className="text-lg text-[#333333]/80 mt-2">{src.title}</h1>
                <button className="bg-[#56b6c2] text-white flex items-center justify-center m-auto py-2 px-4 rounded-md w-1/2">Explore</button>
              </div>

            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute -right-2 bottom-8 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-white text-3xl font-extrabold"
        >
          <SlArrowRight  className="text-gray-900/60"/>
        </button>
      </div>
    </div>
  );
};

export default Subslider;
