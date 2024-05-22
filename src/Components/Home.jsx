// Home.jsx
import React from 'react';
import Slider from './Slider';
import { Slider_Images } from './Slider_Images';

const Home = () => {
  return ( 
    <div>
      <h1>Asadur Rahman Dulu</h1>
      <p>Welcome to the Home Page</p>
      <Slider images={Slider_Images} />
    </div>
  );
};

export default Home;
