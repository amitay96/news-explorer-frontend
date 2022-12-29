import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useStore } from "../../contexts/GlobalContext";

import "./NewsCardList.css";

const NewsCardList = () => {
  const { news, isSearching, isFound } = useStore().NewsActions;

  return (
    <>
      <ul className="newsCardList">
        {news.map((card, index) => {
          return (
            <li key={index}>
              <NewsCard image={card.urlToImage} newsCard={card} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsCardList;
