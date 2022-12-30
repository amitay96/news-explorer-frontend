import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ news }) => {
  return (
    <ul className="newsCardList">
      {news.map((card, index) => {
        return (
          <li key={index}>
            <NewsCard
              title={card.title}
              text={card.content || card.text}
              date={card.publishedAt|| card.date}
              image={card.urlToImage || card.image}
              source={card.source.name}
              currentCard={card}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NewsCardList;
