import React from "react";
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup({ isOpen, onClose, onSubmit }) {
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
              id="email-input"
            />
            <span id="name-input-error"></span>
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
            <span id="name-input-error"></span>
          </label>
          <button
            className="form__button"
            type="submit"
            // onClick={}
          >
            Sign in
          </button>
        </fieldset>
      </form>

      <p className="form__footer-text">
        or{" "}
        <span
          to="/signup"
          className="form__footer-link"
          // onClick={toggle}
        >
          Sign in
        </span>
      </p>
    </Popup>
  );
}

export default Signup;
