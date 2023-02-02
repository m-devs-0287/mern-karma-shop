import React from "react";
import Accordion from "../accordion/Accordion";
import Checkbox from "../checkbox/Checkbox";

const categories = {
  header: "Browser Categories",
  data: [
    {
      title: "Gender",
      content: [
        {
          title: "Men",
        },
        {
          title: "Women",
        },
        {
          title: "Boy",
        },
        {
          title: "Girl",
        },
      ],
    },
    {
      title: "Category",
      content: [
        {
          title: "Sport",
        },
        {
          title: "Casual",
        },
        {
          title: "Classic",
        },
        {
          title: "Running",
        },
      ],
    },
    {
      title: "Collections",
      content: [
        {
          title: "Summer 2023",
        },
        {
          title: "Winter 2023",
        },
      ],
    },

    {
      title: "Others",
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

const AsideMenu = () => {
  return (
    <aside className={styles.aside}>
      <Accordion {...categories} />
      <Checkbox {...checkBoxData} />
    </aside>
  );
};

export default AsideMenu;