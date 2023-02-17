// CSS
import "../styles/ClockSettings.css";
// Data
import { clockSettings } from "../data";
import { useGlobalContext } from "../context";

const ClockSettings = () => {
  return (
    <section className='clock-settings-section'>
      <h2>SETTINGS</h2>
      <form className='clock-settings-section-form'>
        {clockSettings.map((clockSetting) => {
          return <ClockSetting key={clockSetting.id} {...clockSetting} />;
        })}
      </form>
    </section>
  );
};

const ClockSetting = ({ title, inputType }) => {
  const { clockSize, clockColorTheme, setClockSize, setClockColorTheme } =
    useGlobalContext();

  let inputValue;
  let onChangeSetter;

  switch (title) {
    case "CLOCK SIZE":
      inputValue = clockSize;
      onChangeSetter = setClockSize;
      break;
    case "CLOCK ARROW THEME":
      inputValue = clockColorTheme;
      onChangeSetter = setClockColorTheme;
      break;
    default:
      throw new Error("Please provide a valid setting title.");
  }

  return (
    <div className='clock-setting-container'>
      <label htmlFor={title}>
        <button type='submit'>CHANGE {title}</button>
      </label>
      <input
        type={inputType}
        name={title}
        id={title}
        value={inputValue}
        onChange={(e) => onChangeSetter(e.target.value)}
      />
    </div>
  );
};

export default ClockSettings;
