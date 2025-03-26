import React from "react";
import { useQuery } from "react-query";
import Newscard from "../components/Newscard";

const fetchNews = async () => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error("Failed to load data");
  }
  return res.json();
};

const News = () => {
  const { data, isLoading, error } = useQuery("newsData", fetchNews);

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-600">Loading news....</div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">Error loading news</div>
    );
  }

  const newsArticles = data.filter((article) => article.category === "News");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
        General News
      </h1>

      {newsArticles.length === 0 ? (
        <p className="text-gray-500 text-center">
          No articles available in this section.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((item) => (
            <Newscard key={item.id} article={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
