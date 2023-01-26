import React from "react";
import FeaturesArea from "../components/features-area/FeaturesArea";
import GalleryOfDeals from "../components/gallery-deals-area/GalleryOfDeals";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesArea />
      <GalleryOfDeals />
    </>
  );
};

export default Home;
