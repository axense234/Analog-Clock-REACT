// React
import React from "react";
// Context
import { useGlobalContext } from "../context";
// CSS
import "../styles/ClockArrows.css";

const TinyArrow = () => {
  const { tinyArrowRef, clockColorTheme } = useGlobalContext();

  return (
    <i className='tiny-arrow-container arrow-container' ref={tinyArrowRef}>
      <div
        className='tiny-arrow arrow'
        style={{ backgroundColor: clockColorTheme }}
      />
    </i>
  );
};

const MediumArrow = () => {
  const { mediumArrowRef, clockColorTheme } = useGlobalContext();

  return (
    <i className='medium-arrow-container arrow-container' ref={mediumArrowRef}>
      <div
        className='medium-arrow arrow'
        style={{ backgroundColor: clockColorTheme }}
      />
    </i>
  );
};

const BigArrow = () => {
  const { bigArrowRef, clockColorTheme } = useGlobalContext();
  return (
    <i className='big-arrow-container arrow-container' ref={bigArrowRef}>
      <div
        className='big-arrow arrow'
        style={{ backgroundColor: clockColorTheme }}
      />
    </i>
  );
};

export { TinyArrow, MediumArrow, BigArrow };
