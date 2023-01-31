import React from "react";
import { useState } from "react";
import Accordion from "../accordion/Accordion";

const categoriesList = [
  {
    title: "Sports",
    content: [
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
    content: [
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
    content: [
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
    content: [
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
    content: [
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
    content: [
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
    <aside className="mb-10">
      <header className="bg-[#828bb3] text-white text-lg font-semibold p-4">
        <h4>Browser Categories</h4>
      </header>

      <Accordion list={categoriesList}/>
    </aside>
  );
};

export default BrowserCategories;
