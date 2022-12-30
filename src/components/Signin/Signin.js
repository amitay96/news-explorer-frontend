import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { usePopup } from "../../contexts/PopupContext";
import { useStore } from "../../contexts/GlobalContext";
import { useFormWithValidation } from "../../utils/hooks";
import "./Signin.css";

const Signin = () => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const popupContext = usePopup();
  const { handleLogin, isLoading } = useStore().UserActions;

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
      isButtonValid={isValid}
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
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <p className="form__input_error">
            {errors.email && "Invalid email address entered"}
          </p>
        </label>
        <label className="form__label">
          Password:
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <p className="form__input_error">
            {errors.password && "Invalid password entered"}
          </p>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default Signin;
