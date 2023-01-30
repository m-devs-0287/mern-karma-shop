import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);

  window.document.addEventListener("scroll", () => {
    if (window.pageYOffset > 64) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  });

  const styles = {
    header: fixedHeader ? `fixed top-0` : `absolute top-16 `,
    headerContainer: fixedHeader ? `w-full` : `w-[1200px]`,
  };

  return (
    <header className={`z-[50] w-full ${styles.header}`}>
      <div
        className={`duration-150 ease-linear bg-white drop-shadow-lg -left-full -right-full m-auto  ${styles.headerContainer}`}
      >
        <div className="flex justify-between h-20 px-10 items-center w-full max-w-[1200px] -left-full -right-full m-auto">
          <div className="logo">
            <img src="./assets/logo.png.webp" alt="" />
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
