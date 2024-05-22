// IMPORT
import React, { useState, useEffect } from 'react';

// SLIDER COMPONENT
const Slider = ({ images, autoSlider =true, autoSliderInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // FUNCTION TO GO TO NEXT SLIDE
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // FUNCTIOIN TO GO TO PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // AUTO SLIDER
  useEffect(() => {
    if (autoSlider){
      const slideInterval = setInterval(nextSlide, autoSliderInterval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, nextSlide, autoSlider, autoSliderInterval]);


  return (
    <div className="relative w-full overflow-hidden">
      <div
      className="flex transition-transform duration-300"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button>
    </div>
  );
}

export default Slider;
