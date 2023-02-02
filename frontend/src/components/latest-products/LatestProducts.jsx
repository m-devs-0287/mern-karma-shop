import React from "react";
import ProductCard from "../product-card/ProductCard";
// ProductCard components data
const latestProducts = [
  {
    id: 1,
    img: "./assets/p1.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 2,
    img: "./assets/p2.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 3,
    img: "./assets/p3.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 4,
    img: "./assets/p4.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 5,
    img: "./assets/p5.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 6,
    img: "./assets/p6.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 7,
    img: "./assets/p7.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
  },
  {
    id: 8,
    img: "./assets/p8.jpg.webp",
    brand: "Nike",
    model: "Hammer Sole",
    type: "Sports",
    price: 210,
    salesPrice: 150,
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

// LatestProducts component data
const data = {
  h2: 'Lastest Products',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur officiis error suscipit corporis quibusdam dolor'
}
// LatestProducts component styles
const styles = {
  sectionContainer: "max-w-[1200px] m-auto",
  sectionContext: "flex flex-col items-center text-center gap-4",
  h2: "font-semibold text-4xl text-black",
  p: "max-w-[600px]",
  productsContainer:"grid grid-cols-4 gap-8 my-20",
};

const LatestProducts = () => {
  return (
    <section>
      <div className={styles.sectionContainer}>
      
        <div className={styles.sectionContext}>
          <h2 className={styles.h2}>{data.h2}</h2>
          <p className={styles.p}>{data.p}</p>
        </div>

        <div className={styles.productsContainer}>
          <ProductCard latestProducts={latestProducts} actionLinks={actionLinks} />
        </div>

      </div>
    </section>
  );
};

export default LatestProducts;
