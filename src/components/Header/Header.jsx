import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 mt-12">
      <img src={logo} alt="" />
      <p className="text-lg text-accent">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl -mt-2.5 text-accent">
        <span className="text-[#403f3f]">{format(new Date(), "EEEE")}</span>,{" "}
        {format(new Date(), "MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
