import { configureStore } from "@reduxjs/toolkit";
import workoutsReducer from "../features/workouts/workoutsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    auth: authReducer,
  },
});
