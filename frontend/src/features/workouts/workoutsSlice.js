import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    getWorkouts: (state, action) => {
      state.workouts = action.payload;
    },

    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },

    deleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout._id !== action.payload
      );
    },
  },
});

export const { getWorkouts, addWorkout, deleteWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
