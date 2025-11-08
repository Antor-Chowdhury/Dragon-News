import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav text-lg text-accent flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-4 items-center">
        <img src={user} alt="" />
        <button className="btn btn-primary text-white px-10 py-6 font-semibold text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
