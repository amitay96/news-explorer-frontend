import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import "./Signin.css";

const Signin = () => {
  const popupContext = usePopup();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    popupContext.closeAllPopups();
  };

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      buttonText="Login"
      redirectText="Sign up"
      isOpen={popupContext.popupStates.signin}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label">
          Email:
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter email"
            id="email-input"
          />
          <span id="email-input-error"></span>
        </label>
        <label className="form__label">
          Password:
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            id="password-input"
          />
          <span id="password-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
