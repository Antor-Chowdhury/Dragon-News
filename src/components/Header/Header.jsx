import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 mt-12">
      <img src={logo} alt="" />
      <p className="text-lg dark-3">Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
