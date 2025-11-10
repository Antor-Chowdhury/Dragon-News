import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-30 -ml-40">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-4">
        <h2 className="font-semibold text-3xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center mt-3 font-semibold">
            Don't Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
