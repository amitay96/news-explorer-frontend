import React from "react";
import { savedArticles } from "../../data";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

const SavedNews = (news) => {
  return (
    <section className="savedNews">
      <p className="savedNews__route">Saved articles</p>
      <h2 className="savedNews__title">Elise, you have 5 saved articles</h2>
      <p className="savedNews__keywords">
        By keywords: Nature, Yellowstone, and 2 other
      </p>
      <NewsCardList news={savedArticles} />
    </section>
  );
};

export default SavedNews;
