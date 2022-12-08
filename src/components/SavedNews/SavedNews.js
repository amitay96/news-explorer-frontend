import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { savedArticles } from "../../data/index";
import "./SavedNews.css";

const SavedNews = () => {
  return (
    <>
      <SavedNewsHeader />
      <section className="savedNews">
        <p className="savedNews__route">Saved articles</p>
        <p className="savedNews__title">Elise, you have 5 saved articles</p>
        <p className="savedNews__keywords">
          By keywords: {""}
          <span className="savedNews__keywords_bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </section>
      <NewsCardList news={savedArticles} />
    </>
  );
};

export default SavedNews;
