import React from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { BsArrowsMove } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";

const style = {
  icon: `bg-[#828cb1] h-8 w-8 p-2 rounded-full text-white relative z-[2] mr-[0px] group-hover:mr-[90px] group-hover:bg-gradient-to-r from-yellow-300 to-orange-500 ease-in-out duration-300`,
};

const CardActionLink = ({ path, icon, context }) => {
  return (
    <a
      className="flex items-center whitespace-nowrap relative overflow-hidden px-1"
      href={path}
    >
      {icon === "AiOutlineShopping" ? (
        <AiOutlineShopping className={style.icon} />
      ) : icon === "AiOutlineHeart" ? (
        <AiOutlineHeart className={style.icon} />
      ) : icon === "BsArrowsMove" ? (
        <BsArrowsMove className={style.icon} />
      ) : icon === "TiArrowSync" ? (
        <TiArrowSync className={style.icon} />
      ) : null}

      <span className="absolute -left-[10px] z-[1] invisible opacity-0 group-hover:left-[40px] group-hover:visible group-hover:opacity-100 ease-in-out duration-300 font-semibold">
        {context}
      </span>
    </a>
  );
};

export default CardActionLink;
