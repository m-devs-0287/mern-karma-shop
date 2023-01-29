import { useEffect, useState } from "react";
import React from "react";
import Slider from "./image-slider/ImageSlider";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";

const Hero = () => {
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
        <section className="h-[400px] bg-hero bg-cover bg-center">
          <div className="m-auto w-[1200px] h-full">
            <Breadcrumbs />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
