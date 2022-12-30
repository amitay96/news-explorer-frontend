import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";
import { useFormWithValidation } from "../../utils/hooks";
import "./Signup.css";

const Signup = () => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const popupContext = usePopup();
  const { handleRegister, isLoading } = useStore().UserActions;
  const [formError, setFormError] = useState({ isError: false, message: "" });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password, username } = values;
    const res = await handleRegister({ email, password, name: username });
    if (!res.message) {
      popupContext.closeAllPopups();
      popupContext.openPopup("registered");
      return;
    }
    setFormError({ isError: true, message: res.message });
    setTimeout(() => setFormError({ isError: false, message: "" }), 1500);
  };

  return (
    <PopupWithForm
      name="signup"
      title="Sign up"
      buttonText={isLoading ? "Signing in..." : "Sign up"}
      isButtonValid={isValid}
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
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="form__input_error">
            {errors.email && "Invalid email address entered"}
          </span>
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span className="form__input_error">
            {errors.password && "Invalid password entered"}
          </span>
        </label>
        <label className="form__label">
          Username
          <input
            type="string"
            name="username"
            className="form__input"
            placeholder="Enter username"
            value={values.username || ""}
            onChange={handleChange}
            required
          />
          <span className="form__input_error">
            {errors.username && "Invalid username entered"}
          </span>
        </label>
        <p className="form__error_text">
          {formError.isError && formError.message}
        </p>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signup;
