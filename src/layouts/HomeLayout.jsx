import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-8">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto mt-20 grid grid-cols-12 gap-6 mb-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit mb-1">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
