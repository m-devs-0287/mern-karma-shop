import React from "react";
import FeaturesArea from "../components/features-area/FeaturesArea";
import GalleryOfDeals from "../components/gallery-deals-area/GalleryOfDeals";
import Hero from "../components/Hero";
import LatestProducts from "../components/latest-products/LatestProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesArea />
      <GalleryOfDeals />
      <LatestProducts />
    </>
  );
};

export default Home;
