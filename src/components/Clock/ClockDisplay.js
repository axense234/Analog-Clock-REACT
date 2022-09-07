import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
// Clock Arrows
import { TinyArrow, MediumArrow, BigArrow } from "./ClockArrows";
// CSS
import "../../styles/ClockDisplay.css";
// Redux
import { clockSettings, clockTimings } from "./clockSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTinyArrow,
  updateMediumArrow,
  updateBigArrow,
} from "./clockSlice";

const ClockDisplay = () => {
  const { tinyArrow, mediumArrow, bigArrow } = useSelector(clockTimings);
  const dispatch = useDispatch();
  const { clockSize } = useSelector(clockSettings);

  const { tinyArrowRef, mediumArrowRef, bigArrowRef } = useGlobalContext();

  /*
    Scheme
    clock = 360 deg
    1r = 60 sec => 6 deg = 1s
    1r = 60 min => 6 deg = 1 min
    1r = 12h => 30 deg = 1h

  */

  useEffect(() => {
    if (tinyArrowRef && mediumArrowRef && bigArrowRef) {
      let tinyArrowDOM = tinyArrowRef.current;
      let mediumArrowDOM = mediumArrowRef.current;
      let bigArrowDOM = bigArrowRef.current;
      // Setup
      tinyArrowDOM.style.transform = `rotate(${tinyArrow.payload * 6}deg)`;
      mediumArrowDOM.style.transform = `rotate(${mediumArrow.payload * 6}deg)`;
      bigArrowDOM.style.transform = `rotate(${bigArrow.payload * 30}deg)`;
    }
  });

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(updateTinyArrow(new Date().getSeconds()));
      dispatch(updateMediumArrow(new Date().getMinutes()));
      dispatch(updateBigArrow(new Date().getHours()));
      console.count("Render:");
      console.log({ tinyArrow, mediumArrow, bigArrow });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [
    tinyArrow,
    mediumArrow,
    bigArrow,
    dispatch,
    tinyArrowRef,
    mediumArrowRef,
    bigArrowRef,
  ]);

  return (
    <section
      className={
        clockSize
          ? `clock-display-section ${clockSize.payload}`
          : "clock-display-section"
      }
    >
      <img src="https://i.ibb.co/sw8tpRq/692100.png" alt="Clock" />
      <TinyArrow />
      <MediumArrow />
      <BigArrow />
    </section>
  );
};

export default ClockDisplay;
