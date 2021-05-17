import React, { useState, useReducer } from "react";
import Articles from "../containers/Articles";
import { ArticleContext } from "../context/articleContext";
import { reducer } from "../context/reducer";
import AddArticle from "./AddArticle/AddArticle";

const initialState = [
  { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
];

const ArticleProvider = () => {
  // const [articles, setArticles] = useState(initialState);
  const [articles, dispatch] = useReducer(reducer, initialState);
  const saveArticle = (article) => {
    // const newArticle = {
    //   id: Math.floor(Math.random() * 1000),
    //   title: article.title,
    //   body: article.body,
    // };
    // setArticles([...articles, newArticle]);
  };
  const dispatchFun = (article) => {
    dispatch({ type: "ADD_ARTICLE", article });
  };
  return (
    <ArticleContext.Provider value={{ articles, saveArticle, dispatchFun }}>
      <div>
        <AddArticle />
        <Articles />
      </div>
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
