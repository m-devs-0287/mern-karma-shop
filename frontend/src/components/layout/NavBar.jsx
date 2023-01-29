import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import {Link} from 'react-router-dom'

const menuLinks = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "store",
    path: "/store  ",
  },
  {
    id: 3,
    title: "blog",
    path: "/blog",
  },
  {
    id: 5,
    title: "contact",
    path: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav className="flex h-full items-center text-sm">
      <ul className="flex items-center uppercase">
        {menuLinks.map(({ id, title, path }) => (
          <li key={id} className="px-6">
            <Link to={path}>{title}</Link>
          </li>
        ))}
        <li>
          <Link to="/cart">
            <AiOutlineShopping className="text-xl" />
          </Link>
        </li>
      </ul>

      <div>
        <button className="flex h-full items-center px-6 ">
          <IoSearchOutline className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
