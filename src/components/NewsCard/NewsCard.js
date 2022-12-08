import React from "react";
import { useLocations } from "../../contexts/LocationContext";
import "./NewsCard.css";

const NewsCard = (props) => {
  const { isMain } = useLocations();

  return (
    <li className="newsCard">
      {!isMain && <p className="newsCard__keyword">{props.newsCard.keyword}</p>}
      <button
        className={
          isMain
            ? "newsCard__button newsCard__button_home"
            : "newsCard__button newsCard__button_saved"
        }
        type="button"
        aria-label="save or delete button"
      />
      <p className="newsCard__help">
        {isMain ? "Sign in to save articles" : "Remove from saved"}
      </p>
      <img
        className="newsCard__image"
        src={props.newsCard.image}
        alt={props.newsCard.title}
      />
      <div className="newsCard__text-container">
        <p className="newsCard__date newsCard__text-container-item">
          {props.newsCard.date}
        </p>
        <h2 className="newsCard__title newsCard__text-container-item">
          {props.newsCard.title}
        </h2>
        <p className="newsCard__text newsCard__text-container-item">
          {props.newsCard.text}
        </p>
        <p className="newsCard__source newsCard__text-container-item">
          {props.newsCard.source}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;
