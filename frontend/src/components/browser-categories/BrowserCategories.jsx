import React from "react";
import Accordion from "../accordion/Accordion";
import Checkbox from "../checkbox/Checkbox";

const categories = {
  header: "Browser Categories",
  data: [
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
  ],
};

const checkBoxData = {
  componentName: "Colors",
  data: [
    { title: "black", name: "black" },
    { title: "black leather", name: "blackLeather" },
    { title: "Gold", name: "gold" },
    { title: "Spacegrey", name: "spacegrey" },
  ],
};

const styles = {
  aside: "flex flex-col gap-10",
};

const BrowserCategories = () => {
  return (
    <aside className={styles.aside}>
      <Accordion {...categories} />
      <Checkbox {...checkBoxData} />
    </aside>
  );
};

export default BrowserCategories;
