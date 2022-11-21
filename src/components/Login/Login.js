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
          <label className="form__label">Email</label>
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter email"
            //   value={values.email}
            //   onChange={handleChange}
          />
          <label className="form__label">Password</label>
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            //   value={values.password}
            //   onChange={handleChange}
          />
          <button className="form__button" type="submit">
            Sign in
          </button>
        </fieldset>
      </form>

      <p className="form__footer-text">
        or{" "}
        <Link to="/signup" className="form__footer-link">
          Sign up
        </Link>
      </p>
    </Popup>
  );
}

export default Login;
