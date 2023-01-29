import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  const currentLink = `/${crumbs}`;

  return (
    <div className="flex items-center gap-4">
      <Link to={'/'}>Home</Link>
      <Link to={currentLink}>{crumbs}</Link>
    </div>
  );
};

export default Breadcrumbs;
