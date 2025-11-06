import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <section className="py-5 bg-gray-400 text-center">
      <div className="max-w-[1280px] m-auto">
        <div className="flex items-center">
          <div className="w-[40%]">
            <NavLink>
              <img
                src="https://res.cloudinary.com/dxihqxcjs/image/upload/v1762454390/logo5_modofu.png"
                alt=""
                className="w-15"
              />
            </NavLink>
          </div>
          <div className="">
            <ul className="flex items-center justify-center gap-x-4 text-center">
              <NavLink to={"/shop"}>
                <li className="font-semibold">Home</li>
              </NavLink>
              <NavLink to={"/"}>
                <li className="font-semibold">Shop</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li className="font-semibold">About</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
