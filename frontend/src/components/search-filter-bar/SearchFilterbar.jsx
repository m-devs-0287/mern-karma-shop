import React from "react";
import CustomSelectMenu from "../custom-select-menu/CustomSelectMenu";

const sortBy = {
  name: "Sorting Item by",
  data: [
    { name: "Default sorting" },
    { name: "price: Low to Hight" },
    { name: "price: High to Low" },
  ],
};

const show = {
  name: 'show',
  data: [
    {name:'Show 6'},
    {name:'Show 12'},
    {name:'Show 18'},
  ]
}

const styles = {
  header: "bg-[#828bb3] px-4 h-16 flex items-center gap-4",

}

const SearchFilterbar = () => {
  return (
    <div className={styles.header}>
      <CustomSelectMenu {...sortBy} />
      <CustomSelectMenu {...show} />
    </div>
  );
};

export default SearchFilterbar;
