// Slider.jsx
import React from 'react';

const Slider = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="sloder-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
