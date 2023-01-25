import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] py-20">
      <div className="w-[1200px] m-auto grid grid-cols-4 text-gray-500 text-left gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl text-white capitalize font-bold">about us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xl text-white capitalize font-bold">
            newsletter
          </h3>
          <p>stay updated with our lastest</p>
          <form className="h-8 flex">
            <label htmlFor="" className="absolute -left-1000px">
              email
            </label>
            <input type="email" />
            <button className="bg-gradient-to-r from-yellow-300 to-orange-300 px-4 text-white">
              <FaLongArrowAltRight />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xl text-white capitalize font-bold">
            instagram feed
          </h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            <div>
              <img className="w-full h-full" src="/assets/i1.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i2.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i3.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i4.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i5.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i6.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i7.jpg.webp" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/assets/i8.jpg.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xl text-white capitalize font-bold">follow us</h3>
          <p>let's be social</p>
          <ul className="flex gap-5">
            <li>
              <a href="/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-14 text-gray-500">
        Copyright ©2023 All rights reserved | This template is made with
        <i className="fa-regular fa-heart text-orange-300 pl-1"></i> by
        <span className="text-orange-300"> Colorlib</span>
      </p>
    </footer>
  );
};

export default Footer;
