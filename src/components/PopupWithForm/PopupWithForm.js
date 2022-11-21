import React from "react";
import Popup from "../Popup/Popup";

function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form className="form" name={name} action="submit" onSubmit={onSubmit}>
        {children}
        <fieldset className="form__fieldset">
          <button className="form__button" type="submit">
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
