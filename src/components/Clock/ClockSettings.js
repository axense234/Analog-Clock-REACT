import React from "react";
// CSS
import "../../styles/ClockSettings.css";
// Redux
import {
  clockSettings,
  changeClockSize,
  changeArrowColorTheme,
} from "./clockSlice";
import { useDispatch } from "react-redux";

const ClockSettings = () => {
  const dispatch = useDispatch();

  return (
    <section className="clock-settings-section">
      <h2>SETTINGS</h2>
      <form className="clock-settings-section-form">
        <div>
          <button type="submit">CHANGE CLOCK SIZE</button>
          <label htmlFor="small">Small</label>
          <input
            type="radio"
            name="clockSize"
            id="small"
            value="small"
            onChange={(e) => {
              dispatch(changeClockSize(e.target.value));
            }}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            name="clockSize"
            id="medium"
            value="medium"
            onChange={(e) => {
              dispatch(changeClockSize(e.target.value));
            }}
          />
          <label htmlFor="big">Big</label>
          <input
            type="radio"
            name="clockSize"
            id="big"
            value="big"
            onChange={(e) => {
              dispatch(changeClockSize(e.target.value));
            }}
          />
        </div>
        <div>
          <button type="submit">CHANGE CLOCK ARROW THEME</button>
          <label htmlFor="black">Black</label>
          <input
            type="radio"
            name="color"
            id="black"
            value="black"
            onChange={(e) => {
              dispatch(changeArrowColorTheme(e.target.value));
            }}
          />
          <label htmlFor="yellow">Yellow</label>
          <input
            type="radio"
            name="color"
            id="yellow"
            value="yellow"
            onChange={(e) => {
              dispatch(changeArrowColorTheme(e.target.value));
            }}
          />
          <label htmlFor="pink">Pink</label>
          <input
            type="radio"
            name="color"
            id="pink"
            value="pink"
            onChange={(e) => {
              dispatch(changeArrowColorTheme(e.target.value));
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default ClockSettings;
