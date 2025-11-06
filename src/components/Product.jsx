import React from "react";
import { NavLink, useNavigate } from "react-router";


const Product = ({ thumbnail, title, description, className, id }) => {
  const navigate = useNavigate()
  return (
    <>
      <NavLink onClick={()=>navigate(`/productdetails/${id}`)}>
        <div className={`p-5 bg-gray-300 w-full ${className}`}>
          <img src={thumbnail} alt="" className="w-full" />
          <h4 className="line-clamp-1 font-bold text-3xl m  y-5">{title}</h4>
          <h4 className="line-clamp-2 text-lg text-justify">{description}</h4>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
