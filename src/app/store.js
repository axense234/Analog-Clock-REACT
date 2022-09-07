import { configureStore } from "@reduxjs/toolkit";
// Clock Slice
import clockReducer from "../components/Clock/clockSlice";

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});
