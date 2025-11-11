import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details } = news;

  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden w-full  mx-auto border border-gray-100 p-4">
      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[350px] object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
          {title}
        </h2>

        {/* Details */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {details}
        </p>

        {/* Footer Button */}
        <Link
          to={`/category/${news.category_id}`}
          className="btn btn-outline btn-secondary w-fit flex items-center gap-2"
        >
          <FaArrowLeftLong />
          Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
