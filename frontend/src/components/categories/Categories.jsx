import React, { useEffect } from "react";
import AsideMenu from "../browser-categories/AsideMenu";
import ProductCard from "../product-card/ProductCard";
import SearchFilterbar from "../search-filter-bar/SearchFilterbar";
import Products from "../../data/products.json";
import { UseFilter } from "../../hooks/FilterContext";

const styles = {
  container: "grid grid-cols-4 gap-8 my-16 m-auto max-w-[1200px]",
  productsContainer: "col-span-3",
  productWrapper: "grid grid-cols-3 gap-8 my-8",
};

function Categories() {
  // laoding hook
  const useFilter = UseFilter();

  const filter = (product) => {
    let type, gender, color;

    if (useFilter.category === useFilter.category) {
      type = product.type === useFilter.category;
    }

    if (useFilter.gender === useFilter.gender) {
      gender = product.gender === useFilter.gender;
    }

    if (useFilter.color === useFilter.color) {
      color = product.color === useFilter.color;
    }

    // need top create a logical desicion where all the items that
    // match same criterias a log only
    return gender || type || color;
  };



  return (
    <div className={styles.container}>
      <AsideMenu />
      <div className={styles.productsContainer}>
        <SearchFilterbar />
        <div className={styles.productWrapper}>
          {Products.filter((product) => filter(product)).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
