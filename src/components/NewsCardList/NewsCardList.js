import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (news) => {
  return (
    <ul className="newsCardList">
      {news.map((card) => {
        return <NewsCard newsCard={card} key={card._id} />;
      })}
    </ul>
  );
};

export default NewsCardList;
