import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";
import { useForm } from "../../utils/useForm";
import "./Signup.css";

const Signup = () => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    username: "",
  });
  const popupContext = usePopup();
  const { handleRegister, isLoading } = useStore();

  const handleSubmit = (evt) => {
    const { email, password, username } = values;
    evt.preventDefault();
    handleRegister({ email, password, name: username });
    popupContext.closeAllPopups();
    popupContext.openPopup("registered");
  };

  return (
    <PopupWithForm
      name="signup"
      title="Sign up"
      buttonText={isLoading ? "Signing in..." : "Sign up"}
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
};

export default Signup;
