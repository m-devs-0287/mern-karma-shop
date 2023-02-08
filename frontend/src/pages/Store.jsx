import React from "react";
import Categories from "../components/categories/Categories";
import Hero from "../components/hero/Hero";
import { GenderProvider } from "../hooks/FilterContext";

const Store = () => {
  return (
    <>
      <Hero page={"store"} />
      <GenderProvider>
        <Categories />
      </GenderProvider>
    </>
  );
};

export default Store;
