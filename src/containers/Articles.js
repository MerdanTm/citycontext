import React, { useContext } from "react";
import { Article } from "../components/Article/Article";
import { ArticleContext } from "../context/articleContext";

const Articles = () => {
  const { articles } = useContext(ArticleContext);
  console.log(articles);
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
