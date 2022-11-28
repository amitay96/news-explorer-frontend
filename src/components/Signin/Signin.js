import React from "react";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";
import "./Signin.css";

const Signin = () => {
  const popupContext = usePopup();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRedirect = () => {
    popupContext.closeAllPopups();
    popupContext.openPopup("signin");
  };

  return (
    <Popup name="signin" isOpen={popupContext.popupStates.signin}>
      <h2 className="form__title">Sign in</h2>
      <form
        className="form"
        name="signin-form"
        action="submit"
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
        <button className="form__button" type="submit">
          Sign in
        </button>
      </form>

      <p className="form__footer-text">
        or{" "}
        <span
          to="/signup"
          className="form__footer-link"
          onClick={handleRedirect}
        >
          Sign up
        </span>
      </p>
    </Popup>
  );
};

export default Signin;
