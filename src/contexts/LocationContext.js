import React, { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [isMain, setIsMain] = useState(true);
  const location = useLocation();

  useEffect(() => {
    location.path !== "/" ? setIsMain(false) : setIsMain(true);
  }, [location]);
  return (
    <LocationContext.Provider value={isMain}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;

export const useLocations = () => {
  return useContext(LocationContext);
};
