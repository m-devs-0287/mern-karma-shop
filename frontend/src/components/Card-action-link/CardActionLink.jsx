import React from "react";
import * as Ai from "react-icons/ai";
import * as Ti from "react-icons/ti";
import * as Bs from "react-icons/bs";

const data = [
  {
    id: 1,
    path: "/",
    icon: <Ai.AiOutlineShopping />,
    context: "Add to bag",
  },
  {
    id: 2,
    path: "/",
    icon: <Ai.AiOutlineHeart />,
    context: "Wish List",
  },
  {
    id: 3,
    path: "/",
    icon: <Ti.TiArrowSync />,
    context: "Compare",
  },
  {
    id: 4,
    path: "/",
    icon: <Bs.BsArrowsMove />,
    context: "View More",
  },
];

const styles = {
  a: "flex items-center whitespace-nowrap relative overflow-hidden px-1",
  icon: `bg-[#828cb1] h-8 w-8 p-2 rounded-full text-white relative z-[2] mr-[0px] group-hover:mr-[90px] group-hover:bg-gradient-to-r from-yellow-300 to-orange-500 ease-in-out duration-300`,
  context:
    "absolute -left-[10px] z-[1] invisible opacity-0 group-hover:left-[40px] group-hover:visible group-hover:opacity-100 ease-in-out duration-300 font-semibold",
};

const CardActionLink = () => {
  return (
    <ul className="flex">
      {data.map(({ id, path, icon, context }) => (
        <li key={id} className="group">
          <a className={styles.a} href={path}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.context}>{context}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CardActionLink;
