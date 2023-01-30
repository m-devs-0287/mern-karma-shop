import { useEffect, useState } from "react";
import React from "react";
import Slider from "../image-slider/ImageSlider";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const Hero = (props) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  return (
    <>
      {url === "http://localhost:3000/" ? (
        <section className="h-screen bg-hero bg-cover bg-center">
          <div className="m-auto w-[1200px] h-full">
            <Slider />
          </div>
        </section>
      ) : (
        <section className="h-[400px] bg-hero bg-[100%] bg-[bottom_100px]">
          <div className="m-auto w-[1200px] h-full flex flex-col items-end top-1/2 relative">
            <div className="w-1/2 text-white flex flex-col gap-4 capitalize">
              <h1 className="text-5xl font-bold capitalize">
                {props.page} Page
              </h1>
              <Breadcrumbs />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
