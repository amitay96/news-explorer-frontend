import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({
    name,
    title,
    buttonText,
    isOpen,
    onClose,
    onSubmit,
    children,
}) {
    return (
        <PopupWithForm name="login" title="Login" buttonText={isLoading ? "Logging In..." : "Log in"} isOpen={isSigninPopupOpen} onClose={closeAllPopups} >
            <form className="form" name={name} action="submit" onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    className="auth-form__input"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    className="auth-form__input"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                />
            </form>
            <p className="auth-form__footer-text">
                Not a member yet?{" "}
                <Link to="/signup" className="auth-form__footer-link">
                    Sign up here!
                </Link>
            </p>
        </PopupWithForm>
    );
}

export default Login;
