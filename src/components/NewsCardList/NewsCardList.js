import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (props) => {
  return (
    <ul className="newsCardList">
      {props.news.map((card, index) => {
        return <NewsCard newsCard={card} key={index} />;
      })}
    </ul>
  );
};

export default NewsCardList;
