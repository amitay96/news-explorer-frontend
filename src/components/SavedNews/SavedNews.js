import React, { useState, useEffect } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { useStore } from "../../contexts/GlobalContext";
import "./SavedNews.css";

const SavedNews = () => {
  const { currentUser, savedArticles, handleGetSaved } = useStore().UserActions;
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    handleGetSaved();
  }, []);

  useEffect(() => {
    const newArr = savedArticles.map((card) => card.keyword);
    setKeywords([...new Set(newArr)]);
  }, [savedArticles]);

  return (
    <>
      <SavedNewsHeader />
      {keywords.length > 0 ? (
        <section className="savedNews">
          <p className="savedNews__route">Saved articles</p>
          <p className="savedNews__title">
            {currentUser.username}, you have {savedArticles.length} saved
            articles
          </p>
          <p className="savedNews__keywords">
            By keywords: {""}
            {keywords.slice(0, 2).map((word, index) => {
              return (
                <span className="savedNews__keywords_bold" key={index}>
                  {word}
                  {index + 1 < keywords.length && ","}{" "}
                </span>
              );
            })}
            {keywords.length > 2 && `And ${keywords.length - 2} others`}
          </p>
        </section>
      ) : (
        <section className="savedNews">
          <p className="savedNews__route">Saved articles</p>
          <p className="savedNews__title">
            {currentUser.username}, you have 0 saved
            articles
          </p>
        </section>
      )}
      <NewsCardList news={savedArticles} />
    </>
  );
};

export default SavedNews;
