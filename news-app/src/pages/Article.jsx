import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    const found = articles[parseInt(id)];

    if (found) {
      setArticle(found);
    } else {
      setError("Article not found");
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading article...</p>;
  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover rounded"
        />
      ) : (
        <img
          src="/images/placeholder.jpg"
          alt="Default placeholder"
          className="w-full h-64 object-cover rounded"
        />
      )}

      <h1 className="text-3xl font-bold my-4 text-blue-800">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.publishedAt}</p>

      <p className="text-lg text-gray-700 leading-relaxed text-justify tracking-wide">
        {article.content || article.description || "No content available."}
      </p>
    </div>
  );
};

export default Article;
