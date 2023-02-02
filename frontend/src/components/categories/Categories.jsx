import React from "react";
import AsideMenu from "../browser-categories/AsideMenu";
import ProductCard from "../product-card/ProductCard";
import SearchFilterbar from "../search-filter-bar/SearchFilterbar";

// ProductCard component data
const latestProducts = [
  {
    id: 1,
    img: "./assets/p1.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "Sports",
    color: 'grey',
    gender: 'men'
  },
  {
    id: 2,
    img: "./assets/p2.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "Running",
    color: 'green',
    gender: 'women'
  },
  {
    id: 3,
    img: "./assets/p3.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "casual",
    color: 'black',
    gender: 'women'
  },
  {
    id: 4,
    img: "./assets/p4.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "classic",
    color: 'brown',
    gender: 'men'
  },
  {
    id: 5,
    img: "./assets/p5.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "casual",
    color: 'grey',
    gender: 'men'
  },
  {
    id: 6,
    img: "./assets/p6.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "Sports",
    color: 'red',
    gender: 'kids'
  },
  {
    id: 7,
    img: "./assets/p7.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "classic",
    color: 'grey',
    gender: 'women'
  },
  {
    id: 8,
    img: "./assets/p8.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    price: 210,
    salesPrice: 150,
    type: "casual",
    color: 'grey',
    gender: 'women'
  },
  
];

const actionLinks = [
  {
    id: 1,
    path: "/",
    icon: "AiOutlineShopping",
    context: "Add to bag",
  },
  {
    id: 2,
    path: "/",
    icon: "AiOutlineHeart",
    context: "Wish List",
  },
  {
    id: 3,
    path: "/",
    icon: "TiArrowSync",
    context: "Compare",
  },
  {
    id: 4,
    path: "/",
    icon: "BsArrowsMove",
    context: "View More",
  },
  
];

//Categories component styles
const styles = {
  container: "grid grid-cols-4 gap-8 my-16 m-auto max-w-[1200px]",
  productsContainer: "col-span-3",
  productWrapper: "grid grid-cols-3 gap-8 my-8",
};

const Categories = () => {
  return (
    <div className={styles.container}>
      <AsideMenu />
      <div className={styles.productsContainer}>
        <SearchFilterbar />
        <div className={styles.productWrapper}>
          <ProductCard latestProducts={latestProducts} actionLinks={actionLinks}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
