import React, { createContext, useContext, useRef } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const tinyArrowRef = useRef(null);
  const mediumArrowRef = useRef(null);
  const bigArrowRef = useRef(null);

  return (
    <AppContext.Provider value={{ tinyArrowRef, mediumArrowRef, bigArrowRef }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
