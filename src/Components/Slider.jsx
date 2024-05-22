// Slider.jsx
import React, { useState } from 'react';

const Slider = ({ images }) => {
// SET THE STATE TO KEEP TRACK OF THE CURRENT SLIDE
  const [currentIndex, setCurrentIndex] = useState(0);

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
