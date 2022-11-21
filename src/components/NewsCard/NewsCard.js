import React from "react";
import "./NewsCard.css";

const NewsCard = (props) => {
  return (
    <li className="newsCard">
      <button className="newsCard__save_button" type="button" />
      <p className="newsCard__keyword">{props.newsCard.keyword}</p>
      <img
        className="newsCard__image"
        src={props.newsCard.image}
        alt={props.newsCard.title}
      />
      <div className="newsCard__text-area">
        <p className="newsCard__date">{props.newsCard.date}</p>
        <p className="newsCard__title">{props.newsCard.title}</p>
        <p className="newsCard__text">{props.newsCard.text}</p>
        <p className="newsCard__source">{props.newsCard.source}</p>
      </div>
    </li>
  );
};

export default NewsCard;
