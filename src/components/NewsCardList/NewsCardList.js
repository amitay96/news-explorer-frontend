import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useStore } from "../../contexts/GlobalContext";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./NewsCardList.css";

const NewsCardList = () => {
  const { news, isSearching, isFound } = useStore().NewsActions;

  return (
    <>
      {isSearching && <Preloader />}
      {!isFound && <NotFound />}
      <ul className="newsCardList">
        {news.map((card, index) => {
          return (
            <li key={index}>
              <NewsCard image={card.urlToImage} newsCard={card} key={index} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsCardList;
