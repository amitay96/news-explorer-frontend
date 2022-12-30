import React from "react";
import { useLocations } from "../../contexts/LocationContext";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";

import "./NewsCard.css";

const NewsCard = ({
  title,
  text,
  date,
  image,
  source,
  currentCard,
}) => {
  const { isMain } = useLocations();
  const { loggedIn, savedArticles, handleGetSaved, handleSaveArticle, handleDeleteSaved } = useStore().UserActions;
  const { keyword } = useStore().NewsActions;
  const popupContext = usePopup();

  const dateOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const shortDate = new Date(date).toLocaleDateString(
    "en-US",
    dateOptions
  );

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
}

function deleteCardFromSaved(currentCard) {
  console.log(currentCard);
    const cardToDelete = savedArticles.find(
        (card) => card.title === currentCard.title
    );
    handleDeleteSaved(cardToDelete._id);
}

  const handleCardButton = (card) => {
    if (isMain && loggedIn) saveCard();
    else if (isMain && !loggedIn) popupContext.openPopup("signin");
    else deleteCardFromSaved(card);
  };
  

  return (
    <article className="newsCard">
      {!isMain && <p className="newsCard__keyword">{currentCard.keyword}</p>}
      <button
        className={
          isMain
            ? "newsCard__button newsCard__button_home"
            : "newsCard__button newsCard__button_saved"
        }
        type="button"
        aria-label="save or delete button"
        onClick={() => handleCardButton(currentCard)}
      />
      <p className="newsCard__help">
        {isMain ? (!loggedIn && "Sign in to save articles") : ("Remove from saved")}
      </p>
      <img
        className="newsCard__image"
        src={image}
        alt={title}
      />
      <div className="newsCard__text-container">
        <p className="newsCard__date newsCard__text-container-item">
          {shortDate}
        </p>
        <h2 className="newsCard__title newsCard__text-container-item">
          {title}
        </h2>
        <p className="newsCard__text newsCard__text-container-item">
          {text}
        </p>
        <p className="newsCard__source newsCard__text-container-item">
          {source}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
