import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  // error showing state
  const [error, setError] = useState(""); //here the empty string is a falsy value.

  const { signInUser, setUser } = use(AuthContext);

  // finding the location
  const location = useLocation();
  // console.log(location)

  // navigating the user to its desire location
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);

        navigate(`${location.state ? location.state : "/"}`);

        // clear the form
        e.target.reset;
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(error.message);
        setError(errorCode);
      });
  };

  return (
    <div className="flex justify-center items-center mt-30 -ml-40">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-4">
        <h2 className="font-semibold text-3xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && (
              <p className="text-red-500 text-center text-xs">{error}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-center mt-3 font-semibold">
            Don't Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
