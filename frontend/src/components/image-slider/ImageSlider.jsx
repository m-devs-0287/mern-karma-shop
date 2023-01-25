import React, { useState } from "react";
import Slide from "./Slide";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const sliderItems = [
  {
    id: 1,
    heading: "Nike New",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia, animi fugit hic odio commodi! Accusamus tempore sunt distinctio quia. Minima, debitis eveniet? Quas ratione necessitatibus natus, numquam pariatur vel!",
  },
  {
    id: 2,
    heading: "Nike Sport",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia, animi fugit hic odio commodi! Accusamus tempore sunt distinctio quia. Minima, debitis eveniet? Quas ratione necessitatibus natus, numquam pariatur vel!",
  },
  {
    id: 3,
    heading: "Nike Casual",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia, animi fugit hic odio commodi! Accusamus tempore sunt distinctio quia. Minima, debitis eveniet? Quas ratione necessitatibus natus, numquam pariatur vel!",
  },
  {
    id: 4,
    heading: "Nike Classic",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia, animi fugit hic odio commodi! Accusamus tempore sunt distinctio quia. Minima, debitis eveniet? Quas ratione necessitatibus natus, numquam pariatur vel!",
  },
];

const ImageSlider = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide < 1) {
      setSlide(sliderItems.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide >= 0 && slide < sliderItems.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };

  const style = {
    transform: `translateX(-${slide}00%)`,
  };

  return (
    <div className="h-full overflow-x-hidden relative">
      <div
        className={`flex h-full relative -translate-x-[${slide}00rem] transition duration-500 ease-out`}
        style={style}
      >
        {sliderItems.map(({ id, heading, context }) => (
          <Slide key={id} heading={heading} context={context} />
        ))}
      </div>
      <div className="absolute bottom-20 right-20 flex gap-4 ">
        <button className="font-semibold text-white" onClick={prevSlide}>
          Prev
          <FaLongArrowAltLeft className="w-full" />
        </button>
        <button className="font-semibold text-white" onClick={nextSlide}>
          Next
          <FaLongArrowAltRight className="w-full" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
