import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Login With</h2>
      <div className="flex flex-col space-y-3">
        <button className="btn btn-outline btn-info">
          <FcGoogle size={22}></FcGoogle> Login with Google
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub size={22}></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
