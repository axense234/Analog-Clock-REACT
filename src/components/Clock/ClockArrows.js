import React from "react";
import { useGlobalContext } from "../../context";
// CSS
import "../../styles/ClockArrows.css";
// Redux
import { useSelector } from "react-redux";
import { clockSettings } from "./clockSlice";

const TinyArrow = () => {
  const { tinyArrowRef } = useGlobalContext();
  const { clockArrowColorTheme } = useSelector(clockSettings);

  return (
    <i className="tiny-arrow-container arrow-container" ref={tinyArrowRef}>
      <div
        className={`tiny-arrow arrow arrow-${clockArrowColorTheme.payload}`}
      ></div>
    </i>
  );
};
const MediumArrow = () => {
  const { mediumArrowRef } = useGlobalContext();
  const { clockArrowColorTheme } = useSelector(clockSettings);
  return (
    <i className="medium-arrow-container arrow-container" ref={mediumArrowRef}>
      <div
        className={`medium-arrow arrow arrow-${clockArrowColorTheme.payload}`}
      ></div>
    </i>
  );
};
const BigArrow = () => {
  const { bigArrowRef } = useGlobalContext();
  const { clockArrowColorTheme } = useSelector(clockSettings);
  return (
    <i className="big-arrow-container arrow-container" ref={bigArrowRef}>
      <div
        className={`big-arrow arrow arrow-${clockArrowColorTheme.payload}`}
      ></div>
    </i>
  );
};

export { TinyArrow, MediumArrow, BigArrow };
