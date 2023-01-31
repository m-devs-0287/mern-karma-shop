import React from "react";
import BrowserCategories from "../browser-categories/BrowserCategories";

const Categories = () => {
  return (
    <div className="grid grid-cols-4 gap-6 my-16 m-auto max-w-[1200px]">
      <div>
        <BrowserCategories />
      </div>
      <div className="border col-span-3">2</div>
    </div>
  );
};

export default Categories;
