import React from "react";
import { savedArticles } from "../../data";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (props) => {
  return (
    <ul className="newsCardList">
      {savedArticles.map((card, index) => {
        return <NewsCard newsCard={card} key={index} />;
      })}
    </ul>
  );
};

export default NewsCardList;
