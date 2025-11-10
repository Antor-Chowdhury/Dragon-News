import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center mt-30 -ml-40">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-4">
        <h2 className="font-semibold text-3xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Your Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            {/* terms & conditions */}
            <p className="flex items-center gap-2 mt-2 text-accent">
              <input type="checkbox" />
              Accept <span className="font-medium">Terms & Conditions</span>
            </p>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center mt-3 font-semibold">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
