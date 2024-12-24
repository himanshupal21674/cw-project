import React, { useState } from 'react';

const CommonSlider = ({data = []}) => {

  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 3;

  const handleNext = () => {
    if (startIndex + visibleImages < data.length) {
      setStartIndex(startIndex + visibleImages);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleImages);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[80%] mx-auto mt-8">
      <div className="relative flex w-full overflow-hidden rounded-lg">
        {startIndex > 0 && (
          <button
            className="absolute left-0 z-10 px-4 top-1/2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            onClick={handlePrevious}
          >
            &lt;
          </button>
        )}

        <div className="flex w-full justify-evenly">
          {data?.slice(startIndex, startIndex + visibleImages).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-[50%] h-[80%]"
            />
          ))}
        </div>

        {startIndex + visibleImages < data.length && (
          <button
            className="absolute right-0 z-10 top-1/2 px-4 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            onClick={handleNext}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default CommonSlider;
