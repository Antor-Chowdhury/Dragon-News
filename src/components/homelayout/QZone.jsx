import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-semibold text-xl text-accent-2 mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playGroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
