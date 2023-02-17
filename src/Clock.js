// Clock Components
import ClockTitle from "./components/ClockTitle";
import ClockDisplay from "./components/ClockDisplay";
import ClockSettings from "./components/ClockSettings";
// AppProvider
import { AppProvider } from "./context";

const Clock = () => {
  return (
    <AppProvider>
      <ClockTitle />
      <ClockDisplay />
      <ClockSettings />
    </AppProvider>
  );
};

export default Clock;
