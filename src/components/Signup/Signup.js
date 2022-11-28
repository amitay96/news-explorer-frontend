import React from "react";
import Popup from "../Popup/Popup";
import { usePopup } from "../../contexts/PopupContext";

import "./Signup.css";

function Signup({ isOpen, onClose, onSubmit }) {
  const popupContext = usePopup();

  const handleRedirect = () => {
    popupContext.closeAllPopups();
    popupContext.openPopup("signin");
  };

  return (
    <Popup name="signup" isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Sign up</h2>
      <form
        className="form"
        name="login-form"
        action="submit"
        onSubmit={onSubmit}
      >
        <fieldset className="form__fieldset">
          <label className="form__label">
            Email:
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
            Password:
            <input
              type="password"
              name="password"
              className="form__input"
              placeholder="Enter password"
              id="signup-password-input"
            />
            <span id="signup-password-input-error"></span>
          </label>
          <button
            className="form__button"
            type="submit"
            // onClick={}
          >
            Sign up
          </button>
        </fieldset>
      </form>

      <p className="form__footer-text">
        or{" "}
        <span
          to="/signup"
          className="form__footer-link"
          onClick={handleRedirect}
        >
          Sign in
        </span>
      </p>
    </Popup>
  );
}

export default Signup;
