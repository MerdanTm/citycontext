import React, { useState } from "react";
import "./Article.css";

export const Article = ({ article }) => {
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};
