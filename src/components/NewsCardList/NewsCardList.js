import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ news }) => {
  return (
    <ul className="newsCardList">
      {news.map((card, index) => {
        return (
          <li key={index}>
            <NewsCard newsCard={card} />
          </li>
        );
      })}
    </ul>
  );
};

export default NewsCardList;
