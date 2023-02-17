// React
import React, { useEffect } from "react";
// CSS
import "../styles/ClockDisplay.css";
// Context
import { useGlobalContext } from "../context";
// Clock Arrows
import { TinyArrow, MediumArrow, BigArrow } from "./ClockArrows";

const ClockDisplay = () => {
  const { clockSize } = useGlobalContext();

  useMoveClockArrows();

  return (
    <section
      style={{ transform: `scale(${clockSize})` }}
      className='clock-display-section'
    >
      <img src='https://i.ibb.co/sw8tpRq/692100.png' alt='Clock' />
      <TinyArrow />
      <MediumArrow />
      <BigArrow />
    </section>
  );
};

const useMoveClockArrows = () => {
  const { tinyArrowRef, mediumArrowRef, bigArrowRef } = useGlobalContext();

  useEffect(() => {
    const interval = setInterval(() => {
      if (tinyArrowRef && mediumArrowRef && bigArrowRef) {
        // Elements
        const tinyArrowDOM = tinyArrowRef.current;
        const mediumArrowDOM = mediumArrowRef.current;
        const bigArrowDOM = bigArrowRef.current;

        // Values
        const tinyArrowValue = new Date().getSeconds();
        const mediumArrowValue = new Date().getMinutes();
        const bigArrowValue = new Date().getHours();

        // Setup
        tinyArrowDOM.style.transform = `rotate(${tinyArrowValue * 6}deg)`;
        mediumArrowDOM.style.transform = `rotate(${mediumArrowValue * 6}deg)`;
        bigArrowDOM.style.transform = `rotate(${bigArrowValue * 30}deg)`;
      }
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, [bigArrowRef, mediumArrowRef, tinyArrowRef]);
};

export default ClockDisplay;
