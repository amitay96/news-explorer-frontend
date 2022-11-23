import React from "react";
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ isOpen, onClose, onSubmit }) {
  return (
    <Popup name="login" isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Sign in</h2>
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
              //   value={values.email}
              //   onChange={handleChange}
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
              //   value={values.password}
              //   onChange={handleChange}
            />
            <span id="name-input-error"></span>
          </label>
        </fieldset>
        <button className="form__button" type="submit">
          Sign in
        </button>
      </form>

      <p className="form__footer-text">
        or{" "}
        <span to="/signup" className="form__footer-link" onClick={openSignup}>
          Sign up
        </span>
      </p>
    </Popup>
  );
}

export default Login;
