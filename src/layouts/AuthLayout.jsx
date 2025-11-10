import React from "react";
import Login from "../pages/Login";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <header className="w-11/12 mx-auto py-6">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
