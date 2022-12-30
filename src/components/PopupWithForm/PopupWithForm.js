import React from "react";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";
import "./PopupWithForm.css";

function PopupWithForm({
  name,
  title,
  buttonText,
  isButtonValid,
  redirectText,
  isOpen,
  onSubmit,
  children,
}) {
  const popupContext = usePopup();

  const handleRedirect = () => {
    const popupToOpen = name === "signin" ? "signup" : "signin";
    popupContext.closeAllPopups();
    popupContext.openPopup(popupToOpen);
  };

  return (
    <Popup isOpen={isOpen} name={name}>
      <h2 className="popup__title">{title}</h2>
      <form className="form" name={name} action="submit" onSubmit={onSubmit}>
        {children}
        <fieldset className="form__fieldset">
          <button
            className={`form__button ${!isButtonValid &&
              "form__button_disabled"}`}
            aria-label="submit button"
            type="submit"
            disabled={!isButtonValid}
          >
            {buttonText}
          </button>
        </fieldset>
      </form>
      <p className="popup__footer-text">
        or{" "}
        <span
          to="/signup"
          className="popup__footer-link"
          onClick={handleRedirect}
        >
          {redirectText}
        </span>
      </p>
    </Popup>
  );
}

export default PopupWithForm;
