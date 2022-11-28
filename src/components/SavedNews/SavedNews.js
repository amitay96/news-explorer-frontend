import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

const SavedNews = () => {
  return (
    <>
      <SavedNewsHeader />
      <section className="savedNews">
        <p className="savedNews__route">Saved articles</p>
        <h2 className="savedNews__title">Elise, you have 5 saved articles</h2>
        <p className="savedNews__keywords">
          By keywords: {""}
          <span className="savedNews__keywords_bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </section>
      <NewsCardList />
    </>
  );
};

export default SavedNews;
