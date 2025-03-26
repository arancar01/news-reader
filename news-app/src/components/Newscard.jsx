import React from "react";
import { Link } from "react-router-dom";

const Newscard = ({ article, index }) => {
  return (
    <Link to={`/article/${index}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{article.publishedAt}</p>
          <p className="text-gray-700 line-clamp-2">{article.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Newscard;
