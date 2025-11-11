import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  // const { user } = use(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav text-lg text-accent flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-4 items-center">
        <img src={userIcon} alt="" />
        <Link
          to="/auth/login"
          className="btn btn-primary text-white px-10 py-6 font-semibold text-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
