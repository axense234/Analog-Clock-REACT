import React from "react";
// Clock Components
import ClockTitle from "./components/Clock/ClockTitle";
import ClockDisplay from "./components/Clock/ClockDisplay";
import ClockSettings from "./components/Clock/ClockSettings";
// Redux
import { Provider } from "react-redux";
import { store } from "./app/store";
// AppProvider
import { AppProvider } from "./context";

const Clock = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <ClockTitle />
        <ClockDisplay />
        <ClockSettings />
      </AppProvider>
    </Provider>
  );
};

export default Clock;
