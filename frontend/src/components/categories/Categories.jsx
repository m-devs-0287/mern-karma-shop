import React from "react";
import AsideMenu from "../browser-categories/AsideMenu";
import ProductCard from "../product-card/ProductCard";
import SearchFilterbar from "../search-filter-bar/SearchFilterbar";
import Products from '../../data/products.json'

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
          <ProductCard data={Products}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
