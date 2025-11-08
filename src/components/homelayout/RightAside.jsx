import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import Adds from "./Adds";

const RightAside = () => {
  return (
    <div className="space-y-7">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <Adds></Adds>
    </div>
  );
};

export default RightAside;
