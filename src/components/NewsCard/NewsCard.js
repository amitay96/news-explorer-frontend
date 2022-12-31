import React from "react";
import { useLocations } from "../../contexts/LocationContext";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";

import "./NewsCard.css";

const NewsCard = ({ title, text, date, image, source, currentCard }) => {
  const popupContext = usePopup();
  const { isMain } = useLocations();
  const {
    loggedIn,
    savedArticles,
    handleGetSaved,
    handleSaveArticle,
    handleDeleteSaved,
  } = useStore().UserActions;
  const { keyword } = useStore().NewsActions;

  const dateOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const shortDate = new Date(date).toLocaleDateString("en-US", dateOptions);

  const saveCard = () => {
    handleSaveArticle({
      title,
      text,
      date,
      image,
      source,
      keyword,
      link: currentCard.url,
    });
    handleGetSaved();
  };

  const deleteCardFromSaved = (currentCard) => {
    const cardToDelete = savedArticles.find(
      (card) => card.title === currentCard.title
    );
    handleDeleteSaved(cardToDelete._id);
  };

  const handleCardButton = (card) => {
    isMain
      ? loggedIn
        ? saveCard()
        : popupContext.openPopup("signin")
      : deleteCardFromSaved(card);
  };
  const isSaved = savedArticles.some(
    (card) => card.title === currentCard.title
  );

  return (
    <article className="newsCard">
      {!isMain && <p className="newsCard__keyword">{currentCard.keyword}</p>}
      <button
        className={`newsCard__button ${
          isMain
            ? !isSaved
              ? "newsCard__button_home"
              : "newsCard__button_home-active"
            : "newsCard__button_saved"
        }`}
        type="button"
        aria-label="save or delete button"
        onClick={() => handleCardButton(currentCard)}
      />
      {isMain ? (
        !loggedIn && <p className="newsCard__help">Sign in to save articles</p>
      ) : (
        <p className="newsCard__help">Remove from saved</p>
      )}
      <img className="newsCard__image" src={image} alt={title} />
      <div className="newsCard__text-container">
        <p className="newsCard__date newsCard__text-container-item">
          {shortDate}
        </p>
        <h2 className="newsCard__title newsCard__text-container-item">
          {title}
        </h2>
        <p className="newsCard__text newsCard__text-container-item">{text}</p>
        <p className="newsCard__source newsCard__text-container-item">
          {source}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
