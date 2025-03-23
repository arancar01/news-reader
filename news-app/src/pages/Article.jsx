import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchArticles = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const Article = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("allArticles", fetchArticles);

  if (isLoading) return <p className="p-4 text-center">Loading article...</p>;
  if (error)
    return (
      <p className="p-4 text-center text-red-600">Error loading article</p>
    );

  const article = data.find((item) => item.id === parseInt(id));

  if (!article) return <p className="p-4 text-center">Article not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold my-4 text-blue-800">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.date}</p>
      <p className="text-lg text-gray-700">{article.description}</p>
    </div>
  );
};

export default Article;
