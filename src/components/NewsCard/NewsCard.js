import React from "react";
import { useLocations } from "../../contexts/LocationContext";
import "./NewsCard.css";

const NewsCard = (props) => {
  const { isMain } = useLocations();
  console.log(isMain);

  return (
    <li className="newsCard">
      <p className="newsCard__keyword">{props.newsCard.keyword}</p>
      <button
        className={
          isMain
            ? "newsCard__button newsCard__button_home"
            : "newsCard__button newsCard__button_saved"
        }
        type="button"
      />
      <p className="newsCard__help">
        {isMain ? "Sign in to save articles" : "Remove from saved"}
      </p>
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
