import React from "react";

const dealsItems = [
  {
    id: 1,
    img: "./assets/c1.jpg.webp",
    path: "/",
    context: "classic sports sneakers",
  },
  {
    id: 2,
    img: "./assets/c2.jpg.webp",
    path: "/",
    context: "all season sneakers",
  },
  {
    id: 3,
    img: "./assets/c3.jpg.webp",
    path: "/",
    context: "casual sneakers",
  },
  {
    id: 4,
    img: "./assets/c4.jpg.webp",
    path: "/",
    context: "hight top sneakers",
  },
];

const GalleryOfDeals = () => {
  return (
    <div className="flex h-[420px] w-[1200px] px-6 m-auto mb-24">
      <div className="h-full grid grid-cols-3 gap-8 mr-8 mb-24 justify-between w-[65%] ">
        {dealsItems.map(({ id, img, path, context }) => (
          <a
            href={path}
            className="relative overflow-hidden drop-shadow-lg first:col-span-2 last:col-span-2 group"
          >
            <img
              src={img}
              alt={`${dealsItems[0].context}`}
              className="w-full h-full"
            />
            <div className="group-hover:bg-black/50 absolute h-full w-full left-0 top-0 flex justify-center items-center duration-500 ease-in-out">
              <p className="text-white font-semibold text-lg capitalize relative top-[100%] group-hover:top-[0%] duration-500 ease-in-out">
                {context}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-[35%]">
        <a href="/" className="drop-shadow-lg overflow-hidden inline-block group w-full h-full">
          <img src="./assets/c5.jpg.webp" alt="" className="w-full h-full" />

          <div className="group-hover:bg-black/50 absolute h-full w-full left-0 top-0 flex justify-center items-center duration-500 ease-in-out">
            <p className="text-white font-semibold text-lg capitalize relative top-[100%] group-hover:top-[0%] duration-500 ease-in-out">
              hight top sneakers
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GalleryOfDeals;
