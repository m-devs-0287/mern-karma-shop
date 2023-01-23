import React from "react";

const menuLinks = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 1,
    title: "shop",
    path: "/shop  ",
  },
  {
    id: 1,
    title: "blog",
    path: "/blog",
  },
  {
    id: 1,
    title: "pages",
    path: "/pages",
  },
  {
    id: 1,
    title: "contact",
    path: "/contact",
  },
  {
    id: 1,
    title: "store",
    path: "/store",
  },
];

const NavBar = () => {
  return (
    <nav className="flex h-full items-center text-sm">

      <ul className="flex items-center uppercase">
        {menuLinks.map(({ id, title, path }) => (
          <li key={id} className='px-6'>
            <a href={path}>{title}</a>
          </li>
        ))}
        <li>
          <span className="absolute -left-[1000px]">search</span>
          <a href="/"><span class="material-symbols-outlined text-base">local_mall</span></a></li>
      </ul>

      <div>
        <button className="flex h-full items-center px-6 ">
          <span className="absolute -left-[1000px]">store</span>
          <span class="material-symbols-outlined text-md">search</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
