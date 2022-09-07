import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clockSettings: JSON.parse(localStorage.getItem("clockSettings")) || {
    clockSize: "medium",
    clockArrowColorTheme: "black",
  },
  clockArrowTimes: {
    tinyArrow: new Date().getSeconds(),
    mediumArrow: new Date().getMinutes(),
    bigArrow: new Date().getHours(),
  },
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    updateTinyArrow: (state, newSeconds) => {
      state.clockArrowTimes.tinyArrow = newSeconds;
    },
    updateMediumArrow: (state, newMinutes) => {
      state.clockArrowTimes.mediumArrow = newMinutes;
    },
    updateBigArrow: (state, newHours) => {
      state.clockArrowTimes.bigArrow = newHours;
    },
    changeClockSize: (state, clockSize) => {
      state.clockSettings.clockSize = clockSize;
    },
    changeArrowColorTheme: (state, colorTheme) => {
      state.clockSettings.clockArrowColorTheme = colorTheme;
    },
  },
});

export const clockTimings = (state) => state.clock.clockArrowTimes;
export const clockSettings = (state) => state.clock.clockSettings;

export const {
  updateTinyArrow,
  updateMediumArrow,
  updateBigArrow,
  changeClockSize,
  changeArrowColorTheme,
} = clockSlice.actions;

export default clockSlice.reducer;
