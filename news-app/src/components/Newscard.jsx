import React from "react";
import { Link } from "react-router-dom";

const Newscard = ({ article, index }) => {
  return (
    <Link to={`/article/${index}`}>
      <div className="bg-white rounded-xl shadow-md hover:bg-cyan-0 hover:shadow-cyan-400 hover:scale-[1.03] transform transition-all duration-300 cursor-pointer">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold text-zinc-800">{article.title}</h2>
          <p className="text-xs text-gray-500">{article.publishedAt}</p>
          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Newscard;
