import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserApi from "../../utils/MainApi";

export const useUser = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => checkToken(), [loggedIn]);

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("jwt");
      setIsLoading(true);
      if (token) {
        const user = await UserApi.checkToken(token);
        setCurrentUser(user);
        return user;
      } else {
        handleLogout();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const user = await UserApi.login(data);
      localStorage.setItem("jwt", user.token);
      setCurrentUser({ username: user.data.name });
      setLoggedIn(true);
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      const user = await UserApi.register(data);
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({ username: "" });
    setLoggedIn(false);
    history("/");
  };

  return {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    isLoading,
  };
};
