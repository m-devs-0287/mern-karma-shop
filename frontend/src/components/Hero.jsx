import React from "react";
import Slider from './image-slider/ImageSlider'
const Hero = () => {
  return (
    <section className="h-screen bg-hero bg-cover bg-center">
      <div className="m-auto w-[1200px] h-full">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
