import React from "react";

const featuresItems = [
  {
    id: 1,
    img: "../../assets/f-icon1.png.webp",
    h3: "Free Delivery",
    p: "Free Shipping on all order",
  },
  {
    id: 2,
    img: "../../assets/f-icon2.png.webp",
    h3: "Return Policy",
    p: "Free Shipping on all order",
  },
  {
    id: 3,
    img: "../../assets/f-icon3.png.webp",
    h3: "24/7 Support",
    p: "Free Shipping on all order",
  },
  {
    id: 4,
    img: "../../assets/f-icon4.png.webp",
    h3: "Secure Payment",
    p: "Free Shipping on all order",
  },
];

const FeaturesArea = () => {
  return (
    <div className="w-full border py-24">
      <div
        className="grid grid-cols-4 max-w-[1200px] m-auto bg-white drop-shadow-lg py-12"
      >
        {featuresItems.map(({ id, img, h3, p }) => (
          <div
            key={id}
            className="flex flex-col items-center border-r-[1px] last:border-none"
          >
            <img src={img} alt="" className="w-8 pb-4" />
            <h3 className="font-semibold text-lg">{h3}</h3>
            <p>{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesArea;
