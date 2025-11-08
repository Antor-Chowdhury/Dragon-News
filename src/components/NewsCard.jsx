import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details, others } =
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
            <span className="text-warning cursor-pointer font-semibold ml-1 hover:underline">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Rating and Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center text-gray-500 gap-1">
          <FaRegEye className="text-lg" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
