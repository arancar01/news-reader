import React from "react";
import { Link } from "react-router-dom";

const LatestNews = ({ articles }) => {
  const latest = articles.slice(0, 5);
  return (
    <aside className="md:w-1/3 w-full bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 h-[850px]">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Latest News</h2>
      <div className="space-y-4">
        {latest.map((article, index) => (
          <Link
            to={`/article/${index}`}
            key={index}
            className="block bg-white rounded shadow p-3 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {article.publishedAt?.slice(0, 10)}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <video controls width="80%" className="rounded shadow">
          <source src="/videos/news-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </aside>
  );
};

export default LatestNews;
