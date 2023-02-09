import React, { useState } from "react";
import { UseFilter } from "../../hooks/FilterContext";
import ProductCardDetails from "../product-card-details/ProductCardDetails";

const ProductCard = ({ data }) => {
  const [color, setColor] = useState("red");
  const filter = UseFilter();

  const filterItems = (product) => {
    const sport = product.type === filter.category;
    return sport;
  };

  return (
    <>
      {data
        .filter( product => (
          filterItems(product)
        ))
        .map((data, i) => (
          <div key={i}>
            <ProductCardDetails data={data} />
          </div>
        ))}
    </>
  );
};

export default ProductCard;
