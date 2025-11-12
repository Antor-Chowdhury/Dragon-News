import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  // Name error validation
  const [nameError, setNameError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const name = e.target.name.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
    } else {
      setNameError("");
    }

    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        setUser(user);

        // clear the form
        e.target.reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center mt-30 -ml-40">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-4">
        <h2 className="font-semibold text-3xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Your Name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Enter your photo url"
              required
            />

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

            {/* terms & conditions */}
            <p className="flex items-center gap-2 mt-2 text-accent">
              <input type="checkbox" />
              Accept <span className="font-medium">Terms & Conditions</span>
            </p>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p className="text-center mt-3 font-semibold">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
