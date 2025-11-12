import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";

import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, rating, total_view, thumbnail_url, details } =
    news;

  return (
    <div className="card shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Author and Share */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm text-gray-800">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <FaRegBookmark className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg"></FaRegBookmark>
          <FaShareAlt className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3 pb-2">
        <h2 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3 pb-2 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-warning cursor-pointer font-semibold ml-1 hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Ratings and Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xl ${
                  i < Math.round(rating.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-700 font-medium leading-none -mb-0.5">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500 gap-1.5">
          <FaRegEye className="text-base" />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
