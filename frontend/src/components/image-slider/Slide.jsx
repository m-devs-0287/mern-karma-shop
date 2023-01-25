import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Slide = ({heading, context}) => {

  return (
    <>
      <div className=" h-full min-w-full">
        <div className="text-left flex h-full w-[1000px] m-auto">
          <div className="w-[40%] h-full  flex flex-col justify-center gap-10">
            <h1 className="text-7xl font-bold text-black">
              {heading} <br /> Collection!
            </h1>
            <p>{context}</p>
            <button className="flex items-center gap-4 capitalize font-semibold">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-500 w-10 h-10 flex items-center justify-center text-white rounded-full">
                <AiOutlinePlus />
              </span>
              add to bag
            </button>
          </div>
          <div className='w-[60%] h-full bg-no-repeat bg-[center_40%] bg-contain bg-[url("./../../public/assets/banner-img.png.webp")]'></div>
        </div>
      </div>
    </>
  );
};

export default Slide;
