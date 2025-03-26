import React from "react";

const Newscard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
        <p className="text-gray-700">{article.description}</p>
      </div>
    </div>
  );
};

export default Newscard;
