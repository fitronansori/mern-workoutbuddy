import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:2001/api/user";

export const signup = createAsyncThunk(
  "/signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/signup`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  user: null,
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
