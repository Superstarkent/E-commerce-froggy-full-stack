import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { signupAsync, loginAsync } from "../thunk/userThunk"; // Import signupAsync and loginAsync from userThunk

export interface UserState {
  isAuthenticated: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  isAuthenticated: false,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuthenticated = true;
      })
      .addCase(signupAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
