// IMPORTS
import React from 'react';

const Slider = ({ images }) => {
  // SLIDER LOGIC GOES HERE

  return (
    <div className="relative w-full overflow-hidden">
    <div className="flex">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="w-full flex-shrink-0"
        />
      ))}
    </div>
  </div>
);
}

export default Slider;
