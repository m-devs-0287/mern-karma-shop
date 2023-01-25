import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";

const menuLinks = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "shop",
    path: "/shop  ",
  },
  {
    id: 3,
    title: "blog",
    path: "/blog",
  },
  {
    id: 4,
    title: "pages",
    path: "/pages",
  },
  {
    id: 5,
    title: "contact",
    path: "/contact",
  },
  {
    id: 6,
    title: "store",
    path: "/store",
  },
];

const NavBar = () => {
  return (
    <nav className="flex h-full items-center text-sm">
      <ul className="flex items-center uppercase">
        {menuLinks.map(({ id, title, path }) => (
          <li key={id} className="px-6">
            <a href={path}>{title}</a>
          </li>
        ))}
        <li>
          <span className="absolute -left-[1000px]">search</span>
          <a href="/">
            <AiOutlineShopping className="text-xl" />
          </a>
        </li>
      </ul>

      <div>
        <button className="flex h-full items-center px-6 ">
          <span className="absolute -left-[1000px]">store</span>
          <IoSearchOutline className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
