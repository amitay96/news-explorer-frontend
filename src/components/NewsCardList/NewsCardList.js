import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (props) => {
  return (
    <ul className="newsCardList">
      {props.news.map((card) => {
        return <NewsCard newsCard={card} key={card.id} />;
      })}
    </ul>
  );
};

export default NewsCardList;
