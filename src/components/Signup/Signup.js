import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";

import "./Signup.css";

function Signup({ isOpen, onClose, onSubmit }) {
  const popupContext = usePopup();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    popupContext.closeAllPopups();
    popupContext.openPopup("registered");
  };

  return (
    <PopupWithForm
      name="signup"
      title="Sign up"
      buttonText="Sign up"
      redirectText="Sign in"
      isOpen={popupContext.popupStates.signup}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label">
          Email
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter email"
            id="signup-email-input"
          />
          <span id="signup-email-input-error"></span>
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            id="signup-password-input"
          />
          <span id="signup-password-input-error"></span>
        </label>
        <label className="form__label">
          Username
          <input
            type="string"
            name="username"
            className="form__input"
            placeholder="Enter username"
            id="signup-username-input"
          />
          <span id="signup-username-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default Signup;
