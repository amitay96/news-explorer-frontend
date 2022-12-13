import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";
import { useForm } from "../../utils/useForm";
import "./Signin.css";

const Signin = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const popupContext = usePopup();
  const { handleLogin, isLoading } = useStore();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
    popupContext.closeAllPopups();
  };

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      buttonText={isLoading ? "Logging in..." : "Login"}
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
            value={values.email}
            onChange={handleChange}
            id="email-input"
            required
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
            value={values.password}
            onChange={handleChange}
            id="password-input"
            required
          />
          <span id="password-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
