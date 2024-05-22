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
  }, [currentIndex, autoSlider, autoSliderInterval]);


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
    </div>
  );
}

export default Slider;
