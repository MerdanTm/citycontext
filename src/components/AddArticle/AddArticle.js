import React, { useState, useContext, useReducer } from "react";
import { ArticleContext } from "../../context/articleContext";
import "./AddArticle.css";

const AddArticle = () => {
  const { saveArticle, dispatchFun } = useContext(ArticleContext);

  const [newArticle, setNewArticle] = useState({
    title: "",
    body: "",
  });

  const addNewArticle = (e) => {
    e.preventDefault();
    console.log(newArticle);
    // saveArticle(newArticle);
    dispatchFun(newArticle);
    setNewArticle({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        onChange={(e) =>
          setNewArticle({ ...newArticle, title: e.target.value })
        }
        value={newArticle.title}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
        onChange={(e) => setNewArticle({ ...newArticle, body: e.target.value })}
        value={newArticle.body}
        type="text"
        id="body"
        placeholder="Body"
      />
      <button type="submit">Add article</button>
    </form>
  );
};
export default AddArticle;
