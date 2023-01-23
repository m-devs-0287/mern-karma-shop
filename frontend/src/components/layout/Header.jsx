import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed w-full flex justify-center top-11">
      <div className="bg-white h-20 px-10 flex justify-between items-center w-[1200px] drop-shadow-lg">
        <div className="logo">
          <img src="./assets/logo.png.webp" alt="" />
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
