// React
import React, { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const tinyArrowRef = useRef(null);
  const mediumArrowRef = useRef(null);
  const bigArrowRef = useRef(null);

  const [clockSize, setClockSize] = useState(1);
  const [clockColorTheme, setClockColorTheme] = useState("#000000");

  return (
    <AppContext.Provider
      value={{
        tinyArrowRef,
        mediumArrowRef,
        bigArrowRef,
        clockSize,
        setClockSize,
        clockColorTheme,
        setClockColorTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
