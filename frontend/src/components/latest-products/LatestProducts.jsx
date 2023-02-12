import React from "react";
import ProductCard from "../product-card/ProductCard";
import Products from "../../data/products.json";

// LatestProducts component data
const data = {
  h2: "Lastest Products",
  p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur officiis error suscipit corporis quibusdam dolor",
};

// LatestProducts component styles
const styles = {
  sectionContainer: "max-w-[1200px] m-auto",
  sectionContext: "flex flex-col items-center text-center gap-4",
  h2: "font-semibold text-4xl text-black",
  p: "max-w-[600px]",
  productsContainer: "grid grid-cols-4 gap-8 my-20",
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
          {Products
          .filter(product => product.id <= 8 )
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
