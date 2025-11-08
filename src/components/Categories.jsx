import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  //   console.log(categoryPromise);

  const categories = use(categoryPromise);
  //   console.log(categories);

  return (
    <div>
      <h2 className="font-semibold text-xl text-accent-2">
        All Category ({categories.length})
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="btn bg-base-100 shadow-none border-none hover:bg-base-200 font-semibold text-accent"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
