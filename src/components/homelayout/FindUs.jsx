import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-accent-2 mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn  bg-base-100 justify-start join-item text-accent font-medium py-6">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn  bg-base-100 justify-start join-item text-accent font-medium py-6">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn  bg-base-100 justify-start join-item text-accent font-medium py-6">
            <FaInstagram></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
