import React from "react";
import { useState } from "react";
import Accordion from "../accordion/Accordion";

const categoriesList = [
  {
    title: "Sports",
    subCategory: [
      {
        title: "Men",
      },
      {
        title: "Women",
      },
      {
        title: "Kids",
      },
    ],
  },
  {
    title: "Casual",
    subCategory: [
      {
        title: "Men",
      },
      {
        title: "Women",
      },
      {
        title: "Kids",
      },
    ],
  },
  {
    title: "Training",
    subCategory: [
      {
        title: "Men",
      },
      {
        title: "Women",
      },
      {
        title: "Kids",
      },
    ],
  },
  {
    title: "Swiming",
    subCategory: [
      {
        title: "Beach",
      },
      {
        title: "Pool",
      },
      {
        title: "River",
      },
    ],
  },
  {
    title: "Comfort",
    subCategory: [
      {
        title: "Men",
      },
      {
        title: "Women",
      },
      {
        title: "Kids",
      },
    ],
  },
  {
    title: "Classic",
    subCategory: [
      {
        title: "Men",
      },
      {
        title: "Women",
      },
      {
        title: "Kids",
      },
    ],
  },
];

const BrowserCategories = () => {
  
  const toggle = (i) => {
    console.log(i);
  };

  return (
    <aside>
      <header className="bg-[#828bb3] text-white text-lg font-semibold p-4">
        <h4>Browser Categories</h4>
      </header>

      <Accordion list={categoriesList}/>
    </aside>
  );
};

export default BrowserCategories;
