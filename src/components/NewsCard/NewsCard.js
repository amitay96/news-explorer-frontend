import React from "react";
import "./NewsCard.css";

const NewsCard = (newsCard) => {
  return (
    <li className="newsCard">
      <button className="newsCard__save_button" type="button" />
      <img
        className="newsCard__image"
        src={newsCard.image}
        alt={newsCard.title}
      />
      <div className="newsCard__text-area">
        <p className="newsCard__date">{newsCard.date}</p>
        <p className="newsCard__title">{newsCard.title}</p>
        <p className="newsCard__text">{newsCard.text}</p>
        <p className="newsCard__source">{newsCard.source}</p>
      </div>
    </li>
  );
};

export default NewsCard;
