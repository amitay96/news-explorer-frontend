import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import { useForm } from "../../utils/hooks/useForm";

import "./Signup.css";

function Signup({ isOpen, onClose, onSubmit }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    username: "",
  });
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
            value={values.email}
            onChange={handleChange}
            id="signup-email-input"
            required
          />
          <span
            className="form__input_error"
            id="signup-email-input-error"
          ></span>
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            id="signup-password-input"
            required
          />
          <span
            className="form__input_error"
            id="signup-password-input-error"
          ></span>
        </label>
        <label className="form__label">
          Username
          <input
            type="string"
            name="username"
            className="form__input"
            placeholder="Enter username"
            value={values.username}
            onChange={handleChange}
            id="signup-username-input"
            required
          />
          <span
            className="form__input_error"
            id="signup-username-input-error"
          ></span>
        </label>
        <p className="form__error_text"></p>
      </fieldset>
    </PopupWithForm>
  );
}

export default Signup;
