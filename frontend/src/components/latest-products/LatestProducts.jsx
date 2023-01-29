import React from "react";
import CardActionLink from "../Card-action-link/CardActionLink";

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
    context: "Add to bag",
  },
  {
    id: 3,
    path: "/",
    icon: "BsArrowsMove",
    context: "Add to bag",
  },
  {
    id: 4,
    path: "/",
    icon: "TiArrowSync",
    context: "Add to bag",
  },
];

const LatestProducts = () => {
  return (
    <section>
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="font-semibold text-4xl text-black">
            Lastest Products
          </h2>
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur officiis error suscipit corporis quibusdam dolor
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 my-20">
          {latestProducts.map(
            ({ id, img, brand, model, type, price, salesPrice }) => (
              <div key={id} className="py-4 flex flex-col gap-2">
                <div className="w-[255px] h-[255px] ">
                  <img src={img} alt="" className="w-full h-full" />
                </div>
                <h3 className="font-semibold">
                  {brand} {model} {type}
                </h3>
                <p className="flex gap-4 font-semibold">
                  <span>${salesPrice}</span> <span className="line-through text-black/20">{price}</span>
                </p>

                <div>
                  <ul className="flex">
                    {actionLinks.map(({ id, path, icon, context }) => (
                      <li key={id} className="group">
                        <CardActionLink path={path} icon={icon} context={context} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
