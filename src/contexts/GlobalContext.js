import React, { useState, createContext, useContext } from "react";
import { useNews } from "./hooks/useNews";
import { useUser } from "./hooks/useUser";

const GlobalContext = createContext();

export const StoreProvider = ({ children }) => {
  const User = useUser();
  const News = useNews();
  const store = { User, News };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  return useContext(GlobalContext);
};
